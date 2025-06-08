
import { useState } from 'react';
import { generateCODCopies } from '../utils/copyGenerator';
import { countries } from '../components/data/Countries';

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
  biddingStrategy: string;
  snippetValues: string[];
  promotions: string[];
  priceBlocks: string[];
}

export const useCampaignGeneration = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [campaignGenerated, setCampaignGenerated] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null>(null);
  const [currentLanguage, setCurrentLanguage] = useState("pt");

  const generateCampaign = async (campaignData: CampaignData): Promise<boolean> => {
    const { country, product, price, funnel } = campaignData;
    
    setIsGenerating(true);
    
    const countryData = countries.find(c => c.value === country);
    const countryName = countryData ? countryData.name : "";
    const languageCode = countryData ? countryData.languageCode : "pt";
    
    setCurrentLanguage(languageCode);
    
    console.log('Gerando campanha com:', {
      product,
      price,
      countryName,
      languageCode,
      funnel
    });

    try {
      // Simular delay de geração
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const generatedContent = generateCODCopies(product, price, countryName, languageCode, funnel);
      console.log('Conteúdo gerado:', generatedContent);
      
      setGeneratedContent(generatedContent);
      setCampaignGenerated(true);
      setIsGenerating(false);
      
      return true;
    } catch (error) {
      console.error('Erro ao gerar campanha:', error);
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
