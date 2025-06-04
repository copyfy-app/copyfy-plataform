
import React from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const DashboardHome = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-zinc-900 flex items-center justify-center px-4 relative">
      {/* Logout Button - Top Right */}
      <div className="absolute top-6 right-6">
        <button 
          onClick={signOut} 
          className="text-white border border-yellow-400/30 hover:bg-yellow-400/10 hover:border-yellow-400 transition-all duration-300 px-4 py-2 rounded-lg"
        >
          Sair
        </button>
      </div>

      {/* Subtle background animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/5 via-transparent to-yellow-900/5 opacity-50" />

      <div className="w-full max-w-xl bg-black/60 border border-yellow-600 shadow-2xl p-8 rounded-2xl text-white text-center space-y-6 backdrop-blur-sm">
        
        <h1 className="text-3xl font-bold text-yellow-500">
          COPY<span className="text-white">FY</span>
        </h1>

        <p className="text-md">
          Bem-vindo{user?.email ? `, ${user.email.split('@')[0]}` : ""}!
        </p>

        <p className="text-lg font-semibold">
          Copys de Alta Conversão com Tradução para +100 Países
        </p>

        <button
          onClick={() => navigate("/painel")}
          className="bg-yellow-500 hover:bg-yellow-600 text-black w-full text-lg py-6 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          Ir para o Gerador de Copys
        </button>

        <div className="space-y-3 pt-6">
          <button
            onClick={() => navigate("/terms-of-use")}
            className="w-full border border-yellow-500 text-yellow-400 hover:text-yellow-500 hover:bg-yellow-400/10 py-3 rounded-xl transition-all duration-300"
          >
            📄 Termos de Uso
          </button>

          <button
            onClick={() => navigate("/privacy-policy")}
            className="w-full border border-yellow-500 text-yellow-400 hover:text-yellow-500 hover:bg-yellow-400/10 py-3 rounded-xl transition-all duration-300"
          >
            🛡️ Políticas de Privacidade
          </button>

          <button
            onClick={() => navigate("/support")}
            className="w-full border border-yellow-500 text-yellow-400 hover:text-yellow-500 hover:bg-yellow-400/10 py-3 rounded-xl transition-all duration-300"
          >
            ✉️ Suporte
          </button>
        </div>

        <p className="pt-6 text-sm text-zinc-400">
          Logado como: <span className="text-yellow-500">{user?.email}</span>
        </p>
      </div>
    </div>
  );
};

export default DashboardHome;
