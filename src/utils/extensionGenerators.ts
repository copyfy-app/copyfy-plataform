
import { countries } from '../components/data/Countries';
import { getLanguageFromCountry } from './countryLanguageMapping';

export const generateStructuredSnippet = (product: string, country: string): string[] => {
  const countryData = countries.find(c => c.value === country || c.name === country);
  const countryCode = countryData ? countryData.value : country;
  const languageCode = getLanguageFromCountry(countryCode);
  
  // Generate Copyfy SaaS service snippets focused on Google Ads & COD
  let snippetVariations: string[] = [];
  
  switch (languageCode) {
    case 'es':
      snippetVariations = [
        "Generación automática de campañas, Traducción a más de 100 países, Copywriting COD optimizado, Templates de respuesta directa",
        "Plataforma SaaS de Google Ads, Automatización de campañas, Copy especializado en afiliados, Estrategias de pago contra entrega",
        "Herramientas de copywriting, Campañas multiidioma, Optimización para COD, Plantillas de alta conversión",
        "Software de marketing digital, Generación de anuncios automática, Copy persuasivo, Estrategias de ventas directas",
        "Automatización publicitaria, Traducción instantánea, Templates COD, Copywriting de respuesta directa",
        "Plataforma de anuncios, Generación de contenido, Estrategias de afiliados, Optimización de conversiones",
        "SaaS de Google Ads, Copywriting automático, Templates multipaís, Estrategias de pago diferido",
        "Herramientas de conversión, Automatización de copy, Campañas internacionales, Optimización COD"
      ];
      break;
    case 'en':
      snippetVariations = [
        "Automated campaign generation, Translation to 100+ countries, COD-optimized copywriting, Direct response templates",
        "Google Ads SaaS platform, Campaign automation, Affiliate-focused copy, Cash on delivery strategies",
        "Copywriting tools, Multi-language campaigns, COD optimization, High-converting templates",
        "Digital marketing software, Automated ad generation, Persuasive copy, Direct sales strategies",
        "Advertising automation, Instant translation, COD templates, Direct response copywriting",
        "Ad platform solution, Content generation, Affiliate strategies, Conversion optimization",
        "Google Ads SaaS, Automated copywriting, Multi-country templates, Deferred payment strategies",
        "Conversion tools, Copy automation, International campaigns, COD optimization"
      ];
      break;
    case 'fr':
      snippetVariations = [
        "Génération automatique de campagnes, Traduction dans plus de 100 pays, Copywriting optimisé COD, Modèles de réponse directe",
        "Plateforme SaaS Google Ads, Automatisation de campagnes, Copy axé affiliés, Stratégies paiement à la livraison",
        "Outils de copywriting, Campagnes multilingues, Optimisation COD, Modèles haute conversion",
        "Logiciel marketing digital, Génération d'annonces automatique, Copy persuasif, Stratégies vente directe",
        "Automatisation publicitaire, Traduction instantanée, Modèles COD, Copywriting réponse directe",
        "Solution plateforme pub, Génération contenu, Stratégies affiliés, Optimisation conversions",
        "SaaS Google Ads, Copywriting automatique, Modèles multi-pays, Stratégies paiement différé",
        "Outils conversion, Automatisation copy, Campagnes internationales, Optimisation COD"
      ];
      break;
    case 'de':
      snippetVariations = [
        "Automatische Kampagnenerstellung, Übersetzung in 100+ Länder, COD-optimiertes Copywriting, Direct Response Vorlagen",
        "Google Ads SaaS Plattform, Kampagnen-Automatisierung, Affiliate-fokussiertes Copy, Nachnahme-Strategien",
        "Copywriting-Tools, Mehrsprachige Kampagnen, COD-Optimierung, Hochkonvertierende Vorlagen",
        "Digital Marketing Software, Automatische Anzeigenerstellung, Überzeugender Copy, Direktverkaufsstrategien",
        "Werbeautomatisierung, Sofortübersetzung, COD-Vorlagen, Direct Response Copywriting",
        "Anzeigenplattform-Lösung, Content-Generierung, Affiliate-Strategien, Conversion-Optimierung",
        "Google Ads SaaS, Automatisiertes Copywriting, Multi-Land-Vorlagen, Zahlungsaufschub-Strategien",
        "Conversion-Tools, Copy-Automatisierung, Internationale Kampagnen, COD-Optimierung"
      ];
      break;
    case 'it':
      snippetVariations = [
        "Generazione automatica campagne, Traduzione in oltre 100 paesi, Copywriting ottimizzato COD, Template risposta diretta",
        "Piattaforma SaaS Google Ads, Automazione campagne, Copy focalizzato affiliati, Strategie pagamento alla consegna",
        "Strumenti copywriting, Campagne multilingue, Ottimizzazione COD, Template alta conversione",
        "Software marketing digitale, Generazione annunci automatica, Copy persuasivo, Strategie vendita diretta",
        "Automazione pubblicitaria, Traduzione istantanea, Template COD, Copywriting risposta diretta",
        "Soluzione piattaforma annunci, Generazione contenuti, Strategie affiliate, Ottimizzazione conversioni",
        "SaaS Google Ads, Copywriting automatico, Template multi-paese, Strategie pagamento differito",
        "Strumenti conversione, Automazione copy, Campagne internazionali, Ottimizzazione COD"
      ];
      break;
    case 'ja':
      snippetVariations = [
        "自動キャンペーン生成, 100ヶ国以上への翻訳, COD最適化コピーライティング, ダイレクトレスポンステンプレート",
        "Google広告SaaSプラットフォーム, キャンペーン自動化, アフィリエイト重視コピー, 代金引換戦略",
        "コピーライティングツール, 多言語キャンペーン, COD最適化, 高コンバージョンテンプレート",
        "デジタルマーケティングソフトウェア, 自動広告生成, 説得力のあるコピー, 直接販売戦略",
        "広告自動化, 即時翻訳, CODテンプレート, ダイレクトレスポンスコピーライティング",
        "広告プラットフォームソリューション, コンテンツ生成, アフィリエイト戦略, コンバージョン最適化",
        "Google広告SaaS, 自動コピーライティング, マルチカントリーテンプレート, 支払い延期戦略",
        "コンバージョンツール, コピー自動化, 国際キャンペーン, COD最適化"
      ];
      break;
    case 'zh':
      snippetVariations = [
        "自动生成活动, 翻译至100+国家, COD优化文案, 直接回应模板",
        "Google广告SaaS平台, 活动自动化, 联盟专注文案, 货到付款策略",
        "文案工具, 多语言活动, COD优化, 高转换模板",
        "数字营销软件, 自动广告生成, 说服性文案, 直销策略",
        "广告自动化, 即时翻译, COD模板, 直接回应文案",
        "广告平台解决方案, 内容生成, 联盟策略, 转换优化",
        "Google广告SaaS, 自动文案, 多国模板, 延期付款策略",
        "转换工具, 文案自动化, 国际活动, COD优化"
      ];
      break;
    case 'ar':
      snippetVariations = [
        "إنشاء الحملات التلقائي, ترجمة لأكثر من 100 دولة, كتابة الإعلانات المحسنة للدفع عند الاستلام, قوالب الاستجابة المباشرة",
        "منصة جوجل أدز SaaS, أتمتة الحملات, نسخ مركزة على الشركاء, استراتيجيات الدفع عند الاستلام",
        "أدوات كتابة الإعلانات, حملات متعددة اللغات, تحسين الدفع عند الاستلام, قوالب عالية التحويل",
        "برنامج التسويق الرقمي, إنشاء الإعلانات التلقائي, نسخ مقنعة, استراتيجيات البيع المباشر",
        "أتمتة الإعلان, ترجمة فورية, قوالب الدفع عند الاستلام, كتابة الاستجابة المباشرة",
        "حل منصة الإعلان, إنشاء المحتوى, استراتيجيات الشركاء, تحسين التحويل",
        "جوجل أدز SaaS, كتابة الإعلانات التلقائية, قوالب متعددة البلدان, استراتيجيات الدفع المؤجل",
        "أدوات التحويل, أتمتة النسخ, حملات دولية, تحسين الدفع عند الاستلام"
      ];
      break;
    case 'hi':
      snippetVariations = [
        "स्वचालित अभियान निर्माण, 100+ देशों में अनुवाद, COD-अनुकूलित कॉपी राइटिंग, प्रत्यक्ष प्रतिक्रिया टेम्प्लेट",
        "Google Ads SaaS प्लेटफॉर्म, अभियान स्वचालन, सहयोगी-केंद्रित कॉपी, डिलीवरी पर भुगतान रणनीतियां",
        "कॉपी राइटिंग उपकरण, बहुभाषी अभियान, COD अनुकूलन, उच्च रूपांतरण टेम्प्लेट",
        "डिजिटल मार्केटिंग सॉफ्टवेयर, स्वचालित विज्ञापन निर्माण, प्रेरक कॉपी, प्रत्यक्ष बिक्री रणनीतियां",
        "विज्ञापन स्वचालन, तत्काल अनुवाद, COD टेम्प्लेट, प्रत्यक्ष प्रतिक्रिया कॉपी राइटिंग",
        "विज्ञापन प्लेटफॉर्म समाधान, सामग्री निर्माण, सहयोगी रणनीतियां, रूपांतरण अनुकूलन",
        "Google Ads SaaS, स्वचालित कॉपी राइटिंग, बहु-देश टेम्प्लेट, स्थगित भुगतान रणनीतियां",
        "रूपांतरण उपकरण, कॉपी स्वचालन, अंतर्राष्ट्रीय अभियान, COD अनुकूलन"
      ];
      break;
    case 'tr':
      snippetVariations = [
        "Otomatik kampanya oluşturma, 100+ ülkeye çeviri, COD-optimize metin yazımı, Doğrudan yanıt şablonları",
        "Google Ads SaaS platformu, Kampanya otomasyonu, Ortak odaklı metin, Kapıda ödeme stratejileri",
        "Metin yazımı araçları, Çok dilli kampanyalar, COD optimizasyonu, Yüksek dönüşüm şablonları",
        "Dijital pazarlama yazılımı, Otomatik reklam oluşturma, İkna edici metin, Doğrudan satış stratejileri",
        "Reklam otomasyonu, Anında çeviri, COD şablonları, Doğrudan yanıt metin yazımı",
        "Reklam platformu çözümü, İçerik oluşturma, Ortak stratejileri, Dönüşüm optimizasyonu",
        "Google Ads SaaS, Otomatik metin yazımı, Çok ülke şablonları, Ertelenmiş ödeme stratejileri",
        "Dönüşüm araçları, Metin otomasyonu, Uluslararası kampanyalar, COD optimizasyonu"
      ];
      break;
    case 'ru':
      snippetVariations = [
        "Автоматическое создание кампаний, Перевод на 100+ стран, COD-оптимизированный копирайтинг, Шаблоны прямого отклика",
        "SaaS платформа Google Ads, Автоматизация кампаний, Партнерский копирайтинг, Стратегии наложенного платежа",
        "Инструменты копирайтинга, Многоязычные кампании, COD оптимизация, Высококонвертирующие шаблоны",
        "Программное обеспечение цифрового маркетинга, Автоматическое создание объявлений, Убедительный копирайтинг, Стратегии прямых продаж",
        "Автоматизация рекламы, Мгновенный перевод, COD шаблоны, Копирайтинг прямого отклика",
        "Решение рекламной платформы, Создание контента, Партнерские стратегии, Оптимизация конверсий",
        "Google Ads SaaS, Автоматический копирайтинг, Многострановые шаблоны, Стратегии отложенной оплаты",
        "Инструменты конверсии, Автоматизация копирайтинга, Международные кампании, COD оптимизация"
      ];
      break;
    default:
      snippetVariations = [
        "Geração automática de campanhas, Tradução para mais de 100 países, Copywriting otimizado para COD, Templates de resposta direta",
        "Plataforma SaaS Google Ads, Automação de campanhas, Copy focado em afiliados, Estratégias de pagamento na entrega",
        "Ferramentas de copywriting, Campanhas multilíngues, Otimização COD, Templates de alta conversão",
        "Software de marketing digital, Geração automática de anúncios, Copy persuasivo, Estratégias de venda direta",
        "Automação publicitária, Tradução instantânea, Templates COD, Copywriting de resposta direta",
        "Solução de plataforma de anúncios, Geração de conteúdo, Estratégias de afiliados, Otimização de conversões",
        "Google Ads SaaS, Copywriting automatizado, Templates multi-país, Estratégias de pagamento diferido",
        "Ferramentas de conversão, Automação de copy, Campanhas internacionais, Otimização COD"
      ];
  }
  
  return snippetVariations.map(values => `Categoria: Serviços SaaS\nValores: ${values}`);
};

export const generatePromotionExtension = (product: string, country: string): string[] => {
  const countryData = countries.find(c => c.value === country || c.name === country);
  const countryCode = countryData ? countryData.value : country;
  const countryName = countryData ? countryData.name : country;
  const languageCode = getLanguageFromCountry(countryCode);
  let promotionVariations: string[][] = [];
  
  switch (languageCode) {
    case 'es':
      promotionVariations = [
        [`Prueba gratuita de 7 días de Copyfy`, `Genera campañas ilimitadas`, `Soporte 24/7 incluido`],
        [`50% descuento primer mes`, `Más de 100 idiomas disponibles`, `Templates COD pre-construidos`],
        [`Acceso instantáneo a Copyfy`, `Cancela cuando quieras`, `Sin compromiso a largo plazo`],
        [`Demo personalizada gratuita`, `Integración con Google Ads`, `Resultados garantizados`],
        [`Plan empresarial disponible`, `API completa incluida`, `Traducciones automáticas`],
        [`Oferta por tiempo limitado`, `Onboarding personalizado`, `Campañas de alta conversión`],
        [`ROI garantizado o reembolso`, `Optimización automática`, `Reportes en tiempo real`],
        [`Especialistas en marketing incluidos`, `Templates probados`, `Soporte multicanal`]
      ];
      break;
    case 'en':
      promotionVariations = [
        [`7-day free trial of Copyfy`, `Generate unlimited campaigns`, `24/7 support included`],
        [`50% off first month`, `100+ languages available`, `Pre-built COD templates`],
        [`Instant access to Copyfy`, `Cancel anytime`, `No long-term commitment`],
        [`Free personalized demo`, `Google Ads integration`, `Guaranteed results`],
        [`Enterprise plan available`, `Full API included`, `Automatic translations`],
        [`Limited time offer`, `Custom onboarding`, `High-converting campaigns`],
        [`ROI guaranteed or refund`, `Auto-optimization`, `Real-time reporting`],
        [`Marketing specialists included`, `Proven templates`, `Multi-channel support`]
      ];
      break;
    case 'fr':
      promotionVariations = [
        [`Essai gratuit de 7 jours Copyfy`, `Générez des campagnes illimitées`, `Support 24/7 inclus`],
        [`50% de réduction premier mois`, `Plus de 100 langues disponibles`, `Templates COD pré-construits`],
        [`Accès instantané à Copyfy`, `Annulez à tout moment`, `Aucun engagement long terme`],
        [`Démo personnalisée gratuite`, `Intégration Google Ads`, `Résultats garantis`],
        [`Plan entreprise disponible`, `API complète incluse`, `Traductions automatiques`],
        [`Offre limitée dans le temps`, `Intégration personnalisée`, `Campagnes haute conversion`],
        [`ROI garanti ou remboursé`, `Optimisation automatique`, `Rapports temps réel`],
        [`Spécialistes marketing inclus`, `Templates éprouvés`, `Support multi-canal`]
      ];
      break;
    case 'de':
      promotionVariations = [
        [`7 Tage kostenlose Testversion Copyfy`, `Unbegrenzte Kampagnen generieren`, `24/7 Support inklusive`],
        [`50% Rabatt erster Monat`, `Über 100 Sprachen verfügbar`, `Vorgefertigte COD-Vorlagen`],
        [`Sofortiger Zugang zu Copyfy`, `Jederzeit kündbar`, `Keine langfristige Bindung`],
        [`Kostenlose personalisierte Demo`, `Google Ads Integration`, `Garantierte Ergebnisse`],
        [`Enterprise-Plan verfügbar`, `Vollständige API inklusive`, `Automatische Übersetzungen`],
        [`Zeitlich begrenztes Angebot`, `Individuelles Onboarding`, `Hochkonvertierende Kampagnen`],
        [`ROI garantiert oder Geld zurück`, `Auto-Optimierung`, `Echtzeit-Berichte`],
        [`Marketing-Spezialisten inklusive`, `Bewährte Vorlagen`, `Multi-Channel-Support`]
      ];
      break;
    case 'it':
      promotionVariations = [
        [`Prova gratuita di 7 giorni Copyfy`, `Genera campagne illimitate`, `Supporto 24/7 incluso`],
        [`50% sconto primo mese`, `Oltre 100 lingue disponibili`, `Template COD pre-costruiti`],
        [`Accesso istantaneo a Copyfy`, `Cancella quando vuoi`, `Nessun impegno a lungo termine`],
        [`Demo personalizzata gratuita`, `Integrazione Google Ads`, `Risultati garantiti`],
        [`Piano enterprise disponibile`, `API completa inclusa`, `Traduzioni automatiche`],
        [`Offerta a tempo limitato`, `Onboarding personalizzato`, `Campagne ad alta conversione`],
        [`ROI garantito o rimborso`, `Ottimizzazione automatica`, `Report in tempo reale`],
        [`Specialisti marketing inclusi`, `Template collaudati`, `Supporto multicanale`]
      ];
      break;
    case 'ja':
      promotionVariations = [
        [`Copyfy 7日間無料トライアル`, `無制限キャンペーン生成`, `24/7サポート付き`],
        [`初月50%オフ`, `100以上の言語対応`, `CODテンプレート内蔵`],
        [`Copyfyへの即時アクセス`, `いつでもキャンセル可能`, `長期契約不要`],
        [`無料パーソナライズドデモ`, `Google Ads統合`, `結果保証`],
        [`エンタープライズプラン利用可能`, `完全API付き`, `自動翻訳`],
        [`期間限定オファー`, `カスタムオンボーディング`, `高コンバージョンキャンペーン`],
        [`ROI保証または返金`, `自動最適化`, `リアルタイムレポート`],
        [`マーケティング専門家付き`, `実証済みテンプレート`, `マルチチャネルサポート`]
      ];
      break;
    case 'zh':
      promotionVariations = [
        [`Copyfy 7天免费试用`, `生成无限制活动`, `24/7支持包含`],
        [`首月50%折扣`, `支持100+语言`, `预构建COD模板`],
        [`即时访问Copyfy`, `随时取消`, `无长期承诺`],
        [`免费个性化演示`, `Google Ads集成`, `保证结果`],
        [`企业计划可用`, `完整API包含`, `自动翻译`],
        [`限时优惠`, `定制入门`, `高转换活动`],
        [`ROI保证或退款`, `自动优化`, `实时报告`],
        [`包含营销专家`, `经验证模板`, `多渠道支持`]
      ];
      break;
    case 'ar':
      promotionVariations = [
        [`تجربة مجانية 7 أيام من Copyfy`, `إنشاء حملات غير محدودة`, `دعم 24/7 مشمول`],
        [`خصم 50% على الشهر الأول`, `أكثر من 100 لغة متاحة`, `قوالب COD مبنية مسبقاً`],
        [`وصول فوري إلى Copyfy`, `إلغاء في أي وقت`, `لا التزام طويل المدى`],
        [`عرض توضيحي مخصص مجاني`, `تكامل Google Ads`, `نتائج مضمونة`],
        [`خطة المؤسسة متاحة`, `API كامل مشمول`, `ترجمات تلقائية`],
        [`عرض لفترة محدودة`, `إعداد مخصص`, `حملات عالية التحويل`],
        [`عائد استثمار مضمون أو استرداد`, `تحسين تلقائي`, `تقارير فورية`],
        [`متخصصو تسويق مشمولون`, `قوالب مثبتة`, `دعم متعدد القنوات`]
      ];
      break;
    case 'hi':
      promotionVariations = [
        [`Copyfy का 7-दिन निःशुल्क परीक्षण`, `असीमित अभियान उत्पन्न करें`, `24/7 सहायता शामिल`],
        [`पहले महीने 50% छूट`, `100+ भाषाएं उपलब्ध`, `पूर्व-निर्मित COD टेम्प्लेट`],
        [`Copyfy तक तत्काल पहुंच`, `कभी भी रद्द करें`, `कोई दीर्घकालिक प्रतिबद्धता नहीं`],
        [`निःशुल्क व्यक्तिगत डेमो`, `Google Ads एकीकरण`, `गारंटीकृत परिणाम`],
        [`एंटरप्राइज़ योजना उपलब्ध`, `पूर्ण API शामिल`, `स्वचालित अनुवाद`],
        [`सीमित समय ऑफर`, `कस्टम ऑनबोर्डिंग`, `उच्च रूपांतरण अभियान`],
        [`ROI गारंटी या रिफंड`, `स्वचालित अनुकूलन`, `वास्तविक समय रिपोर्टिंग`],
        [`मार्केटिंग विशेषज्ञ शामिल`, `सिद्ध टेम्प्लेट`, `बहु-चैनल सहायता`]
      ];
      break;
    case 'tr':
      promotionVariations = [
        [`Copyfy 7 günlük ücretsiz deneme`, `Sınırsız kampanya oluşturun`, `24/7 destek dahil`],
        [`İlk ay %50 indirim`, `100+ dil mevcut`, `Önceden oluşturulmuş COD şablonları`],
        [`Copyfy'ye anında erişim`, `İstediğiniz zaman iptal edin`, `Uzun vadeli taahhüt yok`],
        [`Ücretsiz kişiselleştirilmiş demo`, `Google Ads entegrasyonu`, `Garantili sonuçlar`],
        [`Kurumsal plan mevcut`, `Tam API dahil`, `Otomatik çeviriler`],
        [`Sınırlı süreli teklif`, `Özel katılım`, `Yüksek dönüşümlü kampanyalar`],
        [`ROI garantili veya para iadesi`, `Otomatik optimizasyon`, `Gerçek zamanlı raporlama`],
        [`Pazarlama uzmanları dahil`, `Kanıtlanmış şablonlar`, `Çok kanallı destek`]
      ];
      break;
    case 'ru':
      promotionVariations = [
        [`7-дневная бесплатная пробная версия Copyfy`, `Создавайте неограниченные кампании`, `Поддержка 24/7 включена`],
        [`Скидка 50% в первый месяц`, `Доступно 100+ языков`, `Предварительно созданные COD шаблоны`],
        [`Мгновенный доступ к Copyfy`, `Отмена в любое время`, `Никаких долгосрочных обязательств`],
        [`Бесплатная персонализированная демонстрация`, `Интеграция с Google Ads`, `Гарантированные результаты`],
        [`Корпоративный план доступен`, `Полный API включен`, `Автоматические переводы`],
        [`Ограниченное по времени предложение`, `Индивидуальная настройка`, `Высококонвертирующие кампании`],
        [`ROI гарантирован или возврат денег`, `Автоматическая оптимизация`, `Отчеты в реальном времени`],
        [`Маркетинговые специалисты включены`, `Проверенные шаблоны`, `Многоканальная поддержка`]
      ];
      break;
    default:
      promotionVariations = [
        [`Teste grátis de 7 dias do Copyfy`, `Gere campanhas ilimitadas`, `Suporte 24/7 incluído`],
        [`50% desconto no primeiro mês`, `Mais de 100 idiomas disponíveis`, `Templates COD pré-construídos`],
        [`Acesso instantâneo ao Copyfy`, `Cancele quando quiser`, `Sem compromisso de longo prazo`],
        [`Demo personalizada gratuita`, `Integração com Google Ads`, `Resultados garantidos`],
        [`Plano empresarial disponível`, `API completa incluída`, `Traduções automáticas`],
        [`Oferta por tempo limitado`, `Onboarding personalizado`, `Campanhas de alta conversão`],
        [`ROI garantido ou reembolso`, `Otimização automática`, `Relatórios em tempo real`],
        [`Especialistas em marketing incluídos`, `Templates comprovados`, `Suporte multicanal`]
      ];
  }
  
  return promotionVariations.map(promos => promos.join('\n'));
};

export const generatePriceExtension = (product: string, price: string, country: string): string[] => {
  const countryData = countries.find(c => c.value === country || c.name === country);
  const countryCode = countryData ? countryData.value : country;
  const countryName = countryData ? countryData.name : country;
  const languageCode = getLanguageFromCountry(countryCode);

  // Extract numeric value from price for calculations
  const numericPrice = parseFloat(price.replace(/[^\d.,]/g, '').replace(',', '.')) || 97;
  const currency = price.match(/[^\d\s.,]+/)?.[0] || '$';
  let priceVariations: string[][] = [];
  
  switch (languageCode) {
    case 'es':
      priceVariations = [
        [
          `Copyfy Básico: ${currency}${numericPrice}/mes - Hasta 50 campañas`,
          `Copyfy Pro: ${currency}${Math.round(numericPrice * 2.5)}/mes - Campañas ilimitadas`,
          `Copyfy Enterprise: ${currency}${Math.round(numericPrice * 4.8)}/mes - API + soporte dedicado`
        ],
        [
          `Plan Starter: ${currency}${numericPrice} - Perfecto para comenzar`,
          `Plan Crecimiento: ${currency}${Math.round(numericPrice * 2.2)} - Para agencias`,
          `Plan Escalable: ${currency}${Math.round(numericPrice * 4.1)} - Volumen alto`
        ],
        [
          `Mensual: ${currency}${numericPrice}/mes - Sin compromiso`,
          `Anual: ${currency}${Math.round(numericPrice * 8.5)}/año - 30% descuento`,
          `Bianual: ${currency}${Math.round(numericPrice * 15.2)}/2 años - 40% descuento`
        ],
        [
          `Solo: ${currency}${numericPrice} - 1 usuario`,
          `Equipo: ${currency}${Math.round(numericPrice * 3.2)} - 5 usuarios`,
          `Empresa: ${currency}${Math.round(numericPrice * 6.8)} - Usuarios ilimitados`
        ],
        [
          `Básico COD: ${currency}${numericPrice} - Templates esenciales`,
          `Pro COD: ${currency}${Math.round(numericPrice * 2.7)} - Templates avanzados`,
          `Master COD: ${currency}${Math.round(numericPrice * 5.1)} - IA personalizada`
        ]
      ];
      break;
    case 'en':
      priceVariations = [
        [
          `Copyfy Basic: ${currency}${numericPrice}/month - Up to 50 campaigns`,
          `Copyfy Pro: ${currency}${Math.round(numericPrice * 2.5)}/month - Unlimited campaigns`,
          `Copyfy Enterprise: ${currency}${Math.round(numericPrice * 4.8)}/month - API + dedicated support`
        ],
        [
          `Starter Plan: ${currency}${numericPrice} - Perfect to begin`,
          `Growth Plan: ${currency}${Math.round(numericPrice * 2.2)} - For agencies`,
          `Scale Plan: ${currency}${Math.round(numericPrice * 4.1)} - High volume`
        ],
        [
          `Monthly: ${currency}${numericPrice}/month - No commitment`,
          `Annual: ${currency}${Math.round(numericPrice * 8.5)}/year - 30% discount`,
          `Biennial: ${currency}${Math.round(numericPrice * 15.2)}/2 years - 40% discount`
        ],
        [
          `Solo: ${currency}${numericPrice} - 1 user`,
          `Team: ${currency}${Math.round(numericPrice * 3.2)} - 5 users`,
          `Enterprise: ${currency}${Math.round(numericPrice * 6.8)} - Unlimited users`
        ],
        [
          `Basic COD: ${currency}${numericPrice} - Essential templates`,
          `Pro COD: ${currency}${Math.round(numericPrice * 2.7)} - Advanced templates`,
          `Master COD: ${currency}${Math.round(numericPrice * 5.1)} - Custom AI`
        ]
      ];
      break;
    case 'fr':
      priceVariations = [
        [
          `Copyfy Basic: ${currency}${numericPrice}/mois - Jusqu'à 50 campagnes`,
          `Copyfy Pro: ${currency}${Math.round(numericPrice * 2.5)}/mois - Campagnes illimitées`,
          `Copyfy Enterprise: ${currency}${Math.round(numericPrice * 4.8)}/mois - API + support dédié`
        ],
        [
          `Plan Démarrage: ${currency}${numericPrice} - Parfait pour commencer`,
          `Plan Croissance: ${currency}${Math.round(numericPrice * 2.2)} - Pour agences`,
          `Plan Évolutif: ${currency}${Math.round(numericPrice * 4.1)} - Gros volume`
        ],
        [
          `Mensuel: ${currency}${numericPrice}/mois - Sans engagement`,
          `Annuel: ${currency}${Math.round(numericPrice * 8.5)}/an - 30% réduction`,
          `Bisannuel: ${currency}${Math.round(numericPrice * 15.2)}/2 ans - 40% réduction`
        ],
        [
          `Solo: ${currency}${numericPrice} - 1 utilisateur`,
          `Équipe: ${currency}${Math.round(numericPrice * 3.2)} - 5 utilisateurs`,
          `Entreprise: ${currency}${Math.round(numericPrice * 6.8)} - Utilisateurs illimités`
        ],
        [
          `COD Basic: ${currency}${numericPrice} - Templates essentiels`,
          `COD Pro: ${currency}${Math.round(numericPrice * 2.7)} - Templates avancés`,
          `COD Master: ${currency}${Math.round(numericPrice * 5.1)} - IA personnalisée`
        ]
      ];
      break;
    case 'de':
      priceVariations = [
        [
          `Copyfy Basic: ${currency}${numericPrice}/Monat - Bis zu 50 Kampagnen`,
          `Copyfy Pro: ${currency}${Math.round(numericPrice * 2.5)}/Monat - Unbegrenzte Kampagnen`,
          `Copyfy Enterprise: ${currency}${Math.round(numericPrice * 4.8)}/Monat - API + dedizierter Support`
        ],
        [
          `Starter Plan: ${currency}${numericPrice} - Perfekt zum Beginnen`,
          `Wachstumsplan: ${currency}${Math.round(numericPrice * 2.2)} - Für Agenturen`,
          `Skalierungsplan: ${currency}${Math.round(numericPrice * 4.1)} - Hohes Volumen`
        ],
        [
          `Monatlich: ${currency}${numericPrice}/Monat - Keine Bindung`,
          `Jährlich: ${currency}${Math.round(numericPrice * 8.5)}/Jahr - 30% Rabatt`,
          `Zweijährig: ${currency}${Math.round(numericPrice * 15.2)}/2 Jahre - 40% Rabatt`
        ],
        [
          `Solo: ${currency}${numericPrice} - 1 Benutzer`,
          `Team: ${currency}${Math.round(numericPrice * 3.2)} - 5 Benutzer`,
          `Unternehmen: ${currency}${Math.round(numericPrice * 6.8)} - Unbegrenzte Benutzer`
        ],
        [
          `Basic COD: ${currency}${numericPrice} - Wesentliche Vorlagen`,
          `Pro COD: ${currency}${Math.round(numericPrice * 2.7)} - Erweiterte Vorlagen`,
          `Master COD: ${currency}${Math.round(numericPrice * 5.1)} - Benutzerdefinierte KI`
        ]
      ];
      break;
    case 'it':
      priceVariations = [
        [
          `Copyfy Basic: ${currency}${numericPrice}/mese - Fino a 50 campagne`,
          `Copyfy Pro: ${currency}${Math.round(numericPrice * 2.5)}/mese - Campagne illimitate`,
          `Copyfy Enterprise: ${currency}${Math.round(numericPrice * 4.8)}/mese - API + supporto dedicato`
        ],
        [
          `Piano Starter: ${currency}${numericPrice} - Perfetto per iniziare`,
          `Piano Crescita: ${currency}${Math.round(numericPrice * 2.2)} - Per agenzie`,
          `Piano Scalabile: ${currency}${Math.round(numericPrice * 4.1)} - Alto volume`
        ],
        [
          `Mensile: ${currency}${numericPrice}/mese - Nessun impegno`,
          `Annuale: ${currency}${Math.round(numericPrice * 8.5)}/anno - 30% sconto`,
          `Biennale: ${currency}${Math.round(numericPrice * 15.2)}/2 anni - 40% sconto`
        ],
        [
          `Solo: ${currency}${numericPrice} - 1 utente`,
          `Team: ${currency}${Math.round(numericPrice * 3.2)} - 5 utenti`,
          `Enterprise: ${currency}${Math.round(numericPrice * 6.8)} - Utenti illimitati`
        ],
        [
          `COD Basic: ${currency}${numericPrice} - Template essenziali`,
          `COD Pro: ${currency}${Math.round(numericPrice * 2.7)} - Template avanzati`,
          `COD Master: ${currency}${Math.round(numericPrice * 5.1)} - IA personalizzata`
        ]
      ];
      break;
    case 'ja':
      priceVariations = [
        [
          `Copyfy ベーシック: ${currency}${numericPrice}/月 - 最大50キャンペーン`,
          `Copyfy プロ: ${currency}${Math.round(numericPrice * 2.5)}/月 - 無制限キャンペーン`,
          `Copyfy エンタープライズ: ${currency}${Math.round(numericPrice * 4.8)}/月 - API + 専用サポート`
        ],
        [
          `スタータープラン: ${currency}${numericPrice} - 始めるのに最適`,
          `成長プラン: ${currency}${Math.round(numericPrice * 2.2)} - 代理店向け`,
          `スケールプラン: ${currency}${Math.round(numericPrice * 4.1)} - 大容量`
        ],
        [
          `月額: ${currency}${numericPrice}/月 - 縛りなし`,
          `年額: ${currency}${Math.round(numericPrice * 8.5)}/年 - 30%割引`,
          `2年契約: ${currency}${Math.round(numericPrice * 15.2)}/2年 - 40%割引`
        ],
        [
          `ソロ: ${currency}${numericPrice} - 1ユーザー`,
          `チーム: ${currency}${Math.round(numericPrice * 3.2)} - 5ユーザー`,
          `エンタープライズ: ${currency}${Math.round(numericPrice * 6.8)} - 無制限ユーザー`
        ],
        [
          `ベーシックCOD: ${currency}${numericPrice} - 基本テンプレート`,
          `プロCOD: ${currency}${Math.round(numericPrice * 2.7)} - 高度テンプレート`,
          `マスターCOD: ${currency}${Math.round(numericPrice * 5.1)} - カスタムAI`
        ]
      ];
      break;
    case 'zh':
      priceVariations = [
        [
          `Copyfy 基础版: ${currency}${numericPrice}/月 - 最多50个活动`,
          `Copyfy 专业版: ${currency}${Math.round(numericPrice * 2.5)}/月 - 无限活动`,
          `Copyfy 企业版: ${currency}${Math.round(numericPrice * 4.8)}/月 - API + 专属支持`
        ],
        [
          `初始计划: ${currency}${numericPrice} - 完美入门`,
          `增长计划: ${currency}${Math.round(numericPrice * 2.2)} - 代理商专用`,
          `扩展计划: ${currency}${Math.round(numericPrice * 4.1)} - 大批量`
        ],
        [
          `月付: ${currency}${numericPrice}/月 - 无承诺`,
          `年付: ${currency}${Math.round(numericPrice * 8.5)}/年 - 30%折扣`,
          `两年付: ${currency}${Math.round(numericPrice * 15.2)}/2年 - 40%折扣`
        ],
        [
          `个人版: ${currency}${numericPrice} - 1用户`,
          `团队版: ${currency}${Math.round(numericPrice * 3.2)} - 5用户`,
          `企业版: ${currency}${Math.round(numericPrice * 6.8)} - 无限用户`
        ],
        [
          `COD基础版: ${currency}${numericPrice} - 基本模板`,
          `COD专业版: ${currency}${Math.round(numericPrice * 2.7)} - 高级模板`,
          `COD大师版: ${currency}${Math.round(numericPrice * 5.1)} - 定制AI`
        ]
      ];
      break;
    case 'ar':
      priceVariations = [
        [
          `Copyfy الأساسي: ${currency}${numericPrice}/شهر - حتى 50 حملة`,
          `Copyfy المحترف: ${currency}${Math.round(numericPrice * 2.5)}/شهر - حملات غير محدودة`,
          `Copyfy المؤسسي: ${currency}${Math.round(numericPrice * 4.8)}/شهر - API + دعم مخصص`
        ],
        [
          `خطة البداية: ${currency}${numericPrice} - مثالي للبدء`,
          `خطة النمو: ${currency}${Math.round(numericPrice * 2.2)} - للوكالات`,
          `خطة التوسع: ${currency}${Math.round(numericPrice * 4.1)} - حجم عالي`
        ],
        [
          `شهري: ${currency}${numericPrice}/شهر - بدون التزام`,
          `سنوي: ${currency}${Math.round(numericPrice * 8.5)}/سنة - خصم 30%`,
          `سنتان: ${currency}${Math.round(numericPrice * 15.2)}/سنتان - خصم 40%`
        ],
        [
          `فردي: ${currency}${numericPrice} - مستخدم واحد`,
          `فريق: ${currency}${Math.round(numericPrice * 3.2)} - 5 مستخدمين`,
          `مؤسسة: ${currency}${Math.round(numericPrice * 6.8)} - مستخدمون غير محدودون`
        ],
        [
          `COD أساسي: ${currency}${numericPrice} - قوالب أساسية`,
          `COD محترف: ${currency}${Math.round(numericPrice * 2.7)} - قوالب متقدمة`,
          `COD خبير: ${currency}${Math.round(numericPrice * 5.1)} - ذكاء اصطناعي مخصص`
        ]
      ];
      break;
    case 'hi':
      priceVariations = [
        [
          `Copyfy बेसिक: ${currency}${numericPrice}/महीना - 50 अभियान तक`,
          `Copyfy प्रो: ${currency}${Math.round(numericPrice * 2.5)}/महीना - असीमित अभियान`,
          `Copyfy एंटरप्राइज़: ${currency}${Math.round(numericPrice * 4.8)}/महीना - API + समर्पित समर्थन`
        ],
        [
          `स्टार्टर प्लान: ${currency}${numericPrice} - शुरुआत के लिए बेहतरीन`,
          `ग्रोथ प्लान: ${currency}${Math.round(numericPrice * 2.2)} - एजेंसियों के लिए`,
          `स्केल प्लान: ${currency}${Math.round(numericPrice * 4.1)} - उच्च मात्रा`
        ],
        [
          `मासिक: ${currency}${numericPrice}/महीना - कोई प्रतिबद्धता नहीं`,
          `वार्षिक: ${currency}${Math.round(numericPrice * 8.5)}/वर्ष - 30% छूट`,
          `द्विवार्षिक: ${currency}${Math.round(numericPrice * 15.2)}/2 वर्ष - 40% छूट`
        ],
        [
          `सोलो: ${currency}${numericPrice} - 1 उपयोगकर्ता`,
          `टीम: ${currency}${Math.round(numericPrice * 3.2)} - 5 उपयोगकर्ता`,
          `एंटरप्राइज़: ${currency}${Math.round(numericPrice * 6.8)} - असीमित उपयोगकर्ता`
        ],
        [
          `बेसिक COD: ${currency}${numericPrice} - आवश्यक टेम्प्लेट`,
          `प्रो COD: ${currency}${Math.round(numericPrice * 2.7)} - उन्नत टेम्प्लेट`,
          `मास्टर COD: ${currency}${Math.round(numericPrice * 5.1)} - कस्टम AI`
        ]
      ];
      break;
    case 'tr':
      priceVariations = [
        [
          `Copyfy Temel: ${currency}${numericPrice}/ay - 50 kampanyaya kadar`,
          `Copyfy Pro: ${currency}${Math.round(numericPrice * 2.5)}/ay - Sınırsız kampanya`,
          `Copyfy Kurumsal: ${currency}${Math.round(numericPrice * 4.8)}/ay - API + özel destek`
        ],
        [
          `Başlangıç Planı: ${currency}${numericPrice} - Başlamak için mükemmel`,
          `Büyüme Planı: ${currency}${Math.round(numericPrice * 2.2)} - Ajanslar için`,
          `Ölçek Planı: ${currency}${Math.round(numericPrice * 4.1)} - Yüksek hacim`
        ],
        [
          `Aylık: ${currency}${numericPrice}/ay - Taahhüt yok`,
          `Yıllık: ${currency}${Math.round(numericPrice * 8.5)}/yıl - %30 indirim`,
          `İki yıllık: ${currency}${Math.round(numericPrice * 15.2)}/2 yıl - %40 indirim`
        ],
        [
          `Solo: ${currency}${numericPrice} - 1 kullanıcı`,
          `Takım: ${currency}${Math.round(numericPrice * 3.2)} - 5 kullanıcı`,
          `Kurumsal: ${currency}${Math.round(numericPrice * 6.8)} - Sınırsız kullanıcı`
        ],
        [
          `Temel COD: ${currency}${numericPrice} - Temel şablonlar`,
          `Pro COD: ${currency}${Math.round(numericPrice * 2.7)} - Gelişmiş şablonlar`,
          `Master COD: ${currency}${Math.round(numericPrice * 5.1)} - Özel AI`
        ]
      ];
      break;
    case 'ru':
      priceVariations = [
        [
          `Copyfy Базовый: ${currency}${numericPrice}/месяц - До 50 кампаний`,
          `Copyfy Про: ${currency}${Math.round(numericPrice * 2.5)}/месяц - Неограниченные кампании`,
          `Copyfy Корпоративный: ${currency}${Math.round(numericPrice * 4.8)}/месяц - API + выделенная поддержка`
        ],
        [
          `Стартовый план: ${currency}${numericPrice} - Идеально для начала`,
          `План роста: ${currency}${Math.round(numericPrice * 2.2)} - Для агентств`,
          `План масштабирования: ${currency}${Math.round(numericPrice * 4.1)} - Большой объем`
        ],
        [
          `Ежемесячно: ${currency}${numericPrice}/месяц - Без обязательств`,
          `Ежегодно: ${currency}${Math.round(numericPrice * 8.5)}/год - Скидка 30%`,
          `Раз в два года: ${currency}${Math.round(numericPrice * 15.2)}/2 года - Скидка 40%`
        ],
        [
          `Соло: ${currency}${numericPrice} - 1 пользователь`,
          `Команда: ${currency}${Math.round(numericPrice * 3.2)} - 5 пользователей`,
          `Предприятие: ${currency}${Math.round(numericPrice * 6.8)} - Неограниченные пользователи`
        ],
        [
          `Базовый COD: ${currency}${numericPrice} - Основные шаблоны`,
          `Про COD: ${currency}${Math.round(numericPrice * 2.7)} - Продвинутые шаблоны`,
          `Мастер COD: ${currency}${Math.round(numericPrice * 5.1)} - Пользовательский ИИ`
        ]
      ];
      break;
    default:
      priceVariations = [
        [
          `Copyfy Básico: ${currency}${numericPrice}/mês - Até 50 campanhas`,
          `Copyfy Pro: ${currency}${Math.round(numericPrice * 2.5)}/mês - Campanhas ilimitadas`,
          `Copyfy Enterprise: ${currency}${Math.round(numericPrice * 4.8)}/mês - API + suporte dedicado`
        ],
        [
          `Plano Starter: ${currency}${numericPrice} - Perfeito para começar`,
          `Plano Crescimento: ${currency}${Math.round(numericPrice * 2.2)} - Para agências`,
          `Plano Escala: ${currency}${Math.round(numericPrice * 4.1)} - Alto volume`
        ],
        [
          `Mensal: ${currency}${numericPrice}/mês - Sem compromisso`,
          `Anual: ${currency}${Math.round(numericPrice * 8.5)}/ano - 30% desconto`,
          `Bienal: ${currency}${Math.round(numericPrice * 15.2)}/2 anos - 40% desconto`
        ],
        [
          `Solo: ${currency}${numericPrice} - 1 usuário`,
          `Equipe: ${currency}${Math.round(numericPrice * 3.2)} - 5 usuários`,
          `Empresa: ${currency}${Math.round(numericPrice * 6.8)} - Usuários ilimitados`
        ],
        [
          `COD Básico: ${currency}${numericPrice} - Templates essenciais`,
          `COD Pro: ${currency}${Math.round(numericPrice * 2.7)} - Templates avançados`,
          `COD Master: ${currency}${Math.round(numericPrice * 5.1)} - IA personalizada`
        ]
      ];
  }
  
  return priceVariations.map(blocks => blocks.join('\n'));
};
