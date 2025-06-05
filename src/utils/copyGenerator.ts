
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
      "{product} - Produto de Qualidade Superior",
      "Peça {product} - Frete Grátis",
      "{product} Original - Preço Especial {price}",
      "Oferta Limitada: {product} por {price}",
      "{product} - Melhor Preço Garantido",
      "Promoção {product} - Só Hoje {price}",
      "Desconto Especial {product} - {price}",
      "Aproveite: {product} com Desconto",
      "{product} Premium - Qualidade Garantida",
      "Mega Oferta {product} - {price}",
      "Última Chance: {product} por {price}",
      "{product} - Entrega Imediata",
      "Oferta Relâmpago: {product} {price}",
      "Compre Já: {product} - {price}",
      "{product} - Pagamento na Entrega",
      "Super Desconto: {product} por {price}",
      "{product} - Produto do Ano",
      "Imperdível: {product} apenas {price}",
      "{product} - Satisfação Garantida",
      "Promoção Única: {product} {price}",
      "{product} - Líder de Vendas",
      "Oferta Exclusiva: {product} por {price}",
      "{product} - Compre com Segurança",
      "Desconto Especial: {product} {price}",
      "{product} - Produto Aprovado",
      "Melhor Oferta: {product} apenas {price}",
      "{product} - Qualidade Premium",
      "Aproveite Agora: {product} por {price}"
    ],
    descriptions: [
      "Adquira {product} com entrega rápida em todo o Brasil. Pagamento facilitado. Preço especial: {price}",
      "Compre {product} hoje e aproveite o frete grátis. Satisfação garantida ou seu dinheiro de volta.",
      "{product} - A solução ideal para sua necessidade. Resultados visíveis em poucos dias. Aproveite!",
      "Experimente {product} e transforme sua vida. Produto original com garantia estendida.",
      "Oferta limitada de {product} por apenas {price}. Não perca esta oportunidade única!",
      "Produto {product} com qualidade premium. Entrega rápida e segura em todo território nacional.",
      "Aproveite o desconto especial em {product}. Pagamento facilitado em até 12x sem juros.",
      "{product} - O produto mais vendido do mercado. Garantia total de qualidade e eficácia."
    ],
    usps: [
      "✅ Frete grátis para todo o Brasil",
      "✅ Pagamento facilitado em até 12x",
      "✅ Satisfação garantida ou seu dinheiro de volta",
      "✅ Atendimento ao cliente 24/7"
    ]
  },
  en: {
    titles: [
      "{product} - Official Distributor",
      "Buy {product} Now - {price}",
      "{product} - Premium Quality Product",
      "Order {product} - Free Shipping",
      "{product} Original - Special Price {price}",
      "Limited Offer: {product} for {price}",
      "{product} - Best Price Guaranteed",
      "Flash Sale {product} - Today Only {price}",
      "Special Discount {product} - {price}",
      "Don't Miss: {product} with Discount",
      "{product} Premium - Quality Assured",
      "Mega Deal {product} - {price}",
      "Last Chance: {product} for {price}",
      "{product} - Immediate Delivery",
      "Lightning Deal: {product} {price}",
      "Buy Now: {product} - {price}",
      "{product} - Cash on Delivery",
      "Super Discount: {product} for {price}",
      "{product} - Product of the Year",
      "Unmissable: {product} only {price}",
      "{product} - Satisfaction Guaranteed",
      "Exclusive Offer: {product} {price}",
      "{product} - Best Seller",
      "Special Deal: {product} for {price}",
      "{product} - Buy with Confidence",
      "Special Discount: {product} {price}",
      "{product} - Approved Product",
      "Best Offer: {product} only {price}",
      "{product} - Premium Quality",
      "Act Now: {product} for {price}"
    ],
    descriptions: [
      "Get {product} with fast delivery worldwide. Easy payment options. Special price: {price}",
      "Order {product} today and enjoy free shipping. Satisfaction guaranteed or money back.",
      "{product} - The perfect solution for your needs. Visible results in just days. Don't wait!",
      "Try {product} and transform your life. Original product with extended warranty.",
      "Limited time offer for {product} at only {price}. Don't miss this unique opportunity!",
      "Premium quality {product} with fast and secure delivery worldwide.",
      "Take advantage of the special discount on {product}. Easy payment in up to 12 installments.",
      "{product} - The market's best-selling product. Full guarantee of quality and effectiveness."
    ],
    usps: [
      "✅ Free worldwide shipping",
      "✅ Easy payment up to 12 installments",
      "✅ Satisfaction guaranteed or money back",
      "✅ 24/7 customer support"
    ]
  },
  es: {
    titles: [
      "{product} - Distribuidor Oficial en España",
      "Compra {product} Ahora - {price}",
      "{product} - Producto de Calidad Superior",
      "Pide {product} - Envío Gratis",
      "{product} Original - Precio Especial {price}",
      "Oferta Limitada: {product} por {price}",
      "{product} - Mejor Precio Garantizado",
      "Oferta Flash {product} - Solo Hoy {price}",
      "Descuento Especial {product} - {price}",
      "No Te Pierdas: {product} con Descuento",
      "{product} Premium - Calidad Asegurada",
      "Mega Oferta {product} - {price}",
      "Última Oportunidad: {product} por {price}",
      "{product} - Entrega Inmediata",
      "Oferta Relámpago: {product} {price}",
      "Compra Ya: {product} - {price}",
      "{product} - Pago Contra Entrega",
      "Super Descuento: {product} por {price}",
      "{product} - Producto del Año",
      "Imperdible: {product} solo {price}",
      "{product} - Satisfacción Garantizada",
      "Oferta Exclusiva: {product} {price}",
      "{product} - Líder en Ventas",
      "Oferta Especial: {product} por {price}",
      "{product} - Compra con Confianza",
      "Descuento Especial: {product} {price}",
      "{product} - Producto Aprobado",
      "Mejor Oferta: {product} solo {price}",
      "{product} - Calidad Premium",
      "Actúa Ahora: {product} por {price}"
    ],
    descriptions: [
      "Obtén {product} con entrega rápida en toda España. Pago fácil. Precio especial: {price}",
      "Pide {product} hoy y disfruta del envío gratis. Satisfacción garantizada o dinero devuelto.",
      "{product} - La solución perfecta para tus necesidades. Resultados visibles en días. ¡No esperes!",
      "Prueba {product} y transforma tu vida. Producto original con garantía extendida.",
      "Oferta por tiempo limitado de {product} por solo {price}. ¡No pierdas esta oportunidad única!",
      "Producto {product} de calidad premium con entrega rápida y segura en todo el territorio.",
      "Aprovecha el descuento especial en {product}. Pago fácil hasta en 12 cuotas sin interés.",
      "{product} - El producto más vendido del mercado. Garantía total de calidad y eficacia."
    ],
    usps: [
      "✅ Envío gratis a toda España",
      "✅ Pago fácil hasta 12 cuotas",
      "✅ Satisfacción garantizada o dinero devuelto",
      "✅ Atención al cliente 24/7"
    ]
  },
  fr: {
    titles: [
      "{product} - Distributeur Officiel en France",
      "Achetez {product} Maintenant - {price}",
      "{product} - Produit de Qualité Supérieure",
      "Commandez {product} - Livraison Gratuite",
      "{product} Original - Prix Spécial {price}",
      "Offre Limitée: {product} pour {price}",
      "{product} - Meilleur Prix Garanti",
      "Vente Flash {product} - Aujourd'hui Seulement {price}",
      "Réduction Spéciale {product} - {price}",
      "Ne Ratez Pas: {product} avec Réduction",
      "{product} Premium - Qualité Assurée",
      "Méga Offre {product} - {price}",
      "Dernière Chance: {product} pour {price}",
      "{product} - Livraison Immédiate",
      "Offre Éclair: {product} {price}",
      "Achetez Maintenant: {product} - {price}",
      "{product} - Paiement à la Livraison",
      "Super Réduction: {product} pour {price}",
      "{product} - Produit de l'Année",
      "Immanquable: {product} seulement {price}",
      "{product} - Satisfaction Garantie",
      "Offre Exclusive: {product} {price}",
      "{product} - Leader des Ventes",
      "Offre Spéciale: {product} pour {price}",
      "{product} - Achetez en Confiance",
      "Réduction Spéciale: {product} {price}",
      "{product} - Produit Approuvé",
      "Meilleure Offre: {product} seulement {price}",
      "{product} - Qualité Premium",
      "Agissez Maintenant: {product} pour {price}"
    ],
    descriptions: [
      "Obtenez {product} avec livraison rapide en France. Paiement facile. Prix spécial: {price}",
      "Commandez {product} aujourd'hui et profitez de la livraison gratuite. Satisfaction garantie ou remboursé.",
      "{product} - La solution parfaite pour vos besoins. Résultats visibles en quelques jours. N'attendez pas!",
      "Essayez {product} et transformez votre vie. Produit original avec garantie étendue.",
      "Offre limitée pour {product} à seulement {price}. Ne manquez pas cette opportunité unique!",
      "Produit {product} de qualité premium avec livraison rapide et sécurisée sur tout le territoire.",
      "Profitez de la réduction spéciale sur {product}. Paiement facile jusqu'à 12 fois sans frais.",
      "{product} - Le produit le plus vendu du marché. Garantie totale de qualité et d'efficacité."
    ],
    usps: [
      "✅ Livraison gratuite en France",
      "✅ Paiement facile jusqu'à 12 fois",
      "✅ Satisfaction garantie ou remboursé",
      "✅ Support client 24/7"
    ]
  },
  de: {
    titles: [
      "{product} - Offizieller Händler in Deutschland",
      "Kaufen Sie {product} Jetzt - {price}",
      "{product} - Hochwertiges Qualitätsprodukt",
      "Bestellen Sie {product} - Kostenloser Versand",
      "{product} Original - Sonderpreis {price}",
      "Limitiertes Angebot: {product} für {price}",
      "{product} - Bester Preis Garantiert",
      "Blitzangebot {product} - Nur Heute {price}",
      "Sonderrabatt {product} - {price}",
      "Verpassen Sie Nicht: {product} mit Rabatt",
      "{product} Premium - Qualität Garantiert",
      "Mega-Angebot {product} - {price}",
      "Letzte Chance: {product} für {price}",
      "{product} - Sofortige Lieferung",
      "Blitz-Deal: {product} {price}",
      "Jetzt Kaufen: {product} - {price}",
      "{product} - Zahlung bei Lieferung",
      "Super-Rabatt: {product} für {price}",
      "{product} - Produkt des Jahres",
      "Unschlagbar: {product} nur {price}",
      "{product} - Zufriedenheit Garantiert",
      "Exklusives Angebot: {product} {price}",
      "{product} - Verkaufsschlager",
      "Sonderangebot: {product} für {price}",
      "{product} - Vertrauensvoll Kaufen",
      "Sonderrabatt: {product} {price}",
      "{product} - Zugelassenes Produkt",
      "Bestes Angebot: {product} nur {price}",
      "{product} - Premium-Qualität",
      "Handeln Sie Jetzt: {product} für {price}"
    ],
    descriptions: [
      "Erhalten Sie {product} mit schneller Lieferung in Deutschland. Einfache Zahlung. Sonderpreis: {price}",
      "Bestellen Sie {product} heute und genießen Sie kostenlosen Versand. Zufriedenheit garantiert oder Geld zurück.",
      "{product} - Die perfekte Lösung für Ihre Bedürfnisse. Sichtbare Ergebnisse in wenigen Tagen. Warten Sie nicht!",
      "Probieren Sie {product} und transformieren Sie Ihr Leben. Originalprodukt mit erweiterter Garantie.",
      "Zeitlich begrenztes Angebot für {product} für nur {price}. Verpassen Sie nicht diese einmalige Gelegenheit!",
      "Premium-Qualitätsprodukt {product} mit schneller und sicherer Lieferung im ganzen Land.",
      "Nutzen Sie den Sonderrabatt auf {product}. Einfache Zahlung bis zu 12 Raten zinsfrei.",
      "{product} - Das meistverkaufte Produkt am Markt. Vollständige Garantie für Qualität und Wirksamkeit."
    ],
    usps: [
      "✅ Kostenloser Versand nach Deutschland",
      "✅ Einfache Zahlung bis zu 12 Raten",
      "✅ Zufriedenheit garantiert oder Geld zurück",
      "✅ 24/7 Kundensupport"
    ]
  },
  it: {
    titles: [
      "{product} - Distributore Ufficiale in Italia",
      "Acquista {product} Ora - {price}",
      "{product} - Prodotto di Qualità Superiore",
      "Ordina {product} - Spedizione Gratuita",
      "{product} Originale - Prezzo Speciale {price}",
      "Offerta Limitata: {product} per {price}",
      "{product} - Miglior Prezzo Garantito",
      "Offerta Flash {product} - Solo Oggi {price}",
      "Sconto Speciale {product} - {price}",
      "Non Perdere: {product} con Sconto",
      "{product} Premium - Qualità Assicurata",
      "Mega Offerta {product} - {price}",
      "Ultima Occasione: {product} per {price}",
      "{product} - Consegna Immediata",
      "Offerta Lampo: {product} {price}",
      "Compra Subito: {product} - {price}",
      "{product} - Pagamento alla Consegna",
      "Super Sconto: {product} per {price}",
      "{product} - Prodotto dell'Anno",
      "Imperdibile: {product} solo {price}",
      "{product} - Soddisfazione Garantita",
      "Offerta Esclusiva: {product} {price}",
      "{product} - Leader delle Vendite",
      "Offerta Speciale: {product} per {price}",
      "{product} - Compra con Fiducia",
      "Sconto Speciale: {product} {price}",
      "{product} - Prodotto Approvato",
      "Migliore Offerta: {product} solo {price}",
      "{product} - Qualità Premium",
      "Agisci Ora: {product} per {price}"
    ],
    descriptions: [
      "Ottieni {product} con consegna veloce in Italia. Pagamento facile. Prezzo speciale: {price}",
      "Ordina {product} oggi e goditi la spedizione gratuita. Soddisfazione garantita o rimborso.",
      "{product} - La soluzione perfetta per le tue esigenze. Risultati visibili in pochi giorni. Non aspettare!",
      "Prova {product} e trasforma la tua vita. Prodotto originale con garanzia estesa.",
      "Offerta a tempo limitato per {product} a soli {price}. Non perdere questa opportunità unica!",
      "Prodotto {product} di qualità premium con consegna veloce e sicura in tutto il territorio.",
      "Approfitta dello sconto speciale su {product}. Pagamento facile fino a 12 rate senza interessi.",
      "{product} - Il prodotto più venduto sul mercato. Garanzia totale di qualità ed efficacia."
    ],
    usps: [
      "✅ Spedizione gratuita in Italia",
      "✅ Pagamento facile fino a 12 rate",
      "✅ Soddisfazione garantita o rimborso",
      "✅ Supporto clienti 24/7"
    ]
  },
  ru: {
    titles: [
      "{product} - Официальный дистрибьютор в России",
      "Купить {product} Сейчас - {price}",
      "{product} - Качественный продукт премиум-класса",
      "Закажите {product} - Бесплатная доставка",
      "{product} Оригинал - Специальная цена {price}",
      "Ограниченное предложение: {product} за {price}",
      "{product} - Лучшая цена гарантирована",
      "Мгновенная распродажа {product} - Только сегодня {price}",
      "Специальная скидка {product} - {price}",
      "Не пропустите: {product} со скидкой",
      "{product} Премиум - Качество гарантировано",
      "Мега предложение {product} - {price}",
      "Последний шанс: {product} за {price}",
      "{product} - Немедленная доставка",
      "Молниеносная сделка: {product} {price}",
      "Купить сейчас: {product} - {price}",
      "{product} - Оплата при доставке",
      "Супер скидка: {product} за {price}",
      "{product} - Продукт года",
      "Незаменимо: {product} только {price}",
      "{product} - Гарантия удовлетворения",
      "Эксклюзивное предложение: {product} {price}",
      "{product} - Лидер продаж",
      "Специальная сделка: {product} за {price}",
      "{product} - Покупайте с уверенностью",
      "Специальная скидка: {product} {price}",
      "{product} - Одобренный продукт",
      "Лучшее предложение: {product} только {price}",
      "{product} - Премиум качество",
      "Действуйте сейчас: {product} за {price}"
    ],
    descriptions: [
      "Получите {product} с быстрой доставкой по России. Легкий платеж. Специальная цена: {price}",
      "Закажите {product} сегодня и наслаждайтесь бесплатной доставкой. Гарантия удовлетворения или возврат денег.",
      "{product} - Идеальное решение для ваших потребностей. Видимые результаты за несколько дней. Не ждите!",
      "Попробуйте {product} и преобразите свою жизнь. Оригинальный продукт с расширенной гарантией.",
      "Ограниченное по времени предложение {product} всего за {price}. Не упустите эту уникальную возможность!",
      "Продукт {product} премиум-качества с быстрой и безопасной доставкой по всей территории.",
      "Воспользуйтесь специальной скидкой на {product}. Легкий платеж до 12 платежей без процентов.",
      "{product} - Самый продаваемый продукт на рынке. Полная гарантия качества и эффективности."
    ],
    usps: [
      "✅ Бесплатная доставка по России",
      "✅ Легкий платеж до 12 платежей",
      "✅ Гарантия удовлетворения или возврат денег",
      "✅ Поддержка клиентов 24/7"
    ]
  },
  zh: {
    titles: [
      "{product} - 中国官方经销商",
      "立即购买 {product} - {price}",
      "{product} - 优质高端产品",
      "订购 {product} - 免费送货",
      "{product} 正品 - 特价 {price}",
      "限时优惠：{product} 仅售 {price}",
      "{product} - 最优价格保证",
      "闪购 {product} - 仅限今日 {price}",
      "特别折扣 {product} - {price}",
      "别错过：{product} 折扣优惠",
      "{product} 高端 - 品质保证",
      "超值优惠 {product} - {price}",
      "最后机会：{product} 仅售 {price}",
      "{product} - 立即发货",
      "限时抢购：{product} {price}",
      "立即购买：{product} - {price}",
      "{product} - 货到付款",
      "超级折扣：{product} 仅售 {price}",
      "{product} - 年度产品",
      "不可错过：{product} 仅 {price}",
      "{product} - 满意保证",
      "独家优惠：{product} {price}",
      "{product} - 销量冠军",
      "特别优惠：{product} 仅售 {price}",
      "{product} - 放心购买",
      "特别折扣：{product} {price}",
      "{product} - 认证产品",
      "最佳优惠：{product} 仅 {price}",
      "{product} - 高端品质",
      "立即行动：{product} 仅售 {price}"
    ],
    descriptions: [
      "购买 {product}，中国境内快速配送。便捷支付。特价：{price}",
      "今日订购 {product}，享受免费配送。满意保证或退款。",
      "{product} - 满足您需求的完美解决方案。几天内见效。不要等待！",
      "试用 {product}，改变您的生活。正品，延长保修。",
      "{product} 限时优惠价仅 {price}。不要错过这个独特的机会！",
      "高端品质 {product}，全国快速安全配送。",
      "享受 {product} 特别折扣。便捷支付，最多12期免息。",
      "{product} - 市场上最畅销的产品。品质和效果全面保证。"
    ],
    usps: [
      "✅ 中国境内免费配送",
      "✅ 便捷支付最多12期",
      "✅ 满意保证或退款",
      "✅ 24/7客户支持"
    ]
  },
  hi: {
    titles: [
      "{product} - भारत में आधिकारिक वितरक",
      "अभी {product} खरीदें - {price}",
      "{product} - उच्च गुणवत्ता प्रीमियम उत्पाद",
      "{product} ऑर्डर करें - मुफ्त शिपिंग",
      "{product} मूल - विशेष मूल्य {price}",
      "सीमित ऑफर: {product} केवल {price} में",
      "{product} - सर्वोत्तम मूल्य गारंटी",
      "फ्लैश सेल {product} - केवल आज {price}",
      "विशेष छूट {product} - {price}",
      "न चूकें: {product} छूट के साथ",
      "{product} प्रीमियम - गुणवत्ता सुनिश्चित",
      "मेगा ऑफर {product} - {price}",
      "अंतिम मौका: {product} केवल {price}",
      "{product} - तुरंत डिलीवरी",
      "बिजली डील: {product} {price}",
      "अभी खरीदें: {product} - {price}",
      "{product} - डिलीवरी पर भुगतान",
      "सुपर छूट: {product} केवल {price}",
      "{product} - वर्ष का उत्पाद",
      "अनमोल: {product} केवल {price}",
      "{product} - संतुष्टि गारंटी",
      "विशेष ऑफर: {product} {price}",
      "{product} - बिक्री लीडर",
      "विशेष डील: {product} केवल {price}",
      "{product} - विश्वास के साथ खरीदें",
      "विशेष छूट: {product} {price}",
      "{product} - अनुमोदित उत्पाद",
      "सर्वोत्तम ऑफर: {product} केवल {price}",
      "{product} - प्रीमियम गुणवत्ता",
      "अभी कार्य करें: {product} केवल {price}"
    ],
    descriptions: [
      "भारत भर में तेज़ डिलीवरी के साथ {product} प्राप्त करें। आसान भुगतान। विशेष मूल्य: {price}",
      "आज {product} ऑर्डर करें और मुफ्त शिपिंग का आनंद लें। संतुष्टि गारंटी या पैसे वापस।",
      "{product} - आपकी आवश्यकताओं के लिए सही समाधान। कुछ दिनों में दिखने वाले परिणाम। प्रतीक्षा न करें!",
      "{product} आज़माएं और अपना जीवन बदलें। मूल उत्पाद विस्तारित वारंटी के साथ।",
      "{product} के लिए सीमित समय ऑफर केवल {price} में। इस अनोखे अवसर को न चूकें!",
      "प्रीमियम गुणवत्ता {product} पूरे देश में तेज़ और सुरक्षित डिलीवरी के साथ।",
      "{product} पर विशेष छूट का लाभ उठाएं। 12 किश्तों तक आसान भुगतान बिना ब्याज।",
      "{product} - बाज़ार में सबसे ज्यादा बिकने वाला उत्पाद। गुणवत्ता और प्रभावशीलता की पूर्ण गारंटी।"
    ],
    usps: [
      "✅ भारत भर में मुफ्त शिपिंग",
      "✅ 12 किश्तों तक आसान भुगतान",
      "✅ संतुष्टि गारंटी या पैसे वापस",
      "✅ 24/7 ग्राहक सहायता"
    ]
  },
  ja: {
    titles: [
      "{product} - 日本公式販売代理店",
      "今すぐ{product}を購入 - {price}",
      "{product} - 高品質プレミアム製品",
      "{product}を注文 - 送料無料",
      "{product}正規品 - 特別価格{price}",
      "限定オファー: {product}が{price}",
      "{product} - 最安値保証",
      "フラッシュセール{product} - 本日限り{price}",
      "特別割引{product} - {price}",
      "お見逃しなく: {product}割引付き",
      "{product}プレミアム - 品質保証",
      "メガオファー{product} - {price}",
      "ラストチャンス: {product}が{price}",
      "{product} - 即日配送",
      "電光取引: {product} {price}",
      "今すぐ購入: {product} - {price}",
      "{product} - 代金引換",
      "スーパー割引: {product}が{price}",
      "{product} - 今年の製品",
      "見逃せない: {product}のみ{price}",
      "{product} - 満足保証",
      "限定オファー: {product} {price}",
      "{product} - 売上リーダー",
      "特別取引: {product}が{price}",
      "{product} - 安心してお買い物",
      "特別割引: {product} {price}",
      "{product} - 承認済み製品",
      "最高のオファー: {product}のみ{price}",
      "{product} - プレミアム品質",
      "今すぐ行動: {product}が{price}"
    ],
    descriptions: [
      "日本全国への迅速配送で{product}を入手。簡単支払い。特別価格: {price}",
      "今日{product}を注文して送料無料をお楽しみください。満足保証または返金。",
      "{product} - あなたのニーズに最適なソリューション。数日で目に見える結果。お待ちください!",
      "{product}を試してあなたの人生を変えてください。延長保証付き正規品。",
      "{product}の期間限定オファーがわずか{price}。このユニークな機会をお見逃しなく!",
      "プレミアム品質{product}全国への迅速で安全な配送付き。",
      "{product}の特別割引をお楽しみください。最大12回まで無利息での簡単支払い。",
      "{product} - 市場で最も売れている製品。品質と効果の完全保証。"
    ],
    usps: [
      "✅ 日本全国送料無料",
      "✅ 最大12回まで簡単支払い",
      "✅ 満足保証または返金",
      "✅ 24/7カスタマーサポート"
    ]
  }
};

const countryLanguageMap: { [key: string]: string } = {
  'Brasil': 'pt', 'Argentina': 'es', 'México': 'es', 'Chile': 'es', 'Colombia': 'es',
  'Peru': 'es', 'Venezuela': 'es', 'Ecuador': 'es', 'Bolivia': 'es', 'Paraguay': 'es',
  'Uruguay': 'es', 'Costa Rica': 'es', 'Panamá': 'es', 'Guatemala': 'es', 'Honduras': 'es',
  'El Salvador': 'es', 'Nicaragua': 'es', 'República Dominicana': 'es', 'Cuba': 'es', 'España': 'es',
  'Portugal': 'pt', 'France': 'fr', 'Deutschland': 'de', 'Italia': 'it', 'United Kingdom': 'en',
  'Ireland': 'en', 'Netherlands': 'en', 'Belgium': 'fr', 'Switzerland': 'de', 'Austria': 'de',
  'Россия': 'ru', 'Ukraine': 'ru', 'Belarus': 'ru', 'Kazakhstan': 'ru', 'Uzbekistan': 'ru',
  '中国': 'zh', 'Japan': 'ja', '대한민국': 'en', 'Taiwan': 'zh', 'Hong Kong': 'zh',
  'भारत': 'hi', 'Pakistan': 'en', 'Bangladesh': 'en', 'Sri Lanka': 'en', 'Thailand': 'en',
  'Vietnam': 'en', 'Indonesia': 'en', 'Malaysia': 'en', 'Singapore': 'en', 'Philippines': 'en',
  'United States': 'en', 'Canada': 'en', 'Australia': 'en', 'New Zealand': 'en', 'South Africa': 'en',
  'Nigeria': 'en', 'Kenya': 'en', 'Ghana': 'en', 'Morocco': 'en', 'Egypt': 'en',
  'Turkey': 'en', 'Israel': 'en', 'Saudi Arabia': 'en', 'UAE': 'en', 'Iran': 'en',
  'Iraq': 'en', 'Jordan': 'en', 'Lebanon': 'en', 'Syria': 'en', 'Yemen': 'en',
  'Poland': 'en', 'Czech Republic': 'en', 'Slovakia': 'en', 'Hungary': 'en', 'Romania': 'en',
  'Bulgaria': 'en', 'Croatia': 'en', 'Serbia': 'en', 'Bosnia': 'en', 'Montenegro': 'en',
  'Albania': 'en', 'Macedonia': 'en', 'Slovenia': 'en', 'Estonia': 'en', 'Latvia': 'en',
  'Lithuania': 'en', 'Finland': 'en', 'Sweden': 'en', 'Norway': 'en', 'Denmark': 'en',
  'Iceland': 'en', 'Greece': 'en', 'Cyprus': 'en', 'Malta': 'en', 'Luxembourg': 'en'
};

const getLanguageForCountry = (countryName: string): string => {
  return countryLanguageMap[countryName] || 'en';
};

export const generateCODCopies = (product: string, price: string, countryName: string, languageCode: string, funnel: string) => {
  const language = getLanguageForCountry(countryName);
  const templates = languageTemplates[language] || languageTemplates['en'];

  // Generate 30 different titles by shuffling and extending the template array
  const allTitles = [...templates.titles];
  const shuffledTitles = allTitles.sort(() => Math.random() - 0.5);
  const titles = shuffledTitles.slice(0, 30).map(title =>
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
