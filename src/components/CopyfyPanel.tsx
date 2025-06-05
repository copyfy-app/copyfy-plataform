
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { countries } from "./data/Countries";
import { generateCODCopies } from "../utils/copyGenerator";
import { useAuth } from "@/contexts/AuthContext";
import { Badge } from "@/components/ui/badge";
import { Copy, FileText, User, Mail, Tag, Gift, DollarSign, ArrowLeft, History } from "lucide-react";
import { useNavigate } from "react-router-dom";

const funnelStrategies = [{
  value: "cod",
  label: "COD (Pagamento na Entrega)"
}, {
  value: "bottom",
  label: "Fundo de Funil"
}, {
  value: "mid",
  label: "Meio de Funil"
}, {
  value: "top",
  label: "Topo de Funil"
}];

const CopyfyPanel = () => {
  const navigate = useNavigate();
  const [country, setCountry] = useState("");
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [funnel, setFunnel] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [campaignGenerated, setCampaignGenerated] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("pt");
  const [showHistory, setShowHistory] = useState(false);
  const [campaignHistory, setCampaignHistory] = useState<string[]>([]);
  const [editingCampaign, setEditingCampaign] = useState<string>("");

  // Contact form states
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isSubmittingContact, setIsSubmittingContact] = useState(false);
  const {
    user,
    signOut,
    isAdmin,
    isTrialActive,
    trialDaysRemaining
  } = useAuth();

  // Content states for generated campaign - now with 30 titles
  const [titles, setTitles] = useState<string[]>([]);
  const [descriptions, setDescriptions] = useState<string[]>([]);
  const [usps, setUsps] = useState<string[]>([]);
  const [sitelinks, setSitelinks] = useState<{
    title: string;
    description1: string;
    description2: string;
    url: string;
  }[]>([]);

  // Load campaign history from localStorage on component mount
  useEffect(() => {
    const history = JSON.parse(localStorage.getItem("historicoCampanhas") || "[]");
    setCampaignHistory(history);
  }, []);

  // Update language when country changes
  const handleCountryChange = (countryCode: string) => {
    setCountry(countryCode);
    const countryData = countries.find(c => c.value === countryCode);
    if (countryData) {
      setCurrentLanguage(countryData.languageCode);
    }
  };

  // Handle contact form submission
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingContact(true);
    setTimeout(() => {
      const mailtoLink = `mailto:inspiranegociosonline@gmail.com?subject=Contato Copyfy - ${contactName}&body=Nome: ${contactName}%0D%0AEmail: ${contactEmail}%0D%0A%0D%0AMensagem:%0D%0A${encodeURIComponent(contactMessage)}`;
      window.location.href = mailtoLink;
      setContactName("");
      setContactEmail("");
      setContactMessage("");
      setIsSubmittingContact(false);
      setIsContactOpen(false);
      toast({
        title: "Redirecionando para email",
        description: "Abrindo seu cliente de email..."
      });
    }, 500);
  };

  // Handle campaign generation
  const handleGenerateCampaign = () => {
    if (!country || !product || !price || !funnel) {
      toast({
        title: "Campos incompletos",
        description: "Por favor, preencha todos os campos para gerar a campanha.",
        variant: "destructive"
      });
      return;
    }
    if (!isTrialActive && !isAdmin) {
      toast({
        title: "Teste expirado",
        description: "Seu período de teste gratuito acabou. Assine um plano para continuar.",
        variant: "destructive"
      });
      return;
    }
    setIsGenerating(true);
    const countryData = countries.find(c => c.value === country);
    const countryName = countryData ? countryData.name : "";
    const languageCode = countryData ? countryData.languageCode : "pt";
    setCurrentLanguage(languageCode);
    console.log('Gerando campanha com:', {
      product,
      price,
      countryName,
      languageCode,
      funnel
    });
    setTimeout(() => {
      try {
        const generatedContent = generateCODCopies(product, price, countryName, languageCode, funnel);
        console.log('Conteúdo gerado:', generatedContent);
        setTitles(generatedContent.titles);
        setDescriptions(generatedContent.descriptions);
        setUsps(generatedContent.usps);
        setSitelinks(generatedContent.sitelinks);
        setCampaignGenerated(true);
        setIsGenerating(false);
        toast({
          title: "Campanha gerada com sucesso!",
          description: `30 títulos únicos gerados no idioma correto para ${countryName}.`
        });
      } catch (error) {
        console.error('Erro ao gerar campanha:', error);
        setIsGenerating(false);
        toast({
          title: "Erro ao gerar campanha",
          description: "Ocorreu um erro. Tente novamente.",
          variant: "destructive"
        });
      }
    }, 1500);
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
  const saveCampaign = () => {
    if (!campaignGenerated) return;
    
    const campaignData = {
      product,
      price,
      country,
      funnel,
      titles,
      descriptions,
      usps,
      sitelinks,
      timestamp: new Date().toISOString()
    };

    const history = JSON.parse(localStorage.getItem("historicoCampanhas") || "[]");
    history.unshift(JSON.stringify(campaignData));
    
    // Keep only last 15 campaigns
    if (history.length > 15) history.pop();
    
    localStorage.setItem("historicoCampanhas", JSON.stringify(history));
    setCampaignHistory(history);
    
    toast({
      title: "Campanha salva!",
      description: "Campanha adicionada ao histórico."
    });
  };

  // Edit campaign from history
  const editCampaign = (campaignString: string) => {
    try {
      const campaignData = JSON.parse(campaignString);
      setProduct(campaignData.product || "");
      setPrice(campaignData.price || "");
      setCountry(campaignData.country || "");
      setFunnel(campaignData.funnel || "");
      setTitles(campaignData.titles || []);
      setDescriptions(campaignData.descriptions || []);
      setUsps(campaignData.usps || []);
      setSitelinks(campaignData.sitelinks || []);
      setCampaignGenerated(true);
      setShowHistory(false);
      
      toast({
        title: "Campanha carregada!",
        description: "Campanha do histórico carregada para edição."
      });
    } catch (error) {
      toast({
        title: "Erro",
        description: "Erro ao carregar campanha do histórico.",
        variant: "destructive"
      });
    }
  };

  // Delete campaign from history
  const deleteCampaign = (index: number) => {
    const history = [...campaignHistory];
    history.splice(index, 1);
    localStorage.setItem("historicoCampanhas", JSON.stringify(history));
    setCampaignHistory(history);
    
    toast({
      title: "Campanha excluída",
      description: "Campanha removida do histórico."
    });
  };

  // Generate structured snippet content
  const generateStructuredSnippet = () => {
    const snippet = `Categoria: Benefícios\nValores: Rápido resultado · Produto original · Envio imediato`;
    return snippet;
  };

  // Generate promotion extension content
  const generatePromotionExtension = () => {
    const promotion = `Ocasião: Oferta por tempo limitado\nProduto: ${product}\nValor com desconto: Apenas ${price}\nCupom: PAGUECOD`;
    return promotion;
  };

  // Generate price extension content
  const generatePriceExtension = () => {
    const countryData = countries.find(c => c.value === country);
    const countryName = countryData ? countryData.name : "";
    
    const priceExtension = `${product} 1 unidade: ${price} - Entrega para todo ${countryName}\n${product} 2 unidades: Desconto especial - Frete grátis\n${product} Kit completo: Melhor custo-benefício`;
    return priceExtension;
  };

  return <div className="min-h-screen text-white bg-black relative">
      {/* Fixed Back Button */}
      <Button
        onClick={() => navigate("/dashboard")}
        className="fixed top-3 left-3 z-50 bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-4 py-2 rounded-lg"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Voltar para o Dashboard
      </Button>

      {/* Fixed History Button */}
      <Button
        onClick={() => setShowHistory(true)}
        className="fixed top-3 right-3 z-50 bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-4 py-2 rounded-lg"
      >
        <History className="w-4 h-4 mr-2" />
        Histórico
      </Button>

      {/* Header */}
      <header className="border-b border-zinc-700 py-6 md:py-8 shadow-lg bg-black pt-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-500 tracking-wide">
              Copy<span className="text-white">fy</span>
            </h1>
            <p className="text-lg md:text-xl font-semibold text-yellow-500 lg:text-4xl">Gere suas Campanhas em Poucos Cliques</p>
          </div>
        </div>
      </header>

      {/* Top Navigation Bar */}
      <nav className="bg-zinc-900 border-b border-zinc-700">
        
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 md:px-8 py-8">
        {!campaignGenerated ? <div className="max-w-4xl mx-auto">
            <div className="border border-zinc-700 shadow-xl p-6 md:p-8 rounded-3xl bg-black">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-8 text-center">
                Gere sua Campanha de Alta Conversão
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="country" className="text-white font-medium">Selecione o País</Label>
                  <Select value={country} onValueChange={handleCountryChange}>
                    <SelectTrigger className="w-full p-4 rounded-lg bg-white text-black border-none text-base shadow-sm">
                      <SelectValue placeholder="Escolha um país" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-zinc-300 max-h-60">
                      {countries.map(country => <SelectItem key={country.value} value={country.value} className="text-black hover:bg-zinc-100">
                          {country.label}
                        </SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="funnel" className="text-white font-medium">
                    Estratégia de Funil
                  </Label>
                  <Select value={funnel} onValueChange={setFunnel}>
                    <SelectTrigger className="w-full p-4 rounded-lg bg-white text-black border-none text-base shadow-sm">
                      <SelectValue placeholder="Escolha uma estratégia" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-zinc-300">
                      {funnelStrategies.map(strategy => <SelectItem key={strategy.value} value={strategy.value} className="text-black hover:bg-zinc-100">
                          {strategy.label}
                        </SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="product" className="text-white font-medium">
                    Nome do Produto
                  </Label>
                  <Input id="product" placeholder="Ex: Testoy Gel" value={product} onChange={e => setProduct(e.target.value)} className="w-full p-4 rounded-lg text-black border-none text-base shadow-sm bg-zinc-50" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="price" className="text-white font-medium">
                    Preço
                  </Label>
                  <Input id="price" placeholder="Ex: R$ 197,00" value={price} onChange={e => setPrice(e.target.value)} className="w-full p-4 rounded-lg text-black border-none text-base shadow-sm bg-zinc-50" />
                </div>
              </div>

              <div className="mt-8 text-center">
                <Button className="w-full md:w-auto bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg py-4 px-8 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105" onClick={handleGenerateCampaign} disabled={isGenerating || !isTrialActive && !isAdmin}>
                  {isGenerating ? "Gerando Campanha..." : "Gerar Campanha"}
                </Button>
              </div>
            </div>
          </div> : <div>
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white text-center md:text-left">
                Campanha para {product}
              </h2>
              <div className="flex gap-4">
                <Button
                  onClick={saveCampaign}
                  className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-lg"
                >
                  Salvar Campanha
                </Button>
                <Button onClick={() => setCampaignGenerated(false)} className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 py-3 rounded-lg">
                  Nova Campanha
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {/* Títulos - Now showing 30 titles */}
              <div className="lg:col-span-2 rounded-lg border border-zinc-700 p-4 md:p-6 bg-gray-950">
                <h3 className="font-bold mb-4 text-lg md:text-xl flex items-center gap-2 text-yellow-500">
                  <Copy className="w-5 h-5 text-yellow-500" />
                  Títulos da Campanha (30 variações)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {titles.map((title, idx) => <div key={idx} className="bg-black p-4 rounded-lg border border-zinc-600 hover:border-yellow-500 transition-all cursor-pointer group" onClick={() => copyToClipboard(title)}>
                      <p className="text-white group-hover:text-yellow-100 transition-colors text-sm break-words">
                        <span className="text-yellow-500 text-xs mr-2">#{idx + 1}</span>
                        {title}
                      </p>
                    </div>)}
                </div>
              </div>

              {/* Descrições */}
              <div className="rounded-lg border border-zinc-700 p-4 md:p-6 bg-gray-950">
                <h3 className="font-bold mb-4 text-lg md:text-xl flex items-center gap-2 text-yellow-500">
                  <FileText className="w-5 h-5 text-yellow-500" />
                  Descrições
                </h3>
                <div className="space-y-3">
                  {descriptions.map((desc, idx) => <div key={idx} className="bg-black p-4 rounded-lg border border-zinc-600 hover:border-yellow-500 transition-all cursor-pointer group" onClick={() => copyToClipboard(desc)}>
                      <p className="text-white group-hover:text-yellow-100 transition-colors text-sm md:text-base break-words">
                        {desc}
                      </p>
                    </div>)}
                </div>
              </div>

              {/* Sitelinks */}
              <div className="rounded-lg border border-zinc-700 p-4 md:p-6 bg-gray-950">
                <h3 className="font-bold mb-4 text-lg md:text-xl text-yellow-500">Sitelinks</h3>
                <div className="space-y-4">
                  {sitelinks.map((link, idx) => <div key={idx} className="bg-black p-4 rounded-lg border border-zinc-600 hover:border-yellow-500 transition-all cursor-pointer group" onClick={() => copyToClipboard(`🔗 Sitelink ${idx + 1}\nTítulo: ${link.title}\nDescrição 1: ${link.description1}\nDescrição 2: ${link.description2}\nURL: ${link.url}`)}>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-yellow-500 text-sm">🔗 Sitelink {idx + 1}</span>
                        </div>
                        <h4 className="font-bold text-yellow-500 group-hover:text-yellow-400 transition-colors text-sm md:text-base">
                          Título: {link.title}
                        </h4>
                        <p className="text-sm text-zinc-300 group-hover:text-white transition-colors">
                          Descrição 1: {link.description1}
                        </p>
                        <p className="text-sm text-zinc-300 group-hover:text-white transition-colors">
                          Descrição 2: {link.description2}
                        </p>
                        <p className="text-xs text-blue-400 group-hover:text-blue-300 transition-colors">
                          URL: {link.url}
                        </p>
                      </div>
                    </div>)}
                </div>
              </div>

              {/* USPs */}
              <div className="rounded-lg border border-zinc-700 p-4 md:p-6 bg-gray-950">
                <h3 className="font-bold mb-4 text-lg md:text-xl text-yellow-500">Frases de Destaques</h3>
                <div className="space-y-3">
                  {usps.map((usp, idx) => <div key={idx} className="bg-black p-4 rounded-lg border border-zinc-600 hover:border-yellow-500 transition-all cursor-pointer group" onClick={() => copyToClipboard(usp)}>
                      <p className="text-white group-hover:text-yellow-100 transition-colors text-sm md:text-base break-words">
                        {usp}
                      </p>
                    </div>)}
                </div>
              </div>

              {/* Snippet Estruturado */}
              <div className="extensao-bloco rounded-lg border border-zinc-700 p-4 md:p-6 bg-gray-950">
                <h3 className="extensao-titulo font-bold mb-4 text-lg md:text-xl text-yellow-500 cursor-pointer" onClick={() => copyToClipboard(`Categoria: Benefícios\nRápido resultado · Produto original · Envio imediato`)}>
                  📌 Snippet Estruturado
                </h3>
                <div className="bg-black p-4 rounded-lg border border-zinc-600 hover:border-yellow-500 transition-all cursor-pointer group" onClick={() => copyToClipboard(`Categoria: Benefícios\nRápido resultado · Produto original · Envio imediato`)}>
                  <p className="extensao-descricao text-sm text-zinc-400 mb-2">Categoria: <strong className="text-yellow-500">Benefícios</strong></p>
                  <p className="extensao-itens text-sm text-white group-hover:text-yellow-100 transition-colors">Rápido resultado · Produto original · Envio imediato</p>
                </div>
              </div>

              {/* Extensão de Promoção */}
              <div className="extensao-bloco rounded-lg border border-zinc-700 p-4 md:p-6 bg-gray-950">
                <h3 className="extensao-titulo font-bold mb-4 text-lg md:text-xl text-yellow-500">
                  🎯 Extensão de Promoção
                </h3>
                <div className="bg-black p-4 rounded-lg border border-zinc-600 hover:border-yellow-500 transition-all cursor-pointer group" onClick={() => copyToClipboard(`Ocasião: Oferta por tempo limitado\nProduto: ${product}\nValor com desconto: Apenas ${price}\nCupom: PAGUECOD`)}>
                  <ul className="extensao-lista space-y-2">
                    <li className="text-sm text-white group-hover:text-yellow-100 transition-colors"><strong className="text-yellow-500">Ocasião:</strong> Oferta por tempo limitado</li>
                    <li className="text-sm text-white group-hover:text-yellow-100 transition-colors"><strong className="text-yellow-500">Produto:</strong> {product}</li>
                    <li className="text-sm text-white group-hover:text-yellow-100 transition-colors"><strong className="text-yellow-500">Valor com desconto:</strong> Apenas {price}</li>
                    <li className="text-sm text-white group-hover:text-yellow-100 transition-colors"><strong className="text-yellow-500">Cupom:</strong> PAGUECOD</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Extensão de Preço - Full width below */}
            <div className="mt-6 md:mt-8 extensao-bloco rounded-lg border border-zinc-700 p-4 md:p-6 bg-gray-950">
              <h3 className="extensao-titulo font-bold mb-4 text-lg md:text-xl text-yellow-500">
                💲 Extensão de Preço
              </h3>
              <div className="bg-black p-4 rounded-lg border border-zinc-600 hover:border-yellow-500 transition-all cursor-pointer group" onClick={() => copyToClipboard(`${product} 1 unidade: ${price} – Entrega para todo ${countries.find(c => c.value === country)?.name || ""}\n${product} 2 unidades: Desconto especial – Frete grátis\n${product} Kit completo: Melhor custo-benefício`)}>
                <ul className="extensao-lista space-y-3">
                  <li className="text-sm text-white group-hover:text-yellow-100 transition-colors">
                    <strong className="text-yellow-500">{product} 1 unidade:</strong> {price} – Entrega para todo {countries.find(c => c.value === country)?.name || ""}
                  </li>
                  <li className="text-sm text-white group-hover:text-yellow-100 transition-colors">
                    <strong className="text-yellow-500">{product} 2 unidades:</strong> Desconto especial – Frete grátis
                  </li>
                  <li className="text-sm text-white group-hover:text-yellow-100 transition-colors">
                    <strong className="text-yellow-500">{product} Kit completo:</strong> Melhor custo-benefício
                  </li>
                </ul>
              </div>
            </div>
          </div>}
      </main>

      {/* History Modal */}
      <Dialog open={showHistory} onOpenChange={setShowHistory}>
        <DialogContent className="bg-zinc-900 border-zinc-700 text-white max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-yellow-500">Histórico de Campanhas</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            {campaignHistory.length === 0 ? (
              <p className="text-zinc-400 text-center py-4">Nenhuma campanha salva ainda.</p>
            ) : (
              campaignHistory.map((campaign, index) => {
                try {
                  const campaignData = JSON.parse(campaign);
                  return (
                    <div key={index} className="border border-zinc-600 p-4 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-yellow-500 font-bold">{campaignData.product}</h3>
                          <p className="text-sm text-zinc-400">
                            {campaignData.price} - {countries.find(c => c.value === campaignData.country)?.name}
                          </p>
                          <p className="text-xs text-zinc-500">
                            {new Date(campaignData.timestamp).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            onClick={() => editCampaign(campaign)}
                            size="sm"
                            className="bg-blue-500 hover:bg-blue-600 text-white"
                          >
                            Editar
                          </Button>
                          <Button
                            onClick={() => deleteCampaign(index)}
                            variant="destructive"
                            size="sm"
                          >
                            Excluir
                          </Button>
                        </div>
                      </div>
                    </div>
                  );
                } catch (error) {
                  return (
                    <div key={index} className="border border-zinc-600 p-4 rounded-lg">
                      <div className="text-sm text-zinc-300 mb-2">
                        {campaign.substring(0, 100)}...
                      </div>
                      <Button
                        onClick={() => deleteCampaign(index)}
                        variant="destructive"
                        size="sm"
                      >
                        Excluir
                      </Button>
                    </div>
                  );
                }
              })
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>;
};

export default CopyfyPanel;
