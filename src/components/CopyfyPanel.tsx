
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { countries } from "./data/Countries";
import { generateCODCopies } from "../utils/copyGenerator";
import { useAuth } from "@/contexts/AuthContext";
import { Badge } from "@/components/ui/badge";
import { Copy, FileText, HelpCircle, LogOut, User, Award } from "lucide-react";

const funnelStrategies = [
  { value: "cod", label: "COD (Pagamento na Entrega)" },
  { value: "bottom", label: "Fundo de Funil" },
  { value: "mid", label: "Meio de Funil" },
  { value: "top", label: "Topo de Funil" },
];

const CopyfyPanel = () => {
  const [country, setCountry] = useState("");
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [funnel, setFunnel] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [campaignGenerated, setCampaignGenerated] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("pt");

  const { user, signOut, isAdmin, isTrialActive, trialDaysRemaining } = useAuth();

  // Content states for generated campaign
  const [titles, setTitles] = useState<string[]>([]);
  const [descriptions, setDescriptions] = useState<string[]>([]);
  const [usps, setUsps] = useState<string[]>([]);
  const [sitelinks, setSitelinks] = useState<{title: string; description: string}[]>([]);

  // Update language when country changes
  const handleCountryChange = (countryCode: string) => {
    setCountry(countryCode);
    const countryData = countries.find(c => c.value === countryCode);
    if (countryData) {
      setCurrentLanguage(countryData.languageCode);
    }
  };

  // Handle campaign generation
  const handleGenerateCampaign = () => {
    if (!country || !product || !price || !funnel) {
      toast({
        title: "Campos incompletos",
        description: "Por favor, preencha todos os campos para gerar a campanha.",
        variant: "destructive",
      });
      return;
    }

    // Admin has unlimited access
    if (!isTrialActive && !isAdmin) {
      toast({
        title: "Teste expirado",
        description: "Seu período de teste gratuito acabou. Assine um plano para continuar.",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);

    // Find the country data
    const countryData = countries.find(c => c.value === country);
    const countryName = countryData ? countryData.name : "";
    const languageCode = countryData ? countryData.languageCode : "pt";
    setCurrentLanguage(languageCode);

    console.log('Gerando campanha com:', { product, price, countryName, languageCode, funnel });

    // Generate unique copies using the util function
    setTimeout(() => {
      try {
        const generatedContent = generateCODCopies(
          product, 
          price, 
          countryName, 
          languageCode, 
          funnel
        );

        console.log('Conteúdo gerado:', generatedContent);

        setTitles(generatedContent.titles);
        setDescriptions(generatedContent.descriptions);
        setUsps(generatedContent.usps);
        setSitelinks(generatedContent.sitelinks);

        setCampaignGenerated(true);
        setIsGenerating(false);
        toast({
          title: "Campanha gerada com sucesso!",
          description: "Suas copies estão prontas para uso.",
        });
      } catch (error) {
        console.error('Erro ao gerar campanha:', error);
        setIsGenerating(false);
        toast({
          title: "Erro ao gerar campanha",
          description: "Ocorreu um erro. Tente novamente.",
          variant: "destructive",
        });
      }
    }, 1500);
  };

  // Copy to clipboard function
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copiado!",
      description: "Texto copiado para área de transferência.",
    });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-yellow-500 text-black text-center py-6 shadow-lg">
        <h1 className="text-2xl md:text-3xl font-bold tracking-wide">
          COPYFY - Copys de Alta Conversão Para Google Ads Com Tradução Para +100 Países
        </h1>
      </header>

      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="w-64 bg-zinc-900 shadow-xl border-r border-zinc-700">
          {/* User Info Section */}
          <div className="p-6 border-b border-zinc-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-black" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">
                  {user?.email}
                </p>
                <div className="flex gap-2 mt-1">
                  {isAdmin && (
                    <Badge variant="default" className="bg-red-600 text-white text-xs">
                      ADMIN
                    </Badge>
                  )}
                  <Badge 
                    variant={isTrialActive ? "outline" : "destructive"} 
                    className="text-xs"
                  >
                    {isAdmin
                      ? "Ilimitado"
                      : isTrialActive 
                        ? `Trial: ${trialDaysRemaining}d` 
                        : 'Expirado'}
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="p-6 space-y-4">
            <a 
              href="/terms-of-use" 
              className="flex items-center gap-3 text-yellow-500 hover:text-yellow-400 transition-colors font-medium"
            >
              <FileText className="w-4 h-4" />
              Termos de Uso
            </a>
            <a 
              href="/privacy-policy" 
              className="flex items-center gap-3 text-yellow-500 hover:text-yellow-400 transition-colors font-medium"
            >
              <Award className="w-4 h-4" />
              Política de Privacidade
            </a>
            <a 
              href="mailto:inspiranegociosonline@gmail.com" 
              className="flex items-center gap-3 text-yellow-500 hover:text-yellow-400 transition-colors font-medium"
            >
              <HelpCircle className="w-4 h-4" />
              Contato
            </a>
            <button 
              onClick={signOut}
              className="flex items-center gap-3 text-yellow-500 hover:text-yellow-400 transition-colors font-medium w-full text-left"
            >
              <LogOut className="w-4 h-4" />
              Sair
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {!campaignGenerated ? (
            <div className="p-8 max-w-4xl mx-auto">
              <div className="bg-zinc-900 rounded-lg border border-zinc-700 shadow-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-8 text-center">
                  Gere sua Campanha de Alta Conversão
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="country" className="text-white font-medium">
                      Selecione o país
                    </Label>
                    <Select value={country} onValueChange={handleCountryChange}>
                      <SelectTrigger className="w-full p-4 rounded-lg bg-white text-black border-none text-base shadow-sm">
                        <SelectValue placeholder="Escolha um país" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-zinc-300 max-h-60">
                        {countries.map((country) => (
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
                        {funnelStrategies.map((strategy) => (
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
                      onChange={(e) => setProduct(e.target.value)}
                      className="w-full p-4 rounded-lg bg-white text-black border-none text-base shadow-sm"
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
                      onChange={(e) => setPrice(e.target.value)}
                      className="w-full p-4 rounded-lg bg-white text-black border-none text-base shadow-sm"
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
            <div className="p-8">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-white">
                  Campanha para {product}
                </h2>
                <Button
                  onClick={() => setCampaignGenerated(false)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 py-3 rounded-lg"
                >
                  Nova Campanha
                </Button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Títulos */}
                <div className="bg-zinc-900 rounded-lg border border-zinc-700 p-6">
                  <h3 className="text-white font-bold mb-4 text-xl flex items-center gap-2">
                    <Copy className="w-5 h-5 text-yellow-500" />
                    Títulos
                  </h3>
                  <div className="space-y-3">
                    {titles.map((title, idx) => (
                      <div 
                        key={idx} 
                        className="bg-black p-4 rounded-lg border border-zinc-600 hover:border-yellow-500 transition-all cursor-pointer group" 
                        onClick={() => copyToClipboard(title)}
                      >
                        <p className="text-white group-hover:text-yellow-100 transition-colors">{title}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Descrições */}
                <div className="bg-zinc-900 rounded-lg border border-zinc-700 p-6">
                  <h3 className="text-white font-bold mb-4 text-xl flex items-center gap-2">
                    <FileText className="w-5 h-5 text-yellow-500" />
                    Descrições
                  </h3>
                  <div className="space-y-3">
                    {descriptions.map((desc, idx) => (
                      <div 
                        key={idx} 
                        className="bg-black p-4 rounded-lg border border-zinc-600 hover:border-yellow-500 transition-all cursor-pointer group" 
                        onClick={() => copyToClipboard(desc)}
                      >
                        <p className="text-white group-hover:text-yellow-100 transition-colors">{desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sitelinks */}
                <div className="bg-zinc-900 rounded-lg border border-zinc-700 p-6">
                  <h3 className="text-white font-bold mb-4 text-xl">Sitelinks</h3>
                  <div className="space-y-3">
                    {sitelinks.map((link, idx) => (
                      <div 
                        key={idx} 
                        className="bg-black p-4 rounded-lg border border-zinc-600 hover:border-yellow-500 transition-all cursor-pointer group" 
                        onClick={() => copyToClipboard(`${link.title}: ${link.description}`)}
                      >
                        <h4 className="font-bold text-yellow-500 group-hover:text-yellow-400 transition-colors">{link.title}</h4>
                        <p className="text-sm text-zinc-300 group-hover:text-white transition-colors">{link.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* USPs */}
                <div className="bg-zinc-900 rounded-lg border border-zinc-700 p-6">
                  <h3 className="text-white font-bold mb-4 text-xl">Destaques</h3>
                  <div className="space-y-3">
                    {usps.map((usp, idx) => (
                      <div 
                        key={idx} 
                        className="bg-black p-4 rounded-lg border border-zinc-600 hover:border-yellow-500 transition-all cursor-pointer group" 
                        onClick={() => copyToClipboard(usp)}
                      >
                        <p className="text-white group-hover:text-yellow-100 transition-colors">{usp}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default CopyfyPanel;
