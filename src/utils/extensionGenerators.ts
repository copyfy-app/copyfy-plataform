import { countries } from '../components/data/Countries';
import { getLanguageFromCountry } from './countryLanguageMapping';

export const generateStructuredSnippet = (product: string, country: string): string[] => {
  const countryData = countries.find(c => c.value === country || c.name === country);
  const countryCode = countryData ? countryData.value : country;
  const countryName = countryData ? countryData.name : country;
  const languageCode = getLanguageFromCountry(countryCode);
  
  // Generate COD-focused snippets specifically for the product and country
  let snippetVariations: string[] = [];
  
  switch (languageCode) {
    case 'es':
      snippetVariations = [
        `${product} disponible en ${countryName}, Pago contra entrega garantizado, Envío rápido y seguro, Sin pagos por adelantado`,
        `Obtén ${product} hoy, Paga al recibir en ${countryName}, Entrega verificada, Satisfacción garantizada`,
        `${product} COD ${countryName}, Inspecciona antes de pagar, Devolución gratuita, Atención 24/7`,
        `Pedido seguro de ${product}, Entrega en ${countryName}, Pago en efectivo al recibir, Proceso rápido`,
        `${product} auténtico, Disponible en ${countryName}, COD disponible, Entrega inmediata`,
        `Compra ${product} segura, ${countryName} entrega rápida, Pago contra entrega, Sin riesgos`,
        `${product} original, Servicio COD en ${countryName}, Entrega verificada, Garantía incluida`,
        `Ordena ${product} ahora, ${countryName} disponible, Pago al recibir, Envío express`
      ];
      break;
    case 'en':
      snippetVariations = [
        `${product} available in ${countryName}, Cash on delivery guaranteed, Fast secure shipping, No advance payment`,
        `Get ${product} today, Pay on delivery in ${countryName}, Verified delivery, Satisfaction guaranteed`,
        `${product} COD ${countryName}, Inspect before paying, Free returns, 24/7 support`,
        `Secure ${product} order, Delivery to ${countryName}, Cash payment on receipt, Quick process`,
        `Authentic ${product}, Available in ${countryName}, COD available, Immediate delivery`,
        `Safe ${product} purchase, ${countryName} fast delivery, Cash on delivery, Risk-free`,
        `Original ${product}, COD service in ${countryName}, Verified delivery, Warranty included`,
        `Order ${product} now, ${countryName} available, Pay on receipt, Express shipping`
      ];
      break;
    case 'fr':
      snippetVariations = [
        `${product} disponible en ${countryName}, Paiement à la livraison garanti, Expédition rapide sécurisée, Aucun paiement anticipé`,
        `Obtenez ${product} aujourd'hui, Payez à la livraison en ${countryName}, Livraison vérifiée, Satisfaction garantie`,
        `${product} COD ${countryName}, Inspectez avant de payer, Retours gratuits, Support 24/7`,
        `Commande ${product} sécurisée, Livraison vers ${countryName}, Paiement comptant à réception, Processus rapide`,
        `${product} authentique, Disponible en ${countryName}, COD disponible, Livraison immédiate`,
        `Achat ${product} sûr, ${countryName} livraison rapide, Paiement à la livraison, Sans risque`,
        `${product} original, Service COD en ${countryName}, Livraison vérifiée, Garantie incluse`,
        `Commandez ${product} maintenant, ${countryName} disponible, Payez à réception, Expédition express`
      ];
      break;
    case 'de':
      snippetVariations = [
        `${product} verfügbar in ${countryName}, Nachnahme garantiert, Schneller sicherer Versand, Keine Vorauszahlung`,
        `${product} heute erhalten, Bei Lieferung zahlen in ${countryName}, Verifizierte Lieferung, Zufriedenheit garantiert`,
        `${product} COD ${countryName}, Vor Zahlung prüfen, Kostenlose Rücksendung, 24/7 Support`,
        `Sichere ${product} Bestellung, Lieferung nach ${countryName}, Barzahlung bei Erhalt, Schneller Prozess`,
        `Authentisches ${product}, Verfügbar in ${countryName}, COD verfügbar, Sofortige Lieferung`,
        `Sicherer ${product} Kauf, ${countryName} schnelle Lieferung, Nachnahme, Risikofrei`,
        `Original ${product}, COD Service in ${countryName}, Verifizierte Lieferung, Garantie inklusive`,
        `${product} jetzt bestellen, ${countryName} verfügbar, Bei Erhalt zahlen, Express Versand`
      ];
      break;
    case 'it':
      snippetVariations = [
        `${product} disponibile in ${countryName}, Contrassegno garantito, Spedizione veloce sicura, Nessun pagamento anticipato`,
        `Ottieni ${product} oggi, Paga alla consegna in ${countryName}, Consegna verificata, Soddisfazione garantita`,
        `${product} COD ${countryName}, Ispeziona prima di pagare, Resi gratuiti, Supporto 24/7`,
        `Ordine ${product} sicuro, Consegna in ${countryName}, Pagamento contanti alla ricezione, Processo rapido`,
        `${product} autentico, Disponibile in ${countryName}, COD disponibile, Consegna immediata`,
        `Acquisto ${product} sicuro, ${countryName} consegna veloce, Contrassegno, Senza rischi`,
        `${product} originale, Servizio COD in ${countryName}, Consegna verificata, Garanzia inclusa`,
        `Ordina ${product} ora, ${countryName} disponibile, Paga alla ricezione, Spedizione express`
      ];
      break;
    default:
      snippetVariations = [
        `${product} available in ${countryName}, Cash on delivery guaranteed, Fast secure shipping, No advance payment`,
        `Get ${product} today, Pay on delivery in ${countryName}, Verified delivery, Satisfaction guaranteed`,
        `${product} COD ${countryName}, Inspect before paying, Free returns, 24/7 support`,
        `Secure ${product} order, Delivery to ${countryName}, Cash payment on receipt, Quick process`,
        `Authentic ${product}, Available in ${countryName}, COD available, Immediate delivery`,
        `Safe ${product} purchase, ${countryName} fast delivery, Cash on delivery, Risk-free`,
        `Original ${product}, COD service in ${countryName}, Verified delivery, Warranty included`,
        `Order ${product} now, ${countryName} available, Pay on receipt, Express shipping`
      ];
  }
  
  return snippetVariations.map(values => `Category: COD Benefits\nValues: ${values}`);
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
        [`${product} disponible en ${countryName}`, `Pago contra entrega garantizado`, `Envío gratis incluido`],
        [`Oferta limitada para ${product}`, `Solo en ${countryName} disponible`, `Paga cuando recibas`],
        [`${product} auténtico`, `Entrega verificada en ${countryName}`, `Sin pagos adelantados`],
        [`Últimas unidades de ${product}`, `COD disponible en ${countryName}`, `Satisfacción garantizada`],
        [`${product} - Oferta especial`, `Envío express a ${countryName}`, `Inspecciona antes de pagar`],
        [`${product} original garantizado`, `Servicio COD en ${countryName}`, `Devolución gratuita`],
        [`Promoción ${product}`, `Disponible solo en ${countryName}`, `Pago seguro contra entrega`],
        [`${product} - Stock limitado`, `Entrega rápida a ${countryName}`, `Zero riesgo de compra`]
      ];
      break;
    case 'en':
      promotionVariations = [
        [`${product} available in ${countryName}`, `Cash on delivery guaranteed`, `Free shipping included`],
        [`Limited offer for ${product}`, `Only available in ${countryName}`, `Pay when you receive`],
        [`Authentic ${product}`, `Verified delivery to ${countryName}`, `No advance payments`],
        [`Last units of ${product}`, `COD available in ${countryName}`, `Satisfaction guaranteed`],
        [`${product} - Special offer`, `Express shipping to ${countryName}`, `Inspect before paying`],
        [`Original ${product} guaranteed`, `COD service in ${countryName}`, `Free returns`],
        [`${product} promotion`, `Available only in ${countryName}`, `Secure cash on delivery`],
        [`${product} - Limited stock`, `Fast delivery to ${countryName}`, `Zero purchase risk`]
      ];
      break;
    case 'fr':
      promotionVariations = [
        [`${product} disponible en ${countryName}`, `Paiement à la livraison garanti`, `Livraison gratuite incluse`],
        [`Offre limitée pour ${product}`, `Disponible uniquement en ${countryName}`, `Payez quand vous recevez`],
        [`${product} authentique`, `Livraison vérifiée vers ${countryName}`, `Aucun paiement anticipé`],
        [`Dernières unités de ${product}`, `COD disponible en ${countryName}`, `Satisfaction garantie`],
        [`${product} - Offre spéciale`, `Expédition express vers ${countryName}`, `Inspectez avant de payer`],
        [`${product} original garanti`, `Service COD en ${countryName}`, `Retours gratuits`],
        [`Promotion ${product}`, `Disponible seulement en ${countryName}`, `Paiement sécurisé à la livraison`],
        [`${product} - Stock limité`, `Livraison rapide vers ${countryName}`, `Zéro risque d'achat`]
      ];
      break;
    case 'de':
      promotionVariations = [
        [`${product} verfügbar in ${countryName}`, `Nachnahme garantiert`, `Kostenloser Versand inklusive`],
        [`Limitiertes Angebot für ${product}`, `Nur in ${countryName} verfügbar`, `Zahlen Sie bei Erhalt`],
        [`Authentisches ${product}`, `Verifizierte Lieferung nach ${countryName}`, `Keine Vorauszahlungen`],
        [`Letzte Einheiten von ${product}`, `COD verfügbar in ${countryName}`, `Zufriedenheit garantiert`],
        [`${product} - Sonderangebot`, `Express Versand nach ${countryName}`, `Vor Zahlung prüfen`],
        [`Original ${product} garantiert`, `COD Service in ${countryName}`, `Kostenlose Rücksendungen`],
        [`${product} Promotion`, `Nur in ${countryName} verfügbar`, `Sichere Nachnahme`],
        [`${product} - Begrenzter Vorrat`, `Schnelle Lieferung nach ${countryName}`, `Null Kaufrisiko`]
      ];
      break;
    case 'it':
      promotionVariations = [
        [`${product} disponibile in ${countryName}`, `Contrassegno garantito`, `Spedizione gratuita inclusa`],
        [`Offerta limitata per ${product}`, `Disponibile solo in ${countryName}`, `Paga quando ricevi`],
        [`${product} autentico`, `Consegna verificata in ${countryName}`, `Nessun pagamento anticipato`],
        [`Ultime unità di ${product}`, `COD disponibile in ${countryName}`, `Soddisfazione garantita`],
        [`${product} - Offerta speciale`, `Spedizione express in ${countryName}`, `Ispeziona prima di pagare`],
        [`${product} originale garantito`, `Servizio COD in ${countryName}`, `Resi gratuiti`],
        [`Promozione ${product}`, `Disponibile solo in ${countryName}`, `Contrassegno sicuro`],
        [`${product} - Stock limitato`, `Consegna veloce in ${countryName}`, `Zero rischio acquisto`]
      ];
      break;
    default:
      promotionVariations = [
        [`${product} available in ${countryName}`, `Cash on delivery guaranteed`, `Free shipping included`],
        [`Limited offer for ${product}`, `Only available in ${countryName}`, `Pay when you receive`],
        [`Authentic ${product}`, `Verified delivery to ${countryName}`, `No advance payments`],
        [`Last units of ${product}`, `COD available in ${countryName}`, `Satisfaction guaranteed`],
        [`${product} - Special offer`, `Express shipping to ${countryName}`, `Inspect before paying`],
        [`Original ${product} guaranteed`, `COD service in ${countryName}`, `Free returns`],
        [`${product} promotion`, `Available only in ${countryName}`, `Secure cash on delivery`],
        [`${product} - Limited stock`, `Fast delivery to ${countryName}`, `Zero purchase risk`]
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
          `${product}: ${currency}${numericPrice} - Pago contra entrega en ${countryName}`,
          `2x ${product}: ${currency}${Math.round(numericPrice * 1.8)} - Descuento por cantidad`,
          `3x ${product}: ${currency}${Math.round(numericPrice * 2.5)} - Oferta especial COD`
        ],
        [
          `${product} individual: ${currency}${numericPrice} - Solo en ${countryName}`,
          `Pack ${product}: ${currency}${Math.round(numericPrice * 2.2)} - Envío gratis`,
          `Oferta ${product}: ${currency}${Math.round(numericPrice * 3.1)} - Máximo ahorro`
        ],
        [
          `Precio ${product}: ${currency}${numericPrice} - COD disponible`,
          `Descuento ${product}: ${currency}${Math.round(numericPrice * 1.7)} - Limitado`,
          `Promoción ${product}: ${currency}${Math.round(numericPrice * 2.9)} - Solo hoy`
        ],
        [
          `${product} básico: ${currency}${numericPrice} - Entrega ${countryName}`,
          `${product} premium: ${currency}${Math.round(numericPrice * 2.1)} - Envío express`,
          `${product} completo: ${currency}${Math.round(numericPrice * 3.3)} - Todo incluido`
        ],
        [
          `Compra ${product}: ${currency}${numericPrice} - Paga al recibir`,
          `Ahorra en ${product}: ${currency}${Math.round(numericPrice * 1.9)} - COD seguro`,
          `Máximo ${product}: ${currency}${Math.round(numericPrice * 2.8)} - Oferta final`
        ]
      ];
      break;
    case 'en':
      priceVariations = [
        [
          `${product}: ${currency}${numericPrice} - Cash on delivery in ${countryName}`,
          `2x ${product}: ${currency}${Math.round(numericPrice * 1.8)} - Quantity discount`,
          `3x ${product}: ${currency}${Math.round(numericPrice * 2.5)} - Special COD offer`
        ],
        [
          `Single ${product}: ${currency}${numericPrice} - Only in ${countryName}`,
          `${product} Pack: ${currency}${Math.round(numericPrice * 2.2)} - Free shipping`,
          `${product} Deal: ${currency}${Math.round(numericPrice * 3.1)} - Maximum savings`
        ],
        [
          `${product} Price: ${currency}${numericPrice} - COD available`,
          `${product} Discount: ${currency}${Math.round(numericPrice * 1.7)} - Limited time`,
          `${product} Promo: ${currency}${Math.round(numericPrice * 2.9)} - Today only`
        ],
        [
          `Basic ${product}: ${currency}${numericPrice} - Delivery to ${countryName}`,
          `Premium ${product}: ${currency}${Math.round(numericPrice * 2.1)} - Express shipping`,
          `Complete ${product}: ${currency}${Math.round(numericPrice * 3.3)} - Everything included`
        ],
        [
          `Buy ${product}: ${currency}${numericPrice} - Pay on receipt`,
          `Save on ${product}: ${currency}${Math.round(numericPrice * 1.9)} - Secure COD`,
          `Ultimate ${product}: ${currency}${Math.round(numericPrice * 2.8)} - Final offer`
        ]
      ];
      break;
    case 'fr':
      priceVariations = [
        [
          `${product}: ${currency}${numericPrice} - Paiement à la livraison en ${countryName}`,
          `2x ${product}: ${currency}${Math.round(numericPrice * 1.8)} - Réduction quantité`,
          `3x ${product}: ${currency}${Math.round(numericPrice * 2.5)} - Offre spéciale COD`
        ],
        [
          `${product} unique: ${currency}${numericPrice} - Seulement en ${countryName}`,
          `Pack ${product}: ${currency}${Math.round(numericPrice * 2.2)} - Livraison gratuite`,
          `Deal ${product}: ${currency}${Math.round(numericPrice * 3.1)} - Économies maximales`
        ],
        [
          `Prix ${product}: ${currency}${numericPrice} - COD disponible`,
          `Réduction ${product}: ${currency}${Math.round(numericPrice * 1.7)} - Temps limité`,
          `Promo ${product}: ${currency}${Math.round(numericPrice * 2.9)} - Aujourd'hui seulement`
        ],
        [
          `${product} basique: ${currency}${numericPrice} - Livraison vers ${countryName}`,
          `${product} premium: ${currency}${Math.round(numericPrice * 2.1)} - Expédition express`,
          `${product} complet: ${currency}${Math.round(numericPrice * 3.3)} - Tout inclus`
        ],
        [
          `Acheter ${product}: ${currency}${numericPrice} - Payez à réception`,
          `Économiser sur ${product}: ${currency}${Math.round(numericPrice * 1.9)} - COD sécurisé`,
          `Ultime ${product}: ${currency}${Math.round(numericPrice * 2.8)} - Offre finale`
        ]
      ];
      break;
    case 'de':
      priceVariations = [
        [
          `${product}: ${currency}${numericPrice} - Nachnahme in ${countryName}`,
          `2x ${product}: ${currency}${Math.round(numericPrice * 1.8)} - Mengenrabatt`,
          `3x ${product}: ${currency}${Math.round(numericPrice * 2.5)} - Spezial COD Angebot`
        ],
        [
          `Einzeln ${product}: ${currency}${numericPrice} - Nur in ${countryName}`,
          `${product} Paket: ${currency}${Math.round(numericPrice * 2.2)} - Kostenloser Versand`,
          `${product} Deal: ${currency}${Math.round(numericPrice * 3.1)} - Maximale Ersparnis`
        ],
        [
          `${product} Preis: ${currency}${numericPrice} - COD verfügbar`,
          `${product} Rabatt: ${currency}${Math.round(numericPrice * 1.7)} - Begrenzte Zeit`,
          `${product} Promo: ${currency}${Math.round(numericPrice * 2.9)} - Nur heute`
        ],
        [
          `Basic ${product}: ${currency}${numericPrice} - Lieferung nach ${countryName}`,
          `Premium ${product}: ${currency}${Math.round(numericPrice * 2.1)} - Express Versand`,
          `Komplett ${product}: ${currency}${Math.round(numericPrice * 3.3)} - Alles inklusive`
        ],
        [
          `${product} kaufen: ${currency}${numericPrice} - Bei Erhalt zahlen`,
          `Sparen bei ${product}: ${currency}${Math.round(numericPrice * 1.9)} - Sichere Nachnahme`,
          `Ultimate ${product}: ${currency}${Math.round(numericPrice * 2.8)} - Finales Angebot`
        ]
      ];
      break;
    case 'it':
      priceVariations = [
        [
          `${product}: ${currency}${numericPrice} - Contrassegno in ${countryName}`,
          `2x ${product}: ${currency}${Math.round(numericPrice * 1.8)} - Sconto quantità`,
          `3x ${product}: ${currency}${Math.round(numericPrice * 2.5)} - Offerta speciale COD`
        ],
        [
          `${product} singolo: ${currency}${numericPrice} - Solo in ${countryName}`,
          `Pack ${product}: ${currency}${Math.round(numericPrice * 2.2)} - Spedizione gratuita`,
          `Deal ${product}: ${currency}${Math.round(numericPrice * 3.1)} - Massimo risparmio`
        ],
        [
          `Prezzo ${product}: ${currency}${numericPrice} - COD disponibile`,
          `Sconto ${product}: ${currency}${Math.round(numericPrice * 1.7)} - Tempo limitato`,
          `Promo ${product}: ${currency}${Math.round(numericPrice * 2.9)} - Solo oggi`
        ],
        [
          `${product} base: ${currency}${numericPrice} - Consegna in ${countryName}`,
          `${product} premium: ${currency}${Math.round(numericPrice * 2.1)} - Spedizione express`,
          `${product} completo: ${currency}${Math.round(numericPrice * 3.3)} - Tutto incluso`
        ],
        [
          `Compra ${product}: ${currency}${numericPrice} - Paga alla ricezione`,
          `Risparmia su ${product}: ${currency}${Math.round(numericPrice * 1.9)} - COD sicuro`,
          `Ultimate ${product}: ${currency}${Math.round(numericPrice * 2.8)} - Offerta finale`
        ]
      ];
      break;
    default:
      priceVariations = [
        [
          `${product}: ${currency}${numericPrice} - Cash on delivery in ${countryName}`,
          `2x ${product}: ${currency}${Math.round(numericPrice * 1.8)} - Quantity discount`,
          `3x ${product}: ${currency}${Math.round(numericPrice * 2.5)} - Special COD offer`
        ],
        [
          `Single ${product}: ${currency}${numericPrice} - Only in ${countryName}`,
          `${product} Pack: ${currency}${Math.round(numericPrice * 2.2)} - Free shipping`,
          `${product} Deal: ${currency}${Math.round(numericPrice * 3.1)} - Maximum savings`
        ],
        [
          `${product} Price: ${currency}${numericPrice} - COD available`,
          `${product} Discount: ${currency}${Math.round(numericPrice * 1.7)} - Limited time`,
          `${product} Promo: ${currency}${Math.round(numericPrice * 2.9)} - Today only`
        ],
        [
          `Basic ${product}: ${currency}${numericPrice} - Delivery to ${countryName}`,
          `Premium ${product}: ${currency}${Math.round(numericPrice * 2.1)} - Express shipping`,
          `Complete ${product}: ${currency}${Math.round(numericPrice * 3.3)} - Everything included`
        ],
        [
          `Buy ${product}: ${currency}${numericPrice} - Pay on receipt`,
          `Save on ${product}: ${currency}${Math.round(numericPrice * 1.9)} - Secure COD`,
          `Ultimate ${product}: ${currency}${Math.round(numericPrice * 2.8)} - Final offer`
        ]
      ];
  }
  
  return priceVariations.map(blocks => blocks.join('\n'));
};
