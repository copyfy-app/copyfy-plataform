
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Loader2 } from 'lucide-react';

const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        console.log("🔄 Processando callback de autenticação...");
        
        // Verificar se há parâmetros de hash na URL (OAuth callback)
        const { data, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error("❌ Erro no callback:", error);
          navigate('/login');
          return;
        }

        if (data.session) {
          console.log("✅ Sessão criada com sucesso via callback");
          navigate('/dashboard');
        } else {
          console.log("⚠️ Nenhuma sessão encontrada, redirecionando para login");
          navigate('/login');
        }
      } catch (error) {
        console.error("💥 Erro no processamento do callback:", error);
        navigate('/login');
      }
    };

    handleAuthCallback();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-zinc-900 flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="h-8 w-8 animate-spin text-yellow-500 mx-auto mb-4" />
        <p className="text-white">Finalizando login...</p>
      </div>
    </div>
  );
};

export default AuthCallback;
