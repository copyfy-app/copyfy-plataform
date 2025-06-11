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
    
    // Buscar dados do país selecionado
    const countryData = countries.find(c => c.value === country);
    const countryName = countryData ? countryData.name : country;
    
    // Detectar idioma correto baseado no código do país - CORREÇÃO IMPLEMENTADA
    let detectedLanguage: string;
    
    if (countryData) {
      detectedLanguage = getLanguageFromCountry(countryData.value);
    } else {
      // Usar detecção por nome do país com as correções implementadas
      detectedLanguage = detectLanguageByCountry(countryName);
    }
    
    setCurrentLanguage(detectedLanguage);
    
    console.log('Gerando campanha com dados:', {
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
      
      // Passar o nome do país para a função de geração com idioma detectado
      const generatedContent = generateCODCopies(product, price, countryName, detectedLanguage, funnel);
      
      console.log('Conteúdo gerado com sucesso:', {
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
