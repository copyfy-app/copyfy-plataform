
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { ArrowLeft, History, HelpCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCampaignGeneration, CampaignData } from "../hooks/useCampaignGeneration";
import { useCampaignHistory } from "../hooks/useCampaignHistory";
import CampaignForm from "./copyfy/CampaignForm";
import CampaignResults from "./copyfy/CampaignResults";
import HistoryModal from "./modals/HistoryModal";
import HelpModal from "./modals/HelpModal";

const CopyfyPanel = () => {
  const navigate = useNavigate();
  const [showHistory, setShowHistory] = useState(false);
  const [showHelpModal, setShowHelpModal] = useState(false);

  const {
    user,
    signOut,
    isAdmin,
    isTrialActive,
    trialDaysRemaining
  } = useAuth();

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

  const [currentCampaignData, setCurrentCampaignData] = useState<CampaignData | null>(null);

  // Handle navigation back to dashboard
  const handleBackToDashboard = () => {
    navigate("/dashboard");
  };

  // Handle campaign generation
  const handleGenerateCampaign = async (data: CampaignData) => {
    if (!isTrialActive && !isAdmin) {
      toast({
        title: "Trial expired",
        description: "Your free trial period has ended. Subscribe to a plan to continue.",
        variant: "destructive"
      });
      return;
    }

    setCurrentCampaignData(data);
    
    const success = await generateCampaign(data);
    
    if (success) {
      toast({
        title: "Campaign generated successfully!",
        description: `30 unique titles generated in the correct language.`
      });
    } else {
      toast({
        title: "Error generating campaign",
        description: "An error occurred. Please try again.",
        variant: "destructive"
      });
    }
  };

  // Copy to clipboard function
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "Text copied to clipboard."
    });
  };

  // Save campaign to history
  const handleSaveCampaign = () => {
    if (!campaignGenerated || !currentCampaignData || !generatedContent) return;
    
    saveCampaign(currentCampaignData, generatedContent);
    toast({
      title: "Campaign saved!",
      description: "Campaign added to history."
    });
  };

  // Edit campaign from history
  const editCampaign = (campaignString: string) => {
    const campaignData = loadCampaign(campaignString);
    if (!campaignData) {
      toast({
        title: "Error",
        description: "Error loading campaign from history.",
        variant: "destructive"
      });
      return;
    }

    // Set the campaign data for the form and results
    setCurrentCampaignData({
      country: campaignData.country,
      product: campaignData.product,
      price: campaignData.price,
      funnel: campaignData.funnel
    });

    // Set the generated content
    const content = {
      titles: campaignData.titles || [],
      descriptions: campaignData.descriptions || [],
      usps: campaignData.usps || [],
      sitelinks: campaignData.sitelinks || [],
      biddingStrategy: campaignData.biddingStrategy || "",
      snippetValues: [],
      promotions: [],
      priceBlocks: []
    };

    // We need to trigger the campaign generation hook with the loaded data
    // For now, we'll show a message to regenerate
    setShowHistory(false);
    toast({
      title: "Campaign loaded!",
      description: "Generate the campaign again with the loaded data."
    });
  };

  // Delete campaign from history
  const handleDeleteCampaign = (index: number) => {
    deleteCampaign(index);
    toast({
      title: "Campaign deleted",
      description: "Campaign removed from history."
    });
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Fixed Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-yellow-500/20">
        <div className="flex justify-between items-center p-4">
          <Button 
            onClick={handleBackToDashboard} 
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Dashboard
          </Button>

          <div className="flex gap-3">
            <Button 
              onClick={() => setShowHistory(true)} 
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold"
            >
              <History className="w-4 h-4 mr-2" />
              History
            </Button>

            <Button 
              onClick={() => setShowHelpModal(true)} 
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold"
            >
              <HelpCircle className="w-4 h-4 mr-2" />
              Help
            </Button>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="pt-20 pb-8 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-yellow-500">Copy</span>
            <span className="text-white">fy</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-semibold">
            Generate Your Campaigns in Just a Few Clicks
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pb-8">
        <div className="max-w-4xl mx-auto">
          {!campaignGenerated ? (
            <div className="bg-zinc-900 border border-yellow-500/20 rounded-xl p-6 shadow-xl">
              <CampaignForm 
                onGenerate={handleGenerateCampaign} 
                isGenerating={isGenerating}
                canGenerate={isTrialActive || isAdmin}
              />
            </div>
          ) : (
            currentCampaignData && generatedContent && (
              <div className="bg-zinc-900 border border-yellow-500/20 rounded-xl p-6 shadow-xl">
                <CampaignResults
                  campaignData={currentCampaignData}
                  generatedContent={generatedContent}
                  onSave={handleSaveCampaign}
                  onNewCampaign={resetCampaign}
                  onShowHistory={() => setShowHistory(true)}
                  onCopyToClipboard={copyToClipboard}
                />
              </div>
            )
          )}
        </div>
      </main>

      {/* History Modal */}
      <HistoryModal 
        open={showHistory}
        onOpenChange={setShowHistory}
        campaignHistory={campaignHistory}
        onEditCampaign={editCampaign}
        onDeleteCampaign={handleDeleteCampaign}
      />

      {/* Help Modal */}
      <HelpModal 
        open={showHelpModal}
        onOpenChange={setShowHelpModal}
      />
    </div>
  );
};

export default CopyfyPanel;
