
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
        title: "Teste expirado",
        description: "Seu período de teste gratuito acabou. Assine um plano para continuar.",
        variant: "destructive"
      });
      return;
    }

    setCurrentCampaignData(data);
    
    const success = await generateCampaign(data);
    
    if (success) {
      toast({
        title: "Campanha gerada com sucesso!",
        description: `30 títulos únicos gerados no idioma correto.`
      });
    } else {
      toast({
        title: "Erro ao gerar campanha",
        description: "Ocorreu um erro. Tente novamente.",
        variant: "destructive"
      });
    }
  };

  // Copy to clipboard function
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copiado!",
      description: "Texto copiado para área de transferência."
    });
  };

  // Save campaign to history
  const handleSaveCampaign = () => {
    if (!campaignGenerated || !currentCampaignData || !generatedContent) return;
    
    saveCampaign(currentCampaignData, generatedContent);
    toast({
      title: "Campanha salva!",
      description: "Campanha adicionada ao histórico."
    });
  };

  // Edit campaign from history
  const editCampaign = (campaignString: string) => {
    const campaignData = loadCampaign(campaignString);
    if (!campaignData) {
      toast({
        title: "Erro",
        description: "Erro ao carregar campanha do histórico.",
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
      title: "Campanha carregada!",
      description: "Gere novamente a campanha com os dados carregados."
    });
  };

  // Delete campaign from history
  const handleDeleteCampaign = (index: number) => {
    deleteCampaign(index);
    toast({
      title: "Campanha excluída",
      description: "Campanha removida do histórico."
    });
  };

  return (
    <div className="min-h-screen text-white bg-gradient-to-br from-black via-yellow-900/20 to-black relative">
      {/* Fixed Back Button */}
      <Button 
        onClick={handleBackToDashboard} 
        className="fixed top-3 left-3 z-50 bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-4 py-2 rounded-lg"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Voltar para o Dashboard
      </Button>

      {/* Fixed History Button */}
      <Button onClick={() => setShowHistory(true)} className="fixed top-3 right-20 z-50 bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-4 py-2 rounded-lg">
        <History className="w-4 h-4 mr-2" />
        Histórico
      </Button>

      {/* Fixed Help Button */}
      <Button onClick={() => setShowHelpModal(true)} className="fixed top-3 right-3 z-50 bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-4 py-2 rounded-lg">
        <HelpCircle className="w-4 h-4 mr-2" />
        Como usar a Copyfy
      </Button>

      {/* Header */}
      <header className="border-b border-zinc-700 py-6 md:py-8 shadow-lg bg-gradient-to-br from-black via-yellow-900/15 to-black pt-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-500 tracking-wide">
              Copy<span className="text-white">fy</span>
            </h1>
            <p className="text-lg md:text-xl font-semibold text-white lg:text-4xl">Gere suas Campanhas em Poucos Cliques</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 md:px-8 py-8">
        {!campaignGenerated ? (
          <CampaignForm 
            onGenerate={handleGenerateCampaign} 
            isGenerating={isGenerating}
            canGenerate={isTrialActive || isAdmin}
          />
        ) : (
          currentCampaignData && generatedContent && (
            <CampaignResults
              campaignData={currentCampaignData}
              generatedContent={generatedContent}
              onSave={handleSaveCampaign}
              onNewCampaign={resetCampaign}
              onShowHistory={() => setShowHistory(true)}
              onCopyToClipboard={copyToClipboard}
            />
          )
        )}
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
