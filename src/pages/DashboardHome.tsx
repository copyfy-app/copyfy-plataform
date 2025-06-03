import React from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
const DashboardHome = () => {
  const {
    user,
    signOut
  } = useAuth();
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
  return <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black flex items-center justify-center px-4 relative overflow-hidden">
      {/* Logout Button - Top Right */}
      <div className="absolute top-6 right-6">
        <button onClick={signOut} className="text-white border border-yellow-400/30 hover:bg-yellow-400/10 hover:border-yellow-400 transition-all duration-300 px-4 py-2 rounded-lg">
          Sair
        </button>
      </div>

      {/* Animação sutil de fundo */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/10 via-yellow-800/5 to-transparent animate-pulse bg-black" />

      {/* Card central animado */}
      <div className="w-full max-w-xl bg-black/60 border border-yellow-600 shadow-2xl p-8 text-white text-center space-y-6 animate-fade-in z-10 px-[32px] rounded-2xl py-[70px]">
        
        <h1 className="text-3xl font-bold text-yellow-500">
          COPY<span className="text-white">FY</span>
        </h1>

        <p className="text-md">
          Bem-vindo{user?.email ? `, ${user.email.split('@')[0]}` : ""}!
        </p>

        <p className="text-lg font-semibold">
          Copys de Alta Conversão com Tradução para +100 Países
        </p>

        <button onClick={handleGoToCopyGenerator} className="bg-yellow-500 hover:bg-yellow-600 text-black w-full text-lg py-6 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105">
          Ir para o Gerador de Copys
        </button>

        <div className="space-y-3 pt-6">
          <button onClick={handleTermsClick} className="w-full border border-yellow-500 text-yellow-400 hover:text-yellow-500 hover:bg-yellow-400/10 py-3 rounded-xl transition-all duration-300">
            📄 Termos de Uso
          </button>

          <button onClick={handlePrivacyClick} className="w-full border border-yellow-500 text-yellow-400 hover:text-yellow-500 hover:bg-yellow-400/10 py-3 rounded-xl transition-all duration-300">
            🛡️ Políticas de Privacidade
          </button>

          <button onClick={handleSupportEmail} className="w-full border border-yellow-500 text-yellow-400 hover:text-yellow-500 hover:bg-yellow-400/10 py-3 rounded-xl transition-all duration-300">
            ✉️ Suporte por E-mail
          </button>
        </div>

        <p className="pt-6 text-sm text-zinc-400">
          Logado como: <span className="text-yellow-500">{user?.email}</span>
        </p>
      </div>
    </div>;
};
export default DashboardHome;