const generateTitles = (product: string, price: string, country: string, languageCode: string, funnel: string): string[] => {
  let titleBank = [];

  if (languageCode === 'pt') {
    if (funnel === 'top') {
      // Topo de Funil - títulos curiosos, chamativos
      titleBank = [
        `Você sabia que ${product} pode mudar sua vida?`,
        `Descubra o segredo por trás de ${product}`,
        `O que ninguém te conta sobre ${product}`,
        `Por que ${product} está fazendo tanto sucesso?`,
        `A verdade sobre ${product} que você precisa saber`,
        `${product}: O produto que está revolucionando tudo`,
        `Finalmente chegou: ${product} no ${country}`,
        `Atenção: ${product} pode ser exatamente o que você procura`,
        `Curiosidade: Como ${product} funciona na prática?`,
        `Surpreenda-se com os resultados de ${product}`,
        `${product}: A novidade que todos estão falando`,
        `Será que ${product} realmente funciona?`,
        `Conheça ${product} antes que seja tarde demais`,
        `${product} chegou ao ${country} e está causando`,
        `O fenômeno ${product} finalmente explicado`,
        `Descubra por que ${product} virou febre`,
        `${product}: O que os especialistas não querem que você saiba`,
        `A história por trás do sucesso de ${product}`,
        `${product}: Mito ou realidade? Descubra agora`,
        `Por que ${product} está mudando vidas no ${country}?`,
        `O segredo de ${product} revelado pela primeira vez`,
        `${product}: A descoberta que está impressionando`,
        `Atenção ${country}: ${product} pode ser a solução`,
        `${product} - O produto que todos querem entender`,
        `Finalmente: a verdade sobre ${product}`,
        `${product} no ${country}: O que você precisa saber`,
        `Descubra como ${product} pode te ajudar`,
        `${product}: A revolução que chegou ao ${country}`,
        `O mistério de ${product} finalmente revelado`,
        `Por que ${product} está conquistando o ${country}?`,
        `${product}: A novidade que pode mudar tudo`,
        `Conheça o poder transformador de ${product}`,
        `${product} - A descoberta que todos esperavam`
      ];
    } else if (funnel === 'mid') {
      // Meio de Funil - títulos explicativos, benefícios
      titleBank = [
        `${product} - Benefícios comprovados cientificamente`,
        `Como ${product} pode melhorar sua qualidade de vida`,
        `${product}: Resultados reais em ${country}`,
        `Os principais benefícios de ${product} explicados`,
        `Por que escolher ${product}? Veja as vantagens`,
        `${product} vs concorrentes: Compare e decida`,
        `${product}: Solução completa para suas necessidades`,
        `Entenda como ${product} funciona passo a passo`,
        `${product} - Tecnologia avançada ao seu alcance`,
        `Os resultados de ${product} que você pode esperar`,
        `${product}: Eficácia comprovada em estudos`,
        `Como ${product} se destaca no mercado`,
        `${product} - A ciência por trás dos resultados`,
        `Benefícios exclusivos de ${product} no ${country}`,
        `${product}: Qualidade e eficiência garantidas`,
        `Por que ${product} é a escolha inteligente`,
        `${product} - Inovação que faz a diferença`,
        `Como ${product} pode resolver seu problema`,
        `${product}: Resultados superiores comprovados`,
        `A tecnologia de ${product} explicada`,
        `${product} - Benefícios que você vai notar`,
        `Por que ${product} supera as expectativas`,
        `${product}: A solução que você estava procurando`,
        `Como ${product} pode transformar sua rotina`,
        `${product} - Eficácia testada e aprovada`,
        `Os diferenciais únicos de ${product}`,
        `${product}: Qualidade premium no ${country}`,
        `Como ${product} entrega resultados reais`,
        `${product} - A escolha dos especialistas`,
        `Por que ${product} é considerado o melhor`,
        `${product}: Inovação e resultados em um só produto`,
        `Como ${product} pode ser sua solução ideal`,
        `${product} - Benefícios que valem a pena`
      ];
    } else {
      // Fundo de Funil e COD - títulos diretos, urgentes, com CTA
      titleBank = [
        `Compre ${product} agora e pague apenas ${price}!`,
        `${product} - Últimas unidades por ${price}`,
        `Aproveite! ${product} com 50% de desconto`,
        `${product} - Oferta imperdível por ${price}`,
        `Garante já seu ${product} por apenas ${price}`,
        `${product} - Promoção relâmpago por ${price}`,
        `Últimas horas: ${product} por ${price}`,
        `${product} - Compre hoje e economize!`,
        `Oferta especial: ${product} por ${price}`,
        `${product} - Não perca esta oportunidade!`,
        `Adquira ${product} agora por ${price}`,
        `${product} - Desconto exclusivo por tempo limitado`,
        `Peça já seu ${product} por apenas ${price}`,
        `${product} - Oferta válida apenas hoje!`,
        `Compre ${product} e receba em casa por ${price}`,
        `${product} - Liquidação por ${price}`,
        `Últimas peças: ${product} por ${price}`,
        `${product} - Aproveite o preço promocional`,
        `Garanta ${product} com desconto especial`,
        `${product} - Oferta por tempo limitado!`,
        `Compre agora: ${product} por ${price}`,
        `${product} - Promoção exclusiva no ${country}`,
        `Peça hoje ${product} e pague só ${price}`,
        `${product} - Desconto imperdível!`,
        `Aproveite: ${product} em oferta por ${price}`,
        `${product} - Compre já e não se arrependa`,
        `Oferta final: ${product} por ${price}`,
        `${product} - Últimas unidades disponíveis`,
        `Garante o seu: ${product} por ${price}`,
        `${product} - Promoção de lançamento!`,
        `Compre ${product} hoje e economize muito`,
        `${product} - Oferta exclusiva para o ${country}`,
        `Peça agora ${product} por apenas ${price}!`
      ];
    }
  } else if (languageCode === 'es') {
    if (funnel === 'top') {
      titleBank = [
        `¿Sabías que ${product} puede cambiar tu vida?`,
        `Descubre el secreto detrás de ${product}`,
        `Lo que nadie te cuenta sobre ${product}`,
        `¿Por qué ${product} está teniendo tanto éxito?`,
        `La verdad sobre ${product} que necesitas saber`,
        `${product}: El producto que está revolucionando todo`,
        `Finalmente llegó: ${product} en ${country}`,
        `Atención: ${product} puede ser exactamente lo que buscas`,
        `Curiosidad: ¿Cómo funciona ${product} en la práctica?`,
        `Sorpréndete con los resultados de ${product}`,
        `${product}: La novedad de la que todos hablan`,
        `¿Realmente funciona ${product}?`,
        `Conoce ${product} antes de que sea demasiado tarde`,
        `${product} llegó a ${country} y está causando sensación`,
        `El fenómeno ${product} finalmente explicado`
      ];
    } else if (funnel === 'mid') {
      titleBank = [
        `${product} - Benefícios comprobados científicamente`,
        `Cómo ${product} puede mejorar tu calidad de vida`,
        `${product}: Resultados reales en ${country}`,
        `Los principales beneficios de ${product} explicados`,
        `¿Por qué elegir ${product}? Ve las ventajas`,
        `${product} vs competidores: Compara y decide`,
        `${product}: Solución completa para tus necesidades`,
        `Entiende cómo funciona ${product} paso a paso`,
        `${product} - Tecnología avanzada a tu alcance`,
        `Los resultados de ${product} que puedes esperar`,
        `${product}: Eficacia comprobada en estudios`,
        `Cómo ${product} se destaca en el mercado`,
        `${product} - La ciencia detrás de los resultados`,
        `Beneficios exclusivos de ${product} en ${country}`,
        `${product}: Calidad y eficiencia garantizadas`
      ];
    } else {
      titleBank = [
        `¡Compra ${product} ahora y paga solo ${price}!`,
        `${product} - Últimas unidades por ${price}`,
        `¡Aprovecha! ${product} con 50% de descuento`,
        `${product} - Oferta imperdible por ${price}`,
        `Asegura ya tu ${product} por solo ${price}`,
        `${product} - Promoción relámpago por ${price}`,
        `Últimas horas: ${product} por ${price}`,
        `${product} - ¡Compra hoy y ahorra!`,
        `Oferta especial: ${product} por ${price}`,
        `${product} - ¡No pierdas esta oportunidad!`,
        `Adquiere ${product} ahora por ${price}`,
        `${product} - Descuento exclusivo por tiempo limitado`,
        `Pide ya tu ${product} por solo ${price}`,
        `${product} - ¡Oferta válida solo hoy!`,
        `Compra ${product} y recíbelo en casa por ${price}`
      ];
    }
  } else {
    if (funnel === 'top') {
      titleBank = [
        `Did you know ${product} can change your life?`,
        `Discover the secret behind ${product}`,
        `What nobody tells you about ${product}`,
        `Why is ${product} so successful?`,
        `The truth about ${product} you need to know`,
        `${product}: The product that's revolutionizing everything`,
        `Finally here: ${product} in ${country}`,
        `Attention: ${product} might be exactly what you're looking for`,
        `Curious: How does ${product} work in practice?`,
        `Be amazed by ${product} results`,
        `${product}: The novelty everyone's talking about`,
        `Does ${product} really work?`,
        `Get to know ${product} before it's too late`,
        `${product} arrived in ${country} and is causing a sensation`,
        `The ${product} phenomenon finally explained`
      ];
    } else if (funnel === 'mid') {
      titleBank = [
        `${product} - Scientifically proven benefits`,
        `How ${product} can improve your quality of life`,
        `${product}: Real results in ${country}`,
        `The main benefits of ${product} explained`,
        `Why choose ${product}? See the advantages`,
        `${product} vs competitors: Compare and decide`,
        `${product}: Complete solution for your needs`,
        `Understand how ${product} works step by step`,
        `${product} - Advanced technology within your reach`,
        `The ${product} results you can expect`,
        `${product}: Efficacy proven in studies`,
        `How ${product} stands out in the market`,
        `${product} - The science behind the results`,
        `Exclusive benefits of ${product} in ${country}`,
        `${product}: Quality and efficiency guaranteed`
      ];
    } else {
      titleBank = [
        `Buy ${product} now and pay only ${price}!`,
        `${product} - Last units for ${price}`,
        `Take advantage! ${product} with 50% discount`,
        `${product} - Unmissable offer for ${price}`,
        `Secure your ${product} for only ${price}`,
        `${product} - Flash promotion for ${price}`,
        `Last hours: ${product} for ${price}`,
        `${product} - Buy today and save!`,
        `Special offer: ${product} for ${price}`,
        `${product} - Don't miss this opportunity!`,
        `Get ${product} now for ${price}`,
        `${product} - Exclusive discount for limited time`,
        `Order your ${product} for only ${price}`,
        `${product} - Offer valid today only!`,
        `Buy ${product} and receive at home for ${price}`
      ];
    }
  }

  // Embaralha e retorna 30 títulos únicos
  const shuffled = [...titleBank].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(30, shuffled.length));
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
  let uspBank = [];

  if (languageCode === 'pt') {
    uspBank = [
      `Resultados comprovados em tempo recorde`,
      `Entrega rápida e segura em todo o Brasil`,
      `Garantia de satisfação ou seu dinheiro de volta`,
      `Suporte ao cliente 24/7`,
      `Produto exclusivo com tecnologia de ponta`,
      `Aprovado por milhares de clientes satisfeitos`,
      `Frete grátis para todo o ${country}`,
      `Pagamento facilitado em até 12x`,
      `Qualidade premium internacional`,
      `Eficácia testada e comprovada`,
      `Produto 100% original e autêntico`,
      `Envio no mesmo dia da compra`,
      `Atendimento especializado`,
      `Tecnologia inovadora exclusiva`,
      `Resultados visíveis em poucos dias`
    ];
  } else if (languageCode === 'es') {
    uspBank = [
      `Resultados comprobados en tiempo récord`,
      `Entrega rápida y segura en todo el país`,
      `Garantía de satisfacción o le devolvemos su dinero`,
      `Atención al cliente 24/7`,
      `Producto exclusivo con tecnología de punta`,
      `Aprobado por miles de clientes satisfeitos`,
      `Envío gratis a todo ${country}`,
      `Pago facilitado en hasta 12 cuotas`,
      `Calidad premium internacional`,
      `Eficacia testada y comprobada`,
      `Producto 100% original y auténtico`,
      `Envío el mismo día de la compra`,
      `Atención especializada`,
      `Tecnología innovadora exclusiva`,
      `Resultados visibles en pocos días`
    ];
  } else {
    uspBank = [
      `Proven results in record time`,
      `Fast and secure delivery throughout the country`,
      `Satisfaction guarantee or your money back`,
      `24/7 customer support`,
      `Exclusive product with cutting-edge technology`,
      `Approved by thousands of satisfied customers`,
      `Free shipping throughout ${country}`,
      `Easy payment in up to 12 installments`,
      `International premium quality`,
      `Tested and proven efficacy`,
      `100% original and authentic product`,
      `Same-day shipping`,
      `Specialized customer service`,
      `Exclusive innovative technology`,
      `Visible results in just a few days`
    ];
  }

  // Embaralha e retorna 10 USPs únicos
  const shuffled = [...uspBank].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(10, shuffled.length));
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
        "Compra Ahora", "Entrega Garantizada", "Pago Contra Entrega", "Resultados Reais",
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
