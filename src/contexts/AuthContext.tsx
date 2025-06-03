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
    console.log("🧹 Limpando estado de autenticação...");
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

  // Carregar informações do usuário
  const loadUserInfo = async (userId: string) => {
    try {
      console.log("📊 Carregando informações do usuário:", userId);
      
      // Verificar se é o e-mail admin diretamente
      if (user?.email === 'inspiranegociosonline@gmail.com') {
        console.log("👑 Usuário identificado como admin");
        setIsAdmin(true);
        setTrialDaysRemaining(999);
        setIsTrialActive(true);
        return;
      }

      console.log("👤 Usuário padrão configurado");
      setIsAdmin(false);
      setTrialDaysRemaining(2);
      setIsTrialActive(true);

    } catch (error) {
      console.error("❌ Erro ao processar informações do usuário:", error);
      setIsAdmin(false);
      setTrialDaysRemaining(2);
      setIsTrialActive(true);
    }
  };

  useEffect(() => {
    let mounted = true;
    
    const initializeAuth = async () => {
      try {
        console.log("🚀 Inicializando autenticação...");
        
        // Primeiro verificar se já existe uma sessão ativa
        const { data: { session: currentSession }, error: sessionError } = await supabase.auth.getSession();
        
        console.log("📋 Sessão atual:", currentSession ? "existe" : "não existe");
        console.log("📋 Erro de sessão:", sessionError);

        if (sessionError) {
          console.error("❌ Erro ao obter sessão:", sessionError);
          cleanupAuthState();
        }

        if (mounted) {
          setSession(currentSession);
          setUser(currentSession?.user ?? null);

          if (currentSession?.user) {
            console.log("✅ Usuário logado encontrado:", currentSession.user.email);
            loadUserInfo(currentSession.user.id);
          } else {
            console.log("👤 Nenhum usuário logado encontrado");
          }
          
          setLoading(false);
        }
      } catch (error) {
        console.error("💥 Erro na inicialização da autenticação:", error);
        if (mounted) {
          setLoading(false);
        }
      }
    };

    // Configurar o listener de mudança de estado de autenticação
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log("🔄 Mudança de estado de auth:", event, session?.user?.email);
        
        if (mounted) {
          setSession(session);
          setUser(session?.user ?? null);

          if (session?.user) {
            console.log("✅ Usuário autenticado:", session.user.email);
            setTimeout(() => {
              loadUserInfo(session.user.id);
            }, 0);
          } else {
            console.log("❌ Usuário desautenticado");
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
      console.log("🔐 Tentando fazer login com:", email);
      console.log("🔐 Comprimento da senha:", password.length);
      
      // Limpar estado de autenticação existente
      cleanupAuthState();
      
      // Tentar deslogar globalmente primeiro
      try {
        console.log("🚪 Fazendo logout global preventivo...");
        await supabase.auth.signOut({ scope: 'global' });
      } catch (err) {
        console.log("⚠️ Erro ao fazer signOut global (ignorado):", err);
      }
      
      // Aguardar um pouco antes de tentar login
      await new Promise(resolve => setTimeout(resolve, 100));
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim().toLowerCase(),
        password: password,
      });

      console.log("📝 Resultado completo do login:");
      console.log("- Data:", data);
      console.log("- Error:", error);
      console.log("- User:", data?.user);
      console.log("- Session:", data?.session);

      if (error) {
        console.error("❌ Erro de autenticação detalhado:", {
          message: error.message,
          status: error.status,
          name: error.name
        });
        
        // Tratar diferentes tipos de erro
        let errorMessage = "Verifique suas credenciais e tente novamente";
        
        if (error.message.includes("Invalid login credentials")) {
          errorMessage = "Email ou senha incorretos. Verifique suas credenciais.";
        } else if (error.message.includes("Email not confirmed")) {
          errorMessage = "Por favor, confirme seu email antes de fazer login. Verifique sua caixa de entrada.";
        } else if (error.message.includes("Too many requests")) {
          errorMessage = "Muitas tentativas de login. Tente novamente em alguns minutos.";
        } else if (error.message.includes("User not found")) {
          errorMessage = "Usuário não encontrado. Verifique o email ou crie uma nova conta.";
        }
        
        throw new Error(errorMessage);
      }
      
      if (data.user && data.session) {
        console.log("✅ Login realizado com sucesso!");
        console.log("- Email do usuário:", data.user.email);
        console.log("- ID do usuário:", data.user.id);
        console.log("- Email confirmado:", data.user.email_confirmed_at ? "Sim" : "Não");
        
        toast({
          title: "Login realizado!",
          description: "Bem-vindo de volta ao Copyfy.",
        });
        
        // Aguardar um pouco antes de navegar sempre para dashboard
        setTimeout(() => {
          navigate("/dashboard");
        }, 500);
      } else {
        console.log("⚠️ Login sem dados de usuário ou sessão");
        throw new Error("Login realizado mas dados incompletos");
      }
    } catch (error: any) {
      console.error("💥 Erro completo no login:", error);
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
      console.log("📝 Tentando criar conta com:", email);
      console.log("📝 Comprimento da senha:", password.length);
      
      cleanupAuthState();
      
      const { data, error } = await supabase.auth.signUp({
        email: email.trim().toLowerCase(),
        password: password,
        options: {
          emailRedirectTo: `${window.location.origin}/dashboard`
        }
      });

      console.log("📝 Resultado completo do cadastro:");
      console.log("- Data:", data);
      console.log("- Error:", error);
      console.log("- User:", data?.user);
      console.log("- Session:", data?.session);

      if (error) {
        console.error("❌ Erro no cadastro:", error);
        
        let errorMessage = "Não foi possível criar sua conta";
        
        if (error.message.includes("already registered") || error.message.includes("already exists")) {
          errorMessage = "Este email já está cadastrado. Tente fazer login.";
        } else if (error.message.includes("Password should be")) {
          errorMessage = "A senha deve ter pelo menos 6 caracteres.";
        } else if (error.message.includes("invalid email")) {
          errorMessage = "Email inválido. Verifique o formato do email.";
        }
        
        throw new Error(errorMessage);
      }

      if (data.user) {
        console.log("✅ Conta criada com sucesso!");
        console.log("- Email do usuário:", data.user.email);
        console.log("- ID do usuário:", data.user.id);
        console.log("- Precisa confirmar email:", !data.session ? "Sim" : "Não");
        
        if (data.session) {
          toast({
            title: "Conta criada!",
            description: "Sua conta foi criada com sucesso.",
          });
          navigate("/dashboard");
        } else {
          toast({
            title: "Conta criada!",
            description: "Verifique seu email para confirmar a conta antes de fazer login.",
          });
        }
      }
    } catch (error: any) {
      console.error("💥 Erro completo no cadastro:", error);
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
      console.log("🚪 Fazendo logout...");
      cleanupAuthState();
      await supabase.auth.signOut({ scope: 'global' });
      
      toast({
        title: "Logout realizado",
        description: "Você saiu do sistema com sucesso.",
      });
      
      window.location.href = '/login';
    } catch (error: any) {
      console.error("❌ Erro no logout:", error);
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
