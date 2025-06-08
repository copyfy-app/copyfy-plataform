import { useState, useEffect } from 'react';
import { CampaignData, GeneratedContent } from './useCampaignGeneration';

export interface SavedCampaign extends CampaignData {
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
  timestamp: string;
}

export const useCampaignHistory = () => {
  const [campaignHistory, setCampaignHistory] = useState<string[]>([]);

  useEffect(() => {
    const history = JSON.parse(localStorage.getItem("historicoCampanhas") || "[]");
    setCampaignHistory(history);
  }, []);

  const saveCampaign = (campaignData: CampaignData, generatedContent: GeneratedContent) => {
    const campaignToSave = {
      ...campaignData,
      ...generatedContent,
      timestamp: new Date().toISOString()
    };

    const history = JSON.parse(localStorage.getItem("historicoCampanhas") || "[]");
    history.unshift(JSON.stringify(campaignToSave));

    // Keep only last 15 campaigns
    if (history.length > 15) history.pop();
    
    localStorage.setItem("historicoCampanhas", JSON.stringify(history));
    setCampaignHistory(history);
  };

  const deleteCampaign = (index: number) => {
    const history = [...campaignHistory];
    history.splice(index, 1);
    localStorage.setItem("historicoCampanhas", JSON.stringify(history));
    setCampaignHistory(history);
  };

  const loadCampaign = (campaignString: string): SavedCampaign | null => {
    try {
      return JSON.parse(campaignString);
    } catch (error) {
      console.error('Erro ao carregar campanha:', error);
      return null;
    }
  };

  return {
    campaignHistory,
    saveCampaign,
    deleteCampaign,
    loadCampaign
  };
};
