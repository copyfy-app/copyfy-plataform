
export const generateCODCopies = (
  product: string,
  price: string,
  country: string,
  languageCode: string,
  funnel: string
) => {
  console.log('Gerando conteúdo para:', { product, price, country, languageCode, funnel });

  // Mapeamento direto de países para idiomas (fallback caso languageCode não venha correto)
  const countryToLanguage: { [key: string]: string } = {
    // Países que falam português
    'BR': 'pt', 'PT': 'pt', 'AO': 'pt', 'MZ': 'pt',
    
    // Países que falam espanhol
    'ES': 'es', 'MX': 'es', 'AR': 'es', 'CO': 'es', 'PE': 'es', 'VE': 'es', 
    'CL': 'es', 'EC': 'es', 'GT': 'es', 'CU': 'es', 'BO': 'es', 'DO': 'es',
    'HN': 'es', 'PY': 'es', 'SV': 'es', 'NI': 'es', 'CR': 'es', 'PA': 'es',
    'UY': 'es', 'GQ': 'es',
    
    // Países que falam inglês
    'US': 'en', 'GB': 'en', 'CA': 'en', 'AU': 'en', 'NZ': 'en', 'IE': 'en',
    'ZA': 'en', 'IN': 'en', 'SG': 'en', 'MY': 'en', 'PH': 'en', 'NG': 'en',
    'KE': 'en', 'GH': 'en', 'UG': 'en', 'TZ': 'en', 'ZM': 'en', 'ZW': 'en',
    'BW': 'en', 'MW': 'en', 'MT': 'en', 'CY': 'en', 'JM': 'en', 'TT': 'en',
    'BB': 'en', 'BS': 'en', 'BZ': 'en', 'GY': 'en', 'SR': 'en', 'LR': 'en',
    'SL': 'en', 'GM': 'en',
    
    // Países que falam francês
    'FR': 'fr', 'BE': 'fr', 'CH': 'fr', 'LU': 'fr', 'MC': 'fr', 'CA': 'fr',
    'SN': 'fr', 'CI': 'fr', 'ML': 'fr', 'BF': 'fr', 'NE': 'fr', 'GN': 'fr',
    'TD': 'fr', 'CF': 'fr', 'CG': 'fr', 'CD': 'fr', 'GA': 'fr', 'CM': 'fr',
    'DJ': 'fr', 'KM': 'fr', 'MG': 'fr', 'MU': 'fr', 'SC': 'fr', 'VU': 'fr',
    'NC': 'fr', 'PF': 'fr', 'WF': 'fr', 'RE': 'fr', 'GP': 'fr', 'MQ': 'fr',
    'GF': 'fr', 'PM': 'fr', 'YT': 'fr',
    
    // Países que falam alemão
    'DE': 'de', 'AT': 'de', 'CH': 'de', 'LI': 'de', 'LU': 'de',
    
    // Países que falam italiano
    'IT': 'it', 'SM': 'it', 'VA': 'it', 'CH': 'it'
  };

  // Determinar idioma correto (priorizar mapeamento direto do país)
  const detectedLanguage = countryToLanguage[country.toUpperCase()] || languageCode || 'en';
  
  console.log('Idioma detectado:', detectedLanguage, 'para país:', country);

  // Traduções por idioma
  const translations = {
    pt: {
      titles: [
        `${product} Original - Entrega Rápida para Todo ${country}`,
        `Compre ${product} com Desconto - Pagamento na Entrega`,
        `${product} - Oferta Especial por Tempo Limitado`,
        `Adquira ${product} Agora - Frete Grátis ${country}`,
        `${product} Original - Garantia de Satisfação`,
        `Peça ${product} Online - Entrega Segura em ${country}`,
        `${product} com Desconto - Aproveite Agora`,
        `Compre ${product} - Pagamento Apenas na Entrega`,
        `${product} - Promoção Exclusiva ${country}`,
        `Encomende ${product} - Entrega Expressa`,
        `${product} Original - Melhor Preço Garantido`,
        `Adquira ${product} - Oferta Por Tempo Limitado`,
        `${product} - Entrega Rápida em Todo ${country}`,
        `Compre ${product} Online - Pagamento Seguro`,
        `${product} com Frete Grátis - Peça Agora`,
        `${product} Original - Promoção Especial`,
        `Peça ${product} - Garantia Total de Satisfação`,
        `${product} - Oferta Exclusiva ${country}`,
        `Compre ${product} - Entrega Garantida`,
        `${product} com Desconto - Aproveite Hoje`,
        `Adquira ${product} - Pagamento na Entrega`,
        `${product} Original - Frete Grátis ${country}`,
        `Encomende ${product} - Oferta Limitada`,
        `${product} - Entrega Expressa Garantida`,
        `Compre ${product} Online - Desconto Especial`,
        `${product} - Promoção Por Tempo Limitado`,
        `Peça ${product} Agora - Entrega Segura`,
        `${product} Original - Melhor Oferta ${country}`,
        `Adquira ${product} - Garantia de Qualidade`,
        `${product} com Frete Grátis - Peça Hoje`
      ],
      descriptions: [
        `Adquira ${product} original com entrega rápida para todo ${country}. Pagamento apenas na entrega. Garantia total de satisfação. Aproveite esta oferta por tempo limitado!`,
        `${product} com desconto especial exclusivo para ${country}. Frete grátis e pagamento seguro na entrega. Produto original com garantia de qualidade.`,
        `Compre ${product} online com total segurança. Entrega expressa para ${country}. Pagamento apenas quando receber o produto. Oferta limitada!`,
        `${product} original - a melhor oferta do mercado! Entrega garantida em todo ${country}. Pagamento na entrega e frete grátis. Peça agora!`
      ],
      usps: [
        "✅ Pagamento Apenas na Entrega",
        "🚚 Frete Grátis para Todo o País",
        "🛡️ Garantia de Satisfação",
        "⚡ Entrega Expressa",
        "🏆 Produto 100% Original",
        "📞 Atendimento 24h",
        "💯 Qualidade Garantida",
        "🎯 Oferta Por Tempo Limitado"
      ],
      sitelinks: [
        {
          title: "Comprar Agora",
          description1: "Peça com desconto especial",
          description2: "Pagamento na entrega",
          url: "https://exemplo.com/comprar"
        },
        {
          title: "Frete Grátis",
          description1: "Entrega para todo o país",
          description2: "Sem custo adicional",
          url: "https://exemplo.com/frete"
        },
        {
          title: "Garantia Total",
          description1: "Satisfação garantida",
          description2: "Qualidade assegurada",
          url: "https://exemplo.com/garantia"
        },
        {
          title: "Atendimento",
          description1: "Suporte especializado",
          description2: "Tire suas dúvidas",
          url: "https://exemplo.com/contato"
        }
      ],
      biddingStrategy: "Para campanhas COD, recomendamos usar 'Maximizar conversões' com lance manual de R$ 1,50 a R$ 3,00, focando em conversões de alta intenção de compra."
    },
    es: {
      titles: [
        `${product} Original - Entrega Rápida en Todo ${country}`,
        `Compra ${product} con Descuento - Pago Contra Entrega`,
        `${product} - Oferta Especial por Tiempo Limitado`,
        `Adquiere ${product} Ahora - Envío Gratis ${country}`,
        `${product} Original - Garantía de Satisfacción`,
        `Pide ${product} Online - Entrega Segura en ${country}`,
        `${product} con Descuento - Aprovecha Ahora`,
        `Compra ${product} - Pago Solo Contra Entrega`,
        `${product} - Promoción Exclusiva ${country}`,
        `Ordena ${product} - Entrega Express`,
        `${product} Original - Mejor Precio Garantizado`,
        `Adquiere ${product} - Oferta por Tiempo Limitado`,
        `${product} - Entrega Rápida en Todo ${country}`,
        `Compra ${product} Online - Pago Seguro`,
        `${product} con Envío Gratis - Pide Ahora`,
        `${product} Original - Promoción Especial`,
        `Pide ${product} - Garantía Total de Satisfacción`,
        `${product} - Oferta Exclusiva ${country}`,
        `Compra ${product} - Entrega Garantizada`,
        `${product} con Descuento - Aprovecha Hoy`,
        `Adquiere ${product} - Pago Contra Entrega`,
        `${product} Original - Envío Gratis ${country}`,
        `Ordena ${product} - Oferta Limitada`,
        `${product} - Entrega Express Garantizada`,
        `Compra ${product} Online - Descuento Especial`,
        `${product} - Promoción por Tiempo Limitado`,
        `Pide ${product} Ahora - Entrega Segura`,
        `${product} Original - Mejor Oferta ${country}`,
        `Adquiere ${product} - Garantía de Calidad`,
        `${product} con Envío Gratis - Pide Hoy`
      ],
      descriptions: [
        `Adquiere ${product} original con entrega rápida en todo ${country}. Pago solo contra entrega. Garantía total de satisfacción. ¡Aprovecha esta oferta por tiempo limitado!`,
        `${product} con descuento especial exclusivo para ${country}. Envío gratis y pago seguro contra entrega. Producto original con garantía de calidad.`,
        `Compra ${product} online con total seguridad. Entrega express para ${country}. Pago solo cuando recibas el producto. ¡Oferta limitada!`,
        `${product} original - ¡la mejor oferta del mercado! Entrega garantizada en todo ${country}. Pago contra entrega y envío gratis. ¡Pide ahora!`
      ],
      usps: [
        "✅ Pago Solo Contra Entrega",
        "🚚 Envío Gratis en Todo el País",
        "🛡️ Garantía de Satisfacción",
        "⚡ Entrega Express",
        "🏆 Producto 100% Original",
        "📞 Atención 24h",
        "💯 Calidad Garantizada",
        "🎯 Oferta por Tiempo Limitado"
      ],
      sitelinks: [
        {
          title: "Comprar Ahora",
          description1: "Pide con descuento especial",
          description2: "Pago contra entrega",
          url: "https://ejemplo.com/comprar"
        },
        {
          title: "Envío Gratis",
          description1: "Entrega en todo el país",
          description2: "Sin costo adicional",
          url: "https://ejemplo.com/envio"
        },
        {
          title: "Garantía Total",
          description1: "Satisfacción garantizada",
          description2: "Calidad asegurada",
          url: "https://ejemplo.com/garantia"
        },
        {
          title: "Atención",
          description1: "Soporte especializado",
          description2: "Resuelve tus dudas",
          url: "https://ejemplo.com/contacto"
        }
      ],
      biddingStrategy: "Para campañas COD, recomendamos usar 'Maximizar conversiones' con puja manual de €1,50 a €3,00, enfocándose en conversiones de alta intención de compra."
    },
    en: {
      titles: [
        `${product} Original - Fast Delivery Across ${country}`,
        `Buy ${product} with Discount - Cash on Delivery`,
        `${product} - Special Limited Time Offer`,
        `Get ${product} Now - Free Shipping ${country}`,
        `${product} Original - Satisfaction Guarantee`,
        `Order ${product} Online - Safe Delivery in ${country}`,
        `${product} with Discount - Take Advantage Now`,
        `Buy ${product} - Payment Only on Delivery`,
        `${product} - Exclusive ${country} Promotion`,
        `Order ${product} - Express Delivery`,
        `${product} Original - Best Price Guaranteed`,
        `Get ${product} - Limited Time Offer`,
        `${product} - Fast Delivery Across ${country}`,
        `Buy ${product} Online - Secure Payment`,
        `${product} with Free Shipping - Order Now`,
        `${product} Original - Special Promotion`,
        `Order ${product} - Total Satisfaction Guarantee`,
        `${product} - Exclusive ${country} Offer`,
        `Buy ${product} - Guaranteed Delivery`,
        `${product} with Discount - Take Advantage Today`,
        `Get ${product} - Cash on Delivery`,
        `${product} Original - Free Shipping ${country}`,
        `Order ${product} - Limited Offer`,
        `${product} - Express Delivery Guaranteed`,
        `Buy ${product} Online - Special Discount`,
        `${product} - Limited Time Promotion`,
        `Order ${product} Now - Safe Delivery`,
        `${product} Original - Best ${country} Offer`,
        `Get ${product} - Quality Guarantee`,
        `${product} with Free Shipping - Order Today`
      ],
      descriptions: [
        `Get original ${product} with fast delivery across ${country}. Payment only on delivery. Total satisfaction guarantee. Take advantage of this limited time offer!`,
        `${product} with special exclusive discount for ${country}. Free shipping and secure payment on delivery. Original product with quality guarantee.`,
        `Buy ${product} online with complete security. Express delivery to ${country}. Payment only when you receive the product. Limited offer!`,
        `Original ${product} - the best market offer! Guaranteed delivery across ${country}. Cash on delivery and free shipping. Order now!`
      ],
      usps: [
        "✅ Payment Only on Delivery",
        "🚚 Free Shipping Nationwide",
        "🛡️ Satisfaction Guarantee",
        "⚡ Express Delivery",
        "🏆 100% Original Product",
        "📞 24h Customer Service",
        "💯 Quality Guaranteed",
        "🎯 Limited Time Offer"
      ],
      sitelinks: [
        {
          title: "Buy Now",
          description1: "Order with special discount",
          description2: "Cash on delivery",
          url: "https://example.com/buy"
        },
        {
          title: "Free Shipping",
          description1: "Delivery nationwide",
          description2: "No additional cost",
          url: "https://example.com/shipping"
        },
        {
          title: "Full Guarantee",
          description1: "Satisfaction guaranteed",
          description2: "Quality assured",
          url: "https://example.com/guarantee"
        },
        {
          title: "Support",
          description1: "Specialized assistance",
          description2: "Get your questions answered",
          url: "https://example.com/contact"
        }
      ],
      biddingStrategy: "For COD campaigns, we recommend using 'Maximize conversions' with manual bidding of $1.50 to $3.00, focusing on high purchase intent conversions."
    },
    fr: {
      titles: [
        `${product} Original - Livraison Rapide dans Tout ${country}`,
        `Achetez ${product} avec Remise - Paiement à la Livraison`,
        `${product} - Offre Spéciale Limitée`,
        `Obtenez ${product} Maintenant - Livraison Gratuite ${country}`,
        `${product} Original - Garantie de Satisfaction`,
        `Commandez ${product} en Ligne - Livraison Sécurisée en ${country}`,
        `${product} avec Remise - Profitez Maintenant`,
        `Achetez ${product} - Paiement Seulement à la Livraison`,
        `${product} - Promotion Exclusive ${country}`,
        `Commandez ${product} - Livraison Express`,
        `${product} Original - Meilleur Prix Garanti`,
        `Obtenez ${product} - Offre Limitée`,
        `${product} - Livraison Rapide dans Tout ${country}`,
        `Achetez ${product} en Ligne - Paiement Sécurisé`,
        `${product} avec Livraison Gratuite - Commandez Maintenant`,
        `${product} Original - Promotion Spéciale`,
        `Commandez ${product} - Garantie Totale de Satisfaction`,
        `${product} - Offre Exclusive ${country}`,
        `Achetez ${product} - Livraison Garantie`,
        `${product} avec Remise - Profitez Aujourd'hui`,
        `Obtenez ${product} - Paiement à la Livraison`,
        `${product} Original - Livraison Gratuite ${country}`,
        `Commandez ${product} - Offre Limitée`,
        `${product} - Livraison Express Garantie`,
        `Achetez ${product} en Ligne - Remise Spéciale`,
        `${product} - Promotion Limitée`,
        `Commandez ${product} Maintenant - Livraison Sécurisée`,
        `${product} Original - Meilleure Offre ${country}`,
        `Obtenez ${product} - Garantie de Qualité`,
        `${product} avec Livraison Gratuite - Commandez Aujourd'hui`
      ],
      descriptions: [
        `Obtenez ${product} original avec livraison rapide dans tout ${country}. Paiement seulement à la livraison. Garantie totale de satisfaction. Profitez de cette offre limitée!`,
        `${product} avec remise spéciale exclusive pour ${country}. Livraison gratuite et paiement sécurisé à la livraison. Produit original avec garantie de qualité.`,
        `Achetez ${product} en ligne en toute sécurité. Livraison express pour ${country}. Paiement seulement à la réception du produit. Offre limitée!`,
        `${product} original - la meilleure offre du marché! Livraison garantie dans tout ${country}. Paiement à la livraison et livraison gratuite. Commandez maintenant!`
      ],
      usps: [
        "✅ Paiement Seulement à la Livraison",
        "🚚 Livraison Gratuite Nationale",
        "🛡️ Garantie de Satisfaction",
        "⚡ Livraison Express",
        "🏆 Produit 100% Original",
        "📞 Service Client 24h",
        "💯 Qualité Garantie",
        "🎯 Offre Limitée"
      ],
      sitelinks: [
        {
          title: "Acheter Maintenant",
          description1: "Commandez avec remise spéciale",
          description2: "Paiement à la livraison",
          url: "https://exemple.com/acheter"
        },
        {
          title: "Livraison Gratuite",
          description1: "Livraison nationale",
          description2: "Sans coût supplémentaire",
          url: "https://exemple.com/livraison"
        },
        {
          title: "Garantie Totale",
          description1: "Satisfaction garantie",
          description2: "Qualité assurée",
          url: "https://exemple.com/garantie"
        },
        {
          title: "Support",
          description1: "Assistance spécialisée",
          description2: "Répondez à vos questions",
          url: "https://exemple.com/contact"
        }
      ],
      biddingStrategy: "Pour les campagnes COD, nous recommandons d'utiliser 'Maximiser les conversions' avec enchères manuelles de 1,50€ à 3,00€, en se concentrant sur les conversions à haute intention d'achat."
    },
    de: {
      titles: [
        `${product} Original - Schnelle Lieferung in Ganz ${country}`,
        `Kaufen Sie ${product} mit Rabatt - Zahlung bei Lieferung`,
        `${product} - Zeitlich Begrenztes Sonderangebot`,
        `Holen Sie sich ${product} Jetzt - Kostenloser Versand ${country}`,
        `${product} Original - Zufriedenheitsgarantie`,
        `Bestellen Sie ${product} Online - Sichere Lieferung in ${country}`,
        `${product} mit Rabatt - Nutzen Sie Jetzt`,
        `Kaufen Sie ${product} - Zahlung Nur bei Lieferung`,
        `${product} - Exklusive ${country} Promotion`,
        `Bestellen Sie ${product} - Express-Lieferung`,
        `${product} Original - Bester Preis Garantiert`,
        `Holen Sie sich ${product} - Zeitlich Begrenztes Angebot`,
        `${product} - Schnelle Lieferung in Ganz ${country}`,
        `Kaufen Sie ${product} Online - Sichere Zahlung`,
        `${product} mit Kostenlosem Versand - Jetzt Bestellen`,
        `${product} Original - Sonderaktion`,
        `Bestellen Sie ${product} - Vollständige Zufriedenheitsgarantie`,
        `${product} - Exklusives ${country} Angebot`,
        `Kaufen Sie ${product} - Garantierte Lieferung`,
        `${product} mit Rabatt - Nutzen Sie Heute`,
        `Holen Sie sich ${product} - Zahlung bei Lieferung`,
        `${product} Original - Kostenloser Versand ${country}`,
        `Bestellen Sie ${product} - Begrenztes Angebot`,
        `${product} - Express-Lieferung Garantiert`,
        `Kaufen Sie ${product} Online - Sonderrabatt`,
        `${product} - Zeitlich Begrenzte Promotion`,
        `Bestellen Sie ${product} Jetzt - Sichere Lieferung`,
        `${product} Original - Bestes ${country} Angebot`,
        `Holen Sie sich ${product} - Qualitätsgarantie`,
        `${product} mit Kostenlosem Versand - Heute Bestellen`
      ],
      descriptions: [
        `Erhalten Sie original ${product} mit schneller Lieferung in ganz ${country}. Zahlung nur bei Lieferung. Vollständige Zufriedenheitsgarantie. Nutzen Sie dieses zeitlich begrenzte Angebot!`,
        `${product} mit speziellem exklusivem Rabatt für ${country}. Kostenloser Versand und sichere Zahlung bei Lieferung. Originalprodukt mit Qualitätsgarantie.`,
        `Kaufen Sie ${product} online mit vollständiger Sicherheit. Express-Lieferung nach ${country}. Zahlung nur beim Erhalt des Produkts. Begrenztes Angebot!`,
        `Original ${product} - das beste Marktangebot! Garantierte Lieferung in ganz ${country}. Zahlung bei Lieferung und kostenloser Versand. Jetzt bestellen!`
      ],
      usps: [
        "✅ Zahlung Nur bei Lieferung",
        "🚚 Kostenloser Versand Landesweit",
        "🛡️ Zufriedenheitsgarantie",
        "⚡ Express-Lieferung",
        "🏆 100% Originalprodukt",
        "📞 24h Kundendienst",
        "💯 Qualität Garantiert",
        "🎯 Zeitlich Begrenztes Angebot"
      ],
      sitelinks: [
        {
          title: "Jetzt Kaufen",
          description1: "Bestellen Sie mit Sonderrabatt",
          description2: "Zahlung bei Lieferung",
          url: "https://beispiel.com/kaufen"
        },
        {
          title: "Kostenloser Versand",
          description1: "Lieferung landesweit",
          description2: "Keine zusätzlichen Kosten",
          url: "https://beispiel.com/versand"
        },
        {
          title: "Vollständige Garantie",
          description1: "Zufriedenheit garantiert",
          description2: "Qualität gesichert",
          url: "https://beispiel.com/garantie"
        },
        {
          title: "Support",
          description1: "Spezialisierte Betreuung",
          description2: "Ihre Fragen beantworten",
          url: "https://beispiel.com/kontakt"
        }
      ],
      biddingStrategy: "Für COD-Kampagnen empfehlen wir 'Conversions maximieren' mit manuellen Geboten von 1,50€ bis 3,00€, mit Fokus auf Conversions mit hoher Kaufabsicht."
    },
    it: {
      titles: [
        `${product} Originale - Consegna Veloce in Tutto ${country}`,
        `Acquista ${product} con Sconto - Pagamento alla Consegna`,
        `${product} - Offerta Speciale a Tempo Limitato`,
        `Ottieni ${product} Ora - Spedizione Gratuita ${country}`,
        `${product} Originale - Garanzia di Soddisfazione`,
        `Ordina ${product} Online - Consegna Sicura in ${country}`,
        `${product} con Sconto - Approfitta Ora`,
        `Acquista ${product} - Pagamento Solo alla Consegna`,
        `${product} - Promozione Esclusiva ${country}`,
        `Ordina ${product} - Consegna Express`,
        `${product} Originale - Miglior Prezzo Garantito`,
        `Ottieni ${product} - Offerta a Tempo Limitato`,
        `${product} - Consegna Veloce in Tutto ${country}`,
        `Acquista ${product} Online - Pagamento Sicuro`,
        `${product} con Spedizione Gratuita - Ordina Ora`,
        `${product} Originale - Promozione Speciale`,
        `Ordina ${product} - Garanzia Totale di Soddisfazione`,
        `${product} - Offerta Esclusiva ${country}`,
        `Acquista ${product} - Consegna Garantita`,
        `${product} con Sconto - Approfitta Oggi`,
        `Ottieni ${product} - Pagamento alla Consegna`,
        `${product} Originale - Spedizione Gratuita ${country}`,
        `Ordina ${product} - Offerta Limitata`,
        `${product} - Consegna Express Garantita`,
        `Acquista ${product} Online - Sconto Speciale`,
        `${product} - Promozione a Tempo Limitato`,
        `Ordina ${product} Ora - Consegna Sicura`,
        `${product} Originale - Migliore Offerta ${country}`,
        `Ottieni ${product} - Garanzia di Qualità`,
        `${product} con Spedizione Gratuita - Ordina Oggi`
      ],
      descriptions: [
        `Ottieni ${product} originale con consegna veloce in tutto ${country}. Pagamento solo alla consegna. Garanzia totale di soddisfazione. Approfitta di questa offerta a tempo limitato!`,
        `${product} con sconto speciale esclusivo per ${country}. Spedizione gratuita e pagamento sicuro alla consegna. Prodotto originale con garanzia di qualità.`,
        `Acquista ${product} online con totale sicurezza. Consegna express per ${country}. Pagamento solo quando ricevi il prodotto. Offerta limitata!`,
        `${product} originale - la migliore offerta del mercato! Consegna garantita in tutto ${country}. Pagamento alla consegna e spedizione gratuita. Ordina ora!`
      ],
      usps: [
        "✅ Pagamento Solo alla Consegna",
        "🚚 Spedizione Gratuita Nazionale",
        "🛡️ Garanzia di Soddisfazione",
        "⚡ Consegna Express",
        "🏆 Prodotto 100% Originale",
        "📞 Assistenza 24h",
        "💯 Qualità Garantita",
        "🎯 Offerta a Tempo Limitato"
      ],
      sitelinks: [
        {
          title: "Acquista Ora",
          description1: "Ordina con sconto speciale",
          description2: "Pagamento alla consegna",
          url: "https://esempio.com/acquista"
        },
        {
          title: "Spedizione Gratuita",
          description1: "Consegna nazionale",
          description2: "Senza costi aggiuntivi",
          url: "https://esempio.com/spedizione"
        },
        {
          title: "Garanzia Totale",
          description1: "Soddisfazione garantita",
          description2: "Qualità assicurata",
          url: "https://esempio.com/garanzia"
        },
        {
          title: "Assistenza",
          description1: "Supporto specializzato",
          description2: "Risolvi i tuoi dubbi",
          url: "https://esempio.com/contatto"
        }
      ],
      biddingStrategy: "Per le campagne COD, raccomandiamo di usare 'Massimizza conversioni' con offerte manuali da €1,50 a €3,00, concentrandosi su conversioni ad alta intenzione d'acquisto."
    }
  };

  // Selecionar tradução baseada no idioma detectado
  const selectedTranslations = translations[detectedLanguage as keyof typeof translations] || translations.en;

  console.log('Tradução selecionada:', detectedLanguage, 'Conteúdo:', selectedTranslations);

  return {
    titles: selectedTranslations.titles,
    descriptions: selectedTranslations.descriptions,
    usps: selectedTranslations.usps,
    sitelinks: selectedTranslations.sitelinks,
    biddingStrategy: selectedTranslations.biddingStrategy
  };
};
