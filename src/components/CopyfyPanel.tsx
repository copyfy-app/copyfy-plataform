
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { countries } from "./data/Countries";
import { generateCODCopies } from "../utils/copyGenerator";
import { useAuth } from "@/contexts/AuthContext";
import { Badge } from "@/components/ui/badge";
import { Copy, FileText, User, Mail, Tag, Gift, DollarSign } from "lucide-react";

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
  const [country, setCountry] = useState("");
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [funnel, setFunnel] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [campaignGenerated, setCampaignGenerated] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("pt");

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

  // Content states for generated campaign
  const [titles, setTitles] = useState<string[]>([]);
  const [descriptions, setDescriptions] = useState<string[]>([]);
  const [usps, setUsps] = useState<string[]>([]);
  const [sitelinks, setSitelinks] = useState<{
    title: string;
    description1: string;
    description2: string;
    url: string;
  }[]>([]);

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
          description: "Suas copies estão prontas para uso."
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

  return <div className="min-h-screen text-white bg-black">
      {/* Header */}
      <header className="border-b border-zinc-700 py-6 md:py-8 shadow-lg bg-black">
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
              <Button onClick={() => setCampaignGenerated(false)} className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 py-3 rounded-lg">
                Nova Campanha
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {/* Títulos */}
              <div className="rounded-lg border border-zinc-700 p-4 md:p-6 bg-gray-950">
                <h3 className="font-bold mb-4 text-lg md:text-xl flex items-center gap-2 text-yellow-500">
                  <Copy className="w-5 h-5 text-yellow-500" />
                  Títulos
                </h3>
                <div className="space-y-3">
                  {titles.map((title, idx) => <div key={idx} className="bg-black p-4 rounded-lg border border-zinc-600 hover:border-yellow-500 transition-all cursor-pointer group" onClick={() => copyToClipboard(title)}>
                      <p className="text-white group-hover:text-yellow-100 transition-colors text-sm md:text-base break-words">
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
              <div className="rounded-lg border border-zinc-700 p-4 md:p-6 bg-gray-950">
                <h3 className="font-bold mb-4 text-lg md:text-xl flex items-center gap-2 text-yellow-500">
                  <Tag className="w-5 h-5 text-yellow-500" />
                  Snippet Estruturado
                </h3>
                <p className="text-zinc-400 mb-4 text-sm">Exibe categorias com valores adicionais (ex: Marcas, Tipos, Benefícios)</p>
                <div className="bg-black p-4 rounded-lg border border-zinc-600 hover:border-yellow-500 transition-all cursor-pointer group" onClick={() => copyToClipboard(generateStructuredSnippet())}>
                  <div className="space-y-2">
                    <p className="text-white group-hover:text-yellow-100 transition-colors text-sm md:text-base">
                      <strong className="text-yellow-500">Categoria:</strong> Benefícios
                    </p>
                    <p className="text-white group-hover:text-yellow-100 transition-colors text-sm md:text-base">
                      <strong className="text-yellow-500">Valores:</strong> Rápido resultado · Produto original · Envio imediato
                    </p>
                  </div>
                </div>
              </div>

              {/* Extensão de Promoção */}
              <div className="rounded-lg border border-zinc-700 p-4 md:p-6 bg-gray-950">
                <h3 className="font-bold mb-4 text-lg md:text-xl flex items-center gap-2 text-yellow-500">
                  <Gift className="w-5 h-5 text-yellow-500" />
                  Extensão de Promoção
                </h3>
                <p className="text-zinc-400 mb-4 text-sm">Mostra promoções ativas no anúncio</p>
                <div className="bg-black p-4 rounded-lg border border-zinc-600 hover:border-yellow-500 transition-all cursor-pointer group" onClick={() => copyToClipboard(generatePromotionExtension())}>
                  <div className="space-y-2">
                    <p className="text-white group-hover:text-yellow-100 transition-colors text-sm md:text-base">
                      <strong className="text-yellow-500">Ocasião:</strong> Oferta por tempo limitado
                    </p>
                    <p className="text-white group-hover:text-yellow-100 transition-colors text-sm md:text-base">
                      <strong className="text-yellow-500">Produto:</strong> {product}
                    </p>
                    <p className="text-white group-hover:text-yellow-100 transition-colors text-sm md:text-base">
                      <strong className="text-yellow-500">Valor com desconto:</strong> Apenas {price}
                    </p>
                    <p className="text-white group-hover:text-yellow-100 transition-colors text-sm md:text-base">
                      <strong className="text-yellow-500">Cupom:</strong> PAGUECOD
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Extensão de Preço - Full width below */}
            <div className="mt-6 md:mt-8 rounded-lg border border-zinc-700 p-4 md:p-6 bg-gray-950">
              <h3 className="font-bold mb-4 text-lg md:text-xl flex items-center gap-2 text-yellow-500">
                <DollarSign className="w-5 h-5 text-yellow-500" />
                Extensão de Preço
              </h3>
              <p className="text-zinc-400 mb-4 text-sm">Lista variações com valores clicáveis</p>
              <div className="bg-black p-4 rounded-lg border border-zinc-600 hover:border-yellow-500 transition-all cursor-pointer group" onClick={() => copyToClipboard(generatePriceExtension())}>
                <div className="space-y-3">
                  <div className="text-white group-hover:text-yellow-100 transition-colors text-sm md:text-base">
                    <strong className="text-yellow-500">{product} 1 unidade:</strong> {price} - Entrega para todo {countries.find(c => c.value === country)?.name || ""}
                  </div>
                  <div className="text-white group-hover:text-yellow-100 transition-colors text-sm md:text-base">
                    <strong className="text-yellow-500">{product} 2 unidades:</strong> Desconto especial - Frete grátis
                  </div>
                  <div className="text-white group-hover:text-yellow-100 transition-colors text-sm md:text-base">
                    <strong className="text-yellow-500">{product} Kit completo:</strong> Melhor custo-benefício
                  </div>
                </div>
              </div>
            </div>
          </div>}
      </main>
    </div>;
};

export default CopyfyPanel;
