
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { countries } from "./data/Countries";
import { generateCODCopies } from "../utils/copyGenerator";
import { useAuth } from "@/contexts/AuthContext";

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

  const { signOut, isAdmin, isTrialActive } = useAuth();

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
    <div className="min-h-screen bg-black text-white flex">
      {/* Sidebar */}
      <div className="w-60 bg-zinc-900 border-r-2 border-yellow-500 p-6 flex flex-col gap-4">
        <div className="space-y-3">
          <a href="/terms-of-use" className="block text-yellow-500 hover:text-yellow-400 text-sm transition-colors">
            Termos de Uso
          </a>
          <a href="/privacy-policy" className="block text-yellow-500 hover:text-yellow-400 text-sm transition-colors">
            Política de Privacidade
          </a>
          <a href="mailto:inspiranegociosonline@gmail.com" className="block text-yellow-500 hover:text-yellow-400 text-sm transition-colors">
            Contato
          </a>
          <button 
            onClick={signOut}
            className="block text-yellow-500 hover:text-yellow-400 text-sm transition-colors text-left"
          >
            Sair
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-yellow-500 text-black text-center py-5">
          <h1 className="text-2xl md:text-3xl font-bold">COPYFY</h1>
        </header>

        {/* Subtitle */}
        <div className="bg-zinc-900 text-center py-3">
          <p className="text-zinc-400 text-sm md:text-base">
            Copys de Alta Conversão Para Google Ads Com Tradução Para +100 Países
          </p>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6 md:p-10">
          {!campaignGenerated ? (
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="space-y-2">
                <Label htmlFor="country" className="text-yellow-500 font-semibold">
                  Selecione o País:
                </Label>
                <Select value={country} onValueChange={handleCountryChange}>
                  <SelectTrigger className="bg-white text-black border-none">
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
                <Label htmlFor="product" className="text-yellow-500 font-semibold">
                  Digite o Produto:
                </Label>
                <Input
                  id="product"
                  placeholder="Ex: Testoy Gel"
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  className="bg-white text-black border-none"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="price" className="text-yellow-500 font-semibold">
                  Digite o Preço:
                </Label>
                <Input
                  id="price"
                  placeholder="Ex: R$197"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="bg-white text-black border-none"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="funnel" className="text-yellow-500 font-semibold">
                  Selecione a Estratégia de Funil:
                </Label>
                <Select value={funnel} onValueChange={setFunnel}>
                  <SelectTrigger className="bg-white text-black border-none">
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

              <div className="pt-6">
                <Button
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg py-3 h-auto"
                  onClick={handleGenerateCampaign}
                  disabled={isGenerating || (!isTrialActive && !isAdmin)}
                >
                  {isGenerating ? "Gerando..." : "Gerar Campanha"}
                </Button>
              </div>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl md:text-2xl font-bold text-yellow-500">
                  Campanha para {product}
                </h2>
                <Button
                  variant="outline"
                  onClick={() => setCampaignGenerated(false)}
                  className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
                >
                  Nova Campanha
                </Button>
              </div>

              <div className="bg-zinc-900 rounded-lg p-6 space-y-6">
                {/* Títulos */}
                <div>
                  <h3 className="text-yellow-500 font-semibold mb-3">Títulos:</h3>
                  <div className="space-y-2">
                    {titles.map((title, idx) => (
                      <div key={idx} className="bg-black p-3 rounded border border-zinc-700 hover:border-yellow-500 transition-all cursor-pointer" onClick={() => copyToClipboard(title)}>
                        <p className="text-white">{title}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Descrições */}
                <div>
                  <h3 className="text-yellow-500 font-semibold mb-3">Descrições:</h3>
                  <div className="space-y-2">
                    {descriptions.map((desc, idx) => (
                      <div key={idx} className="bg-black p-3 rounded border border-zinc-700 hover:border-yellow-500 transition-all cursor-pointer" onClick={() => copyToClipboard(desc)}>
                        <p className="text-white">{desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sitelinks */}
                <div>
                  <h3 className="text-yellow-500 font-semibold mb-3">Sitelinks:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {sitelinks.map((link, idx) => (
                      <div key={idx} className="bg-black p-3 rounded border border-zinc-700 hover:border-yellow-500 transition-all cursor-pointer" onClick={() => copyToClipboard(`${link.title}: ${link.description}`)}>
                        <h4 className="font-semibold text-yellow-500">{link.title}</h4>
                        <p className="text-sm text-zinc-400">{link.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* USPs */}
                <div>
                  <h3 className="text-yellow-500 font-semibold mb-3">Destaques:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {usps.map((usp, idx) => (
                      <div key={idx} className="bg-black p-3 rounded border border-zinc-700 hover:border-yellow-500 transition-all cursor-pointer" onClick={() => copyToClipboard(usp)}>
                        <p className="text-white">{usp}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CopyfyPanel;
