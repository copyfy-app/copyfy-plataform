import React from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Zap, Target, TrendingUp } from 'lucide-react';
import Footer from '@/components/Footer';

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login');
  };

  const handleGoToDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-yellow-500/20 py-6">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-yellow-500">
            Copy<span className="text-white">fy</span>
          </div>
          <div className="space-x-4">
            <Button onClick={handleGetStarted} variant="outline" className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black">
              Login
            </Button>
            <Button onClick={handleGoToDashboard} className="bg-yellow-500 text-black hover:bg-yellow-600">
              Dashboard
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Generate Winning
          <br />
          <span className="text-yellow-500">Ad Campaigns</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Create high-converting Google Ads copy in seconds with AI-powered campaign generation
        </p>
        <Button onClick={handleGetStarted} size="lg" className="bg-yellow-500 text-black hover:bg-yellow-600 text-lg px-8 py-4">
          Get Started
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Why Choose <span className="text-yellow-500">Copyfy</span>?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 border border-yellow-500/20 rounded-lg">
            <Zap className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
            <p className="text-gray-300">
              Generate 30 unique ad variations in seconds, not hours
            </p>
          </div>
          
          <div className="text-center p-6 border border-yellow-500/20 rounded-lg">
            <Target className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Precision Targeting</h3>
            <p className="text-gray-300">
              Country-specific copy that resonates with your target audience
            </p>
          </div>
          
          <div className="text-center p-6 border border-yellow-500/20 rounded-lg">
            <TrendingUp className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Higher Conversions</h3>
            <p className="text-gray-300">
              Proven ad templates that drive clicks and conversions
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Ad Campaigns?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of marketers already using Copyfy
          </p>
          <Button onClick={handleGetStarted} size="lg" className="bg-yellow-500 text-black hover:bg-yellow-600 text-lg px-8 py-4">
            Start Creating Campaigns
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
