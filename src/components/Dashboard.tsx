
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Copy, Download, RefreshCw, Zap } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface CampaignResult {
  titles: string[];
  descriptions: string[];
  usps: string[];
  sitelinks: string[];
}

const Dashboard = () => {
  const [country, setCountry] = useState('');
  const [product, setProduct] = useState('');
  const [price, setPrice] = useState('');
  const [funnelStage, setFunnelStage] = useState('');
  const [campaignResult, setCampaignResult] = useState<CampaignResult | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [trialDaysLeft, setTrialDaysLeft] = useState(2);
  const [isTrialExpired, setIsTrialExpired] = useState(false);

  // Simulate trial countdown
  useEffect(() => {
    const trialStartDate = localStorage.getItem('copyfy_trial_start');
    if (!trialStartDate) {
      localStorage.setItem('copyfy_trial_start', new Date().toISOString());
    } else {
      const startDate = new Date(trialStartDate);
      const now = new Date();
      const diffInDays = Math.floor((now.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
      const daysLeft = Math.max(0, 2 - diffInDays);
      setTrialDaysLeft(daysLeft);
      setIsTrialExpired(daysLeft === 0);
    }
  }, []);

  const countries = [
    { code: 'US', name: 'Estados Unidos', language: 'en' },
    { code: 'BR', name: 'Brasil', language: 'pt' },
    { code: 'GB', name: 'Reino Unido', language: 'en' },
    { code: 'DE', name: 'Alemanha', language: 'de' },
    { code: 'FR', name: 'França', language: 'fr' },
    { code: 'ES', name: 'Espanha', language: 'es' },
    { code: 'IT', name: 'Itália', language: 'it' },
    { code: 'JP', name: 'Japão', language: 'ja' },
    { code: 'AU', name: 'Austrália', language: 'en' },
    { code: 'CA', name: 'Canadá', language: 'en' },
  ];

  const titleTemplates = {
    topo: [
      "Descubra {produto}",
      "Novo {produto}",
      "O Melhor {produto}",
      "Oferta {produto}",
      "Promoção {produto}",
      "Exclusivo {produto}",
      "Lançamento {produto}",
      "Aproveite {produto}",
      "Super {produto}",
      "Top {produto}",
      "Premium {produto}",
      "Incrível {produto}",
      "Especial {produto}",
      "Único {produto}",
      "Original {produto}",
      "Oficial {produto}",
      "Garantido {produto}",
      "Testado {produto}",
      "Aprovado {produto}",
      "Recomendado {produto}"
    ],
    meio: [
      "{produto} com {preco}% OFF",
      "Só Hoje: {produto}",
      "Últimas Unidades {produto}",
      "Oferta Limitada {produto}",
      "Desconto {produto}",
      "Economize em {produto}",
      "Promoção {produto}",
      "Aproveite {produto}",
      "Compre {produto}",
      "Garanta {produto}",
      "Adquira {produto}",
      "Oportunidade {produto}",
      "Chance Única {produto}",
      "Não Perca {produto}",
      "Últimas Horas {produto}",
      "Liquidação {produto}",
      "Super Oferta {produto}",
      "Mega Desconto {produto}",
      "Flash Sale {produto}",
      "Black Friday {produto}"
    ],
    fundo: [
      "Compre {produto} Agora",
      "Peça {produto} Hoje",
      "Garanta {produto}",
      "Adquira {produto}",
      "Solicite {produto}",
      "Encomende {produto}",
      "Reserve {produto}",
      "Confirme {produto}",
      "Finalize {produto}",
      "Complete {produto}",
      "Clique {produto}",
      "Acesse {produto}",
      "Visite {produto}",
      "Experimente {produto}",
      "Teste {produto}",
      "Prove {produto}",
      "Conheça {produto}",
      "Veja {produto}",
      "Descubra {produto}",
      "Explore {produto}"
    ]
  };

  const generateCampaign = () => {
    if (isTrialExpired) {
      toast({
        title: "Trial Expirado",
        description: "Seu período de teste terminou. Faça o upgrade para continuar gerando campanhas.",
        variant: "destructive",
      });
      return;
    }

    if (!country || !product || !price || !funnelStage) {
      toast({
        title: "Campos obrigatórios",
        description: "Preencha todos os campos para gerar a campanha.",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);

    setTimeout(() => {
      const selectedCountry = countries.find(c => c.code === country);
      const templates = titleTemplates[funnelStage as keyof typeof titleTemplates] || titleTemplates.topo;
      
      // Generate 20 unique titles
      const titles = [];
      const usedTitles = new Set();
      while (titles.length < 20 && usedTitles.size < templates.length * 3) {
        const template = templates[Math.floor(Math.random() * templates.length)];
        let title = template
          .replace('{produto}', product)
          .replace('{preco}', price);
        
        // Add variations
        if (Math.random() > 0.5) {
          const variations = ['!', ' ✓', ' →', ' ⚡', ' 🔥'];
          title += variations[Math.floor(Math.random() * variations.length)];
        }
        
        if (title.length <= 30 && !usedTitles.has(title)) {
          titles.push(title);
          usedTitles.add(title);
        }
      }

      // Generate 10 descriptions
      const descriptionTemplates = [
        `${product} com qualidade superior. Aproveite nossa oferta especial!`,
        `Desconto exclusivo em ${product}. Não perca esta oportunidade única.`,
        `${product} original com garantia. Entrega rápida e segura.`,
        `Oferta limitada: ${product} com ${price}% de desconto. Compre agora!`,
        `O melhor ${product} do mercado. Satisfação 100% garantida.`,
        `${product} premium com preço especial. Últimas unidades disponíveis.`,
        `Promoção imperdível: ${product} com frete grátis. Aproveite!`,
        `${product} testado e aprovado. Milhares de clientes satisfeitos.`,
        `Oferta relâmpago: ${product} por tempo limitado. Garante já!`,
        `${product} exclusivo com bônus especiais. Não deixe passar!`
      ];

      const descriptions = descriptionTemplates.slice(0, 10);

      // Generate 3 USPs
      const usps = [
        "Garantia 30 dias",
        "Frete Grátis",
        "Suporte 24/7"
      ];

      // Generate 4 sitelinks
      const sitelinks = [
        "Comprar Agora",
        "Ver Ofertas", 
        "Frete Grátis",
        "Garantias"
      ];

      setCampaignResult({
        titles: titles.slice(0, 20),
        descriptions,
        usps,
        sitelinks
      });

      setIsGenerating(false);
      
      toast({
        title: "Campanha Gerada!",
        description: `Campanha criada para ${selectedCountry?.name} com sucesso.`,
      });
    }, 2000);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copiado!",
      description: "Texto copiado para a área de transferência.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">C</span>
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Copyfy Dashboard
            </h1>
          </div>
          <div className="text-right">
            {!isTrialExpired ? (
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                Trial: {trialDaysLeft} dias restantes
              </Badge>
            ) : (
              <Badge variant="destructive">
                Trial Expirado
              </Badge>
            )}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-blue-600" />
                Configurar Campanha
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="country">País</Label>
                <Select value={country} onValueChange={setCountry}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o país" />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((c) => (
                      <SelectItem key={c.code} value={c.code}>
                        {c.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="product">Produto</Label>
                <Input
                  id="product"
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  placeholder="Ex: Curso de Marketing Digital"
                />
              </div>

              <div>
                <Label htmlFor="price">Preço/Desconto (%)</Label>
                <Input
                  id="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Ex: 50"
                />
              </div>

              <div>
                <Label htmlFor="funnel">Estratégia de Funil</Label>
                <Select value={funnelStage} onValueChange={setFunnelStage}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a estratégia" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="topo">Topo de Funil</SelectItem>
                    <SelectItem value="meio">Meio de Funil</SelectItem>
                    <SelectItem value="fundo">Fundo de Funil</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                onClick={generateCampaign}
                disabled={isGenerating || isTrialExpired}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                    Gerando Campanha...
                  </>
                ) : (
                  <>
                    <Zap className="w-4 h-4 mr-2" />
                    Gerar Campanha
                  </>
                )}
              </Button>

              {isTrialExpired && (
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <p className="text-red-700 font-medium">
                    Seu trial expirou. Faça o upgrade para continuar!
                  </p>
                  <Button className="mt-2 bg-red-600 hover:bg-red-700">
                    Fazer Upgrade
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Results */}
          {campaignResult && (
            <div className="space-y-6">
              {/* Titles */}
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle>Títulos (20 variações)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-2 max-h-64 overflow-y-auto">
                    {campaignResult.titles.map((title, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                        <span className="text-sm truncate flex-1">{title}</span>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => copyToClipboard(title)}
                        >
                          <Copy className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Descriptions */}
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle>Descrições (10 variações)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {campaignResult.descriptions.map((desc, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                        <span className="text-sm flex-1">{desc}</span>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => copyToClipboard(desc)}
                        >
                          <Copy className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* USPs and Sitelinks */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="shadow-lg border-0">
                  <CardHeader>
                    <CardTitle>USPs (3)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {campaignResult.usps.map((usp, index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                          <span className="text-sm">{usp}</span>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => copyToClipboard(usp)}
                          >
                            <Copy className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg border-0">
                  <CardHeader>
                    <CardTitle>Sitelinks (4)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {campaignResult.sitelinks.map((link, index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                          <span className="text-sm">{link}</span>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => copyToClipboard(link)}
                          >
                            <Copy className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
