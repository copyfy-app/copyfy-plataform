
import React, { useState } from 'react';
import CampaignForm from './copyfy/CampaignForm';
import CampaignResults from './copyfy/CampaignResults';
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
  const [campaignData, setCampaignData] = useState(null);

  const handleGenerateCampaign = async (data) => {
    setCampaignData(data);
    await generateCampaign(data);
  };

  const handleCopyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const handleSave = () => {
    console.log('Save campaign functionality to be implemented');
  };

  const handleShowHistory = () => {
    console.log('Show history functionality to be implemented');
  };

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
          onGenerate={handleGenerateCampaign} 
          isGenerating={isGenerating}
          canGenerate={true}
        />
      ) : (
        <CampaignResults 
          campaignData={campaignData}
          generatedContent={generatedContent}
          onSave={handleSave}
          onNewCampaign={resetCampaign}
          onShowHistory={handleShowHistory}
          onCopyToClipboard={handleCopyToClipboard}
        />
      )}
    </div>
  );
};
