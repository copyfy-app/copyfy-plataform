
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
  console.log('🔍 Iniciando geração de conteúdo:', { product, price, country, languageCode, funnel });

  // Detectar idioma correto baseado no país
  const targetLanguage = idiomaForcado[country] || getLanguageFromCountry(country) || "pt";
  
  console.log('🌐 Idioma detectado:', targetLanguage, 'para país:', country);

  try {
    // Usar sistema de traduções existente
    const selectedTranslations = getTranslation(targetLanguage);
    
    const formattedTitles = selectedTranslations.titles.map(title => 
      formatTemplate(title, product, country)
    );

    const formattedDescriptions = selectedTranslations.descriptions.map(desc => 
      formatTemplate(desc, product, country)
    );

    const formattedUsps = selectedTranslations.usps.map(usp => 
      formatTemplate(usp, product, country)
    );

    const formattedSitelinks = selectedTranslations.sitelinks.map(sitelink => ({
      title: formatTemplate(sitelink.title, product, country),
      description1: formatTemplate(sitelink.description1, product, country),
      description2: formatTemplate(sitelink.description2, product, country),
      url: "https://exemplo.com/comprar"
    }));

    // Generate multiple variations for extensions
    const snippetVariations = generateStructuredSnippet(product, country);
    const promotionVariations = generatePromotionExtension(product, country);
    const priceVariations = generatePriceExtension(product, price, country);

    const getRandomVariations = <T>(array: T[], count: number = 30): T[] => {
      const shuffled = [...array].sort(() => Math.random() - 0.5);
      return shuffled.slice(0, Math.min(count, array.length));
    };

    const result = {
      titles: getRandomVariations(formattedTitles, 30),
      descriptions: getRandomVariations(formattedDescriptions, 30),
      usps: getRandomVariations(formattedUsps, 15),
      sitelinks: getRandomVariations(formattedSitelinks, 15),
      biddingStrategy: formatTemplate(selectedTranslations.biddingStrategies[0], product, country),
      snippetValues: snippetVariations, // Now returns multiple variations
      promotions: promotionVariations, // Now returns multiple variations
      priceBlocks: priceVariations // Now returns multiple variations
    };

    console.log('✅ Geração concluída:', {
      idioma: targetLanguage,
      titulos: result.titles.length,
      primeiroTitulo: result.titles[0],
      snippetVariations: result.snippetValues.length,
      promotionVariations: result.promotions.length,
      priceVariations: result.priceBlocks.length
    });

    return result;

  } catch (error) {
    console.error('❌ Erro na geração:', error);
    throw error;
  }
};
