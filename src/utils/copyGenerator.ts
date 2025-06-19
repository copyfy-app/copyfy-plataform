import { getLanguageFromCountry, detectLanguageByCountry, idiomaForcado } from './countryLanguageMapping';
import { getTranslation, formatTemplate } from './translations';
import { countries } from '../components/data/Countries';
import { generateStructuredSnippet, generatePromotionExtension, generatePriceExtension } from './extensionGenerators';

export const generateCODCopies = async (
  product: string,
  price: string,
  country: string,
  languageCode: string,
  funnel: string
) => {
  console.log('🔍 Iniciando geração de conteúdo Copyfy:', { product, price, country, languageCode, funnel });

  // Detectar idioma correto baseado no país
  const targetLanguage = idiomaForcado[country] || getLanguageFromCountry(country) || "pt";
  
  console.log('🌐 Idioma detectado:', targetLanguage, 'para país:', country);

  try {
    // Generate Copyfy-specific content with COD focus
    const copyfyTitles = generateCopyfyTitles(product, price, country, targetLanguage);
    const copyfyDescriptions = generateCopyfyDescriptions(product, price, country, targetLanguage);
    const copyfyUsps = generateCopyfyUSPs(product, price, country, targetLanguage);
    const copyfySitelinks = generateCopyfySitelinks(product, price, country, targetLanguage);

    // Generate multiple variations for extensions with product/country context
    const snippetVariations = generateStructuredSnippet(product, country);
    const promotionVariations = generatePromotionExtension(product, country);
    const priceVariations = generatePriceExtension(product, price, country);

    const getRandomVariations = <T>(array: T[], count: number = 30): T[] => {
      const shuffled = [...array].sort(() => Math.random() - 0.5);
      return shuffled.slice(0, Math.min(count, array.length));
    };

    const result = {
      titles: getRandomVariations(copyfyTitles, 30),
      descriptions: getRandomVariations(copyfyDescriptions, 30),
      usps: getRandomVariations(copyfyUsps, 15),
      sitelinks: getRandomVariations(copyfySitelinks, 15),
      snippetValues: snippetVariations.slice(0, 8), // Exactly 8 snippets
      promotions: promotionVariations.slice(0, 8), // Exactly 8 promotions
      priceBlocks: priceVariations.slice(0, 5) // Exactly 5 price extensions
    };

    console.log('✅ Geração Copyfy concluída:', {
      idioma: targetLanguage,
      titulos: result.titles.length,
      primeiroTitulo: result.titles[0],
      snippetVariations: result.snippetValues.length,
      promotionVariations: result.promotions.length,
      priceVariations: result.priceBlocks.length
    });

    return result;

  } catch (error) {
    console.error('❌ Erro na geração Copyfy:', error);
    throw error;
  }
};

const generateCopyfyTitles = (product: string, price: string, country: string, language: string): string[] => {
  const baseTemplates = [
    // COD Direct Response Headlines
    `Get ${product} - Pay ${price} on Delivery in ${country}`,
    `${product} ${price} - Order Now, Pay When You Receive`,
    `Instant ${product} Access - Only ${price} Cash on Delivery`,
    `${product} Available in ${country} - ${price} COD Only`,
    `Order ${product} Today - Pay ${price} at Your Door`,
    `${product} - ${price} Payment on Delivery Guaranteed`,
    `Get ${product} Now - ${price} COD Available in ${country}`,
    `${product} Delivered to ${country} - Pay ${price} on Receipt`,
    `Limited: ${product} for ${price} - Cash on Delivery`,
    `${product} - Order Today, Pay ${price} Tomorrow`,
    
    // Urgency & Scarcity
    `Last Days: ${product} ${price} COD in ${country}`,
    `24h Only: ${product} - Pay ${price} on Delivery`,
    `Urgent: ${product} Available ${price} COD ${country}`,
    `Final Hours: ${product} ${price} - Payment on Delivery`,
    `Limited Stock: ${product} ${price} Cash on Delivery`,
    `Today Only: ${product} - ${price} COD in ${country}`,
    `48h Left: ${product} for ${price} - Pay on Receipt`,
    `Exclusive: ${product} ${price} COD Available Now`,
    `Time Sensitive: ${product} - ${price} Payment on Delivery`,
    `Flash Sale: ${product} ${price} - Order Now, Pay Later`,
    
    // Benefit-Driven COD
    `Risk-Free ${product} - ${price} Only if Satisfied`,
    `No Risk: ${product} ${price} - Pay Only When Delivered`,
    `Guaranteed ${product} - ${price} Cash on Delivery`,
    `Zero Risk ${product} - Pay ${price} After Inspection`,
    `Safe Purchase: ${product} ${price} - COD Available`,
    `Secure Order: ${product} - Pay ${price} on Delivery`,
    `Protected Buy: ${product} ${price} - Cash on Delivery`,
    `Verified ${product} - ${price} Payment on Receipt`,
    `Trusted ${product} - Pay ${price} When You Receive`,
    `Authentic ${product} - ${price} COD Guaranteed`
  ];

  return baseTemplates;
};

const generateCopyfyDescriptions = (product: string, price: string, country: string, language: string): string[] => {
  const baseTemplates = [
    // COD Value Propositions
    `Get ${product} delivered to ${country}. Pay only ${price} when you receive it. No advance payment required. Order now for immediate processing.`,
    `${product} available with cash on delivery in ${country}. Pay ${price} at your doorstep. Safe, secure, and risk-free ordering process.`,
    `Order ${product} today - pay ${price} tomorrow. COD available across ${country}. No credit card needed. Satisfaction guaranteed or money back.`,
    `${product} with ${price} cash on delivery option. Available in ${country}. Zero risk, maximum convenience. Order now, pay when delivered.`,
    `Secure ${product} purchase - pay ${price} on delivery. Available throughout ${country}. No upfront payment. Inspect before you pay.`,
    
    // Direct Response Copy
    `Don't wait! ${product} available for ${price} COD in ${country}. Limited stock remaining. Order now before it's too late.`,
    `Exclusive ${product} offer - only ${price} cash on delivery. Available in ${country} for limited time. Act fast, supplies are limited.`,
    `Get ${product} risk-free. Pay only ${price} when satisfied. COD available in ${country}. Money-back guarantee included.`,
    `${product} - special ${price} COD offer for ${country} residents. No advance payment. Order today, receive tomorrow, pay on delivery.`,
    `Limited time: ${product} for ${price} with free COD in ${country}. No hidden fees. Pay only when you're completely satisfied.`,
    
    // Urgency & Action
    `Final hours to get ${product} for ${price} COD in ${country}. Don't miss this exclusive offer. Order now while stocks last.`,
    `Last chance: ${product} available for ${price} cash on delivery. Only in ${country}. Order immediately to secure your copy.`,
    `Urgent: ${product} stock running low. Get yours for ${price} COD in ${country}. Order now to avoid disappointment.`,
    `Breaking: ${product} back in stock! ${price} cash on delivery in ${country}. Limited quantities available. Order immediately.`,
    `Alert: ${product} available for ${price} COD. Delivery to ${country} only. High demand - order now to guarantee availability.`,
    
    // Benefit & Results Focus
    `Transform your results with ${product}. Only ${price} with cash on delivery in ${country}. Risk-free trial. Order today.`,
    `Proven ${product} system - pay just ${price} on delivery. Available in ${country}. Join thousands of satisfied customers.`,
    `Get instant access to ${product}. Pay ${price} when delivered to ${country}. No risk, all reward. Order your copy now.`,
    `Revolutionary ${product} - only ${price} COD in ${country}. Tested, proven, guaranteed. Order now for immediate shipping.`,
    `Breakthrough ${product} offer - ${price} cash on delivery. Exclusive to ${country}. Limited time availability. Act now.`,
    
    // Trust & Security
    `Authentic ${product} with ${price} COD guarantee. Trusted by thousands in ${country}. Secure ordering, fast delivery.`,
    `Official ${product} - pay ${price} on delivery only. Available in ${country}. Verified seller, guaranteed authenticity.`,
    `Genuine ${product} for ${price} with COD option. Serving ${country} customers. 100% satisfaction guaranteed.`,
    `Certified ${product} - ${price} cash on delivery available. Exclusive ${country} distributor. Safe, secure, reliable.`,
    `Authorized ${product} dealer - ${price} COD option. Delivering to ${country}. Premium quality guaranteed.`,
    
    // Call-to-Action Focused
    `Order ${product} now! Pay ${price} on delivery in ${country}. Quick ordering process. Immediate dispatch guaranteed.`,
    `Click to order ${product} - ${price} COD available. Fast delivery to ${country}. No payment until you receive it.`,
    `Buy ${product} today - pay ${price} tomorrow. COD service in ${country}. Easy ordering, secure delivery.`,
    `Purchase ${product} risk-free - ${price} cash on delivery. Available in ${country}. Order now for fastest delivery.`,
    `Secure your ${product} copy - pay ${price} on arrival. Delivery to ${country}. Order today, receive tomorrow.`
  ];

  return baseTemplates;
};

const generateCopyfyUSPs = (product: string, price: string, country: string, language: string): string[] => {
  const baseTemplates = [
    // COD Benefits
    `✓ Pay ${price} only when you receive ${product} in ${country}`,
    `✓ No advance payment required - ${price} cash on delivery`,
    `✓ Risk-free ordering - inspect ${product} before paying ${price}`,
    `✓ Secure COD available throughout ${country} - pay ${price} at door`,
    `✓ Zero risk purchase - ${product} for ${price} with COD guarantee`,
    
    // Delivery & Service
    `✓ Fast delivery to ${country} - ${product} arrives within 24-48 hours`,
    `✓ Free shipping included - pay only ${price} for ${product}`,
    `✓ Doorstep delivery in ${country} - convenient ${price} COD option`,
    `✓ Track your ${product} order - ${price} payment on successful delivery`,
    `✓ Professional packaging - ${product} delivered safely for ${price}`,
    
    // Guarantees & Trust
    `✓ Money-back guarantee - return ${product} if not satisfied`,
    `✓ Authentic ${product} guaranteed - pay ${price} with confidence`,
    `✓ Verified seller - trusted ${product} delivery to ${country}`,
    `✓ Customer support included - help with your ${product} purchase`,
    `✓ Quality assured - premium ${product} worth every penny of ${price}`,
    
    // Exclusivity & Urgency
    `✓ Limited time offer - ${product} available for ${price} COD only`,
    `✓ Exclusive ${country} availability - don't miss ${product} at ${price}`,
    `✓ High demand product - secure your ${product} for ${price} today`,
    `✓ Special pricing - ${product} normally costs more than ${price}`,
    `✓ Time-sensitive deal - ${product} at ${price} won't last long`,
    
    // Easy Process
    `✓ Simple 3-step ordering - get ${product} for ${price} in minutes`,
    `✓ No registration required - order ${product} instantly`,
    `✓ Phone orders accepted - call now for ${product} at ${price}`,
    `✓ WhatsApp ordering available - get ${product} delivered for ${price}`,
    `✓ Quick order form - ${product} shipped within hours`,
    
    // Value & Results
    `✓ Proven results - ${product} delivers value beyond ${price}`,
    `✓ Best investment - ${product} worth much more than ${price}`,
    `✓ Life-changing opportunity - ${product} for just ${price}`,
    `✓ Premium quality - ${product} exceeds ${price} expectations`,
    `✓ Maximum value - get ${product} benefits for only ${price}`
  ];

  return baseTemplates;
};

const generateCopyfySitelinks = (product: string, price: string, country: string, language: string) => {
  const sitelinkTemplates = [
    {
      title: `Order ${product} Now`,
      description1: `Get ${product} delivered to ${country}`,
      description2: `Pay ${price} cash on delivery only`,
      url: "https://exemplo.com/order-now"
    },
    {
      title: `${price} COD Available`,
      description1: `No advance payment required`,
      description2: `Pay ${price} when you receive ${product}`,
      url: "https://exemplo.com/cod-payment"
    },
    {
      title: `Fast Delivery ${country}`,
      description1: `${product} delivered within 24-48 hours`,
      description2: `Professional shipping to your door`,
      url: "https://exemplo.com/fast-delivery"
    },
    {
      title: `Risk-Free Purchase`,
      description1: `Inspect ${product} before payment`,
      description2: `Return if not satisfied with quality`,
      url: "https://exemplo.com/guarantee"
    },
    {
      title: `Customer Reviews`,
      description1: `Read what customers say about ${product}`,
      description2: `Verified testimonials from ${country}`,
      url: "https://exemplo.com/reviews"
    },
    {
      title: `Limited Time Offer`,
      description1: `Special ${price} pricing ending soon`,
      description2: `Don't miss this exclusive deal`,
      url: "https://exemplo.com/special-offer"
    },
    {
      title: `Contact Support`,
      description1: `Questions about ${product} or delivery?`,
      description2: `24/7 customer service available`,
      url: "https://exemplo.com/support"
    },
    {
      title: `Track Your Order`,
      description1: `Monitor ${product} delivery status`,
      description2: `Real-time shipping updates`,
      url: "https://exemplo.com/tracking"
    },
    {
      title: `Product Details`,
      description1: `Complete ${product} specifications`,
      description2: `Features, benefits, and usage guide`,
      url: "https://exemplo.com/product-details"
    },
    {
      title: `Bulk Orders`,
      description1: `Multiple ${product} units available`,
      description2: `Special pricing for quantity orders`,
      url: "https://exemplo.com/bulk-orders"
    },
    {
      title: `Shipping Info`,
      description1: `Delivery areas in ${country}`,
      description2: `Shipping times and COD policies`,
      url: "https://exemplo.com/shipping"
    },
    {
      title: `Payment Options`,
      description1: `Cash on delivery for ${price}`,
      description2: `Secure payment when you receive`,
      url: "https://exemplo.com/payment"
    },
    {
      title: `About Us`,
      description1: `Trusted seller serving ${country}`,
      description2: `Years of experience in delivery`,
      url: "https://exemplo.com/about"
    },
    {
      title: `FAQ`,
      description1: `Common questions about ${product}`,
      description2: `Delivery, payment, and return info`,
      url: "https://exemplo.com/faq"
    },
    {
      title: `Special Deals`,
      description1: `Exclusive offers for ${country}`,
      description2: `Limited time ${product} promotions`,
      url: "https://exemplo.com/deals"
    }
  ];

  return sitelinkTemplates;
};

const generateCopyfyBiddingStrategy = (product: string, price: string, country: string, language: string): string => {
  return `Focus on high-intent COD keywords for ${product} in ${country}. Target "cash on delivery", "COD available", "pay on delivery" terms. Bid aggressively on product + location + COD combinations. Set higher bids for mobile traffic as COD users often prefer mobile ordering. Use ${price} as competitive advantage in ad copy.`;
};
