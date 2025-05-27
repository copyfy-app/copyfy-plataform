
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
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-yellow-500 text-black text-center py-4">
        <h1 className="text-xl md:text-2xl font-bold">COPYFY - Copys de Alta Conversão Para Google Ads Com Tradução Para +100 Países</h1>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-56 bg-zinc-900 p-5 flex flex-col gap-3 min-h-screen">
          <a href="/terms-of-use" className="text-yellow-500 font-bold hover:text-yellow-400 transition-colors">
            Termos de Uso
          </a>
          <a href="/privacy-policy" className="text-yellow-500 font-bold hover:text-yellow-400 transition-colors">
            Política de Privacidade
          </a>
          <a href="mailto:inspiranegociosonline@gmail.com" className="text-yellow-500 font-bold hover:text-yellow-400 transition-colors">
            Contato
          </a>
          <button 
            onClick={signOut}
            className="text-yellow-500 font-bold hover:text-yellow-400 transition-colors text-left"
          >
            Sair
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {!campaignGenerated ? (
            <div className="max-w-2xl space-y-5">
              <div className="space-y-2">
                <Label htmlFor="country" className="text-white">
                  Selecione o país
                </Label>
                <Select value={country} onValueChange={handleCountryChange}>
                  <SelectTrigger className="w-full p-3 rounded-md bg-white text-black border-none text-base">
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
                <Label htmlFor="product" className="text-white">
                  Nome do Produto
                </Label>
                <Input
                  id="product"
                  placeholder="Ex: Testoy Gel"
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  className="w-full p-3 rounded-md bg-white text-black border-none text-base"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="price" className="text-white">
                  Preço
                </Label>
                <Input
                  id="price"
                  placeholder="Ex: R$ 197,00"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full p-3 rounded-md bg-white text-black border-none text-base"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="funnel" className="text-white">
                  Estratégia de Funil
                </Label>
                <Select value={funnel} onValueChange={setFunnel}>
                  <SelectTrigger className="w-full p-3 rounded-md bg-white text-black border-none text-base">
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

              <div className="pt-4">
                <Button
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-base py-3 h-auto"
                  onClick={handleGenerateCampaign}
                  disabled={isGenerating || (!isTrialActive && !isAdmin)}
                >
                  {isGenerating ? "Gerando..." : "Gerar Campanha"}
                </Button>
              </div>
            </div>
          ) : (
            <div className="max-w-4xl">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-white">
                  Campanha para {product}
                </h2>
                <Button
                  onClick={() => setCampaignGenerated(false)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold"
                >
                  Nova Campanha
                </Button>
              </div>

              <div className="bg-zinc-900 rounded-lg p-6 space-y-6">
                {/* Títulos */}
                <div>
                  <h3 className="text-white font-bold mb-3 text-lg">Títulos</h3>
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
                  <h3 className="text-white font-bold mb-3 text-lg">Descrições</h3>
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
                  <h3 className="text-white font-bold mb-3 text-lg">Sitelinks</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {sitelinks.map((link, idx) => (
                      <div key={idx} className="bg-black p-3 rounded border border-zinc-700 hover:border-yellow-500 transition-all cursor-pointer" onClick={() => copyToClipboard(`${link.title}: ${link.description}`)}>
                        <h4 className="font-bold text-yellow-500">{link.title}</h4>
                        <p className="text-sm text-zinc-400">{link.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* USPs */}
                <div>
                  <h3 className="text-white font-bold mb-3 text-lg">Destaques</h3>
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
