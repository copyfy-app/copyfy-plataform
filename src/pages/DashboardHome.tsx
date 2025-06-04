
import React from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const DashboardHome = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleGoToCopyGenerator = () => {
    navigate("/painel");
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
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black flex items-center justify-center px-4 relative overflow-hidden">
      {/* Logout Button - Top Right */}
      <div className="absolute top-6 right-6">
        <button 
          onClick={signOut} 
          className="text-white border border-yellow-400/30 hover:bg-yellow-400/10 hover:border-yellow-400 transition-all duration-300 px-4 py-2 rounded-lg"
        >
          Sair
        </button>
      </div>

      {/* Animação sutil de fundo */}
      <div className="absolute inset-0 bg-gradient-radial from-yellow-900/10 via-yellow-800/5 to-transparent" />

      {/* Card central com glassmorphism */}
      <div 
        className="w-full max-w-md text-center p-8 rounded-2xl text-white z-10"
        style={{
          background: "rgba(255, 255, 255, 0.05)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "16px",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.6)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)"
        }}
      >
        <h1 className="text-3xl font-bold mb-6" style={{ color: "#ffe600" }}>
          COPY<span className="text-white">FY</span>
        </h1>

        <p className="text-lg mb-6">
          Bem-vindo{user?.email ? `, ${user.email.split('@')[0]}` : ""}!
        </p>

        <p className="text-lg font-semibold mb-8">
          Copys de Alta Conversão com Tradução para +100 Países
        </p>

        <button 
          onClick={handleGoToCopyGenerator}
          className="w-full text-lg py-4 rounded-lg mb-6 font-medium transition-all duration-300 transform hover:scale-105"
          style={{
            backgroundColor: "#ffe600",
            color: "#000"
          }}
          onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = "#fff200"}
          onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = "#ffe600"}
        >
          Acessar Painel de Geração
        </button>

        <div className="space-y-3">
          <button 
            onClick={handleTermsClick}
            className="w-full border border-yellow-500 text-yellow-400 hover:text-yellow-500 hover:bg-yellow-400/10 py-3 rounded-lg transition-all duration-300"
          >
            📄 Termos de Uso
          </button>

          <button 
            onClick={handlePrivacyClick}
            className="w-full border border-yellow-500 text-yellow-400 hover:text-yellow-500 hover:bg-yellow-400/10 py-3 rounded-lg transition-all duration-300"
          >
            🛡️ Políticas de Privacidade
          </button>

          <button 
            onClick={handleSupportEmail}
            className="w-full border border-yellow-500 text-yellow-400 hover:text-yellow-500 hover:bg-yellow-400/10 py-3 rounded-lg transition-all duration-300"
          >
            ✉️ Suporte por E-mail
          </button>
        </div>

        <p className="pt-6 text-sm text-zinc-400">
          Logado como: <span style={{ color: "#ffe600" }}>{user?.email}</span>
        </p>
      </div>
    </div>
  );
};

export default DashboardHome;
