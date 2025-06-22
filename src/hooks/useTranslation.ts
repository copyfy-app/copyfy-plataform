
import { supabase } from "@/integrations/supabase/client";

interface TranslationCache {
  [key: string]: {
    text: string;
    timestamp: number;
  };
}

interface TranslationResult {
  translatedText: string;
  fromCache: boolean;
}

class TranslationManager {
  private cache: TranslationCache = {};
  private readonly CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours
  private readonly CACHE_KEY = 'copyfy_translation_cache';

  constructor() {
    this.loadCache();
  }

  private loadCache() {
    try {
      const stored = localStorage.getItem(this.CACHE_KEY);
      if (stored) {
        this.cache = JSON.parse(stored);
        // Clean expired entries
        this.cleanExpiredCache();
      }
    } catch (error) {
      console.warn('Failed to load translation cache:', error);
      this.cache = {};
    }
  }

  private saveCache() {
    try {
      localStorage.setItem(this.CACHE_KEY, JSON.stringify(this.cache));
    } catch (error) {
      console.warn('Failed to save translation cache:', error);
    }
  }

  private cleanExpiredCache() {
    const now = Date.now();
    let cleaned = false;
    
    for (const key in this.cache) {
      if (now - this.cache[key].timestamp > this.CACHE_DURATION) {
        delete this.cache[key];
        cleaned = true;
      }
    }
    
    if (cleaned) {
      this.saveCache();
    }
  }

  private getCacheKey(text: string, targetLanguage: string): string {
    return `${targetLanguage}:${text.substring(0, 100)}`;
  }

  private getFromCache(text: string, targetLanguage: string): string | null {
    const key = this.getCacheKey(text, targetLanguage);
    const cached = this.cache[key];
    
    if (cached && (Date.now() - cached.timestamp) < this.CACHE_DURATION) {
      return cached.text;
    }
    
    return null;
  }

  private setCache(text: string, translatedText: string, targetLanguage: string) {
    const key = this.getCacheKey(text, targetLanguage);
    this.cache[key] = {
      text: translatedText,
      timestamp: Date.now()
    };
    this.saveCache();
  }

  async translateTexts(texts: string[], targetLanguage: string): Promise<TranslationResult[]> {
    if (targetLanguage === 'en' || !targetLanguage) {
      return texts.map(text => ({ translatedText: text, fromCache: false }));
    }

    // Check cache first
    const results: TranslationResult[] = [];
    const textsToTranslate: string[] = [];
    const indices: number[] = [];

    texts.forEach((text, index) => {
      const cached = this.getFromCache(text, targetLanguage);
      if (cached) {
        results[index] = { translatedText: cached, fromCache: true };
      } else {
        textsToTranslate.push(text);
        indices.push(index);
      }
    });

    // If all texts were cached, return immediately
    if (textsToTranslate.length === 0) {
      console.log(`All ${texts.length} texts loaded from cache for ${targetLanguage}`);
      return results;
    }

    try {
      console.log(`Translating ${textsToTranslate.length} texts to ${targetLanguage}, ${results.length} from cache`);
      
      const { data, error } = await supabase.functions.invoke('translate-content', {
        body: {
          texts: textsToTranslate,
          targetLanguage,
          sourceLanguage: 'en'
        }
      });

      if (error) {
        console.error('Translation function error:', error);
        // Fallback: return original texts
        indices.forEach((originalIndex, i) => {
          results[originalIndex] = { translatedText: textsToTranslate[i], fromCache: false };
        });
        return results;
      }

      if (data?.translations && Array.isArray(data.translations)) {
        data.translations.forEach((translation: any, i: number) => {
          const originalIndex = indices[i];
          const translatedText = translation.translatedText || textsToTranslate[i];
          
          results[originalIndex] = { translatedText, fromCache: false };
          
          // Cache the translation
          if (translation.translatedText) {
            this.setCache(textsToTranslate[i], translatedText, targetLanguage);
          }
        });
      } else {
        // Fallback: use original texts
        indices.forEach((originalIndex, i) => {
          results[originalIndex] = { translatedText: textsToTranslate[i], fromCache: false };
        });
      }

    } catch (error) {
      console.error('Translation error:', error);
      // Fallback: use original texts
      indices.forEach((originalIndex, i) => {
        results[originalIndex] = { translatedText: textsToTranslate[i], fromCache: false };
      });
    }

    return results;
  }
}

// Singleton instance
const translationManager = new TranslationManager();

export const useTranslation = () => {
  return {
    translateTexts: (texts: string[], targetLanguage: string) => 
      translationManager.translateTexts(texts, targetLanguage)
  };
};
