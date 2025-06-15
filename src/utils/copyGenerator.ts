
import { getLanguageFromCountry, detectLanguageByCountry, idiomaForcado } from './countryLanguageMapping';
import { getTranslation, formatTemplate } from './translations';
import { translateText } from './translateText';
import { countries } from '../components/data/Countries';

// Lista de idiomas para 100 países
const countryLanguageMap: Record<string, string> = {
  "Brasil": "pt",
  "Estados Unidos": "en", 
  "Reino Unido": "en",
  "Alemanha": "de",
  "França": "fr", 
  "Espanha": "es",
  "Itália": "it",
  "Holanda": "nl",
  "México": "es",
  "Canadá": "en",
  "Turquia": "tr",
  "Índia": "hi",
  "Indonésia": "id",
  "Argentina": "es",
  "Chile": "es",
  "Colômbia": "es",
  "Peru": "es",
  "Venezuela": "es",
  "Polônia": "pl",
  "República Tcheca": "cs",
  "Eslováquia": "sk",
  "Romênia": "ro",
  "Bulgária": "bg",
  "Grécia": "el",
  "Hungria": "hu",
  "Suécia": "sv",
  "Noruega": "no",
  "Finlândia": "fi",
  "Dinamarca": "da",
  "Áustria": "de",
  "Suíça": "de",
  "Bélgica": "nl",
  "Portugal": "pt",
  "Austrália": "en",
  "Nova Zelândia": "en",
  "África do Sul": "en",
  "Egito": "ar",
  "Marrocos": "ar",
  "Argélia": "ar",
  "Arábia Saudita": "ar",
  "Emirados Árabes Unidos": "ar",
  "Israel": "he",
  "Rússia": "ru",
  "Ucrânia": "uk",
  "Nigéria": "en",
  "Quênia": "en",
  "Filipinas": "tl",
  "Malásia": "ms",
  "Singapura": "en",
  "Coreia do Sul": "ko",
  "Japão": "ja",
  "China": "zh-CN",
  "Tailândia": "th",
  "Vietnã": "vi",
  "Paquistão": "ur",
  "Bangladesh": "bn",
  "Sri Lanka": "si",
  "Nepal": "ne",
  "Tunísia": "ar",
  "Iraque": "ar",
  "Jordânia": "ar",
  "Catar": "ar",
  "Kuwait": "ar",
  "Omã": "ar",
  "Líbano": "ar",
  "Afeganistão": "fa",
  "Irã": "fa",
  "Cazaquistão": "kk",
  "Uzbequistão": "uz",
  "Mongólia": "mn",
  "Myanmar": "my",
  "Camboja": "km",
  "Laos": "lo",
  "Coreia do Norte": "ko",
  "Taiwan": "zh-TW",
  "Hong Kong": "zh-HK",
  "Macau": "zh",
  "Islândia": "is",
  "Irlanda": "en",
  "Croácia": "hr",
  "Eslovênia": "sl",
  "Sérvia": "sr",
  "Bósnia e Herzegovina": "bs",
  "Montenegro": "sr",
  "Macedônia do Norte": "mk",
  "Geórgia": "ka",
  "Armênia": "hy",
  "Azerbaijão": "az",
  "Belarus": "be",
  "Estônia": "et",
  "Letônia": "lv",
  "Lituânia": "lt"
};

// Template base para tradução
const copyTemplateBase = {
  titles: [
    "🔥 [PRODUTO] com Frete Grátis para todo o [PAÍS]!",
    "💰 Oferta Especial: [PRODUTO] por apenas [PREÇO]",
    "🎯 [PRODUTO] - Entrega Garantida no [PAÍS]",
    "✅ [PRODUTO] Original - Pague na Entrega",
    "🚀 Promoção Limitada: [PRODUTO] no [PAÍS]"
  ],
  descriptions: [
    "Garanta já o seu [PRODUTO] por apenas [PREÇO]. Entrega rápida e segura no [PAÍS]. Pague somente na entrega!",
    "[PRODUTO] disponível com desconto especial. Apenas [PREÇO] com frete grátis para todo o [PAÍS].",
    "Oferta exclusiva de [PRODUTO] no [PAÍS]. Preço promocional de [PREÇO]. Estoque limitado!",
    "[PRODUTO] original com garantia. Entrega em todo o [PAÍS] por [PREÇO]. Pagamento na entrega."
  ],
  usps: [
    "Frete Grátis",
    "Pague na Entrega", 
    "Garantia Total",
    "Estoque Limitado",
    "Oferta Exclusiva"
  ],
  sitelinks: [
    { title: "Compre Agora", description1: "Garanta o seu [PRODUTO]", description2: "Entrega rápida" },
    { title: "Frete Grátis", description1: "Para todo o [PAÍS]", description2: "Sem taxa extra" },
    { title: "Pague na Entrega", description1: "Segurança total", description2: "Só paga quando receber" },
    { title: "Garantia", description1: "Produto original", description2: "Satisfação garantida" }
  ],
  biddingStrategies: [
    "Recomendamos maximizar conversões para [PRODUTO] no [PAÍS]",
    "Use CPC manual para controlar custos de [PRODUTO]",
    "Target CPA ideal para vendas de [PRODUTO] no [PAÍS]"
  ],
  snippetValues: [
    "[PRODUTO] disponível no [PAÍS] com entrega rápida",
    "Oferta válida por tempo limitado no [PAÍS]",
    "Melhor preço de [PRODUTO] no [PAÍS]"
  ],
  promotions: [
    "Oferta Especial: [PRODUTO] por [PREÇO]",
    "Frete Grátis para todo o [PAÍS]",
    "Promoção Limitada no [PAÍS]"
  ],
  priceBlocks: [
    "A partir de [PREÇO]",
    "[PRODUTO] - [PREÇO]",
    "Apenas [PREÇO] no [PAÍS]"
  ]
};

export const generateCODCopies = async (
  product: string,
  price: string,
  country: string,
  languageCode: string,
  funnel: string
) => {
  console.log('🔍 Iniciando geração com tradução automática:', { product, price, country, languageCode, funnel });

  // Detectar idioma correto baseado no país
  const targetLanguage = countryLanguageMap[country] || idiomaForcado[country] || getLanguageFromCountry(country) || "en";
  
  console.log('🌐 Idioma detectado:', targetLanguage, 'para país:', country);

  try {
    // Função para substituir placeholders
    const replacePlaceholders = (text: string) => {
      return text
        .replace(/\[PRODUTO\]/g, product)
        .replace(/\[PREÇO\]/g, price)
        .replace(/\[PAÍS\]/g, country)
        .replace(/\[FUNIL\]/g, funnel);
    };

    // Traduzir títulos
    const translatedTitles = await Promise.all(
      copyTemplateBase.titles.map(async (title) => {
        const withPlaceholders = replacePlaceholders(title);
        return await translateText(withPlaceholders, targetLanguage);
      })
    );

    // Traduzir descrições
    const translatedDescriptions = await Promise.all(
      copyTemplateBase.descriptions.map(async (desc) => {
        const withPlaceholders = replacePlaceholders(desc);
        return await translateText(withPlaceholders, targetLanguage);
      })
    );

    // Traduzir USPs
    const translatedUsps = await Promise.all(
      copyTemplateBase.usps.map(async (usp) => {
        return await translateText(usp, targetLanguage);
      })
    );

    // Traduzir sitelinks
    const translatedSitelinks = await Promise.all(
      copyTemplateBase.sitelinks.map(async (sitelink) => {
        const title = await translateText(sitelink.title, targetLanguage);
        const desc1 = await translateText(replacePlaceholders(sitelink.description1), targetLanguage);
        const desc2 = await translateText(sitelink.description2, targetLanguage);
        
        return {
          title,
          description1: desc1,
          description2: desc2,
          url: "https://exemplo.com/comprar"
        };
      })
    );

    // Traduzir estratégia de lances
    const strategyText = replacePlaceholders(copyTemplateBase.biddingStrategies[0]);
    const translatedStrategy = await translateText(strategyText, targetLanguage);

    // Traduzir snippets
    const translatedSnippets = await Promise.all(
      copyTemplateBase.snippetValues.map(async (snippet) => {
        const withPlaceholders = replacePlaceholders(snippet);
        return await translateText(withPlaceholders, targetLanguage);
      })
    );

    // Traduzir promoções
    const translatedPromotions = await Promise.all(
      copyTemplateBase.promotions.map(async (promo) => {
        const withPlaceholders = replacePlaceholders(promo);
        return await translateText(withPlaceholders, targetLanguage);
      })
    );

    // Traduzir blocos de preço
    const translatedPriceBlocks = await Promise.all(
      copyTemplateBase.priceBlocks.map(async (block) => {
        const withPlaceholders = replacePlaceholders(block);
        return await translateText(withPlaceholders, targetLanguage);
      })
    );

    // Função para embaralhar e selecionar variações
    const getRandomVariations = <T>(array: T[], count: number = 30): T[] => {
      const shuffled = [...array].sort(() => Math.random() - 0.5);
      return shuffled.slice(0, Math.min(count, array.length));
    };

    const result = {
      titles: getRandomVariations(translatedTitles, 30),
      descriptions: getRandomVariations(translatedDescriptions, 30),
      usps: getRandomVariations(translatedUsps, 15),
      sitelinks: getRandomVariations(translatedSitelinks, 15),
      biddingStrategy: translatedStrategy,
      snippetValues: translatedSnippets,
      promotions: translatedPromotions,
      priceBlocks: translatedPriceBlocks
    };

    console.log('✅ Geração com tradução concluída:', {
      idioma: targetLanguage,
      titulos: result.titles.length,
      primeiroTitulo: result.titles[0]
    });

    return result;

  } catch (error) {
    console.error('❌ Erro na tradução automática:', error);
    
    // Fallback: usar sistema atual sem tradução
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

    const getRandomVariations = <T>(array: T[], count: number = 30): T[] => {
      const shuffled = [...array].sort(() => Math.random() - 0.5);
      return shuffled.slice(0, Math.min(count, array.length));
    };

    return {
      titles: getRandomVariations(formattedTitles, 30),
      descriptions: getRandomVariations(formattedDescriptions, 30),
      usps: getRandomVariations(formattedUsps, 15),
      sitelinks: getRandomVariations(formattedSitelinks, 15),
      biddingStrategy: formatTemplate(selectedTranslations.biddingStrategies[0], product, country),
      snippetValues: selectedTranslations.snippetValues.map(snippet => 
        formatTemplate(snippet, product, country)
      ),
      promotions: selectedTranslations.promotions.map(promo => 
        formatTemplate(promo, product, country)
      ),
      priceBlocks: selectedTranslations.priceBlocks.map(block => 
        formatTemplate(block, product, country)
      )
    };
  }
};
