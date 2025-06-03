
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Mail } from "lucide-react";

const DashboardHome = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleGoToCampaigns = () => {
    navigate("/painel");
  };

  const handleSupportEmail = () => {
    window.location.href = "mailto:inspiranegociosonline@gmail.com";
  };

  const handlePolicyClick = () => {
    navigate("/politica");
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      {/* Dashboard Container with Glassmorphism */}
      <div className="relative w-full max-w-md">
        {/* Logout Button - Top Right */}
        <div className="absolute -top-12 right-0">
          <Button 
            onClick={signOut}
            variant="outline"
            className="text-white border-zinc-700 hover:bg-zinc-800 text-sm"
          >
            Sair
          </Button>
        </div>

        {/* Main Dashboard Card */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-[0_0_12px_rgba(255,255,0,0.2)] text-center">
          
          {/* Main Heading */}
          <h1 className="text-3xl font-bold text-yellow-400 mb-4">
            Bem-vindo à Copyfy
          </h1>
          
          {/* Subtitle */}
          <p className="text-base text-zinc-300 mb-8 leading-relaxed">
            Gere campanhas de alta conversão com tradução automática para mais de 100 países.
          </p>

          {/* User Info */}
          <div className="mb-8 text-sm text-zinc-400">
            Logado como: <span className="font-semibold text-white">{user?.email}</span>
          </div>

          {/* Primary Action Button */}
          <Button
            onClick={handleGoToCampaigns}
            className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-semibold text-base py-3 mb-6 rounded-xl transition-all duration-300 hover:shadow-lg"
          >
            Ir para o Gerador de Copys
          </Button>

          {/* Secondary Actions */}
          <div className="flex flex-col gap-3">
            <Button
              onClick={handlePolicyClick}
              variant="outline"
              className="w-full text-zinc-300 border-zinc-600 hover:bg-white/5 hover:text-yellow-400 transition-colors rounded-xl"
            >
              Política de Uso
            </Button>
            
            <Button
              onClick={handleSupportEmail}
              variant="outline"
              className="w-full text-zinc-300 border-zinc-600 hover:bg-white/5 hover:text-yellow-400 transition-colors rounded-xl flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Suporte por Email
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
