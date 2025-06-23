
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Loader2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        console.log("🔄 Processando callback de autenticação...");
        console.log("📍 URL atual:", window.location.href);
        console.log("🔗 Hash da URL:", window.location.hash);
        console.log("❓ Query params:", window.location.search);
        
        // Aguardar um pouco para garantir que o Supabase processe o callback
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Verificar se há parâmetros de hash na URL (OAuth callback)
        const { data, error } = await supabase.auth.getSession();
        
        console.log("📋 Dados da sessão após callback:", {
          hasSession: !!data.session,
          hasUser: !!data.session?.user,
          userEmail: data.session?.user?.email,
          error: error?.message
        });

        if (error) {
          console.error("❌ Erro no callback:", error);
          toast({
            title: "Erro na autenticação",
            description: "Falha ao processar login. Tente novamente.",
            variant: "destructive",
          });
          
          // Aguardar antes de redirecionar
          setTimeout(() => {
            navigate('/login');
          }, 2000);
          return;
        }

        if (data.session && data.session.user) {
          console.log("✅ Sessão criada com sucesso via callback");
          console.log("👤 Usuário logado:", data.session.user.email);
          
          toast({
            title: "Login realizado!",
            description: `Bem-vindo, ${data.session.user.email}!`,
          });
          
          // Aguardar um pouco antes de redirecionar para garantir que tudo seja processado
          setTimeout(() => {
            console.log("🧭 Redirecionando para dashboard...");
            navigate('/dashboard');
          }, 1500);
        } else {
          console.log("⚠️ Nenhuma sessão encontrada no callback");
          
          // Tentar novamente em alguns casos
          setTimeout(async () => {
            console.log("🔄 Tentativa adicional de obter sessão...");
            const { data: retryData, error: retryError } = await supabase.auth.getSession();
            
            if (retryData.session) {
              console.log("✅ Sessão encontrada na segunda tentativa");
              navigate('/dashboard');
            } else {
              console.log("❌ Nenhuma sessão encontrada, redirecionando para login");
              toast({
                title: "Erro na autenticação",
                description: "Não foi possível completar o login. Tente novamente.",
                variant: "destructive",
              });
              navigate('/login');
            }
          }, 2000);
        }
      } catch (error) {
        console.error("💥 Erro no processamento do callback:", error);
        toast({
          title: "Erro na autenticação",
          description: "Falha inesperada no login. Tente novamente.",
          variant: "destructive",
        });
        
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      }
    };

    handleAuthCallback();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-zinc-900 flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="h-8 w-8 animate-spin text-yellow-500 mx-auto mb-4" />
        <p className="text-white text-lg mb-2">Finalizando login...</p>
        <p className="text-gray-400 text-sm">Aguarde enquanto processamos sua autenticação</p>
        
        {/* Indicador de progresso visual */}
        <div className="mt-6 w-64 mx-auto">
          <div className="bg-gray-700 rounded-full h-2">
            <div className="bg-yellow-500 h-2 rounded-full animate-pulse" style={{width: '60%'}}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthCallback;
