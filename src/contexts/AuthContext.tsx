
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
  signInWithGoogle: () => Promise<void>;
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
    
    // Limpar todos os tokens do localStorage
    const keysToRemove = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && (key.startsWith("supabase.auth.") || key.includes("sb-"))) {
        keysToRemove.push(key);
      }
    }
    keysToRemove.forEach(key => localStorage.removeItem(key));
    
    // Limpar sessionStorage também
    if (typeof sessionStorage !== 'undefined') {
      const sessionKeysToRemove = [];
      for (let i = 0; i < sessionStorage.length; i++) {
        const key = sessionStorage.key(i);
        if (key && (key.startsWith("supabase.auth.") || key.includes("sb-"))) {
          sessionKeysToRemove.push(key);
        }
      }
      sessionKeysToRemove.forEach(key => sessionStorage.removeItem(key));
    }
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
        
        // Verificar se já existe uma sessão ativa
        const { data: { session: currentSession }, error: sessionError } = await supabase.auth.getSession();
        
        console.log("📋 Sessão atual:", currentSession ? "existe" : "não existe");

        if (sessionError) {
          console.error("❌ Erro ao obter sessão:", sessionError);
          cleanupAuthState();
        }

        if (mounted) {
          setSession(currentSession);
          setUser(currentSession?.user ?? null);

          if (currentSession?.user) {
            console.log("✅ Usuário logado encontrado:", currentSession.user.email);
            await loadUserInfo(currentSession.user.id);
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
      
      // Limpar estado de autenticação existente
      cleanupAuthState();
      
      // Tentar deslogar globalmente primeiro
      try {
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

      if (error) {
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
      
      if (data.user && data.session) {
        console.log("✅ Login realizado com sucesso!");
        
        toast({
          title: "Login realizado!",
          description: "Bem-vindo de volta ao Copyfy.",
        });
        
        setTimeout(() => {
          navigate("/dashboard");
        }, 500);
      }
    } catch (error: any) {
      console.error("💥 Erro no login:", error);
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
      
      cleanupAuthState();
      
      const { data, error } = await supabase.auth.signUp({
        email: email.trim().toLowerCase(),
        password: password,
        options: {
          emailRedirectTo: `${window.location.origin}/dashboard`
        }
      });

      if (error) {
        let errorMessage = "Não foi possível criar sua conta";
        
        if (error.message.includes("already registered")) {
          errorMessage = "Este email já está cadastrado. Tente fazer login.";
        } else if (error.message.includes("Password should be")) {
          errorMessage = "A senha deve ter pelo menos 6 caracteres.";
        }
        
        throw new Error(errorMessage);
      }

      if (data.user) {
        console.log("✅ Conta criada com sucesso!");
        
        if (data.session) {
          toast({
            title: "Conta criada!",
            description: "Sua conta foi criada com sucesso.",
          });
          navigate("/dashboard");
        } else {
          toast({
            title: "Conta criada!",
            description: "Verifique seu email para confirmar a conta.",
          });
        }
      }
    } catch (error: any) {
      console.error("💥 Erro no cadastro:", error);
      toast({
        title: "Erro ao criar conta",
        description: error.message || "Não foi possível criar sua conta",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // Login com Google
  const signInWithGoogle = async () => {
    setLoading(true);
    try {
      console.log("🔐 Tentando fazer login com Google...");
      
      cleanupAuthState();
      
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/dashboard`
        }
      });

      if (error) {
        console.error("❌ Erro no login com Google:", error);
        throw new Error(error.message);
      }

      console.log("✅ Redirecionamento para Google iniciado");
    } catch (error: any) {
      console.error("💥 Erro no login com Google:", error);
      toast({
        title: "Erro ao fazer login com Google",
        description: error.message || "Tente novamente mais tarde",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // Logout - FUNÇÃO CORRIGIDA
  const signOut = async () => {
    setLoading(true);
    try {
      console.log("🚪 Fazendo logout...");
      
      // Primeiro limpar o estado local
      setSession(null);
      setUser(null);
      setIsAdmin(false);
      setTrialDaysRemaining(2);
      setIsTrialActive(true);
      
      // Limpar storage
      cleanupAuthState();
      
      // Fazer signOut no Supabase
      await supabase.auth.signOut({ scope: 'global' });
      
      toast({
        title: "Logout realizado",
        description: "Você saiu do sistema com sucesso.",
      });
      
      // Redirecionar para login com refresh completo
      window.location.href = '/login';
    } catch (error: any) {
      console.error("❌ Erro no logout:", error);
      
      // Mesmo com erro, forçar logout local
      setSession(null);
      setUser(null);
      cleanupAuthState();
      
      toast({
        title: "Logout realizado",
        description: "Você foi desconectado.",
      });
      
      window.location.href = '/login';
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
        signInWithGoogle,
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
