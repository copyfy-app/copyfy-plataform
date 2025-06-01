
const generateTitles = (product: string, price: string, country: string, languageCode: string, funnel: string): string[] => {
  const titles = [];

  if (funnel === 'cod') {
    // COD Specific Titles
    if (languageCode === 'pt') {
      titles.push(
        `Compre ${product} e pague ao receber!`,
        `Aproveite! ${product} com entrega em todo o Brasil.`,
        `${product} - Peça agora e só pague na entrega!`,
        `Não perca! ${product} com pagamento facilitado na entrega.`,
        `${product} - A solução que você precisa, com a facilidade do pagamento na entrega.`
      );
    } else if (languageCode === 'es') {
      titles.push(
        `¡Compra ${product} y paga al recibir!`,
        `¡Aprovecha! ${product} con entrega en todo el país.`,
        `${product} - ¡Pide ahora y paga al recibir!`,
        `No pierdas! ${product} con pago facilitado al recibir.`,
        `${product} - La solución que necesitas, con la facilidad de pago al recibir.`
      );
    } else {
      titles.push(
        `Buy ${product} and pay upon delivery!`,
        `Enjoy! ${product} with delivery throughout the country.`,
        `${product} - Order now and only pay on delivery!`,
        `Don't miss out! ${product} with easy payment on delivery.`,
        `${product} - The solution you need, with the convenience of payment on delivery.`
      );
    }
  } else {
    // General Titles
    if (languageCode === 'pt') {
      titles.push(
        `Descubra ${product} - A solução ideal para você!`,
        `Encontre ${product} com ofertas exclusivas.`,
        `Aproveite os benefícios de ${product} agora mesmo!`,
        `${product} - Transforme sua vida com este produto incrível.`,
        `Conheça ${product} e surpreenda-se com os resultados.`
      );
    } else if (languageCode === 'es') {
      titles.push(
        `Descubre ${product} - ¡La solución ideal para ti!`,
        `Encuentra ${product} con ofertas exclusivas.`,
        `¡Aprovecha los beneficios de ${product} ahora mismo!`,
        `${product} - Transforma tu vida con este increíble producto.`,
        `Conoce ${product} y sorpréndete con los resultados.`
      );
    } else {
      titles.push(
        `Discover ${product} - The ideal solution for you!`,
        `Find ${product} with exclusive offers.`,
        `Enjoy the benefits of ${product} right now!`,
        `${product} - Transform your life with this amazing product.`,
        `Get to know ${product} and be amazed by the results.`
      );
    }
  }

  return titles;
};

const generateDescriptions = (product: string, price: string, country: string, languageCode: string, funnel: string): string[] => {
  const descriptions = [];

  if (funnel === 'cod') {
    // COD Specific Descriptions
    if (languageCode === 'pt') {
      descriptions.push(
        `Compre agora ${product} e tenha a facilidade de pagar somente quando o produto chegar em suas mãos.`,
        `Não perca mais tempo! Adquira ${product} e experimente a comodidade do pagamento na entrega em todo o país.`,
        `Peça já ${product} e aproveite a segurança de pagar somente após receber o produto em sua casa.`,
        `Aproveite essa oportunidade única! Compre ${product} com pagamento facilitado e entrega garantida.`,
        `Experimente ${product} sem preocupações! Pague somente quando o produto for entregue em sua residência.`
      );
    } else if (languageCode === 'es') {
      descriptions.push(
        `Compra ahora ${product} y ten la facilidad de pagar solo cuando el producto llegue a tus manos.`,
        `No pierdas más tiempo! Adquiere ${product} y experimenta la comodidad del pago al recibir en todo el país.`,
        `Pide ya ${product} y aprovecha la seguridad de pagar solo después de recibir el producto en tu casa.`,
        `Aprovecha esta oportunidad única! Compra ${product} con pago facilitado y entrega garantizada.`,
        `Experimenta ${product} sin preocupaciones! Paga solo cuando el producto sea entregado en tu residencia.`
      );
    } else {
      descriptions.push(
        `Buy ${product} now and have the convenience of paying only when the product arrives in your hands.`,
        `Don't waste any more time! Get ${product} and experience the convenience of payment on delivery throughout the country.`,
        `Order ${product} now and enjoy the security of paying only after receiving the product at your home.`,
        `Take advantage of this unique opportunity! Buy ${product} with easy payment and guaranteed delivery.`,
        `Experience ${product} without worries! Pay only when the product is delivered to your residence.`
      );
    }
  } else {
    // General Descriptions
    if (languageCode === 'pt') {
      descriptions.push(
        `Descubra como ${product} pode transformar sua vida. Resultados incríveis em tempo recorde!`,
        `Encontre ${product} com descontos especiais e condições imperdíveis. Não perca essa chance!`,
        `Aproveite todos os benefícios que ${product} oferece e conquiste seus objetivos de forma rápida e eficaz.`,
        `${product} - A solução perfeita para quem busca praticidade, conforto e resultados garantidos.`,
        `Conheça a inovação que ${product} proporciona e surpreenda-se com os resultados que você pode alcançar.`
      );
    } else if (languageCode === 'es') {
      descriptions.push(
        `Descubre cómo ${product} puede transformar tu vida. ¡Resultados increíbles en tiempo récord!`,
        `Encuentra ${product} con descuentos especiales y condiciones imperdibles. ¡No pierdas esta oportunidad!`,
        `Aprovecha todos los beneficios que ${product} ofrece y conquista tus objetivos de forma rápida y eficaz.`,
        `${product} - La solución perfecta para quien busca practicidad, confort y resultados garantizados.`,
        `Conoce la innovación que ${product} proporciona y sorpréndete con los resultados que puedes alcanzar.`
      );
    } else {
      descriptions.push(
        `Discover how ${product} can transform your life. Incredible results in record time!`,
        `Find ${product} with special discounts and unmissable conditions. Don't miss this chance!`,
        `Enjoy all the benefits that ${product} offers and achieve your goals quickly and effectively.`,
        `${product} - The perfect solution for those seeking practicality, comfort and guaranteed results.`,
        `Discover the innovation that ${product} provides and be amazed by the results you can achieve.`
      );
    }
  }

  return descriptions;
};

const generateUSPs = (product: string, price: string, country: string, languageCode: string, funnel: string): string[] => {
  const usps = [];

  if (languageCode === 'pt') {
    usps.push(
      `Resultados comprovados em tempo recorde`,
      `Entrega rápida e segura em todo o Brasil`,
      `Garantia de satisfação ou seu dinheiro de volta`,
      `Suporte ao cliente 24/7`,
      `Produto exclusivo com tecnologia de ponta`
    );
  } else if (languageCode === 'es') {
    usps.push(
      `Resultados comprobados en tiempo récord`,
      `Entrega rápida y segura en todo el país`,
      `Garantía de satisfacción o le devolvemos su dinero`,
      `Atención al cliente 24/7`,
      `Producto exclusivo con tecnología de punta`
    );
  } else {
    usps.push(
      `Proven results in record time`,
      `Fast and secure delivery throughout the country`,
      `Satisfaction guarantee or your money back`,
      `24/7 customer support`,
      `Exclusive product with cutting-edge technology`
    );
  }

  return usps;
};

const generateSitelinks = (product: string, price: string, country: string, languageCode: string, funnel: string): { title: string; description1: string; description2: string; url: string; }[] => {
  const sitelinkData = {
    pt: {
      titles: [
        "Compre Agora", "Entrega Garantida", "Pague ao Receber", "Resultados Reais", 
        "Oferta Relâmpago", "Produto Original", "Desconto Exclusivo", "Frete Grátis"
      ],
      descriptions: [
        `${product} com desconto especial`, `Frete grátis para todo o ${country}`, 
        `Cliente só paga ao receber`, `Veja os depoimentos reais`, 
        `Aproveite por ${price}`, `Garantia de autenticidade`, 
        `Entrega rápida e segura`, `Resultados comprovados`, 
        `${product} original`, `Suporte 24 horas`, 
        `Satisfação garantida`, `Promoção limitada`
      ],
      urls: [
        "https://copyfy.shop/compra", "https://copyfy.shop/entrega", 
        "https://copyfy.shop/pagamento", "https://copyfy.shop/resultados",
        "https://copyfy.shop/oferta", "https://copyfy.shop/original"
      ]
    },
    es: {
      titles: [
        "Compra Ahora", "Entrega Garantizada", "Pago Contra Entrega", "Resultados Reales",
        "Oferta Relámpago", "Producto Original", "Descuento Exclusivo", "Envío Gratis"
      ],
      descriptions: [
        `${product} con descuento especial`, `Envío gratis a todo ${country}`,
        `Cliente solo paga al recibir`, `Ve testimonios reales`,
        `Aprovecha por ${price}`, `Garantía de autenticidad`,
        `Entrega rápida y segura`, `Resultados comprobados`,
        `${product} original`, `Soporte 24 horas`,
        `Satisfacción garantizada`, `Promoción limitada`
      ],
      urls: [
        "https://copyfy.shop/compra", "https://copyfy.shop/entrega",
        "https://copyfy.shop/pago", "https://copyfy.shop/resultados",
        "https://copyfy.shop/oferta", "https://copyfy.shop/original"
      ]
    },
    en: {
      titles: [
        "Buy Now", "Guaranteed Delivery", "Pay on Delivery", "Real Results",
        "Flash Offer", "Original Product", "Exclusive Discount", "Free Shipping"
      ],
      descriptions: [
        `${product} with special discount`, `Free shipping to all ${country}`,
        `Customer only pays on delivery`, `See real testimonials`,
        `Get it for ${price}`, `Authenticity guarantee`,
        `Fast and secure delivery`, `Proven results`,
        `Original ${product}`, `24/7 support`,
        `Satisfaction guaranteed`, `Limited promotion`
      ],
      urls: [
        "https://copyfy.shop/buy", "https://copyfy.shop/delivery",
        "https://copyfy.shop/payment", "https://copyfy.shop/results",
        "https://copyfy.shop/offer", "https://copyfy.shop/original"
      ]
    }
  };

  const data = sitelinkData[languageCode] || sitelinkData.pt;
  
  // Função para embaralhar arrays
  const shuffleArray = (array: string[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Embaralha os arrays para gerar variações
  const shuffledTitles = shuffleArray(data.titles);
  const shuffledDescriptions = shuffleArray(data.descriptions);
  const shuffledUrls = shuffleArray(data.urls);

  // Gera 4 sitelinks únicos
  const sitelinks = [];
  for (let i = 0; i < 4; i++) {
    sitelinks.push({
      title: shuffledTitles[i],
      description1: shuffledDescriptions[i * 2],
      description2: shuffledDescriptions[i * 2 + 1],
      url: shuffledUrls[i]
    });
  }

  return sitelinks;
};

export const generateCODCopies = (product: string, price: string, country: string, languageCode: string, funnel: string) => {
  console.log('Generating copies with params:', { product, price, country, languageCode, funnel });
  
  const titles = generateTitles(product, price, country, languageCode, funnel);
  const descriptions = generateDescriptions(product, price, country, languageCode, funnel);
  const usps = generateUSPs(product, price, country, languageCode, funnel);
  const sitelinks = generateSitelinks(product, price, country, languageCode, funnel);
  
  console.log('Generated content:', { titles, descriptions, usps, sitelinks });
  
  return {
    titles,
    descriptions, 
    usps,
    sitelinks
  };
};
