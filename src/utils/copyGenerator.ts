
import { GeneratedContent } from './types';

// Utility to generate unique, multilingual COD (Cash on Delivery) marketing copies

// Character limits
const LIMITS = {
  TITLE: 30,
  DESCRIPTION: 90,
  USP: 25,
  SITELINK_TITLE: 30,
  SITELINK_DESC: 80,
};

// Template database with COD-focused marketing content across different languages
const contentTemplates: Record<string, any> = {
  // English templates
  en: {
    titles: [
      "Buy [PRODUTO] - Pay on Delivery",
      "Order [PRODUTO] Now, Pay Later",
      "Pay Cash for [PRODUTO] on Arrival",
      "[PRODUTO] - No Prepayment Needed",
      "Cash on Delivery: [PRODUTO] [PAÍS]",
      "Limited Offer: [PRODUTO] COD",
      "[PRODUTO] - See Before You Pay",
      "No Risk: [PRODUTO] Pay on Receipt",
      "Get [PRODUTO] Today, Pay on Delivery",
      "[PRODUTO] - Free Delivery, Pay Cash",
      "[PRODUTO] - Limited Stock, COD",
      "Special Deal: COD [PRODUTO]",
      "Pay When Delivered: [PRODUTO]",
      "Try [PRODUTO] Before Payment",
      "[PRODUTO]: Pay Only After Delivery",
      "Fast Delivery: [PRODUTO] Pay Cash",
      "[PRODUTO]: COD + Today Only Offer",
      "Exclusive: [PRODUTO] Cash Payment",
      "Best Seller: [PRODUTO] Pay on Arrival",
      "Order Now: [PRODUTO] COD Available",
    ],
    descriptions: [
      "Order [PRODUTO] for [PREÇO] now and pay only when it arrives at your door. Limited stock available in [PAÍS]!",
      "No card needed! Order premium [PRODUTO] today and pay [PREÇO] on delivery. Last units in [PAÍS]!",
      "Try before you buy! Get [PRODUTO] for [PREÇO] with cash on delivery in [PAÍS]. Offer ends today!",
      "Exclusive [PRODUTO] direct from supplier. Just [PREÇO] paid on arrival. Fast shipping in all [PAÍS]!",
      "Risk-free purchase! Order [PRODUTO], pay [PREÇO] cash when delivered. Limited time offer in [PAÍS]!",
      "Secure [PRODUTO] now for just [PREÇO]. Pay only when you receive it. 24h shipping in [PAÍS]!",
      "Last stock of [PRODUTO] for [PREÇO]! Cash on delivery available. Don't miss out - [PAÍS] only deal!",
      "No advance payment! Get [PRODUTO] for [PREÇO] and pay when it arrives at your home in [PAÍS].",
      "Reserve [PRODUTO] now before stock runs out. Pay [PREÇO] cash on delivery in [PAÍS]. 50% sold already!",
      "Special [PAÍS] offer: [PRODUTO] for only [PREÇO] - pay cash when delivered. 30-day guarantee!",
    ],
    usps: [
      "Pay Only Upon Delivery",
      "No Advance Payment",
      "Free 24h Shipping",
      "Limited Stock Alert",
      "Try Before You Pay",
      "Exclusive [PAÍS] Deal",
      "Cash Payment Option",
      "Today Only: [PREÇO] Off",
      "Only 10 Units Left",
      "Fast Delivery: 1-2 Days",
      "30-Day Guarantee",
      "Authentic Product",
      "Verified by [PAÍS] Buyers",
      "Risk-Free Purchase",
      "Official [PAÍS] Store",
      "No Hidden Costs",
      "Same Day Dispatch",
      "Over 10,000 Sold",
    ],
    sitelinks: [
      { 
        title: "Pay Cash on Delivery", 
        description: "No credit card needed - pay only when you receive your [PRODUTO]" 
      },
      { 
        title: "Limited Time Offer: [PREÇO]", 
        description: "Special deal for [PAÍS] customers - order now before price increase" 
      },
      { 
        title: "Last 24 Hours - 50% Off", 
        description: "Hurry! Final day of our exclusive [PAÍS] discount on [PRODUTO]" 
      },
      { 
        title: "Free Express Delivery", 
        description: "Get [PRODUTO] delivered in 24h and pay cash on arrival - [PAÍS] only" 
      },
      { 
        title: "Only 10 Units Left", 
        description: "Due to high demand in [PAÍS], [PRODUTO] stock is running low" 
      },
      { 
        title: "Satisfaction Guaranteed", 
        description: "Try [PRODUTO] risk-free and pay [PREÇO] only if completely satisfied" 
      },
      { 
        title: "Authentic Product", 
        description: "100% original [PRODUTO] with official warranty in [PAÍS]" 
      },
      { 
        title: "Today's Special: Buy 1 Get 1", 
        description: "Exclusive 2-for-1 [PRODUTO] offer for [PAÍS] - limited time only" 
      },
    ],
  },
  
  // Portuguese templates
  pt: {
    titles: [
      "Compre [PRODUTO] - Pague na Entrega",
      "Peça [PRODUTO] Já, Pague Depois",
      "Pague em Dinheiro na Entrega",
      "[PRODUTO] - Sem Pagamento Antecipado",
      "[PRODUTO] - Disponível em [PAÍS]",
      "Oferta Limitada: [PRODUTO]",
      "[PRODUTO] - Veja Antes de Pagar",
      "Sem Risco: [PRODUTO] Pague ao Receber",
      "Receba [PRODUTO] Hoje, Pague na Entrega",
      "[PRODUTO] - Entrega Grátis, Pague em Casa",
      "[PRODUTO] - Estoque Limitado",
      "Promoção Especial: [PRODUTO]",
      "Pague Apenas na Entrega: [PRODUTO]",
      "Experimente [PRODUTO] Antes de Pagar",
      "[PRODUTO]: Pague Só Após a Entrega",
      "Entrega Rápida: [PRODUTO]",
      "[PRODUTO]: Oferta Só Por Hoje",
      "Exclusivo: [PRODUTO] Pagamento em Dinheiro",
      "Mais Vendido: [PRODUTO]",
      "Peça Agora: [PRODUTO] Disponível",
    ],
    descriptions: [
      "Peça [PRODUTO] por [PREÇO] agora e pague apenas quando chegar na sua porta. Estoque limitado em [PAÍS]!",
      "Sem precisar de cartão! Peça o [PRODUTO] premium hoje e pague [PREÇO] na entrega. Últimas unidades em [PAÍS]!",
      "Experimente antes de comprar! Adquira [PRODUTO] por [PREÇO] com pagamento na entrega em [PAÍS]. Oferta termina hoje!",
      "Exclusivo [PRODUTO] direto do fornecedor. Apenas [PREÇO] pagos na chegada. Envio rápido em todo [PAÍS]!",
      "Compra sem risco! Peça [PRODUTO], pague [PREÇO] em dinheiro quando entregue. Oferta por tempo limitado em [PAÍS]!",
      "Garanta seu [PRODUTO] agora por apenas [PREÇO]. Pague somente quando recebê-lo. Envio 24h em [PAÍS]!",
      "Último estoque de [PRODUTO] por [PREÇO]! Pagamento na entrega disponível. Não perca - oferta exclusiva para [PAÍS]!",
      "Sem pagamento antecipado! Obtenha [PRODUTO] por [PREÇO] e pague quando chegar na sua casa em [PAÍS].",
      "Reserve [PRODUTO] agora antes que o estoque acabe. Pague [PREÇO] em dinheiro na entrega em [PAÍS]. 50% já vendido!",
      "Oferta especial para [PAÍS]: [PRODUTO] por apenas [PREÇO] - pague em dinheiro na entrega. Garantia de 30 dias!",
    ],
    usps: [
      "Pague Apenas na Entrega",
      "Sem Pagamento Antecipado",
      "Frete Grátis 24h",
      "Estoque Limitado",
      "Experimente Antes de Pagar",
      "Oferta Exclusiva [PAÍS]",
      "Opção Pagamento em Dinheiro",
      "Só Hoje: [PREÇO] Off",
      "Apenas 10 Unidades Restantes",
      "Entrega Rápida: 1-2 Dias",
      "Garantia de 30 Dias",
      "Produto Autêntico",
      "Verificado por Compradores",
      "Compra Sem Riscos",
      "Loja Oficial em [PAÍS]",
      "Sem Custos Ocultos",
      "Envio no Mesmo Dia",
      "Mais de 10.000 Vendidos",
    ],
    sitelinks: [
      { 
        title: "Pague em Dinheiro na Entrega", 
        description: "Sem necessidade de cartão - pague apenas quando receber seu [PRODUTO]" 
      },
      { 
        title: "Oferta por Tempo Limitado", 
        description: "Promoção especial para clientes de [PAÍS] - peça antes do aumento" 
      },
      { 
        title: "Últimas 24 Horas - 50% Off", 
        description: "Corra! Último dia do nosso desconto exclusivo para [PAÍS] no [PRODUTO]" 
      },
      { 
        title: "Entrega Expressa Grátis", 
        description: "Receba [PRODUTO] em 24h e pague em dinheiro na chegada - só em [PAÍS]" 
      },
      { 
        title: "Apenas 10 Unidades Disponíveis", 
        description: "Devido à alta demanda em [PAÍS], o estoque de [PRODUTO] está acabando" 
      },
      { 
        title: "Satisfação Garantida", 
        description: "Experimente [PRODUTO] sem riscos e pague [PREÇO] só se estiver satisfeito" 
      },
      { 
        title: "Produto Autêntico", 
        description: "[PRODUTO] 100% original com garantia oficial em [PAÍS]" 
      },
      { 
        title: "Especial de Hoje: Compre 1 Leve 2", 
        description: "Oferta exclusiva 2 pelo preço de 1 para [PAÍS] - por tempo limitado" 
      },
    ],
  },
  
  // Spanish templates
  es: {
    titles: [
      "Compre [PRODUTO] - Pague al Recibir",
      "Pida [PRODUTO] Ya, Pague Después",
      "Pago en Efectivo a la Entrega",
      "[PRODUTO] - Sin Pago por Adelantado",
      "[PRODUTO] - Disponible en [PAÍS]",
      "Oferta Limitada: [PRODUTO] COD",
      "[PRODUTO] - Vea Antes de Pagar",
      "Sin Riesgo: [PRODUTO] Pague al Recibir",
      "Reciba [PRODUTO] Hoy, Pague al Entregarse",
      "[PRODUTO] - Entrega Gratis, Pague en Casa",
      "[PRODUTO] - Stock Limitado",
      "Promoción Especial: [PRODUTO]",
      "Pague Solo al Recibir: [PRODUTO]",
      "Pruebe [PRODUTO] Antes de Pagar",
      "[PRODUTO]: Pague Solo Tras la Entrega",
      "Entrega Rápida: [PRODUTO]",
      "[PRODUTO]: Oferta Solo Por Hoy",
      "Exclusivo: [PRODUTO] Pago en Efectivo",
      "Más Vendido: [PRODUTO]",
      "Ordene Ahora: [PRODUTO] Disponible",
    ],
    descriptions: [
      "Pida [PRODUTO] por [PREÇO] ahora y pague solo cuando llegue a su puerta. ¡Stock limitado en [PAÍS]!",
      "¡Sin necesidad de tarjeta! Pida el [PRODUTO] premium hoy y pague [PREÇO] a la entrega. ¡Últimas unidades en [PAÍS]!",
      "¡Pruebe antes de comprar! Adquiera [PRODUTO] por [PREÇO] con pago contra entrega en [PAÍS]. ¡La oferta termina hoy!",
      "Exclusivo [PRODUTO] directo del proveedor. Solo [PREÇO] pagados a la llegada. ¡Envío rápido en todo [PAÍS]!",
      "¡Compra sin riesgo! Pida [PRODUTO], pague [PREÇO] en efectivo cuando se entregue. ¡Oferta por tiempo limitado en [PAÍS]!",
      "Asegure su [PRODUTO] ahora por solo [PREÇO]. Pague solo cuando lo reciba. ¡Envío 24h en [PAÍS]!",
      "¡Último stock de [PRODUTO] por [PREÇO]! Pago contra entrega disponible. No se lo pierda - ¡oferta exclusiva para [PAÍS]!",
      "¡Sin pago por adelantado! Obtenga [PRODUTO] por [PREÇO] y pague cuando llegue a su casa en [PAÍS].",
      "Reserve [PRODUTO] ahora antes de que se agote. Pague [PREÇO] en efectivo a la entrega en [PAÍS]. ¡50% ya vendido!",
      "Oferta especial para [PAÍS]: [PRODUTO] por solo [PREÇO] - pague en efectivo a la entrega. ¡Garantía de 30 días!",
    ],
    usps: [
      "Pague Solo al Recibir",
      "Sin Pago por Adelantado",
      "Envío Gratis 24h",
      "Stock Limitado",
      "Pruebe Antes de Pagar",
      "Oferta Exclusiva [PAÍS]",
      "Opción Pago en Efectivo",
      "Solo Hoy: [PREÇO] Descuento",
      "Solo 10 Unidades Restantes",
      "Entrega Rápida: 1-2 Días",
      "Garantía de 30 Días",
      "Producto Auténtico",
      "Verificado por Compradores",
      "Compra Sin Riesgos",
      "Tienda Oficial en [PAÍS]",
      "Sin Costos Ocultos",
      "Envío en el Mismo Día",
      "Más de 10.000 Vendidos",
    ],
    sitelinks: [
      { 
        title: "Pague en Efectivo al Recibir", 
        description: "Sin necesidad de tarjeta - pague solo cuando reciba su [PRODUTO]" 
      },
      { 
        title: "Oferta por Tiempo Limitado", 
        description: "Promoción especial para clientes de [PAÍS] - pida antes del aumento de precio" 
      },
      { 
        title: "Últimas 24 Horas - 50% Desc.", 
        description: "¡Corra! Último día de nuestro descuento exclusivo para [PAÍS] en [PRODUTO]" 
      },
      { 
        title: "Entrega Exprés Gratis", 
        description: "Reciba [PRODUTO] en 24h y pague en efectivo a la llegada - solo en [PAÍS]" 
      },
      { 
        title: "Solo 10 Unidades Disponibles", 
        description: "Debido a la alta demanda en [PAÍS], el stock de [PRODUTO] se está acabando" 
      },
      { 
        title: "Satisfacción Garantizada", 
        description: "Pruebe [PRODUTO] sin riesgos y pague [PREÇO] solo si está completamente satisfecho" 
      },
      { 
        title: "Producto Auténtico", 
        description: "[PRODUTO] 100% original con garantía oficial en [PAÍS]" 
      },
      { 
        title: "Especial de Hoy: 2x1", 
        description: "Oferta exclusiva 2 por el precio de 1 para [PAÍS] - por tiempo limitado" 
      },
    ],
  },

  // German templates
  de: {
    titles: [
      "[PRODUTO] - Zahlung bei Lieferung",
      "[PRODUTO] jetzt bestellen, später zahlen",
      "Barzahlung bei Lieferung: [PRODUTO]",
      "[PRODUTO] - Keine Vorauszahlung nötig",
      "Limitiertes Angebot: [PRODUTO]",
      "[PRODUTO] - Vor Zahlung ansehen",
      "Risikofrei: [PRODUTO] bei Erhalt zahlen",
      "[PRODUTO] heute erhalten, bei Lieferung zahlen",
      "[PRODUTO] - Gratis-Lieferung, Barzahlung",
      "[PRODUTO] - Begrenzte Stückzahl",
      "Sonderangebot: [PRODUTO]",
      "Zahlung erst bei Lieferung: [PRODUTO]",
      "[PRODUTO] vor Bezahlung testen",
      "[PRODUTO]: Zahlung erst nach Lieferung",
      "Schnelllieferung: [PRODUTO]",
      "[PRODUTO]: Nur-Heute-Angebot",
      "Exklusiv: [PRODUTO] Barzahlung möglich",
      "Bestseller: [PRODUTO]",
      "Jetzt bestellen: [PRODUTO] verfügbar",
    ],
    descriptions: [
      "Bestellen Sie [PRODUTO] für [PREÇO] jetzt und zahlen Sie erst bei Lieferung. Begrenzte Stückzahl in [PAÍS] verfügbar!",
      "Keine Karte erforderlich! Bestellen Sie premium [PRODUTO] heute und zahlen Sie [PREÇO] bei Lieferung. Letzte Einheiten in [PAÍS]!",
      "Erst testen, dann kaufen! Holen Sie sich [PRODUTO] für [PREÇO] mit Nachnahme in [PAÍS]. Angebot endet heute!",
      "Exklusives [PRODUTO] direkt vom Lieferanten. Nur [PREÇO] bei Ankunft zu zahlen. Schneller Versand in ganz [PAÍS]!",
      "Risikofreier Kauf! Bestellen Sie [PRODUTO], zahlen Sie [PREÇO] bar bei Lieferung. Zeitlich begrenztes Angebot in [PAÍS]!",
      "Sichern Sie sich [PRODUTO] jetzt für nur [PREÇO]. Zahlen Sie erst bei Erhalt. 24h-Versand in [PAÍS]!",
      "Letzter Bestand von [PRODUTO] für [PREÇO]! Nachnahme verfügbar. Verpassen Sie nicht - Nur in [PAÍS] erhältlich!",
      "Keine Vorauszahlung! Erhalten Sie [PRODUTO] für [PREÇO] und zahlen Sie bei Ankunft zu Hause in [PAÍS].",
      "Reservieren Sie [PRODUTO] jetzt bevor der Vorrat aufgebraucht ist. Zahlen Sie [PREÇO] bar bei Lieferung in [PAÍS]. Bereits 50% verkauft!",
      "Spezialangebot für [PAÍS]: [PRODUTO] für nur [PREÇO] - Barzahlung bei Lieferung. 30 Tage Garantie!",
    ],
    usps: [
      "Zahlung erst bei Lieferung",
      "Keine Vorauszahlung nötig",
      "Kostenloser 24h-Versand",
      "Limitierter Bestand",
      "Vor Bezahlung testen",
      "Exklusives [PAÍS]-Angebot",
      "Barzahlung möglich",
      "Nur heute: [PREÇO] Rabatt",
      "Nur noch 10 Stück übrig",
      "Schnelle Lieferung: 1-2 Tage",
      "30 Tage Garantie",
      "Authentisches Produkt",
      "Von [PAÍS]-Käufern bestätigt",
      "Risikofreier Kauf",
      "Offizieller [PAÍS]-Shop",
      "Keine versteckten Kosten",
      "Versand noch am selben Tag",
      "Über 10.000 verkauft",
    ],
    sitelinks: [
      { 
        title: "Zahlung per Nachnahme", 
        description: "Keine Kreditkarte nötig - zahlen Sie erst, wenn Sie Ihr [PRODUTO] erhalten" 
      },
      { 
        title: "Zeitlich begrenztes Angebot", 
        description: "Sonderangebot für [PAÍS]-Kunden - jetzt bestellen vor Preiserhöhung" 
      },
      { 
        title: "Letzte 24 Stunden - 50% Rabatt", 
        description: "Eilen Sie! Letzter Tag unseres exklusiven [PAÍS]-Rabatts auf [PRODUTO]" 
      },
      { 
        title: "Kostenlose Express-Lieferung", 
        description: "Erhalten Sie [PRODUTO] in 24h und zahlen Sie bar bei Ankunft - nur in [PAÍS]" 
      },
      { 
        title: "Nur noch 10 Einheiten übrig", 
        description: "Aufgrund hoher Nachfrage in [PAÍS] wird der [PRODUTO]-Bestand knapp" 
      },
      { 
        title: "Zufriedenheitsgarantie", 
        description: "Testen Sie [PRODUTO] risikofrei und zahlen Sie [PREÇO] nur bei vollster Zufriedenheit" 
      },
      { 
        title: "Authentisches Produkt", 
        description: "100% originales [PRODUTO] mit offizieller Garantie in [PAÍS]" 
      },
      { 
        title: "Tagesspecial: 2 zum Preis von 1", 
        description: "Exklusives 2-für-1 [PRODUTO] Angebot für [PAÍS] - zeitlich begrenzt" 
      },
    ],
  },

  // French templates
  fr: {
    titles: [
      "Achetez [PRODUTO] - Payez à la Livraison",
      "Commandez [PRODUTO], Payez Plus Tard",
      "Paiement en Espèces à la Livraison",
      "[PRODUTO] - Pas de Paiement Anticipé",
      "Offre Limitée: [PRODUTO]",
      "[PRODUTO] - Voir Avant de Payer",
      "Sans Risque: Payez à la Réception",
      "Recevez [PRODUTO] Aujourd'hui",
      "[PRODUTO] - Livraison Gratuite",
      "[PRODUTO] - Stock Limité",
      "Promotion Spéciale: [PRODUTO]",
      "Payez Seulement à la Livraison",
      "Essayez [PRODUTO] Avant de Payer",
      "[PRODUTO]: Paiement Après Livraison",
      "Livraison Rapide: [PRODUTO]",
      "[PRODUTO]: Offre du Jour Seulement",
      "Exclusivité: [PRODUTO] Paiement Cash",
      "Bestseller: [PRODUTO] en [PAÍS]",
      "Commandez Maintenant: [PRODUTO]",
    ],
    descriptions: [
      "Commandez [PRODUTO] pour [PREÇO] maintenant et payez uniquement à la livraison. Stock limité en [PAÍS]!",
      "Pas besoin de carte! Commandez le [PRODUTO] premium aujourd'hui et payez [PREÇO] à la livraison. Dernières unités en [PAÍS]!",
      "Essayez avant d'acheter! Obtenez [PRODUTO] pour [PREÇO] avec paiement à la livraison en [PAÍS]. L'offre se termine aujourd'hui!",
      "Exclusif [PRODUTO] directement du fournisseur. Seulement [PREÇO] payés à l'arrivée. Expédition rapide dans tout [PAÍS]!",
      "Achat sans risque! Commandez [PRODUTO], payez [PREÇO] en espèces à la livraison. Offre à durée limitée en [PAÍS]!",
      "Assurez-vous d'avoir [PRODUTO] maintenant pour seulement [PREÇO]. Payez uniquement à la réception. Expédition 24h en [PAÍS]!",
      "Dernier stock de [PRODUTO] pour [PREÇO]! Paiement à la livraison disponible. Ne manquez pas - offre exclusive pour [PAÍS]!",
      "Pas de paiement anticipé! Obtenez [PRODUTO] pour [PREÇO] et payez à l'arrivée chez vous en [PAÍS].",
      "Réservez [PRODUTO] maintenant avant épuisement du stock. Payez [PREÇO] en espèces à la livraison en [PAÍS]. Déjà 50% vendu!",
      "Offre spéciale pour [PAÍS]: [PRODUTO] pour seulement [PREÇO] - payez en espèces à la livraison. Garantie 30 jours!",
    ],
    usps: [
      "Payez Uniquement à la Livraison",
      "Pas de Paiement Anticipé",
      "Livraison Gratuite 24h",
      "Stock Limité",
      "Essayez Avant de Payer",
      "Offre Exclusive [PAÍS]",
      "Option Paiement en Espèces",
      "Aujourd'hui Seulement: -[PREÇO]",
      "Seulement 10 Unités Restantes",
      "Livraison Rapide: 1-2 Jours",
      "Garantie 30 Jours",
      "Produit Authentique",
      "Vérifié par les Acheteurs",
      "Achat Sans Risque",
      "Boutique Officielle en [PAÍS]",
      "Pas de Frais Cachés",
      "Expédition le Jour Même",
      "Plus de 10.000 Vendus",
    ],
    sitelinks: [
      { 
        title: "Payez en Espèces à la Livraison", 
        description: "Pas besoin de carte - payez uniquement quand vous recevez votre [PRODUTO]" 
      },
      { 
        title: "Offre à Durée Limitée: [PREÇO]", 
        description: "Promotion spéciale pour clients en [PAÍS] - commandez avant l'augmentation" 
      },
      { 
        title: "Dernières 24 Heures - 50% Off", 
        description: "Dépêchez-vous! Dernier jour de notre réduction exclusive pour [PAÍS] sur [PRODUTO]" 
      },
      { 
        title: "Livraison Express Gratuite", 
        description: "Recevez [PRODUTO] en 24h et payez en espèces à l'arrivée - uniquement en [PAÍS]" 
      },
      { 
        title: "Seulement 10 Unités Disponibles", 
        description: "En raison de la forte demande en [PAÍS], le stock de [PRODUTO] s'épuise rapidement" 
      },
      { 
        title: "Satisfaction Garantie", 
        description: "Essayez [PRODUTO] sans risque et payez [PREÇO] seulement si vous êtes satisfait" 
      },
      { 
        title: "Produit Authentique", 
        description: "[PRODUTO] 100% original avec garantie officielle en [PAÍS]" 
      },
      { 
        title: "Spécial Aujourd'hui: 2 pour 1", 
        description: "Offre exclusive 2 pour le prix d'1 pour [PAÍS] - durée limitée" 
      },
    ],
  },
};

// Function to replace placeholders with actual values
function replacePlaceholders(text: string, product: string, price: string, country: string): string {
  return text
    .replace(/\[PRODUTO\]/g, product)
    .replace(/\[PREÇO\]/g, price)
    .replace(/\[PAÍS\]/g, country);
}

// Function to generate random integer between min and max (inclusive)
function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to shuffle array (Fisher-Yates algorithm)
function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

// Main function to generate COD copies
export function generateCODCopies(
  product: string, 
  price: string, 
  country: string, 
  language: string, 
  strategy: string
): GeneratedContent {
  // Default to English if language not found
  const templates = contentTemplates[language] || contentTemplates.en;
  
  // Shuffle templates to ensure uniqueness each time
  const shuffledTitles = shuffleArray<string>(templates.titles);
  const shuffledDescriptions = shuffleArray<string>(templates.descriptions);
  const shuffledUSPs = shuffleArray<string>(templates.usps);
  const shuffledSitelinks = shuffleArray<{ title: string; description: string; }>(templates.sitelinks);
  
  // Generate the copies with placeholders replaced - NO TRUNCATION
  const titles = shuffledTitles.slice(0, 20).map((title: string) => 
    replacePlaceholders(title, product, price, country)
  );
  
  const descriptions = shuffledDescriptions.slice(0, 10).map((desc: string) => 
    replacePlaceholders(desc, product, price, country)
  );
  
  const usps = shuffledUSPs.slice(0, 10).map((usp: string) => 
    replacePlaceholders(usp, product, price, country)
  );
  
  const sitelinks = shuffledSitelinks.slice(0, 4).map((link: { title: string; description: string; }) => {
    return {
      title: replacePlaceholders(link.title, product, price, country),
      description: replacePlaceholders(link.description, product, price, country)
    };
  });
  
  return {
    titles,
    descriptions,
    usps,
    sitelinks
  };
}

// Add more languages here as needed...
// Add Japanese translations
contentTemplates.ja = {
  titles: [
    "[PRODUTO]を注文 - 着払い可能",
    "今すぐ[PRODUTO]注文、後払い",
    "代金引換：[PRODUTO]",
    "[PRODUTO] - 前払い不要",
    "限定オファー：[PRODUTO]",
    "[PRODUTO] - 支払い前に確認",
    "リスクなし：[PRODUTO]受取時払い",
    "今日[PRODUTO]を受け取る、配達時支払い",
    "[PRODUTO] - 送料無料、現金払い",
    "[PRODUTO] - 限定在庫",
    "特別価格：[PRODUTO]",
    "受取時のみ支払い：[PRODUTO]",
    "[PRODUTO]を支払い前にお試し",
    "[PRODUTO]：配達後のみ支払い",
    "迅速配送：[PRODUTO]",
    "[PRODUTO]：本日限定オファー",
    "独占販売：[PRODUTO]現金払い可能",
    "ベストセラー：[PRODUTO]",
    "今すぐ注文：[PRODUTO]入手可能",
  ],
  descriptions: [
    "今すぐ[PRODUTO]を[PREÇO]で注文し、配達時のみお支払いください。[PAÍS]での在庫限り！",
    "カード不要！プレミアム[PRODUTO]を今日注文し、配達時に[PREÇO]をお支払いください。[PAÍS]での最終入荷！",
    "購入前にお試し！[PAÍS]での代金引換で[PRODUTO]を[PREÇO]で入手。オファーは本日終了！",
    "サプライヤーからの独占[PRODUTO]。到着時に[PREÇO]のみ支払い。[PAÍS]全国への迅速発送！",
    "リスクなし購入！[PRODUTO]を注文し、配達時に[PREÇO]を現金でお支払い。[PAÍS]での期間限定オファー！",
    "今すぐ[PRODUTO]を[PREÇO]だけで確保。受け取り時のみ支払い。[PAÍS]への24時間発送！",
    "[PRODUTO]の最終在庫が[PREÇO]で！代金引換可能。お見逃しなく - [PAÍS]限定オファー！",
    "前払い不要！[PRODUTO]を[PREÇO]で入手し、[PAÍS]のご自宅到着時に支払い。",
    "在庫がなくなる前に今すぐ[PRODUTO]を予約。[PAÍS]での配達時に[PREÇO]を現金で支払い。すでに50％売れています！",
    "[PAÍS]特別オファー：[PRODUTO]がわずか[PREÇO] - 配達時に現金払い。30日保証！",
  ],
  usps: [
    "配達時のみ支払い",
    "前払い不要",
    "24時間無料配送",
    "限定在庫",
    "支払い前にお試し",
    "[PAÍS]限定オファー",
    "現金払いオプション",
    "本日限り：[PREÇO]オフ",
    "残りわずか10個",
    "迅速配送：1-2日",
    "30日保証",
    "正規品保証",
    "[PAÍS]購入者から検証済み",
    "リスクフリー購入",
    "[PAÍS]公式ストア",
    "隠れコストなし",
    "当日発送",
    "10,000個以上販売",
  ],
  sitelinks: [
    { 
      title: "代金引換可能", 
      description: "クレジットカード不要 - [PRODUTO]を受け取る時のみ支払い" 
    },
    { 
      title: "期間限定オファー：[PREÇO]", 
      description: "[PAÍS]のお客様向け特別セール - 値上がり前に今すぐ注文" 
    },
    { 
      title: "残り24時間 - 50％オフ", 
      description: "急いで！[PAÍS]での[PRODUTO]限定割引の最終日" 
    },
    { 
      title: "無料速達配送", 
      description: "24時間で[PRODUTO]をお届け、到着時に現金払い - [PAÍS]のみ" 
    },
    { 
      title: "残り10個のみ", 
      description: "[PAÍS]での高需要により、[PRODUTO]の在庫が残りわずか" 
    },
    { 
      title: "満足度保証", 
      description: "[PRODUTO]をリスクなしでお試し、完全満足の場合のみ[PREÇO]をお支払い" 
    },
    { 
      title: "正規品", 
      description: "[PAÍS]での正規保証付き100％本物の[PRODUTO]" 
    },
    { 
      title: "今日のスペシャル：買う1つ得る1つ", 
      description: "[PAÍS]向け限定1+1オファー - 期間限定" 
    },
  ],
};

// Add more languages as needed
// For example, add Italian
contentTemplates.it = {
  titles: [
    "Acquista [PRODUTO] - Paga alla Consegna",
    "Ordina [PRODUTO] Ora, Paga Dopo",
    "Contanti alla Consegna: [PRODUTO]",
    "[PRODUTO] - Nessun Pagamento Anticipato",
    "Offerta Limitata: [PRODUTO]",
    "[PRODUTO] - Vedi Prima di Pagare",
    "Senza Rischio: [PRODUTO] Paga al Ricevimento",
    "Ricevi [PRODUTO] Oggi, Paga alla Consegna",
    "[PRODUTO] - Consegna Gratuita, Pagamento in Contanti",
    "[PRODUTO] - Scorte Limitate",
    "Offerta Speciale: [PRODUTO] COD",
    "Paga Solo alla Consegna: [PRODUTO]",
    "Prova [PRODUTO] Prima di Pagare",
    "[PRODUTO]: Paga Solo Dopo la Consegna",
    "Consegna Rapida: [PRODUTO]",
    "[PRODUTO]: Offerta Solo per Oggi",
    "Esclusivo: [PRODUTO] Pagamento in Contanti",
    "Bestseller: [PRODUTO]",
    "Ordina Ora: [PRODUTO] Disponibile",
  ],
  descriptions: [
    "Ordina [PRODUTO] a [PREÇO] ora e paga solo quando arriva alla tua porta. Scorte limitate in [PAÍS]!",
    "Nessuna carta necessaria! Ordina il [PRODUTO] premium oggi e paga [PREÇO] alla consegna. Ultime unità in [PAÍS]!",
    "Prova prima di comprare! Ottieni [PRODUTO] a [PREÇO] con pagamento alla consegna in [PAÍS]. L'offerta termina oggi!",
    "Esclusivo [PRODUTO] direttamente dal fornitore. Solo [PREÇO] pagati all'arrivo. Spedizione rapida in tutta [PAÍS]!",
    "Acquisto senza rischi! Ordina [PRODUTO], paga [PREÇO] in contanti alla consegna. Offerta a tempo limitato in [PAÍS]!",
    "Assicurati [PRODUTO] ora per solo [PREÇO]. Paga solo quando lo ricevi. Spedizione 24h in [PAÍS]!",
    "Ultimo stock di [PRODUTO] a [PREÇO]! Pagamento alla consegna disponibile. Non perdere - offerta esclusiva per [PAÍS]!",
    "Nessun pagamento anticipato! Ottieni [PRODUTO] a [PREÇO] e paga quando arriva a casa tua in [PAÍS].",
    "Prenota [PRODUTO] ora prima che finisca. Paga [PREÇO] in contanti alla consegna in [PAÍS]. Già venduto al 50%!",
    "Offerta speciale per [PAÍS]: [PRODUTO] a soli [PREÇO] - paga in contanti alla consegna. Garanzia di 30 giorni!",
  ],
  usps: [
    "Paga Solo alla Consegna",
    "Nessun Pagamento Anticipato",
    "Spedizione Gratuita 24h",
    "Scorte Limitate",
    "Prova Prima di Pagare",
    "Offerta Esclusiva [PAÍS]",
    "Opzione Pagamento in Contanti",
    "Solo Oggi: [PREÇO] di Sconto",
    "Solo 10 Unità Rimanenti",
    "Consegna Rapida: 1-2 Giorni",
    "Garanzia di 30 Giorni",
    "Prodotto Autentico",
    "Verificato da Acquirenti",
    "Acquisto Senza Rischi",
    "Negozio Ufficiale in [PAÍS]",
    "Nessun Costo Nascosto",
    "Spedizione in Giornata",
    "Oltre 10.000 Venduti",
  ],
  sitelinks: [
    { 
      title: "Paga in Contanti alla Consegna", 
      description: "Nessuna carta di credito necessaria - paga solo quando ricevi il tuo [PRODUTO]" 
    },
    { 
      title: "Offerta a Tempo Limitato: [PREÇO]", 
      description: "Promozione speciale per clienti [PAÍS] - ordina prima dell'aumento" 
    },
    { 
      title: "Ultime 24 Ore - Sconto 50%", 
      description: "Affrettati! Ultimo giorno del nostro sconto esclusivo per [PAÍS] su [PRODUTO]" 
    },
    { 
      title: "Consegna Express Gratuita", 
      description: "Ricevi [PRODUTO] in 24h e paga in contanti all'arrivo - solo in [PAÍS]" 
    },
    { 
      title: "Solo 10 Unità Disponibili", 
      description: "A causa dell'alta richiesta in [PAÍS], le scorte di [PRODUTO] stanno finendo" 
    },
    { 
      title: "Soddisfazione Garantita", 
      description: "Prova [PRODUTO] senza rischi e paga [PREÇO] solo se completamente soddisfatto" 
    },
    { 
      title: "Prodotto Autentico", 
      description: "[PRODUTO] 100% originale con garanzia ufficiale in [PAÍS]" 
    },
    { 
      title: "Speciale di Oggi: 2 al Prezzo di 1", 
      description: "Offerta esclusiva 2x1 per [PAÍS] - tempo limitato" 
    },
  ],
};

// Add more languages as needed...
