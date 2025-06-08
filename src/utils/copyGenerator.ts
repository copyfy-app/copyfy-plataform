
import { getLanguageFromCountry, getLanguageFromCountryName } from './countryLanguageMapping';
import { getTranslation, formatTemplate } from './translations';

export const generateCODCopies = (
  product: string,
  price: string,
  country: string,
  languageCode: string,
  funnel: string
) => {
  console.log('Gerando conteúdo para:', { product, price, country, languageCode, funnel });

  // Detectar idioma baseado no código do país - CONVERTENDO PARA MAIÚSCULO
  const detectedLanguage = getLanguageFromCountry(country.toUpperCase()) || languageCode || 'en';
  
  console.log('País:', country, 'Idioma detectado:', detectedLanguage);

  // Obter traduções para o idioma detectado
  const selectedTranslations = getTranslation(detectedLanguage);

  console.log('Tradução selecionada:', detectedLanguage, 'Conteúdo disponível:', !!selectedTranslations);

  // Função para embaralhar array e selecionar variações aleatórias
  const getRandomVariations = <T>(array: T[], count: number = 30): T[] => {
    const shuffled = [...array].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, array.length));
  };

  // Formatar títulos com produto e país (30 variações)
  const formattedTitles = selectedTranslations.titles.map(title => 
    formatTemplate(title, product, country)
  );

  // Formatar descrições (30 variações)
  const formattedDescriptions = selectedTranslations.descriptions.map(desc => 
    formatTemplate(desc, product, country)
  );

  // Formatar USPs (15 variações)
  const formattedUsps = selectedTranslations.usps.map(usp => 
    formatTemplate(usp, product, country)
  );

  // Formatar sitelinks (15 variações)
  const formattedSitelinks = selectedTranslations.sitelinks.map(sitelink => ({
    title: formatTemplate(sitelink.title, product, country),
    description1: formatTemplate(sitelink.description1, product, country),
    description2: formatTemplate(sitelink.description2, product, country),
    url: "https://exemplo.com/comprar"
  }));

  // Selecionar variações aleatórias para cada seção
  const randomTitles = getRandomVariations(formattedTitles, 30);
  const randomDescriptions = getRandomVariations(formattedDescriptions, 30);
  const randomUsps = getRandomVariations(formattedUsps, 15);
  const randomSitelinks = getRandomVariations(formattedSitelinks, 15);

  // Selecionar estratégia de lance aleatória do idioma específico
  const randomStrategyIndex = Math.floor(Math.random() * selectedTranslations.biddingStrategies.length);
  const strategyMessage = formatTemplate(selectedTranslations.biddingStrategies[randomStrategyIndex], product, country);

  // Formatar snippets, promoções e blocos de preço
  const formattedSnippets = selectedTranslations.snippetValues.map(snippet => 
    formatTemplate(snippet, product, country)
  );
  
  const formattedPromotions = selectedTranslations.promotions.map(promo => 
    formatTemplate(promo, product, country)
  );
  
  const formattedPriceBlocks = selectedTranslations.priceBlocks.map(block => 
    formatTemplate(block, product, country)
  );

  console.log('Resultados gerados:', {
    idioma: detectedLanguage,
    titulos: randomTitles.length,
    descricoes: randomDescriptions.length,
    usps: randomUsps.length,
    sitelinks: randomSitelinks.length,
    estrategia: strategyMessage,
    snippets: formattedSnippets.length,
    promocoes: formattedPromotions.length,
    blocosPreco: formattedPriceBlocks.length
  });

  return {
    titles: randomTitles,
    descriptions: randomDescriptions,
    usps: randomUsps,
    sitelinks: randomSitelinks,
    biddingStrategy: strategyMessage,
    snippetValues: formattedSnippets,
    promotions: formattedPromotions,
    priceBlocks: formattedPriceBlocks
  };
};
