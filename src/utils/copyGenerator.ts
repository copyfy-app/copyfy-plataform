import { getLanguageFromCountry, detectLanguageByCountry, idiomaForcado, getLanguageByCountry } from './countryLanguageMapping';
import { getTranslation, formatTemplate } from './translations';
import { countries } from '../components/data/Countries';
import { generateStructuredSnippet, generatePromotionExtension, generatePriceExtension } from './extensionGenerators';
import { supabase } from "@/integrations/supabase/client";

// Translation cache for performance
const translationCache: { [key: string]: string } = {};

const translateTexts = async (texts: string[], targetLanguage: string): Promise<string[]> => {
  if (targetLanguage === 'en' || !targetLanguage) {
    console.log('⏩ Skipping translation - target language is English or empty');
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
      console.log(`📋 All ${texts.length} texts loaded from cache for ${targetLanguage}`);
      return cachedResults;
    }

    console.log(`🌐 Calling Google Translate API for ${textsToTranslate.length} texts to ${targetLanguage}`);
    console.log('📤 First text to translate:', textsToTranslate[0]?.substring(0, 100) + '...');

    const { data, error } = await supabase.functions.invoke('translate-content', {
      body: {
        texts: textsToTranslate,
        targetLanguage,
        sourceLanguage: 'en'
      }
    });

    console.log('📥 Translation response:', { data, error });

    if (error || !data?.translations) {
      console.error('❌ Translation failed, using original texts:', error);
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
      
      console.log(`✅ Translated: "${textsToTranslate[i].substring(0, 50)}..." → "${translatedText.substring(0, 50)}..."`);
    });

    return cachedResults;

  } catch (error) {
    console.error('❌ Translation error:', error);
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

  // Buscar dados do país selecionado
  const countryData = countries.find(c => c.value === country.toLowerCase());
  const countryName = countryData ? countryData.name : country;
  
  console.log('🗺️ Country data found:', { countryData, countryName });

  // Detectar idioma correto - usando múltiplas estratégias
  let targetLanguage: string;
  
  // 1. Primeiro, tentar usar o mapeamento forçado por nome do país
  if (idiomaForcado[countryName]) {
    targetLanguage = idiomaForcado[countryName];
    console.log('🎯 Using forced language mapping:', countryName, '→', targetLanguage);
  }
  // 2. Se não, usar o código do país
  else if (countryData) {
    targetLanguage = getLanguageByCountry(countryData.value.toUpperCase());
    console.log('🔤 Using country code mapping:', countryData.value, '→', targetLanguage);
  }
  // 3. Fallback para detecção por nome
  else {
    targetLanguage = detectLanguageByCountry(countryName);
    console.log('📝 Using country name detection:', countryName, '→', targetLanguage);
  }
  
  // Garantir que não seja 'en' por engano para países que claramente não são anglófonos
  if (targetLanguage === 'en' && !['United States', 'United Kingdom', 'Canada', 'Australia', 'New Zealand', 'us', 'gb', 'ca', 'au', 'nz'].includes(country.toLowerCase())) {
    // Forçar uma detecção melhor para países comuns
    const commonMappings: { [key: string]: string } = {
      'brasil': 'pt',
      'brazil': 'pt',
      'france': 'fr',
      'germany': 'de',
      'spain': 'es',
      'italy': 'it',
      'china': 'zh',
      'japan': 'ja',
      'russia': 'ru'
    };
    
    const lowerCountry = country.toLowerCase();
    const lowerCountryName = countryName.toLowerCase();
    
    if (commonMappings[lowerCountry]) {
      targetLanguage = commonMappings[lowerCountry];
      console.log('🔧 Fixed language detection:', country, '→', targetLanguage);
    } else if (commonMappings[lowerCountryName]) {
      targetLanguage = commonMappings[lowerCountryName];
      console.log('🔧 Fixed language detection by name:', countryName, '→', targetLanguage);
    }
  }
  
  console.log('🌐 Final detected language:', targetLanguage, 'for country:', country, '/', countryName);

  try {
    // Generate base content in English first (more consistent templates)
    const baseTitles = generateCopyfyTitles(product, price, country, 'en');
    const baseDescriptions = generateCopyfyDescriptions(product, price, country, 'en');
    const baseUsps = generateCopyfyUSPs(product, price, country, 'en');
    const baseSitelinks = generateCopyfySitelinks(product, price, country, 'en');
    
    // Generate extensions in English first
    const baseSnippets = generateStructuredSnippetVariations(product, country);
    const basePromotions = generatePromotionVariations(product, country);
    const basePriceBlocks = generatePriceVariations(product, price, country);

    // Translate content if target language is not English
    let finalTitles = baseTitles;
    let finalDescriptions = baseDescriptions;
    let finalUsps = baseUsps;
    let finalSitelinks = baseSitelinks;
    let finalSnippets = baseSnippets;
    let finalPromotions = basePromotions;
    let finalPriceBlocks = basePriceBlocks;

    if (targetLanguage !== 'en') {
      console.log(`🔄 Starting translation to ${targetLanguage}`);
      
      // Translate main content
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

      // Translate extensions - THIS IS THE KEY FIX
      const [translatedSnippets, translatedPromotions, translatedPriceBlocks] = await Promise.all([
        translateTexts(baseSnippets, targetLanguage),
        translateTexts(basePromotions, targetLanguage),
        translateTexts(basePriceBlocks, targetLanguage)
      ]);

      finalTitles = translatedTitles;
      finalDescriptions = translatedDescriptions;
      finalUsps = translatedUsps;
      finalSitelinks = translatedSitelinks;
      finalSnippets = translatedSnippets;
      finalPromotions = translatedPromotions;
      finalPriceBlocks = translatedPriceBlocks;

      console.log('✅ Tradução concluída incluindo extensões');
    } else {
      console.log('⏩ Using English content - no translation needed');
    }

    const getRandomVariations = <T>(array: T[], count: number = 30): T[] => {
      const shuffled = [...array].sort(() => Math.random() - 0.5);
      return shuffled.slice(0, Math.min(count, array.length));
    };

    const result = {
      titles: getRandomVariations(finalTitles, 30),
      descriptions: getRandomVariations(finalDescriptions, 30),
      usps: getRandomVariations(finalUsps, 30),
      sitelinks: getRandomVariations(finalSitelinks, 30),
      snippetValues: finalSnippets.slice(0, 8),
      promotions: finalPromotions.slice(0, 8),
      priceBlocks: finalPriceBlocks.slice(0, 5)
    };

    console.log('✅ Geração Copyfy concluída:', {
      idioma: targetLanguage,
      titulos: result.titles.length,
      primeiroTitulo: result.titles[0],
      snippetVariations: result.snippetValues.length,
      promotionVariations: result.promotions.length,
      priceVariations: result.priceBlocks.length,
      usps: result.usps.length,
      sitelinks: result.sitelinks.length
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
      usps: getRandomVariations(fallbackUsps, 30),
      sitelinks: getRandomVariations(fallbackSitelinks, 30),
      snippetValues: snippetVariations.slice(0, 8),
      promotions: promotionVariations.slice(0, 8),
      priceBlocks: priceVariations.slice(0, 5)
    };
  }
};

// New functions to generate extensions in English for translation
const generateStructuredSnippetVariations = (product: string, country: string): string[] => {
  const snippetTemplates = [
    `${product} available in ${country}, Cash on delivery guaranteed, Fast secure shipping, No advance payment`,
    `Get ${product} today, Pay on delivery in ${country}, Verified delivery, Satisfaction guaranteed`,
    `${product} COD ${country}, Inspect before paying, Free returns, 24/7 support`,
    `Secure ${product} order, Delivery to ${country}, Cash payment on receipt, Quick process`,
    `Authentic ${product}, Available in ${country}, COD available, Immediate delivery`,
    `Safe ${product} purchase, ${country} fast delivery, Cash on delivery, Risk-free`,
    `Original ${product}, COD service in ${country}, Verified delivery, Warranty included`,
    `Order ${product} now, ${country} available, Pay on receipt, Express shipping`,
    `Premium ${product} quality, ${country} delivery, Cash on delivery, Best prices`,
    `Trusted ${product} seller, Available in ${country}, COD guarantee, Fast service`,
    `Exclusive ${product} offer, ${country} only, Pay when delivered, Limited time`,
    `Professional ${product}, Delivery to ${country}, Secure COD, Quality assured`,
    `Certified ${product} dealer, ${country} service, Cash on delivery, Proven results`,
    `Official ${product} distributor, Available ${country}, COD option, Customer support`,
    `Guaranteed ${product} delivery, ${country} wide, Pay on receipt, Satisfaction promise`,
    `Reliable ${product} source, ${country} shipping, Cash on delivery, Trust guaranteed`,
    `Verified ${product} quality, Available ${country}, COD service, Express delivery`,
    `Established ${product} provider, ${country} coverage, Pay when received, Quality promise`,
    `Licensed ${product} seller, Delivery ${country}, Cash on delivery, Secure process`,
    `Authorized ${product} agent, ${country} service, COD available, Fast shipping`
  ];

  return snippetTemplates.map(snippet => `Category: COD Benefits\nValues: ${snippet}`);
};

const generatePromotionVariations = (product: string, country: string): string[] => {
  const promotionSets = [
    [`${product} available in ${country}`, `Cash on delivery guaranteed`, `Free shipping included`],
    [`Limited offer for ${product}`, `Only available in ${country}`, `Pay when you receive`],
    [`Authentic ${product}`, `Verified delivery to ${country}`, `No advance payments`],
    [`Last units of ${product}`, `COD available in ${country}`, `Satisfaction guaranteed`],
    [`${product} - Special offer`, `Express shipping to ${country}`, `Inspect before paying`],
    [`Original ${product} guaranteed`, `COD service in ${country}`, `Free returns`],
    [`${product} promotion`, `Available only in ${country}`, `Secure cash on delivery`],
    [`${product} - Limited stock`, `Fast delivery to ${country}`, `Zero purchase risk`],
    [`Premium ${product} quality`, `${country} exclusive offer`, `Pay only when satisfied`],
    [`Certified ${product}`, `Delivery guarantee ${country}`, `Cash on delivery option`],
    [`Professional ${product}`, `Available throughout ${country}`, `Secure payment process`],
    [`Exclusive ${product} deal`, `${country} limited time`, `Risk-free purchase`],
    [`Official ${product} seller`, `Trusted delivery ${country}`, `COD payment guaranteed`],
    [`Genuine ${product}`, `Fast shipping ${country}`, `Pay when you receive`],
    [`Quality ${product}`, `${country} wide delivery`, `Cash on delivery service`],
    [`Reliable ${product} source`, `Available in ${country}`, `Secure COD option`],
    [`Verified ${product} dealer`, `Express delivery ${country}`, `Payment on receipt`],
    [`Trusted ${product} provider`, `${country} coverage`, `Safe cash delivery`],
    [`Licensed ${product} distributor`, `Delivery to ${country}`, `COD guarantee`],
    [`Authorized ${product} agent`, `${country} service area`, `Pay when delivered`]
  ];
  
  return promotionSets.map(promos => promos.join('\n'));
};

const generatePriceVariations = (product: string, price: string, country: string): string[] => {
  // Extract numeric value from price for calculations
  const numericPrice = parseFloat(price.replace(/[^\d.,]/g, '').replace(',', '.')) || 97;
  const currency = price.match(/[^\d\s.,]+/)?.[0] || '$';
  
  const priceVariationSets = [
    [
      `${product}: ${currency}${numericPrice} - Cash on delivery in ${country}`,
      `2x ${product}: ${currency}${Math.round(numericPrice * 1.8)} - Quantity discount`,
      `3x ${product}: ${currency}${Math.round(numericPrice * 2.5)} - Special COD offer`
    ],
    [
      `Single ${product}: ${currency}${numericPrice} - Only in ${country}`,
      `${product} Pack: ${currency}${Math.round(numericPrice * 2.2)} - Free shipping`,
      `${product} Deal: ${currency}${Math.round(numericPrice * 3.1)} - Maximum savings`
    ],
    [
      `${product} Price: ${currency}${numericPrice} - COD available`,
      `${product} Discount: ${currency}${Math.round(numericPrice * 1.7)} - Limited time`,
      `${product} Promo: ${currency}${Math.round(numericPrice * 2.9)} - Today only`
    ],
    [
      `Basic ${product}: ${currency}${numericPrice} - Delivery to ${country}`,
      `Premium ${product}: ${currency}${Math.round(numericPrice * 2.1)} - Express shipping`,
      `Complete ${product}: ${currency}${Math.round(numericPrice * 3.3)} - Everything included`
    ],
    [
      `Buy ${product}: ${currency}${numericPrice} - Pay on receipt`,
      `Save on ${product}: ${currency}${Math.round(numericPrice * 1.9)} - Secure COD`,
      `Ultimate ${product}: ${currency}${Math.round(numericPrice * 2.8)} - Final offer`
    ],
    [
      `Standard ${product}: ${currency}${numericPrice} - ${country} delivery`,
      `Deluxe ${product}: ${currency}${Math.round(numericPrice * 2.0)} - Enhanced package`,
      `Professional ${product}: ${currency}${Math.round(numericPrice * 3.0)} - Complete solution`
    ],
    [
      `Essential ${product}: ${currency}${numericPrice} - COD in ${country}`,
      `Advanced ${product}: ${currency}${Math.round(numericPrice * 1.9)} - Better value`,
      `Master ${product}: ${currency}${Math.round(numericPrice * 2.7)} - Best investment`
    ],
    [
      `Starter ${product}: ${currency}${numericPrice} - Perfect beginning`,
      `Growth ${product}: ${currency}${Math.round(numericPrice * 2.3)} - Enhanced results`,
      `Elite ${product}: ${currency}${Math.round(numericPrice * 3.2)} - Maximum impact`
    ]
  ];
  
  return priceVariationSets.map(blocks => blocks.join('\n'));
};

const generateCopyfyTitles = (product: string, price: string, country: string, language: string): string[] => {
  const baseTemplates = [
    // COD Direct Response Headlines - Basic
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
    
    // Urgency & Scarcity - Enhanced
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
    `Midnight Deadline: ${product} ${price} COD ${country}`,
    `This Weekend Only: ${product} - ${price} on Delivery`,
    `Breaking: ${product} Back in Stock - ${price} COD`,
    `Alert: Final ${product} Units - ${price} in ${country}`,
    `Countdown: ${product} ${price} - COD Ends Soon`,
    
    // Benefit-Driven COD - Expanded
    `Risk-Free ${product} - ${price} Only if Satisfied`,
    `No Risk: ${product} ${price} - Pay Only When Delivered`,
    `Guaranteed ${product} - ${price} Cash on Delivery`,
    `Zero Risk ${product} - Pay ${price} After Inspection`,
    `Safe Purchase: ${product} ${price} - COD Available`,
    `Secure Order: ${product} - Pay ${price} on Delivery`,
    `Protected Buy: ${product} ${price} - Cash on Delivery`,
    `Verified ${product} - ${price} Payment on Receipt`,
    `Trusted ${product} - Pay ${price} When You Receive`,
    `Authentic ${product} - ${price} COD Guaranteed`,
    `Certified ${product} - ${price} Secure COD ${country}`,
    `Premium ${product} - Pay ${price} After Delivery`,
    `Official ${product} - ${price} COD Service ${country}`,
    `Licensed ${product} - ${price} Payment on Receipt`,
    `Approved ${product} - ${price} Cash on Delivery`,
    
    // Social Proof & Authority - New
    `#1 ${product} in ${country} - ${price} COD Available`,
    `Bestselling ${product} - Pay ${price} on Delivery`,
    `Award Winning ${product} - ${price} COD ${country}`,
    `Recommended ${product} - ${price} Cash on Delivery`,
    `Professional ${product} - Pay ${price} When Delivered`,
    `Expert Choice ${product} - ${price} COD Available`,
    `Doctor Approved ${product} - ${price} on Delivery`,
    `Clinically Tested ${product} - ${price} COD ${country}`,
    `Customer Favorite ${product} - Pay ${price} on Receipt`,
    `5-Star ${product} - ${price} Cash on Delivery`,
    
    // Emotional & Transformation - New
    `Transform Your Life: ${product} - ${price} COD`,
    `Change Everything: ${product} ${price} in ${country}`,
    `Life-Changing ${product} - Pay ${price} on Delivery`,
    `Revolutionary ${product} - ${price} COD Available`,
    `Breakthrough ${product} - ${price} Cash on Delivery`,
    `Game-Changer: ${product} ${price} COD ${country}`,
    `Miracle ${product} - Pay ${price} When You Receive`,
    `Amazing ${product} Results - ${price} on Delivery`,
    `Incredible ${product} - ${price} COD in ${country}`,
    `Phenomenal ${product} - ${price} Payment on Receipt`,
    
    // Value & Investment - New
    `Best Investment: ${product} ${price} COD ${country}`,
    `Smart Choice: ${product} - Pay ${price} on Delivery`,
    `Wise Decision: ${product} ${price} Cash on Delivery`,
    `Perfect Investment: ${product} - ${price} COD`,
    `Valuable ${product} - Pay ${price} When Delivered`,
    `Priceless ${product} - Only ${price} on Delivery`,
    `Worth Every Penny: ${product} ${price} COD`,
    `Maximum Value: ${product} - ${price} in ${country}`,
    `Unbeatable Deal: ${product} ${price} COD Available`,
    `Exceptional Value: ${product} - ${price} on Receipt`
  ];

  return baseTemplates;
};

const generateCopyfyDescriptions = (product: string, price: string, country: string, language: string): string[] => {
  // Product-specific variations - making each unique
  const productCode = product.substring(0, 3).toUpperCase();
  const countryCode = country.substring(0, 2).toUpperCase();
  
  return [
    // COD-focused under 90 chars - Basic
    `${product} delivered to ${country}. Pay ${price} when received. Order now!`,
    `Get ${product} risk-free! Pay ${price} COD in ${country}. No advance payment.`,
    `${product} ${price} COD available in ${country}. Order now, pay on delivery.`,
    `Order ${product} today - pay ${price} at your door in ${country}. Safe & secure.`,
    `${product} for ${price} with COD option. Delivered safely to ${country}.`,
    `Risk-free ${product} purchase. Pay ${price} only when satisfied in ${country}.`,
    `${product} available now - ${price} cash on delivery to ${country}.`,
    `Get ${product} delivered. Pay ${price} when received in ${country}. Order now!`,
    `${product} ${price} - no prepayment needed. COD available in ${country}.`,
    `Order ${product} risk-free. Pay ${price} on delivery in ${country}. Limited time.`,
    
    // Urgency-focused COD under 90 chars - Enhanced
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
    `Midnight deadline: ${product} ${price} COD. Don't miss out in ${country}!`,
    `Weekend special: ${product} for ${price}. COD delivery to ${country}.`,
    `Time running out: ${product} ${price}. Cash on delivery in ${country}.`,
    `Final call: ${product} at ${price} COD. Available in ${country} today.`,
    `Last units: ${product} for ${price}. Pay on delivery in ${country}.`,
    
    // Trust & Security focused under 90 chars - Expanded
    `Authentic ${product} - pay ${price} on delivery. Trusted seller in ${country}.`,
    `Verified ${product} for ${price}. COD available. Safe delivery to ${country}.`,
    `Official ${product} dealer. Pay ${price} when delivered to ${country}.`,
    `Genuine ${product} guarantee. ${price} COD option available in ${country}.`,
    `Certified ${product} - ${price} cash on delivery. Serving ${country} customers.`,
    `Trusted ${product} source. Pay ${price} on receipt in ${country}. Order now.`,
    `Authorized ${product} seller. ${price} COD guarantee in ${country}.`,
    `Premium ${product} quality. Pay ${price} when satisfied in ${country}.`,
    `Reliable ${product} delivery. ${price} cash on delivery to ${country}.`,
    `Secure ${product} purchase. Pay ${price} only when received in ${country}.`,
    `Licensed ${product} distributor. ${price} COD service in ${country}.`,
    `Professional ${product} supplier. Pay ${price} on delivery to ${country}.`,
    `Established ${product} provider. ${price} cash on delivery available.`,
    `Reputable ${product} seller. Pay ${price} when delivered in ${country}.`,
    `Verified ${product} merchant. ${price} COD option in ${country}.`,
    
    // Results & Benefits - New
    `Transform with ${product}! Pay ${price} on delivery in ${country}. Results guaranteed.`,
    `Amazing ${product} results await. ${price} COD available in ${country}.`,
    `Experience ${product} benefits. Pay ${price} when delivered to ${country}.`,
    `Discover ${product} power. ${price} cash on delivery in ${country}.`,
    `Unlock ${product} potential. Pay ${price} on receipt in ${country}.`,
    `Feel ${product} difference. ${price} COD option available in ${country}.`,
    `See ${product} results fast. Pay ${price} when delivered to ${country}.`,
    `Enjoy ${product} benefits. ${price} cash on delivery in ${country}.`,
    `Experience ${product} magic. Pay ${price} on delivery in ${country}.`,
    `Witness ${product} power. ${price} COD available in ${country}.`,
    
    // Professional & Medical - New
    `Clinically proven ${product}. Pay ${price} on delivery in ${country}.`,
    `Doctor recommended ${product}. ${price} COD available in ${country}.`,
    `Scientifically tested ${product}. Pay ${price} when delivered to ${country}.`,
    `Professionally formulated ${product}. ${price} cash on delivery in ${country}.`,
    `Laboratory tested ${product}. Pay ${price} on receipt in ${country}.`,
    `Expert approved ${product}. ${price} COD option in ${country}.`,
    `Medically endorsed ${product}. Pay ${price} when delivered to ${country}.`,
    `Research-backed ${product}. ${price} cash on delivery available in ${country}.`,
    `Pharmaceutical grade ${product}. Pay ${price} on delivery in ${country}.`,
    `Clinical strength ${product}. ${price} COD available in ${country}.`,
    
    // Exclusive & Premium - New
    `Exclusive ${product} formula. Pay ${price} on delivery in ${country}.`,
    `Premium ${product} quality. ${price} COD available in ${country}.`,
    `Luxury ${product} experience. Pay ${price} when delivered to ${country}.`,
    `Elite ${product} solution. ${price} cash on delivery in ${country}.`,
    `VIP ${product} access. Pay ${price} on receipt in ${country}.`,
    `Platinum ${product} grade. ${price} COD option in ${country}.`,
    `Gold standard ${product}. Pay ${price} when delivered to ${country}.`,
    `First-class ${product}. ${price} cash on delivery available in ${country}.`,
    `Superior ${product} quality. Pay ${price} on delivery in ${country}.`,
    `Deluxe ${product} version. ${price} COD available in ${country}.`
  ];
};

const generateCopyfyUSPs = (product: string, price: string, country: string, language: string): string[] => {
  const baseTemplates = [
    // COD Benefits - Basic
    `✓ Pay ${price} only when you receive ${product} in ${country}`,
    `✓ No advance payment required - ${price} cash on delivery`,
    `✓ Risk-free ordering - inspect ${product} before paying ${price}`,
    `✓ Secure COD available throughout ${country} - pay ${price} at door`,
    `✓ Zero risk purchase - ${product} for ${price} with COD guarantee`,
    
    // Delivery & Service - Enhanced
    `✓ Fast delivery to ${country} - ${product} arrives within 24-48 hours`,
    `✓ Free shipping included - pay only ${price} for ${product}`,
    `✓ Doorstep delivery in ${country} - convenient ${price} COD option`,
    `✓ Track your ${product} order - ${price} payment on successful delivery`,
    `✓ Professional packaging - ${product} delivered safely for ${price}`,
    `✓ Express shipping available - ${product} delivered next day in ${country}`,
    `✓ Secure packaging guarantee - ${product} arrives perfect condition`,
    `✓ Real-time tracking - monitor your ${product} journey to ${country}`,
    `✓ Contactless delivery - safe ${product} delivery for ${price}`,
    `✓ Flexible delivery times - receive ${product} when convenient`,
    
    // Guarantees & Trust - Expanded
    `✓ Money-back guarantee - return ${product} if not satisfied`,
    `✓ Authentic ${product} guaranteed - pay ${price} with confidence`,
    `✓ Verified seller - trusted ${product} delivery to ${country}`,
    `✓ Customer support included - help with your ${product} purchase`,
    `✓ Quality assured - premium ${product} worth every penny of ${price}`,
    `✓ 100% satisfaction promise - ${product} must exceed expectations`,
    `✓ Warranty included - ${product} protected for peace of mind`,
    `✓ Licensed distributor - authorized ${product} sales in ${country}`,
    `✓ Secure transaction - ${price} payment protected and guaranteed`,
    `✓ Trusted by thousands - ${product} customers love their results`,
    
    // Exclusivity & Urgency - New
    `✓ Limited time offer - ${product} available for ${price} COD only`,
    `✓ Exclusive ${country} availability - don't miss ${product} at ${price}`,
    `✓ High demand product - secure your ${product} for ${price} today`,
    `✓ Special pricing - ${product} normally costs more than ${price}`,
    `✓ Time-sensitive deal - ${product} at ${price} won't last long`,
    `✓ VIP access only - exclusive ${product} offer for ${country}`,
    `✓ Member pricing - special ${product} rate of ${price} for you`,
    `✓ Early bird special - first access to ${product} at ${price}`,
    `✓ Flash discount - ${product} reduced to ${price} temporarily`,
    `✓ Today's special - ${product} available at ${price} COD only`,
    
    // Easy Process - Enhanced
    `✓ Simple 3-step ordering - get ${product} for ${price} in minutes`,
    `✓ No registration required - order ${product} instantly`,
    `✓ Phone orders accepted - call now for ${product} at ${price}`,
    `✓ WhatsApp ordering available - get ${product} delivered for ${price}`,
    `✓ Quick order form - ${product} shipped within hours`,
    `✓ One-click ordering - ${product} delivered to ${country} fast`,
    `✓ Mobile-friendly process - order ${product} from any device`,
    `✓ Instant confirmation - ${product} order confirmed immediately`,
    `✓ Multiple contact options - order ${product} your preferred way`,
    `✓ Streamlined checkout - ${product} ordered in under 2 minutes`,
    
    // Value & Results - New
    `✓ Proven results - ${product} delivers value beyond ${price}`,
    `✓ Best investment - ${product} worth much more than ${price}`,
    `✓ Life-changing opportunity - ${product} for just ${price}`,
    `✓ Premium quality - ${product} exceeds ${price} expectations`,
    `✓ Maximum value - get ${product} benefits for only ${price}`,
    `✓ Unbeatable ROI - ${product} returns far exceed ${price} cost`,
    `✓ Smart investment - ${product} at ${price} pays for itself`,
    `✓ Incredible value - ${product} normally sells for much more`,
    `✓ Cost-effective solution - ${product} saves money long-term`,
    `✓ Budget-friendly option - premium ${product} at affordable ${price}`,
    
    // Additional Benefits - New (expanding to 60+ total)
    `✓ 24/7 customer service - ${product} support available always`,
    `✓ Local delivery team - ${product} shipped by ${country} professionals`,
    `✓ Same-day processing - ${product} order handled immediately`,
    `✓ Eco-friendly packaging - ${product} delivered sustainably`,
    `✓ Gift wrapping available - ${product} perfect for special occasions`,
    `✓ Bulk order discounts - multiple ${product} units save money`,
    `✓ Loyalty program included - ${product} customers get exclusive deals`,
    `✓ Referral bonuses available - share ${product} and save`,
    `✓ Holiday shipping guarantee - ${product} delivered on time`,
    `✓ International warranty - ${product} covered worldwide`
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
    },
    // New sitelinks for variety (expanding to 50+ total)
    {
      title: `Express Delivery`,
      description1: `Same-day ${product} delivery available`,
      description2: `Rush orders processed immediately`,
      url: "https://exemplo.com/express"
    },
    {
      title: `Product Guarantee`,
      description1: `${product} quality guarantee included`,
      description2: `Full refund if not completely satisfied`,
      url: "https://exemplo.com/product-guarantee"
    },
    {
      title: `Compare Options`,
      description1: `Different ${product} packages available`,
      description2: `Choose the best option for you`,
      url: "https://exemplo.com/compare"
    },
    {
      title: `Success Stories`,
      description1: `Real ${product} success testimonials`,
      description2: `See amazing results from customers`,
      url: "https://exemplo.com/success-stories"
    },
    {
      title: `Scientific Proof`,
      description1: `Clinical studies supporting ${product}`,
      description2: `Research-backed effectiveness proven`,
      url: "https://exemplo.com/clinical-studies"
    },
    {
      title: `How It Works`,
      description1: `Step-by-step ${product} usage guide`,
      description2: `Easy instructions for best results`,
      url: "https://exemplo.com/how-it-works"
    },
    {
      title: `Safety Information`,
      description1: `${product} safety and side effects`,
      description2: `Important usage precautions`,
      url: "https://exemplo.com/safety"
    },
    {
      title: `Ingredients List`,
      description1: `Complete ${product} ingredient breakdown`,
      description2: `All natural components listed`,
      url: "https://exemplo.com/ingredients"
    },
    {
      title: `Before & After`,
      description1: `Amazing ${product} transformation photos`,
      description2: `Real customer results gallery`,
      url: "https://exemplo.com/before-after"
    },
    {
      title: `Video Testimonials`,
      description1: `Watch real customers discuss ${product}`,
      description2: `Authentic video reviews and stories`,
      url: "https://exemplo.com/video-testimonials"
    },
    // Additional 20 sitelinks to ensure we have 45+ total
    {
      title: `Money Back Promise`,
      description1: `${product} comes with satisfaction guarantee`,
      description2: `30-day risk-free trial period`,
      url: "https://exemplo.com/money-back"
    },
    {
      title: `International Shipping`,
      description1: `${product} delivered worldwide`,
      description2: `Global COD service available`,
      url: "https://exemplo.com/international"
    },
    {
      title: `Wholesale Pricing`,
      description1: `Bulk ${product} orders welcome`,
      description2: `Special rates for resellers`,
      url: "https://exemplo.com/wholesale"
    },
    {
      title: `Gift Certificates`,
      description1: `${product} perfect as a gift`,
      description2: `Digital gift cards available`,
      url: "https://exemplo.com/gifts"
    },
    {
      title: `Mobile App`,
      description1: `Order ${product} from your phone`,
      description2: `Download our mobile application`,
      url: "https://exemplo.com/mobile-app"
    },
    {
      title: `Loyalty Program`,
      description1: `Earn points with ${product} purchases`,
      description2: `Exclusive rewards for members`,
      url: "https://exemplo.com/loyalty"
    },
    {
      title: `Live Chat Support`,
      description1: `Instant help with ${product} questions`,
      description2: `Real-time customer assistance`,
      url: "https://exemplo.com/live-chat"
    },
    {
      title: `Product Bundles`,
      description1: `Complete ${product} packages available`,
      description2: `Save more with combo deals`,
      url: "https://exemplo.com/bundles"
    },
    {
      title: `Authorized Dealers`,
      description1: `Find ${product} retailers near you`,
      description2: `Official distributor network`,
      url: "https://exemplo.com/dealers"
    },
    {
      title: `Training Resources`,
      description1: `Learn how to use ${product} effectively`,
      description2: `Free tutorials and guides`,
      url: "https://exemplo.com/training"
    },
    {
      title: `Community Forum`,
      description1: `Connect with other ${product} users`,
      description2: `Share experiences and tips`,
      url: "https://exemplo.com/community"
    },
    {
      title: `Press Coverage`,
      description1: `${product} featured in major media`,
      description2: `News articles and reviews`,
      url: "https://exemplo.com/press"
    },
    {
      title: `Partnership Program`,
      description1: `Become a ${product} affiliate`,
      description2: `Earn commissions promoting products`,
      url: "https://exemplo.com/partners"
    },
    {
      title: `Environmental Impact`,
      description1: `${product} eco-friendly initiatives`,
      description2: `Sustainable business practices`,
      url: "https://exemplo.com/environment"
    },
    {
      title: `Company History`,
      description1: `Learn about our ${product} journey`,
      description2: `Years of innovation and growth`,
      url: "https://exemplo.com/history"
    },
    {
      title: `Quality Certifications`,
      description1: `${product} meets international standards`,
      description2: `ISO and quality certifications`,
      url: "https://exemplo.com/certifications"
    },
    {
      title: `Customer Portal`,
      description1: `Manage your ${product} account`,
      description2: `Order history and preferences`,
      url: "https://exemplo.com/customer-portal"
    },
    {
      title: `Technical Support`,
      description1: `Expert help with ${product} setup`,
      description2: `Technical assistance available`,
      url: "https://exemplo.com/technical-support"
    },
    {
      title: `Return Policy`,
      description1: `Easy ${product} returns process`,
      description2: `Hassle-free exchange policy`,
      url: "https://exemplo.com/returns"
    },
    {
      title: `Warranty Service`,
      description1: `${product} warranty coverage details`,
      description2: `Extended protection plans available`,
      url: "https://exemplo.com/warranty"
    }
  ];

  return sitelinkTemplates;
};
