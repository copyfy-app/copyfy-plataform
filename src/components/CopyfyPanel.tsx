
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
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds

  // Countdown timer effect
  useEffect(() => {
    if (!isAdmin && !isTrialActive && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isAdmin, isTrialActive, timeLeft]);

  // Format time for display
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

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

  const handleGetDiscount = () => {
    window.open('https://pay.hotmart.com/Q100328287K?af=E100479695V&off=tkgky0li&checkoutMode=0&bid=1751064479124', '_blank');
  };

  // Check if user can generate campaigns
  const canGenerate = isAdmin || isTrialActive;

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black">
      {/* Enhanced promotional popup for expired trials */}
      {!isAdmin && !isTrialActive && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.95)' }}>
          <div className="bg-black rounded-xl p-6 sm:p-8 max-w-sm sm:max-w-md lg:max-w-lg w-full text-center border border-gray-800" style={{ 
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.1)',
            borderRadius: '12px'
          }}>
            
            {/* Blinking 15% OFF headline */}
            <div className="mb-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-pulse" style={{ 
                color: '#FACC15',
                textShadow: '0 0 20px rgba(250, 204, 21, 0.5)'
              }}>
                15% OFF
              </h1>
              
              {/* Countdown timer */}
              <div className="bg-red-600 text-white text-xl sm:text-2xl font-bold py-3 px-6 rounded-lg mb-6 mx-auto inline-block" style={{
                boxShadow: '0 4px 12px rgba(239, 68, 68, 0.4)'
              }}>
                {formatTime(timeLeft)}
              </div>
              
              {/* Enhanced text with yellow highlights */}
              <div className="text-white text-sm sm:text-base leading-relaxed space-y-3">
                <p>
                  Your free trial has ended. But you still have 30 minutes to unlock Copyfy with a{' '}
                  <span className="font-bold" style={{ color: '#FACC15' }}>15% discount</span>{' '}
                  — <span className="font-bold" style={{ color: '#FACC15' }}>exclusive for new users</span>.
                </p>
                <p className="font-semibold">
                  Don't miss this chance to get{' '}
                  <span className="font-bold" style={{ color: '#FACC15' }}>full access</span>{' '}
                  and create{' '}
                  <span className="font-bold" style={{ color: '#FACC15' }}>unlimited ad copies with AI</span>.
                </p>
              </div>
            </div>
            
            {/* Enhanced CTA button */}
            <button
              onClick={handleGetDiscount}
              className="w-full font-bold py-4 px-6 rounded-lg text-base sm:text-lg transition-all duration-300 transform hover:scale-105 animate-pulse"
              style={{
                backgroundColor: '#FACC15',
                color: '#000',
                boxShadow: '0 8px 25px rgba(250, 204, 21, 0.4)',
                borderRadius: '8px'
              }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow = '0 12px 35px rgba(250, 204, 21, 0.6)';
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = '0 8px 25px rgba(250, 204, 21, 0.4)';
                e.target.style.transform = 'scale(1)';
              }}
            >
              👉 Get 15% OFF Now
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
