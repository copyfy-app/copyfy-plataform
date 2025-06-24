
import { useState, useEffect } from 'react';
import { CampaignData, GeneratedContent } from './useCampaignGeneration';
import { useAuth } from '../contexts/AuthContext';

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
  const { user } = useAuth();
  const [campaignHistory, setCampaignHistory] = useState<string[]>([]);

  const getStorageKey = () => {
    if (!user?.id) return "historicoCampanhas_guest";
    return `historicoCampanhas_${user.id}`;
  };

  useEffect(() => {
    if (user?.id) {
      const storageKey = getStorageKey();
      const history = JSON.parse(localStorage.getItem(storageKey) || "[]");
      setCampaignHistory(history);
    }
  }, [user?.id]);

  const saveCampaign = (campaignData: CampaignData, generatedContent: GeneratedContent) => {
    if (!user?.id) {
      console.warn('Cannot save campaign: user not authenticated');
      return;
    }

    const campaignToSave = {
      ...campaignData,
      ...generatedContent,
      timestamp: new Date().toISOString()
    };

    const storageKey = getStorageKey();
    const history = JSON.parse(localStorage.getItem(storageKey) || "[]");
    history.unshift(JSON.stringify(campaignToSave));

    // Keep only last 15 campaigns
    if (history.length > 15) history.pop();
    
    localStorage.setItem(storageKey, JSON.stringify(history));
    setCampaignHistory(history);
  };

  const deleteCampaign = (index: number) => {
    if (!user?.id) return;

    const storageKey = getStorageKey();
    const history = [...campaignHistory];
    history.splice(index, 1);
    localStorage.setItem(storageKey, JSON.stringify(history));
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
