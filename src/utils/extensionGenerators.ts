
import { countries } from '../components/data/Countries';
import { getLanguageFromCountry } from './countryLanguageMapping';

export const generateStructuredSnippet = (product: string, country: string): string => {
  const countryData = countries.find(c => c.value === country || c.name === country);
  const countryCode = countryData ? countryData.value : country;
  const languageCode = getLanguageFromCountry(countryCode);
  let values = "";
  
  switch (languageCode) {
    case 'es':
      values = "Gel facial, Crema nocturna, Contorno de ojos, Fórmula anti-edad";
      break;
    case 'en':
      values = "Facial serum, Night gel, Eye cream, Anti-aging formula";
      break;
    case 'fr':
      values = "Sérum facial, Gel de nuit, Crème contour des yeux, Formule anti-âge";
      break;
    case 'de':
      values = "Gesichtsserum, Nachtgel, Augencreme, Anti-Aging-Formel";
      break;
    case 'it':
      values = "Siero viso, Gel notte, Crema contorno occhi, Formula anti-età";
      break;
    case 'ja':
      values = "フェイシャルセラム, ナイトジェル, アイクリーム, アンチエイジング";
      break;
    case 'zh':
      values = "面部精华, 夜间凝胶, 眼霜, 抗衰老配方";
      break;
    case 'ar':
      values = "سيروم الوجه، جل ليلي، كريم العين، تركيبة مضادة للشيخوخة";
      break;
    case 'hi':
      values = "चेहरे का सीरम, नाइट जेल, आई क्रीम, एंटी-एजिंग फॉर्मूला";
      break;
    case 'tr':
      values = "Yüz serumu, Gece jeli, Göz kremi, Yaşlanma karşıtı formül";
      break;
    case 'ru':
      values = "Сыворотка для лица, Ночной гель, Крем для глаз, Антивозрастная формула";
      break;
    default:
      values = "Gel facial, Creme noturno, Creme para olhos, Fórmula anti-idade";
  }
  
  return `Categoria: Benefícios\nValores: ${values}`;
};

export const generatePromotionExtension = (product: string, country: string): string => {
  const countryData = countries.find(c => c.value === country || c.name === country);
  const countryCode = countryData ? countryData.value : country;
  const countryName = countryData ? countryData.name : country;
  const languageCode = getLanguageFromCountry(countryCode);
  let promotions = [];
  
  switch (languageCode) {
    case 'es':
      promotions = [
        `Descuento del 20% en el primer pedido`,
        `Envío gratis a toda ${countryName}`,
        `Compra 2 y llévate 3`
      ];
      break;
    case 'en':
      promotions = [
        `20% discount on first order`,
        `Free shipping to all ${countryName}`,
        `Buy 2 get 3`
      ];
      break;
    case 'fr':
      promotions = [
        `Réduction de 20% sur la première commande`,
        `Livraison gratuite dans toute la ${countryName}`,
        `Achetez 2 et obtenez 3`
      ];
      break;
    case 'de':
      promotions = [
        `20% Rabatt auf die erste Bestellung`,
        `Kostenloser Versand nach ganz ${countryName}`,
        `Kaufe 2 und erhalte 3`
      ];
      break;
    case 'it':
      promotions = [
        `Sconto del 20% sul primo ordine`,
        `Spedizione gratuita in tutta ${countryName}`,
        `Compra 2 e prendi 3`
      ];
      break;
    case 'ja':
      promotions = [
        `初回注文20%割引`,
        `${countryName}全国送料無料`,
        `2個買うと3個もらえる`
      ];
      break;
    case 'zh':
      promotions = [
        `首次订单享受20%折扣`,
        `${countryName}全国免费送货`,
        `买2送1`
      ];
      break;
    case 'ar':
      promotions = [
        `خصم 20% على الطلب الأول`,
        `شحن مجاني لجميع أنحاء ${countryName}`,
        `اشتر 2 واحصل على 3`
      ];
      break;
    case 'hi':
      promotions = [
        `पहले ऑर्डर पर 20% छूट`,
        `पूरे ${countryName} में मुफ्त शिपिंग`,
        `2 खरीदें और 3 पाएं`
      ];
      break;
    case 'tr':
      promotions = [
        `İlk siparişte %20 indirim`,
        `Tüm ${countryName}'ye ücretsiz kargo`,
        `2 al 3 öde`
      ];
      break;
    case 'ru':
      promotions = [
        `Скидка 20% на первый заказ`,
        `Бесплатная доставка по всей ${countryName}`,
        `Купи 2, получи 3`
      ];
      break;
    default:
      promotions = [
        `Desconto de 20% no primeiro pedido`,
        `Frete grátis para todo o ${countryName}`,
        `Compre 2 e leve 3`
      ];
  }
  
  return promotions.join('\n');
};

export const generatePriceExtension = (product: string, price: string, country: string): string => {
  const countryData = countries.find(c => c.value === country || c.name === country);
  const countryCode = countryData ? countryData.value : country;
  const countryName = countryData ? countryData.name : country;
  const languageCode = getLanguageFromCountry(countryCode);

  // Extract numeric value from price for calculations
  const numericPrice = parseFloat(price.replace(/[^\d.,]/g, '').replace(',', '.')) || 97;
  const currency = price.match(/[^\d\s.,]+/)?.[0] || 'R$';
  let priceBlocks = [];
  
  switch (languageCode) {
    case 'es':
      priceBlocks = [
        `${product} 1 unidad: ${currency}${numericPrice} - Entrega a toda ${countryName}`,
        `${product} Kit 3 unidades: ${currency}${Math.round(numericPrice * 2.1)} - Envío gratis`,
        `${product} Kit completo: ${currency}${Math.round(numericPrice * 3.1)} - Mejor oferta`
      ];
      break;
    case 'en':
      priceBlocks = [
        `${product} 1 unit: ${currency}${numericPrice} - Delivery to all ${countryName}`,
        `${product} 3-unit kit: ${currency}${Math.round(numericPrice * 2.1)} - Free shipping`,
        `${product} Complete kit: ${currency}${Math.round(numericPrice * 3.1)} - Best offer`
      ];
      break;
    case 'fr':
      priceBlocks = [
        `${product} 1 unité: ${currency}${numericPrice} - Livraison dans toute la ${countryName}`,
        `${product} Kit 3 unités: ${currency}${Math.round(numericPrice * 2.1)} - Livraison gratuite`,
        `${product} Kit complet: ${currency}${Math.round(numericPrice * 3.1)} - Meilleure offre`
      ];
      break;
    case 'de':
      priceBlocks = [
        `${product} 1 Einheit: ${currency}${numericPrice} - Lieferung nach ganz ${countryName}`,
        `${product} 3er-Kit: ${currency}${Math.round(numericPrice * 2.1)} - Kostenloser Versand`,
        `${product} Komplettes Kit: ${currency}${Math.round(numericPrice * 3.1)} - Bestes Angebot`
      ];
      break;
    case 'it':
      priceBlocks = [
        `${product} 1 unità: ${currency}${numericPrice} - Consegna in tutta ${countryName}`,
        `${product} Kit 3 unità: ${currency}${Math.round(numericPrice * 2.1)} - Spedizione gratuita`,
        `${product} Kit completo: ${currency}${Math.round(numericPrice * 3.1)} - Migliore offerta`
      ];
      break;
    case 'ja':
      priceBlocks = [
        `${product} 1個: ${currency}${numericPrice} - ${countryName}全国配送`,
        `${product} 3個セット: ${currency}${Math.round(numericPrice * 2.1)} - 送料無料`,
        `${product} コンプリートキット: ${currency}${Math.round(numericPrice * 3.1)} - 最優秀オファー`
      ];
      break;
    case 'zh':
      priceBlocks = [
        `${product} 1件: ${currency}${numericPrice} - 配送至全${countryName}`,
        `${product} 3件套装: ${currency}${Math.round(numericPrice * 2.1)} - 免费送货`,
        `${product} 完整套装: ${currency}${Math.round(numericPrice * 3.1)} - 最优惠价`
      ];
      break;
    case 'ar':
      priceBlocks = [
        `${product} قطعة واحدة: ${currency}${numericPrice} - التوصيل لجميع أنحاء ${countryName}`,
        `${product} طقم 3 قطع: ${currency}${Math.round(numericPrice * 2.1)} - شحن مجاني`,
        `${product} الطقم الكامل: ${currency}${Math.round(numericPrice * 3.1)} - أفضل عرض`
      ];
      break;
    case 'hi':
      priceBlocks = [
        `${product} 1 यूनिट: ${currency}${numericPrice} - पूरे ${countryName} में डिलीवरी`,
        `${product} 3-यूनिट किट: ${currency}${Math.round(numericPrice * 2.1)} - मुफ्त शिपिंग`,
        `${product} कंप्लीट किट: ${currency}${Math.round(numericPrice * 3.1)} - बेस्ट ऑफर`
      ];
      break;
    case 'tr':
      priceBlocks = [
        `${product} 1 adet: ${currency}${numericPrice} - Tüm ${countryName}'ye teslimat`,
        `${product} 3'lü kit: ${currency}${Math.round(numericPrice * 2.1)} - Ücretsiz kargo`,
        `${product} Komple kit: ${currency}${Math.round(numericPrice * 3.1)} - En iyi teklif`
      ];
      break;
    case 'ru':
      priceBlocks = [
        `${product} 1 единица: ${currency}${numericPrice} - Доставка по всей ${countryName}`,
        `${product} Набор из 3: ${currency}${Math.round(numericPrice * 2.1)} - Бесплатная доставка`,
        `${product} Полный набор: ${currency}${Math.round(numericPrice * 3.1)} - Лучшее предложение`
      ];
      break;
    default:
      priceBlocks = [
        `${product} 1 unidade: ${currency}${numericPrice} - Entrega para todo ${countryName}`,
        `${product} Kit 3 unidades: ${currency}${Math.round(numericPrice * 2.1)} - Frete grátis`,
        `${product} Kit completo: ${currency}${Math.round(numericPrice * 3.1)} - Melhor oferta`
      ];
  }
  
  return priceBlocks.join('\n');
};
