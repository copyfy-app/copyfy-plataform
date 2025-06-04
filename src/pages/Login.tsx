
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Loader2, Eye, EyeOff, AlertCircle } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { signIn, signUp, loading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("🚀 Submetendo formulário:", { email, isLogin, passwordLength: password.length });
    
    if (!email || !password) {
      console.log("❌ Email ou senha vazios");
      return;
    }
    
    if (password.length < 6) {
      console.log("❌ Senha muito curta");
      return;
    }

    try {
      if (isLogin) {
        console.log("🔐 Tentando fazer login...");
        await signIn(email, password);
      } else {
        console.log("📝 Tentando criar conta...");
        await signUp(email, password);
      }
    } catch (error) {
      console.error("💥 Erro no handleSubmit:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-zinc-900 flex items-center justify-center p-4 relative">
      {/* Subtle background animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/5 via-transparent to-yellow-900/5 opacity-50" />
      
      <div className="w-full max-w-md bg-black/60 border border-yellow-600 shadow-2xl p-8 rounded-2xl backdrop-blur-sm relative z-10">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-yellow-500 mb-2">
            COPY<span className="text-white">FY</span>
          </h1>
          <p className="text-gray-300">
            {isLogin ? 'Faça login para continuar' : 'Crie sua conta gratuita'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="email" className="text-yellow-400 font-medium">E-mail</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                console.log("📧 Email alterado:", e.target.value);
              }}
              placeholder="seu@email.com"
              required
              autoComplete="email"
              className="bg-black/40 border-yellow-600/50 text-white placeholder:text-gray-400 focus:border-yellow-500 mt-2"
            />
          </div>
          
          <div>
            <Label htmlFor="password" className="text-yellow-400 font-medium">Senha</Label>
            <div className="relative mt-2">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  console.log("🔒 Senha alterada, comprimento:", e.target.value.length);
                }}
                placeholder="••••••••"
                required
                minLength={6}
                autoComplete={isLogin ? "current-password" : "new-password"}
                className="bg-black/40 border-yellow-600/50 text-white placeholder:text-gray-400 focus:border-yellow-500 pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-yellow-500 transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {!isLogin && (
              <p className="text-xs text-gray-400 mt-1">
                Mínimo de 6 caracteres
              </p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 transition-all duration-300 transform hover:scale-105"
            disabled={loading || !email || !password || password.length < 6}
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {isLogin ? 'Entrando...' : 'Criando conta...'}
              </>
            ) : (
              isLogin ? 'Entrar' : 'Criar Conta'
            )}
          </Button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-300">
            {isLogin ? 'Não tem uma conta?' : 'Já tem uma conta?'}
            <button
              type="button"
              onClick={() => {
                setIsLogin(!isLogin);
                console.log("🔄 Alternando modo:", !isLogin ? 'login' : 'signup');
              }}
              className="ml-1 text-yellow-500 hover:text-yellow-400 font-medium transition-colors"
            >
              {isLogin ? 'Criar conta' : 'Fazer login'}
            </button>
          </p>
        </div>

        {/* Info card */}
        <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
          <div className="flex items-start space-x-2">
            <AlertCircle className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
            <div className="text-xs text-gray-300">
              <p className="font-semibold mb-1 text-yellow-500">Dica importante:</p>
              <p className="mb-1">• Primeira vez? Use "Criar conta"</p>
              <p className="mb-1">• Já tem conta? Use "Fazer login"</p>
              <p>• Sua senha deve ter pelo menos 6 caracteres</p>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Button
            variant="outline"
            onClick={() => navigate('/')}
            className="text-sm border-yellow-600/50 text-gray-300 hover:bg-yellow-500/10 hover:text-yellow-400 hover:border-yellow-500"
          >
            Voltar ao início
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
