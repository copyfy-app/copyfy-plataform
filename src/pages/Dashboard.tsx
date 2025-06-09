
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { ArrowLeft, Zap, History, User, LogOut, Play } from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, signOut, isAdmin, isTrialActive, trialDaysRemaining } = useAuth();

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

  const handleProfile = () => {
    // Profile functionality can be added later
    console.log('Profile page coming soon');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-yellow-500/20 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Button
              onClick={handleBackToHome}
              variant="outline"
              size="sm"
              className="border-yellow-500/50 text-yellow-500 hover:bg-yellow-500 hover:text-black"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Home
            </Button>
            <div className="text-2xl font-bold text-yellow-500">
              COPY<span className="text-white">FY</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button
              onClick={handleProfile}
              variant="ghost"
              size="sm"
              className="text-white hover:text-yellow-500"
            >
              <User className="w-4 h-4 mr-2" />
              Profile
            </Button>
            <Button
              onClick={handleLogout}
              variant="ghost"
              size="sm"
              className="text-white hover:text-yellow-500"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
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
          <Card className="bg-zinc-900 border-yellow-500/20">
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
              <CardTitle className="text-sm font-medium text-gray-300">
                Campaigns Generated
              </CardTitle>
              <Zap className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">0</div>
              <p className="text-xs text-gray-400">
                Start creating your first campaign
              </p>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 border-yellow-500/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">
                Campaign History
              </CardTitle>
              <History className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">0</div>
              <p className="text-xs text-gray-400">
                Saved campaigns will appear here
              </p>
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
              <Button
                onClick={handleOpenCopyfy}
                className="w-full bg-yellow-500 text-black hover:bg-yellow-600 text-lg py-3"
              >
                <Play className="w-5 h-5 mr-2" />
                Start Creating Campaigns
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 border-yellow-500/20">
            <CardHeader>
              <CardTitle className="text-xl text-white flex items-center">
                <History className="w-6 h-6 text-yellow-500 mr-3" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <History className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400">No recent activity</p>
                <p className="text-sm text-gray-500 mt-2">
                  Your campaign history will appear here
                </p>
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
                    {isTrialActive 
                      ? `You have ${trialDaysRemaining} days remaining in your free trial.`
                      : 'Your free trial has expired. Subscribe to continue using Copyfy.'
                    }
                  </p>
                </div>
                <Button
                  className="bg-yellow-500 text-black hover:bg-yellow-600"
                  onClick={() => console.log('Subscription page coming soon')}
                >
                  {isTrialActive ? 'Upgrade Now' : 'Subscribe'}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
