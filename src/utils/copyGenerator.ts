import { faker } from '@faker-js/faker';

interface LanguageTemplates {
  [key: string]: {
    titles: string[];
    descriptions: string[];
    usps: string[];
  };
}

const languageTemplates: LanguageTemplates = {
  pt: {
    titles: [
      "{product} - Distribuidor Oficial no Brasil",
      "Compre {product} Agora - {price}",
      "{product} - Produto de Qualidade",
      "Peça {product} - Frete Grátis",
      "{product} Original - Preço Especial {price}"
    ],
    descriptions: [
      "Adquira {product} com entrega rápida em todo o Brasil. Pagamento facilitado. Preço especial: {price}",
      "Compre {product} hoje e aproveite o frete grátis. Satisfação garantida ou seu dinheiro de volta.",
      "{product} - A solução ideal para [problema]. Resultados visíveis em poucos dias. Aproveite!",
      "Experimente {product} e transforme sua [situação]. Produto original com garantia estendida."
    ],
    usps: [
      "✅ Frete grátis para todo o Brasil",
      "✅ Pagamento facilitado em até 12x",
      "✅ Satisfação garantida ou seu dinheiro de volta",
      "✅ Atendimento ao cliente 24/7"
    ]
  },
  es: {
    titles: [
      "{product} - Distribuidor Oficial en España",
      "Compra {product} Ahora - {price}",
      "{product} - Producto de Calidad",
      "Pide {product} - Envío Gratis",
      "{product} Original - Precio Especial {price}"
    ],
    descriptions: [
      "Adquiere {product} con entrega rápida en toda España. Pago facilitado. Precio especial: {price}",
      "Compra {product} hoy y aprovecha el envío gratis. Satisfacción garantizada o te devolvemos tu dinero.",
      "{product} - La solución ideal para [problema]. Resultados visibles en pocos días. ¡Aprovecha!",
      "Experimenta {product} y transforma tu [situación]. Producto original con garantía extendida."
    ],
    usps: [
      "✅ Envío gratis a toda España",
      "✅ Pago facilitado en hasta 12 cuotas",
      "✅ Satisfacción garantizada o te devolvemos tu dinero",
      "✅ Atención al cliente 24/7"
    ]
  },
  fr: {
    titles: [
      "{product} - Distributeur Officiel en France",
      "Achetez {product} Maintenant - {price}",
      "{product} - Produit de Qualité",
      "Commandez {product} - Livraison Gratuite",
      "{product} Original - Prix Spécial {price}"
    ],
    descriptions: [
      "Obtenez {product} avec une livraison rapide dans toute la France. Paiement facilité. Prix spécial : {price}",
      "Achetez {product} aujourd'hui et profitez de la livraison gratuite. Satisfaction garantie ou remboursé.",
      "{product} - La solution idéale pour [problème]. Résultats visibles en quelques jours. Profitez-en !",
      "Essayez {product} et transformez votre [situation]. Produit original avec garantie prolongée."
    ],
    usps: [
      "✅ Livraison gratuite dans toute la France",
      "✅ Paiement facilité jusqu'à 12 fois",
      "✅ Satisfaction garantie ou remboursé",
      "✅ Service client 24/7"
    ]
  },
  de: {
    titles: [
      "{product} - Offizieller Händler in Deutschland",
      "Kaufen Sie {product} Jetzt - {price}",
      "{product} - Qualitätsprodukt",
      "Bestellen Sie {product} - Kostenloser Versand",
      "{product} Original - Sonderpreis {price}"
    ],
    descriptions: [
      "Erhalten Sie {product} mit schneller Lieferung in ganz Deutschland. Bequeme Zahlung. Sonderpreis: {price}",
      "Kaufen Sie {product} heute und profitieren Sie vom kostenlosen Versand. Zufriedenheit garantiert oder Geld zurück.",
      "{product} - Die ideale Lösung für [Problem]. Sichtbare Ergebnisse in wenigen Tagen. Profitieren Sie jetzt!",
      "Testen Sie {product} und verwandeln Sie Ihre [Situation]. Originalprodukt mit erweiterter Garantie."
    ],
    usps: [
      "✅ Kostenloser Versand nach ganz Deutschland",
      "✅ Bequeme Zahlung in bis zu 12 Raten",
      "✅ Zufriedenheit garantiert oder Geld zurück",
      "✅ 24/7 Kundenservice"
    ]
  },
  it: {
    titles: [
      "{product} - Distributore Ufficiale in Italia",
      "Acquista {product} Ora - {price}",
      "{product} - Prodotto di Qualità",
      "Ordina {product} - Spedizione Gratuita",
      "{product} Originale - Prezzo Speciale {price}"
    ],
    descriptions: [
      "Acquista {product} con consegna rapida in tutta Italia. Pagamento agevolato. Prezzo speciale: {price}",
      "Acquista {product} oggi e approfitta della spedizione gratuita. Soddisfazione garantita o rimborsati.",
      "{product} - La soluzione ideale per [problema]. Risultati visibili in pochi giorni. Approfitta!",
      "Prova {product} e trasforma la tua [situazione]. Prodotto originale con garanzia estesa."
    ],
    usps: [
      "✅ Spedizione gratuita in tutta Italia",
      "✅ Pagamento agevolato fino a 12 rate",
      "✅ Soddisfazione garantita o rimborsati",
      "✅ Servizio clienti 24/7"
    ]
  },
  ru: {
    titles: [
      "{product} - Официальный дистрибьютор в России",
      "Купить {product} Сейчас - {price}",
      "{product} - Качественный продукт",
      "Закажите {product} - Бесплатная доставка",
      "{product} Оригинал - Специальная цена {price}"
    ],
    descriptions: [
      "Приобретите {product} с быстрой доставкой по всей России. Удобная оплата. Специальная цена: {price}",
      "Купите {product} сегодня и получите бесплатную доставку. Гарантия удовлетворения или возврат денег.",
      "{product} - Идеальное решение для [проблема]. Видимые результаты за несколько дней. Воспользуйтесь сейчас!",
      "Попробуйте {product} и преобразите свою [ситуацию]. Оригинальный продукт с расширенной гарантией."
    ],
    usps: [
      "✅ Бесплатная доставка по всей России",
      "✅ Удобная оплата до 12 месяцев",
      "✅ Гарантия удовлетворения или возврат денег",
      "✅ Круглосуточная поддержка клиентов"
    ]
  },
  zh: {
    titles: [
      "{product} - 中国官方经销商",
      "立即购买 {product} - {price}",
      "{product} - 优质产品",
      "订购 {product} - 免费送货",
      "{product} 原装 - 特价 {price}"
    ],
    descriptions: [
      "购买 {product}，快速送达中国各地。付款方便。特别价格：{price}",
      "今天购买 {product}，享受免费送货。保证满意或退款。",
      "{product} - 解决 [问题] 的理想方案。几天内见效。立即享受！",
      "试用 {product}，改变您的 [情况]。原装产品，保修期延长。"
    ],
    usps: [
      "✅ 中国各地免费送货",
      "✅ 方便付款，最多分 12 期",
      "✅ 保证满意或退款",
      "✅ 24/7 客户支持"
    ]
  },
  hi: {
    titles: [
      "{product} - भारत में आधिकारिक वितरक",
      "अभी {product} खरीदें - {price}",
      "{product} - गुणवत्ता उत्पाद",
      "{product} ऑर्डर करें - मुफ्त शिपिंग",
      "{product} मूल - विशेष मूल्य {price}"
    ],
    descriptions: [
      "पूरे भारत में तेजी से वितरण के साथ {product} प्राप्त करें। आसान भुगतान। विशेष मूल्य: {price}",
      "आज ही {product} खरीदें और मुफ्त शिपिंग का आनंद लें। संतुष्टि की गारंटी या पैसे वापस।",
      "{product} - [समस्या] के लिए आदर्श समाधान। कुछ दिनों में दृश्यमान परिणाम। अभी लाभ उठाएं!",
      "{product} का प्रयोग करें और अपनी [स्थिति] को बदलें। विस्तारित वारंटी के साथ मूल उत्पाद।"
    ],
    usps: [
      "✅ पूरे भारत में मुफ्त शिपिंग",
      "✅ 12 किश्तों तक में आसान भुगतान",
      "✅ संतुष्टि की गारंटी या पैसे वापस",
      "✅ 24/7 ग्राहक सहायता"
    ]
  },
  pl: {
    titles: [
      "{product} - Oficjalny dystrybutor w Polsce",
      "Kup {product} Teraz - {price}",
      "{product} - Produkt wysokiej jakości",
      "Zamów {product} - Darmowa wysyłka",
      "{product} Oryginalny - Cena specjalna {price}"
    ],
    descriptions: [
      "Kup {product} z szybką dostawą w całej Polsce. Wygodna płatność. Cena specjalna: {price}",
      "Kup {product} już dziś i skorzystaj z darmowej wysyłki. Gwarancja satysfakcji lub zwrot pieniędzy.",
      "{product} - Idealne rozwiązanie dla [problem]. Widoczne rezultaty w kilka dni. Skorzystaj już teraz!",
      "Wypróbuj {product} i zmień swoją [sytuację]. Oryginalny produkt z przedłużoną gwarancją."
    ],
    usps: [
      "✅ Darmowa wysyłka w całej Polsce",
      "✅ Wygodna płatność do 12 rat",
      "✅ Gwarancja satysfakcji lub zwrot pieniędzy",
      "✅ Obsługa klienta 24/7"
    ]
  },
  fi: {
    titles: [
      "{product} - Virallinen jälleenmyyjä Suomessa",
      "Osta {product} Nyt - {price}",
      "{product} - Laadukas tuote",
      "Tilaa {product} - Ilmainen toimitus",
      "{product} Alkuperäinen - Erikoishinta {price}"
    ],
    descriptions: [
      "Hanki {product} nopealla toimituksella kaikkialle Suomeen. Helppo maksu. Erikoishinta: {price}",
      "Osta {product} tänään ja hyödynnä ilmainen toimitus. Tyytyväisyystakuu tai rahat takaisin.",
      "{product} - Ihanteellinen ratkaisu [ongelma]. Näkyviä tuloksia muutamassa päivässä. Hyödynnä nyt!",
      "Kokeile {product} ja muuta [tilanne]. Alkuperäinen tuote pidennetyn takuun kanssa."
    ],
    usps: [
      "✅ Ilmainen toimitus kaikkialle Suomeen",
      "✅ Helppo maksu jopa 12 erässä",
      "✅ Tyytyväisyystakuu tai rahat takaisin",
      "✅ Asiakaspalvelu 24/7"
    ]
  },
  sv: {
    titles: [
      "{product} - Officiell distributör i Sverige",
      "Köp {product} Nu - {price}",
      "{product} - Kvalitetsprodukt",
      "Beställ {product} - Fri frakt",
      "{product} Original - Specialpris {price}"
    ],
    descriptions: [
      "Få {product} med snabb leverans över hela Sverige. Bekväm betalning. Specialpris: {price}",
      "Köp {product} idag och dra nytta av fri frakt. Nöjdhetsgaranti eller pengarna tillbaka.",
      "{product} - Den idealiska lösningen för [problem]. Synliga resultat inom några dagar. Dra nytta nu!",
      "Testa {product} och förvandla din [situation]. Originalprodukt med förlängd garanti."
    ],
    usps: [
      "✅ Fri frakt över hela Sverige",
      "✅ Bekväm betalning upp till 12 delbetalningar",
      "✅ Nöjdhetsgaranti eller pengarna tillbaka",
      "✅ Kundsupport 24/7"
    ]
  },
  nl: {
    titles: [
      "{product} - Officiële distributeur in Nederland",
      "Koop {product} Nu - {price}",
      "{product} - Kwaliteitsproduct",
      "Bestel {product} - Gratis verzending",
      "{product} Origineel - Speciale prijs {price}"
    ],
    descriptions: [
      "Ontvang {product} met snelle levering in heel Nederland. Gemakkelijke betaling. Speciale prijs: {price}",
      "Koop {product} vandaag en profiteer van gratis verzending. Tevredenheidsgarantie of geld terug.",
      "{product} - De ideale oplossing voor [probleem]. Zichtbare resultaten binnen enkele dagen. Profiteer nu!",
      "Probeer {product} en transformeer uw [situatie]. Origineel product met verlengde garantie."
    ],
    usps: [
      "✅ Gratis verzending in heel Nederland",
      "✅ Gemakkelijke betaling tot 12 termijnen",
      "✅ Tevredenheidsgarantie of geld terug",
      "✅ Klantenservice 24/7"
    ]
  },
  da: {
    titles: [
      "{product} - Officiel distributør i Danmark",
      "Køb {product} Nu - {price}",
      "{product} - Kvalitetsprodukt",
      "Bestil {product} - Gratis fragt",
      "{product} Original - Specialpris {price}"
    ],
    descriptions: [
      "Få {product} med hurtig levering i hele Danmark. Nem betaling. Specialpris: {price}",
      "Køb {product} i dag og nyd gratis fragt. Tilfredshed garanteret eller pengene tilbage.",
      "{product} - Den ideelle løsning til [problem]. Synlige resultater inden for få dage. Udnyt nu!",
      "Prøv {product} og transformer din [situation]. Originalt produkt med forlænget garanti."
    ],
    usps: [
      "✅ Gratis fragt i hele Danmark",
      "✅ Nem betaling op til 12 rater",
      "✅ Tilfredshed garanteret eller pengene tilbage",
      "✅ Kundesupport 24/7"
    ]
  },
  no: {
    titles: [
      "{product} - Offisiell distributør i Norge",
      "Kjøp {product} Nå - {price}",
      "{product} - Kvalitetsprodukt",
      "Bestill {product} - Gratis frakt",
      "{product} Original - Spesialpris {price}"
    ],
    descriptions: [
      "Få {product} med rask levering i hele Norge. Enkel betaling. Spesialpris: {price}",
      "Kjøp {product} i dag og nyt gratis frakt. Tilfredshetsgaranti eller pengene tilbake.",
      "{product} - Den ideelle løsningen for [problem]. Synlige resultater innen få dager. Dra nytte nå!",
      "Prøv {product} og transformer din [situation]. Originalt produkt med utvidet garanti."
    ],
    usps: [
      "✅ Gratis frakt i hele Norge",
      "✅ Enkel betaling opptil 12 avdrag",
      "✅ Tilfredshetsgaranti eller pengene tilbake",
      "✅ Kundesupport 24/7"
    ]
  },
  en: {
    titles: [
      "{product} - Official Distributor",
      "Buy {product} Now - {price}",
      "{product} - Quality Product",
      "Order {product} - Free Shipping",
      "{product} Original - Special Price {price}"
    ],
    descriptions: [
      "Get {product} with fast delivery. Cash on delivery available. Special price: {price}",
      "Order {product} now and get free shipping. Payment on delivery.",
      "Quality {product} with full guarantee. Great price: {price}",
      "{product} - the best choice. Fast delivery and cash on delivery payment."
    ],
    usps: [
      "✅ Free shipping",
      "✅ Cash on delivery - safe and easy",
      "✅ Full money-back guarantee",
      "✅ 24/7 customer support"
    ]
  },
  cs: {
    titles: [
      "{product} - Oficiální prodejce v ČR",
      "Koupit {product} nyní - {price}",
      "{product} - Kvalitní produkt",
      "Objednat {product} - Doprava zdarma",
      "{product} Originál - Speciální cena {price}"
    ],
    descriptions: [
      "Získejte {product} s rychlým doručením po celé ČR. Platba na dobírku. Speciální cena: {price}",
      "Objednejte si {product} nyní a získejte dopravu zdarma. Platba při převzetí.",
      "Kvalitní produkt {product} s plnou zárukou. Skvělá cena: {price}",
      "{product} - nejlepší volba v České republice. Rychlé doručení a platba na dobírku."
    ],
    usps: [
      "✅ Doprava zdarma po celé ČR",
      "✅ Platba na dobírku - bezpečně a jednoduše",
      "✅ Plná záruka vrácení peněz",
      "✅ Zákaznická podpora 24/7"
    ]
  },
  sk: {
    titles: [
      "{product} - Oficiálny predajca na Slovensku",
      "Kúpiť {product} teraz - {price}",
      "{product} - Kvalitný produkt",
      "Objednať {product} - Doprava zadarmo",
      "{product} Originál - Špeciálna cena {price}"
    ],
    descriptions: [
      "Získajte {product} s rýchlym doručením po celom Slovensku. Platba na dobierku. Špeciálna cena: {price}",
      "Objednajte si {product} teraz a získajte dopravu zadarmo. Platba pri prevzatí.",
      "Kvalitný produkt {product} s plnou zárukou. Skvelá cena: {price}",
      "{product} - najlepšia voľba na Slovensku. Rýchle doručenie a platba na dobierku."
    ],
    usps: [
      "✅ Doprava zadarmo po celom Slovensku",
      "✅ Platba na dobierku - bezpečne a jednoducho",
      "✅ Plná záruka vrátenia peňazí",
      "✅ Zákaznícka podpora 24/7"
    ]
  },
  hu: {
    titles: [
      "{product} - Hivatalos forgalmazó Magyarországon",
      "Vásárolj {product} most - {price}",
      "{product} - Minőségi termék",
      "Rendeld meg a {product} - Ingyenes szállítás",
      "{product} Eredeti - Különleges ár {price}"
    ],
    descriptions: [
      "Szerezd be a {product} gyors szállítással egész Magyarországon. Utánvéttel fizethetsz. Különleges ár: {price}",
      "Rendeld meg a {product} most és kapj ingyenes szállítást. Fizetés átvételkor.",
      "Minőségi {product} teljes garanciával. Nagyszerű ár: {price}",
      "{product} - a legjobb választás Magyarországon. Gyors szállítás és utánvétes fizetés."
    ],
    usps: [
      "✅ Ingyenes szállítás egész Magyarországon",
      "✅ Utánvétes fizetés - biztonságos és egyszerű",
      "✅ Teljes pénzvisszafizetési garancia",
      "✅ Ügyfélszolgálat 24/7"
    ]
  },
  ro: {
    titles: [
      "{product} - Distribuitor oficial în România",
      "Cumpără {product} acum - {price}",
      "{product} - Produs de calitate",
      "Comandă {product} - Livrare gratuită",
      "{product} Original - Preț special {price}"
    ],
    descriptions: [
      "Obține {product} cu livrare rapidă în toată România. Plată la livrare. Preț special: {price}",
      "Comandă {product} acum și primești livrare gratuită. Plată la primire.",
      "Produs de calitate {product} cu garanție completă. Preț excelent: {price}",
      "{product} - cea mai bună alegere în România. Livrare rapidă și plată la livrare."
    ],
    usps: [
      "✅ Livrare gratuită în toată România",
      "✅ Plată la livrare - sigur și simplu",
      "✅ Garanție completă de returnare",
      "✅ Suport clienți 24/7"
    ]
  },
  bg: {
    titles: [
      "{product} - Официален дистрибутор в България",
      "Купи {product} сега - {price}",
      "{product} - Качествен продукт",
      "Поръчай {product} - Безплатна доставка",
      "{product} Оригинал - Специална цена {price}"
    ],
    descriptions: [
      "Получи {product} с бърза доставка в цяла България. Плащане при доставка. Специална цена: {price}",
      "Поръчай {product} сега и получи безплатна доставка. Плащане при получаване.",
      "Качествен продукт {product} с пълна гаранция. Отлична цена: {price}",
      "{product} - най-добрият избор в България. Бърза доставка и плащане при доставка."
    ],
    usps: [
      "✅ Безплатна доставка в цяла България",
      "✅ Плащане при доставка - сигурно и лесно",
      "✅ Пълна гаранция за връщане на парите",
      "✅ Клиентска поддръжка 24/7"
    ]
  },
  tr: {
    titles: [
      "{product} - Türkiye Resmi Distribütörü",
      "{product} Şimdi Satın Al - {price}",
      "{product} - Kaliteli Ürün",
      "{product} Sipariş Ver - Ücretsiz Kargo",
      "{product} Orijinal - Özel Fiyat {price}"
    ],
    descriptions: [
      "Türkiye genelinde hızlı teslimat ile {product} edinin. Kapıda ödeme. Özel fiyat: {price}",
      "{product} şimdi sipariş verin ve ücretsiz kargo kazanın. Teslimatta ödeme.",
      "Tam garantili kaliteli {product} ürünü. Harika fiyat: {price}",
      "{product} - Türkiye'deki en iyi seçim. Hızlı teslimat ve kapıda ödeme."
    ],
    usps: [
      "✅ Türkiye genelinde ücretsiz kargo",
      "✅ Kapıda ödeme - güvenli ve kolay",
      "✅ Tam para iadesi garantisi",
      "✅ 24/7 müşteri desteği"
    ]
  },
  he: {
    titles: [
      "{product} - המפיץ הרשמי בישראל",
      "קנה {product} עכשיו - {price}",
      "{product} - מוצר איכותי",
      "הזמן {product} - משלוח חינם",
      "{product} מקורי - מחיר מיוחד {price}"
    ],
    descriptions: [
      "קבל {product} עם משלוח מהיר בכל רחבי ישראל. תשלום במזומן. מחיר מיוחד: {price}",
      "הזמן {product} עכשיו וקבל משלוח חינם. תשלום בעת קבלת המוצר.",
      "מוצר איכותי {product} עם אחריות מלאה. מחיר מעולה: {price}",
      "{product} - הבחירה הטובה ביותר בישראל. משלוח מהיר ותשלום במזומן."
    ],
    usps: [
      "✅ משלוח חינם בכל רחבי ישראל",
      "✅ תשלום במזומן - בטוח וקל",
      "✅ אחריות מלאה להחזרת כסף",
      "✅ שירות לקוחות 24/7"
    ]
  },
  ar: {
    titles: [
      "{product} - الموزع الرسمي",
      "اشتري {product} الآن - {price}",
      "{product} - منتج عالي الجودة",
      "اطلب {product} - توصيل مجاني",
      "{product} الأصلي - سعر خاص {price}"
    ],
    descriptions: [
      "احصل على {product} مع التوصيل السريع. الدفع عند التسليم. سعر خاص: {price}",
      "اطلب {product} الآن واحصل على توصيل مجاني. الدفع عند الاستلام.",
      "منتج عالي الجودة {product} مع ضمان كامل. سعر ممتاز: {price}",
      "{product} - أفضل اختيار. توصيل سريع والدفع عند التسليم."
    ],
    usps: [
      "✅ توصيل مجاني",
      "✅ الدفع عند التسليم - آمن وسهل",
      "✅ ضمان كامل لاسترداد الأموال",
      "✅ دعم العملاء 24/7"
    ]
  }
};

const getLanguageForCountry = (countryName: string): string => {
  const countryLanguageMap: { [key: string]: string } = {
    'Brasil': 'pt',
    'United States': 'en',
    'España': 'es',
    'France': 'fr',
    'Deutschland': 'de',
    'Italia': 'it',
    'Россия': 'ru',
    '中国': 'zh',
    'भारत': 'hi',
    'Polska': 'pl',
    'Suomi': 'fi',
    'Sverige': 'sv',
    'Nederland': 'nl',
    'Danmark': 'da',
    'Norge': 'no',
    'Ireland': 'en',
    'Česko': 'cs',
    'Slovensko': 'sk',
    'Magyarország': 'hu',
    'România': 'ro',
    'България': 'bg',
    'Türkiye': 'tr',
    'ישראל': 'he',
    'الإمارات العربية المتحدة': 'ar',
    'المملكة العربية السعودية': 'ar'
  };

  return countryLanguageMap[countryName] || 'en';
};

export const generateCODCopies = (product: string, price: string, countryName: string, languageCode: string, funnel: string) => {
  const language = getLanguageForCountry(countryName);
  const templates = languageTemplates[language] || languageTemplates['en'];

  const titles = templates.titles.map(title =>
    title.replace('{product}', product).replace('{price}', price)
  );
  const descriptions = templates.descriptions.map(description =>
    description.replace('{product}', product).replace('{price}', price)
  );
  const usps = templates.usps.map(usp => usp);

  const sitelinks = Array.from({ length: 4 }, () => ({
    title: faker.commerce.productName(),
    description1: faker.lorem.sentence(),
    description2: faker.lorem.sentence(),
    url: faker.internet.url()
  }));

  return { titles, descriptions, usps, sitelinks };
};
