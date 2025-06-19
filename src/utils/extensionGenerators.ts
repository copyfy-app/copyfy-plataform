
import { countries } from '../components/data/Countries';
import { getLanguageFromCountry } from './countryLanguageMapping';

export const generateStructuredSnippet = (product: string, country: string): string[] => {
  const countryData = countries.find(c => c.value === country || c.name === country);
  const countryCode = countryData ? countryData.value : country;
  const languageCode = getLanguageFromCountry(countryCode);
  
  // Generate multiple structured snippet variations
  let snippetVariations: string[] = [];
  
  switch (languageCode) {
    case 'es':
      snippetVariations = [
        "Gel facial, Crema nocturna, Contorno de ojos, Fórmula anti-edad",
        "Sérum hidratante, Limpiador facial, Mascarilla, Protector solar",
        "Crema día, Exfoliante, Tónico facial, Aceite nutritivo",
        "Contorno labial, Primer facial, Base hidratante, Bruma facial",
        "Tratamiento nocturno, Crema antiarrugas, Sérum vitamina C, Gel limpiador"
      ];
      break;
    case 'en':
      snippetVariations = [
        "Facial serum, Night gel, Eye cream, Anti-aging formula",
        "Moisturizing cream, Face cleanser, Beauty mask, Sun protection",
        "Day cream, Gentle scrub, Facial toner, Nourishing oil",
        "Lip treatment, Face primer, Hydrating base, Facial mist",
        "Night treatment, Anti-wrinkle cream, Vitamin C serum, Cleansing gel"
      ];
      break;
    case 'fr':
      snippetVariations = [
        "Sérum facial, Gel de nuit, Crème contour des yeux, Formule anti-âge",
        "Crème hydratante, Nettoyant visage, Masque beauté, Protection solaire",
        "Crème de jour, Gommage doux, Lotion tonique, Huile nourrissante",
        "Soin des lèvres, Base lissante, Fond hydratant, Brume faciale",
        "Traitement nuit, Crème anti-rides, Sérum vitamine C, Gel nettoyant"
      ];
      break;
    case 'de':
      snippetVariations = [
        "Gesichtsserum, Nachtgel, Augencreme, Anti-Aging-Formel",
        "Feuchtigkeitscreme, Gesichtsreiniger, Schönheitsmaske, Sonnenschutz",
        "Tagescreme, Sanftes Peeling, Gesichtswasser, Pflegeöl",
        "Lippenbehandlung, Gesichtsprimer, Feuchtigkeitsbasis, Gesichtsspray",
        "Nachtbehandlung, Anti-Falten-Creme, Vitamin-C-Serum, Reinigungsgel"
      ];
      break;
    case 'it':
      snippetVariations = [
        "Siero viso, Gel notte, Crema contorno occhi, Formula anti-età",
        "Crema idratante, Detergente viso, Maschera bellezza, Protezione solare",
        "Crema giorno, Scrub delicato, Tonico viso, Olio nutriente",
        "Trattamento labbra, Primer viso, Base idratante, Nebbia facciale",
        "Trattamento notte, Crema antirughe, Siero vitamina C, Gel detergente"
      ];
      break;
    case 'ja':
      snippetVariations = [
        "フェイシャルセラム, ナイトジェル, アイクリーム, アンチエイジング",
        "保湿クリーム, 洗顔料, 美容マスク, 日焼け止め",
        "デイクリーム, マイルドスクラブ, 化粧水, 栄養オイル",
        "リップトリートメント, フェイスプライマー, 保湿ベース, フェイシャルミスト",
        "ナイトトリートメント, シワ対策クリーム, ビタミンCセラム, クレンジングジェル"
      ];
      break;
    case 'zh':
      snippetVariations = [
        "面部精华, 夜间凝胶, 眼霜, 抗衰老配方",
        "保湿霜, 洁面乳, 美容面膜, 防晒霜",
        "日霜, 温和磨砂, 爽肤水, 滋养油",
        "唇部护理, 妆前乳, 保湿底妆, 喷雾",
        "夜间护理, 抗皱霜, 维C精华, 洁面凝胶"
      ];
      break;
    case 'ar':
      snippetVariations = [
        "سيروم الوجه، جل ليلي، كريم العين، تركيبة مضادة للشيخوخة",
        "كريم مرطب، منظف الوجه، قناع الجمال، واقي الشمس",
        "كريم النهار، مقشر لطيف، تونر الوجه، زيت مغذي",
        "علاج الشفاه، برايمر الوجه، قاعدة مرطبة، رذاذ الوجه",
        "علاج ليلي، كريم مضاد للتجاعيد، سيروم فيتامين سي، جل منظف"
      ];
      break;
    case 'hi':
      snippetVariations = [
        "चेहरे का सीरम, नाइट जेल, आई क्रीम, एंटी-एजिंग फॉर्मूला",
        "मॉइस्चराइजिंग क्रीम, फेस क्लींजर, ब्यूटी मास्क, सन प्रोटेक्शन",
        "डे क्रीम, जेंटल स्क्रब, फेशियल टोनर, पोषक तेल",
        "लिप ट्रीटमेंट, फेस प्राइमर, हाइड्रेटिंग बेस, फेशियल मिस्ट",
        "नाइट ट्रीटमेंट, एंटी-रिंकल क्रीम, विटामिन सी सीरम, क्लींजिंग जेल"
      ];
      break;
    case 'tr':
      snippetVariations = [
        "Yüz serumu, Gece jeli, Göz kremi, Yaşlanma karşıtı formül",
        "Nemlendirici krem, Yüz temizleyici, Güzellik maskesi, Güneş koruma",
        "Gündüz kremi, Nazik peling, Yüz toniği, Besleyici yağ",
        "Dudak bakımı, Yüz primerı, Nemlendirici baz, Yüz spreyi",
        "Gece bakımı, Kırışıklık karşıtı krem, C vitamini serum, Temizlik jeli"
      ];
      break;
    case 'ru':
      snippetVariations = [
        "Сыворотка для лица, Ночной гель, Крем для глаз, Антивозрастная формула",
        "Увлажняющий крем, Очищающее средство, Маска красоты, Солнцезащитный крем",
        "Дневной крем, Мягкий скраб, Тоник для лица, Питательное масло",
        "Уход за губами, Праймер для лица, Увлажняющая основа, Спрей для лица",
        "Ночной уход, Крем против морщин, Сыворотка с витамином С, Очищающий гель"
      ];
      break;
    default:
      snippetVariations = [
        "Gel facial, Creme noturno, Creme para olhos, Fórmula anti-idade",
        "Creme hidratante, Limpador facial, Máscara de beleza, Protetor solar",
        "Creme diurno, Esfoliante suave, Tônico facial, Óleo nutritivo",
        "Tratamento labial, Primer facial, Base hidratante, Névoa facial",
        "Tratamento noturno, Creme antirrugas, Sérum vitamina C, Gel de limpeza"
      ];
  }
  
  return snippetVariations.map(values => `Categoria: Benefícios\nValores: ${values}`);
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
        [`Descuento del 20% en el primer pedido`, `Envío gratis a toda ${countryName}`, `Compra 2 y llévate 3`],
        [`Oferta especial: 30% de descuento`, `Devolución gratuita en 30 días`, `Regalo sorpresa con tu compra`],
        [`Precio promocional limitado`, `Garantía de satisfacción 100%`, `Descuento por volumen disponible`],
        [`Oferta por tiempo limitado`, `Consulta médica gratis incluida`, `Pago seguro garantizado`],
        [`Descuento exclusivo online`, `Entrega express disponible`, `Plan de pagos sin intereses`]
      ];
      break;
    case 'en':
      promotionVariations = [
        [`20% discount on first order`, `Free shipping to all ${countryName}`, `Buy 2 get 3`],
        [`Special offer: 30% off today`, `Free 30-day returns`, `Surprise gift with purchase`],
        [`Limited time promotional price`, `100% satisfaction guarantee`, `Volume discount available`],
        [`Time-limited exclusive offer`, `Free medical consultation included`, `Secure payment guaranteed`],
        [`Exclusive online discount`, `Express delivery available`, `Interest-free payment plans`]
      ];
      break;
    case 'fr':
      promotionVariations = [
        [`Réduction de 20% sur la première commande`, `Livraison gratuite dans toute la ${countryName}`, `Achetez 2 et obtenez 3`],
        [`Offre spéciale : 30% de réduction`, `Retour gratuit sous 30 jours`, `Cadeau surprise avec achat`],
        [`Prix promotionnel à durée limitée`, `Garantie satisfaction 100%`, `Remise sur quantité disponible`],
        [`Offre exclusive à durée limitée`, `Consultation médicale gratuite incluse`, `Paiement sécurisé garanti`],
        [`Remise exclusive en ligne`, `Livraison express disponible`, `Plans de paiement sans intérêts`]
      ];
      break;
    case 'de':
      promotionVariations = [
        [`20% Rabatt auf die erste Bestellung`, `Kostenloser Versand nach ganz ${countryName}`, `Kaufe 2 und erhalte 3`],
        [`Sonderangebot: 30% Rabatt heute`, `Kostenlose 30-Tage Rückgabe`, `Überraschungsgeschenk beim Kauf`],
        [`Zeitlich begrenzter Aktionspreis`, `100% Zufriedenheitsgarantie`, `Mengenrabatt verfügbar`],
        [`Zeitlich begrenztes exklusives Angebot`, `Kostenlose medizinische Beratung inklusive`, `Sichere Zahlung garantiert`],
        [`Exklusiver Online-Rabatt`, `Express-Lieferung verfügbar`, `Zinsfreie Zahlungspläne`]
      ];
      break;
    case 'it':
      promotionVariations = [
        [`Sconto del 20% sul primo ordine`, `Spedizione gratuita in tutta ${countryName}`, `Compra 2 e prendi 3`],
        [`Offerta speciale: 30% di sconto`, `Reso gratuito entro 30 giorni`, `Regalo a sorpresa con acquisto`],
        [`Prezzo promozionale a tempo limitato`, `Garanzia soddisfazione 100%`, `Sconto quantità disponibile`],
        [`Offerta esclusiva a tempo limitato`, `Consulenza medica gratuita inclusa`, `Pagamento sicuro garantito`],
        [`Sconto esclusivo online`, `Consegna express disponibile`, `Piani di pagamento senza interessi`]
      ];
      break;
    case 'ja':
      promotionVariations = [
        [`初回注文20%割引`, `${countryName}全国送料無料`, `2個買うと3個もらえる`],
        [`特別オファー：今日30%オフ`, `30日間無料返品`, `購入でサプライズギフト`],
        [`期間限定プロモーション価格`, `100%満足保証`, `まとめ買い割引あり`],
        [`期間限定独占オファー`, `無料医療相談付き`, `安全決済保証`],
        [`オンライン限定割引`, `速達配送利用可能`, `無利息分割払い`]
      ];
      break;
    case 'zh':
      promotionVariations = [
        [`首次订单享受20%折扣`, `${countryName}全国免费送货`, `买2送1`],
        [`特别优惠：今日30%折扣`, `30天免费退货`, `购买即送惊喜礼品`],
        [`限时促销价格`, `100%满意保证`, `批量折扣优惠`],
        [`限时独家优惠`, `免费医疗咨询`, `安全支付保障`],
        [`在线专享折扣`, `快递配送服务`, `无息分期付款`]
      ];
      break;
    case 'ar':
      promotionVariations = [
        [`خصم 20% على الطلب الأول`, `شحن مجاني لجميع أنحاء ${countryName}`, `اشتر 2 واحصل على 3`],
        [`عرض خاص: خصم 30% اليوم`, `إرجاع مجاني لمدة 30 يوماً`, `هدية مفاجئة مع الشراء`],
        [`سعر ترويجي لفترة محدودة`, `ضمان الرضا 100%`, `خصم الكمية متاح`],
        [`عرض حصري لفترة محدودة`, `استشارة طبية مجانية مشمولة`, `دفع آمن مضمون`],
        [`خصم حصري عبر الإنترنت`, `توصيل سريع متاح`, `خطط دفع بدون فوائد`]
      ];
      break;
    case 'hi':
      promotionVariations = [
        [`पहले ऑर्डर पर 20% छूट`, `पूरे ${countryName} में मुफ्त शिपिंग`, `2 खरीदें और 3 पाएं`],
        [`विशेष ऑफर: आज 30% छूट`, `30 दिन मुफ्त रिटर्न`, `खरीदारी पर सरप्राइज गिफ्ट`],
        [`सीमित समय प्रमोशनल कीमत`, `100% संतुष्टि गारंटी`, `वॉल्यूम डिस्काउंट उपलब्ध`],
        [`सीमित समय एक्सक्लूसिव ऑफर`, `मुफ्त मेडिकल सलाह शामिल`, `सुरक्षित पेमेंट गारंटी`],
        [`एक्सक्लूसिव ऑनलाइन डिस्काउंट`, `एक्सप्रेस डिलीवरी उपलब्ध`, `बिना ब्याज पेमेंट प्लान`]
      ];
      break;
    case 'tr':
      promotionVariations = [
        [`İlk siparişte %20 indirim`, `Tüm ${countryName}'ye ücretsiz kargo`, `2 al 3 öde`],
        [`Özel teklif: Bugün %30 indirim`, `30 gün ücretsiz iade`, `Alışverişte sürpriz hediye`],
        [`Sınırlı süre promosyon fiyatı`, `%100 memnuniyet garantisi`, `Toplu alım indirimi mevcut`],
        [`Sınırlı süre özel teklif`, `Ücretsiz tıbbi danışmanlık dahil`, `Güvenli ödeme garantisi`],
        [`Özel online indirim`, `Ekspres teslimat mevcut`, `Faizsiz ödeme planları`]
      ];
      break;
    case 'ru':
      promotionVariations = [
        [`Скидка 20% на первый заказ`, `Бесплатная доставка по всей ${countryName}`, `Купи 2, получи 3`],
        [`Специальное предложение: скидка 30%`, `Бесплатный возврат в течение 30 дней`, `Подарок-сюрприз с покупкой`],
        [`Ограниченная по времени акционная цена`, `100% гарантия удовлетворения`, `Скидка на объем доступна`],
        [`Ограниченное по времени эксклюзивное предложение`, `Бесплатная медицинская консультация включена`, `Безопасная оплата гарантирована`],
        [`Эксклюзивная онлайн скидка`, `Экспресс-доставка доступна`, `Беспроцентные планы оплаты`]
      ];
      break;
    default:
      promotionVariations = [
        [`Desconto de 20% no primeiro pedido`, `Frete grátis para todo o ${countryName}`, `Compre 2 e leve 3`],
        [`Oferta especial: 30% de desconto`, `Devolução grátis em 30 dias`, `Presente surpresa na compra`],
        [`Preço promocional por tempo limitado`, `Garantia de satisfação 100%`, `Desconto por quantidade disponível`],
        [`Oferta exclusiva por tempo limitado`, `Consulta médica grátis incluída`, `Pagamento seguro garantido`],
        [`Desconto exclusivo online`, `Entrega expressa disponível`, `Planos de pagamento sem juros`]
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
  const currency = price.match(/[^\d\s.,]+/)?.[0] || 'R$';
  let priceVariations: string[][] = [];
  
  switch (languageCode) {
    case 'es':
      priceVariations = [
        [
          `${product} 1 unidad: ${currency}${numericPrice} - Entrega a toda ${countryName}`,
          `${product} Kit 3 unidades: ${currency}${Math.round(numericPrice * 2.1)} - Envío gratis`,
          `${product} Kit completo: ${currency}${Math.round(numericPrice * 3.1)} - Mejor oferta`
        ],
        [
          `${product} Básico: ${currency}${numericPrice} - Envío incluido`,
          `${product} Estándar: ${currency}${Math.round(numericPrice * 1.8)} - Más popular`,
          `${product} Premium: ${currency}${Math.round(numericPrice * 2.9)} - Máximo ahorro`
        ],
        [
          `${product} Individual: ${currency}${numericPrice} - Prueba inicial`,
          `${product} Duo: ${currency}${Math.round(numericPrice * 1.7)} - Para parejas`,
          `${product} Familiar: ${currency}${Math.round(numericPrice * 2.5)} - Para toda la familia`
        ],
        [
          `${product} Mes 1: ${currency}${numericPrice} - Primer mes`,
          `${product} Trimestre: ${currency}${Math.round(numericPrice * 2.4)} - 3 meses`,
          `${product} Semestre: ${currency}${Math.round(numericPrice * 4.2)} - 6 meses`
        ],
        [
          `${product} Starter: ${currency}${numericPrice} - Inicio perfecto`,
          `${product} Professional: ${currency}${Math.round(numericPrice * 1.9)} - Uso profesional`,
          `${product} Master: ${currency}${Math.round(numericPrice * 3.3)} - Resultados garantizados`
        ]
      ];
      break;
    case 'en':
      priceVariations = [
        [
          `${product} 1 unit: ${currency}${numericPrice} - Delivery to all ${countryName}`,
          `${product} 3-unit kit: ${currency}${Math.round(numericPrice * 2.1)} - Free shipping`,
          `${product} Complete kit: ${currency}${Math.round(numericPrice * 3.1)} - Best offer`
        ],
        [
          `${product} Basic: ${currency}${numericPrice} - Shipping included`,
          `${product} Standard: ${currency}${Math.round(numericPrice * 1.8)} - Most popular`,
          `${product} Premium: ${currency}${Math.round(numericPrice * 2.9)} - Maximum savings`
        ],
        [
          `${product} Individual: ${currency}${numericPrice} - Trial starter`,
          `${product} Duo: ${currency}${Math.round(numericPrice * 1.7)} - For couples`,
          `${product} Family: ${currency}${Math.round(numericPrice * 2.5)} - For whole family`
        ],
        [
          `${product} Month 1: ${currency}${numericPrice} - First month`,
          `${product} Quarterly: ${currency}${Math.round(numericPrice * 2.4)} - 3 months`,
          `${product} Semi-annual: ${currency}${Math.round(numericPrice * 4.2)} - 6 months`
        ],
        [
          `${product} Starter: ${currency}${numericPrice} - Perfect beginning`,
          `${product} Professional: ${currency}${Math.round(numericPrice * 1.9)} - Professional use`,
          `${product} Master: ${currency}${Math.round(numericPrice * 3.3)} - Guaranteed results`
        ]
      ];
      break;
    case 'fr':
      priceVariations = [
        [
          `${product} 1 unité: ${currency}${numericPrice} - Livraison dans toute la ${countryName}`,
          `${product} Kit 3 unités: ${currency}${Math.round(numericPrice * 2.1)} - Livraison gratuite`,
          `${product} Kit complet: ${currency}${Math.round(numericPrice * 3.1)} - Meilleure offre`
        ],
        [
          `${product} Basique: ${currency}${numericPrice} - Expédition incluse`,
          `${product} Standard: ${currency}${Math.round(numericPrice * 1.8)} - Le plus populaire`,
          `${product} Premium: ${currency}${Math.round(numericPrice * 2.9)} - Économies maximales`
        ],
        [
          `${product} Individuel: ${currency}${numericPrice} - Essai initial`,
          `${product} Duo: ${currency}${Math.round(numericPrice * 1.7)} - Pour couples`,
          `${product} Familial: ${currency}${Math.round(numericPrice * 2.5)} - Pour toute la famille`
        ],
        [
          `${product} Mois 1: ${currency}${numericPrice} - Premier mois`,
          `${product} Trimestriel: ${currency}${Math.round(numericPrice * 2.4)} - 3 mois`,
          `${product} Semestriel: ${currency}${Math.round(numericPrice * 4.2)} - 6 mois`
        ],
        [
          `${product} Débutant: ${currency}${numericPrice} - Début parfait`,
          `${product} Professionnel: ${currency}${Math.round(numericPrice * 1.9)} - Usage professionnel`,
          `${product} Maître: ${currency}${Math.round(numericPrice * 3.3)} - Résultats garantis`
        ]
      ];
      break;
    case 'de':
      priceVariations = [
        [
          `${product} 1 Einheit: ${currency}${numericPrice} - Lieferung nach ganz ${countryName}`,
          `${product} 3er-Kit: ${currency}${Math.round(numericPrice * 2.1)} - Kostenloser Versand`,
          `${product} Komplettes Kit: ${currency}${Math.round(numericPrice * 3.1)} - Bestes Angebot`
        ],
        [
          `${product} Basic: ${currency}${numericPrice} - Versand inklusive`,
          `${product} Standard: ${currency}${Math.round(numericPrice * 1.8)} - Am beliebtesten`,
          `${product} Premium: ${currency}${Math.round(numericPrice * 2.9)} - Maximale Ersparnis`
        ],
        [
          `${product} Einzeln: ${currency}${numericPrice} - Probestart`,
          `${product} Duo: ${currency}${Math.round(numericPrice * 1.7)} - Für Paare`,
          `${product} Familie: ${currency}${Math.round(numericPrice * 2.5)} - Für die ganze Familie`
        ],
        [
          `${product} Monat 1: ${currency}${numericPrice} - Erster Monat`,
          `${product} Vierteljährlich: ${currency}${Math.round(numericPrice * 2.4)} - 3 Monate`,
          `${product} Halbjährlich: ${currency}${Math.round(numericPrice * 4.2)} - 6 Monate`
        ],
        [
          `${product} Starter: ${currency}${numericPrice} - Perfekter Beginn`,
          `${product} Professionell: ${currency}${Math.round(numericPrice * 1.9)} - Professionelle Nutzung`,
          `${product} Master: ${currency}${Math.round(numericPrice * 3.3)} - Garantierte Ergebnisse`
        ]
      ];
      break;
    case 'it':
      priceVariations = [
        [
          `${product} 1 unità: ${currency}${numericPrice} - Consegna in tutta ${countryName}`,
          `${product} Kit 3 unità: ${currency}${Math.round(numericPrice * 2.1)} - Spedizione gratuita`,
          `${product} Kit completo: ${currency}${Math.round(numericPrice * 3.1)} - Migliore offerta`
        ],
        [
          `${product} Base: ${currency}${numericPrice} - Spedizione inclusa`,
          `${product} Standard: ${currency}${Math.round(numericPrice * 1.8)} - Più popolare`,
          `${product} Premium: ${currency}${Math.round(numericPrice * 2.9)} - Massimo risparmio`
        ],
        [
          `${product} Individuale: ${currency}${numericPrice} - Prova iniziale`,
          `${product} Duo: ${currency}${Math.round(numericPrice * 1.7)} - Per coppie`,
          `${product} Famiglia: ${currency}${Math.round(numericPrice * 2.5)} - Per tutta la famiglia`
        ],
        [
          `${product} Mese 1: ${currency}${numericPrice} - Primo mese`,
          `${product} Trimestrale: ${currency}${Math.round(numericPrice * 2.4)} - 3 mesi`,
          `${product} Semestrale: ${currency}${Math.round(numericPrice * 4.2)} - 6 mesi`
        ],
        [
          `${product} Starter: ${currency}${numericPrice} - Inizio perfetto`,
          `${product} Professionale: ${currency}${Math.round(numericPrice * 1.9)} - Uso professionale`,
          `${product} Master: ${currency}${Math.round(numericPrice * 3.3)} - Risultati garantiti`
        ]
      ];
      break;
    case 'ja':
      priceVariations = [
        [
          `${product} 1個: ${currency}${numericPrice} - ${countryName}全国配送`,
          `${product} 3個セット: ${currency}${Math.round(numericPrice * 2.1)} - 送料無料`,
          `${product} コンプリートキット: ${currency}${Math.round(numericPrice * 3.1)} - 最優秀オファー`
        ],
        [
          `${product} ベーシック: ${currency}${numericPrice} - 送料込み`,
          `${product} スタンダード: ${currency}${Math.round(numericPrice * 1.8)} - 最も人気`,
          `${product} プレミアム: ${currency}${Math.round(numericPrice * 2.9)} - 最大節約`
        ],
        [
          `${product} 個人用: ${currency}${numericPrice} - お試しスタート`,
          `${product} デュオ: ${currency}${Math.round(numericPrice * 1.7)} - カップル向け`,
          `${product} ファミリー: ${currency}${Math.round(numericPrice * 2.5)} - ご家族向け`
        ],
        [
          `${product} 1ヶ月目: ${currency}${numericPrice} - 初月`,
          `${product} 3ヶ月: ${currency}${Math.round(numericPrice * 2.4)} - 四半期`,
          `${product} 6ヶ月: ${currency}${Math.round(numericPrice * 4.2)} - 半年`
        ],
        [
          `${product} スターター: ${currency}${numericPrice} - 完璧なスタート`,
          `${product} プロフェッショナル: ${currency}${Math.round(numericPrice * 1.9)} - プロ仕様`,
          `${product} マスター: ${currency}${Math.round(numericPrice * 3.3)} - 結果保証`
        ]
      ];
      break;
    case 'zh':
      priceVariations = [
        [
          `${product} 1件: ${currency}${numericPrice} - 配送至全${countryName}`,
          `${product} 3件套装: ${currency}${Math.round(numericPrice * 2.1)} - 免费送货`,
          `${product} 完整套装: ${currency}${Math.round(numericPrice * 3.1)} - 最优惠价`
        ],
        [
          `${product} 基础版: ${currency}${numericPrice} - 包邮`,
          `${product} 标准版: ${currency}${Math.round(numericPrice * 1.8)} - 最受欢迎`,
          `${product} 高级版: ${currency}${Math.round(numericPrice * 2.9)} - 最大节省`
        ],
        [
          `${product} 个人装: ${currency}${numericPrice} - 试用入门`,
          `${product} 双人装: ${currency}${Math.round(numericPrice * 1.7)} - 情侣专用`,
          `${product} 家庭装: ${currency}${Math.round(numericPrice * 2.5)} - 全家适用`
        ],
        [
          `${product} 1个月: ${currency}${numericPrice} - 首月`,
          `${product} 季度装: ${currency}${Math.round(numericPrice * 2.4)} - 3个月`,
          `${product} 半年装: ${currency}${Math.round(numericPrice * 4.2)} - 6个月`
        ],
        [
          `${product} 入门版: ${currency}${numericPrice} - 完美开始`,
          `${product} 专业版: ${currency}${Math.round(numericPrice * 1.9)} - 专业使用`,
          `${product} 大师版: ${currency}${Math.round(numericPrice * 3.3)} - 效果保证`
        ]
      ];
      break;
    case 'ar':
      priceVariations = [
        [
          `${product} قطعة واحدة: ${currency}${numericPrice} - التوصيل لجميع أنحاء ${countryName}`,
          `${product} طقم 3 قطع: ${currency}${Math.round(numericPrice * 2.1)} - شحن مجاني`,
          `${product} الطقم الكامل: ${currency}${Math.round(numericPrice * 3.1)} - أفضل عرض`
        ],
        [
          `${product} أساسي: ${currency}${numericPrice} - الشحن مشمول`,
          `${product} قياسي: ${currency}${Math.round(numericPrice * 1.8)} - الأكثر شعبية`,
          `${product} مميز: ${currency}${Math.round(numericPrice * 2.9)} - أقصى توفير`
        ],
        [
          `${product} فردي: ${currency}${numericPrice} - بداية تجريبية`,
          `${product} ثنائي: ${currency}${Math.round(numericPrice * 1.7)} - للأزواج`,
          `${product} عائلي: ${currency}${Math.round(numericPrice * 2.5)} - للعائلة كلها`
        ],
        [
          `${product} الشهر الأول: ${currency}${numericPrice} - شهر أول`,
          `${product} ربع سنوي: ${currency}${Math.round(numericPrice * 2.4)} - 3 أشهر`,
          `${product} نصف سنوي: ${currency}${Math.round(numericPrice * 4.2)} - 6 أشهر`
        ],
        [
          `${product} مبتدئ: ${currency}${numericPrice} - بداية مثالية`,
          `${product} محترف: ${currency}${Math.round(numericPrice * 1.9)} - استخدام مهني`,
          `${product} خبير: ${currency}${Math.round(numericPrice * 3.3)} - نتائج مضمونة`
        ]
      ];
      break;
    case 'hi':
      priceVariations = [
        [
          `${product} 1 यूनिट: ${currency}${numericPrice} - पूरे ${countryName} में डिलीवरी`,
          `${product} 3-यूनिट किट: ${currency}${Math.round(numericPrice * 2.1)} - मुफ्त शिपिंग`,
          `${product} कंप्लीट किट: ${currency}${Math.round(numericPrice * 3.1)} - बेस्ट ऑफर`
        ],
        [
          `${product} बेसिक: ${currency}${numericPrice} - शिपिंग शामिल`,
          `${product} स्टैंडर्ड: ${currency}${Math.round(numericPrice * 1.8)} - सबसे लोकप्रिय`,
          `${product} प्रीमियम: ${currency}${Math.round(numericPrice * 2.9)} - अधिकतम बचत`
        ],
        [
          `${product} व्यक्तिगत: ${currency}${numericPrice} - ट्रायल स्टार्ट`,
          `${product} डुओ: ${currency}${Math.round(numericPrice * 1.7)} - कपल्स के लिए`,
          `${product} फैमिली: ${currency}${Math.round(numericPrice * 2.5)} - पूरे परिवार के लिए`
        ],
        [
          `${product} महीना 1: ${currency}${numericPrice} - पहला महीना`,
          `${product} तिमाही: ${currency}${Math.round(numericPrice * 2.4)} - 3 महीने`,
          `${product} अर्धवार्षिक: ${currency}${Math.round(numericPrice * 4.2)} - 6 महीने`
        ],
        [
          `${product} स्टार्टर: ${currency}${numericPrice} - सही शुरुआत`,
          `${product} प्रोफेशनल: ${currency}${Math.round(numericPrice * 1.9)} - प्रोफेशनल यूज`,
          `${product} मास्टर: ${currency}${Math.round(numericPrice * 3.3)} - गारंटीड रिजल्ट्स`
        ]
      ];
      break;
    case 'tr':
      priceVariations = [
        [
          `${product} 1 adet: ${currency}${numericPrice} - Tüm ${countryName}'ye teslimat`,
          `${product} 3'lü kit: ${currency}${Math.round(numericPrice * 2.1)} - Ücretsiz kargo`,
          `${product} Komple kit: ${currency}${Math.round(numericPrice * 3.1)} - En iyi teklif`
        ],
        [
          `${product} Temel: ${currency}${numericPrice} - Kargo dahil`,
          `${product} Standart: ${currency}${Math.round(numericPrice * 1.8)} - En popüler`,
          `${product} Premium: ${currency}${Math.round(numericPrice * 2.9)} - Maksimum tasarruf`
        ],
        [
          `${product} Bireysel: ${currency}${numericPrice} - Deneme başlangıcı`,
          `${product} İkili: ${currency}${Math.round(numericPrice * 1.7)} - Çiftler için`,
          `${product} Aile: ${currency}${Math.round(numericPrice * 2.5)} - Tüm aile için`
        ],
        [
          `${product} 1. Ay: ${currency}${numericPrice} - İlk ay`,
          `${product} Üç aylık: ${currency}${Math.round(numericPrice * 2.4)} - 3 ay`,
          `${product} Altı aylık: ${currency}${Math.round(numericPrice * 4.2)} - 6 ay`
        ],
        [
          `${product} Başlangıç: ${currency}${numericPrice} - Mükemmel başlangıç`,
          `${product} Profesyonel: ${currency}${Math.round(numericPrice * 1.9)} - Profesyonel kullanım`,
          `${product} Usta: ${currency}${Math.round(numericPrice * 3.3)} - Garantili sonuçlar`
        ]
      ];
      break;
    case 'ru':
      priceVariations = [
        [
          `${product} 1 единица: ${currency}${numericPrice} - Доставка по всей ${countryName}`,
          `${product} Набор из 3: ${currency}${Math.round(numericPrice * 2.1)} - Бесплатная доставка`,
          `${product} Полный набор: ${currency}${Math.round(numericPrice * 3.1)} - Лучшее предложение`
        ],
        [
          `${product} Базовый: ${currency}${numericPrice} - Доставка включена`,
          `${product} Стандартный: ${currency}${Math.round(numericPrice * 1.8)} - Самый популярный`,
          `${product} Премиум: ${currency}${Math.round(numericPrice * 2.9)} - Максимальная экономия`
        ],
        [
          `${product} Индивидуальный: ${currency}${numericPrice} - Пробный старт`,
          `${product} Дуэт: ${currency}${Math.round(numericPrice * 1.7)} - Для пар`,
          `${product} Семейный: ${currency}${Math.round(numericPrice * 2.5)} - Для всей семьи`
        ],
        [
          `${product} 1 месяц: ${currency}${numericPrice} - Первый месяц`,
          `${product} Квартальный: ${currency}${Math.round(numericPrice * 2.4)} - 3 месяца`,
          `${product} Полугодовой: ${currency}${Math.round(numericPrice * 4.2)} - 6 месяцев`
        ],
        [
          `${product} Стартер: ${currency}${numericPrice} - Идеальное начало`,
          `${product} Профессиональный: ${currency}${Math.round(numericPrice * 1.9)} - Профессиональное использование`,
          `${product} Мастер: ${currency}${Math.round(numericPrice * 3.3)} - Гарантированные результаты`
        ]
      ];
      break;
    default:
      priceVariations = [
        [
          `${product} 1 unidade: ${currency}${numericPrice} - Entrega para todo ${countryName}`,
          `${product} Kit 3 unidades: ${currency}${Math.round(numericPrice * 2.1)} - Frete grátis`,
          `${product} Kit completo: ${currency}${Math.round(numericPrice * 3.1)} - Melhor oferta`
        ],
        [
          `${product} Básico: ${currency}${numericPrice} - Frete incluído`,
          `${product} Padrão: ${currency}${Math.round(numericPrice * 1.8)} - Mais popular`,
          `${product} Premium: ${currency}${Math.round(numericPrice * 2.9)} - Máxima economia`
        ],
        [
          `${product} Individual: ${currency}${numericPrice} - Início experimental`,
          `${product} Duo: ${currency}${Math.round(numericPrice * 1.7)} - Para casais`,
          `${product} Família: ${currency}${Math.round(numericPrice * 2.5)} - Para toda família`
        ],
        [
          `${product} Mês 1: ${currency}${numericPrice} - Primeiro mês`,
          `${product} Trimestral: ${currency}${Math.round(numericPrice * 2.4)} - 3 meses`,
          `${product} Semestral: ${currency}${Math.round(numericPrice * 4.2)} - 6 meses`
        ],
        [
          `${product} Iniciante: ${currency}${numericPrice} - Começo perfeito`,
          `${product} Profissional: ${currency}${Math.round(numericPrice * 1.9)} - Uso profissional`,
          `${product} Master: ${currency}${Math.round(numericPrice * 3.3)} - Resultados garantidos`
        ]
      ];
  }
  
  return priceVariations.map(blocks => blocks.join('\n'));
};
