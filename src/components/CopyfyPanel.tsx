
import React, { useState } from 'react';
import CampaignForm from './copyfy/CampaignForm';
import CampaignResults from './copyfy/CampaignResults';
import { useCampaignGeneration } from '../hooks/useCampaignGeneration';
import { useCampaignHistory } from '../hooks/useCampaignHistory';
import HistoryModal from './modals/HistoryModal';
import { Button } from './ui/button';
import { ArrowLeft, History } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const CopyfyPanel = () => {
  const navigate = useNavigate();
  const {
    isGenerating,
    campaignGenerated,
    generatedContent,
    currentLanguage,
    generateCampaign,
    resetCampaign
  } = useCampaignGeneration();

  const {
    campaignHistory,
    saveCampaign,
    deleteCampaign,
    loadCampaign
  } = useCampaignHistory();

  const [campaignData, setCampaignData] = useState(null);
  const [showHistoryModal, setShowHistoryModal] = useState(false);

  const handleGenerateCampaign = async (data) => {
    setCampaignData(data);
    await generateCampaign(data);
  };

  const handleCopyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      // Could add a toast notification here if needed
      console.log('Copied to clipboard:', text.substring(0, 50) + '...');
    });
  };

  const handleSave = () => {
    if (campaignData && generatedContent) {
      saveCampaign(campaignData, generatedContent);
      console.log('Campaign saved successfully!');
      // Could add a toast notification here
    }
  };

  const handleShowHistory = () => {
    setShowHistoryModal(true);
  };

  const handleEditCampaign = (campaignString) => {
    const campaign = loadCampaign(campaignString);
    if (campaign) {
      // Reset current state and load the selected campaign
      resetCampaign();
      setShowHistoryModal(false);
      
      // Set the campaign data for editing
      setCampaignData({
        country: campaign.country,
        product: campaign.product,
        price: campaign.price,
        funnel: campaign.funnel || 'standard'
      });
      
      // You could also pre-populate the form or show the results directly
      console.log('Loading campaign for editing:', campaign);
    }
  };

  const handleDeleteCampaign = (index) => {
    deleteCampaign(index);
  };

  const handleBackToDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black">
      <div className="container mx-auto px-4 py-8">
        {/* Header com botão voltar e título */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex items-center gap-4">
            <Button 
              onClick={handleBackToDashboard}
              variant="outline"
              className="flex items-center gap-2 bg-zinc-800 border-zinc-600 text-white hover:bg-zinc-700"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar ao Dashboard
            </Button>
            <h1 className="text-3xl md:text-4xl font-bold text-yellow-500">
              Copyfy - Gerador de Campanhas COD
            </h1>
          </div>
          
          {campaignGenerated && (
            <Button 
              onClick={handleShowHistory}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-lg flex items-center gap-2"
            >
              <History className="w-4 h-4" />
              Histórico de Campanhas
            </Button>
          )}
        </div>

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

        {/* Modal de Histórico */}
        <HistoryModal
          open={showHistoryModal}
          onOpenChange={setShowHistoryModal}
          campaignHistory={campaignHistory}
          onEditCampaign={handleEditCampaign}
          onDeleteCampaign={handleDeleteCampaign}
        />
      </div>
    </div>
  );
};
