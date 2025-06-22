
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
    const apiKey = Deno.env.get('GOOGLE_TRANSLATE_API_KEY');
    
    if (!apiKey) {
      console.error('Google Translate API key not found');
      return new Response(
        JSON.stringify({ error: 'Translation service not configured' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    const { texts, targetLanguage, sourceLanguage = 'en' }: TranslationRequest = await req.json();

    if (!texts || !Array.isArray(texts) || texts.length === 0) {
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
      console.log('Skipping translation - same language or English target');
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

    console.log(`Translating ${texts.length} texts from ${sourceLanguage} to ${targetLanguage}`);

    // Batch translate multiple texts at once for efficiency
    const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        q: texts,
        source: sourceLanguage,
        target: targetLanguage,
        format: 'text'
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Google Translate API error:', response.status, errorText);
      
      // Return original texts as fallback
      return new Response(
        JSON.stringify({ 
          translations: texts.map(text => ({ translatedText: text })),
          error: 'Translation failed, using original text',
          fromCache: false
        }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    const data: GoogleTranslateResponse = await response.json();
    
    console.log(`Successfully translated ${data.data.translations.length} texts`);

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
    console.error('Error in translate-content function:', error);
    
    // Always return a fallback response to prevent system crashes
    return new Response(
      JSON.stringify({ 
        error: 'Translation service unavailable',
        translations: [],
        fromCache: false
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});
