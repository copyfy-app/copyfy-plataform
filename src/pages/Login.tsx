import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from 'react-router-dom';
import Logo from '@/components/Logo';
import { useAuth } from '@/contexts/AuthContext';
import { Loader2, Eye, EyeOff, AlertCircle } from 'lucide-react';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const {
    signIn,
    signUp,
    loading
  } = useAuth();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("🚀 Submetendo formulário:", {
      email,
      isLogin,
      passwordLength: password.length
    });
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
  return <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-2xl border border-zinc-800 bg-zinc-900">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-4">
            <Logo />
          </div>
          <CardTitle className="text-2xl text-center text-white">
            {isLogin ? 'Fazer Login' : 'Criar Conta'}
          </CardTitle>
          <p className="text-center text-zinc-400">
            {isLogin ? 'Entre em sua conta para continuar' : 'Crie sua conta e comece seu trial gratuito'}
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email" className="text-white">Email</Label>
              <Input id="email" type="email" value={email} onChange={e => {
              setEmail(e.target.value);
              console.log("📧 Email alterado:", e.target.value);
            }} placeholder="seu@email.com" required autoComplete="email" className="bg-zinc-800 border-zinc-700 text-white rounded-lg focus:ring-yellow-500 focus:border-yellow-500" />
            </div>
            <div>
              <Label htmlFor="password" className="text-white">Senha</Label>
              <div className="relative">
                <Input id="password" type={showPassword ? "text" : "password"} value={password} onChange={e => {
                setPassword(e.target.value);
                console.log("🔒 Senha alterada, comprimento:", e.target.value.length);
              }} placeholder="••••••••" required minLength={6} autoComplete={isLogin ? "current-password" : "new-password"} className="bg-zinc-800 border-zinc-700 text-white rounded-lg focus:ring-yellow-500 focus:border-yellow-500 pr-10" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-400 hover:text-yellow-500 transition-colors">
                  {showPassword ? <EyeOff size={20} className="bg-zinc-800" /> : <Eye size={20} />}
                </button>
              </div>
              {!isLogin && <p className="text-xs text-zinc-400 mt-1">
                  Mínimo de 6 caracteres
                </p>}
            </div>
            <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold transition-colors" disabled={loading || !email || !password || password.length < 6}>
              {loading ? <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {isLogin ? 'Entrando...' : 'Criando conta...'}
                </> : isLogin ? 'Entrar' : 'Criar Conta'}
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-white">
              {isLogin ? 'Não tem uma conta?' : 'Já tem uma conta?'}
              <button type="button" onClick={() => {
              setIsLogin(!isLogin);
              console.log("🔄 Alternando modo:", !isLogin ? 'login' : 'signup');
            }} className="ml-1 text-yellow-500 hover:text-yellow-400 font-medium transition-colors">
                {isLogin ? 'Criar conta' : 'Fazer login'}
              </button>
            </p>
          </div>

          {/* Informações de teste */}
          <div className="mt-4 p-3 bg-zinc-800 rounded-lg border border-zinc-700">
            <div className="flex items-start space-x-2">
              <AlertCircle className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
              <div className="text-xs text-zinc-300">
                <p className="font-semibold mb-1 text-yellow-500">Informações importantes:</p>
                <p className="mb-1 text-white">• Se você já criou uma conta, use "Fazer login"</p>
                <p className="mb-1 text-white">• Se é primeira vez, use "Criar conta"</p>
                <p className="mb-1">
              </p>
                <p>
              </p>
              </div>
            </div>
          </div>

          <div className="mt-4 text-center">
            <Button variant="outline" onClick={() => navigate('/')} className="text-sm border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-yellow-500">
              Voltar ao início
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>;
};
export default Login;