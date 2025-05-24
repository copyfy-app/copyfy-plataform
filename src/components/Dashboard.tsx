
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";
import { ArrowRight, Copy, Download, RefreshCw } from "lucide-react";
import { Badge } from "./ui/badge";
import { Checkbox } from "./ui/checkbox";
import Logo from "./Logo";
import { countries } from "./data/Countries";
import { generateCODCopies } from "../utils/copyGenerator";

// Mock funnel strategies
const funnelStrategies = [
  { value: "cod", label: "Cash On Delivery (COD)" },
  { value: "top", label: "Topo de Funil (Awareness)" },
  { value: "mid", label: "Meio de Funil (Consideração)" },
  { value: "bottom", label: "Fundo de Funil (Conversão)" },
];

const Dashboard = () => {
  const [country, setCountry] = useState("");
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [funnel, setFunnel] = useState("cod"); // Default to COD
  const [isGenerating, setIsGenerating] = useState(false);
  const [campaignGenerated, setCampaignGenerated] = useState(false);
  const [activeTab, setActiveTab] = useState("titles");
  const [remainingDays, setRemainingDays] = useState(2);
  const [currentLanguage, setCurrentLanguage] = useState("pt");

  // Content states for generated campaign
  const [titles, setTitles] = useState([]);
  const [descriptions, setDescriptions] = useState([]);
  const [usps, setUsps] = useState([]);
  const [sitelinks, setSitelinks] = useState([]);

  // Update language when country changes
  const handleCountryChange = (countryCode) => {
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

    if (remainingDays <= 0) {
      toast({
        title: "Trial expirado",
        description: "Seu período de teste gratuito acabou. Assine um plano para continuar.",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);

    // Find the country data
    const countryData = countries.find(c => c.value === country);
    const countryName = countryData ? countryData.name : "";
    const languageCode = countryData ? countryData.languageCode : "en";
    setCurrentLanguage(languageCode);

    // Generate unique copies using the util function
    setTimeout(() => {
      const generatedContent = generateCODCopies(
        product, 
        price, 
        countryName, 
        languageCode, 
        funnel
      );

      setTitles(generatedContent.titles);
      setDescriptions(generatedContent.descriptions);
      setUsps(generatedContent.usps);
      setSitelinks(generatedContent.sitelinks);

      setCampaignGenerated(true);
      setIsGenerating(false);
      setRemainingDays(prevDays => prevDays - 1);
      toast({
        title: "Campanha gerada com sucesso!",
        description: "Suas copies estão prontas para uso.",
      });
    }, 1500);
  };

  // Copy to clipboard function
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copiado!",
      description: "Texto copiado para área de transferência.",
    });
  };

  // Reset form
  const resetForm = () => {
    setCountry("");
    setProduct("");
    setPrice("");
    setFunnel("cod");
    setCampaignGenerated(false);
    setTitles([]);
    setDescriptions([]);
    setUsps([]);
    setSitelinks([]);
    setCurrentLanguage("pt");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
      <header className="border-b bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Logo />
          <div className="flex items-center space-x-4">
            <Badge variant="outline" className="py-1.5 text-indigo-700 border-indigo-300 bg-indigo-50">
              Trial: {remainingDays} {remainingDays === 1 ? 'dia' : 'dias'} restantes
            </Badge>
            <Button variant="outline" size="sm">
              Minha Conta
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto p-4 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Form Section */}
          <Card className="lg:col-span-1 border-0 shadow-lg">
            <CardHeader className="pb-3">
              <CardTitle className="text-xl font-display font-semibold">Gerador de Campanhas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="country">País & Idioma</Label>
                <Select value={country} onValueChange={handleCountryChange}>
                  <SelectTrigger id="country" className="bg-white">
                    <SelectValue placeholder="Selecione o país" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Países Disponíveis</SelectLabel>
                      {countries.map((country) => (
                        <SelectItem key={country.value} value={country.value}>
                          {country.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="product">Nome do Produto</Label>
                <Input
                  id="product"
                  placeholder="Ex: iPhone 13 Pro"
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  className="bg-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="price">Preço</Label>
                <Input
                  id="price"
                  placeholder="Ex: 999,90"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="bg-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="funnel">Estratégia de Marketing</Label>
                <Select value={funnel} onValueChange={setFunnel}>
                  <SelectTrigger id="funnel" className="bg-white">
                    <SelectValue placeholder="Selecione a estratégia" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Estratégias</SelectLabel>
                      {funnelStrategies.map((strategy) => (
                        <SelectItem key={strategy.value} value={strategy.value}>
                          {strategy.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="pt-3 space-y-3">
                <Button
                  className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white"
                  onClick={handleGenerateCampaign}
                  disabled={isGenerating || remainingDays <= 0}
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                      Gerando...
                    </>
                  ) : remainingDays <= 0 ? (
                    <>
                      Assinar Plano
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  ) : (
                    <>
                      Gerar Campanha
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>

                {campaignGenerated && (
                  <Button
                    variant="outline"
                    className="w-full border-indigo-200 text-indigo-700"
                    onClick={resetForm}
                  >
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Limpar e Gerar Novamente
                  </Button>
                )}

                {remainingDays === 0 && (
                  <p className="text-sm text-center text-red-600 mt-2">
                    Seu período de teste gratuito acabou. Assine um plano para continuar gerando campanhas.
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Results Section */}
          <Card className="lg:col-span-2 border-0 shadow-lg">
            {!campaignGenerated ? (
              <div className="flex flex-col items-center justify-center p-12 text-center h-full">
                <div className="w-16 h-16 mb-4 bg-indigo-100 rounded-full flex items-center justify-center">
                  <ArrowRight className="h-8 w-8 text-indigo-500" />
                </div>
                <h3 className="text-xl font-display font-medium mb-2">Gerador de Campanhas Copyfy</h3>
                <p className="text-gray-600 max-w-md">
                  Preencha os campos ao lado e clique em "Gerar Campanha" para criar copies adaptadas para 
                  Google Ads em mais de 100 idiomas.
                </p>
              </div>
            ) : (
              <>
                <CardHeader className="pb-0">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-xl font-display font-semibold">Campanha para {product}</CardTitle>
                    <Button variant="outline" size="sm" className="text-indigo-700 border-indigo-200">
                      <Download className="mr-2 h-4 w-4" />
                      Exportar
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="pt-5">
                  <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
                    <TabsList className="grid grid-cols-4 mb-2">
                      <TabsTrigger value="titles" className="data-[state=active]:bg-indigo-500 data-[state=active]:text-white">
                        Títulos
                      </TabsTrigger>
                      <TabsTrigger value="descriptions" className="data-[state=active]:bg-indigo-500 data-[state=active]:text-white">
                        Descrições
                      </TabsTrigger>
                      <TabsTrigger value="usps" className="data-[state=active]:bg-indigo-500 data-[state=active]:text-white">
                        USPs
                      </TabsTrigger>
                      <TabsTrigger value="sitelinks" className="data-[state=active]:bg-indigo-500 data-[state=active]:text-white">
                        Sitelinks
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="titles" className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {titles.map((title, idx) => (
                          <div key={idx} className="group relative bg-white p-3 rounded-md border border-indigo-100 hover:border-indigo-300 hover:shadow-md transition-all">
                            <p className="pr-8">{title}</p>
                            <button
                              onClick={() => copyToClipboard(title)}
                              className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <Copy className="h-4 w-4 text-indigo-500 hover:text-indigo-700" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </TabsContent>

                    <TabsContent value="descriptions" className="space-y-4">
                      <div className="grid grid-cols-1 gap-3">
                        {descriptions.map((desc, idx) => (
                          <div key={idx} className="group relative bg-white p-3 rounded-md border border-indigo-100 hover:border-indigo-300 hover:shadow-md transition-all">
                            <p className="pr-8">{desc}</p>
                            <button
                              onClick={() => copyToClipboard(desc)}
                              className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <Copy className="h-4 w-4 text-indigo-500 hover:text-indigo-700" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </TabsContent>

                    <TabsContent value="usps" className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {usps.map((usp, idx) => (
                          <div key={idx} className="group relative bg-white p-3 rounded-md border border-indigo-100 hover:border-indigo-300 hover:shadow-md transition-all">
                            <p className="pr-8">{usp}</p>
                            <button
                              onClick={() => copyToClipboard(usp)}
                              className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <Copy className="h-4 w-4 text-indigo-500 hover:text-indigo-700" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </TabsContent>

                    <TabsContent value="sitelinks" className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {sitelinks.map((link, idx) => (
                          <div key={idx} className="group relative bg-white p-4 rounded-md border border-indigo-100 hover:border-indigo-300 hover:shadow-md transition-all">
                            <div className="flex justify-between">
                              <h4 className="font-medium">{link.title}</h4>
                              <button
                                onClick={() => copyToClipboard(link.title)}
                                className="opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                <Copy className="h-4 w-4 text-indigo-500 hover:text-indigo-700" />
                              </button>
                            </div>
                            <p className="text-sm text-gray-600 mt-1">{link.description}</p>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
