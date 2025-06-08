
import { getLanguageFromCountry } from './countryLanguageMapping';
import { getTranslation, formatTemplate } from './translations';

export const generateCODCopies = (
  product: string,
  price: string,
  country: string,
  languageCode: string,
  funnel: string
) => {
  console.log('Gerando conteúdo para:', { product, price, country, languageCode, funnel });

  // Determinar idioma baseado no país (priorizar mapeamento do país)
  const detectedLanguage = getLanguageFromCountry(country) || 'en';
  
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

  // Formatar USPs (30 variações)
  const formattedUsps = selectedTranslations.usps.map(usp => 
    formatTemplate(usp, product, country)
  );

  // Formatar sitelinks (30 variações)
  const formattedSitelinks = selectedTranslations.sitelinks.map(sitelink => ({
    title: formatTemplate(sitelink.title, product, country),
    description1: formatTemplate(sitelink.description1, product, country),
    description2: formatTemplate(sitelink.description2, product, country),
    url: "https://exemplo.com/comprar"
  }));

  // Selecionar 30 variações aleatórias para cada seção
  const randomTitles = getRandomVariations(formattedTitles, 30);
  const randomDescriptions = getRandomVariations(formattedDescriptions, 30);
  const randomUsps = getRandomVariations(formattedUsps, 30);
  const randomSitelinks = getRandomVariations(formattedSitelinks, 30);

  console.log('Resultados gerados:', {
    idioma: detectedLanguage,
    titulos: randomTitles.length,
    descricoes: randomDescriptions.length,
    usps: randomUsps.length,
    sitelinks: randomSitelinks.length
  });

  return {
    titles: randomTitles,
    descriptions: randomDescriptions,
    usps: randomUsps,
    sitelinks: randomSitelinks,
    biddingStrategy: "Para campanhas COD, recomendamos usar 'Maximizar conversões' com lance manual apropriado para o país, focando em conversões de alta intenção de compra."
  };
};
