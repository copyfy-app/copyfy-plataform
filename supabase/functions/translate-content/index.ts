
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface TranslationRequest {
  texts: string[];
  targetLanguage: string;
  sourceLanguage?: string;
}

interface GoogleTranslateResponse {
  data: {
    translations: Array<{
      translatedText: string;
      detectedSourceLanguage?: string;
    }>;
  };
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Use the provided API key
    const apiKey = 'AIzaSyCOV1dRSUzFxDNMVRlPtasA_lniRwjgi6I';
    
    console.log('🔑 Google Translate API Key configured');

    const { texts, targetLanguage, sourceLanguage = 'en' }: TranslationRequest = await req.json();

    console.log(`📥 Translation request received:`, {
      textsCount: texts.length,
      targetLanguage,
      sourceLanguage,
      firstText: texts[0]?.substring(0, 100) + '...'
    });

    if (!texts || !Array.isArray(texts) || texts.length === 0) {
      console.error('❌ Invalid texts array');
      return new Response(
        JSON.stringify({ error: 'Invalid texts array' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Skip translation if target language is the same as source
    if (targetLanguage === sourceLanguage || targetLanguage === 'en') {
      console.log('⏩ Skipping translation - same language or English target');
      return new Response(
        JSON.stringify({ 
          translations: texts.map(text => ({ translatedText: text })),
          fromCache: false,
          skipped: true
        }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    console.log(`🌐 Translating ${texts.length} texts from ${sourceLanguage} to ${targetLanguage}`);

    // Batch translate multiple texts at once for efficiency
    const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;
    
    const requestBody = {
      q: texts,
      source: sourceLanguage,
      target: targetLanguage,
      format: 'text'
    };

    console.log('📤 Sending request to Google Translate API:', {
      url: url.replace(apiKey, 'API_KEY_HIDDEN'),
      body: { ...requestBody, q: `[${texts.length} texts]` }
    });
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    console.log(`📥 Google Translate API response status: ${response.status}`);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ Google Translate API error:', response.status, errorText);
      
      // Return original texts as fallback
      return new Response(
        JSON.stringify({ 
          translations: texts.map(text => ({ translatedText: text })),
          error: 'Translation failed, using original text',
          fromCache: false,
          apiError: errorText
        }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    const data: GoogleTranslateResponse = await response.json();
    
    console.log(`✅ Successfully translated ${data.data.translations.length} texts`);
    console.log('📝 First translation result:', {
      original: texts[0]?.substring(0, 50) + '...',
      translated: data.data.translations[0]?.translatedText.substring(0, 50) + '...'
    });

    return new Response(
      JSON.stringify({ 
        translations: data.data.translations,
        fromCache: false
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );

  } catch (error) {
    console.error('❌ Error in translate-content function:', error);
    
    // Always return a fallback response to prevent system crashes
    return new Response(
      JSON.stringify({ 
        error: 'Translation service unavailable',
        translations: [],
        fromCache: false,
        details: error.message
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});
