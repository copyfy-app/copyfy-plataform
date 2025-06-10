
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

  // Carregar informações do usuário
  const loadUserInfo = async (userId: string) => {
    try {
      console.log("📊 Carregando informações do usuário:", userId);
      
      // Buscar o perfil do usuário na tabela profiles
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (profileError) {
        console.error("❌ Erro ao buscar perfil:", profileError);
        // Se o perfil não existir, usar valores padrão
        console.log("👤 Usando configuração padrão (perfil não encontrado)");
        setIsAdmin(false);
        setTrialDaysRemaining(2);
        setIsTrialActive(true);
        return;
      }

      console.log("✅ Perfil encontrado:", profile);

      // Verificar se é admin
      const adminStatus = profile.is_admin || false;
      setIsAdmin(adminStatus);

      if (adminStatus) {
        console.log("👑 Usuário é admin - acesso completo");
        setTrialDaysRemaining(999); // Admin não tem limitação
        setIsTrialActive(true);
      } else {
        // Calcular dias restantes do trial baseado no trial_start
        if (profile.trial_start) {
          const trialStartDate = new Date(profile.trial_start);
          const daysRemaining = calculateDaysRemaining(trialStartDate);
          const isActive = daysRemaining > 0;
          
          console.log("📅 Dados do trial:", {
            trialStart: trialStartDate.toISOString(),
            daysRemaining,
            isActive
          });
          
          setTrialDaysRemaining(daysRemaining);
          setIsTrialActive(isActive);
        } else {
          // Se não tiver trial_start, criar um novo
          console.log("🆕 Criando novo período de trial");
          const now = new Date();
          
          const { error: updateError } = await supabase
            .from('profiles')
            .update({ trial_start: now.toISOString() })
            .eq('id', userId);

          if (updateError) {
            console.error("❌ Erro ao atualizar trial_start:", updateError);
          } else {
            console.log("✅ Trial_start atualizado com sucesso");
          }
          
          setTrialDaysRemaining(2);
          setIsTrialActive(true);
        }
      }

    } catch (error) {
      console.error("❌ Erro ao processar informações do usuário:", error);
      // Em caso de erro, usar valores padrão
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
  }, []);

  // Login com e-mail e senha
  const signIn = async (email: string, password: string) => {
    setLoading(true);
    try {
      console.log("🔐 Tentando fazer login com:", email);
      
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

  // Logout
  const signOut = async () => {
    try {
      console.log("🚪 Fazendo logout...");
      
      // Usar o método oficial do Supabase
      await supabase.auth.signOut();
      
      // Limpar estado local
      setSession(null);
      setUser(null);
      setIsAdmin(false);
      setTrialDaysRemaining(2);
      setIsTrialActive(true);
      
      // Redirecionar para login
      navigate("/login");
    } catch (error: any) {
      console.error("❌ Erro no logout:", error);
      
      // Mesmo com erro, forçar logout local
      setSession(null);
      setUser(null);
      setIsAdmin(false);
      setTrialDaysRemaining(2);
      setIsTrialActive(true);
      
      navigate("/login");
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
