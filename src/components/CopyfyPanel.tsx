
import React, { useState, useEffect } from 'react';
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
  const { user } = useAuth();
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
  const [showWelcomePopup, setShowWelcomePopup] = useState(false);

  // Check if welcome popup should be shown (only once after first login)
  useEffect(() => {
    if (user) {
      const welcomeShown = localStorage.getItem(`welcomeShown_${user.id}`);
      if (!welcomeShown) {
        setShowWelcomePopup(true);
      }
    }
  }, [user]);

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

  const handleWelcomeStart = () => {
    // Mark welcome as shown
    if (user) {
      localStorage.setItem(`welcomeShown_${user.id}`, 'true');
    }
    setShowWelcomePopup(false);
    // Redirect to campaign generator
    navigate('/copyfy');
  };

  // All logged-in users can generate campaigns
  const canGenerate = !!user;

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black">
      {/* Welcome popup for new users */}
      {showWelcomePopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.95)' }}>
          <div className="bg-black rounded-xl p-6 sm:p-8 max-w-sm sm:max-w-md lg:max-w-lg w-full text-center border border-gray-800" style={{ 
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.1)',
            borderRadius: '12px'
          }}>
            
            {/* Welcome content */}
            <div className="mb-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" style={{ 
                color: '#FACC15',
                textShadow: '0 0 20px rgba(250, 204, 21, 0.5)'
              }}>
                🎉 Welcome to Copyfy Pro!
              </h1>
              
              {/* Welcome text */}
              <div className="text-white text-base sm:text-lg leading-relaxed space-y-4 mb-8">
                <p>
                  You now have{' '}
                  <span className="font-bold" style={{ color: '#FACC15' }}>full access</span>{' '}
                  to generate high-converting campaigns using AI.
                </p>
                <p>
                  🚀 Click below to get started:
                </p>
              </div>
            </div>
            
            {/* Start Now button */}
            <button
              onClick={handleWelcomeStart}
              className="w-full font-bold py-4 px-6 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
              style={{
                backgroundColor: '#FACC15',
                color: '#000',
                boxShadow: '0 8px 25px rgba(250, 204, 21, 0.4)',
                borderRadius: '8px'
              }}
              onMouseEnter={(e) => {
                const target = e.target as HTMLButtonElement;
                target.style.boxShadow = '0 12px 35px rgba(250, 204, 21, 0.6)';
                target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                const target = e.target as HTMLButtonElement;
                target.style.boxShadow = '0 8px 25px rgba(250, 204, 21, 0.4)';
                target.style.transform = 'scale(1)';
              }}
            >
              Start Using Copyfy
            </button>
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
