import { getLanguageFromCountry, detectLanguageByCountry, idiomaForcado } from './countryLanguageMapping';
import { getTranslation, formatTemplate } from './translations';
import { countries } from '../components/data/Countries';
import { generateStructuredSnippet, generatePromotionExtension, generatePriceExtension } from './extensionGenerators';
import { supabase } from "@/integrations/supabase/client";

// Translation cache for performance
const translationCache: { [key: string]: string } = {};

const translateTexts = async (texts: string[], targetLanguage: string): Promise<string[]> => {
  if (targetLanguage === 'en' || !targetLanguage) {
    return texts;
  }

  try {
    // Check cache first
    const cachedResults: string[] = [];
    const textsToTranslate: string[] = [];
    const indices: number[] = [];

    texts.forEach((text, index) => {
      const cacheKey = `${targetLanguage}:${text.substring(0, 50)}`;
      if (translationCache[cacheKey]) {
        cachedResults[index] = translationCache[cacheKey];
      } else {
        textsToTranslate.push(text);
        indices.push(index);
      }
    });

    // If all texts are cached, return immediately
    if (textsToTranslate.length === 0) {
      return cachedResults;
    }

    console.log(`Translating ${textsToTranslate.length} texts to ${targetLanguage}`);

    const { data, error } = await supabase.functions.invoke('translate-content', {
      body: {
        texts: textsToTranslate,
        targetLanguage,
        sourceLanguage: 'en'
      }
    });

    if (error || !data?.translations) {
      console.error('Translation failed, using original texts:', error);
      // Fallback to original texts
      indices.forEach((originalIndex, i) => {
        cachedResults[originalIndex] = textsToTranslate[i];
      });
      return cachedResults;
    }

    // Process translations and update cache
    data.translations.forEach((translation: any, i: number) => {
      const originalIndex = indices[i];
      const translatedText = translation.translatedText || textsToTranslate[i];
      cachedResults[originalIndex] = translatedText;
      
      // Cache the result
      const cacheKey = `${targetLanguage}:${textsToTranslate[i].substring(0, 50)}`;
      translationCache[cacheKey] = translatedText;
    });

    return cachedResults;

  } catch (error) {
    console.error('Translation error:', error);
    // Always return original texts as fallback
    return texts;
  }
};

export const generateCODCopies = async (
  product: string,
  price: string,
  country: string,
  languageCode: string,
  funnel: string
) => {
  console.log('🔍 Iniciando geração de conteúdo Copyfy:', { product, price, country, languageCode, funnel });

  // Detectar idioma correto baseado no país
  const targetLanguage = idiomaForcado[country] || getLanguageFromCountry(country) || "en";
  
  console.log('🌐 Idioma detectado:', targetLanguage, 'para país:', country);

  try {
    // Generate base content in English first (more consistent templates)
    const baseTitles = generateCopyfyTitles(product, price, country, 'en');
    const baseDescriptions = generateCopyfyDescriptions(product, price, country, 'en');
    const baseUsps = generateCopyfyUSPs(product, price, country, 'en');
    const baseSitelinks = generateCopyfySitelinks(product, price, country, 'en');

    // Translate content if target language is not English
    let finalTitles = baseTitles;
    let finalDescriptions = baseDescriptions;
    let finalUsps = baseUsps;
    let finalSitelinks = baseSitelinks;

    if (targetLanguage !== 'en') {
      console.log(`🔄 Traduzindo conteúdo para ${targetLanguage}`);
      
      // Translate titles and descriptions
      const [translatedTitles, translatedDescriptions, translatedUsps] = await Promise.all([
        translateTexts(baseTitles, targetLanguage),
        translateTexts(baseDescriptions, targetLanguage),
        translateTexts(baseUsps, targetLanguage)
      ]);

      // Translate sitelinks content
      const sitelinkTexts = baseSitelinks.flatMap(sitelink => [
        sitelink.title,
        sitelink.description1,
        sitelink.description2
      ]);

      const translatedSitelinkTexts = await translateTexts(sitelinkTexts, targetLanguage);
      
      const translatedSitelinks = baseSitelinks.map((sitelink, index) => ({
        ...sitelink,
        title: translatedSitelinkTexts[index * 3] || sitelink.title,
        description1: translatedSitelinkTexts[index * 3 + 1] || sitelink.description1,
        description2: translatedSitelinkTexts[index * 3 + 2] || sitelink.description2
      }));

      finalTitles = translatedTitles;
      finalDescriptions = translatedDescriptions;
      finalUsps = translatedUsps;
      finalSitelinks = translatedSitelinks;

      console.log('✅ Tradução concluída');
    }

    // Generate extensions with product/country context
    const snippetVariations = generateStructuredSnippet(product, country);
    const promotionVariations = generatePromotionExtension(product, country);
    const priceVariations = generatePriceExtension(product, price, country);

    const getRandomVariations = <T>(array: T[], count: number = 30): T[] => {
      const shuffled = [...array].sort(() => Math.random() - 0.5);
      return shuffled.slice(0, Math.min(count, array.length));
    };

    const result = {
      titles: getRandomVariations(finalTitles, 30),
      descriptions: getRandomVariations(finalDescriptions, 30),
      usps: getRandomVariations(finalUsps, 15),
      sitelinks: getRandomVariations(finalSitelinks, 15),
      snippetValues: snippetVariations.slice(0, 8),
      promotions: promotionVariations.slice(0, 8),
      priceBlocks: priceVariations.slice(0, 5)
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
    
    // Fallback: Generate content in detected language using existing templates
    console.log('🔄 Usando fallback para templates multilíngues');
    
    const fallbackTitles = generateCopyfyTitles(product, price, country, targetLanguage);
    const fallbackDescriptions = generateCopyfyDescriptions(product, price, country, targetLanguage);
    const fallbackUsps = generateCopyfyUSPs(product, price, country, targetLanguage);
    const fallbackSitelinks = generateCopyfySitelinks(product, price, country, targetLanguage);

    const snippetVariations = generateStructuredSnippet(product, country);
    const promotionVariations = generatePromotionExtension(product, country);
    const priceVariations = generatePriceExtension(product, price, country);

    const getRandomVariations = <T>(array: T[], count: number = 30): T[] => {
      const shuffled = [...array].sort(() => Math.random() - 0.5);
      return shuffled.slice(0, Math.min(count, array.length));
    };

    return {
      titles: getRandomVariations(fallbackTitles, 30),
      descriptions: getRandomVariations(fallbackDescriptions, 30),
      usps: getRandomVariations(fallbackUsps, 15),
      sitelinks: getRandomVariations(fallbackSitelinks, 15),
      snippetValues: snippetVariations.slice(0, 8),
      promotions: promotionVariations.slice(0, 8),
      priceBlocks: priceVariations.slice(0, 5)
    };
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
  // Dynamic prefixes and suffixes based on country
  const countrySpecific = {
    'US': { currency: '$', shipping: 'nationwide', urgency: 'today' },
    'UK': { currency: '£', shipping: 'UK-wide', urgency: 'same day' },
    'DE': { currency: '€', shipping: 'Germany-wide', urgency: 'schnell' },
    'FR': { currency: '€', shipping: 'France-wide', urgency: 'rapide' },
    'IT': { currency: '€', shipping: 'Italy-wide', urgency: 'veloce' },
    'ES': { currency: '€', shipping: 'Spain-wide', urgency: 'rápido' },
    'BR': { currency: 'R$', shipping: 'Brazil-wide', urgency: 'hoje' },
    'MX': { currency: '$', shipping: 'Mexico-wide', urgency: 'hoy' },
    'default': { currency: '', shipping: 'nationwide', urgency: 'now' }
  };

  const spec = countrySpecific[country] || countrySpecific['default'];
  
  // Product-specific variations - making each unique
  const productCode = product.substring(0, 3).toUpperCase();
  const countryCode = country.substring(0, 2).toUpperCase();
  
  return [
    // COD-focused under 90 chars
    `${product} delivered to ${country}. Pay ${price} when received. Order ${spec.urgency}!`,
    `Get ${product} risk-free! Pay ${price} COD in ${country}. No advance payment.`,
    `${product} ${price} COD available in ${country}. Order now, pay on delivery.`,
    `Order ${product} today - pay ${price} at your door in ${country}. Safe & secure.`,
    `${product} for ${price} with COD option. Delivered safely to ${country}.`,
    `Risk-free ${product} purchase. Pay ${price} only when satisfied in ${country}.`,
    `${product} available ${spec.urgency} - ${price} cash on delivery to ${country}.`,
    `Get ${product} delivered. Pay ${price} when received in ${country}. Order now!`,
    `${product} ${price} - no prepayment needed. COD available in ${country}.`,
    `Order ${product} risk-free. Pay ${price} on delivery in ${country}. Limited time.`,
    
    // Urgency-focused COD under 90 chars
    `Last chance: ${product} for ${price} COD in ${country}. Order before sold out!`,
    `24h only: ${product} ${price} cash on delivery. Available in ${country} now.`,
    `Limited: ${product} at ${price} with COD. Delivery to ${country} guaranteed.`,
    `Final hours: ${product} for ${price}. Pay on delivery in ${country} only.`,
    `Urgent: ${product} stock low. Get yours for ${price} COD in ${country}.`,
    `Today only: ${product} ${price} with free COD delivery to ${country}.`,
    `Breaking: ${product} back in stock! ${price} COD available in ${country}.`,
    `Alert: ${product} selling fast. Secure yours for ${price} COD in ${country}.`,
    `48h left: ${product} at ${price}. Cash on delivery to ${country} available.`,
    `Flash sale: ${product} for ${price}. COD option in ${country}. Act now!`,
    
    // Trust & Security focused under 90 chars
    `Authentic ${product} - pay ${price} on delivery. Trusted seller in ${country}.`,
    `Verified ${product} for ${price}. COD available. Safe delivery to ${country}.`,
    `Official ${product} dealer. Pay ${price} when delivered to ${country}.`,
    `Genuine ${product} guarantee. ${price} COD option available in ${country}.`,
    `Certified ${product} - ${price} cash on delivery. Serving ${country} customers.`,
    `Trusted ${product} source. Pay ${price} on receipt in ${country}. Order now.`,
    `Authorized ${product} seller. ${price} COD guarantee in ${country}.`,
    `Premium ${product} quality. Pay ${price} when satisfied in ${country}.`,
    `Reliable ${product} delivery. ${price} cash on delivery to ${country}.`,
    `Secure ${product} purchase. Pay ${price} only when received in ${country}.`
  ];
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
