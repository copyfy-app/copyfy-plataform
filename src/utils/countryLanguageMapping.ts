
// Mapeamento completo de países para idiomas
export const countryToLanguage: { [key: string]: string } = {
  // Português
  'BR': 'pt', 'PT': 'pt', 'AO': 'pt', 'MZ': 'pt', 'CV': 'pt', 'GW': 'pt', 'ST': 'pt', 'TL': 'pt',
  
  // Espanhol
  'ES': 'es', 'MX': 'es', 'AR': 'es', 'CO': 'es', 'PE': 'es', 'VE': 'es', 'CL': 'es', 'EC': 'es',
  'GT': 'es', 'CU': 'es', 'BO': 'es', 'DO': 'es', 'HN': 'es', 'PY': 'es', 'SV': 'es', 'NI': 'es',
  'CR': 'es', 'PA': 'es', 'UY': 'es', 'GQ': 'es',
  
  // Inglês
  'US': 'en', 'GB': 'en', 'AU': 'en', 'NZ': 'en', 'IE': 'en', 'ZA': 'en', 'IN': 'en', 'SG': 'en',
  'MY': 'en', 'PH': 'en', 'NG': 'en', 'KE': 'en', 'GH': 'en', 'UG': 'en', 'TZ': 'en', 'ZM': 'en',
  'ZW': 'en', 'BW': 'en', 'MW': 'en', 'MT': 'en', 'CY': 'en', 'JM': 'en', 'TT': 'en', 'BB': 'en',
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
  'GR': 'el',
  
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
  
  // Swahili
  'KE': 'sw', 'TZ': 'sw', 'UG': 'sw',
  
  // Países multilíngues - priorizando idioma principal
  'CA': 'en', // Canadá - inglês como principal
  'CH': 'de'  // Suíça - alemão como principal
};

export const getLanguageFromCountry = (countryCode: string): string => {
  const upperCountryCode = countryCode.toUpperCase();
  return countryToLanguage[upperCountryCode] || 'en'; // fallback para inglês
};
