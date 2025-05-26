
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from 'lucide-react';

const LoginSection = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const loginUser = () => {
    console.log('Login tentativa:', { email, password });
    // Aqui você pode adicionar a lógica de autenticação
    alert('Função de login executada! Verifique o console.');
  };

  return (
    <section className="min-h-screen bg-black flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl shadow-yellow-500/10">
        <CardHeader className="space-y-4 text-center">
          <CardTitle className="text-3xl font-bold text-yellow-500">
            Área de Login
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-yellow-500 font-semibold">
              E-mail
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              className="bg-zinc-800 border-zinc-700 text-white rounded-lg focus:ring-yellow-500 focus:border-yellow-500 h-12"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password" className="text-yellow-500 font-semibold">
              Senha
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="bg-zinc-800 border-zinc-700 text-white rounded-lg focus:ring-yellow-500 focus:border-yellow-500 h-12 pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-400 hover:text-yellow-500 transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <Button
            onClick={loginUser}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg h-12 rounded-lg transition-all duration-200 transform hover:scale-105"
          >
            Entrar
          </Button>

          <div className="text-center">
            <a
              href="#"
              className="text-yellow-500 hover:text-yellow-400 underline font-medium transition-colors duration-200"
            >
              Criar conta
            </a>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default LoginSection;
