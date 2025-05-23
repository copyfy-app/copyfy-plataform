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

// Mock country data with 100 countries total
const countries = [
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

// Template content for different languages
const templateContent = {
  titles: {
    en: [
      "Discover the Best [Product] Online",
      "Exclusive Offer: Premium [Product]",
      "[Product] Professional - 50% OFF Today",
      "The Secret of [Product] Revealed!",
      "Save with Our [Product] Now",
      "Original [Product] with Free Shipping",
      "Revolutionize Your Day with [Product]",
      "Latest Release: [Product] 2023",
      "[Product] that Transforms Results",
      "Try [Product] - Satisfaction Guaranteed",
      "The Experts' Favorite [Product]",
      "Limited Time [Product] Promotion",
      "Compare and Save on [Product]",
      "[Product] with Unmissable Discount",
      "Original [Product] - Express Delivery",
      "Take Advantage: [Product] with Gift",
      "Premium [Product] - Superior Quality",
      "Buy [Product] Now and Save",
      "Tested and Approved [Product]",
      "The Best [Product] in the Category",
    ],
    es: [
      "Descubre el Mejor [Product] Online",
      "Oferta Exclusiva: [Product] Premium",
      "[Product] Profesional - 50% DESC Hoy",
      "¡El Secreto del [Product] Revelado!",
      "Ahorra con Nuestro [Product] Ahora",
      "[Product] Original con Envío Gratis",
      "Revoluciona tu Día con [Product]",
      "Último Lanzamiento: [Product] 2023",
      "[Product] que Transforma Resultados",
      "Prueba [Product] - Satisfacción Garantizada",
      "El [Product] Favorito de los Expertos",
      "Promoción [Product] por Tiempo Limitado",
      "Compara y Ahorra en [Product]",
      "[Product] con Descuento Imperdible",
      "[Product] Original - Entrega Express",
      "Aprovecha: [Product] con Regalo",
      "[Product] Premium - Calidad Superior",
      "Compra [Product] Ahora y Ahorra",
      "[Product] Probado y Aprobado",
      "El Mejor [Product] de la Categoría",
    ],
    pt: [
      "Descubra o Melhor [Product] Online",
      "Oferta Exclusiva: [Product] Premium",
      "[Product] Profissional - 50% OFF Hoje",
      "O Segredo do [Product] Revelado!",
      "Economize com Nosso [Product] Agora",
      "[Product] Original com Frete Grátis",
      "Revolucione seu Dia com [Product]",
      "Último Lançamento: [Product] 2023",
      "[Product] que Transforma Resultados",
      "Experimente [Product] - Satisfação Garantida",
      "O [Product] Favorito dos Especialistas",
      "Promoção [Product] por Tempo Limitado",
      "Compare e Economize no [Product]",
      "[Product] com Desconto Imperdível",
      "[Product] Original - Entrega Expressa",
      "Aproveite: [Product] com Brinde",
      "[Product] Premium - Qualidade Superior",
      "Compre [Product] Agora e Economize",
      "[Product] Testado e Aprovado",
      "O Melhor [Product] da Categoria",
    ],
    fr: [
      "Découvrez le Meilleur [Product] en Ligne",
      "Offre Exclusive: [Product] Premium",
      "[Product] Professionnel - 50% de Réduction",
      "Le Secret du [Product] Révélé!",
      "Économisez avec Notre [Product] Maintenant",
      "[Product] Original avec Livraison Gratuite",
      "Révolutionnez Votre Journée avec [Product]",
      "Dernière Sortie: [Product] 2023",
      "[Product] qui Transforme les Résultats",
      "Essayez [Product] - Satisfaction Garantie",
      "Le [Product] Favori des Experts",
      "Promotion [Product] à Durée Limitée",
      "Comparez et Économisez sur [Product]",
      "[Product] avec Remise Immanquable",
      "[Product] Original - Livraison Express",
      "Profitez: [Product] avec Cadeau",
      "[Product] Premium - Qualité Supérieure",
      "Achetez [Product] Maintenant et Économisez",
      "[Product] Testé et Approuvé",
      "Le Meilleur [Product] de la Catégorie",
    ],
    de: [
      "Entdecken Sie das beste [Product] Online",
      "Exklusives Angebot: Premium [Product]",
      "[Product] Professional - 50% Rabatt Heute",
      "Das Geheimnis des [Product] enthüllt!",
      "Sparen Sie mit Unserem [Product] Jetzt",
      "Original [Product] mit Kostenlosem Versand",
      "Revolutionieren Sie Ihren Tag mit [Product]",
      "Neueste Veröffentlichung: [Product] 2023",
      "[Product] das Ergebnisse Transformiert",
      "Testen Sie [Product] - Zufriedenheit Garantiert",
      "Das [Product] Favorit der Experten",
      "[Product] Aktion für Begrenzte Zeit",
      "Vergleichen und Sparen Sie beim [Product]",
      "[Product] mit Unschlagbarem Rabatt",
      "Original [Product] - Express-Lieferung",
      "Nutzen Sie: [Product] mit Geschenk",
      "Premium [Product] - Überlegene Qualität",
      "Kaufen Sie [Product] Jetzt und Sparen Sie",
      "Getestet und Genehmigt [Product]",
      "Das Beste [Product] in der Kategorie",
    ],
  },
  descriptions: {
    en: [
      "Discover why our [Product] is the preferred choice. Exclusive benefits and complete satisfaction guarantee!",
      "Save time and money with our [Product]. Immediate results and personalized support.",
      "Premium [Product] with guaranteed quality. Fast and secure delivery. Take advantage of our offer!",
      "Transform your results with [Product]. Used by professionals. Buy now with discount!",
      "The best-selling [Product]. 5-star rating. Last units available with free shipping!",
      "Definitive solution: revolutionary [Product]. Exclusive technology and proven results.",
      "Versatile and durable [Product]. Ideal for all needs. Satisfaction or your money back!",
      "New [Product]: superior performance, affordable price. Save 30% on purchase today!",
      "Try the award-winning [Product]. Same day shipping for orders until 3pm. Lifetime warranty!",
      "Official [Product]: guaranteed authenticity. Pay in up to 12 installments without interest. Limited time promotion!",
    ],
    es: [
      "Descubre por qué nuestro [Product] es el preferido. ¡Beneficios exclusivos y garantía total de satisfacción!",
      "Ahorra tiempo y dinero con nuestro [Product]. Resultados inmediatos y soporte personalizado.",
      "[Product] premium con calidad garantizada. Entrega rápida y segura. ¡Aprovecha nuestra oferta!",
      "Transforma tus resultados con [Product]. Usado por profesionales. ¡Compra ahora con descuento!",
      "El [Product] más vendido. Valoración de 5 estrellas. ¡Últimas unidades disponibles con envío gratis!",
      "Solución definitiva: [Product] revolucionario. Tecnología exclusiva y resultados comprobados.",
      "[Product] versátil y duradero. Ideal para todas las necesidades. ¡Satisfacción o devolución de tu dinero!",
      "Nuevo [Product]: rendimiento superior, precio accesible. ¡Ahorra 30% en la compra hoy!",
      "Prueba el premiado [Product]. Envío el mismo día para pedidos hasta las 15h. ¡Garantía de por vida!",
      "[Product] oficial: autenticidad garantizada. Paga hasta en 12 cuotas sin intereses. ¡Promoción por tiempo limitado!",
    ],
    pt: [
      "Descubra por que nosso [Product] é o preferido. Benefícios exclusivos e garantia total de satisfação!",
      "Economize tempo e dinheiro com nosso [Product]. Resultados imediatos e suporte personalizado.",
      "[Product] premium com qualidade garantida. Entrega rápida e segura. Aproveite nossa oferta!",
      "Transforme seus resultados com [Product]. Usado por profissionais. Compre agora com desconto!",
      "O [Product] mais vendido. Avaliação 5 estrelas. Últimas unidades disponíveis com frete grátis!",
      "Solução definitiva: [Product] revolucionário. Tecnologia exclusiva e resultados comprovados.",
      "[Product] versátil e durável. Ideal para todas as necessidades. Satisfação ou seu dinheiro de volta!",
      "Novo [Product]: desempenho superior, preço acessível. Economize 30% na compra hoje!",
      "Experimente o premiado [Product]. Envio no mesmo dia para pedidos até 15h. Garantia vitalícia!",
      "[Product] oficial: autenticidade garantizada. Parcele em até 12x sem juros. Promoção por tempo limitado!",
    ],
    fr: [
      "Découvrez pourquoi notre [Product] est le préféré. Avantages exclusifs et garantie totale de satisfaction!",
      "Économisez du temps et de l'argent avec notre [Product]. Résultats immédiats et support personnalisé.",
      "[Product] premium avec qualité garantie. Livraison rapide et sécurisée. Profitez de notre offre!",
      "Transformez vos résultats avec [Product]. Utilisé par les professionnels. Achetez maintenant avec remise!",
      "Le [Product] le plus vendu. Évaluation 5 étoiles. Dernières unités disponibles avec livraison gratuite!",
      "Solution définitive: [Product] révolutionnaire. Technologie exclusive et résultats prouvés.",
      "[Product] polyvalent et durable. Idéal pour tous les besoins. Satisfaction ou remboursement!",
      "Nouveau [Product]: performance supérieure, prix abordable. Économisez 30% sur l'achat aujourd'hui!",
      "Essayez le [Product] primé. Expédition le jour même pour les commandes jusqu'à 15h. Garantie à vie!",
      "[Product] officiel: authenticité garantie. Payez jusqu'à 12 fois sans intérêt. Promotion à durée limitée!",
    ],
  },
  usps: {
    en: [
      "24h Delivery",
      "2 Year Warranty",
      "Premium 24/7 Support",
    ],
    es: [
      "Entrega en 24h",
      "Garantía de 2 Años",
      "Soporte Premium 24/7",
    ],
    pt: [
      "Entrega em 24h",
      "Garantia de 2 Anos",
      "Suporte Premium 24/7",
    ],
    fr: [
      "Livraison en 24h",
      "Garantie de 2 Ans",
      "Support Premium 24/7",
    ],
    de: [
      "24-Stunden-Lieferung",
      "2 Jahre Garantie",
      "Premium 24/7 Support",
    ],
  },
  sitelinks: {
    en: [
      { title: "Read Reviews ⭐⭐⭐⭐⭐", description: "Over 10,000 satisfied customers" },
      { title: "Buy with 50% OFF", description: "Limited time offer" },
      { title: "Satisfaction Guarantee", description: "30 days to test or your money back" },
      { title: "Free Shipping Today", description: "For purchases over $100" },
    ],
    es: [
      { title: "Leer Reseñas ⭐⭐⭐⭐⭐", description: "Más de 10,000 clientes satisfechos" },
      { title: "Compre con 50% DESCUENTO", description: "Oferta por tiempo limitado" },
      { title: "Garantía de Satisfacción", description: "30 días para probar o devolvemos su dinero" },
      { title: "Envío Gratis Hoy", description: "Para compras superiores a $100" },
    ],
    pt: [
      { title: "Ver Avaliações ⭐⭐⭐⭐⭐", description: "Mais de 10.000 clientes satisfeitos" },
      { title: "Compre com 50% OFF", description: "Oferta por tempo limitado" },
      { title: "Garantia de Satisfação", description: "30 dias para testar ou seu dinheiro de volta" },
      { title: "Frete Grátis Hoje", description: "Para compras acima de R$100" },
    ],
    fr: [
      { title: "Lire les Avis ⭐⭐⭐⭐⭐", description: "Plus de 10 000 clients satisfaits" },
      { title: "Achetez avec 50% de RÉDUCTION", description: "Offre à durée limitée" },
      { title: "Garantie de Satisfaction", description: "30 jours pour tester ou remboursement" },
      { title: "Livraison Gratuite Aujourd'hui", description: "Pour les achats supérieurs à 100€" },
    ],
  },
};

// Map countries to language codes
const countryToLanguage = {
  us: "en", gb: "en", ca: "en", au: "en", nz: "en", in: "en", za: "en", ie: "en", sg: "en", ph: "en",
  es: "es", mx: "es", co: "es", ar: "es", cl: "es", pe: "es", ve: "es", ec: "es", uy: "es", py: "es",
  bo: "es", gt: "es", sv: "es", hn: "es", ni: "es", cr: "es", pa: "es", cu: "es", do: "es", pr: "es",
  br: "pt", pt: "pt", ao: "pt", mz: "pt",
  fr: "fr", be: "fr", 
  de: "de", at: "de", ch: "de" 
};

// Default language if not found in the mapping
const defaultLanguage = "en";

const Dashboard = () => {
  const [country, setCountry] = useState("");
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [funnel, setFunnel] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [campaignGenerated, setCampaignGenerated] = useState(false);
  const [activeTab, setActiveTab] = useState("titles");
  const [remainingDays, setRemainingDays] = useState(2);
  const [currentLanguage, setCurrentLanguage] = useState(defaultLanguage);

  // Content states for generated campaign
  const [titles, setTitles] = useState([]);
  const [descriptions, setDescriptions] = useState([]);
  const [usps, setUsps] = useState([]);
  const [sitelinks, setSitelinks] = useState([]);

  // Update language when country changes
  const handleCountryChange = (countryCode) => {
    setCountry(countryCode);
    const languageCode = countryToLanguage[countryCode] || defaultLanguage;
    setCurrentLanguage(languageCode);
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

    // Get the language code based on selected country
    const languageCode = countryToLanguage[country] || defaultLanguage;
    setCurrentLanguage(languageCode);

    // Simulate API call
    setTimeout(() => {
      // Get content in the appropriate language
      const languageTitles = templateContent.titles[languageCode] || templateContent.titles[defaultLanguage];
      const languageDescriptions = templateContent.descriptions[languageCode] || templateContent.descriptions[defaultLanguage];
      const languageUSPs = templateContent.usps[languageCode] || templateContent.usps[defaultLanguage];
      const languageSitelinks = templateContent.sitelinks[languageCode] || templateContent.sitelinks[defaultLanguage];

      // Set content in the appropriate language
      setTitles(languageTitles);
      setDescriptions(languageDescriptions);
      setUsps(languageUSPs);
      setSitelinks(languageSitelinks);

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
    navigator.clipboard.writeText(text.replace("[Product]", product));
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
    setCurrentLanguage(defaultLanguage);
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
                            <p className="pr-8">{title.replace("[Product]", product)}</p>
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
                            <p className="pr-8">{desc.replace("[Product]", product)}</p>
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
