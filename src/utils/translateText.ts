
import { supabase } from "@/integrations/supabase/client";

export async function translateText(text: string, targetLanguage: string): Promise<string> {
  try {
    const { data, error } = await supabase.functions.invoke('translate-text', {
      body: { text, targetLanguage }
    });

    if (error) {
      console.error('Translation error:', error);
      return text; // fallback to original text
    }

    return data.translatedText || text;
  } catch (error) {
    console.error('Error calling translation function:', error);
    return text; // fallback to original text
  }
}
