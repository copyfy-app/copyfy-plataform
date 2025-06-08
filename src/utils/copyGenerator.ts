import { faker } from '@faker-js/faker';

interface LanguageTemplates {
  [key: string]: {
    titles: string[];
    descriptions: string[];
    usps: string[];
    sitelinks: {
      [funnel: string]: {
        titles: string[];
        descriptions: string[];
      };
    };
  };
}

const languageTemplates: LanguageTemplates = {
  pt: {
    titles: [
      "{product} - Distribuidor Oficial no Brasil",
      "Compre {product} Agora - {price}",
      "{product} - Produto de Qualidade Superior",
      "Peça {product} - Frete Grátis",
      "{product} Original - Preço Especial {price}",
      "Oferta Limitada: {product} por {price}",
      "{product} - Melhor Preço Garantido",
      "Promoção {product} - Só Hoje {price}",
      "Desconto Especial {product} - {price}",
      "Aproveite: {product} com Desconto",
      "{product} Premium - Qualidade Garantida",
      "Mega Oferta {product} - {price}",
      "Última Chance: {product} por {price}",
      "{product} - Entrega Imediata",
      "Oferta Relâmpago: {product} {price}",
      "Compre Já: {product} - {price}",
      "{product} - Pagamento na Entrega",
      "Super Desconto: {product} por {price}",
      "{product} - Produto do Ano",
      "Imperdível: {product} apenas {price}",
      "{product} - Satisfação Garantida",
      "Promoção Única: {product} {price}",
      "{product} - Líder de Vendas",
      "Oferta Exclusiva: {product} por {price}",
      "{product} - Compre com Segurança",
      "Desconto Especial: {product} {price}",
      "{product} - Produto Aprovado",
      "Melhor Oferta: {product} apenas {price}",
      "{product} - Qualidade Premium",
      "Aproveite Agora: {product} por {price}"
    ],
    descriptions: [
      "Adquira {product} com entrega rápida em todo o Brasil. Pagamento facilitado. Preço especial: {price}",
      "Compre {product} hoje e aproveite o frete grátis. Satisfação garantida ou seu dinheiro de volta.",
      "{product} - A solução ideal para sua necessidade. Resultados visíveis em poucos dias. Aproveite!",
      "Experimente {product} e transforme sua vida. Produto original com garantia estendida.",
      "Oferta limitada de {product} por apenas {price}. Não perca esta oportunidade única!",
      "Produto {product} com qualidade premium. Entrega rápida e segura em todo território nacional.",
      "Aproveite o desconto especial em {product}. Pagamento facilitado em até 12x sem juros.",
      "{product} - O produto mais vendido do mercado. Garantia total de qualidade e eficácia."
    ],
    usps: [
      "✅ Frete grátis para todo o Brasil",
      "✅ Pagamento facilitado em até 12x",
      "✅ Satisfação garantida ou seu dinheiro de volta",
      "✅ Atendimento ao cliente 24/7"
    ],
    sitelinks: {
      top: {
        titles: [
          "Como {product} Funciona?",
          "Benefícios do {product}",
          "Guia Completo {product}",
          "Descubra {product}",
          "O que é {product}?",
          "Por que {product}?",
          "Tudo sobre {product}",
          "Conhece {product}?"
        ],
        descriptions: [
          "Descubra como {product} pode transformar sua vida",
          "Conheça todos os benefícios únicos do {product}",
          "Saiba tudo sobre {product} e seus resultados",
          "Entenda por que {product} é a escolha certa",
          "Veja como {product} funciona na prática",
          "Aprenda sobre {product} e suas vantagens",
          "Explore as características do {product}",
          "Descubra o poder do {product}"
        ]
      },
      mid: {
        titles: [
          "Depoimentos {product}",
          "Resultados Reais {product}",
          "Avaliações {product}",
          "Comparar {product}",
          "Prova Social {product}",
          "Casos de Sucesso",
          "Opinião dos Clientes",
          "Antes e Depois"
        ],
        descriptions: [
          "Veja resultados reais de quem usa {product}",
          "Leia depoimentos verdadeiros sobre {product}",
          "Compare {product} com outros produtos",
          "Avaliações verificadas de {product}",
          "Casos de sucesso comprovados com {product}",
          "Opinião real dos clientes sobre {product}",
          "Resultados comprovados em {country}",
          "Transformações reais com {product}"
        ]
      },
      bottom: {
        titles: [
          "Comprar {product} Agora",
          "Oferta Especial {product}",
          "Garantia {product}",
          "Entrega {product}",
          "Desconto {product}",
          "Promoção {product}",
          "Últimas Unidades",
          "Aproveite Agora"
        ],
        descriptions: [
          "Compre {product} por {price} com frete grátis",
          "Oferta especial {product} apenas {price}",
          "Garantia total ao comprar {product}",
          "Entrega rápida de {product} em {country}",
          "Desconto exclusivo para {product}",
          "Promoção limitada {product} por {price}",
          "Últimas unidades de {product} disponíveis",
          "Aproveite agora {product} por {price}"
        ]
      },
      cod: {
        titles: [
          "Pagamento na Entrega",
          "Sem Risco {product}",
          "Entrega Rápida {country}",
          "Receba e Pague",
          "Zero Antecipado",
          "Sem Taxa de Entrega",
          "Compra Segura",
          "Teste sem Pagar"
        ],
        descriptions: [
          "Pague {product} apenas na entrega em {country}",
          "Receba {product} primeiro, pague depois",
          "Entrega rápida de {product} sem antecipação",
          "Compre {product} sem risco, pague na entrega",
          "Zero antecipado para {product} em {country}",
          "Sem taxa de entrega para {product}",
          "Compra 100% segura de {product}",
          "Teste {product} antes de pagar"
        ]
      }
    }
  },
  en: {
    titles: [
      "{product} - Official Distributor",
      "Buy {product} Now - {price}",
      "{product} - Premium Quality Product",
      "Order {product} - Free Shipping",
      "{product} Original - Special Price {price}",
      "Limited Offer: {product} for {price}",
      "{product} - Best Price Guaranteed",
      "Flash Sale {product} - Today Only {price}",
      "Special Discount {product} - {price}",
      "Don't Miss: {product} with Discount",
      "{product} Premium - Quality Assured",
      "Mega Deal {product} - {price}",
      "Last Chance: {product} for {price}",
      "{product} - Immediate Delivery",
      "Lightning Deal: {product} {price}",
      "Buy Now: {product} - {price}",
      "{product} - Cash on Delivery",
      "Super Discount: {product} for {price}",
      "{product} - Product of the Year",
      "Unmissable: {product} only {price}",
      "{product} - Satisfaction Guaranteed",
      "Exclusive Offer: {product} {price}",
      "{product} - Best Seller",
      "Special Deal: {product} for {price}",
      "{product} - Buy with Confidence",
      "Special Discount: {product} {price}",
      "{product} - Approved Product",
      "Best Offer: {product} only {price}",
      "{product} - Premium Quality",
      "Act Now: {product} for {price}"
    ],
    descriptions: [
      "Get {product} with fast delivery worldwide. Easy payment options. Special price: {price}",
      "Order {product} today and enjoy free shipping. Satisfaction guaranteed or money back.",
      "{product} - The perfect solution for your needs. Visible results in just days. Don't wait!",
      "Try {product} and transform your life. Original product with extended warranty.",
      "Limited time offer for {product} at only {price}. Don't miss this unique opportunity!",
      "Premium quality {product} with fast and secure delivery worldwide.",
      "Take advantage of the special discount on {product}. Easy payment in up to 12 installments.",
      "{product} - The market's best-selling product. Full guarantee of quality and effectiveness."
    ],
    usps: [
      "✅ Free worldwide shipping",
      "✅ Easy payment up to 12 installments",
      "✅ Satisfaction guaranteed or money back",
      "✅ 24/7 customer support"
    ],
    sitelinks: {
      top: {
        titles: [
          "How {product} Works?",
          "{product} Benefits",
          "Complete {product} Guide",
          "Discover {product}",
          "What is {product}?",
          "Why {product}?",
          "All About {product}",
          "Know {product}?"
        ],
        descriptions: [
          "Discover how {product} can transform your life",
          "Learn all the unique benefits of {product}",
          "Know everything about {product} and its results",
          "Understand why {product} is the right choice",
          "See how {product} works in practice",
          "Learn about {product} and its advantages",
          "Explore {product} characteristics",
          "Discover the power of {product}"
        ]
      },
      mid: {
        titles: [
          "{product} Testimonials",
          "Real {product} Results",
          "{product} Reviews",
          "Compare {product}",
          "{product} Social Proof",
          "Success Stories",
          "Customer Opinion",
          "Before and After"
        ],
        descriptions: [
          "See real results from {product} users",
          "Read genuine testimonials about {product}",
          "Compare {product} with other products",
          "Verified reviews of {product}",
          "Proven success cases with {product}",
          "Real customer opinion about {product}",
          "Proven results in {country}",
          "Real transformations with {product}"
        ]
      },
      bottom: {
        titles: [
          "Buy {product} Now",
          "Special {product} Offer",
          "{product} Guarantee",
          "{product} Delivery",
          "{product} Discount",
          "{product} Promotion",
          "Last Units",
          "Take Advantage Now"
        ],
        descriptions: [
          "Buy {product} for {price} with free shipping",
          "Special offer {product} only {price}",
          "Full guarantee when buying {product}",
          "Fast delivery of {product} in {country}",
          "Exclusive discount for {product}",
          "Limited promotion {product} for {price}",
          "Last units of {product} available",
          "Take advantage now {product} for {price}"
        ]
      },
      cod: {
        titles: [
          "Cash on Delivery",
          "No Risk {product}",
          "Fast Delivery {country}",
          "Receive and Pay",
          "Zero Upfront",
          "No Delivery Fee",
          "Safe Purchase",
          "Test without Paying"
        ],
        descriptions: [
          "Pay for {product} only on delivery in {country}",
          "Receive {product} first, pay later",
          "Fast delivery of {product} without advance payment",
          "Buy {product} risk-free, pay on delivery",
          "Zero upfront for {product} in {country}",
          "No delivery fee for {product}",
          "100% safe purchase of {product}",
          "Test {product} before paying"
        ]
      }
    }
  },
  es: {
    titles: [
      "{product} - Distribuidor Oficial en España",
      "Compra {product} Ahora - {price}",
      "{product} - Producto de Calidad Superior",
      "Pide {product} - Envío Gratis",
      "{product} Original - Precio Especial {price}",
      "Oferta Limitada: {product} por {price}",
      "{product} - Mejor Precio Garantizado",
      "Oferta Flash {product} - Solo Hoy {price}",
      "Descuento Especial {product} - {price}",
      "No Te Pierdas: {product} con Descuento",
      "{product} Premium - Calidad Asegurada",
      "Mega Oferta {product} - {price}",
      "Última Oportunidad: {product} por {price}",
      "{product} - Entrega Inmediata",
      "Oferta Relámpago: {product} {price}",
      "Compra Ya: {product} - {price}",
      "{product} - Pago Contra Entrega",
      "Super Descuento: {product} por {price}",
      "{product} - Producto del Año",
      "Imperdible: {product} solo {price}",
      "{product} - Satisfacción Garantizada",
      "Oferta Exclusiva: {product} {price}",
      "{product} - Líder en Ventas",
      "Oferta Especial: {product} por {price}",
      "{product} - Compra con Confianza",
      "Descuento Especial: {product} {price}",
      "{product} - Producto Aprobado",
      "Mejor Oferta: {product} solo {price}",
      "{product} - Calidad Premium",
      "Actúa Ahora: {product} por {price}"
    ],
    descriptions: [
      "Obtén {product} con entrega rápida en toda España. Pago fácil. Precio especial: {price}",
      "Pide {product} hoy y disfruta del envío gratis. Satisfacción garantizada o dinero devuelto.",
      "{product} - La solución perfecta para tus necesidades. Resultados visibles en días. ¡No esperes!",
      "Prueba {product} y transforma tu vida. Producto original con garantía extendida.",
      "Oferta por tiempo limitado de {product} por solo {price}. ¡No pierdas esta oportunidad única!",
      "Producto {product} de calidad premium con entrega rápida y segura en todo el territorio.",
      "Aprovecha el descuento especial en {product}. Pago fácil hasta en 12 cuotas sin interés.",
      "{product} - El producto más vendido del mercado. Garantía total de calidad y eficacia."
    ],
    usps: [
      "✅ Envío gratis a toda España",
      "✅ Pago fácil hasta 12 cuotas",
      "✅ Satisfacción garantizada o dinero devuelto",
      "✅ Atención al cliente 24/7"
    ],
    sitelinks: {
      top: {
        titles: [
          "¿Cómo Funciona {product}?",
          "Beneficios de {product}",
          "Guía Completa {product}",
          "Descubre {product}",
          "¿Qué es {product}?",
          "¿Por qué {product}?",
          "Todo sobre {product}",
          "¿Conoces {product}?"
        ],
        descriptions: [
          "Descubre cómo {product} puede transformar tu vida",
          "Conoce todos los beneficios únicos de {product}",
          "Sabe todo sobre {product} y sus resultados",
          "Entiende por qué {product} es la elección correcta",
          "Ve cómo {product} funciona en la práctica",
          "Aprende sobre {product} y sus ventajas",
          "Explora las características de {product}",
          "Descubre el poder de {product}"
        ]
      },
      mid: {
        titles: [
          "Testimonios {product}",
          "Resultados Reales {product}",
          "Reseñas {product}",
          "Comparar {product}",
          "Prueba Social {product}",
          "Casos de Éxito",
          "Opinión de Clientes",
          "Antes y Después"
        ],
        descriptions: [
          "Ve resultados reales de usuarios de {product}",
          "Lee testimonios genuinos sobre {product}",
          "Compara {product} con otros productos",
          "Reseñas verificadas de {product}",
          "Casos de éxito probados con {product}",
          "Opinión real de clientes sobre {product}",
          "Resultados probados en {country}",
          "Transformaciones reales con {product}"
        ]
      },
      bottom: {
        titles: [
          "Comprar {product} Ahora",
          "Oferta Especial {product}",
          "Garantía {product}",
          "Entrega {product}",
          "Descuento {product}",
          "Promoción {product}",
          "Últimas Unidades",
          "Aprovecha Ahora"
        ],
        descriptions: [
          "Compra {product} por {price} con envío gratis",
          "Oferta especial {product} solo {price}",
          "Garantía total al comprar {product}",
          "Entrega rápida de {product} en {country}",
          "Descuento exclusivo para {product}",
          "Promoción limitada {product} por {price}",
          "Últimas unidades de {product} disponibles",
          "Aprovecha ahora {product} por {price}"
        ]
      },
      cod: {
        titles: [
          "Pago Contra Entrega",
          "Sin Riesgo {product}",
          "Entrega Rápida {country}",
          "Recibe y Paga",
          "Cero Anticipado",
          "Sin Tarifa de Entrega",
          "Compra Segura",
          "Prueba sin Pagar"
        ],
        descriptions: [
          "Paga {product} solo en la entrega en {country}",
          "Recibe {product} primero, paga después",
          "Entrega rápida de {product} sin pago anticipado",
          "Compra {product} sin riesgo, paga en la entrega",
          "Cero anticipado para {product} en {country}",
          "Sin tarifa de entrega para {product}",
          "Compra 100% segura de {product}",
          "Prueba {product} antes de pagar"
        ]
      }
    }
  },
  fr: {
    titles: [
      "{product} - Distributeur Officiel en France",
      "Achetez {product} Maintenant - {price}",
      "{product} - Produit de Qualité Supérieure",
      "Commandez {product} - Livraison Gratuite",
      "{product} Original - Prix Spécial {price}",
      "Offre Limitée: {product} pour {price}",
      "{product} - Meilleur Prix Garanti",
      "Vente Flash {product} - Aujourd'hui Seulement {price}",
      "Réduction Spéciale {product} - {price}",
      "Ne Ratez Pas: {product} avec Réduction",
      "{product} Premium - Qualité Assurée",
      "Méga Offre {product} - {price}",
      "Dernière Chance: {product} pour {price}",
      "{product} - Livraison Immédiate",
      "Offre Éclair: {product} {price}",
      "Achetez Maintenant: {product} - {price}",
      "{product} - Paiement à la Livraison",
      "Super Réduction: {product} pour {price}",
      "{product} - Produit de l'Année",
      "Immanquable: {product} seulement {price}",
      "{product} - Satisfaction Garantie",
      "Offre Exclusive: {product} {price}",
      "{product} - Leader des Ventes",
      "Offre Spéciale: {product} pour {price}",
      "{product} - Achetez en Confiance",
      "Réduction Spéciale: {product} {price}",
      "{product} - Produit Approuvé",
      "Meilleure Offre: {product} seulement {price}",
      "{product} - Qualité Premium",
      "Agissez Maintenant: {product} pour {price}"
    ],
    descriptions: [
      "Obtenez {product} avec livraison rapide en France. Paiement facile. Prix spécial: {price}",
      "Commandez {product} aujourd'hui et profitez de la livraison gratuite. Satisfaction garantie ou remboursé.",
      "{product} - La solution parfaite pour vos besoins. Résultats visibles en quelques jours. N'attendez pas!",
      "Essayez {product} et transformez votre vie. Produit original avec garantie étendue.",
      "Offre limitée pour {product} à seulement {price}. Ne manquez pas cette opportunité unique!",
      "Produit {product} de qualité premium avec livraison rapide et sécurisée sur tout le territoire.",
      "Profitez de la réduction spéciale sur {product}. Paiement facile jusqu'à 12 fois sans frais.",
      "{product} - Le produit le plus vendu du marché. Garantie totale de qualité et d'efficacité."
    ],
    usps: [
      "✅ Livraison gratuite en France",
      "✅ Paiement facile jusqu'à 12 fois",
      "✅ Satisfaction garantie ou remboursé",
      "✅ Support client 24/7"
    ],
    sitelinks: {
      top: {
        titles: [
          "Comment {product} Fonctionne?",
          "Avantages de {product}",
          "Guide Complet {product}",
          "Découvrez {product}",
          "Qu'est-ce que {product}?",
          "Pourquoi {product}?",
          "Tout sur {product}",
          "Connaissez {product}?"
        ],
        descriptions: [
          "Découvrez comment {product} peut transformer votre vie",
          "Apprenez tous les avantages uniques de {product}",
          "Sachez tout sur {product} et ses résultats",
          "Comprenez pourquoi {product} est le bon choix",
          "Voyez comment {product} fonctionne en pratique",
          "Apprenez sur {product} et ses avantages",
          "Explorez les caractéristiques de {product}",
          "Découvrez le pouvoir de {product}"
        ]
      },
      mid: {
        titles: [
          "Témoignages {product}",
          "Résultats Réels {product}",
          "Avis {product}",
          "Comparer {product}",
          "Preuve Sociale {product}",
          "Cas de Succès",
          "Opinion des Clients",
          "Avant et Après"
        ],
        descriptions: [
          "Voyez les résultats réels des utilisateurs de {product}",
          "Lisez des témoignages authentiques sur {product}",
          "Comparez {product} avec d'autres produits",
          "Avis vérifiés de {product}",
          "Cas de succès prouvés avec {product}",
          "Opinion réelle des clients sur {product}",
          "Résultats prouvés en {country}",
          "Transformations réelles avec {product}"
        ]
      },
      bottom: {
        titles: [
          "Acheter {product} Maintenant",
          "Offre Spéciale {product}",
          "Garantie {product}",
          "Livraison {product}",
          "Réduction {product}",
          "Promotion {product}",
          "Dernières Unités",
          "Profitez Maintenant"
        ],
        descriptions: [
          "Achetez {product} pour {price} avec livraison gratuite",
          "Offre spéciale {product} seulement {price}",
          "Garantie totale lors de l'achat de {product}",
          "Livraison rapide de {product} en {country}",
          "Réduction exclusive pour {product}",
          "Promotion limitée {product} pour {price}",
          "Dernières unités de {product} disponibles",
          "Profitez maintenant {product} pour {price}"
        ]
      },
      cod: {
        titles: [
          "Paiement à la Livraison",
          "Sans Risque {product}",
          "Livraison Rapide {country}",
          "Recevez et Payez",
          "Zéro Avance",
          "Sans Frais de Livraison",
          "Achat Sécurisé",
          "Testez sans Payer"
        ],
        descriptions: [
          "Payez {product} seulement à la livraison en {country}",
          "Recevez {product} d'abord, payez après",
          "Livraison rapide de {product} sans paiement anticipé",
          "Achetez {product} sans risque, payez à la livraison",
          "Zéro avance pour {product} en {country}",
          "Sans frais de livraison pour {product}",
          "Achat 100% sécurisé de {product}",
          "Testez {product} avant de payer"
        ]
      }
    }
  },
  de: {
    titles: [
      "{product} - Offizieller Händler in Deutschland",
      "Kaufen Sie {product} Jetzt - {price}",
      "{product} - Hochwertiges Qualitätsprodukt",
      "Bestellen Sie {product} - Kostenloser Versand",
      "{product} Original - Sonderpreis {price}",
      "Limitiertes Angebot: {product} für {price}",
      "{product} - Bester Preis Garantiert",
      "Blitzangebot {product} - Nur Heute {price}",
      "Sonderrabatt {product} - {price}",
      "Verpassen Sie Nicht: {product} mit Rabatt",
      "{product} Premium - Qualität Garantiert",
      "Mega-Angebot {product} - {price}",
      "Letzte Chance: {product} für {price}",
      "{product} - Sofortige Lieferung",
      "Blitz-Deal: {product} {price}",
      "Jetzt Kaufen: {product} - {price}",
      "{product} - Zahlung bei Lieferung",
      "Super-Rabatt: {product} für {price}",
      "{product} - Produkt des Jahres",
      "Unschlagbar: {product} nur {price}",
      "{product} - Zufriedenheit Garantiert",
      "Exklusives Angebot: {product} {price}",
      "{product} - Verkaufsschlager",
      "Sonderangebot: {product} für {price}",
      "{product} - Vertrauensvoll Kaufen",
      "Sonderrabatt: {product} {price}",
      "{product} - Zugelassenes Produkt",
      "Bestes Angebot: {product} nur {price}",
      "{product} - Premium-Qualität",
      "Handeln Sie Jetzt: {product} für {price}"
    ],
    descriptions: [
      "Erhalten Sie {product} mit schneller Lieferung in Deutschland. Einfache Zahlung. Sonderpreis: {price}",
      "Bestellen Sie {product} heute und genießen Sie kostenlosen Versand. Zufriedenheit garantiert oder Geld zurück.",
      "{product} - Die perfekte Lösung für Ihre Bedürfnisse. Sichtbare Ergebnisse in wenigen Tagen. Warten Sie nicht!",
      "Probieren Sie {product} und transformieren Sie Ihr Leben. Originalprodukt mit erweiterter Garantie.",
      "Zeitlich begrenztes Angebot für {product} für nur {price}. Verpassen Sie nicht diese einmalige Gelegenheit!",
      "Premium-Qualitätsprodukt {product} mit schneller und sicherer Lieferung im ganzen Land.",
      "Nutzen Sie den Sonderrabatt auf {product}. Einfache Zahlung bis zu 12 Raten zinsfrei.",
      "{product} - Das meistverkaufte Produkt am Markt. Vollständige Garantie für Qualität und Wirksamkeit."
    ],
    usps: [
      "✅ Kostenloser Versand nach Deutschland",
      "✅ Einfache Zahlung bis zu 12 Raten",
      "✅ Zufriedenheit garantiert oder Geld zurück",
      "✅ 24/7 Kundensupport"
    ],
    sitelinks: {
      top: {
        titles: [
          "Wie {product} Funktioniert?",
          "{product} Vorteile",
          "Vollständiger {product} Guide",
          "Entdecken Sie {product}",
          "Was ist {product}?",
          "Warum {product}?",
          "Alles über {product}",
          "Kennen Sie {product}?"
        ],
        descriptions: [
          "Entdecken Sie, wie {product} Ihr Leben verändern kann",
          "Lernen Sie alle einzigartigen Vorteile von {product}",
          "Wissen Sie alles über {product} und seine Ergebnisse",
          "Verstehen Sie, warum {product} die richtige Wahl ist",
          "Sehen Sie, wie {product} in der Praxis funktioniert",
          "Lernen Sie über {product} und seine Vorteile",
          "Erkunden Sie die Eigenschaften von {product}",
          "Entdecken Sie die Kraft von {product}"
        ]
      },
      mid: {
        titles: [
          "{product} Testimonials",
          "Echte {product} Ergebnisse",
          "{product} Bewertungen",
          "{product} Vergleichen",
          "{product} Sozialer Beweis",
          "Erfolgsgeschichten",
          "Kundenmeinung",
          "Vorher und Nachher"
        ],
        descriptions: [
          "Sehen Sie echte Ergebnisse von {product} Benutzern",
          "Lesen Sie echte Testimonials über {product}",
          "Vergleichen Sie {product} mit anderen Produkten",
          "Verifizierte Bewertungen von {product}",
          "Bewiesene Erfolgsgeschichten mit {product}",
          "Echte Kundenmeinung über {product}",
          "Bewiesene Ergebnisse in {country}",
          "Echte Transformationen mit {product}"
        ]
      },
      bottom: {
        titles: [
          "{product} Jetzt Kaufen",
          "Spezialangebot {product}",
          "{product} Garantie",
          "{product} Lieferung",
          "{product} Rabatt",
          "{product} Promotion",
          "Letzte Einheiten",
          "Jetzt Nutzen"
        ],
        descriptions: [
          "Kaufen Sie {product} für {price} mit kostenlosem Versand",
          "Spezialangebot {product} nur {price}",
          "Vollständige Garantie beim Kauf von {product}",
          "Schnelle Lieferung von {product} in {country}",
          "Exklusiver Rabatt für {product}",
          "Begrenzte Promotion {product} für {price}",
          "Letzte Einheiten von {product} verfügbar",
          "Nutzen Sie jetzt {product} für {price}"
        ]
      },
      cod: {
        titles: [
          "Zahlung bei Lieferung",
          "Kein Risiko {product}",
          "Schnelle Lieferung {country}",
          "Erhalten und Zahlen",
          "Null Vorauszahlung",
          "Keine Liefergebühr",
          "Sicherer Kauf",
          "Testen ohne Zahlung"
        ],
        descriptions: [
          "Zahlen Sie {product} nur bei Lieferung in {country}",
          "Erhalten Sie {product} zuerst, zahlen Sie später",
          "Schnelle Lieferung von {product} ohne Vorauszahlung",
          "Kaufen Sie {product} risikofrei, zahlen bei Lieferung",
          "Null Vorauszahlung für {product} in {country}",
          "Keine Liefergebühr für {product}",
          "100% sicherer Kauf von {product}",
          "Testen Sie {product} vor der Zahlung"
        ]
      }
    }
  },
  it: {
    titles: [
      "{product} - Distributore Ufficiale in Italia",
      "Acquista {product} Ora - {price}",
      "{product} - Prodotto di Qualità Superiore",
      "Ordina {product} - Spedizione Gratuita",
      "{product} Originale - Prezzo Speciale {price}",
      "Offerta Limitata: {product} per {price}",
      "{product} - Miglior Prezzo Garantito",
      "Offerta Flash {product} - Solo Oggi {price}",
      "Sconto Speciale {product} - {price}",
      "Non Perdere: {product} con Sconto",
      "{product} Premium - Qualità Assicurata",
      "Mega Offerta {product} - {price}",
      "Ultima Occasione: {product} per {price}",
      "{product} - Consegna Immediata",
      "Offerta Lampo: {product} {price}",
      "Compra Subito: {product} - {price}",
      "{product} - Pagamento alla Consegna",
      "Super Sconto: {product} per {price}",
      "{product} - Prodotto dell'Anno",
      "Imperdibile: {product} solo {price}",
      "{product} - Soddisfazione Garantita",
      "Offerta Esclusiva: {product} {price}",
      "{product} - Leader delle Vendite",
      "Offerta Speciale: {product} per {price}",
      "{product} - Compra con Fiducia",
      "Sconto Speciale: {product} {price}",
      "{product} - Prodotto Approvato",
      "Migliore Offerta: {product} solo {price}",
      "{product} - Qualità Premium",
      "Agisci Ora: {product} per {price}"
    ],
    descriptions: [
      "Ottieni {product} con consegna veloce in Italia. Pagamento facile. Prezzo speciale: {price}",
      "Ordina {product} oggi e goditi la spedizione gratuita. Soddisfazione garantita o rimborso.",
      "{product} - La soluzione perfetta per le tue esigenze. Risultati visibili in pochi giorni. Non aspettare!",
      "Prova {product} e trasforma la tua vita. Prodotto originale con garanzia estesa.",
      "Offerta a tempo limitato per {product} a soli {price}. Non perdere questa opportunità unica!",
      "Prodotto {product} di qualità premium con consegna veloce e sicura in tutto il territorio.",
      "Approfitta dello sconto speciale su {product}. Pagamento facile fino a 12 rate senza interessi.",
      "{product} - Il prodotto più venduto sul mercato. Garanzia totale di qualità ed efficacia."
    ],
    usps: [
      "✅ Spedizione gratuita in Italia",
      "✅ Pagamento facile fino a 12 rate",
      "✅ Soddisfazione garantita o rimborso",
      "✅ Supporto clienti 24/7"
    ],
    sitelinks: {
      top: {
        titles: [
          "Come Funziona {product}?",
          "Vantaggi di {product}",
          "Guida Completa {product}",
          "Scopri {product}",
          "Cos'è {product}?",
          "Perché {product}?",
          "Tutto su {product}",
          "Conosci {product}?"
        ],
        descriptions: [
          "Scopri come {product} può trasformare la tua vita",
          "Impara tutti i vantaggi unici di {product}",
          "Sappi tutto su {product} e i suoi risultati",
          "Capisci perché {product} è la scelta giusta",
          "Vedi come {product} funziona in pratica",
          "Impara su {product} e i suoi vantaggi",
          "Esplora le caratteristiche di {product}",
          "Scopri il potere di {product}"
        ]
      },
      mid: {
        titles: [
          "Testimonianze {product}",
          "Risultati Reali {product}",
          "Recensioni {product}",
          "Confronta {product}",
          "Prova Sociale {product}",
          "Casi di Successo",
          "Opinione Clienti",
          "Prima e Dopo"
        ],
        descriptions: [
          "Vedi risultati reali degli utenti di {product}",
          "Leggi testimonianze autentiche su {product}",
          "Confronta {product} con altri prodotti",
          "Recensioni verificate di {product}",
          "Casi di successo comprovati con {product}",
          "Opinione reale dei clienti su {product}",
          "Risultati comprovati in {country}",
          "Trasformazioni reali con {product}"
        ]
      },
      bottom: {
        titles: [
          "Acquista {product} Ora",
          "Offerta Speciale {product}",
          "Garanzia {product}",
          "Consegna {product}",
          "Sconto {product}",
          "Promozione {product}",
          "Ultime Unità",
          "Approfitta Ora"
        ],
        descriptions: [
          "Acquista {product} per {price} con spedizione gratuita",
          "Offerta speciale {product} solo {price}",
          "Garanzia totale nell'acquisto di {product}",
          "Consegna veloce di {product} in {country}",
          "Sconto esclusivo per {product}",
          "Promozione limitata {product} per {price}",
          "Ultime unità di {product} disponibili",
          "Approfitta ora {product} per {price}"
        ]
      },
      cod: {
        titles: [
          "Pagamento alla Consegna",
          "Senza Rischio {product}",
          "Consegna Veloce {country}",
          "Ricevi e Paga",
          "Zero Anticipo",
          "Senza Tassa di Consegna",
          "Acquisto Sicuro",
          "Prova senza Pagare"
        ],
        descriptions: [
          "Paga {product} solo alla consegna in {country}",
          "Ricevi {product} prima, paga dopo",
          "Consegna veloce di {product} senza pagamento anticipato",
          "Acquista {product} senza rischio, paga alla consegna",
          "Zero anticipo per {product} in {country}",
          "Senza tassa di consegna per {product}",
          "Acquisto 100% sicuro di {product}",
          "Prova {product} prima di pagare"
        ]
      }
    }
  },
  ru: {
    titles: [
      "{product} - Официальный дистрибьютор в России",
      "Купить {product} Сейчас - {price}",
      "{product} - Качественный продукт премиум-класса",
      "Закажите {product} - Бесплатная доставка",
      "{product} Оригинал - Специальная цена {price}",
      "Ограниченное предложение: {product} за {price}",
      "{product} - Лучшая цена гарантирована",
      "Мгновенная распродажа {product} - Только сегодня {price}",
      "Специальная скидка {product} - {price}",
      "Не пропустите: {product} со скидкой",
      "{product} Премиум - Качество гарантировано",
      "Мега предложение {product} - {price}",
      "Последний шанс: {product} за {price}",
      "{product} - Немедленная доставка",
      "Молниеносная сделка: {product} {price}",
      "Купить сейчас: {product} - {price}",
      "{product} - Оплата при доставке",
      "Супер скидка: {product} за {price}",
      "{product} - Продукт года",
      "Незаменимо: {product} только {price}",
      "{product} - Гарантия удовлетворения",
      "Эксклюзивное предложение: {product} {price}",
      "{product} - Лидер продаж",
      "Специальная сделка: {product} за {price}",
      "{product} - Покупайте с уверенностью",
      "Специальная скидка: {product} {price}",
      "{product} - Одобренный продукт",
      "Лучшее предложение: {product} только {price}",
      "{product} - Премиум качество",
      "Действуйте сейчас: {product} за {price}"
    ],
    descriptions: [
      "Получите {product} с быстрой доставкой по России. Легкий платеж. Специальная цена: {price}",
      "Закажите {product} сегодня и наслаждайтесь бесплатной доставкой. Гарантия удовлетворения или возврат денег.",
      "{product} - Идеальное решение для ваших потребностей. Видимые результаты за несколько дней. Не ждите!",
      "Попробуйте {product} и преобразите свою жизнь. Оригинальный продукт с расширенной гарантией.",
      "Ограниченное по времени предложение {product} всего за {price}. Не упустите эту уникальную возможность!",
      "Продукт {product} премиум-качества с быстрой и безопасной доставкой по всей территории.",
      "Воспользуйтесь специальной скидкой на {product}. Легкий платеж до 12 платежей без процентов.",
      "{product} - Самый продаваемый продукт на рынке. Полная гарантия качества и эффективности."
    ],
    usps: [
      "✅ Бесплатная доставка по России",
      "✅ Легкий платеж до 12 платежей",
      "✅ Гарантия удовлетворения или возврат денег",
      "✅ Поддержка клиентов 24/7"
    ],
    sitelinks: {
      top: {
        titles: [
          "Как Работает {product}?",
          "Преимущества {product}",
          "Полное Руководство {product}",
          "Откройте {product}",
          "Что такое {product}?",
          "Почему {product}?",
          "Все о {product}",
          "Знаете {product}?"
        ],
        descriptions: [
          "Откройте, как {product} может изменить вашу жизнь",
          "Изучите все уникальные преимущества {product}",
          "Узнайте все о {product} и его результатах",
          "Поймите, почему {product} - правильный выбор",
          "Посмотрите, как {product} работает на практике",
          "Изучите {product} и его преимущества",
          "Исследуйте характеристики {product}",
          "Откройте силу {product}"
        ]
      },
      mid: {
        titles: [
          "Отзывы {product}",
          "Реальные Результаты {product}",
          "Обзоры {product}",
          "Сравнить {product}",
          "Социальное Доказательство {product}",
          "Истории Успеха",
          "Мнение Клиентов",
          "До и После"
        ],
        descriptions: [
          "Посмотрите реальные результаты пользователей {product}",
          "Прочитайте подлинные отзывы о {product}",
          "Сравните {product} с другими продуктами",
          "Проверенные обзоры {product}",
          "Доказанные истории успеха с {product}",
          "Реальное мнение клиентов о {product}",
          "Доказанные результаты в {country}",
          "Реальные преобразования с {product}"
        ]
      },
      bottom: {
        titles: [
          "Купить {product} Сейчас",
          "Специальное Предложение {product}",
          "Гарантия {product}",
          "Доставка {product}",
          "Скидка {product}",
          "Акция {product}",
          "Последние Единицы",
          "Воспользуйтесь Сейчас"
        ],
        descriptions: [
          "Купите {product} за {price} с бесплатной доставкой",
          "Специальное предложение {product} только {price}",
          "Полная гарантия при покупке {product}",
          "Быстрая доставка {product} в {country}",
          "Эксклюзивная скидка на {product}",
          "Ограниченная акция {product} за {price}",
          "Последние единицы {product} доступны",
          "Воспользуйтесь сейчас {product} за {price}"
        ]
      },
      cod: {
        titles: [
          "Оплата при Доставке",
          "Без Риска {product}",
          "Быстрая Доставка {country}",
          "Получите и Заплатите",
          "Ноль Предоплаты",
          "Без Платы за Доставку",
          "Безопасная Покупка",
          "Попробуйте без Оплаты"
        ],
        descriptions: [
          "Платите за {product} только при доставке в {country}",
          "Получите {product} сначала, платите потом",
          "Быстрая доставка {product} без предоплаты",
          "Покупайте {product} без риска, платите при доставке",
          "Ноль предоплаты за {product} в {country}",
          "Без платы за доставку для {product}",
          "100% безопасная покупка {product}",
          "Попробуйте {product} перед оплатой"
        ]
      }
    }
  },
  zh: {
    titles: [
      "{product} - 中国官方经销商",
      "立即购买 {product} - {price}",
      "{product} - 优质高端产品",
      "订购 {product} - 免费送货",
      "{product} 正品 - 特价 {price}",
      "限时优惠：{product} 仅售 {price}",
      "{product} - 最优价格保证",
      "闪购 {product} - 仅限今日 {price}",
      "特别折扣 {product} - {price}",
      "别错过：{product} 折扣优惠",
      "{product} 高端 - 品质保证",
      "超值优惠 {product} - {price}",
      "最后机会：{product} 仅售 {price}",
      "{product} - 立即发货",
      "限时抢购：{product} {price}",
      "立即购买：{product} - {price}",
      "{product} - 货到付款",
      "超级折扣：{product} 仅售 {price}",
      "{product} - 年度产品",
      "不可错过：{product} 仅 {price}",
      "{product} - 满意保证",
      "独家优惠：{product} {price}",
      "{product} - 销量冠军",
      "特别优惠：{product} 仅售 {price}",
      "{product} - 放心购买",
      "特别折扣：{product} {price}",
      "{product} - 认证产品",
      "最佳优惠：{product} 仅 {price}",
      "{product} - 高端品质",
      "立即行动：{product} 仅售 {price}"
    ],
    descriptions: [
      "购买 {product}，中国境内快速配送。便捷支付。特价：{price}",
      "今日订购 {product}，享受免费配送。满意保证或退款。",
      "{product} - 满足您需求的完美解决方案。几天内见效。不要等待！",
      "试用 {product}，改变您的生活。正品，延长保修。",
      "{product} 限时优惠价仅 {price}。不要错过这个独特的机会！",
      "高端品质 {product}，全国快速安全配送。",
      "享受 {product} 特别折扣。便捷支付，最多12期免息。",
      "{product} - 市场上最畅销的产品。品质和效果全面保证。"
    ],
    usps: [
      "✅ 中国境内免费配送",
      "✅ 便捷支付最多12期",
      "✅ 满意保证或退款",
      "✅ 24/7客户支持"
    ],
    sitelinks: {
      top: {
        titles: [
          "{product}如何工作？",
          "{product}的好处",
          "{product}完整指南",
          "发现{product}",
          "什么是{product}？",
          "为什么选择{product}？",
          "关于{product}的一切",
          "了解{product}？"
        ],
        descriptions: [
          "发现{product}如何改变您的生活",
          "了解{product}的所有独特好处",
          "了解{product}及其效果的一切",
          "理解为什么{product}是正确的选择",
          "看看{product}在实践中如何工作",
          "了解{product}及其优势",
          "探索{product}的特性",
          "发现{product}的力量"
        ]
      },
      mid: {
        titles: [
          "{product}用户见证",
          "{product}真实效果",
          "{product}评价",
          "比较{product}",
          "{product}社会证明",
          "成功案例",
          "客户意见",
          "使用前后对比"
        ],
        descriptions: [
          "查看{product}用户的真实效果",
          "阅读关于{product}的真实见证",
          "将{product}与其他产品比较",
          "{product}的验证评价",
          "使用{product}的成功案例证明",
          "客户对{product}的真实意见",
          "在{country}的验证效果",
          "使用{product}的真实转变"
        ]
      },
      bottom: {
        titles: [
          "立即购买{product}",
          "{product}特别优惠",
          "{product}保证",
          "{product}配送",
          "{product}折扣",
          "{product}促销",
          "最后库存",
          "立即享受"
        ],
        descriptions: [
          "以{price}购买{product}，免费配送",
          "{product}特别优惠仅{price}",
          "购买{product}的全面保证",
          "{product}在{country}的快速配送",
          "{product}的独家折扣",
          "{product}限时促销价{price}",
          "{product}最后库存可用",
          "立即享受{product}价格{price}"
        ]
      },
      cod: {
        titles: [
          "货到付款",
          "无风险{product}",
          "{country}快速配送",
          "收货后付款",
          "零预付",
          "无配送费",
          "安全购买",
          "先试用后付款"
        ],
        descriptions: [
          "在{country}收到{product}后付款",
          "先收到{product}，后付款",
          "{product}快速配送无需预付",
          "无风险购买{product}，货到付款",
          "在{country}购买{product}零预付",
          "{product}无配送费",
          "100%安全购买{product}",
          "付款前试用{product}"
        ]
      }
    }
  },
  hi: {
    titles: [
      "{product} - भारत में आधिकारिक वितरक",
      "अभी {product} खरीदें - {price}",
      "{product} - उच्च गुणवत्ता प्रीमियम उत्पाद",
      "{product} ऑर्डर करें - मुफ्त शिपिंग",
      "{product} मूल - विशेष मूल्य {price}",
      "सीमित ऑफर: {product} केवल {price} में",
      "{product} - सर्वोत्तम मूल्य गारंटी",
      "फ्लैश सेल {product} - केवल आज {price}",
      "विशेष छूट {product} - {price}",
      "न चूकें: {product} छूट के साथ",
      "{product} प्रीमियम - गुणवत्ता सुनिश्चित",
      "मेगा ऑफर {product} - {price}",
      "अंतिम मौका: {product} केवल {price}",
      "{product} - तुरंत डिलीवरी",
      "बिजली डील: {product} {price}",
      "अभी खरीदें: {product} - {price}",
      "{product} - डिलीवरी पर भुगतान",
      "सुपर छूट: {product} केवल {price}",
      "{product} - वर्ष का उत्पाद",
      "अनमोल: {product} केवल {price}",
      "{product} - संतुष्टि गारंटी",
      "विशेष ऑफर: {product} {price}",
      "{product} - बिक्री लीडर",
      "विशेष डील: {product} केवल {price}",
      "{product} - विश्वास के साथ खरीदें",
      "विशेष छूट: {product} {price}",
      "{product} - अनुमोदित उत्पाद",
      "सर्वोत्तम ऑफर: {product} केवल {price}",
      "{product} - प्रीमियम गुणवत्ता",
      "अभी कार्य करें: {product} केवल {price}"
    ],
    descriptions: [
      "भारत भर में तेज़ डिलीवरी के साथ {product} प्राप्त करें। आसान भुगतान। विशेष मूल्य: {price}",
      "आज {product} ऑर्डर करें और मुफ्त शिपिंग का आनंद लें। संतुष्टि गारंटी या पैसे वापस।",
      "{product} - आपकी आवश्यकताओं के लिए सही समाधान। कुछ दिनों में दिखने वाले परिणाम। प्रतीक्षा न करें!",
      "{product} आज़माएं और अपना जीवन बदलें। मूल उत्पाद विस्तारित वारंटी के साथ।",
      "{product} के लिए सीमित समय ऑफर केवल {price} में। इस अनोखे अवसर को न चूकें!",
      "प्रीमियम गुणवत्ता {product} पूरे देश में तेज़ और सुरक्षित डिलीवरी के साथ।",
      "{product} पर विशेष छूट का लाभ उठाएं। 12 किश्तों तक आसान भुगतान बिना ब्याज।",
      "{product} - बाज़ार में सबसे ज्यादा बिकने वाला उत्पाद। गुणवत्ता और प्रभावशीलता की पूर्ण गारंटी।"
    ],
    usps: [
      "✅ भारत भर में मुफ्त शिपिंग",
      "✅ 12 किश्तों तक आसान भुगतान",
      "✅ संतुष्टि गारंटी या पैसे वापस",
      "✅ 24/7 ग्राहक सहायता"
    ],
    sitelinks: {
      top: {
        titles: [
          "{product} कैसे काम करता है?",
          "{product} के फायदे",
          "पूरी {product} गाइड",
          "{product} खोजें",
          "{product} क्या है?",
          "{product} क्यों?",
          "{product} के बारे में सब कुछ",
          "{product} जानते हैं?"
        ],
        descriptions: [
          "खोजें कि {product} आपका जीवन कैसे बदल सकता है",
          "{product} के सभी अनूठे फायदे जानें",
          "{product} और इसके परिणामों के बारे में सब कुछ जानें",
          "समझें कि {product} सही विकल्प क्यों है",
          "देखें कि {product} व्यवहार में कैसे काम करता है",
          "{product} और इसके फायदों के बारे में जानें",
          "{product} की विशेषताओं का अन्वेषण करें",
          "{product} की शक्ति खोजें"
        ]
      },
      mid: {
        titles: [
          "{product} उपयोगकर्ता समीक्षा",
          "वास्तविक {product} परिणाम",
          "{product} रेटिंग",
          "{product} की तुलना करें",
          "{product} सामाजिक प्रमाण",
          "सफलता की कहानियां",
          "ग्राहक राय",
          "पहले और बाद में"
        ],
        descriptions: [
          "{product} उपयोगकर्ताओं के वास्तविक परिणाम देखें",
          "{product} के बारे में वास्तविक समीक्षा पढ़ें",
          "{product} की अन्य उत्पादों से तुलना करें",
          "{product} की सत्यापित समीक्षाएं",
          "{product} के साथ सिद्ध सफलता की कहानियां",
          "{product} के बारे में वास्तविक ग्राहक राय",
          "{country} में सिद्ध परिणाम",
          "{product} के साथ वास्तविक बदलाव"
        ]
      },
      bottom: {
        titles: [
          "अभी {product} खरीदें",
          "विशेष {product} ऑफर",
          "{product} गारंटी",
          "{product} डिलीवरी",
          "{product} छूट",
          "{product} प्रमोशन",
          "अंतिम स्टॉक",
          "अभी फायदा उठाएं"
        ],
        descriptions: [
          "मुफ्त शिपिंग के साथ {price} में {product} खरीदें",
          "विशेष ऑफर {product} केवल {price}",
          "{product} खरीदने पर पूर्ण गारंटी",
          "{country} में {product} की तेज़ डिलीवरी",
          "{product} के लिए विशेष छूट",
          "सीमित प्रमोशन {product} {price} में",
          "{product} के अंतिम स्टॉक उपलब्ध",
          "अभी {product} का {price} में फायदा उठाएं"
        ]
      },
      cod: {
        titles: [
          "डिलीवरी पर भुगतान",
          "जोखिम मुक्त {product}",
          "{country} तेज़ डिलीवरी",
          "पहले प्राप्त करें फिर भुगतान",
          "शून्य अग्रिम",
          "कोई डिलीवरी शुल्क नहीं",
          "सुरक्षित खरीदारी",
          "भुगतान से पहले परीक्षण"
        ],
        descriptions: [
          "{country} में डिलीवरी पर ही {product} का भुगतान करें",
          "पहले {product} प्राप्त करें, बाद में भुगतान करें",
          "बिना अग्रिम भुगतान {product} की तेज़ डिलीवरी",
          "जोखिम मुक्त {product} खरीदें, डिलीवरी पर भुगतान",
          "{country} में {product} के लिए शून्य अग्रिम",
          "{product} के लिए कोई डिलीवरी शुल्क नहीं",
          "{product} की 100% सुरक्षित खरीदारी",
          "भुगतान से पहले {product} का परीक्षण करें"
        ]
      }
    }
  },
  ja: {
    titles: [
      "{product} - 日本公式販売代理店",
      "今すぐ{product}を購入 - {price}",
      "{product} - 高品質プレミアム製品",
      "{product}を注文 - 送料無料",
      "{product}正規品 - 特別価格{price}",
      "限定オファー: {product}が{price}",
      "{product} - 最安値保証",
      "フラッシュセール{product} - 本日限り{price}",
      "特別割引{product} - {price}",
      "お見逃しなく: {product}割引付き",
      "{product}プレミアム - 品質保証",
      "メガオファー{product} - {price}",
      "ラストチャンス: {product}が{price}",
      "{product} - 即日配送",
      "電光取引: {product} {price}",
      "今すぐ購入: {product} - {price}",
      "{product} - 代金引換",
      "スーパー割引: {product}が{price}",
      "{product} - 今年の製品",
      "見逃せない: {product}のみ{price}",
      "{product} - 満足保証",
      "限定オファー: {product} {price}",
      "{product} - 売上リーダー",
      "特別取引: {product}が{price}",
      "{product} - 安心してお買い物",
      "特別割引: {product} {price}",
      "{product} - 承認済み製品",
      "最高のオファー: {product}のみ{price}",
      "{product} - プレミアム品質",
      "今すぐ行動: {product}が{price}"
    ],
    descriptions: [
      "日本全国への迅速配送で{product}を入手。簡単支払い。特別価格: {price}",
      "今日{product}を注文して送料無料をお楽しみください。満足保証または返金。",
      "{product} - あなたのニーズに最適なソリューション。数日で目に見える結果。お待ちください!",
      "{product}を試してあなたの人生を変えてください。延長保証付き正規品。",
      "{product}の期間限定オファーがわずか{price}。このユニークな機会をお見逃しなく!",
      "プレミアム品質{product}全国への迅速で安全な配送付き。",
      "{product}の特別割引をお楽しみください。最大12回まで無利息での簡単支払い。",
      "{product} - 市場で最も売れている製品。品質と効果の完全保証。"
    ],
    usps: [
      "✅ 日本全国送料無料",
      "✅ 最大12回まで簡単支払い",
      "✅ 満足保証または返金",
      "✅ 24/7カスタマーサポート"
    ],
    sitelinks: {
      top: {
        titles: [
          "{product}の仕組みは？",
          "{product}の利点",
          "完全な{product}ガイド",
          "{product}を発見",
          "{product}とは？",
          "なぜ{product}？",
          "{product}について全て",
          "{product}をご存知？"
        ],
        descriptions: [
          "{product}があなたの人生をどう変えるか発見",
          "{product}のすべてのユニークな利点を学ぶ",
          "{product}とその結果について全てを知る",
          "なぜ{product}が正しい選択かを理解",
          "{product}が実際にどう機能するかを見る",
          "{product}とその利点について学ぶ",
          "{product}の特性を探る",
          "{product}の力を発見"
        ]
      },
      mid: {
        titles: [
          "{product}お客様の声",
          "実際の{product}結果",
          "{product}レビュー",
          "{product}を比較",
          "{product}社会的証明",
          "成功事例",
          "お客様の意見",
          "使用前後"
        ],
        descriptions: [
          "{product}ユーザーの実際の結果を見る",
          "{product}についての真のお客様の声を読む",
          "{product}を他の製品と比較",
          "{product}の検証済みレビュー",
          "{product}での実証された成功事例",
          "{product}についてのお客様の実際の意見",
          "{country}での実証された結果",
          "{product}での実際の変化"
        ]
      },
      bottom: {
        titles: [
          "今すぐ{product}購入",
          "特別{product}オファー",
          "{product}保証",
          "{product}配送",
          "{product}割引",
          "{product}プロモーション",
          "最後の在庫",
          "今すぐ活用"
        ],
        descriptions: [
          "送料無料で{price}の{product}を購入",
          "特別オファー{product}のみ{price}",
          "{product}購入時の完全保証",
          "{country}での{product}迅速配送",
          "{product}の特別割引",
          "限定プロモーション{product}が{price}",
          "{product}の最後の在庫が利用可能",
          "今すぐ{product}を{price}で活用"
        ]
      },
      cod: {
        titles: [
          "代金引換",
          "リスクなし{product}",
          "{country}迅速配送",
          "受取後支払い",
          "前払いゼロ",
          "配送料なし",
          "安全な購入",
          "支払前テスト"
        ],
        descriptions: [
          "{country}での配送時に{product}の支払い",
          "まず{product}を受け取り、後で支払い",
          "前払いなしの{product}迅速配送",
          "リスクなしで{product}を購入、配送時支払い",
          "{country}での{product}前払いゼロ",
          "{product}の配送料なし",
          "{product}の100%安全な購入",
          "支払い前に{product}をテスト"
        ]
      }
    }
  }
};

const countryLanguageMap: { [key: string]: string } = {
  'Brasil': 'pt', 'Argentina': 'es', 'México': 'es', 'Chile': 'es', 'Colombia': 'es',
  'Peru': 'es', 'Venezuela': 'es', 'Ecuador': 'es', 'Bolivia': 'es', 'Paraguay': 'es',
  'Uruguay': 'es', 'Costa Rica': 'es', 'Panamá': 'es', 'Guatemala': 'es', 'Honduras': 'es',
  'El Salvador': 'es', 'Nicaragua': 'es', 'República Dominicana': 'es', 'Cuba': 'es', 'España': 'es',
  'Portugal': 'pt', 'France': 'fr', 'Deutschland': 'de', 'Italia': 'it', 'United Kingdom': 'en',
  'Ireland': 'en', 'Netherlands': 'en', 'Belgium': 'fr', 'Switzerland': 'de', 'Austria': 'de',
  'Россия': 'ru', 'Ukraine': 'ru', 'Belarus': 'ru', 'Kazakhstan': 'ru', 'Uzbekistan': 'ru',
  '中国': 'zh', 'Japan': 'ja', '대한민국': 'en', 'Taiwan': 'zh', 'Hong Kong': 'zh',
  'भारत': 'hi', 'Pakistan': 'en', 'Bangladesh': 'en', 'Sri Lanka': 'en', 'Thailand': 'en',
  'Vietnam': 'en', 'Indonesia': 'en', 'Malaysia': 'en', 'Singapore': 'en', 'Philippines': 'en',
  'United States': 'en', 'Canada': 'en', 'Australia': 'en', 'New Zealand': 'en', 'South Africa': 'en',
  'Nigeria': 'en', 'Kenya': 'en', 'Ghana': 'en', 'Morocco': 'en', 'Egypt': 'en',
  'Turkey': 'en', 'Israel': 'en', 'Saudi Arabia': 'en', 'UAE': 'en', 'Iran': 'en',
  'Iraq': 'en', 'Jordan': 'en', 'Lebanon': 'en', 'Syria': 'en', 'Yemen': 'en',
  'Poland': 'en', 'Czech Republic': 'en', 'Slovakia': 'en', 'Hungary': 'en', 'Romania': 'en',
  'Bulgaria': 'en', 'Croatia': 'en', 'Serbia': 'en', 'Bosnia': 'en', 'Montenegro': 'en',
  'Albania': 'en', 'Macedonia': 'en', 'Slovenia': 'en', 'Estonia': 'en', 'Latvia': 'en',
  'Lithuania': 'en', 'Finland': 'en', 'Sweden': 'en', 'Norway': 'en', 'Denmark': 'en',
  'Iceland': 'en', 'Greece': 'en', 'Cyprus': 'en', 'Malta': 'en', 'Luxembourg': 'en'
};

const getLanguageForCountry = (countryName: string): string => {
  return countryLanguageMap[countryName] || 'en';
};

export const generateCODCopies = (product: string, price: string, countryName: string, languageCode: string, funnel: string) => {
  const language = getLanguageForCountry(countryName);
  const templates = languageTemplates[language] || languageTemplates['en'];

  // Generate 30 different titles by shuffling and extending the template array
  const allTitles = [...templates.titles];
  const shuffledTitles = allTitles.sort(() => Math.random() - 0.5);
  const titles = shuffledTitles.slice(0, 30).map(title =>
    title.replace('{product}', product).replace('{price}', price)
  );

  const descriptions = templates.descriptions.map(description =>
    description.replace('{product}', product).replace('{price}', price)
  );
  
  const usps = templates.usps.map(usp => usp);

  // Generate dynamic sitelinks based on funnel strategy
  const sitelinkTemplates = templates.sitelinks[funnel] || templates.sitelinks['cod'];
  
  // Shuffle and select 4 random sitelinks for variation
  const shuffledTitles = [...sitelinkTemplates.titles].sort(() => Math.random() - 0.5);
  const shuffledDescriptions = [...sitelinkTemplates.descriptions].sort(() => Math.random() - 0.5);
  
  const sitelinks = Array.from({ length: 4 }, (_, index) => ({
    title: shuffledTitles[index % shuffledTitles.length]
      .replace('{product}', product)
      .replace('{price}', price)
      .replace('{country}', countryName),
    description1: shuffledDescriptions[index % shuffledDescriptions.length]
      .replace('{product}', product)
      .replace('{price}', price)
      .replace('{country}', countryName),
    description2: shuffledDescriptions[(index + 1) % shuffledDescriptions.length]
      .replace('{product}', product)
      .replace('{price}', price)
      .replace('{country}', countryName),
    url: faker.internet.url()
  }));

  return { titles, descriptions, usps, sitelinks };
};
