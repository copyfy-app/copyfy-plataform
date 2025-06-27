import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { ArrowLeft, Zap, History, User, LogOut, Play, Trash2, Info } from 'lucide-react';
import Footer from '@/components/Footer';

const Dashboard = () => {
  const navigate = useNavigate();
  const {
    user,
    signOut,
    isAdmin,
    isTrialActive,
    trialDaysRemaining
  } = useAuth();

  const [campaignCount, setCampaignCount] = React.useState(0);
  const [lastCampaign, setLastCampaign] = React.useState<string>('');
  const [recentCampaigns, setRecentCampaigns] = React.useState<any[]>([]);

  const handleBackToHome = () => {
    navigate('/');
  };

  const handleOpenCopyfy = () => {
    navigate('/copyfy');
  };

  const handleLogout = () => {
    signOut();
    navigate('/');
  };

  const handleClearHistory = () => {
    localStorage.removeItem("historicoCampanhas");
    setCampaignCount(0);
    setLastCampaign('');
    setRecentCampaigns([]);
  };

  const handleUpgrade = () => {
    window.open('https://hotm.art/copyfy_generate', '_blank');
  };

  // Load campaign data from localStorage with proper user-specific key
  React.useEffect(() => {
    const loadCampaignData = () => {
      if (!user?.id) return;
      
      const storageKey = `historicoCampanhas_${user.id}`;
      const history = JSON.parse(localStorage.getItem(storageKey) || "[]");
      
      // Also check for old format campaigns and migrate them
      if (history.length === 0) {
        const oldHistory = JSON.parse(localStorage.getItem("historicoCampanhas") || "[]");
        if (oldHistory.length > 0) {
          localStorage.setItem(storageKey, JSON.stringify(oldHistory));
          setCampaignCount(oldHistory.length);
          
          if (oldHistory.length > 0) {
            try {
              const latestCampaign = JSON.parse(oldHistory[0]);
              setLastCampaign(latestCampaign.product || '');

              // Get last 5 campaigns for display
              const campaigns = oldHistory.slice(0, 5).map((campaignStr: string) => {
                try {
                  return JSON.parse(campaignStr);
                } catch (error) {
                  return null;
                }
              }).filter(Boolean);
              setRecentCampaigns(campaigns);
            } catch (error) {
              console.error('Error parsing campaign data:', error);
            }
          }
          return;
        }
      }
      
      setCampaignCount(history.length);
      if (history.length > 0) {
        try {
          const latestCampaign = JSON.parse(history[0]);
          setLastCampaign(latestCampaign.product || '');

          // Get last 5 campaigns for display
          const campaigns = history.slice(0, 5).map((campaignStr: string) => {
            try {
              return JSON.parse(campaignStr);
            } catch (error) {
              return null;
            }
          }).filter(Boolean);
          setRecentCampaigns(campaigns);
        } catch (error) {
          console.error('Error parsing campaign data:', error);
        }
      }
    };

    // Load data initially
    loadCampaignData();

    // Set up interval to check for updates every 2 seconds
    const interval = setInterval(loadCampaignData, 2000);
    return () => clearInterval(interval);
  }, [user?.id]);

  React.useEffect(() => {
    // Script para ativar o dropdown do profile
    const profileMenuBtn = document.getElementById('profileMenuBtn');
    const profileDropdown = document.getElementById('profileDropdown');
    const userName = document.getElementById('userName');
    const dropdownName = document.getElementById('dropdownName');
    const dropdownEmail = document.getElementById('dropdownEmail');
    const userAvatar = document.getElementById('userAvatar') as HTMLImageElement;
    const dropdownAvatar = document.getElementById('dropdownAvatar') as HTMLImageElement;

    if (profileMenuBtn && profileDropdown) {
      const toggleDropdown = () => {
        profileDropdown.classList.toggle('hidden');
      };

      profileMenuBtn.addEventListener('click', toggleDropdown);

      // Close dropdown when clicking outside
      document.addEventListener('click', (e) => {
        if (!profileMenuBtn.contains(e.target as Node) && !profileDropdown.contains(e.target as Node)) {
          profileDropdown.classList.add('hidden');
        }
      });

      // Update user info if available
      if (user && userName && dropdownName && dropdownEmail && userAvatar && dropdownAvatar) {
        const displayName = user.email?.split('@')[0] || 'User';
        userName.textContent = displayName;
        dropdownName.textContent = displayName;
        dropdownEmail.textContent = user.email || 'user@email.com';

        const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}`;
        userAvatar.src = avatarUrl;
        dropdownAvatar.src = avatarUrl;
      }

      return () => {
        profileMenuBtn.removeEventListener('click', toggleDropdown);
      };
    }
  }, [user]);

  // Global handleLogout function for the dropdown
  React.useEffect(() => {
    (window as any).handleLogout = handleLogout;
    return () => {
      delete (window as any).handleLogout;
    };
  }, [handleLogout]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-yellow-500/20 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Button onClick={handleBackToHome} variant="outline" size="sm" className="border-yellow-500/50 text-yellow-500 hover:bg-yellow-500 hover:text-black">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Home
            </Button>
            <div className="text-2xl font-bold text-yellow-500">
              Copy<span className="text-white">fy</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* PROFILE USER MENU */}
            <div className="relative">
              <button id="profileMenuBtn" className="flex items-center space-x-2 text-white bg-black px-4 py-2 rounded-lg hover:bg-gray-800 transition">
                <img id="userAvatar" className="w-6 h-6 rounded-full" src="https://ui-avatars.com/api/?name=User" alt="avatar" />
                <span id="userName">Loading...</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>

              {/* DROPDOWN MENU */}
              <div id="profileDropdown" className="hidden absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg z-50">
                <div className="p-4 border-b flex items-center space-x-3">
                  <img id="dropdownAvatar" className="w-10 h-10 rounded-full" src="https://ui-avatars.com/api/?name=User" alt="avatar" />
                  <div>
                    <p id="dropdownName" className="text-gray-800 font-semibold text-sm">User</p>
                    <p id="dropdownEmail" className="text-gray-500 text-xs">user@email.com</p>
                  </div>
                </div>
                <button onClick={() => (window as any).handleLogout()} className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-100">Logout</button>
              </div>
            </div>
            <Button onClick={handleLogout} variant="ghost" size="sm" className="text-white hover:text-yellow-500">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Trial Warning Alert */}
        {!isAdmin && (
          <Alert className="mb-6 bg-blue-900/30 border-blue-500/30 text-blue-200">
            <Info className="h-4 w-4 text-blue-400" />
            <AlertDescription className="text-blue-200">
              Free 24-hour trial to explore everything the platform offers. Enjoy it!
            </AlertDescription>
          </Alert>
        )}

        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Welcome back{user?.email ? `, ${user.email.split('@')[0]}` : ''}!
          </h1>
          <p className="text-xl text-gray-300">
            Ready to create amazing ad campaigns?
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="border-yellow-500/20 bg-zinc-900">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">
                Account Status
              </CardTitle>
              <User className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">
                {isAdmin ? 'Admin' : isTrialActive ? 'Trial Active' : 'Trial Expired'}
              </div>
              <p className="text-xs text-gray-400">
                {isAdmin ? 'Full Access' : isTrialActive ? `${trialDaysRemaining} days remaining` : 'Subscribe to continue'}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 border-yellow-500/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="font-medium text-sm text-white">
                Campaigns Generated
              </CardTitle>
              <Zap className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{campaignCount}</div>
              <p className="text-xs text-gray-400">
                {campaignCount === 0 ? 'Start creating your first campaign' : campaignCount === 1 ? "You've created your first campaign!" : `${campaignCount} campaigns created`}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 border-yellow-500/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">
                Campaign History
              </CardTitle>
              <History className="h-4 w-4 text-yellow-500" />
              <Button onClick={handleClearHistory} variant="ghost" size="sm" className="text-red-400 hover:text-red-300 p-1" disabled={campaignCount === 0}>
                <Trash2 className="h-3 w-3" />
              </Button>
            </CardHeader>
            <CardContent>
              {campaignCount === 0 ? (
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">0</div>
                  <p className="text-xs text-gray-400">No campaigns yet</p>
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-white">{campaignCount}</div>
                  <div className="space-y-1">
                    {recentCampaigns.map((campaign, index) => (
                      <div key={index} className="text-xs text-gray-400 truncate">
                        {campaign.product}
                      </div>
                    ))}
                    {campaignCount > 5 && (
                      <div className="text-xs text-gray-500">
                        +{campaignCount - 5} more...
                      </div>
                    )}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 border-yellow-500/30">
            <CardHeader>
              <CardTitle className="text-xl text-white flex items-center">
                <Zap className="w-6 h-6 text-yellow-500 mr-3" />
                Campaign Generator
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-6">
                Create high-converting Google Ads campaigns with AI-powered copy generation.
                Generate 30 unique variations instantly.
              </p>
              <Button onClick={handleOpenCopyfy} className="w-full bg-yellow-500 text-black hover:bg-yellow-600 text-lg py-3">
                <Play className="w-5 h-5 mr-2" />
                Start Creating Campaigns
              </Button>
            </CardContent>
          </Card>

          <Card className="border-yellow-500/20 bg-zinc-900">
            <CardHeader>
              <CardTitle className="text-xl text-white flex items-center">
                <History className="w-6 h-6 text-yellow-500 mr-3" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {campaignCount > 0 ? (
                  <>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-300">Campaign generated</span>
                      <span className="text-gray-500">June 9</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-300">User logged in</span>
                      <span className="text-gray-500">June 8</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-300">Account created</span>
                      <span className="text-gray-500">June 7</span>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-4">
                    <History className="w-8 h-8 text-gray-600 mx-auto mb-2" />
                    <p className="text-gray-400 text-sm">No recent activity</p>
                    <p className="text-xs text-gray-500 mt-1">
                      Activity will appear here
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Trial Information */}
        {!isAdmin && (
          <Card className="mt-8 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-yellow-500/30">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {isTrialActive ? 'Trial Account' : 'Trial Expired'}
                  </h3>
                  <p className="text-gray-300">
                    {isTrialActive ? `You have ${trialDaysRemaining} days remaining in your free trial.` : 'Your free trial has expired. Subscribe to continue using Copyfy.'}
                  </p>
                </div>
                <Button className="bg-yellow-500 text-black hover:bg-yellow-600" onClick={handleUpgrade}>
                  {isTrialActive ? 'Upgrade Now' : 'Subscribe'}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Dashboard;
