
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { supabase } from "@/integrations/supabase/client";

export const TranslationTest = () => {
  const [text, setText] = useState('Get iPhone 15 - Pay $999 on Delivery');
  const [targetLanguage, setTargetLanguage] = useState('pt');
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const testTranslation = async () => {
    setLoading(true);
    try {
      console.log('🧪 Testing translation:', { text, targetLanguage });
      
      const { data, error } = await supabase.functions.invoke('translate-content', {
        body: {
          texts: [text],
          targetLanguage,
          sourceLanguage: 'en'
        }
      });

      console.log('🧪 Test result:', { data, error });
      setResult({ data, error });
    } catch (error) {
      console.error('🧪 Test error:', error);
      setResult({ error: error.message });
    }
    setLoading(false);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto mt-8">
      <CardHeader>
        <CardTitle>🧪 Teste de Tradução Google Translate</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Texto para traduzir:</label>
          <Textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Digite o texto em inglês..."
            rows={3}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Idioma destino:</label>
          <Input
            value={targetLanguage}
            onChange={(e) => setTargetLanguage(e.target.value)}
            placeholder="pt, es, fr, de, etc."
          />
        </div>
        
        <Button onClick={testTranslation} disabled={loading}>
          {loading ? '🔄 Traduzindo...' : '🌐 Testar Tradução'}
        </Button>
        
        {result && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-bold mb-2">Resultado:</h3>
            <pre className="text-sm overflow-auto">
              {JSON.stringify(result, null, 2)}
            </pre>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
