
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Session, User } from "@supabase/supabase-js";
import { toast } from "@/hooks/use-toast";
import { calculateDaysRemaining } from "@/utils/dateUtils";

type AuthContextType = {
  session: Session | null;
  user: User | null;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  loading: boolean;
  trialDaysRemaining: number;
  isTrialActive: boolean;
  isAdmin: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [trialDaysRemaining, setTrialDaysRemaining] = useState(2); // Default 2 days for trial
  const [isTrialActive, setIsTrialActive] = useState(true); // Default active trial
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  // Função para limpar completamente o estado da autenticação
  const cleanupAuthState = () => {
    // Remova tokens padrão de autenticação
    localStorage.removeItem("supabase.auth.token");
    // Remova todas as chaves Supabase auth do localStorage
    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith("supabase.auth.") || key.includes("sb-")) {
        localStorage.removeItem(key);
      }
    });
    // Remova do sessionStorage se estiver em uso
    Object.keys(sessionStorage || {}).forEach((key) => {
      if (key.startsWith("supabase.auth.") || key.includes("sb-")) {
        sessionStorage.removeItem(key);
      }
    });
  };

  // Carregar informações do trial e admin do usuário
  const loadUserInfo = async (userId: string) => {
    try {
      // Verificar se é o e-mail admin diretamente
      if (user?.email === 'inspiranegociosonline@gmail.com') {
        setIsAdmin(true);
        setTrialDaysRemaining(999); // Valor alto para admin
        setIsTrialActive(true);
        return;
      }

      // Para outros usuários, usar valores padrão de trial
      setIsAdmin(false);
      setTrialDaysRemaining(2); // 2 dias de trial padrão
      setIsTrialActive(true);

    } catch (error) {
      console.error("Erro ao processar informações do usuário:", error);
      // Valores padrão em caso de erro
      setIsAdmin(false);
      setTrialDaysRemaining(2);
      setIsTrialActive(true);
    }
  };

  useEffect(() => {
    // Configurar o listener de mudança de estado de autenticação
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);

        if (session?.user) {
          setTimeout(() => {
            loadUserInfo(session.user.id);
          }, 0);
        } else {
          // Reset admin status when logging out
          setIsAdmin(false);
          setTrialDaysRemaining(2);
          setIsTrialActive(true);
        }
      }
    );

    // Verificar se já existe uma sessão ativa
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);

      if (session?.user) {
        loadUserInfo(session.user.id);
      }
      
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, [user?.email]);

  // Login com e-mail e senha
  const signIn = async (email: string, password: string) => {
    setLoading(true);
    try {
      // Limpar estado de autenticação existente
      cleanupAuthState();
      
      // Tentar deslogar globalmente
      try {
        await supabase.auth.signOut({ scope: 'global' });
      } catch (err) {
        // Continuar mesmo se falhar
      }
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      
      if (data.user) {
        toast({
          title: "Login realizado!",
          description: "Bem-vindo de volta ao Copyfy.",
        });
        navigate("/dashboard");
      }
    } catch (error: any) {
      toast({
        title: "Erro ao fazer login",
        description: error.message || "Verifique suas credenciais e tente novamente",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // Cadastro com e-mail e senha
  const signUp = async (email: string, password: string) => {
    setLoading(true);
    try {
      // Limpar estado de autenticação existente
      cleanupAuthState();
      
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) throw error;

      if (data) {
        toast({
          title: "Conta criada!",
          description: "Sua conta foi criada com sucesso.",
        });
        navigate("/dashboard");
      }
    } catch (error: any) {
      toast({
        title: "Erro ao criar conta",
        description: error.message || "Não foi possível criar sua conta",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // Logout
  const signOut = async () => {
    setLoading(true);
    try {
      // Limpar estado de autenticação
      cleanupAuthState();
      
      // Tentar deslogar globalmente
      await supabase.auth.signOut({ scope: 'global' });
      
      toast({
        title: "Logout realizado",
        description: "Você saiu do sistema com sucesso.",
      });
      
      // Forçar reload da página para limpar qualquer estado
      window.location.href = '/login';
    } catch (error: any) {
      toast({
        title: "Erro ao sair",
        description: error.message || "Ocorreu um erro ao fazer logout",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        session,
        user,
        signIn,
        signUp,
        signOut,
        loading,
        trialDaysRemaining,
        isTrialActive,
        isAdmin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};
