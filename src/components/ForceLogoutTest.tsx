
import React from 'react';
import { supabase } from "@/integrations/supabase/client";

const ForceLogoutTest = () => {
  const logoutNow = async () => {
    console.log("🧪 Teste de logout forçado iniciado...");
    try {
      await supabase.auth.signOut();
      console.log("✅ Logout realizado com sucesso");
      window.location.href = '/login';
    } catch (error) {
      console.error("❌ Erro no logout:", error);
    }
  };

  return (
    <button 
      onClick={logoutNow} 
      style={{ 
        position: 'fixed', 
        top: 20, 
        right: 20, 
        zIndex: 99999, 
        padding: '10px 20px', 
        background: 'red', 
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontWeight: 'bold'
      }}
    >
      Forçar Logout
    </button>
  );
};

export default ForceLogoutTest;
