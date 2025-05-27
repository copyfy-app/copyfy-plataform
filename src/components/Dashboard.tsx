
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";
import { Copy, RefreshCw, LogOut } from "lucide-react";
import { Badge } from "./ui/badge";
import Logo from "./Logo";
import { countries } from "./data/Countries";
import { generateCODCopies } from "../utils/copyGenerator";
import { useAuth } from "@/contexts/AuthContext";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";

// Estratégias de funil simplificadas
const funnelStrategies = [
  { value: "bottom", label: "Fundo de funil" },
  { value: "cod", label: "COD (Cash on Delivery)" },
  { value: "top", label: "Topo de funil" },
  { value: "mid", label: "Meio de funil" },
];

const Dashboard = () => {
  const [country, setCountry] = useState("");
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [funnel, setFunnel] = useState("");
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
    setFunnel("");
    setCampaignGenerated(false);
    setTitles([]);
    setDescriptions([]);
    setUsps([]);
    setSitelinks([]);
    setCurrentLanguage("pt");
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header simplificado */}
      <header className="border-b border-zinc-800 bg-black">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Logo />
          <div className="flex items-center space-x-3">
            {isAdmin && (
              <Badge variant="default" className="bg-yellow-500 text-black text-xs">
                ADMIN
              </Badge>
            )}
            <Badge variant={isTrialActive ? "outline" : "destructive"} className={`text-xs ${isTrialActive ? "text-yellow-500 border-yellow-500 bg-zinc-900" : ""}`}>
              {isAdmin 
                ? "Acesso Ilimitado"
                : isTrialActive 
                  ? `Teste: ${trialDaysRemaining} ${trialDaysRemaining === 1 ? 'dia' : 'dias'}` 
                  : 'Teste expirado'}
            </Badge>
            
            {user && (
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm" className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black text-xs">
                    Conta
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
                        <p className="text-sm text-yellow-500 font-semibold">Administrador</p>
                      </div>
                    )}
                    <div>
                      <p className="font-medium text-yellow-500">Status do Teste</p>
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
            )}
          </div>
        </div>
      </header>

      <div className="container mx-auto p-4 lg:p-8">
        {/* Headline principal */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-500 mb-2">
            Gere suas campanhas em poucos cliques
          </h1>
        </div>

        <div className="max-w-6xl mx-auto">
          {!campaignGenerated ? (
            /* Formulário principal */
            <Card className="border-zinc-800 bg-zinc-900 max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-xl text-yellow-500 text-center">Gerador de Campanhas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="country" className="text-yellow-500">País</Label>
                  <Select value={country} onValueChange={handleCountryChange}>
                    <SelectTrigger id="country" className="bg-zinc-800 border-zinc-700 text-white">
                      <SelectValue placeholder="Selecione o país" />
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-800 border-zinc-700 max-h-60">
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
                  <Label htmlFor="product" className="text-yellow-500">Produto</Label>
                  <Input
                    id="product"
                    placeholder="Ex: iPhone 15 Pro"
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
                  <Label htmlFor="funnel" className="text-yellow-500">Estratégia de Funil</Label>
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

                <div className="pt-4">
                  <Button
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-base py-3"
                    onClick={handleGenerateCampaign}
                    disabled={isGenerating || (!isTrialActive && !isAdmin)}
                    size="lg"
                  >
                    {isGenerating ? (
                      <>
                        <RefreshCw className="mr-2 h-5 w-5 animate-spin" />
                        Gerando...
                      </>
                    ) : (!isTrialActive && !isAdmin) ? (
                      "Assinar Plano"
                    ) : (
                      "Gerar Campanha"
                    )}
                  </Button>

                  {!isTrialActive && !isAdmin && (
                    <p className="text-sm text-center text-red-400 mt-3">
                      Seu período de teste gratuito acabou. Assine um plano para continuar gerando campanhas.
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          ) : (
            /* Resultados da campanha */
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                <h2 className="text-xl md:text-2xl font-bold text-yellow-500">
                  Campanha para {product}
                </h2>
                <Button
                  variant="outline"
                  onClick={resetForm}
                  className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
                >
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Nova Campanha
                </Button>
              </div>

              <Card className="border-zinc-800 bg-zinc-900">
                <CardContent className="pt-6">
                  <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
                    <TabsList className="grid grid-cols-4 mb-6 bg-zinc-800 w-full">
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

                    <TabsContent value="titles" className="space-y-3">
                      {titles.map((title, idx) => (
                        <div key={idx} className="group relative bg-zinc-800 p-4 rounded-md border border-zinc-700 hover:border-yellow-500 transition-all">
                          <p className="pr-8 text-white">{title}</p>
                          <button
                            onClick={() => copyToClipboard(title)}
                            className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <Copy className="h-4 w-4 text-yellow-500 hover:text-yellow-400" />
                          </button>
                        </div>
                      ))}
                    </TabsContent>

                    <TabsContent value="descriptions" className="space-y-3">
                      {descriptions.map((desc, idx) => (
                        <div key={idx} className="group relative bg-zinc-800 p-4 rounded-md border border-zinc-700 hover:border-yellow-500 transition-all">
                          <p className="pr-8 text-white">{desc}</p>
                          <button
                            onClick={() => copyToClipboard(desc)}
                            className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <Copy className="h-4 w-4 text-yellow-500 hover:text-yellow-400" />
                          </button>
                        </div>
                      ))}
                    </TabsContent>

                    <TabsContent value="usps" className="space-y-3">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {usps.map((usp, idx) => (
                          <div key={idx} className="group relative bg-zinc-800 p-4 rounded-md border border-zinc-700 hover:border-yellow-500 transition-all">
                            <p className="pr-8 text-white">{usp}</p>
                            <button
                              onClick={() => copyToClipboard(usp)}
                              className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <Copy className="h-4 w-4 text-yellow-500 hover:text-yellow-400" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </TabsContent>

                    <TabsContent value="sitelinks" className="space-y-3">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {sitelinks.map((link, idx) => (
                          <div key={idx} className="group relative bg-zinc-800 p-4 rounded-md border border-zinc-700 hover:border-yellow-500 transition-all">
                            <div className="flex justify-between">
                              <h4 className="font-medium text-yellow-500">{link.title}</h4>
                              <button
                                onClick={() => copyToClipboard(`${link.title}: ${link.description}`)}
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
              </Card>
            </div>
          )}
        </div>
      </div>

      {/* Rodapé */}
      <footer className="border-t border-zinc-800 bg-black mt-16">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-zinc-400">
            <a href="/terms" className="hover:text-yellow-500 transition-colors">
              Termos de Uso
            </a>
            <a href="/privacy" className="hover:text-yellow-500 transition-colors">
              Política de Privacidade
            </a>
            <a href="mailto:inspiranegociosonline@gmail.com" className="hover:text-yellow-500 transition-colors">
              Contato
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
