
import React, { useState } from 'react';
import CampaignForm from './copyfy/CampaignForm';
import CampaignResults from './copyfy/CampaignResults';
import { useCampaignGeneration } from '../hooks/useCampaignGeneration';
import { useCampaignHistory } from '../hooks/useCampaignHistory';
import HistoryModal from './modals/HistoryModal';
import ManualModal from './modals/ManualModal';
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
  const [showManualModal, setShowManualModal] = useState(false);

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
    setShowManualModal(true);
  };

  const handleUpgradeNow = () => {
    window.open('https://pay.hotmart.com/Q100328287K?checkoutMode=6', '_blank');
  };

  // Check if user can generate campaigns
  const canGenerate = isAdmin || isTrialActive;

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black">
      {/* Fullscreen upgrade popup for expired trials */}
      {!isAdmin && !isTrialActive && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl">
            <div className="mb-6">
              <div className="text-6xl mb-4">⏰</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                Your free trial has expired
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To continue using Copyfy and access all campaign generation features, please purchase a subscription plan.
              </p>
            </div>
            
            <Button 
              onClick={handleUpgradeNow}
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-6 rounded-lg text-lg shadow-lg"
            >
              Upgrade Now
            </Button>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-8">
        {/* Header com botão voltar, manual e título */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex gap-4">
              <Button 
                onClick={handleBackToDashboard}
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-4 md:px-6 py-3 rounded-lg flex items-center gap-2 text-sm md:text-base"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Back to Dashboard</span>
                <span className="sm:hidden">Back</span>
              </Button>
              <Button 
                onClick={handleOpenManual}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-3 md:px-6 py-3 rounded-lg flex items-center gap-2 text-sm md:text-base"
              >
                <BookOpen className="w-4 h-4" />
                <span className="hidden sm:inline">📖 How to Use Manual</span>
                <span className="sm:hidden">📖 Manual</span>
              </Button>
            </div>
            <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-center md:text-left">
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

        {/* Manual Modal */}
        <ManualModal
          open={showManualModal}
          onOpenChange={setShowManualModal}
        />
      </div>
    </div>
  );
};
