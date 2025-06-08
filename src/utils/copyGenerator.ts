
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

  // Função para selecionar variações aleatórias
  const getRandomVariations = <T>(array: T[], count: number = 15): T[] => {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.min(count, array.length));
  };

  // Formatar títulos com produto e país
  const formattedTitles = selectedTranslations.titles.map(title => 
    formatTemplate(title, product, country)
  );

  // Formatar descrições
  const formattedDescriptions = selectedTranslations.descriptions.map(desc => 
    formatTemplate(desc, product, country)
  );

  // Formatar sitelinks
  const formattedSitelinks = selectedTranslations.sitelinks.map(sitelink => ({
    ...sitelink,
    url: sitelink.url || "https://exemplo.com/comprar"
  }));

  // Selecionar variações aleatórias para evitar repetição
  const randomTitles = getRandomVariations(formattedTitles, 30);
  const randomDescriptions = getRandomVariations(formattedDescriptions, 6);
  const randomUsps = getRandomVariations(selectedTranslations.usps, 15);
  const randomSitelinks = getRandomVariations(formattedSitelinks, 15);

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
    biddingStrategy: selectedTranslations.biddingStrategy || "Para campanhas COD, recomendamos usar 'Maximizar conversões' com lance manual apropriado para o país, focando em conversões de alta intenção de compra."
  };
};
