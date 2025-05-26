
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Target, Globe, Zap, TrendingUp, Shield, CheckCircle, Star, Clock, Users, Award, Truck } from "lucide-react";
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
              Começar Teste Grátis
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent leading-tight">
            Copys de Alta Conversão Para Google Ads Com Tradução para Mais de 100 Países
          </h1>
          <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
            Gere copies únicas e adaptadas para mais de 100 países. Títulos, descrições, USPs e sitelinks 
            otimizados automaticamente para sua estratégia de funil COD.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => navigate('/dashboard')}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-6 text-lg"
            >
              Começar Teste Grátis <ArrowRight className="ml-2 w-5 h-5" />
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

      {/* COD Benefits Section */}
      <section className="container mx-auto px-4 py-16 bg-zinc-950">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Perfeito para Campanhas COD
          </h2>
          <p className="text-xl text-zinc-400">
            Copies testadas e aprovadas para campanhas Cash on Delivery
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="border-zinc-800 bg-zinc-900 text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Truck className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Frete Grátis</h3>
              <p className="text-zinc-400">
                Copies que destacam frete grátis e entrega rápida para aumentar conversões
              </p>
            </CardContent>
          </Card>

          <Card className="border-zinc-800 bg-zinc-900 text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Garantia Total</h3>
              <p className="text-zinc-400">
                Mensagens de garantia e devolução que geram confiança no cliente
              </p>
            </CardContent>
          </Card>

          <Card className="border-zinc-800 bg-zinc-900 text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Urgência</h3>
              <p className="text-zinc-400">
                Gatilhos de urgência e escassez para acelerar a decisão de compra
              </p>
            </CardContent>
          </Card>
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

      {/* Social Proof */}
      <section className="container mx-auto px-4 py-16 bg-zinc-950">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Resultados Comprovados
          </h2>
          <p className="text-xl text-zinc-400">
            Mais de 10.000 campanhas criadas em 100+ países
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-500 mb-2">+300%</div>
            <p className="text-zinc-400">Aumento médio em CTR</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-500 mb-2">10.000+</div>
            <p className="text-zinc-400">Campanhas criadas</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-500 mb-2">100+</div>
            <p className="text-zinc-400">Países atendidos</p>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Award className="w-8 h-8 text-black" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Garantia de 30 Dias
          </h2>
          <p className="text-xl text-zinc-400 mb-8">
            Se você não aumentar suas conversões em 30 dias, devolvemos 100% do seu dinheiro. 
            Sem perguntas, sem complicações.
          </p>
          <div className="flex items-center justify-center space-x-2 text-yellow-500">
            <CheckCircle className="w-5 h-5" />
            <span>Risco zero para você</span>
          </div>
        </div>
      </section>

      {/* Login Section */}
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
