

// Mapeamento completo de países para idiomas
export const countryToLanguage: { [key: string]: string } = {
  // Português
  'BR': 'pt', 'PT': 'pt', 'AO': 'pt', 'MZ': 'pt', 'CV': 'pt', 'GW': 'pt', 'ST': 'pt', 'TL': 'pt',
  
  // Espanhol
  'ES': 'es', 'MX': 'es', 'AR': 'es', 'CO': 'es', 'PE': 'es', 'VE': 'es', 'CL': 'es', 'EC': 'es',
  'GT': 'es', 'CU': 'es', 'BO': 'es', 'DO': 'es', 'HN': 'es', 'PY': 'es', 'SV': 'es', 'NI': 'es',
  'CR': 'es', 'PA': 'es', 'UY': 'es', 'GQ': 'es',
  
  // Inglês
  'US': 'en', 'GB': 'en', 'AU': 'en', 'NZ': 'en', 'IE': 'en', 'ZA': 'en', 'SG': 'en',
  'PH': 'en', 'NG': 'en', 'KE': 'en', 'GH': 'en', 'UG': 'en', 'TZ': 'en', 'ZM': 'en',
  'ZW': 'en', 'BW': 'en', 'MW': 'en', 'MT': 'en', 'CY': 'el', 'JM': 'en', 'TT': 'en', 'BB': 'en',
  'BS': 'en', 'BZ': 'en', 'GY': 'en', 'LR': 'en', 'SL': 'en', 'GM': 'en', 'FJ': 'en',
  
  // Francês
  'FR': 'fr', 'BE': 'fr', 'LU': 'fr', 'MC': 'fr', 'SN': 'fr', 'CI': 'fr', 'ML': 'fr', 'BF': 'fr',
  'NE': 'fr', 'GN': 'fr', 'TD': 'fr', 'CF': 'fr', 'CG': 'fr', 'CD': 'fr', 'GA': 'fr', 'CM': 'fr',
  'DJ': 'fr', 'KM': 'fr', 'MG': 'fr', 'MU': 'fr', 'SC': 'fr', 'VU': 'fr', 'NC': 'fr', 'PF': 'fr',
  'WF': 'fr', 'RE': 'fr', 'GP': 'fr', 'MQ': 'fr', 'GF': 'fr', 'PM': 'fr', 'YT': 'fr',
  
  // Alemão
  'DE': 'de', 'AT': 'de', 'LI': 'de',
  
  // Italiano
  'IT': 'it', 'SM': 'it', 'VA': 'it',
  
  // Japonês
  'JP': 'ja',
  
  // Chinês - CORRIGIDO DEFINITIVAMENTE
  'CN': 'zh', 'TW': 'zh', 'HK': 'zh', 'MO': 'zh',
  
  // Coreano
  'KR': 'ko',
  
  // Russo - CORRIGIDO DEFINITIVAMENTE
  'RU': 'ru', 'BY': 'be', 'KZ': 'ru', 'KG': 'ru',
  
  // Árabe - TODOS OS PAÍSES ÁRABES
  'SA': 'ar', 'AE': 'ar', 'EG': 'ar', 'JO': 'ar', 'LB': 'ar', 'SY': 'ar', 'IQ': 'ar', 'KW': 'ar',
  'QA': 'ar', 'BH': 'ar', 'OM': 'ar', 'YE': 'ar', 'LY': 'ar', 'TN': 'ar', 'DZ': 'ar', 'MA': 'ar',
  'SD': 'ar', 'SO': 'ar',
  
  // Hindi (Índia tem múltiplos idiomas, mas Hindi é predominante)
  'IN': 'hi',
  
  // Indonésio
  'ID': 'id',
  
  // Tailandês
  'TH': 'th',
  
  // Vietnamita - CORRIGIDO
  'VN': 'vi',
  
  // Turco
  'TR': 'tr',
  
  // Holandês - CORRIGIDO DEFINITIVAMENTE
  'NL': 'nl', 'SR': 'nl',
  
  // Polonês - CORRIGIDO DEFINITIVAMENTE
  'PL': 'pl',
  
  // Sueco - CORRIGIDO DEFINITIVAMENTE
  'SE': 'sv',
  
  // Norueguês - CORRIGIDO DEFINITIVAMENTE
  'NO': 'no',
  
  // Dinamarquês - CORRIGIDO DEFINITIVAMENTE
  'DK': 'da',
  
  // Finlandês - CORRIGIDO DEFINITIVAMENTE
  'FI': 'fi',
  
  // Grego - CORRIGIDO
  'GR': 'el',
  
  // Húngaro - CORRIGIDO
  'HU': 'hu',
  
  // Tcheco - CORRIGIDO
  'CZ': 'cs',
  
  // Eslovaco - CORRIGIDO
  'SK': 'sk',
  
  // Romeno - CORRIGIDO
  'RO': 'ro',
  
  // Búlgaro
  'BG': 'bg',
  
  // Croata - CORRIGIDO
  'HR': 'hr',
  
  // Esloveno
  'SI': 'sl',
  
  // Sérvio
  'RS': 'sr',
  
  // Lituano - CORRIGIDO
  'LT': 'lt',
  
  // Letão - CORRIGIDO
  'LV': 'lv',
  
  // Estoniano - CORRIGIDO
  'EE': 'et',
  
  // Ucraniano - CORRIGIDO
  'UA': 'uk',
  
  // Hebraico - CORRIGIDO
  'IL': 'he',
  
  // Persa
  'IR': 'fa', 'AF': 'fa',
  
  // Urdu
  'PK': 'ur',
  
  // Bengali
  'BD': 'bn',
  
  // Malaio - CORRIGIDO
  'MY': 'ms', 'BN': 'ms',
  
  // Filipino/Tagalo - CORRIGIDO
  'PH': 'tl',
  
  // Mongol - CORRIGIDO
  'MN': 'mn',
  
  // Swahili
  'SW': 'sw',
  
  // Países multilíngues - priorizando idioma principal
  'CA': 'en', // Canadá - inglês como principal
  'CH': 'de'  // Suíça - alemão como principal
};

export const getLanguageFromCountry = (countryCode: string): string => {
  const upperCountryCode = countryCode.toUpperCase();
  console.log('Detectando idioma para país:', upperCountryCode, 'Resultado:', countryToLanguage[upperCountryCode] || 'en');
  return countryToLanguage[upperCountryCode] || 'en'; // fallback para inglês
};

// Mapeamento de nomes de países para códigos de idioma - ATUALIZADO COMPLETO
export const countryNameToLanguage: { [key: string]: string } = {
  // Português
  "Brasil": "pt", "Portugal": "pt", "Angola": "pt", "Moçambique": "pt",
  
  // Inglês
  "Estados Unidos": "en", "United States": "en", "Reino Unido": "en", "United Kingdom": "en", 
  "Austrália": "en", "Australia": "en", "Canadá": "en", "Canada": "en", "África do Sul": "en", "South Africa": "en",
  
  // Francês
  "França": "fr", "France": "fr", "Bélgica": "fr", "België": "fr", "Suíça": "de", "Schweiz": "de", "Luxemburgo": "fr",
  
  // Alemão
  "Alemanha": "de", "Deutschland": "de", "Áustria": "de", "Österreich": "de", "Liechtenstein": "de",
  
  // Italiano
  "Itália": "it", "Italia": "it", "São Marino": "it", "Vaticano": "it",
  
  // Espanhol
  "Espanha": "es", "España": "es", "México": "es", "Argentina": "es", "Colômbia": "es", "Colombia": "es",
  "Peru": "es", "Perú": "es", "Venezuela": "es", "Chile": "es", "Equador": "es", "Ecuador": "es",
  "Honduras": "es",
  
  // Japonês
  "Japão": "ja", "日本": "ja",
  
  // Chinês - CORRIGIDO DEFINITIVAMENTE
  "China": "zh", "中国": "zh", "Taiwan": "zh", "台灣": "zh", "Hong Kong": "zh", "香港": "zh",
  
  // Coreano
  "Coreia do Sul": "ko", "대한민국": "ko",
  
  // Russo - CORRIGIDO DEFINITIVAMENTE
  "Rússia": "ru", "Россия": "ru", "Bielorrússia": "be", "Беларусь": "be", "Cazaquistão": "ru",
  
  // Árabe - TODOS CORRIGIDOS
  "Arábia Saudita": "ar", "المملكة العربية السعودية": "ar", "Emirados Árabes": "ar", "الإمارات العربية المتحدة": "ar",
  "Egito": "ar", "مصر": "ar", "Marrocos": "ar", "المغرب": "ar", "Catar": "ar", "Kuwait": "ar", "Tunísia": "ar",
  
  // Hindi
  "Índia": "hi", "भारत": "hi",
  
  // Indonésio
  "Indonésia": "id", "Indonesia": "id",
  
  // Tailandês
  "Tailândia": "th", "ประเทศไทย": "th",
  
  // Vietnamita - CORRIGIDO
  "Vietnã": "vi", "Việt Nam": "vi",
  
  // Turco
  "Turquia": "tr", "Türkiye": "tr",
  
  // Holandês - CORRIGIDO DEFINITIVAMENTE
  "Holanda": "nl", "Nederland": "nl", "Países Baixos": "nl",
  
  // Polonês - CORRIGIDO DEFINITIVAMENTE
  "Polônia": "pl", "Polska": "pl",
  
  // Sueco - CORRIGIDO DEFINITIVAMENTE
  "Suécia": "sv", "Sverige": "sv",
  
  // Norueguês - CORRIGIDO DEFINITIVAMENTE
  "Noruega": "no", "Norge": "no",
  
  // Dinamarquês - CORRIGIDO DEFINITIVAMENTE
  "Dinamarca": "da", "Danmark": "da",
  
  // Finlandês - CORRIGIDO DEFINITIVAMENTE
  "Finlândia": "fi", "Suomi": "fi",
  
  // Outros idiomas - TODOS CORRIGIDOS
  "Grécia": "el", "Ελλάδα": "el",
  "Hungria": "hu", "Magyarország": "hu",
  "República Tcheca": "cs", "Česko": "cs",
  "Eslováquia": "sk", "Slovensko": "sk",
  "Romênia": "ro", "România": "ro",
  "Bulgária": "bg", "България": "bg",
  "Croácia": "hr", "Hrvatska": "hr",
  "Eslovênia": "sl", "Slovenija": "sl",
  "Sérvia": "sr", "Србија": "sr",
  "Lituânia": "lt", "Lietuva": "lt",
  "Letônia": "lv", "Latvija": "lv",
  "Estônia": "et", "Eesti": "et",
  "Ucrânia": "uk", "Україна": "uk",
  "Israel": "he", "ישראל": "he",
  "Irã": "fa", "Afeganistão": "fa",
  "Paquistão": "ur", "پاکستان": "ur",
  "Bangladesh": "bn", "বাংলাদেশ": "bn",
  "Malásia": "ms", "Malaysia": "ms",
  "Filipinas": "tl", "Philippines": "tl",
  "Mongólia": "mn", "Mongolia": "mn"
};

// Estratégias de lance variadas
export const biddingStrategies = [
  "Maximizar conversões",
  "CPA desejado",
  "ROAS desejado", 
  "Maximizar cliques",
  "Lance manual",
  "Maximizar valor de conversão",
  "CPM otimizado",
  "CPA melhorado",
  "Custo por visualização",
  "Conversões de alta intenção"
];

export const getLanguageFromCountryName = (countryName: string): string => {
  console.log('Buscando idioma para país:', countryName);
  const language = countryNameToLanguage[countryName];
  console.log('Idioma encontrado:', language);
  return language || 'en';
};

