import { getLanguageFromCountry, detectLanguageByCountry, idiomaForcado } from './countryLanguageMapping';
import { getTranslation, formatTemplate } from './translations';
import { countries } from '../components/data/Countries';

// Lista de idiomas corretos para os 35 países com erro
const countryLanguageFix = {
  "China": "zh-CN",
  "Rússia": "ru",
  "Holanda": "nl",
  "Dinamarca": "da",
  "Noruega": "no",
  "Suécia": "sv",
  "Polônia": "pl",
  "República Tcheca": "cs",
  "Hungria": "hu",
  "Bulgária": "bg",
  "Grécia": "el",
  "Israel": "he",
  "Tailândia": "th",
  "Malásia": "ms",
  "Filipinas": "tl",
  "Vietnã": "vi",
  "Hong Kong": "zh-HK",
  "Taiwan": "zh-TW",
  "Ucrânia": "uk",
  "Belarus": "be",
  "Cazaquistão": "kk",
  "Paquistão": "ur",
  "Sri Lanka": "si",
  "Eslovênia": "sl",
  "Bangladesh": "bn",
  "Romênia": "ro",
  "Finlândia": "fi",
  "Croácia": "hr",
  "Bósnia": "bs",
  "Sérvia": "sr",
  "Montenegro": "sr",
  "Macedônia": "mk",
  "Estônia": "et",
  "Lituânia": "lt",
  "Letônia": "lv"
};

// Função para detectar idioma correto
function getLanguageByCountry(country: string): string {
  return countryLanguageFix[country] || "en"; // fallback inglês
}

export const generateCODCopies = (
  product: string,
  price: string,
  country: string,
  languageCode: string,
  funnel: string
) => {
  // ✅ CORREÇÃO: Usar idiomaForcado primeiro, depois fallback
  const language = idiomaForcado[country] || getLanguageByCountry(country);
  
  console.log('🔍 DEBUG - Idioma detectado:', { 
    country, 
    idiomaForcado: idiomaForcado[country], 
    fallback: getLanguageByCountry(country),
    finalLanguage: language 
  });

  console.log('Gerando conteúdo para:', { product, price, country, languageCode, funnel });

  // Buscar dados do país selecionado para obter o código correto
  const countryData = countries.find(c => c.name === country || c.value === country);
  const countryCodeForDetection = countryData ? countryData.value : country;
  const countryNameForTemplate = countryData ? countryData.name : country;
  
  console.log('País:', country, 'Código do país:', countryCodeForDetection, 'Idioma detectado:', language);

  // ✅ CORREÇÃO PRINCIPAL: Usar o idioma correto detectado na função getTranslation
  const selectedTranslations = getTranslation(language);

  console.log('Tradução selecionada:', language, 'Conteúdo disponível:', !!selectedTranslations);

  // Função para embaralhar array e selecionar variações aleatórias
  const getRandomVariations = <T>(array: T[], count: number = 30): T[] => {
    const shuffled = [...array].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, array.length));
  };

  // Formatar títulos com produto e país (30 variações)
  const formattedTitles = selectedTranslations.titles.map(title => 
    formatTemplate(title, product, countryNameForTemplate)
  );

  const formattedDescriptions = selectedTranslations.descriptions.map(desc => 
    formatTemplate(desc, product, countryNameForTemplate)
  );

  const formattedUsps = selectedTranslations.usps.map(usp => 
    formatTemplate(usp, product, countryNameForTemplate)
  );

  const formattedSitelinks = selectedTranslations.sitelinks.map(sitelink => ({
    title: formatTemplate(sitelink.title, product, countryNameForTemplate),
    description1: formatTemplate(sitelink.description1, product, countryNameForTemplate),
    description2: formatTemplate(sitelink.description2, product, countryNameForTemplate),
    url: "https://exemplo.com/comprar"
  }));

  const randomTitles = getRandomVariations(formattedTitles, 30);
  const randomDescriptions = getRandomVariations(formattedDescriptions, 30);
  const randomUsps = getRandomVariations(formattedUsps, 15);
  const randomSitelinks = getRandomVariations(formattedSitelinks, 15);

  const randomStrategyIndex = Math.floor(Math.random() * selectedTranslations.biddingStrategies.length);
  const strategyMessage = formatTemplate(selectedTranslations.biddingStrategies[randomStrategyIndex], product, countryNameForTemplate);

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
    idioma: language,
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
