
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Mail, FileText, Shield } from "lucide-react";

const DashboardHome = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleGoToCopyGenerator = () => {
    navigate("/dashboard/copy-generator");
  };

  const handleTermsClick = () => {
    navigate("/terms");
  };

  const handlePrivacyClick = () => {
    navigate("/privacy");
  };

  const handleSupportEmail = () => {
    window.location.href = "mailto:inspiranegociosonline@gmail.com";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black flex items-center justify-center p-4">
      {/* Logout Button - Top Right */}
      <div className="absolute top-6 right-6">
        <Button 
          onClick={signOut}
          variant="outline"
          className="text-white border-yellow-400/30 hover:bg-yellow-400/10 hover:border-yellow-400 transition-all duration-300"
        >
          Sair
        </Button>
      </div>

      {/* Main Container */}
      <div className="w-full max-w-lg">
        {/* Glassmorphism Card */}
        <div className="relative bg-black/40 backdrop-blur-xl border border-yellow-400/20 rounded-3xl p-8 shadow-2xl">
          {/* Gradient Border Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-transparent to-yellow-400/20 rounded-3xl blur-sm -z-10"></div>
          
          {/* Logo */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold">
              <span className="text-yellow-400">COPY</span>
              <span className="text-white">FY</span>
            </h1>
          </div>

          {/* Welcome Text */}
          <div className="text-center mb-6">
            <p className="text-white/80 text-lg mb-2">
              Bem-vindo, {user?.email?.split('@')[0] || user?.email}!
            </p>
            <h2 className="text-white text-xl font-semibold leading-tight">
              Copys de Alta Conversão com Tradução para +100 Países
            </h2>
          </div>

          {/* Main Action Button */}
          <div className="mb-8">
            <Button
              onClick={handleGoToCopyGenerator}
              className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 text-black font-bold text-lg py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-400/25"
            >
              Ir para o Gerador de Copys
            </Button>
          </div>

          {/* Secondary Buttons */}
          <div className="space-y-3">
            <Button
              onClick={handleTermsClick}
              variant="outline"
              className="w-full text-yellow-400 border-yellow-400/50 hover:bg-yellow-400/10 hover:border-yellow-400 transition-all duration-300 rounded-2xl flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              Termos de Uso
            </Button>
            
            <Button
              onClick={handlePrivacyClick}
              variant="outline"
              className="w-full text-yellow-400 border-yellow-400/50 hover:bg-yellow-400/10 hover:border-yellow-400 transition-all duration-300 rounded-2xl flex items-center justify-center gap-2"
            >
              <Shield className="w-4 h-4" />
              Políticas de Privacidade
            </Button>
            
            <Button
              onClick={handleSupportEmail}
              variant="outline"
              className="w-full text-yellow-400 border-yellow-400/50 hover:bg-yellow-400/10 hover:border-yellow-400 transition-all duration-300 rounded-2xl flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Suporte por E-mail
            </Button>
          </div>

          {/* User Info Footer */}
          <div className="mt-8 pt-6 border-t border-yellow-400/20 text-center">
            <p className="text-white/60 text-sm">
              Logado como: <span className="text-yellow-400 font-medium">{user?.email}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
