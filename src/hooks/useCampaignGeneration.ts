
import { useState } from 'react';
import { generateCODCopies } from '../utils/copyGenerator';
import { countries } from '../components/data/Countries';
import { detectLanguageByCountry, getLanguageFromCountry } from '../utils/countryLanguageMapping';

export interface CampaignData {
  country: string;
  product: string;
  price: string;
  funnel: string;
}

export interface GeneratedContent {
  titles: string[];
  descriptions: string[];
  usps: string[];
  sitelinks: {
    title: string;
    description1: string;
    description2: string;
    url: string;
  }[];
  snippetValues: string[];
  promotions: string[];
  priceBlocks: string[];
}

export const useCampaignGeneration = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [campaignGenerated, setCampaignGenerated] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null>(null);
  const [currentLanguage, setCurrentLanguage] = useState("pt");

  const sendWebhookRequest = async (campaignData: CampaignData): Promise<void> => {
    try {
      console.log('Sending webhook request to n8n:', campaignData);
      
      const response = await fetch('https://copyfy-n8n.app.n8n.cloud/webhook/copyfy-traducao-final', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          produto: campaignData.product,
          preco: campaignData.price,
          pais: campaignData.country,
          estrategia: campaignData.funnel
        })
      });

      if (response.ok) {
        console.log('Webhook request sent successfully to n8n');
      } else {
        console.warn('Webhook request failed with status:', response.status);
      }
    } catch (error) {
      console.error('Error sending webhook request:', error);
      // Don't throw the error so campaign generation can continue
    }
  };

  const generateCampaign = async (campaignData: CampaignData): Promise<boolean> => {
    const { country, product, price, funnel } = campaignData;
    
    setIsGenerating(true);
    
    // Send webhook request to n8n for translation processing
    await sendWebhookRequest(campaignData);
    
    // Buscar dados do país selecionado
    const countryData = countries.find(c => c.value === country);
    const countryName = countryData ? countryData.name : country;
    
    // Detectar idioma correto baseado no código do país
    let detectedLanguage: string;
    
    if (countryData) {
      detectedLanguage = getLanguageFromCountry(countryData.value);
    } else {
      detectedLanguage = detectLanguageByCountry(countryName);
    }
    
    setCurrentLanguage(detectedLanguage);
    
    console.log('🚀 Gerando campanha:', {
      product,
      price,
      country,
      countryName,
      languageCode: detectedLanguage,
      funnel
    });

    try {
      // Simular delay de geração
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Usar função de geração existente
      const generatedContent = await generateCODCopies(product, price, countryName, detectedLanguage, funnel);
      
      console.log('✅ Conteúdo gerado:', {
        idioma: detectedLanguage,
        pais: countryName,
        titulos: generatedContent.titles.length,
        primeiroTitulo: generatedContent.titles[0],
        descricoes: generatedContent.descriptions.length,
        primeiraDescricao: generatedContent.descriptions[0]
      });
      
      setGeneratedContent(generatedContent);
      setCampaignGenerated(true);
      setIsGenerating(false);
      
      return true;
    } catch (error) {
      console.error('❌ Erro ao gerar campanha:', error);
      setIsGenerating(false);
      return false;
    }
  };

  const resetCampaign = () => {
    setCampaignGenerated(false);
    setGeneratedContent(null);
  };

  return {
    isGenerating,
    campaignGenerated,
    generatedContent,
    currentLanguage,
    generateCampaign,
    resetCampaign
  };
};
