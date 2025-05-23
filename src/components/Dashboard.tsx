
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/hooks/use-toast";
import { ArrowRight, Copy, Download, RefreshCw } from "lucide-react";
import { Badge } from "./ui/badge";
import { Checkbox } from "./ui/checkbox";

// Mock country data with 100 countries total
const countries = [
  // Original 10 countries
  { value: "us", label: "Estados Unidos (Inglês)" },
  { value: "br", label: "Brasil (Português)" },
  { value: "es", label: "Espanha (Espanhol)" },
  { value: "fr", label: "França (Francês)" },
  { value: "de", label: "Alemanha (Alemão)" },
  { value: "it", label: "Itália (Italiano)" },
  { value: "jp", label: "Japão (Japonês)" },
  { value: "cn", label: "China (Mandarim)" },
  { value: "ru", label: "Rússia (Russo)" },
  { value: "ar", label: "Argentina (Espanhol)" },
  // Additional 90 countries
  { value: "gb", label: "Reino Unido (Inglês)" },
  { value: "ca", label: "Canadá (Inglês/Francês)" },
  { value: "au", label: "Austrália (Inglês)" },
  { value: "nz", label: "Nova Zelândia (Inglês)" },
  { value: "in", label: "Índia (Hindi/Inglês)" },
  { value: "za", label: "África do Sul (Inglês)" },
  { value: "mx", label: "México (Espanhol)" },
  { value: "co", label: "Colômbia (Espanhol)" },
  { value: "cl", label: "Chile (Espanhol)" },
  { value: "pe", label: "Peru (Espanhol)" },
  { value: "ve", label: "Venezuela (Espanhol)" },
  { value: "ec", label: "Equador (Espanhol)" },
  { value: "pt", label: "Portugal (Português)" },
  { value: "ao", label: "Angola (Português)" },
  { value: "mz", label: "Moçambique (Português)" },
  { value: "ch", label: "Suíça (Alemão/Francês/Italiano)" },
  { value: "at", label: "Áustria (Alemão)" },
  { value: "nl", label: "Holanda (Holandês)" },
  { value: "be", label: "Bélgica (Holandês/Francês)" },
  { value: "dk", label: "Dinamarca (Dinamarquês)" },
  { value: "no", label: "Noruega (Norueguês)" },
  { value: "se", label: "Suécia (Sueco)" },
  { value: "fi", label: "Finlândia (Finlandês)" },
  { value: "ie", label: "Irlanda (Inglês/Gaélico)" },
  { value: "pl", label: "Polônia (Polonês)" },
  { value: "cz", label: "República Tcheca (Tcheco)" },
  { value: "sk", label: "Eslováquia (Eslovaco)" },
  { value: "hu", label: "Hungria (Húngaro)" },
  { value: "ro", label: "Romênia (Romeno)" },
  { value: "bg", label: "Bulgária (Búlgaro)" },
  { value: "gr", label: "Grécia (Grego)" },
  { value: "tr", label: "Turquia (Turco)" },
  { value: "il", label: "Israel (Hebraico)" },
  { value: "ae", label: "Emirados Árabes (Árabe)" },
  { value: "sa", label: "Arábia Saudita (Árabe)" },
  { value: "eg", label: "Egito (Árabe)" },
  { value: "ma", label: "Marrocos (Árabe)" },
  { value: "ng", label: "Nigéria (Inglês)" },
  { value: "ke", label: "Quênia (Inglês/Suaíli)" },
  { value: "sg", label: "Singapura (Inglês/Mandarim)" },
  { value: "my", label: "Malásia (Malaio)" },
  { value: "th", label: "Tailândia (Tailandês)" },
  { value: "id", label: "Indonésia (Indonésio)" },
  { value: "ph", label: "Filipinas (Filipino/Inglês)" },
  { value: "vn", label: "Vietnã (Vietnamita)" },
  { value: "kr", label: "Coreia do Sul (Coreano)" },
  { value: "hk", label: "Hong Kong (Cantonês/Inglês)" },
  { value: "tw", label: "Taiwan (Mandarim)" },
  { value: "ua", label: "Ucrânia (Ucraniano)" },
  { value: "by", label: "Bielorrússia (Bielorrusso)" },
  { value: "kz", label: "Cazaquistão (Cazaque/Russo)" },
  { value: "pk", label: "Paquistão (Urdu)" },
  { value: "bd", label: "Bangladesh (Bengali)" },
  { value: "lk", label: "Sri Lanka (Cingalês/Tâmil)" },
  { value: "np", label: "Nepal (Nepalês)" },
  { value: "mm", label: "Myanmar (Birmanês)" },
  { value: "kh", label: "Camboja (Khmer)" },
  { value: "la", label: "Laos (Laosiano)" },
  { value: "mn", label: "Mongólia (Mongol)" },
  { value: "uy", label: "Uruguai (Espanhol)" },
  { value: "py", label: "Paraguai (Espanhol/Guarani)" },
  { value: "bo", label: "Bolívia (Espanhol)" },
  { value: "gt", label: "Guatemala (Espanhol)" },
  { value: "sv", label: "El Salvador (Espanhol)" },
  { value: "hn", label: "Honduras (Espanhol)" },
  { value: "ni", label: "Nicarágua (Espanhol)" },
  { value: "cr", label: "Costa Rica (Espanhol)" },
  { value: "pa", label: "Panamá (Espanhol)" },
  { value: "cu", label: "Cuba (Espanhol)" },
  { value: "do", label: "República Dominicana (Espanhol)" },
  { value: "pr", label: "Porto Rico (Espanhol/Inglês)" },
  { value: "jm", label: "Jamaica (Inglês)" },
  { value: "tt", label: "Trinidad e Tobago (Inglês)" },
  { value: "is", label: "Islândia (Islandês)" },
  { value: "lu", label: "Luxemburgo (Luxemburguês)" },
  { value: "si", label: "Eslovênia (Esloveno)" },
  { value: "hr", label: "Croácia (Croata)" },
  { value: "ba", label: "Bósnia e Herzegovina (Bósnio)" },
  { value: "rs", label: "Sérvia (Sérvio)" },
  { value: "me", label: "Montenegro (Montenegrino)" },
  { value: "mk", label: "Macedônia do Norte (Macedônio)" },
  { value: "al", label: "Albânia (Albanês)" },
  { value: "mt", label: "Malta (Maltês/Inglês)" },
  { value: "cy", label: "Chipre (Grego/Turco)" },
  { value: "dz", label: "Argélia (Árabe)" },
  { value: "tn", label: "Tunísia (Árabe)" },
  { value: "ly", label: "Líbia (Árabe)" },
  { value: "lb", label: "Líbano (Árabe)" },
  { value: "jo", label: "Jordânia (Árabe)" },
  { value: "bh", label: "Bahrein (Árabe)" },
  { value: "qa", label: "Catar (Árabe)" },
  { value: "kw", label: "Kuwait (Árabe)" },
  { value: "om", label: "Omã (Árabe)" },
];

// Mock funnel strategies
const funnelStrategies = [
  { value: "top", label: "Topo de Funil (Awareness)" },
  { value: "mid", label: "Meio de Funil (Consideração)" },
  { value: "bottom", label: "Fundo de Funil (Conversão)" },
];

const Dashboard = () => {
  const [country, setCountry] = useState("");
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [funnel, setFunnel] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [campaignGenerated, setCampaignGenerated] = useState(false);
  const [activeTab, setActiveTab] = useState("titles");
  const [remainingDays, setRemainingDays] = useState(2);

  // Mock generated content
  const titles = [
    "Descubra o Melhor [Produto] Online",
    "Oferta Exclusiva: [Produto] Premium",
    "[Produto] Profissional - 50% OFF Hoje",
    "O Segredo do [Produto] Revelado!",
    "Economize com Nosso [Produto] Agora",
    "[Produto] Original com Frete Grátis",
    "Revolucione seu Dia com [Produto]",
    "Último Lançamento: [Produto] 2023",
    "[Produto] que Transforma Resultados",
    "Experimente [Produto] - Satisfação Garantida",
    "O [Produto] Favorito dos Especialistas",
    "Promoção [Produto] por Tempo Limitado",
    "Compare e Economize no [Produto]",
    "[Produto] com Desconto Imperdível",
    "[Produto] Original - Entrega Expressa",
    "Aproveite: [Produto] com Brinde",
    "[Produto] Premium - Qualidade Superior",
    "Compre [Produto] Agora e Economize",
    "[Produto] Testado e Aprovado",
    "O Melhor [Produto] da Categoria",
  ];

  const descriptions = [
    "Descubra por que nosso [Produto] é o preferido. Benefícios exclusivos e garantia total de satisfação!",
    "Economize tempo e dinheiro com nosso [Produto]. Resultados imediatos e suporte personalizado.",
    "[Produto] premium com qualidade garantida. Entrega rápida e segura. Aproveite nossa oferta!",
    "Transforme seus resultados com [Produto]. Usado por profissionais. Compre agora com desconto!",
    "O [Produto] mais vendido. Avaliação 5 estrelas. Últimas unidades disponíveis com frete grátis!",
    "Solução definitiva: [Produto] revolucionário. Tecnologia exclusiva e resultados comprovados.",
    "[Produto] versátil e durável. Ideal para todas as necessidades. Satisfação ou seu dinheiro de volta!",
    "Novo [Produto]: desempenho superior, preço acessível. Economize 30% na compra hoje!",
    "Experimente o premiado [Produto]. Envio no mesmo dia para pedidos até 15h. Garantia vitalícia!",
    "[Produto] oficial: autenticidade garantida. Parcele em até 12x sem juros. Promoção por tempo limitado!",
  ];

  const usps = [
    "Entrega em 24h",
    "Garantia de 2 Anos",
    "Suporte Premium 24/7",
  ];

  const sitelinks = [
    { title: "Ver Avaliações ⭐⭐⭐⭐⭐", description: "Mais de 10.000 clientes satisfeitos" },
    { title: "Compre com 50% OFF", description: "Oferta por tempo limitado" },
    { title: "Garantia de Satisfação", description: "30 dias para testar ou seu dinheiro de volta" },
    { title: "Frete Grátis Hoje", description: "Para compras acima de R$100" },
  ];

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

    // Simulate API call
    setTimeout(() => {
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
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text.replace("[Produto]", product));
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
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
      <header className="border-b bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Copyfy
            </span>
          </div>
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
              <CardTitle className="text-xl font-bold">Gerador de Campanhas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="country">País & Idioma</Label>
                <Select value={country} onValueChange={setCountry}>
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
                <Label htmlFor="funnel">Estratégia de Funil</Label>
                <Select value={funnel} onValueChange={setFunnel}>
                  <SelectTrigger id="funnel" className="bg-white">
                    <SelectValue placeholder="Selecione a estratégia" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Estágios do Funil</SelectLabel>
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
                <h3 className="text-xl font-medium mb-2">Gerador de Campanhas Copyfy</h3>
                <p className="text-gray-600 max-w-md">
                  Preencha os campos ao lado e clique em "Gerar Campanha" para criar copies adaptadas para 
                  Google Ads em mais de 100 idiomas.
                </p>
              </div>
            ) : (
              <>
                <CardHeader className="pb-0">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-xl font-bold">Campanha para {product}</CardTitle>
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
                            <p className="pr-8">{title.replace("[Produto]", product)}</p>
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
                            <p className="pr-8">{desc.replace("[Produto]", product)}</p>
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
