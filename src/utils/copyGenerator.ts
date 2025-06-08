
import { getLanguageFromCountry, getLanguageFromCountryName, biddingStrategies } from './countryLanguageMapping';
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
  const detectedLanguage = getLanguageFromCountryName(country) || getLanguageFromCountry(country) || 'en';
  
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

  // Selecionar estratégia de lance aleatória
  const randomStrategy = biddingStrategies[Math.floor(Math.random() * biddingStrategies.length)];
  
  // Criar mensagem de estratégia baseada no funil e idioma
  let strategyMessage = "";
  switch (detectedLanguage) {
    case 'es':
      strategyMessage = `Para campañas ${funnel.toUpperCase()}, recomendamos usar '${randomStrategy}' con oferta manual apropiada para ${country}, enfocándose en conversiones de alta intención de compra.`;
      break;
    case 'en':
      strategyMessage = `For ${funnel.toUpperCase()} campaigns, we recommend using '${randomStrategy}' with appropriate manual bidding for ${country}, focusing on high-intent purchase conversions.`;
      break;
    case 'fr':
      strategyMessage = `Pour les campagnes ${funnel.toUpperCase()}, nous recommandons d'utiliser '${randomStrategy}' avec des enchères manuelles appropriées pour ${country}, en se concentrant sur les conversions d'achat à forte intention.`;
      break;
    case 'de':
      strategyMessage = `Für ${funnel.toUpperCase()}-Kampagnen empfehlen wir '${randomStrategy}' mit angemessenen manuellen Geboten für ${country}, mit Fokus auf kaufintensive Conversions.`;
      break;
    case 'it':
      strategyMessage = `Per le campagne ${funnel.toUpperCase()}, consigliamo di utilizzare '${randomStrategy}' con offerte manuali appropriate per ${country}, concentrandosi su conversioni di acquisto ad alta intenzione.`;
      break;
    default:
      strategyMessage = `Para campanhas ${funnel.toUpperCase()}, recomendamos usar '${randomStrategy}' com lance manual apropriado para ${country}, focando em conversões de alta intenção de compra.`;
  }

  console.log('Resultados gerados:', {
    idioma: detectedLanguage,
    titulos: randomTitles.length,
    descricoes: randomDescriptions.length,
    usps: randomUsps.length,
    sitelinks: randomSitelinks.length,
    estrategia: randomStrategy
  });

  return {
    titles: randomTitles,
    descriptions: randomDescriptions,
    usps: randomUsps,
    sitelinks: randomSitelinks,
    biddingStrategy: strategyMessage
  };
};
