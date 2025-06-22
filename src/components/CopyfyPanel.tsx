
import React, { useState } from 'react';
import { CampaignForm } from './copyfy/CampaignForm';
import { CampaignResults } from './copyfy/CampaignResults';
import { TranslationTest } from './TranslationTest';
import { useCampaignGeneration } from '../hooks/useCampaignGeneration';
import { Button } from './ui/button';

export const CopyfyPanel = () => {
  const {
    isGenerating,
    campaignGenerated,
    generatedContent,
    currentLanguage,
    generateCampaign,
    resetCampaign
  } = useCampaignGeneration();

  const [showTranslationTest, setShowTranslationTest] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Copyfy - Gerador de Campanhas COD</h1>
        <Button 
          variant="outline" 
          onClick={() => setShowTranslationTest(!showTranslationTest)}
        >
          🧪 {showTranslationTest ? 'Ocultar' : 'Mostrar'} Teste de Tradução
        </Button>
      </div>
      
      {showTranslationTest && (
        <div className="mb-8">
          <TranslationTest />
        </div>
      )}

      {!campaignGenerated ? (
        <CampaignForm 
          onGenerate={generateCampaign} 
          isGenerating={isGenerating}
        />
      ) : (
        <CampaignResults 
          content={generatedContent!}
          currentLanguage={currentLanguage}
          onReset={resetCampaign}
        />
      )}
    </div>
  );
};
