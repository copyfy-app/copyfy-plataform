
import { countries } from '../components/data/Countries';
import { getLanguageFromCountry } from './countryLanguageMapping';

// These functions now only generate English content for consistency
// Translation will be handled by the main copyGenerator function

export const generateStructuredSnippet = (product: string, country: string): string[] => {
  // Generate basic English snippets - will be translated by main function
  const snippetVariations = [
    `${product} available in ${country}, Cash on delivery guaranteed, Fast secure shipping, No advance payment`,
    `Get ${product} today, Pay on delivery in ${country}, Verified delivery, Satisfaction guaranteed`,
    `${product} COD ${country}, Inspect before paying, Free returns, 24/7 support`,
    `Secure ${product} order, Delivery to ${country}, Cash payment on receipt, Quick process`,
    `Authentic ${product}, Available in ${country}, COD available, Immediate delivery`,
    `Safe ${product} purchase, ${country} fast delivery, Cash on delivery, Risk-free`,
    `Original ${product}, COD service in ${country}, Verified delivery, Warranty included`,
    `Order ${product} now, ${country} available, Pay on receipt, Express shipping`
  ];
  
  return snippetVariations.map(values => `Category: COD Benefits\nValues: ${values}`);
};

export const generatePromotionExtension = (product: string, country: string): string[] => {
  // Generate basic English promotions - will be translated by main function
  const promotionVariations = [
    [`${product} available in ${country}`, `Cash on delivery guaranteed`, `Free shipping included`],
    [`Limited offer for ${product}`, `Only available in ${country}`, `Pay when you receive`],
    [`Authentic ${product}`, `Verified delivery to ${country}`, `No advance payments`],
    [`Last units of ${product}`, `COD available in ${country}`, `Satisfaction guaranteed`],
    [`${product} - Special offer`, `Express shipping to ${country}`, `Inspect before paying`],
    [`Original ${product} guaranteed`, `COD service in ${country}`, `Free returns`],
    [`${product} promotion`, `Available only in ${country}`, `Secure cash on delivery`],
    [`${product} - Limited stock`, `Fast delivery to ${country}`, `Zero purchase risk`]
  ];
  
  return promotionVariations.map(promos => promos.join('\n'));
};

export const generatePriceExtension = (product: string, price: string, country: string): string[] => {
  // Extract numeric value from price for calculations
  const numericPrice = parseFloat(price.replace(/[^\d.,]/g, '').replace(',', '.')) || 97;
  const currency = price.match(/[^\d\s.,]+/)?.[0] || '$';

  // Generate basic English price blocks - will be translated by main function
  const priceVariations = [
    [
      `${product}: ${currency}${numericPrice} - Cash on delivery in ${country}`,
      `2x ${product}: ${currency}${Math.round(numericPrice * 1.8)} - Quantity discount`,
      `3x ${product}: ${currency}${Math.round(numericPrice * 2.5)} - Special COD offer`
    ],
    [
      `Single ${product}: ${currency}${numericPrice} - Only in ${country}`,
      `${product} Pack: ${currency}${Math.round(numericPrice * 2.2)} - Free shipping`,
      `${product} Deal: ${currency}${Math.round(numericPrice * 3.1)} - Maximum savings`
    ],
    [
      `${product} Price: ${currency}${numericPrice} - COD available`,
      `${product} Discount: ${currency}${Math.round(numericPrice * 1.7)} - Limited time`,
      `${product} Promo: ${currency}${Math.round(numericPrice * 2.9)} - Today only`
    ],
    [
      `Basic ${product}: ${currency}${numericPrice} - Delivery to ${country}`,
      `Premium ${product}: ${currency}${Math.round(numericPrice * 2.1)} - Express shipping`,
      `Complete ${product}: ${currency}${Math.round(numericPrice * 3.3)} - Everything included`
    ],
    [
      `Buy ${product}: ${currency}${numericPrice} - Pay on receipt`,
      `Save on ${product}: ${currency}${Math.round(numericPrice * 1.9)} - Secure COD`,
      `Ultimate ${product}: ${currency}${Math.round(numericPrice * 2.8)} - Final offer`
    ]
  ];
  
  return priceVariations.map(blocks => blocks.join('\n'));
};
