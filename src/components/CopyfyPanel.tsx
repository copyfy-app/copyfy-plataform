
import React, { useState } from 'react';
import CampaignForm from './copyfy/CampaignForm';
import CampaignResults from './copyfy/CampaignResults';
import { useCampaignGeneration } from '../hooks/useCampaignGeneration';
import { useCampaignHistory } from '../hooks/useCampaignHistory';
import HistoryModal from './modals/HistoryModal';
import { Button } from './ui/button';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export const CopyfyPanel = () => {
  const navigate = useNavigate();
  const { isTrialActive, isAdmin } = useAuth();
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

  const handleOpenManual = () => {
    window.open('https://docs.google.com/document/d/1Hj8K5rVvB9L2M8N3P4Q5R6S7T8U9V0W1X2Y3Z/edit', '_blank');
  };

  // Check if user can generate campaigns
  const canGenerate = isAdmin || isTrialActive;

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black">
      <div className="container mx-auto px-4 py-8">
        {/* Header com botão voltar, manual e título */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex gap-4">
              <Button 
                onClick={handleBackToDashboard}
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 py-3 rounded-lg flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar ao Dashboard
              </Button>
              <Button 
                onClick={handleOpenManual}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-lg flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                📖 How to Use Manual
              </Button>
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center md:text-left">
              <span className="text-yellow-500">Copy</span><span className="text-white">fy</span> - COD Campaign Generator
            </h1>
          </div>
        </div>

        {!campaignGenerated ? (
          <CampaignForm 
            onGenerate={handleGenerateCampaign} 
            isGenerating={isGenerating}
            canGenerate={canGenerate}
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
