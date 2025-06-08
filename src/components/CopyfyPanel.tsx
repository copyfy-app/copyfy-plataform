
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
import { getTranslation, formatTemplate } from "../utils/translations";
import { useAuth } from "@/contexts/AuthContext";
import { Badge } from "@/components/ui/badge";
import { Copy, FileText, User, Mail, Tag, Gift, DollarSign, ArrowLeft, History, HelpCircle, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";

const funnelStrategies = [
  {
    value: "cod",
    label: "COD (Pagamento na Entrega)"
  },
  {
    value: "bottom",
    label: "Fundo de Funil"
  },
  {
    value: "mid",
    label: "Meio de Funil"
  },
  {
    value: "top",
    label: "Topo de Funil"
  }
];

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
  const [showHelpModal, setShowHelpModal] = useState(false);
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

  // Content states for generated campaign - now with 30 titles and bidding strategy
  const [titles, setTitles] = useState<string[]>([]);
  const [descriptions, setDescriptions] = useState<string[]>([]);
  const [usps, setUsps] = useState<string[]>([]);
  const [sitelinks, setSitelinks] = useState<{
    title: string;
    description1: string;
    description2: string;
    url: string;
  }[]>([]);
  const [biddingStrategy, setBiddingStrategy] = useState<string>("");

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
        setBiddingStrategy(generatedContent.biddingStrategy);
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
      biddingStrategy,
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
      setBiddingStrategy(campaignData.biddingStrategy || "");
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

  // Generate structured snippet content with 4 values minimum
  const generateStructuredSnippet = () => {
    const countryData = countries.find(c => c.value === country);
    const languageCode = countryData ? countryData.languageCode : "pt";
    let values = "";
    
    switch (languageCode) {
      case 'es':
        values = "Gel facial, Crema nocturna, Contorno de ojos, Fórmula anti-edad";
        break;
      case 'en':
        values = "Facial serum, Night gel, Eye cream, Anti-aging formula";
        break;
      case 'fr':
        values = "Sérum facial, Gel de nuit, Crème contour des yeux, Formule anti-âge";
        break;
      case 'de':
        values = "Gesichtsserum, Nachtgel, Augencreme, Anti-Aging-Formel";
        break;
      case 'it':
        values = "Siero viso, Gel notte, Crema contorno occhi, Formula anti-età";
        break;
      case 'ja':
        values = "フェイシャルセラム, ナイトジェル, アイクリーム, アンチエイジング";
        break;
      case 'zh':
        values = "面部精华, 夜间凝胶, 眼霜, 抗衰老配方";
        break;
      case 'ar':
        values = "سيروم الوجه، جل ليلي، كريم العين، تركيبة مضادة للشيخوخة";
        break;
      case 'hi':
        values = "चेहरे का सीरम, नाइट जेल, आई क्रीम, एंटी-एजिंग फॉर्मूला";
        break;
      case 'tr':
        values = "Yüz serumu, Gece jeli, Göz kremi, Yaşlanma karşıtı formül";
        break;
      case 'ru':
        values = "Сыворотка для лица, Ночной гель, Крем для глаз, Антивозрастная формула";
        break;
      default:
        values = "Gel facial, Creme noturno, Creme para olhos, Fórmula anti-idade";
    }
    
    const snippet = `Categoria: Benefícios\nValores: ${values}`;
    return snippet;
  };

  // Generate promotion extension content with 3 promotions minimum
  const generatePromotionExtension = () => {
    const countryData = countries.find(c => c.value === country);
    const languageCode = countryData ? countryData.languageCode : "pt";
    const countryName = countryData ? countryData.name : "";
    let promotions = [];
    
    switch (languageCode) {
      case 'es':
        promotions = [
          `Descuento del 20% en el primer pedido`,
          `Envío gratis a toda ${countryName}`,
          `Compra 2 y llévate 3`
        ];
        break;
      case 'en':
        promotions = [
          `20% discount on first order`,
          `Free shipping to all ${countryName}`,
          `Buy 2 get 3`
        ];
        break;
      case 'fr':
        promotions = [
          `Réduction de 20% sur la première commande`,
          `Livraison gratuite dans toute la ${countryName}`,
          `Achetez 2 et obtenez 3`
        ];
        break;
      case 'de':
        promotions = [
          `20% Rabatt auf die erste Bestellung`,
          `Kostenloser Versand nach ganz ${countryName}`,
          `Kaufe 2 und erhalte 3`
        ];
        break;
      case 'it':
        promotions = [
          `Sconto del 20% sul primo ordine`,
          `Spedizione gratuita in tutta ${countryName}`,
          `Compra 2 e prendi 3`
        ];
        break;
      case 'ja':
        promotions = [
          `初回注文20%割引`,
          `${countryName}全国送料無料`,
          `2個買うと3個もらえる`
        ];
        break;
      case 'zh':
        promotions = [
          `首次订单享受20%折扣`,
          `${countryName}全国免费送货`,
          `买2送1`
        ];
        break;
      case 'ar':
        promotions = [
          `خصم 20% على الطلب الأول`,
          `شحن مجاني لجميع أنحاء ${countryName}`,
          `اشتر 2 واحصل على 3`
        ];
        break;
      case 'hi':
        promotions = [
          `पहले ऑर्डर पर 20% छूट`,
          `पूरे ${countryName} में मुफ्त शिपिंग`,
          `2 खरीदें और 3 पाएं`
        ];
        break;
      case 'tr':
        promotions = [
          `İlk siparişte %20 indirim`,
          `Tüm ${countryName}'ye ücretsiz kargo`,
          `2 al 3 öde`
        ];
        break;
      case 'ru':
        promotions = [
          `Скидка 20% на первый заказ`,
          `Бесплатная доставка по всей ${countryName}`,
          `Купи 2, получи 3`
        ];
        break;
      default:
        promotions = [
          `Desconto de 20% no primeiro pedido`,
          `Frete grátis para todo o ${countryName}`,
          `Compre 2 e leve 3`
        ];
    }
    
    return promotions.join('\n');
  };

  // Generate price extension content with 3 price blocks minimum
  const generatePriceExtension = () => {
    const countryData = countries.find(c => c.value === country);
    const countryName = countryData ? countryData.name : "";
    const languageCode = countryData ? countryData.languageCode : "pt";

    // Extract numeric value from price for calculations
    const numericPrice = parseFloat(price.replace(/[^\d.,]/g, '').replace(',', '.')) || 97;
    const currency = price.match(/[^\d\s.,]+/)?.[0] || 'R$';
    let priceBlocks = [];
    
    switch (languageCode) {
      case 'es':
        priceBlocks = [
          `${product} 1 unidad: ${currency}${numericPrice} - Entrega a toda ${countryName}`,
          `${product} Kit 3 unidades: ${currency}${Math.round(numericPrice * 2.1)} - Envío gratis`,
          `${product} Kit completo: ${currency}${Math.round(numericPrice * 3.1)} - Mejor oferta`
        ];
        break;
      case 'en':
        priceBlocks = [
          `${product} 1 unit: ${currency}${numericPrice} - Delivery to all ${countryName}`,
          `${product} 3-unit kit: ${currency}${Math.round(numericPrice * 2.1)} - Free shipping`,
          `${product} Complete kit: ${currency}${Math.round(numericPrice * 3.1)} - Best offer`
        ];
        break;
      case 'fr':
        priceBlocks = [
          `${product} 1 unité: ${currency}${numericPrice} - Livraison dans toute la ${countryName}`,
          `${product} Kit 3 unités: ${currency}${Math.round(numericPrice * 2.1)} - Livraison gratuite`,
          `${product} Kit complet: ${currency}${Math.round(numericPrice * 3.1)} - Meilleure offre`
        ];
        break;
      case 'de':
        priceBlocks = [
          `${product} 1 Einheit: ${currency}${numericPrice} - Lieferung nach ganz ${countryName}`,
          `${product} 3er-Kit: ${currency}${Math.round(numericPrice * 2.1)} - Kostenloser Versand`,
          `${product} Komplettes Kit: ${currency}${Math.round(numericPrice * 3.1)} - Bestes Angebot`
        ];
        break;
      case 'it':
        priceBlocks = [
          `${product} 1 unità: ${currency}${numericPrice} - Consegna in tutta ${countryName}`,
          `${product} Kit 3 unità: ${currency}${Math.round(numericPrice * 2.1)} - Spedizione gratuita`,
          `${product} Kit completo: ${currency}${Math.round(numericPrice * 3.1)} - Migliore offerta`
        ];
        break;
      case 'ja':
        priceBlocks = [
          `${product} 1個: ${currency}${numericPrice} - ${countryName}全国配送`,
          `${product} 3個セット: ${currency}${Math.round(numericPrice * 2.1)} - 送料無料`,
          `${product} コンプリートキット: ${currency}${Math.round(numericPrice * 3.1)} - 最優秀オファー`
        ];
        break;
      case 'zh':
        priceBlocks = [
          `${product} 1件: ${currency}${numericPrice} - 配送至全${countryName}`,
          `${product} 3件套装: ${currency}${Math.round(numericPrice * 2.1)} - 免费送货`,
          `${product} 完整套装: ${currency}${Math.round(numericPrice * 3.1)} - 最优惠价`
        ];
        break;
      case 'ar':
        priceBlocks = [
          `${product} قطعة واحدة: ${currency}${numericPrice} - التوصيل لجميع أنحاء ${countryName}`,
          `${product} طقم 3 قطع: ${currency}${Math.round(numericPrice * 2.1)} - شحن مجاني`,
          `${product} الطقم الكامل: ${currency}${Math.round(numericPrice * 3.1)} - أفضل عرض`
        ];
        break;
      case 'hi':
        priceBlocks = [
          `${product} 1 यूनिट: ${currency}${numericPrice} - पूरे ${countryName} में डिलीवरी`,
          `${product} 3-यूनिट किट: ${currency}${Math.round(numericPrice * 2.1)} - मुफ्त शिपिंग`,
          `${product} कंप्लीट किट: ${currency}${Math.round(numericPrice * 3.1)} - बेस्ट ऑफर`
        ];
        break;
      case 'tr':
        priceBlocks = [
          `${product} 1 adet: ${currency}${numericPrice} - Tüm ${countryName}'ye teslimat`,
          `${product} 3'lü kit: ${currency}${Math.round(numericPrice * 2.1)} - Ücretsiz kargo`,
          `${product} Komple kit: ${currency}${Math.round(numericPrice * 3.1)} - En iyi teklif`
        ];
        break;
      case 'ru':
        priceBlocks = [
          `${product} 1 единица: ${currency}${numericPrice} - Доставка по всей ${countryName}`,
          `${product} Набор из 3: ${currency}${Math.round(numericPrice * 2.1)} - Бесплатная доставка`,
          `${product} Полный набор: ${currency}${Math.round(numericPrice * 3.1)} - Лучшее предложение`
        ];
        break;
      default:
        priceBlocks = [
          `${product} 1 unidade: ${currency}${numericPrice} - Entrega para todo ${countryName}`,
          `${product} Kit 3 unidades: ${currency}${Math.round(numericPrice * 2.1)} - Frete grátis`,
          `${product} Kit completo: ${currency}${Math.round(numericPrice * 3.1)} - Melhor oferta`
        ];
    }
    
    return priceBlocks.join('\n');
  };

  return (
    <div className="min-h-screen text-white bg-gradient-to-br from-black via-yellow-900/20 to-black relative">
      {/* Fixed Back Button */}
      <Button onClick={() => navigate("/dashboard")} className="fixed top-3 left-3 z-50 bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-4 py-2 rounded-lg">
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

      {/* Top Navigation Bar */}
      <nav className="bg-gradient-to-r from-zinc-900 via-yellow-900/10 to-zinc-900 border-b border-zinc-700">
        
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 md:px-8 py-8">
        {!campaignGenerated ? (
          <div className="max-w-4xl mx-auto">
            <div className="border border-zinc-700 shadow-xl p-6 md:p-8 rounded-3xl bg-gradient-to-br from-black via-yellow-900/15 to-black">
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
                      {countries.map(country => (
                        <SelectItem key={country.value} value={country.value} className="text-black hover:bg-zinc-100">
                          {country.label}
                        </SelectItem>
                      ))}
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
                      {funnelStrategies.map(strategy => (
                        <SelectItem key={strategy.value} value={strategy.value} className="text-black hover:bg-zinc-100">
                          {strategy.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="product" className="text-white font-medium">
                    Nome do Produto
                  </Label>
                  <Input 
                    id="product" 
                    placeholder="Ex: Testoy Gel" 
                    value={product} 
                    onChange={e => setProduct(e.target.value)} 
                    className="w-full p-4 rounded-lg text-black border-none text-base shadow-sm bg-zinc-50" 
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="price" className="text-white font-medium">
                    Preço
                  </Label>
                  <Input 
                    id="price" 
                    placeholder="Ex: R$ 197,00" 
                    value={price} 
                    onChange={e => setPrice(e.target.value)} 
                    className="w-full p-4 rounded-lg text-black border-none text-base shadow-sm bg-zinc-50" 
                  />
                </div>
              </div>

              <div className="mt-8 text-center">
                <Button 
                  className="w-full md:w-auto bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg py-4 px-8 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105" 
                  onClick={handleGenerateCampaign} 
                  disabled={isGenerating || (!isTrialActive && !isAdmin)}
                >
                  {isGenerating ? "Gerando Campanha..." : "Gerar Campanha"}
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white text-center md:text-left">
                Campanha para {product}
              </h2>
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <Button onClick={saveCampaign} className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-lg">
                    Salvar Campanha
                  </Button>
                  <Button onClick={() => setCampaignGenerated(false)} className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 py-3 rounded-lg">
                    Nova Campanha
                  </Button>
                </div>
                <Button onClick={() => setShowHistory(true)} className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-lg">
                  <History className="w-4 h-4 mr-2" />
                  Histórico de Campanhas
                </Button>
              </div>
            </div>

            {/* Bidding Strategy Section */}
            <div className="mb-6 md:mb-8 rounded-lg border border-zinc-700 p-4 md:p-6 bg-gradient-to-br from-black via-yellow-900/20 to-black">
              <h3 className="font-bold mb-4 text-lg md:text-xl flex items-center gap-2 text-yellow-500">
                <Target className="w-5 h-5 text-yellow-500" />
                Estratégia de Lance Recomendada
              </h3>
              <div className="bg-gradient-to-br from-black via-yellow-900/10 to-black p-4 rounded-lg border border-zinc-600 hover:border-yellow-500 transition-all cursor-pointer group" onClick={() => copyToClipboard(biddingStrategy)}>
                <p className="text-white group-hover:text-yellow-100 transition-colors text-sm md:text-base break-words">
                  <span className="text-yellow-500 font-semibold">Recomendação:</span> {biddingStrategy}
                </p>
              </div>
            </div>

            {/* Grid principal reorganizado */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {/* Títulos - Now showing 30 titles */}
              <div className="lg:col-span-2 rounded-lg border border-zinc-700 p-4 md:p-6 bg-gradient-to-br from-black via-yellow-900/20 to-black">
                <h3 className="font-bold mb-4 text-lg md:text-xl flex items-center gap-2 text-yellow-500">
                  <Copy className="w-5 h-5 text-yellow-500" />
                  Títulos da Campanha (30 variações)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {titles.map((title, idx) => (
                    <div
                      key={idx}
                      onClick={() => copyToClipboard(title)}
                      className="bg-gradient-to-br from-black via-yellow-900/10 to-black p-4 rounded-lg border border-zinc-600 hover:border-yellow-500 transition-all cursor-pointer group min-h-[80px] flex items-center"
                    >
                      <p className="text-white group-hover:text-yellow-100 transition-colors text-sm break-words">
                        <span className="text-yellow-500 text-xs mr-2">#{idx + 1}</span>
                        {title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Descrições */}
              <div className="rounded-lg border border-zinc-700 p-4 md:p-6 bg-gradient-to-br from-black via-yellow-900/20 to-black">
                <h3 className="font-bold mb-4 text-lg md:text-xl flex items-center gap-2 text-yellow-500">
                  <FileText className="w-5 h-5 text-yellow-500" />
                  Descrições (30 variações)
                </h3>
                <div className="space-y-3">
                  {descriptions.map((desc, idx) => (
                    <div
                      key={idx}
                      className="bg-gradient-to-br from-black via-yellow-900/10 to-black p-4 rounded-lg border border-zinc-600 hover:border-yellow-500 transition-all cursor-pointer group min-h-[100px] flex items-center"
                      onClick={() => copyToClipboard(desc)}
                    >
                      <p className="text-white group-hover:text-yellow-100 transition-colors text-sm md:text-base break-words">
                        <span className="text-yellow-500 text-xs mr-2">#{idx + 1}</span>
                        {desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* USPs */}
              <div className="rounded-lg border border-zinc-700 p-4 md:p-6 bg-gradient-to-br from-black via-yellow-900/20 to-black">
                <h3 className="font-bold mb-4 text-lg md:text-xl text-yellow-500">Frases de Destaques (30 variações)</h3>
                <div className="space-y-3">
                  {usps.map((usp, idx) => (
                    <div
                      key={idx}
                      className="bg-gradient-to-br from-black via-yellow-900/10 to-black p-4 rounded-lg border border-zinc-600 hover:border-yellow-500 transition-all cursor-pointer group min-h-[100px] flex items-center"
                      onClick={() => copyToClipboard(usp)}
                    >
                      <p className="text-white group-hover:text-yellow-100 transition-colors text-sm md:text-base break-words">
                        <span className="text-yellow-500 text-xs mr-2">#{idx + 1}</span>
                        {usp}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Grid de extensões com layout uniforme - TODOS OS BLOCOS COM MESMA ALTURA */}
            <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Snippet Estruturado */}
              <div className="rounded-lg border border-zinc-700 p-4 md:p-6 bg-gradient-to-br from-black via-yellow-900/20 to-black min-h-[280px] flex flex-col">
                <h3 className="font-bold mb-4 text-lg md:text-xl text-yellow-500 cursor-pointer" onClick={() => copyToClipboard(generateStructuredSnippet())}>
                  📌 Snippet Estruturado
                </h3>
                <div className="bg-gradient-to-br from-black via-yellow-900/10 to-black p-4 rounded-lg border border-zinc-600 hover:border-yellow-500 transition-all cursor-pointer group flex-grow flex flex-col justify-center" onClick={() => copyToClipboard(generateStructuredSnippet())}>
                  <p className="text-sm text-zinc-400 mb-2">Categoria: <strong className="text-yellow-500">Benefícios</strong></p>
                  <p className="text-sm text-white group-hover:text-yellow-100 transition-colors">
                    {generateStructuredSnippet().split('\n')[1].replace('Valores: ', '')}
                  </p>
                </div>
              </div>

              {/* Extensão de Promoção */}
              <div className="rounded-lg border border-zinc-700 p-4 md:p-6 bg-gradient-to-br from-black via-yellow-900/20 to-black min-h-[280px] flex flex-col">
                <h3 className="font-bold mb-4 text-lg md:text-xl text-yellow-500">
                  🎯 Extensão de Promoção
                </h3>
                <div className="bg-gradient-to-br from-black via-yellow-900/10 to-black p-4 rounded-lg border border-zinc-600 hover:border-yellow-500 transition-all cursor-pointer group flex-grow flex flex-col justify-center" onClick={() => copyToClipboard(generatePromotionExtension())}>
                  <div className="space-y-2">
                    {generatePromotionExtension().split('\n').map((promo, idx) => (
                      <div key={idx} className="text-sm text-white group-hover:text-yellow-100 transition-colors">
                        <strong className="text-yellow-500">Promoção {idx + 1}:</strong> {promo}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Extensão de Preço */}
              <div className="rounded-lg border border-zinc-700 p-4 md:p-6 bg-gradient-to-br from-black via-yellow-900/20 to-black min-h-[280px] flex flex-col">
                <h3 className="font-bold mb-4 text-lg md:text-xl text-yellow-500">
                  💲 Extensão de Preço
                </h3>
                <div className="bg-gradient-to-br from-black via-yellow-900/10 to-black p-4 rounded-lg border border-zinc-600 hover:border-yellow-500 transition-all cursor-pointer group flex-grow flex flex-col justify-center" onClick={() => copyToClipboard(generatePriceExtension())}>
                  <div className="space-y-3">
                    {generatePriceExtension().split('\n').map((priceBlock, idx) => (
                      <div key={idx} className="text-sm text-white group-hover:text-yellow-100 transition-colors">
                        <strong className="text-yellow-500">Opção {idx + 1}:</strong> {priceBlock}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sitelinks - Movidos para último e em layout horizontal */}
            <div className="mt-6 md:mt-8">
              <div className="rounded-lg border border-zinc-700 p-4 md:p-6 bg-gradient-to-br from-black via-yellow-900/20 to-black">
                <h3 className="font-bold mb-4 text-lg md:text-xl text-yellow-500">🔗 Sitelinks (30 variações)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {sitelinks.map((link, idx) => (
                    <div
                      key={idx}
                      className="bg-gradient-to-br from-black via-yellow-900/10 to-black p-4 rounded-lg border border-zinc-600 hover:border-yellow-500 transition-all cursor-pointer group min-h-[200px] flex flex-col justify-between"
                      onClick={() => copyToClipboard(`🔗 Sitelink ${idx + 1}\nTítulo: ${link.title}\nDescrição 1: ${link.description1}\nDescrição 2: ${link.description2}\nURL: ${link.url}`)}
                    >
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-yellow-500 text-xs">🔗 #{idx + 1}</span>
                        </div>
                        <h4 className="font-bold text-yellow-500 group-hover:text-yellow-400 transition-colors text-sm">
                          {link.title}
                        </h4>
                        <p className="text-xs text-zinc-300 group-hover:text-white transition-colors line-clamp-2">
                          {link.description1}
                        </p>
                        <p className="text-xs text-zinc-300 group-hover:text-white transition-colors line-clamp-2">
                          {link.description2}
                        </p>
                      </div>
                      <p className="text-xs text-blue-400 group-hover:text-blue-300 transition-colors truncate mt-2">
                        {link.url}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Help Modal */}
      <Dialog open={showHelpModal} onOpenChange={setShowHelpModal}>
        <DialogContent className="bg-black/90 backdrop-blur-xl border border-yellow-500/30 text-white max-w-2xl max-h-[80vh] overflow-y-auto rounded-2xl shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-yellow-500 text-2xl font-bold text-center mb-6">
              📘 Como Usar a Copyfy (Passo a Passo)
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6 p-2">
            <div className="space-y-4">
              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                <h3 className="text-yellow-500 font-bold text-lg mb-2">🌍 Escolha o País:</h3>
                <p className="text-gray-300">Selecione o país da campanha. A copy será traduzida automaticamente.</p>
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                <h3 className="text-yellow-500 font-bold text-lg mb-2">📦 Preencha o Produto:</h3>
                <p className="text-gray-300">Digite o nome do produto ou oferta que você está promovendo.</p>
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                <h3 className="text-yellow-500 font-bold text-lg mb-2">💰 Informe o Preço:</h3>
                <p className="text-gray-300">Coloque o preço do produto (com símbolo local se quiser).</p>
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                <h3 className="text-yellow-500 font-bold text-lg mb-2">🎯 Escolha a Estratégia:</h3>
                <p className="text-gray-300">Selecione o tipo de funil (Topo, Meio, Fundo ou COD).</p>
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                <h3 className="text-yellow-500 font-bold text-lg mb-2">⚡ Clique em "Gerar Campanha":</h3>
                <p className="text-gray-300">Pronto! Receba todos os textos (título, descrição, snippets, sitelinks e muito mais), otimizados para Google Ads.</p>
              </div>

              <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 border border-yellow-500/30 rounded-lg p-4">
                <h3 className="text-yellow-400 font-bold text-lg mb-2">💡 Dica:</h3>
                <p className="text-yellow-100">Copie e cole direto no Google Ads. Todas as traduções e adaptações regionais já vêm prontas para conversão.</p>
              </div>
            </div>

            <div className="text-center pt-6">
              <Button onClick={() => setShowHelpModal(false)} className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg py-3 px-8 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105">
                Fechar
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

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
                          <Button onClick={() => editCampaign(campaign)} size="sm" className="bg-blue-500 hover:bg-blue-600 text-white">
                            Editar
                          </Button>
                          <Button onClick={() => deleteCampaign(index)} variant="destructive" size="sm">
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
                      <Button onClick={() => deleteCampaign(index)} variant="destructive" size="sm">
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
    </div>
  );
};

export default CopyfyPanel;
