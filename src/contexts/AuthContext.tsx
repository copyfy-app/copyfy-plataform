
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Session, User } from "@supabase/supabase-js";
import { toast } from "@/hooks/use-toast";

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
  const [trialDaysRemaining, setTrialDaysRemaining] = useState(2);
  const [isTrialActive, setIsTrialActive] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  // Função para limpar completamente o estado da autenticação
  const cleanupAuthState = () => {
    localStorage.removeItem("supabase.auth.token");
    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith("supabase.auth.") || key.includes("sb-")) {
        localStorage.removeItem(key);
      }
    });
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
        setTrialDaysRemaining(999);
        setIsTrialActive(true);
        return;
      }

      setIsAdmin(false);
      setTrialDaysRemaining(2);
      setIsTrialActive(true);

    } catch (error) {
      console.error("Erro ao processar informações do usuário:", error);
      setIsAdmin(false);
      setTrialDaysRemaining(2);
      setIsTrialActive(true);
    }
  };

  useEffect(() => {
    let mounted = true;
    
    const initializeAuth = async () => {
      try {
        // Primeiro verificar se já existe uma sessão ativa
        const { data: { session: currentSession }, error: sessionError } = await supabase.auth.getSession();
        
        if (sessionError) {
          console.error("Erro ao obter sessão:", sessionError);
          cleanupAuthState();
        }

        if (mounted) {
          setSession(currentSession);
          setUser(currentSession?.user ?? null);

          if (currentSession?.user) {
            loadUserInfo(currentSession.user.id);
          }
          
          setLoading(false);
        }
      } catch (error) {
        console.error("Erro na inicialização da autenticação:", error);
        if (mounted) {
          setLoading(false);
        }
      }
    };

    // Configurar o listener de mudança de estado de autenticação
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log("Auth state changed:", event, session?.user?.email);
        
        if (mounted) {
          setSession(session);
          setUser(session?.user ?? null);

          if (session?.user) {
            setTimeout(() => {
              loadUserInfo(session.user.id);
            }, 0);
          } else {
            setIsAdmin(false);
            setTrialDaysRemaining(2);
            setIsTrialActive(true);
          }
        }
      }
    );

    initializeAuth();

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, [user?.email]);

  // Login com e-mail e senha
  const signIn = async (email: string, password: string) => {
    setLoading(true);
    try {
      console.log("Tentando fazer login com:", email);
      
      // Limpar estado de autenticação existente
      cleanupAuthState();
      
      // Tentar deslogar globalmente primeiro
      try {
        await supabase.auth.signOut({ scope: 'global' });
      } catch (err) {
        console.log("Erro ao fazer signOut global:", err);
      }
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password: password,
      });

      console.log("Resultado do login:", { data, error });

      if (error) {
        console.error("Erro de autenticação:", error);
        
        // Tratar diferentes tipos de erro
        let errorMessage = "Verifique suas credenciais e tente novamente";
        
        if (error.message.includes("Invalid login credentials")) {
          errorMessage = "Email ou senha incorretos. Verifique suas credenciais.";
        } else if (error.message.includes("Email not confirmed")) {
          errorMessage = "Por favor, confirme seu email antes de fazer login.";
        } else if (error.message.includes("Too many requests")) {
          errorMessage = "Muitas tentativas de login. Tente novamente em alguns minutos.";
        }
        
        throw new Error(errorMessage);
      }
      
      if (data.user) {
        console.log("Login realizado com sucesso para:", data.user.email);
        toast({
          title: "Login realizado!",
          description: "Bem-vindo de volta ao Copyfy.",
        });
        navigate("/dashboard");
      }
    } catch (error: any) {
      console.error("Erro completo no login:", error);
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
      console.log("Tentando criar conta com:", email);
      
      cleanupAuthState();
      
      const { data, error } = await supabase.auth.signUp({
        email: email.trim(),
        password: password,
      });

      console.log("Resultado do cadastro:", { data, error });

      if (error) {
        console.error("Erro no cadastro:", error);
        
        let errorMessage = "Não foi possível criar sua conta";
        
        if (error.message.includes("already registered")) {
          errorMessage = "Este email já está cadastrado. Tente fazer login.";
        } else if (error.message.includes("Password should be")) {
          errorMessage = "A senha deve ter pelo menos 6 caracteres.";
        }
        
        throw new Error(errorMessage);
      }

      if (data.user) {
        toast({
          title: "Conta criada!",
          description: "Sua conta foi criada com sucesso.",
        });
        navigate("/dashboard");
      }
    } catch (error: any) {
      console.error("Erro completo no cadastro:", error);
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
      cleanupAuthState();
      await supabase.auth.signOut({ scope: 'global' });
      
      toast({
        title: "Logout realizado",
        description: "Você saiu do sistema com sucesso.",
      });
      
      window.location.href = '/login';
    } catch (error: any) {
      console.error("Erro no logout:", error);
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
