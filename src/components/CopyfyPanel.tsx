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
import { Copy, FileText, HelpCircle, LogOut, User, Award, Mail } from "lucide-react";
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
    description: string;
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
      const mailtoLink = `mailto:inspiranegociosonline@gmail.com?subject=Copyfy Contact from ${contactName}&body=${encodeURIComponent(contactMessage)}\n\nFrom: ${contactName} (${contactEmail})`;
      window.open(mailtoLink, "_blank");
      setContactName("");
      setContactEmail("");
      setContactMessage("");
      setIsSubmittingContact(false);
      setIsContactOpen(false);
      toast({
        title: "Mensagem enviada!",
        description: "Abrindo seu cliente de e-mail..."
      });
    }, 1000);
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
  return <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black border-b border-zinc-700 py-8 shadow-lg">
        <div className="container mx-auto px-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-yellow-500 tracking-wide">Copyfy</h1>
            <p className="text-xl md:text-2xl text-yellow-400 font-semibold">A Copy Perfeita Para sua Campanha em Poucos Clicks</p>
          </div>
        </div>
      </header>

      {/* Top Navigation Bar */}
      <nav className="bg-zinc-900 border-b border-zinc-700">
        <div className="container mx-auto px-8 py-4 bg-zinc-900">
          <div className="flex justify-between items-center">
            {/* User Info */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-black" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-white">{user?.email}</span>
                {isAdmin && <Badge variant="default" className="bg-red-600 text-white text-xs">
                    ADMIN
                  </Badge>}
                <Badge variant={isTrialActive ? "outline" : "destructive"} className="text-xs bg-lime-600">
                  {isAdmin ? "Ilimitado" : isTrialActive ? `Trial: ${trialDaysRemaining}d` : 'Expirado'}
                </Badge>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center gap-6">
              <a href="/terms-of-use" className="text-yellow-500 hover:text-yellow-400 transition-colors text-sm font-medium">
                Termos de Uso
              </a>
              <a href="/privacy-policy" className="text-yellow-500 hover:text-yellow-400 transition-colors text-sm font-medium">
                Política de Privacidade
              </a>
              
              {/* Contact Dialog */}
              <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
                <DialogTrigger asChild>
                  <button className="text-yellow-500 hover:text-yellow-400 transition-colors text-sm font-medium">
                    Contato
                  </button>
                </DialogTrigger>
                <DialogContent className="bg-zinc-900 border-zinc-700 text-white">
                  <DialogHeader>
                    <DialogTitle className="text-yellow-500 flex items-center gap-2">
                      <Mail className="w-5 h-5" />
                      Entre em Contato
                    </DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="contact-name" className="text-white">Nome</Label>
                      <Input id="contact-name" value={contactName} onChange={e => setContactName(e.target.value)} required placeholder="Seu nome" className="bg-black border-zinc-600 text-white" />
                    </div>
                    <div>
                      <Label htmlFor="contact-email" className="text-white">E-mail</Label>
                      <Input id="contact-email" type="email" value={contactEmail} onChange={e => setContactEmail(e.target.value)} required placeholder="seu@email.com" className="bg-black border-zinc-600 text-white" />
                    </div>
                    <div>
                      <Label htmlFor="contact-message" className="text-white">Mensagem</Label>
                      <Textarea id="contact-message" value={contactMessage} onChange={e => setContactMessage(e.target.value)} required placeholder="Sua mensagem..." className="bg-black border-zinc-600 text-white min-h-24" />
                    </div>
                    <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold" disabled={isSubmittingContact}>
                      {isSubmittingContact ? "Enviando..." : "Enviar Mensagem"}
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>

              <button onClick={signOut} className="text-yellow-500 hover:text-yellow-400 transition-colors text-sm font-medium">
                Sair
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-8 py-8">
        {!campaignGenerated ? <div className="max-w-4xl mx-auto">
            <div className="rounded-lg border border-zinc-700 shadow-xl p-8 bg-zinc-900">
              <h2 className="text-2xl font-bold text-white mb-8 text-center">
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
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-white">
                Campanha para {product}
              </h2>
              <Button onClick={() => setCampaignGenerated(false)} className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 py-3 rounded-lg">
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
                  {titles.map((title, idx) => <div key={idx} className="bg-black p-4 rounded-lg border border-zinc-600 hover:border-yellow-500 transition-all cursor-pointer group" onClick={() => copyToClipboard(title)}>
                      <p className="text-white group-hover:text-yellow-100 transition-colors">{title}</p>
                    </div>)}
                </div>
              </div>

              {/* Descrições */}
              <div className="bg-zinc-900 rounded-lg border border-zinc-700 p-6">
                <h3 className="text-white font-bold mb-4 text-xl flex items-center gap-2">
                  <FileText className="w-5 h-5 text-yellow-500" />
                  Descrições
                </h3>
                <div className="space-y-3">
                  {descriptions.map((desc, idx) => <div key={idx} className="bg-black p-4 rounded-lg border border-zinc-600 hover:border-yellow-500 transition-all cursor-pointer group" onClick={() => copyToClipboard(desc)}>
                      <p className="text-white group-hover:text-yellow-100 transition-colors">{desc}</p>
                    </div>)}
                </div>
              </div>

              {/* Sitelinks */}
              <div className="bg-zinc-900 rounded-lg border border-zinc-700 p-6">
                <h3 className="text-white font-bold mb-4 text-xl">Sitelinks</h3>
                <div className="space-y-3">
                  {sitelinks.map((link, idx) => <div key={idx} className="bg-black p-4 rounded-lg border border-zinc-600 hover:border-yellow-500 transition-all cursor-pointer group" onClick={() => copyToClipboard(`${link.title}: ${link.description}`)}>
                      <h4 className="font-bold text-yellow-500 group-hover:text-yellow-400 transition-colors">{link.title}</h4>
                      <p className="text-sm text-zinc-300 group-hover:text-white transition-colors">{link.description}</p>
                    </div>)}
                </div>
              </div>

              {/* USPs */}
              <div className="bg-zinc-900 rounded-lg border border-zinc-700 p-6">
                <h3 className="text-white font-bold mb-4 text-xl">Destaques</h3>
                <div className="space-y-3">
                  {usps.map((usp, idx) => <div key={idx} className="bg-black p-4 rounded-lg border border-zinc-600 hover:border-yellow-500 transition-all cursor-pointer group" onClick={() => copyToClipboard(usp)}>
                      <p className="text-white group-hover:text-yellow-100 transition-colors">{usp}</p>
                    </div>)}
                </div>
              </div>
            </div>
          </div>}
      </main>
    </div>;
};
export default CopyfyPanel;