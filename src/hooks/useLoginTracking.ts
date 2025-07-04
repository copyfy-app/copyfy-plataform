import { supabase } from "@/integrations/supabase/client";
import { User } from "@supabase/supabase-js";

interface LoginData {
  user_id: string;
  email: string;
  login_method: 'email' | 'google';
  ip_address?: string;
  country?: string;
  city?: string;
  browser_info?: string;
}

interface GeolocationData {
  country?: string;
  city?: string;
  ip?: string;
}

// Get IP and geolocation data
const getGeolocationData = async (): Promise<GeolocationData> => {
  try {
    const response = await fetch('https://ipapi.co/json/');
    if (response.ok) {
      const data = await response.json();
      return {
        country: data.country_name,
        city: data.city,
        ip: data.ip
      };
    }
  } catch (error) {
    console.warn('Could not fetch geolocation data:', error);
  }
  return {};
};

// Get browser information
const getBrowserInfo = (): string => {
  return navigator.userAgent;
};

// Track user login
export const trackUserLogin = async (user: User, loginMethod: 'email' | 'google') => {
  try {
    console.log("📊 Tracking user login:", user.email, loginMethod);
    
    const geoData = await getGeolocationData();
    const browserInfo = getBrowserInfo();
    
    const loginData: LoginData = {
      user_id: user.id,
      email: user.email || 'unknown',
      login_method: loginMethod,
      ip_address: geoData.ip,
      country: geoData.country,
      city: geoData.city,
      browser_info: browserInfo
    };
    
    const { data, error } = await supabase
      .from('user_sessions')
      .insert([loginData])
      .select()
      .single();
    
    if (error) {
      console.error("❌ Error tracking login:", error);
    } else {
      console.log("✅ Login tracked successfully:", data);
      // Store session ID for potential logout tracking
      sessionStorage.setItem('current_session_id', data.id);
    }
  } catch (error) {
    console.error("💥 Error in trackUserLogin:", error);
  }
};

// Track user logout
export const trackUserLogout = async () => {
  try {
    const sessionId = sessionStorage.getItem('current_session_id');
    if (!sessionId) return;
    
    console.log("📊 Tracking user logout for session:", sessionId);
    
    const { error } = await supabase
      .from('user_sessions')
      .update({
        logout_timestamp: new Date().toISOString(),
        session_duration: Math.floor((Date.now() - new Date().getTime()) / 1000)
      })
      .eq('id', sessionId);
    
    if (error) {
      console.error("❌ Error tracking logout:", error);
    } else {
      console.log("✅ Logout tracked successfully");
    }
    
    sessionStorage.removeItem('current_session_id');
  } catch (error) {
    console.error("💥 Error in trackUserLogout:", error);
  }
};

// Fetch recent user sessions (for admin dashboard)
export const fetchRecentSessions = async (limit: number = 10) => {
  try {
    const { data, error } = await supabase
      .from('user_sessions')
      .select('*')
      .order('login_timestamp', { ascending: false })
      .limit(limit);
    
    if (error) {
      console.error("❌ Error fetching sessions:", error);
      return [];
    }
    
    return data || [];
  } catch (error) {
    console.error("💥 Error in fetchRecentSessions:", error);
    return [];
  }
};

// Fetch user session statistics
export const fetchSessionStats = async () => {
  try {
    const { data, error } = await supabase
      .from('user_sessions')
      .select('country, login_method, login_timestamp')
      .order('login_timestamp', { ascending: false });
    
    if (error) {
      console.error("❌ Error fetching session stats:", error);
      return null;
    }
    
    // Process statistics
    const totalSessions = data?.length || 0;
    const uniqueCountries = new Set(data?.map(s => s.country).filter(Boolean)).size;
    const loginMethods = data?.reduce((acc, session) => {
      acc[session.login_method] = (acc[session.login_method] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todaySessions = data?.filter(s => new Date(s.login_timestamp) >= today).length || 0;
    
    return {
      totalSessions,
      uniqueCountries,
      loginMethods,
      todaySessions,
      recentSessions: data?.slice(0, 5) || []
    };
  } catch (error) {
    console.error("💥 Error in fetchSessionStats:", error);
    return null;
  }
};