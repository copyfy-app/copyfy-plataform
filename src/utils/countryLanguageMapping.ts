
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
  'NG': 'en', 'KE': 'en', 'GH': 'en', 'UG': 'en', 'TZ': 'en', 'ZM': 'en',
  'ZW': 'en', 'BW': 'en', 'MW': 'en', 'MT': 'en', 'JM': 'en', 'TT': 'en', 'BB': 'en',
  'BS': 'en', 'BZ': 'en', 'GY': 'en', 'LR': 'en', 'SL': 'en', 'GM': 'en', 'FJ': 'en',
  
  // Francês
  'FR': 'fr', 'BE': 'fr', 'LU': 'fr', 'MC': 'fr', 'SN': 'fr', 'CI': 'fr', 'ML': 'fr', 'BF': 'fr',
  'NE': 'fr', 'GN': 'fr', 'TD': 'fr', 'CF': 'fr', 'CG': 'fr', 'CD': 'fr', 'GA': 'fr', 'CM': 'fr',
  'DJ': 'fr', 'KM': 'fr', 'MG': 'fr', 'MU': 'fr', 'SC': 'fr', 'VU': 'fr', 'NC': 'fr', 'PF': 'fr',
  'WF': 'fr', 'RE': 'fr', 'GP': 'fr', 'MQ': 'fr', 'GF': 'fr', 'PM': 'fr', 'YT': 'fr',
  
  // Alemão
  'DE': 'de', 'AT': 'de', 'LI': 'de', 'CH': 'de',
  
  // Italiano
  'IT': 'it', 'SM': 'it', 'VA': 'it',
  
  // Japonês
  'JP': 'ja',
  
  // Chinês
  'CN': 'zh', 'TW': 'zh', 'HK': 'zh', 'MO': 'zh',
  
  // Coreano
  'KR': 'ko',
  
  // Russo
  'RU': 'ru', 'BY': 'ru', 'KZ': 'ru', 'KG': 'ru',
  
  // Árabe
  'SA': 'ar', 'AE': 'ar', 'EG': 'ar', 'JO': 'ar', 'LB': 'ar', 'SY': 'ar', 'IQ': 'ar', 'KW': 'ar',
  'QA': 'ar', 'BH': 'ar', 'OM': 'ar', 'YE': 'ar', 'LY': 'ar', 'TN': 'ar', 'DZ': 'ar', 'MA': 'ar',
  'SD': 'ar', 'SO': 'ar',
  
  // Hindi
  'IN': 'hi',
  
  // Indonésio
  'ID': 'id',
  
  // Tailandês
  'TH': 'th',
  
  // Vietnamita
  'VN': 'vi',
  
  // Turco
  'TR': 'tr',
  
  // Holandês
  'NL': 'nl', 'SR': 'nl',
  
  // Polonês
  'PL': 'pl',
  
  // Sueco
  'SE': 'sv',
  
  // Norueguês
  'NO': 'no',
  
  // Dinamarquês
  'DK': 'da',
  
  // Finlandês
  'FI': 'fi',
  
  // Grego
  'GR': 'el', 'CY': 'el',
  
  // Húngaro
  'HU': 'hu',
  
  // Tcheco
  'CZ': 'cs',
  
  // Eslovaco
  'SK': 'sk',
  
  // Romeno
  'RO': 'ro',
  
  // Búlgaro
  'BG': 'bg',
  
  // Croata
  'HR': 'hr',
  
  // Esloveno
  'SI': 'sl',
  
  // Sérvio
  'RS': 'sr',
  
  // Lituano
  'LT': 'lt',
  
  // Letão
  'LV': 'lv',
  
  // Estoniano
  'EE': 'et',
  
  // Ucraniano
  'UA': 'uk',
  
  // Hebraico
  'IL': 'he',
  
  // Persa
  'IR': 'fa', 'AF': 'fa',
  
  // Urdu
  'PK': 'ur',
  
  // Bengali
  'BD': 'bn',
  
  // Malaio
  'MY': 'ms', 'BN': 'ms',
  
  // Filipino/Tagalo
  'PH': 'tl',
  
  // Mongol
  'MN': 'mn',
  
  // Países multilíngues - priorizando idioma principal
  'CA': 'en' // Canadá - inglês como principal
};

export const getLanguageFromCountry = (countryCode: string): string => {
  const upperCountryCode = countryCode.toUpperCase();
  const language = countryToLanguage[upperCountryCode] || 'en';
  
  console.log('Detectando idioma para país:', upperCountryCode, 'Resultado:', language);
  return language;
};

// Mapeamento de nomes de países para códigos de idioma
export const countryNameToLanguage: { [key: string]: string } = {
  // Português
  "Brasil": "pt", "Portugal": "pt", "Angola": "pt", "Moçambique": "pt",
  
  // Inglês
  "Estados Unidos": "en", "United States": "en", "Reino Unido": "en", "United Kingdom": "en", 
  "Austrália": "en", "Australia": "en", "Canadá": "en", "Canada": "en", "África do Sul": "en", "South Africa": "en",
  
  // Francês
  "França": "fr", "France": "fr", "Bélgica": "fr", "België": "fr", "Suíça": "fr", "Schweiz": "fr", "Luxemburgo": "fr",
  
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
  
  // Chinês
  "China": "zh", "中国": "zh", "Taiwan": "zh", "台灣": "zh", "Hong Kong": "zh", "香港": "zh",
  
  // Coreano
  "Coreia do Sul": "ko", "대한민국": "ko",
  
  // Russo
  "Rússia": "ru", "Россия": "ru", "Bielorrússia": "ru", "Беларусь": "ru", "Cazaquistão": "ru",
  
  // Árabe
  "Arábia Saudita": "ar", "المملكة العربية السعودية": "ar", "Emirados Árabes": "ar", "الإمارات العربية المتحدة": "ar",
  "Egito": "ar", "مصر": "ar", "Marrocos": "ar", "المغرب": "ar", "Catar": "ar", "Kuwait": "ar", "Tunísia": "ar",
  
  // Hindi
  "Índia": "hi", "भारत": "hi",
  
  // Indonésio
  "Indonésia": "id", "Indonesia": "id",
  
  // Tailandês
  "Tailândia": "th", "ประเทศไทย": "th",
  
  // Vietnamita
  "Vietnã": "vi", "Việt Nam": "vi",
  
  // Turco
  "Turquia": "tr", "Türkiye": "tr",
  
  // Holandês
  "Holanda": "nl", "Nederland": "nl", "Países Baixos": "nl",
  
  // Polonês
  "Polônia": "pl", "Polska": "pl",
  
  // Sueco
  "Suécia": "sv", "Sverige": "sv",
  
  // Norueguês
  "Noruega": "no", "Norge": "no",
  
  // Dinamarquês
  "Dinamarca": "da", "Danmark": "da",
  
  // Finlandês
  "Finlândia": "fi", "Suomi": "fi",
  
  // Outros idiomas
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

export const getLanguageFromCountryName = (countryName: string): string => {
  console.log('Buscando idioma para país:', countryName);
  const language = countryNameToLanguage[countryName] || 'en';
  console.log('Idioma encontrado:', language);
  return language;
};
