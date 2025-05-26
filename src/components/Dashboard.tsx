
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";
import { ArrowRight, Copy, Download, LogOut, RefreshCw } from "lucide-react";
import { Badge } from "./ui/badge";
import Logo from "./Logo";
import { countries } from "./data/Countries";
import { generateCODCopies } from "../utils/copyGenerator";
import { useAuth } from "@/contexts/AuthContext";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";

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
  const [currentLanguage, setCurrentLanguage] = useState("pt");

  // Get authentication and trial state from context
  const { 
    trialDaysRemaining, 
    isTrialActive, 
    user, 
    signOut,
    isAdmin
  } = useAuth();

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
    <div className="min-h-screen bg-black">
      <header className="border-b border-zinc-800 bg-black/90 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Logo />
          <div className="flex items-center space-x-4">
            {isAdmin && (
              <Badge variant="default" className="py-1.5 bg-red-600 text-white">
                ADMIN
              </Badge>
            )}
            <Badge variant={isTrialActive ? "outline" : "destructive"} className={`py-1.5 ${isTrialActive ? "text-yellow-500 border-yellow-500 bg-zinc-900" : ""}`}>
              {isAdmin 
                ? "Acesso Ilimitado"
                : isTrialActive 
                  ? `Trial: ${trialDaysRemaining} ${trialDaysRemaining === 1 ? 'dia' : 'dias'} restantes` 
                  : 'Trial expirado'}
            </Badge>
            
            {user && (
              <div className="flex items-center space-x-2">
                <Badge variant="secondary" className="py-1.5 bg-zinc-800 text-yellow-500">
                  {user.email}
                </Badge>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm" className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black">
                      Minha Conta
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-zinc-900 border-zinc-800">
                    <DialogHeader>
                      <DialogTitle className="text-yellow-500">Minha Conta</DialogTitle>
                      <DialogDescription className="text-zinc-400">
                        Gerencie suas informações de conta
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div>
                        <p className="font-medium text-yellow-500">Email</p>
                        <p className="text-sm text-zinc-400">{user.email}</p>
                      </div>
                      {isAdmin && (
                        <div>
                          <p className="font-medium text-yellow-500">Tipo de Conta</p>
                          <p className="text-sm text-red-400 font-semibold">Administrador</p>
                        </div>
                      )}
                      <div>
                        <p className="font-medium text-yellow-500">Status do Trial</p>
                        <p className="text-sm text-zinc-400">
                          {isAdmin
                            ? "Acesso ilimitado como administrador"
                            : isTrialActive 
                              ? `Ativo - ${trialDaysRemaining} dias restantes` 
                              : 'Expirado - Assine um plano para continuar'}
                        </p>
                      </div>
                      <Button 
                        variant="destructive" 
                        className="w-full" 
                        onClick={signOut}
                      >
                        <LogOut className="mr-2 h-4 w-4" /> Sair
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="container mx-auto p-4 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Form Section */}
          <Card className="lg:col-span-1 border-zinc-800 bg-zinc-900 shadow-lg">
            <CardHeader className="pb-3">
              <CardTitle className="text-xl font-display font-semibold text-yellow-500">Gerador de Campanhas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="country" className="text-yellow-500">País & Idioma</Label>
                <Select value={country} onValueChange={handleCountryChange}>
                  <SelectTrigger id="country" className="bg-zinc-800 border-zinc-700 text-white">
                    <SelectValue placeholder="Selecione o país" />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-800 border-zinc-700">
                    <SelectGroup>
                      <SelectLabel className="text-yellow-500">Países Disponíveis</SelectLabel>
                      {countries.map((country) => (
                        <SelectItem key={country.value} value={country.value} className="text-white hover:bg-zinc-700">
                          {country.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="product" className="text-yellow-500">Nome do Produto</Label>
                <Input
                  id="product"
                  placeholder="Ex: iPhone 13 Pro"
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  className="bg-zinc-800 border-zinc-700 text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="price" className="text-yellow-500">Preço</Label>
                <Input
                  id="price"
                  placeholder="Ex: 999,90"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="bg-zinc-800 border-zinc-700 text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="funnel" className="text-yellow-500">Estratégia de Marketing</Label>
                <Select value={funnel} onValueChange={setFunnel}>
                  <SelectTrigger id="funnel" className="bg-zinc-800 border-zinc-700 text-white">
                    <SelectValue placeholder="Selecione a estratégia" />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-800 border-zinc-700">
                    <SelectGroup>
                      <SelectLabel className="text-yellow-500">Estratégias</SelectLabel>
                      {funnelStrategies.map((strategy) => (
                        <SelectItem key={strategy.value} value={strategy.value} className="text-white hover:bg-zinc-700">
                          {strategy.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="pt-3 space-y-3">
                <Button
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
                  onClick={handleGenerateCampaign}
                  disabled={isGenerating || (!isTrialActive && !isAdmin)}
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                      Gerando...
                    </>
                  ) : (!isTrialActive && !isAdmin) ? (
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
                    className="w-full border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
                    onClick={resetForm}
                  >
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Limpar e Gerar Novamente
                  </Button>
                )}

                {!isTrialActive && !isAdmin && (
                  <p className="text-sm text-center text-red-400 mt-2">
                    Seu período de teste gratuito acabou. Assine um plano para continuar gerando campanhas.
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Results Section */}
          <Card className="lg:col-span-2 border-zinc-800 bg-zinc-900 shadow-lg">
            {!campaignGenerated ? (
              <div className="flex flex-col items-center justify-center p-12 text-center h-full">
                <div className="w-16 h-16 mb-4 bg-yellow-500/20 rounded-full flex items-center justify-center">
                  <ArrowRight className="h-8 w-8 text-yellow-500" />
                </div>
                <h3 className="text-xl font-display font-medium mb-2 text-yellow-500">Gerador de Campanhas Copyfy</h3>
                <p className="text-zinc-400 max-w-md">
                  Preencha os campos ao lado e clique em "Gerar Campanha" para criar copies adaptadas para 
                  Google Ads em mais de 100 idiomas.
                </p>
              </div>
            ) : (
              <>
                <CardHeader className="pb-0">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-xl font-display font-semibold text-yellow-500">Campanha para {product}</CardTitle>
                    <Button variant="outline" size="sm" className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black">
                      <Download className="mr-2 h-4 w-4" />
                      Exportar
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="pt-5">
                  <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
                    <TabsList className="grid grid-cols-4 mb-2 bg-zinc-800">
                      <TabsTrigger value="titles" className="data-[state=active]:bg-yellow-500 data-[state=active]:text-black text-zinc-400">
                        Títulos
                      </TabsTrigger>
                      <TabsTrigger value="descriptions" className="data-[state=active]:bg-yellow-500 data-[state=active]:text-black text-zinc-400">
                        Descrições
                      </TabsTrigger>
                      <TabsTrigger value="usps" className="data-[state=active]:bg-yellow-500 data-[state=active]:text-black text-zinc-400">
                        USPs
                      </TabsTrigger>
                      <TabsTrigger value="sitelinks" className="data-[state=active]:bg-yellow-500 data-[state=active]:text-black text-zinc-400">
                        Sitelinks
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="titles" className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {titles.map((title, idx) => (
                          <div key={idx} className="group relative bg-zinc-800 p-3 rounded-md border border-zinc-700 hover:border-yellow-500 hover:shadow-md transition-all">
                            <p className="pr-8 text-white">{title}</p>
                            <button
                              onClick={() => copyToClipboard(title)}
                              className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <Copy className="h-4 w-4 text-yellow-500 hover:text-yellow-400" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </TabsContent>

                    <TabsContent value="descriptions" className="space-y-4">
                      <div className="grid grid-cols-1 gap-3">
                        {descriptions.map((desc, idx) => (
                          <div key={idx} className="group relative bg-zinc-800 p-3 rounded-md border border-zinc-700 hover:border-yellow-500 hover:shadow-md transition-all">
                            <p className="pr-8 text-white">{desc}</p>
                            <button
                              onClick={() => copyToClipboard(desc)}
                              className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <Copy className="h-4 w-4 text-yellow-500 hover:text-yellow-400" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </TabsContent>

                    <TabsContent value="usps" className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {usps.map((usp, idx) => (
                          <div key={idx} className="group relative bg-zinc-800 p-3 rounded-md border border-zinc-700 hover:border-yellow-500 hover:shadow-md transition-all">
                            <p className="pr-8 text-white">{usp}</p>
                            <button
                              onClick={() => copyToClipboard(usp)}
                              className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <Copy className="h-4 w-4 text-yellow-500 hover:text-yellow-400" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </TabsContent>

                    <TabsContent value="sitelinks" className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {sitelinks.map((link, idx) => (
                          <div key={idx} className="group relative bg-zinc-800 p-4 rounded-md border border-zinc-700 hover:border-yellow-500 hover:shadow-md transition-all">
                            <div className="flex justify-between">
                              <h4 className="font-medium text-yellow-500">{link.title}</h4>
                              <button
                                onClick={() => copyToClipboard(link.title)}
                                className="opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                <Copy className="h-4 w-4 text-yellow-500 hover:text-yellow-400" />
                              </button>
                            </div>
                            <p className="text-sm text-zinc-400 mt-1">{link.description}</p>
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
