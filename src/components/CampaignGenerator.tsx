import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const countries = [
  "Brasil", "França", "Alemanha", "Espanha", "Itália", "Turquia", 
  "Japão", "Índia", "México", "Reino Unido", "Estados Unidos"
];

const strategies = [
  { value: "cod", label: "COD - Pagamento na Entrega" },
  { value: "fundo", label: "Fundo de Funil" },
  { value: "meio", label: "Meio de Funil" },
  { value: "topo", label: "Topo de Funil" }
];

const CampaignGenerator = () => {
  const navigate = useNavigate();
  const [country, setCountry] = useState("");
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [strategy, setStrategy] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [campaignResult, setCampaignResult] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [campaignHistory, setCampaignHistory] = useState<string[]>([]);

  // Load campaign history from localStorage on component mount
  useEffect(() => {
    const history = JSON.parse(localStorage.getItem("historicoCampanhas") || "[]");
    setCampaignHistory(history);
  }, []);

  const generateCampaign = () => {
    if (!country || !product || !price || !strategy) {
      toast({
        title: "Campos incompletos",
        description: "Por favor, preencha todos os campos para gerar a campanha.",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    
    // Simulate campaign generation
    setTimeout(() => {
      const generatedCopy = `Campanha gerada para o produto "${product}" no país "${country}" com preço ${price} e estratégia "${strategy}".

📌 SNIPPET ESTRUTURADO
Categoria: Benefícios
Rápido resultado · Produto original · Envio imediato

🎯 EXTENSÃO DE PROMOÇÃO
Ocasião: Oferta por tempo limitado
Produto: ${product}
Valor com desconto: Apenas ${price}
Cupom: PAGUECOD

💲 EXTENSÃO DE PREÇO
${product} 1 unidade: ${price} – Entrega para todo ${country}
${product} 2 unidades: Desconto especial – Frete grátis
${product} Kit completo: Melhor custo-benefício`;

      setCampaignResult(generatedCopy);
      setShowResult(true);
      setIsGenerating(false);
      
      toast({
        title: "Campanha gerada com sucesso!",
        description: "Sua copy está pronta para uso."
      });
    }, 1500);
  };

  const saveCampaign = () => {
    if (!campaignResult) return;
    
    const history = JSON.parse(localStorage.getItem("historicoCampanhas") || "[]");
    history.unshift(campaignResult);
    
    // Keep only last 15 campaigns
    if (history.length > 15) history.pop();
    
    localStorage.setItem("historicoCampanhas", JSON.stringify(history));
    setCampaignHistory(history);
    
    toast({
      title: "Campanha salva!",
      description: "Campanha adicionada ao histórico."
    });
  };

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

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Fixed Back Button */}
      <Button
        onClick={() => navigate("/dashboard")}
        className="fixed top-3 left-3 z-50 bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-4 py-2 rounded-lg"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Voltar para o Dashboard
      </Button>

      {/* Fixed History Button */}
      <Button
        onClick={() => setShowHistory(true)}
        className="fixed top-3 right-3 z-50 bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-4 py-2 rounded-lg"
      >
        Histórico de Campanhas
      </Button>

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-20 pb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-yellow-500 mb-8">
          Painel Gerador de Campanhas
        </h1>

        {/* Form */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="country" className="text-white font-medium">País</Label>
                <Select value={country} onValueChange={setCountry}>
                  <SelectTrigger className="bg-white text-black">
                    <SelectValue placeholder="Selecione um país" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    {countries.map(country => (
                      <SelectItem key={country} value={country} className="text-black">
                        {country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="strategy" className="text-white font-medium">Estratégia de Funil</Label>
                <Select value={strategy} onValueChange={setStrategy}>
                  <SelectTrigger className="bg-white text-black">
                    <SelectValue placeholder="Escolha uma estratégia" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    {strategies.map(strategy => (
                      <SelectItem key={strategy.value} value={strategy.value} className="text-black">
                        {strategy.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="product" className="text-white font-medium">Produto</Label>
                <Input
                  id="product"
                  placeholder="Ex: Testoy Gel"
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  className="bg-white text-black"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="price" className="text-white font-medium">Preço</Label>
                <Input
                  id="price"
                  placeholder="Ex: R$ 197,00"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="bg-white text-black"
                />
              </div>
            </div>

            <div className="mt-6">
              <Button
                onClick={generateCampaign}
                disabled={isGenerating}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 text-lg"
              >
                {isGenerating ? "Gerando Campanha..." : "Gerar Campanha"}
              </Button>
            </div>
          </div>
        </div>

        {/* Campaign Result */}
        {showResult && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-700">
              <h2 className="text-2xl font-bold text-yellow-500 mb-4">Resultado da Copy:</h2>
              <pre className="whitespace-pre-wrap text-white bg-black p-4 rounded border border-zinc-600 mb-4">
                {campaignResult}
              </pre>
              <Button
                onClick={saveCampaign}
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 py-2"
              >
                Salvar Campanha
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* History Modal */}
      <Dialog open={showHistory} onOpenChange={setShowHistory}>
        <DialogContent className="bg-zinc-900 border-zinc-700 text-white max-w-md">
          <DialogHeader>
            <DialogTitle className="text-yellow-500">Últimas Campanhas</DialogTitle>
          </DialogHeader>
          <div className="max-h-96 overflow-y-auto">
            {campaignHistory.length === 0 ? (
              <p className="text-zinc-400 text-center py-4">Nenhuma campanha salva ainda.</p>
            ) : (
              <div className="space-y-3">
                {campaignHistory.map((campaign, index) => (
                  <div key={index} className="border-b border-zinc-600 pb-3">
                    <div className="text-sm text-zinc-300 mb-2">
                      {campaign.substring(0, 100)}...
                    </div>
                    <Button
                      onClick={() => deleteCampaign(index)}
                      variant="destructive"
                      size="sm"
                      className="text-xs"
                    >
                      Excluir
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CampaignGenerator;
