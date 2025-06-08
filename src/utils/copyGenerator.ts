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
    highlights: string[];
    biddingStrategies: {
      [funnel: string]: string[];
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
      "✅ Atendimento ao cliente 24/7",
      "✅ Resultados comprovados",
      "✅ Produto 100% original",
      "✅ Suporte dedicado",
      "✅ Entrega rápida e segura",
      "✅ Garantia de satisfação",
      "✅ Promoções exclusivas",
      "✅ Fácil parcelamento",
      "✅ Qualidade premium",
      "✅ Testado e aprovado",
      "✅ Compra segura",
      "✅ Atendimento personalizado",
      "✅ Produto recomendado",
      "✅ Garantia estendida",
      "✅ Descontos especiais"
    ],
    highlights: [
      "Compre Agora e Economize",
      "Frete Grátis Hoje",
      "Pagamento na Entrega",
      "Resultado Garantido em 30 Dias",
      "Oferta Por Tempo Limitado",
      "Desconto Exclusivo Online",
      "Estoque Limitado - Últimas Unidades",
      "Aprovado por Especialistas",
      "Satisfação 100% Garantida",
      "Entrega Expressa em 5 Dias",
      "Parcelamento Sem Juros",
      "Produto Mais Vendido do Mês",
      "Promoção Especial por Tempo Limitado",
      "Garantia Total de Qualidade",
      "Preço Promocional Hoje",
      "Aproveite Antes que Acabe",
      "Oferta Relâmpago - 24h Apenas",
      "Compra Segura e Garantida"
    ],
    sitelinks: {
      top: {
        titles: [
          "Descubra {product}",
          "Como Funciona",
          "Benefícios",
          "Guia Completo",
          "O que é {product}?",
          "Por que Escolher",
          "Tudo sobre {product}",
          "Conhece {product}?",
          "Características",
          "Vantagens",
          "Informações",
          "Detalhes",
          "Explicação",
          "Conheça Mais",
          "Saiba Tudo"
        ],
        descriptions: [
          "Descubra como {product} funciona",
          "Conheça todos os benefícios",
          "Saiba tudo sobre {product}",
          "Entenda as vantagens",
          "Veja como {product} atua",
          "Aprenda sobre {product}",
          "Explore as características",
          "Descubra o poder do produto",
          "Conheça as propriedades",
          "Entenda o funcionamento",
          "Veja informações completas",
          "Saiba todos os detalhes",
          "Descubra as qualidades",
          "Conheça mais sobre {product}",
          "Entenda tudo sobre o produto"
        ]
      },
      mid: {
        titles: [
          "Depoimentos Reais",
          "Resultados Comprovados",
          "Avaliações",
          "Casos de Sucesso",
          "Opinião dos Clientes",
          "Antes e Depois",
          "Prova Social",
          "Testemunhos",
          "Experiências",
          "Relatos",
          "Feedback",
          "Transformações",
          "Histórias de Sucesso",
          "Clientes Satisfeitos",
          "Resultados Reais"
        ],
        descriptions: [
          "Veja resultados reais de clientes",
          "Leia depoimentos verdadeiros",
          "Avaliações verificadas",
          "Casos de sucesso comprovados",
          "Opinião real dos usuários",
          "Transformações impressionantes",
          "Prova social verificada",
          "Testemunhos autênticos",
          "Experiências positivas",
          "Relatos de mudanças",
          "Feedback dos clientes",
          "Transformações reais",
          "Histórias inspiradoras",
          "Clientes 100% satisfeitos",
          "Resultados documentados"
        ]
      },
      bottom: {
        titles: [
          "Compre Agora",
          "Pague na Entrega",
          "Oferta Limitada",
          "Desconto Exclusivo",
          "Estoque Quase no Fim",
          "Frete Grátis Hoje",
          "Resultado Garantido",
          "Receba em 5 Dias",
          "Veja Depoimentos Reais",
          "Garantia Total",
          "Promoção Especial",
          "Oferta por Tempo Limitado",
          "Parcelamento Sem Juros",
          "Mais Vendidos do Mês",
          "Aproveite Agora"
        ],
        descriptions: [
          "Compre {product} por {price}",
          "Pague apenas na entrega",
          "Oferta válida por tempo limitado",
          "Desconto exclusivo para você",
          "Últimas unidades disponíveis",
          "Frete grátis para todo Brasil",
          "Garantia de resultado ou dinheiro de volta",
          "Entrega expressa em 5 dias úteis",
          "Veja o que dizem nossos clientes",
          "Garantia total de qualidade",
          "Promoção especial por tempo limitado",
          "Aproveite antes que acabe",
          "Parcele em até 12x sem juros",
          "Produto mais vendido este mês",
          "Não perca esta oportunidade"
        ]
      },
      cod: {
        titles: [
          "Compre Agora",
          "Pague na Entrega",
          "Oferta Limitada",
          "Desconto Exclusivo",
          "Estoque Quase no Fim",
          "Frete Grátis Hoje",
          "Resultado Garantido",
          "Receba em 5 Dias",
          "Veja Depoimentos Reais",
          "Garantia Total",
          "Promoção Especial",
          "Oferta por Tempo Limitado",
          "Parcelamento Sem Juros",
          "Mais Vendidos do Mês",
          "Aproveite Agora"
        ],
        descriptions: [
          "Compre {product} por {price}",
          "Pague apenas na entrega",
          "Oferta válida por tempo limitado",
          "Desconto exclusivo para você",
          "Últimas unidades disponíveis",
          "Frete grátis para todo Brasil",
          "Garantia de resultado ou dinheiro de volta",
          "Entrega expressa em 5 dias úteis",
          "Veja o que dizem nossos clientes",
          "Garantia total de qualidade",
          "Promoção especial por tempo limitado",
          "Aproveite antes que acabe",
          "Parcele em até 12x sem juros",
          "Produto mais vendido este mês",
          "Não perca esta oportunidade"
        ]
      }
    },
    biddingStrategies: {
      top: [
        "Maximize cliques - Foco em awareness",
        "CPC manual - Controle total dos lances",
        "Maximize impressões - Visibilidade máxima"
      ],
      mid: [
        "CPA desejado - Otimização para conversões",
        "Maximize conversões - Foco em resultados",
        "CPC aprimorado - Ajustes automáticos"
      ],
      bottom: [
        "Maximize conversões - Foco em vendas",
        "CPA desejado - Controle de custo por aquisição",
        "ROAS desejado - Retorno sobre investimento"
      ],
      cod: [
        "Maximize conversões - Otimização para COD",
        "CPA desejado - Controle de custo",
        "CPC aprimorado - Lances inteligentes"
      ]
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
      "✅ 24/7 customer support",
      "✅ Proven results",
      "✅ 100% original product",
      "✅ Dedicated support",
      "✅ Fast and secure delivery",
      "✅ Satisfaction guarantee",
      "✅ Exclusive promotions",
      "✅ Easy installment plans",
      "✅ Premium quality",
      "✅ Tested and approved",
      "✅ Secure purchase",
      "✅ Personalized service",
      "✅ Recommended product",
      "✅ Extended warranty",
      "✅ Special discounts"
    ],
    highlights: [
      "Buy Now and Save",
      "Free Shipping Today",
      "Cash on Delivery",
      "Results Guaranteed in 30 Days",
      "Limited Time Offer",
      "Exclusive Online Discount",
      "Limited Stock - Last Units",
      "Expert Approved",
      "100% Satisfaction Guaranteed",
      "Express Delivery in 5 Days",
      "Interest-Free Installments",
      "Best Seller This Month",
      "Special Limited Time Promotion",
      "Total Quality Guarantee",
      "Promotional Price Today",
      "Get It Before It's Gone",
      "Flash Sale - 24h Only",
      "Safe and Guaranteed Purchase"
    ],
    sitelinks: {
      top: {
        titles: [
          "Discover {product}",
          "How It Works",
          "Benefits",
          "Complete Guide",
          "What is {product}?",
          "Why Choose",
          "All About {product}",
          "Know {product}?",
          "Features",
          "Advantages",
          "Information",
          "Details",
          "Explanation",
          "Learn More",
          "Know Everything"
        ],
        descriptions: [
          "Discover how {product} works",
          "Learn all the benefits",
          "Know everything about {product}",
          "Understand the advantages",
          "See how {product} acts",
          "Learn about {product}",
          "Explore the features",
          "Discover the product power",
          "Know the properties",
          "Understand how it works",
          "See complete information",
          "Know all details",
          "Discover the qualities",
          "Learn more about {product}",
          "Understand everything about the product"
        ]
      },
      mid: {
        titles: [
          "Real Testimonials",
          "Proven Results",
          "Reviews",
          "Success Cases",
          "Customer Opinion",
          "Before and After",
          "Social Proof",
          "Testimonies",
          "Experiences",
          "Reports",
          "Feedback",
          "Transformations",
          "Success Stories",
          "Satisfied Customers",
          "Real Results"
        ],
        descriptions: [
          "See real customer results",
          "Read genuine testimonials",
          "Verified reviews",
          "Proven success cases",
          "Real user opinion",
          "Amazing transformations",
          "Verified social proof",
          "Authentic testimonies",
          "Positive experiences",
          "Change reports",
          "Customer feedback",
          "Real transformations",
          "Inspiring stories",
          "100% satisfied customers",
          "Documented results"
        ]
      },
      bottom: {
        titles: [
          "Buy Now",
          "Cash on Delivery",
          "Limited Offer",
          "Exclusive Discount",
          "Stock Almost Gone",
          "Free Shipping Today",
          "Guaranteed Results",
          "Receive in 5 Days",
          "See Real Testimonials",
          "Total Guarantee",
          "Special Promotion",
          "Limited Time Offer",
          "Interest-Free Installments",
          "Month's Best Sellers",
          "Take Advantage Now"
        ],
        descriptions: [
          "Buy {product} for {price}",
          "Pay only on delivery",
          "Offer valid for limited time",
          "Exclusive discount for you",
          "Last units available",
          "Free shipping worldwide",
          "Result guarantee or money back",
          "Express delivery in 5 business days",
          "See what our customers say",
          "Total quality guarantee",
          "Special limited time promotion",
          "Get it before it's gone",
          "Pay in up to 12 interest-free installments",
          "Best-selling product this month",
          "Don't miss this opportunity"
        ]
      },
      cod: {
        titles: [
          "Buy Now",
          "Cash on Delivery",
          "Limited Offer",
          "Exclusive Discount",
          "Stock Almost Gone",
          "Free Shipping Today",
          "Guaranteed Results",
          "Receive in 5 Days",
          "See Real Testimonials",
          "Total Guarantee",
          "Special Promotion",
          "Limited Time Offer",
          "Interest-Free Installments",
          "Month's Best Sellers",
          "Take Advantage Now"
        ],
        descriptions: [
          "Buy {product} for {price}",
          "Pay only on delivery",
          "Offer valid for limited time",
          "Exclusive discount for you",
          "Last units available",
          "Free shipping worldwide",
          "Result guarantee or money back",
          "Express delivery in 5 business days",
          "See what our customers say",
          "Total quality guarantee",
          "Special limited time promotion",
          "Get it before it's gone",
          "Pay in up to 12 interest-free installments",
          "Best-selling product this month",
          "Don't miss this opportunity"
        ]
      }
    },
    biddingStrategies: {
      top: [
        "Maximize clicks - Focus on awareness",
        "Manual CPC - Full control over bids",
        "Maximize impressions - Maximum visibility"
      ],
      mid: [
        "Target CPA - Optimize for conversions",
        "Maximize conversions - Focus on results",
        "Enhanced CPC - Automatic adjustments"
      ],
      bottom: [
        "Maximize conversions - Focus on sales",
        "Target CPA - Control cost per acquisition",
        "Target ROAS - Return on ad spend"
      ],
      cod: [
        "Maximize conversions - Optimize for COD",
        "Target CPA - Cost control",
        "Enhanced CPC - Smart bidding"
      ]
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
      "✅ Atención al cliente 24/7",
      "✅ Resultados comprobados",
      "✅ Producto 100% original",
      "✅ Soporte dedicado",
      "✅ Entrega rápida y segura",
      "✅ Garantía de satisfacción",
      "✅ Promociones exclusivas",
      "✅ Fácil financiación",
      "✅ Calidad premium",
      "✅ Probado y aprobado",
      "✅ Compra segura",
      "✅ Atención personalizada",
      "✅ Producto recomendado",
      "✅ Garantía extendida",
      "✅ Descuentos especiales"
    ],
    highlights: [
      "Compra Ahora y Ahorra",
      "Envío Gratis Hoy",
      "Pago Contra Entrega",
      "Resultado Garantizado en 30 Días",
      "Oferta Por Tiempo Limitado",
      "Descuento Exclusivo Online",
      "Stock Limitado - Últimas Unidades",
      "Aprobado por Expertos",
      "Satisfacción 100% Garantizada",
      "Entrega Express en 5 Días",
      "Financiación Sin Intereses",
      "Producto Más Vendido del Mes",
      "Promoción Especial por Tiempo Limitado",
      "Garantía Total de Calidad",
      "Precio Promocional Hoy",
      "Aprovecha Antes de que se Acabe",
      "Oferta Flash - Solo 24h",
      "Compra Segura y Garantizada"
    ],
    sitelinks: {
      top: {
        titles: [
          "Descubre {product}",
          "Cómo Funciona",
          "Beneficios",
          "Guía Completa",
          "¿Qué es {product}?",
          "Por qué Elegir",
          "Todo sobre {product}",
          "¿Conoces {product}?",
          "Características",
          "Ventajas",
          "Información",
          "Detalles",
          "Explicación",
          "Conoce Más",
          "Sabe Todo"
        ],
        descriptions: [
          "Descubre cómo funciona {product}",
          "Conoce todos los beneficios",
          "Sabe todo sobre {product}",
          "Entiende las ventajas",
          "Ve cómo actúa {product}",
          "Aprende sobre {product}",
          "Explora las características",
          "Descubre el poder del producto",
          "Conoce las propiedades",
          "Entiende el funcionamiento",
          "Ve información completa",
          "Sabe todos los detalles",
          "Descubre las cualidades",
          "Conoce más sobre {product}",
          "Entiende todo sobre el producto"
        ]
      },
      mid: {
        titles: [
          "Testimonios Reales",
          "Resultados Comprobados",
          "Reseñas",
          "Casos de Éxito",
          "Opinión de Clientes",
          "Antes y Después",
          "Prueba Social",
          "Testimonios",
          "Experiencias",
          "Relatos",
          "Feedback",
          "Transformaciones",
          "Historias de Éxito",
          "Clientes Satisfechos",
          "Resultados Reales"
        ],
        descriptions: [
          "Ve resultados reales de clientes",
          "Lee testimonios genuinos",
          "Reseñas verificadas",
          "Casos de éxito comprobados",
          "Opinión real de usuarios",
          "Transformaciones impresionantes",
          "Prueba social verificada",
          "Testimonios auténticos",
          "Experiencias positivas",
          "Relatos de cambios",
          "Feedback de clientes",
          "Transformaciones reales",
          "Historias inspiradoras",
          "Clientes 100% satisfechos",
          "Resultados documentados"
        ]
      },
      bottom: {
        titles: [
          "Compra Ahora",
          "Pago Contra Entrega",
          "Oferta Limitada",
          "Descuento Exclusivo",
          "Stock Casi Agotado",
          "Envío Gratis Hoy",
          "Resultado Garantizado",
          "Recibe en 5 Días",
          "Ve Testimonios Reales",
          "Garantía Total",
          "Promoción Especial",
          "Oferta por Tiempo Limitado",
          "Financiación Sin Intereses",
          "Más Vendidos del Mes",
          "Aprovecha Ahora"
        ],
        descriptions: [
          "Compra {product} por {price}",
          "Paga solo en la entrega",
          "Oferta válida por tiempo limitado",
          "Descuento exclusivo para ti",
          "Últimas unidades disponibles",
          "Envío gratis a toda España",
          "Garantía de resultado o dinero devuelto",
          "Entrega express en 5 días hábiles",
          "Ve lo que dicen nuestros clientes",
          "Garantía total de calidad",
          "Promoción especial por tiempo limitado",
          "Aprovecha antes de que se acabe",
          "Financia hasta en 12 meses sin intereses",
          "Producto más vendido este mes",
          "No pierdas esta oportunidad"
        ]
      },
      cod: {
        titles: [
          "Compra Ahora",
          "Pago Contra Entrega",
          "Oferta Limitada",
          "Descuento Exclusivo",
          "Stock Casi Agotado",
          "Envío Gratis Hoy",
          "Resultado Garantizado",
          "Recibe en 5 Días",
          "Ve Testimonios Reales",
          "Garantía Total",
          "Promoción Especial",
          "Oferta por Tiempo Limitado",
          "Financiación Sin Intereses",
          "Más Vendidos del Mes",
          "Aprovecha Ahora"
        ],
        descriptions: [
          "Compra {product} por {price}",
          "Paga solo en la entrega",
          "Oferta válida por tiempo limitado",
          "Descuento exclusivo para ti",
          "Últimas unidades disponibles",
          "Envío gratis a toda España",
          "Garantía de resultado o dinero devuelto",
          "Entrega express en 5 días hábiles",
          "Ve lo que dicen nuestros clientes",
          "Garantía total de calidad",
          "Promoción especial por tiempo limitado",
          "Aprovecha antes de que se acabe",
          "Financia hasta en 12 meses sin intereses",
          "Producto más vendido este mes",
          "No pierdas esta oportunidad"
        ]
      }
    },
    biddingStrategies: {
      top: [
        "Maximizar clics - Enfoque en awareness",
        "CPC manual - Control total de pujas",
        "Maximizar impresiones - Visibilidad máxima"
      ],
      mid: [
        "CPA objetivo - Optimización para conversiones",
        "Maximizar conversiones - Enfoque en resultados",
        "CPC mejorado - Ajustes automáticos"
      ],
      bottom: [
        "Maximizar conversiones - Enfoque en ventas",
        "CPA objetivo - Control de costo por adquisición",
        "ROAS objetivo - Retorno de inversión publicitaria"
      ],
      cod: [
        "Maximizar conversiones - Optimización para COD",
        "CPA objetivo - Control de costos",
        "CPC mejorado - Pujas inteligentes"
      ]
    }
  },
  fr: {
    titles: [
      "{product} - Distributeur Officiel en France",
      "Acheter {product} Maintenant - {price}",
      "{product} - Produit de Qualité Supérieure",
      "Commander {product} - Livraison Gratuite",
      "{product} Original - Prix Spécial {price}",
      "Offre Limitée: {product} pour {price}",
      "{product} - Meilleur Prix Garanti",
      "Vente Flash {product} - Aujourd'hui Seulement {price}",
      "Remise Spéciale {product} - {price}",
      "Ne Ratez Pas: {product} avec Remise",
      "{product} Premium - Qualité Assurée",
      "Méga Offre {product} - {price}",
      "Dernière Chance: {product} pour {price}",
      "{product} - Livraison Immédiate",
      "Offre Éclair: {product} {price}",
      "Achetez Maintenant: {product} - {price}",
      "{product} - Paiement à la Livraison",
      "Super Remise: {product} pour {price}",
      "{product} - Produit de l'Année",
      "Immanquable: {product} seulement {price}",
      "{product} - Satisfaction Garantie",
      "Offre Exclusive: {product} {price}",
      "{product} - Leader des Ventes",
      "Offre Spéciale: {product} pour {price}",
      "{product} - Achetez en Confiance",
      "Remise Spéciale: {product} {price}",
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
      "Profitez de la remise spéciale sur {product}. Paiement facile jusqu'à 12 fois sans frais.",
      "{product} - Le produit le plus vendu du marché. Garantie totale de qualité et d'efficacité."
    ],
    usps: [
      "✅ Livraison gratuite en France",
      "✅ Paiement facile jusqu'à 12 fois",
      "✅ Satisfaction garantie ou remboursé",
      "✅ Service client 24/7",
      "✅ Résultats prouvés",
      "✅ Produit 100% original",
      "✅ Support dédié",
      "✅ Livraison rapide et sécurisée",
      "✅ Garantie de satisfaction",
      "✅ Promotions exclusives",
      "✅ Financement facile",
      "✅ Qualité premium",
      "✅ Testé et approuvé",
      "✅ Achat sécurisé",
      "✅ Service personnalisé",
      "✅ Produit recommandé",
      "✅ Garantie étendue",
      "✅ Remises spéciales"
    ],
    highlights: [
      "Achetez Maintenant et Économisez",
      "Livraison Gratuite Aujourd'hui",
      "Paiement à la Livraison",
      "Résultat Garanti en 30 Jours",
      "Offre à Durée Limitée",
      "Remise Exclusive en Ligne",
      "Stock Limité - Dernières Unités",
      "Approuvé par les Experts",
      "Satisfaction 100% Garantie",
      "Livraison Express en 5 Jours",
      "Paiement Sans Frais",
      "Produit le Plus Vendu du Mois",
      "Promotion Spéciale à Durée Limitée",
      "Garantie Totale de Qualité",
      "Prix Promotionnel Aujourd'hui",
      "Profitez Avant Épuisement",
      "Vente Flash - 24h Seulement",
      "Achat Sécurisé et Garanti"
    ],
    sitelinks: {
      top: {
        titles: [
          "Découvrir {product}",
          "Comment ça Marche",
          "Avantages",
          "Guide Complet",
          "Qu'est-ce que {product}?",
          "Pourquoi Choisir",
          "Tout sur {product}",
          "Connaissez {product}?",
          "Caractéristiques",
          "Bénéfices",
          "Informations",
          "Détails",
          "Explication",
          "En Savoir Plus",
          "Tout Savoir"
        ],
        descriptions: [
          "Découvrez comment fonctionne {product}",
          "Connaissez tous les avantages",
          "Sachez tout sur {product}",
          "Comprenez les bénéfices",
          "Voyez comment agit {product}",
          "Apprenez sur {product}",
          "Explorez les caractéristiques",
          "Découvrez le pouvoir du produit",
          "Connaissez les propriétés",
          "Comprenez le fonctionnement",
          "Voyez les informations complètes",
          "Sachez tous les détails",
          "Découvrez les qualités",
          "En savoir plus sur {product}",
          "Comprenez tout sur le produit"
        ]
      },
      mid: {
        titles: [
          "Témoignages Réels",
          "Résultats Prouvés",
          "Avis",
          "Cas de Succès",
          "Opinion des Clients",
          "Avant et Après",
          "Preuve Sociale",
          "Témoignages",
          "Expériences",
          "Récits",
          "Feedback",
          "Transformations",
          "Histoires de Succès",
          "Clients Satisfaits",
          "Résultats Réels"
        ],
        descriptions: [
          "Voyez les résultats réels des clients",
          "Lisez des témoignages authentiques",
          "Avis vérifiés",
          "Cas de succès prouvés",
          "Opinion réelle des utilisateurs",
          "Transformations impressionnantes",
          "Preuve sociale vérifiée",
          "Témoignages authentiques",
          "Expériences positives",
          "Récits de changements",
          "Feedback des clients",
          "Transformations réelles",
          "Histoires inspirantes",
          "Clients 100% satisfaits",
          "Résultats documentés"
        ]
      },
      bottom: {
        titles: [
          "Acheter Maintenant",
          "Paiement à la Livraison",
          "Offre Limitée",
          "Remise Exclusive",
          "Stock Presque Épuisé",
          "Livraison Gratuite Aujourd'hui",
          "Résultat Garanti",
          "Recevez en 5 Jours",
          "Voir Témoignages Réels",
          "Garantie Totale",
          "Promotion Spéciale",
          "Offre à Durée Limitée",
          "Paiement Sans Frais",
          "Meilleures Ventes du Mois",
          "Profitez Maintenant"
        ],
        descriptions: [
          "Achetez {product} pour {price}",
          "Payez seulement à la livraison",
          "Offre valable pour une durée limitée",
          "Remise exclusive pour vous",
          "Dernières unités disponibles",
          "Livraison gratuite en France",
          "Garantie de résultat ou remboursé",
          "Livraison express en 5 jours ouvrables",
          "Voyez ce que disent nos clients",
          "Garantie totale de qualité",
          "Promotion spéciale à durée limitée",
          "Profitez avant épuisement",
          "Payez jusqu'à 12 fois sans frais",
          "Produit le plus vendu ce mois",
          "Ne manquez pas cette opportunité"
        ]
      },
      cod: {
        titles: [
          "Acheter Maintenant",
          "Paiement à la Livraison",
          "Offre Limitée",
          "Remise Exclusive",
          "Stock Presque Épuisé",
          "Livraison Gratuite Aujourd'hui",
          "Résultat Garanti",
          "Recevez en 5 Jours",
          "Voir Témoignages Réels",
          "Garantie Totale",
          "Promotion Spéciale",
          "Offre à Durée Limitée",
          "Paiement Sans Frais",
          "Meilleures Ventes du Mois",
          "Profitez Maintenant"
        ],
        descriptions: [
          "Achetez {product} pour {price}",
          "Payez seulement à la livraison",
          "Offre valable pour une durée limitée",
          "Remise exclusive pour vous",
          "Dernières unités disponibles",
          "Livraison gratuite en France",
          "Garantie de résultat ou remboursé",
          "Livraison express en 5 jours ouvrables",
          "Voyez ce que disent nos clients",
          "Garantie totale de qualité",
          "Promotion spéciale à durée limitée",
          "Profitez avant épuisement",
          "Payez jusqu'à 12 fois sans frais",
          "Produit le plus vendu ce mois",
          "Ne manquez pas cette opportunité"
        ]
      }
    },
    biddingStrategies: {
      top: [
        "Maximiser les clics - Focus sur la notoriété",
        "CPC manuel - Contrôle total des enchères",
        "Maximiser les impressions - Visibilité maximale"
      ],
      mid: [
        "CPA cible - Optimisation pour conversions",
        "Maximiser les conversions - Focus sur résultats",
        "CPC amélioré - Ajustements automatiques"
      ],
      bottom: [
        "Maximiser les conversions - Focus sur ventes",
        "CPA cible - Contrôle coût par acquisition",
        "ROAS cible - Retour sur dépenses publicitaires"
      ],
      cod: [
        "Maximiser les conversions - Optimisation COD",
        "CPA cible - Contrôle des coûts",
        "CPC amélioré - Enchères intelligentes"
      ]
    }
  },
  de: {
    titles: [
      "{product} - Offizieller Händler in Deutschland",
      "Kaufen Sie {product} Jetzt - {price}",
      "{product} - Premiumqualitätsprodukt",
      "Bestellen Sie {product} - Kostenloser Versand",
      "{product} Original - Sonderpreis {price}",
      "Begrenztes Angebot: {product} für {price}",
      "{product} - Bester Preis Garantiert",
      "Blitzangebot {product} - Nur Heute {price}",
      "Sonderrabatt {product} - {price}",
      "Verpassen Sie Nicht: {product} mit Rabatt",
      "{product} Premium - Qualität Gesichert",
      "Mega-Angebot {product} - {price}",
      "Letzte Chance: {product} für {price}",
      "{product} - Sofortige Lieferung",
      "Blitzangebot: {product} {price}",
      "Jetzt Kaufen: {product} - {price}",
      "{product} - Nachnahme",
      "Super-Rabatt: {product} für {price}",
      "{product} - Produkt des Jahres",
      "Unübertroffen: {product} nur {price}",
      "{product} - Zufriedenheit Garantiert",
      "Exklusives Angebot: {product} {price}",
      "{product} - Bestseller",
      "Sonderangebot: {product} für {price}",
      "{product} - Kaufen Sie mit Vertrauen",
      "Sonderrabatt: {product} {price}",
      "{product} - Geprüftes Produkt",
      "Bestes Angebot: {product} nur {price}",
      "{product} - Premium-Qualität",
      "Handeln Sie Jetzt: {product} für {price}"
    ],
    descriptions: [
      "Erhalten Sie {product} mit schneller Lieferung in Deutschland. Einfache Zahlung. Sonderpreis: {price}",
      "Bestellen Sie {product} heute und genießen Sie kostenlosen Versand. Zufriedenheit garantiert oder Geld zurück.",
      "{product} - Die perfekte Lösung für Ihre Bedürfnisse. Sichtbare Ergebnisse in nur wenigen Tagen. Warten Sie nicht!",
      "Probieren Sie {product} und verwandeln Sie Ihr Leben. Originalprodukt mit verlängerter Garantie.",
      "Zeitlich begrenztes Angebot für {product} für nur {price}. Verpassen Sie diese einmalige Gelegenheit nicht!",
      "Premium-Qualität {product} mit schneller und sicherer Lieferung im ganzen Land.",
      "Nutzen Sie den Sonderrabatt auf {product}. Einfache Zahlung in bis zu 12 Raten zinsfrei.",
      "{product} - Das meistverkaufte Produkt am Markt. Vollständige Garantie für Qualität und Wirksamkeit."
    ],
    usps: [
      "✅ Kostenloser Versand nach Deutschland",
      "✅ Einfache Zahlung bis zu 12 Raten",
      "✅ Zufriedenheit garantiert oder Geld zurück",
      "✅ 24/7 Kundensupport",
      "✅ Bewährte Ergebnisse",
      "✅ 100% Originalprodukt",
      "✅ Engagierter Support",
      "✅ Schnelle und sichere Lieferung",
      "✅ Zufriedenheitsgarantie",
      "✅ Exklusive Aktionen",
      "✅ Einfache Finanzierung",
      "✅ Premiumqualität",
      "✅ Getestet und genehmigt",
      "✅ Sicherer Kauf",
      "✅ Persönlicher Service",
      "✅ Empfohlenes Produkt",
      "✅ Erweiterte Garantie",
      "✅ Sonderrabatte"
    ],
    highlights: [
      "Jetzt Kaufen und Sparen",
      "Kostenloser Versand Heute",
      "Nachnahme",
      "Ergebnis Garantiert in 30 Tagen",
      "Zeitlich Begrenztes Angebot",
      "Exklusiver Online-Rabatt",
      "Begrenzter Vorrat - Letzte Einheiten",
      "Von Experten Genehmigt",
      "100% Zufriedenheit Garantiert",
      "Express-Lieferung in 5 Tagen",
      "Zinsfreie Ratenzahlung",
      "Bestseller des Monats",
      "Sonderaktion für Begrenzte Zeit",
      "Vollständige Qualitätsgarantie",
      "Aktionspreis Heute",
      "Sichern Sie Sich Bevor Es Ausgeht",
      "Blitzverkauf - Nur 24h",
      "Sicherer und Garantierter Kauf"
    ],
    sitelinks: {
      top: {
        titles: [
          "Entdecken Sie {product}",
          "Wie Es Funktioniert",
          "Vorteile",
          "Vollständiger Leitfaden",
          "Was ist {product}?",
          "Warum Wählen",
          "Alles über {product}",
          "Kennen Sie {product}?",
          "Eigenschaften",
          "Nutzen",
          "Informationen",
          "Details",
          "Erklärung",
          "Mehr Erfahren",
          "Alles Wissen"
        ],
        descriptions: [
          "Entdecken Sie wie {product} funktioniert",
          "Lernen Sie alle Vorteile kennen",
          "Wissen Sie alles über {product}",
          "Verstehen Sie die Nutzen",
          "Sehen Sie wie {product} wirkt",
          "Lernen Sie über {product}",
          "Erkunden Sie die Eigenschaften",
          "Entdecken Sie die Produktkraft",
          "Kennen Sie die Eigenschaften",
          "Verstehen Sie die Funktionsweise",
          "Sehen Sie vollständige Informationen",
          "Wissen Sie alle Details",
          "Entdecken Sie die Qualitäten",
          "Erfahren Sie mehr über {product}",
          "Verstehen Sie alles über das Produkt"
        ]
      },
      mid: {
        titles: [
          "Echte Testimonials",
          "Bewiesene Ergebnisse",
          "Bewertungen",
          "Erfolgsfälle",
          "Kundenmeinung",
          "Vorher und Nachher",
          "Sozialer Beweis",
          "Zeugnisse",
          "Erfahrungen",
          "Berichte",
          "Feedback",
          "Transformationen",
          "Erfolgsgeschichten",
          "Zufriedene Kunden",
          "Echte Ergebnisse"
        ],
        descriptions: [
          "Sehen Sie echte Kundenergebnisse",
          "Lesen Sie genuine Testimonials",
          "Verifizierte Bewertungen",
          "Bewiesene Erfolgsfälle",
          "Echte Nutzermeinung",
          "Erstaunliche Transformationen",
          "Verifizierter sozialer Beweis",
          "Authentische Zeugnisse",
          "Positive Erfahrungen",
          "Veränderungsberichte",
          "Kundenfeedback",
          "Echte Transformationen",
          "Inspirierende Geschichten",
          "100% zufriedene Kunden",
          "Dokumentierte Ergebnisse"
        ]
      },
      bottom: {
        titles: [
          "Jetzt Kaufen",
          "Nachnahme",
          "Begrenztes Angebot",
          "Exklusiver Rabatt",
          "Vorrat Fast Aufgebraucht",
          "Kostenloser Versand Heute",
          "Garantierte Ergebnisse",
          "Erhalten in 5 Tagen",
          "Echte Testimonials Sehen",
          "Vollständige Garantie",
          "Sonderaktion",
          "Zeitlich Begrenztes Angebot",
          "Zinsfreie Ratenzahlung",
          "Bestseller des Monats",
          "Jetzt Nutzen"
        ],
        descriptions: [
          "Kaufen Sie {product} für {price}",
          "Zahlen Sie nur bei Lieferung",
          "Angebot gültig für begrenzte Zeit",
          "Exklusiver Rabatt für Sie",
          "Letzte verfügbare Einheiten",
          "Kostenloser Versand nach Deutschland",
          "Ergebnisgarantie oder Geld zurück",
          "Express-Lieferung in 5 Werktagen",
          "Sehen Sie was unsere Kunden sagen",
          "Vollständige Qualitätsgarantie",
          "Sonderaktion für begrenzte Zeit",
          "Sichern Sie sich bevor es ausgeht",
          "Zahlen Sie in bis zu 12 zinsfreien Raten",
          "Meistverkauftes Produkt diesen Monat",
          "Verpassen Sie diese Gelegenheit nicht"
        ]
      },
      cod: {
        titles: [
          "Jetzt Kaufen",
          "Nachnahme",
          "Begrenztes Angebot",
          "Exklusiver Rabatt",
          "Vorrat Fast Aufgebraucht",
          "Kostenloser Versand Heute",
          "Garantierte Ergebnisse",
          "Erhalten in 5 Tagen",
          "Echte Testimonials Sehen",
          "Vollständige Garantie",
          "Sonderaktion",
          "Zeitlich Begrenztes Angebot",
          "Zinsfreie Ratenzahlung",
          "Bestseller des Monats",
          "Jetzt Nutzen"
        ],
        descriptions: [
          "Kaufen Sie {product} für {price}",
          "Zahlen Sie nur bei Lieferung",
          "Angebot gültig für begrenzte Zeit",
          "Exklusiver Rabatt für Sie",
          "Letzte verfügbare Einheiten",
          "Kostenloser Versand nach Deutschland",
          "Ergebnisgarantie oder Geld zurück",
          "Express-Lieferung in 5 Werktagen",
          "Sehen Sie was unsere Kunden sagen",
          "Vollständige Qualitätsgarantie",
          "Sonderaktion für begrenzte Zeit",
          "Sichern Sie sich bevor es ausgeht",
          "Zahlen Sie in bis zu 12 zinsfreien Raten",
          "Meistverkauftes Produkt diesen Monat",
          "Verpassen Sie diese Gelegenheit nicht"
        ]
      }
    },
    biddingStrategies: {
      top: [
        "Klicks maximieren - Fokus auf Bekanntheit",
        "Manueller CPC - Vollständige Gebotskontrolle",
        "Impressionen maximieren - Maximale Sichtbarkeit"
      ],
      mid: [
        "Ziel-CPA - Optimierung für Conversions",
        "Conversions maximieren - Fokus auf Ergebnisse",
        "Verbesserter CPC - Automatische Anpassungen"
      ],
      bottom: [
        "Conversions maximieren - Fokus auf Verkäufe",
        "Ziel-CPA - Kosten pro Akquisition kontrollieren",
        "Ziel-ROAS - Return on Ad Spend"
      ],
      cod: [
        "Conversions maximieren - COD-Optimierung",
        "Ziel-CPA - Kostenkontrolle",
        "Verbesserter CPC - Intelligente Gebote"
      ]
    }
  },
  it: {
    titles: [
      "{product} - Distributore Ufficiale in Italia",
      "Compra {product} Ora - {price}",
      "{product} - Prodotto di Qualità Superiore",
      "Ordina {product} - Spedizione Gratuita",
      "{product} Originale - Prezzo Speciale {price}",
      "Offerta Limitata: {product} per {price}",
      "{product} - Miglior Prezzo Garantito",
      "Offerta Lampo {product} - Solo Oggi {price}",
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
      "Ottieni {product} con consegna rapida in Italia. Pagamento facile. Prezzo speciale: {price}",
      "Ordina {product} oggi e goditi la spedizione gratuita. Soddisfazione garantita o rimborso.",
      "{product} - La soluzione perfetta per le tue esigenze. Risultati visibili in pochi giorni. Non aspettare!",
      "Prova {product} e trasforma la tua vita. Prodotto originale con garanzia estesa.",
      "Offerta a tempo limitato per {product} a soli {price}. Non perdere questa opportunità unica!",
      "Prodotto {product} di qualità premium con consegna rapida e sicura in tutto il territorio.",
      "Approfitta dello sconto speciale su {product}. Pagamento facile fino a 12 rate senza interessi.",
      "{product} - Il prodotto più venduto del mercato. Garanzia totale di qualità ed efficacia."
    ],
    usps: [
      "✅ Spedizione gratuita in Italia",
      "✅ Pagamento facile fino a 12 rate",
      "✅ Soddisfazione garantita o rimborso",
      "✅ Assistenza clienti 24/7",
      "✅ Risultati comprovati",
      "✅ Prodotto 100% originale",
      "✅ Supporto dedicato",
      "✅ Consegna rapida e sicura",
      "✅ Garanzia di soddisfazione",
      "✅ Promozioni esclusive",
      "✅ Finanziamento facile",
      "✅ Qualità premium",
      "✅ Testato e approvato",
      "✅ Acquisto sicuro",
      "✅ Servizio personalizzato",
      "✅ Prodotto raccomandato",
      "✅ Garanzia estesa",
      "✅ Sconti speciali"
    ],
    highlights: [
      "Compra Ora e Risparmia",
      "Spedizione Gratuita Oggi",
      "Pagamento alla Consegna",
      "Risultato Garantito in 30 Giorni",
      "Offerta a Tempo Limitato",
      "Sconto Esclusivo Online",
      "Stock Limitato - Ultime Unità",
      "Approvato dagli Esperti",
      "Soddisfazione 100% Garantita",
      "Consegna Express in 5 Giorni",
      "Finanziamento Senza Interessi",
      "Prodotto Più Venduto del Mese",
      "Promozione Speciale a Tempo Limitato",
      "Garanzia Totale di Qualità",
      "Prezzo Promozionale Oggi",
      "Approfittane Prima che Finisca",
      "Offerta Lampo - Solo 24h",
      "Acquisto Sicuro e Garantito"
    ],
    sitelinks: {
      top: {
        titles: [
          "Scopri {product}",
          "Come Funziona",
          "Benefici",
          "Guida Completa",
          "Cos'è {product}?",
          "Perché Scegliere",
          "Tutto su {product}",
          "Conosci {product}?",
          "Caratteristiche",
          "Vantaggi",
          "Informazioni",
          "Dettagli",
          "Spiegazione",
          "Scopri di Più",
          "Sapere Tutto"
        ],
        descriptions: [
          "Scopri come funziona {product}",
          "Conosci tutti i benefici",
          "Sappi tutto su {product}",
          "Comprendi i vantaggi",
          "Vedi come agisce {product}",
          "Impara su {product}",
          "Esplora le caratteristiche",
          "Scopri il potere del prodotto",
          "Conosci le proprietà",
          "Comprendi il funzionamento",
          "Vedi informazioni complete",
          "Sappi tutti i dettagli",
          "Scopri le qualità",
          "Scopri di più su {product}",
          "Comprendi tutto sul prodotto"
        ]
      },
      mid: {
        titles: [
          "Testimonianze Reali",
          "Risultati Comprovati",
          "Recensioni",
          "Casi di Successo",
          "Opinione dei Clienti",
          "Prima e Dopo",
          "Prova Sociale",
          "Testimonianze",
          "Esperienze",
          "Racconti",
          "Feedback",
          "Trasformazioni",
          "Storie di Successo",
          "Clienti Soddisfatti",
          "Risultati Reali"
        ],
        descriptions: [
          "Vedi risultati reali dei clienti",
          "Leggi testimonianze genuine",
          "Recensioni verificate",
          "Casi di successo comprovati",
          "Opinione reale degli utenti",
          "Trasformazioni impressionanti",
          "Prova sociale verificata",
          "Testimonianze autentiche",
          "Esperienze positive",
          "Racconti di cambiamenti",
          "Feedback dei clienti",
          "Trasformazioni reali",
          "Storie ispiranti",
          "Clienti 100% soddisfatti",
          "Risultati documentati"
        ]
      },
      bottom: {
        titles: [
          "Compra Ora",
          "Pagamento alla Consegna",
          "Offerta Limitata",
          "Sconto Esclusivo",
          "Stock Quasi Esaurito",
          "Spedizione Gratuita Oggi",
          "Risultato Garantito",
          "Ricevi in 5 Giorni",
          "Vedi Testimonianze Reali",
          "Garanzia Totale",
          "Promozione Speciale",
          "Offerta a Tempo Limitato",
          "Finanziamento Senza Interessi",
          "Più Venduti del Mese",
          "Approfitta Ora"
        ],
        descriptions: [
          "Compra {product} per {price}",
          "Paga solo alla consegna",
          "Offerta valida per tempo limitato",
          "Sconto esclusivo per te",
          "Ultime unità disponibili",
          "Spedizione gratuita in Italia",
          "Garanzia di risultato o rimborso",
          "Consegna express in 5 giorni lavorativi",
          "Vedi cosa dicono i nostri clienti",
          "Garanzia totale di qualità",
          "Promozione speciale a tempo limitato",
          "Approfittane prima che finisca",
          "Finanzia fino a 12 mesi senza interessi",
          "Prodotto più venduto questo mese",
          "Non perdere questa opportunità"
        ]
      },
      cod: {
        titles: [
          "Compra Ora",
          "Pagamento alla Consegna",
          "Offerta Limitata",
          "Sconto Esclusivo",
          "Stock Quasi Esaurito",
          "Spedizione Gratuita Oggi",
          "Risultato Garantito",
          "Ricevi in 5 Giorni",
          "Vedi Testimonianze Reali",
          "Garanzia Totale",
          "Promozione Speciale",
          "Offerta a Tempo Limitato",
          "Finanziamento Senza Interessi",
          "Più Venduti del Mese",
          "Approfitta Ora"
        ],
        descriptions: [
          "Compra {product} per {price}",
          "Paga solo alla consegna",
          "Offerta valida per tempo limitato",
          "Sconto esclusivo per te",
          "Ultime unità disponibili",
          "Spedizione gratuita in Italia",
          "Garanzia di risultato o rimborso",
          "Consegna express in 5 giorni lavorativi",
          "Vedi cosa dicono i nostri clienti",
          "Garanzia totale di qualità",
          "Promozione speciale a tempo limitato",
          "Approfittane prima che finisca",
          "Finanzia fino a 12 mesi senza interessi",
          "Prodotto più venduto questo mese",
          "Non perdere questa opportunità"
        ]
      }
    },
    biddingStrategies: {
      top: [
        "Massimizza clic - Focus su consapevolezza",
        "CPC manuale - Controllo totale delle offerte",
        "Massimizza impressioni - Visibilità massima"
      ],
      mid: [
        "CPA target - Ottimizzazione per conversioni",
        "Massimizza conversioni - Focus sui risultati",
        "CPC ottimizzato - Aggiustamenti automatici"
      ],
      bottom: [
        "Massimizza conversioni - Focus sulle vendite",
        "CPA target - Controllo costo per acquisizione",
        "ROAS target - Ritorno sulla spesa pubblicitaria"
      ],
      cod: [
        "Massimizza conversioni - Ottimizzazione COD",
        "CPA target - Controllo dei costi",
        "CPC ottimizzato - Offerte intelligenti"
      ]
    }
  }
};

export function generateCODCopies(
  product: string,
  price: string,
  countryName: string,
  languageCode: string,
  funnel: string
) {
  console.log('generateCODCopies called with:', { product, price, countryName, languageCode, funnel });
  
  const templates = languageTemplates[languageCode] || languageTemplates['pt'];
  
  // Generate 30 different titles by shuffling and extending the template array
  const allTitles = [...templates.titles];
  const shuffledTitles = allTitles.sort(() => Math.random() - 0.5);
  const titles = shuffledTitles.slice(0, 30).map(title =>
    title.replace('{product}', product).replace('{price}', price)
  );

  const descriptions = templates.descriptions.map(description =>
    description.replace('{product}', product).replace('{price}', price)
  );
  
  // Generate random highlights (varying each time)
  const shuffledHighlights = [...templates.highlights].sort(() => Math.random() - 0.5);
  const usps = shuffledHighlights.slice(0, 4);

  // Generate dynamic sitelinks based on funnel strategy
  const sitelinkTemplates = templates.sitelinks[funnel] || templates.sitelinks['cod'];
  
  // Shuffle and select 4 random sitelinks for variation
  const shuffledSitelinkTitles = [...sitelinkTemplates.titles].sort(() => Math.random() - 0.5);
  const shuffledDescriptions = [...sitelinkTemplates.descriptions].sort(() => Math.random() - 0.5);
  
  const sitelinks = Array.from({ length: 4 }, (_, index) => ({
    title: shuffledSitelinkTitles[index % shuffledSitelinkTitles.length]
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
    url: `https://example.com/${product.toLowerCase().replace(/\s+/g, '-')}`
  }));

  // Generate bidding strategy recommendation
  const biddingStrategies = templates.biddingStrategies[funnel] || templates.biddingStrategies['cod'];
  const selectedBiddingStrategy = biddingStrategies[Math.floor(Math.random() * biddingStrategies.length)];

  return {
    titles,
    descriptions,
    usps,
    sitelinks,
    biddingStrategy: selectedBiddingStrategy
  };
}

export function generateStructuredSnippet(product: string, languageCode: string) {
  const templates = languageTemplates[languageCode] || languageTemplates['pt'];
  
  let values = "";
  switch (languageCode) {
    case 'es':
      values = "Gel facial, Crema nocturna, Contorno de ojos, Fórmula anti-edad";
      break;
    case 'en':
      values = "Facial serum, Night gel, Eye cream, Anti-aging formula";
      break;
    case 'fr':
      values = "Sérum facial, Gel de nuit, Crème contour des yeux, Formule anti-âge";
      break;
    case 'de':
      values = "Gesichtsserum, Nachtgel, Augencreme, Anti-Aging-Formel";
      break;
    case 'it':
      values = "Siero viso, Gel notte, Crema contorno occhi, Formula anti-età";
      break;
    default:
      values = "Gel facial, Creme noturno, Creme para olhos, Fórmula anti-idade";
  }
  
  const snippet = `Categoria: Benefícios\nValores: ${values}`;
  return snippet;
}

export function generatePromotionExtension(product: string, price: string, countryName: string, languageCode: string) {
  let promotions = [];
  
  switch (languageCode) {
    case 'es':
      promotions = [
        `Descuento del 20% en el primer pedido`,
        `Envío gratis a toda ${countryName}`,
        `Compra 2 y llévate 3`
      ];
      break;
    case 'en':
      promotions = [
        `20% discount on first order`,
        `Free shipping to all ${countryName}`,
        `Buy 2 get 3`
      ];
      break;
    case 'fr':
      promotions = [
        `Réduction de 20% sur la première commande`,
        `Livraison gratuite dans toute la ${countryName}`,
        `Achetez 2 et obtenez 3`
      ];
      break;
    case 'de':
      promotions = [
        `20% Rabatt auf die erste Bestellung`,
        `Kostenloser Versand nach ganz ${countryName}`,
        `Kaufe 2 und erhalte 3`
      ];
      break;
    case 'it':
      promotions = [
        `Sconto del 20% sul primo ordine`,
        `Spedizione gratuita in tutta ${countryName}`,
        `Compra 2 e prendi 3`
      ];
      break;
    default:
      promotions = [
        `Desconto de 20% no primeiro pedido`,
        `Frete grátis para todo o ${countryName}`,
        `Compre 2 e leve 3`
      ];
  }
  
  return promotions.join('\n');
}

export function generatePriceExtension(product: string, price: string, countryName: string, languageCode: string) {
  // Extract numeric value from price for calculations
  const numericPrice = parseFloat(price.replace(/[^\d.,]/g, '').replace(',', '.')) || 97;
  const currency = price.match(/[^\d\s.,]+/)?.[0] || 'R$';
  
  let priceBlocks = [];
  
  switch (languageCode) {
    case 'es':
      priceBlocks = [
        `${product} 1 unidad: ${currency}${numericPrice} - Entrega a toda ${countryName}`,
        `${product} Kit 3 unidades: ${currency}${Math.round(numericPrice * 2.1)} - Envío gratis`,
        `${product} Kit completo: ${currency}${Math.round(numericPrice * 3.1)} - Mejor oferta`
      ];
      break;
    case 'en':
      priceBlocks = [
        `${product} 1 unit: ${currency}${numericPrice} - Delivery to all ${countryName}`,
        `${product} 3-unit kit: ${currency}${Math.round(numericPrice * 2.1)} - Free shipping`,
        `${product} Complete kit: ${currency}${Math.round(numericPrice * 3.1)} - Best offer`
      ];
      break;
    case 'fr':
      priceBlocks = [
        `${product} 1 unité: ${currency}${numericPrice} - Livraison dans toute la ${countryName}`,
        `${product} Kit 3 unités: ${currency}${Math.round(numericPrice * 2.1)} - Livraison gratuite`,
        `${product} Kit complet: ${currency}${Math.round(numericPrice * 3.1)} - Meilleure offre`
      ];
      break;
    case 'de':
      priceBlocks = [
        `${product} 1 Einheit: ${currency}${numericPrice} - Lieferung nach ganz ${countryName}`,
        `${product} 3er-Kit: ${currency}${Math.round(numericPrice * 2.1)} - Kostenloser Versand`,
        `${product} Komplettes Kit: ${currency}${Math.round(numericPrice * 3.1)} - Bestes Angebot`
      ];
      break;
    case 'it':
      priceBlocks = [
        `${product} 1 unità: ${currency}${numericPrice} - Consegna in tutta ${countryName}`,
        `${product} Kit 3 unità: ${currency}${Math.round(numericPrice * 2.1)} - Spedizione gratuita`,
        `${product} Kit completo: ${currency}${Math.round(numericPrice * 3.1)} - Migliore offerta`
      ];
      break;
    default:
      priceBlocks = [
        `${product} 1 unidade: ${currency}${numericPrice} - Entrega para todo ${countryName}`,
        `${product} Kit 3 unidades: ${currency}${Math.round(numericPrice * 2.1)} - Frete grátis`,
        `${product} Kit completo: ${currency}${Math.round(numericPrice * 3.1)} - Melhor oferta`
      ];
  }
  
  return priceBlocks.join('\n');
}
