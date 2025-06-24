
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
    if (!user?.id) return "historicoCampanhas";
    return `historicoCampanhas_${user.id}`;
  };

  // Function to migrate old campaigns to user-specific storage
  const migrateCampaigns = () => {
    if (!user?.id) return;
    
    const userStorageKey = getStorageKey();
    const oldStorageKey = "historicoCampanhas";
    
    // Check if user already has campaigns
    const existingUserCampaigns = localStorage.getItem(userStorageKey);
    if (existingUserCampaigns) return; // User already has campaigns
    
    // Check if there are old campaigns to migrate
    const oldCampaigns = localStorage.getItem(oldStorageKey);
    if (oldCampaigns) {
      // Migrate old campaigns to user-specific storage
      localStorage.setItem(userStorageKey, oldCampaigns);
      console.log('Migrated campaigns to user-specific storage');
    }
  };

  useEffect(() => {
    if (user?.id) {
      migrateCampaigns();
      const storageKey = getStorageKey();
      const history = JSON.parse(localStorage.getItem(storageKey) || "[]");
      setCampaignHistory(history);
    }
  }, [user?.id]);

  const saveCampaign = (campaignData: CampaignData, generatedContent: GeneratedContent) => {
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
