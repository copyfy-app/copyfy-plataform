
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
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-zinc-700 py-6 md:py-8 shadow-lg bg-black">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center">
            <div className="text-center flex-1">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-500 tracking-wide">
                Copy<span className="text-white">fy</span>
              </h1>
            </div>
            <Button 
              onClick={signOut}
              variant="outline"
              className="text-white border-zinc-700 hover:bg-zinc-800"
            >
              Sair
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          {/* Welcome Section */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
              Bem-vindo à Copyfy
            </h2>
            <p className="text-lg md:text-xl text-yellow-500">
              Você está logado como <span className="font-semibold">{user?.email}</span>
            </p>
          </div>

          {/* Main Action Button */}
          <div className="py-8">
            <Button
              onClick={handleGoToCampaigns}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg md:text-xl py-4 px-8 md:px-12 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105"
              size="lg"
            >
              Ir para Geração de Campanhas
            </Button>
          </div>

          {/* Secondary Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={handlePolicyClick}
              variant="outline"
              className="text-white border-zinc-700 hover:bg-zinc-800 hover:text-yellow-500 transition-colors"
            >
              Política de Uso
            </Button>
            
            <Button
              onClick={handleSupportEmail}
              variant="outline"
              className="text-white border-zinc-700 hover:bg-zinc-800 hover:text-yellow-500 transition-colors flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Suporte por Email
            </Button>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 py-8 border-t border-zinc-700">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <p className="text-zinc-400 text-sm">
            © {new Date().getFullYear()} Copyfy - Gerador de Campanhas
          </p>
        </div>
      </footer>
    </div>
  );
};

export default DashboardHome;
