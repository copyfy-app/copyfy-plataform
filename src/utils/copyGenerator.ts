
import { getLanguageFromCountry, detectLanguageByCountry } from './countryLanguageMapping';
import { getTranslation, formatTemplate } from './translations';
import { countries } from '../components/data/Countries';

export const generateCODCopies = (
  product: string,
  price: string,
  country: string,
  languageCode: string,
  funnel: string
) => {
  console.log('Gerando conteúdo para:', { product, price, country, languageCode, funnel });

  // Buscar dados do país selecionado para obter o código correto
  const countryData = countries.find(c => c.name === country || c.value === country);
  const countryCodeForDetection = countryData ? countryData.value : country;
  const countryNameForTemplate = countryData ? countryData.name : country;
  
  // Detectar idioma baseado no código do país ou nome do país - CORREÇÃO IMPLEMENTADA
  let detectedLanguage: string;
  
  if (countryCodeForDetection) {
    detectedLanguage = getLanguageFromCountry(countryCodeForDetection);
  } else {
    // Usar a nova função de detecção por nome do país
    detectedLanguage = detectLanguageByCountry(countryNameForTemplate);
  }
  
  // Fallback para idioma fornecido ou inglês
  detectedLanguage = detectedLanguage || languageCode || 'en';
  
  console.log('País:', country, 'Código do país:', countryCodeForDetection, 'Idioma detectado:', detectedLanguage);

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
    formatTemplate(title, product, countryNameForTemplate)
  );

  // Formatar descrições (30 variações)
  const formattedDescriptions = selectedTranslations.descriptions.map(desc => 
    formatTemplate(desc, product, countryNameForTemplate)
  );

  // Formatar USPs (15 variações)
  const formattedUsps = selectedTranslations.usps.map(usp => 
    formatTemplate(usp, product, countryNameForTemplate)
  );

  // Formatar sitelinks (15 variações)
  const formattedSitelinks = selectedTranslations.sitelinks.map(sitelink => ({
    title: formatTemplate(sitelink.title, product, countryNameForTemplate),
    description1: formatTemplate(sitelink.description1, product, countryNameForTemplate),
    description2: formatTemplate(sitelink.description2, product, countryNameForTemplate),
    url: "https://exemplo.com/comprar"
  }));

  // Selecionar variações aleatórias para cada seção
  const randomTitles = getRandomVariations(formattedTitles, 30);
  const randomDescriptions = getRandomVariations(formattedDescriptions, 30);
  const randomUsps = getRandomVariations(formattedUsps, 15);
  const randomSitelinks = getRandomVariations(formattedSitelinks, 15);

  // Selecionar estratégia de lance aleatória do idioma específico
  const randomStrategyIndex = Math.floor(Math.random() * selectedTranslations.biddingStrategies.length);
  const strategyMessage = formatTemplate(selectedTranslations.biddingStrategies[randomStrategyIndex], product, countryNameForTemplate);

  // Formatar snippets, promoções e blocos de preço
  const formattedSnippets = selectedTranslations.snippetValues.map(snippet => 
    formatTemplate(snippet, product, countryNameForTemplate)
  );
  
  const formattedPromotions = selectedTranslations.promotions.map(promo => 
    formatTemplate(promo, product, countryNameForTemplate)
  );
  
  const formattedPriceBlocks = selectedTranslations.priceBlocks.map(block => 
    formatTemplate(block, product, countryNameForTemplate)
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
    blocosPreco: formattedPriceBlocks.length,
    primeiroTitulo: randomTitles[0],
    primeiraDescricao: randomDescriptions[0]
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
