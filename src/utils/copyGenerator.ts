import { faker } from '@faker-js/faker';

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
      `Resultados comprovados em [número] dias`,
      `Entrega rápida e segura em todo o Brasil`,
      `Garantia de satisfação ou seu dinheiro de volta`,
      `Suporte ao cliente 24/7`,
      `Produto exclusivo com tecnologia de ponta`
    );
  } else if (languageCode === 'es') {
    usps.push(
      `Resultados comprobados en [número] días`,
      `Entrega rápida y segura en todo el país`,
      `Garantía de satisfacción o le devolvemos su dinero`,
      `Atención al cliente 24/7`,
      `Producto exclusivo con tecnología de punta`
    );
  } else {
    usps.push(
      `Proven results in [number] days`,
      `Fast and secure delivery throughout the country`,
      `Satisfaction guarantee or your money back`,
      `24/7 customer support`,
      `Exclusive product with cutting-edge technology`
    );
  }

  return usps;
};

const generateSitelinks = (product: string, price: string, country: string, languageCode: string, funnel: string): { title: string; description1: string; description2: string; url: string; }[] => {
  const sitelinkTemplates = {
    pt: [
      {
        title: "Compre Agora",
        description1: "Aproveite o desconto exclusivo",
        description2: "Receba em casa com rapidez",
        url: "/compra"
      },
      {
        title: "Pague na Entrega",
        description1: "Segurança total na sua compra",
        description2: "Só pague quando receber",
        url: "/pagamento"
      },
      {
        title: "Resultados Comprovados",
        description1: "Clientes satisfeitos no país",
        description2: "Veja os depoimentos reais",
        url: "/resultados"
      },
      {
        title: "Produto Original",
        description1: "Garantia de autenticidade",
        description2: "Frete grátis para todo país",
        url: "/original"
      }
    ],
    es: [
      {
        title: "Compra Ahora",
        description1: "Aprovecha el descuento exclusivo",
        description2: "Recibe en casa rápidamente",
        url: "/compra"
      },
      {
        title: "Pago Contra Entrega",
        description1: "Seguridad total en tu compra",
        description2: "Solo paga cuando recibas",
        url: "/pago"
      },
      {
        title: "Resultados Probados",
        description1: "Clientes satisfechos en el país",
        description2: "Ve testimonios reales",
        url: "/resultados"
      },
      {
        title: "Producto Original",
        description1: "Garantía de autenticidad",
        description2: "Envío gratis a todo el país",
        url: "/original"
      }
    ],
    en: [
      {
        title: "Buy Now",
        description1: "Take advantage of exclusive deal",
        description2: "Fast home delivery",
        url: "/buy"
      },
      {
        title: "Pay on Delivery",
        description1: "Total security in your purchase",
        description2: "Pay only when you receive",
        url: "/payment"
      },
      {
        title: "Proven Results",
        description1: "Satisfied customers nationwide",
        description2: "See real testimonials",
        url: "/results"
      },
      {
        title: "Original Product",
        description1: "Authenticity guarantee",
        description2: "Free shipping nationwide",
        url: "/original"
      }
    ]
  };

  return sitelinkTemplates[languageCode] || sitelinkTemplates.pt;
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
