
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Target, Globe, Zap, TrendingUp } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import Logo from '@/components/Logo';
import LoginSection from '@/components/LoginSection';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-black/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Logo />
          <div className="space-x-4">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/login')}
              className="text-white hover:text-yellow-500 hover:bg-zinc-900"
            >
              Login
            </Button>
            <Button 
              onClick={() => navigate('/dashboard')} 
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
            >
              Começar Grátis
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
            Copys de Alta Conversão Para Google Ads
            <br />
            Com Tradução para Mais de 100 Países
          </h1>
          <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
            Gere copies únicas e adaptadas para mais de 100 países. Títulos, descrições, USPs e sitelinks 
            otimizados automaticamente para sua estratégia de funil.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => navigate('/dashboard')}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-6 text-lg"
            >
              Começar Trial Grátis <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 py-6 text-lg border-zinc-700 text-white hover:bg-zinc-900 hover:text-yellow-500"
            >
              Ver Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Tudo que você precisa para campanhas globais
          </h2>
          <p className="text-xl text-zinc-400">
            Criado especificamente para afiliados que rodam tráfego internacional
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="border-zinc-800 bg-zinc-900 shadow-lg hover:shadow-xl hover:shadow-yellow-500/10 transition-all duration-300 hover:scale-105">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">100+ Países</h3>
              <p className="text-zinc-400">
                Traduções automáticas e adaptações culturais para qualquer mercado global
              </p>
            </CardContent>
          </Card>

          <Card className="border-zinc-800 bg-zinc-900 shadow-lg hover:shadow-xl hover:shadow-yellow-500/10 transition-all duration-300 hover:scale-105">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Funil Inteligente</h3>
              <p className="text-zinc-400">
                Copies adaptadas para topo, meio e fundo de funil automaticamente
              </p>
            </CardContent>
          </Card>

          <Card className="border-zinc-800 bg-zinc-900 shadow-lg hover:shadow-xl hover:shadow-yellow-500/10 transition-all duration-300 hover:scale-105">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Geração Única</h3>
              <p className="text-zinc-400">
                Cada campanha gera copies completamente diferentes com variações automáticas
              </p>
            </CardContent>
          </Card>

          <Card className="border-zinc-800 bg-zinc-900 shadow-lg hover:shadow-xl hover:shadow-yellow-500/10 transition-all duration-300 hover:scale-105">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">ROI Otimizado</h3>
              <p className="text-zinc-400">
                Extensões completas: títulos, descrições, USPs e sitelinks prontos para usar
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Login Section - Nova seção substituindo o CTA */}
      <LoginSection />

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-black">
        <div className="container mx-auto px-4 py-8 text-center text-zinc-400">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-xs">C</span>
            </div>
            <span className="text-lg font-bold text-white">Copyfy</span>
          </div>
          <p>&copy; 2024 Copyfy. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
