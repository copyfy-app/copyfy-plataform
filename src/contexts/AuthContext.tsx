
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Session, User } from "@supabase/supabase-js";
import { toast } from "@/hooks/use-toast";
import { cleanupAuthState, isAdminEmail } from "@/utils/authCleanup";

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
  const [trialDaysRemaining, setTrialDaysRemaining] = useState(1);
  const [isTrialActive, setIsTrialActive] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  // Função para determinar admin com preservação de dados existentes
  const determineAdminStatus = async (userId: string, userEmail: string | undefined): Promise<boolean> => {
    console.log("👑 Verificando status de admin para:", userEmail);
    
    // Verificação 1: Email direto
    if (isAdminEmail(userEmail)) {
      console.log("✅ Admin confirmado por email:", userEmail);
      
      try {
        // Verificar se já existe perfil
        const { data: existingProfile } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', userId)
          .single();

        if (existingProfile) {
          console.log("📋 Perfil admin já existe, preservando dados");
          // Se já é admin, apenas atualizar se necessário sem tocar no trial_start
          if (!existingProfile.is_admin) {
            console.log("🔧 Atualizando status de admin sem afetar trial_start");
            await supabase
              .from('profiles')
              .update({ is_admin: true })
              .eq('id', userId);
          }
        } else {
          console.log("🆕 Criando novo perfil admin");
          await supabase
            .from('profiles')
            .insert({ 
              id: userId, 
              is_admin: true,
              trial_start: new Date().toISOString()
            });
        }
        
        return true;
      } catch (error) {
        console.error("❌ Erro ao gerenciar perfil admin:", error);
        return true; // Retorna true porque é admin por email mesmo se houver erro no banco
      }
    }
    
    // Verificação 2: Consulta no banco para não-admins
    try {
      const { data: profile } = await supabase
        .from('profiles')
        .select('is_admin')
        .eq('id', userId)
        .single();

      if (profile?.is_admin) {
        console.log("✅ Admin confirmado por banco de dados");
        return true;
      }
    } catch (error) {
      console.error("❌ Erro ao verificar admin no banco:", error);
    }
    
    return false;
  };

  // Carregar informações do usuário com preservação de dados de admin
  const loadUserInfo = async (userId: string, userEmail: string | undefined) => {
    try {
      console.log("📊 Carregando informações do usuário:", userId, userEmail);
      
      // Determinar status de admin primeiro
      const adminStatus = await determineAdminStatus(userId, userEmail);
      setIsAdmin(adminStatus);

      if (adminStatus) {
        console.log("👑 Usuário é admin - acesso completo sem limitações");
        setTrialDaysRemaining(999);
        setIsTrialActive(true);
        return;
      }

      // Para usuários não-admin, verificar/criar trial
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (profileError || !profile) {
        console.log("👤 Perfil não encontrado, criando novo com trial");
        const now = new Date();
        
        const { error: createError } = await supabase
          .from('profiles')
          .upsert({ 
            id: userId, 
            trial_start: now.toISOString(),
            is_admin: false
          });

        if (!createError) {
          setTrialDaysRemaining(1);
          setIsTrialActive(true);
        }
        return;
      }

      // Calcular trial para usuários normais
      if (profile.trial_start) {
        const trialStartDate = new Date(profile.trial_start);
        const now = new Date();
        const hoursElapsed = Math.floor((now.getTime() - trialStartDate.getTime()) / (1000 * 60 * 60));
        const hoursRemaining = Math.max(0, 24 - hoursElapsed);
        const daysRemaining = hoursRemaining > 0 ? 1 : 0;
        const isActive = hoursRemaining > 0;
        
        console.log("📅 Trial calculado:", {
          hoursElapsed,
          hoursRemaining,
          daysRemaining,
          isActive
        });
        
        setTrialDaysRemaining(daysRemaining);
        setIsTrialActive(isActive);
      }

    } catch (error) {
      console.error("❌ Erro ao processar informações do usuário:", error);
      setIsAdmin(false);
      setTrialDaysRemaining(1);
      setIsTrialActive(true);
    }
  };

  useEffect(() => {
    let mounted = true;
    
    const initializeAuth = async () => {
      try {
        console.log("🚀 Inicializando autenticação...");
        
        // Verificar sessão atual SEM limpar estado automaticamente
        const { data: { session: currentSession }, error: sessionError } = await supabase.auth.getSession();
        
        if (sessionError) {
          console.error("❌ Erro ao obter sessão:", sessionError);
          // APENAS limpar se houver erro específico de token corrompido
          if (sessionError.message.includes('refresh_token_not_found') || 
              sessionError.message.includes('Invalid Refresh Token')) {
            console.log("🧹 Token corrompido detectado, limpando...");
            cleanupAuthState();
            await supabase.auth.signOut();
          }
        }

        console.log("📋 Sessão atual:", currentSession ? "existe" : "não existe");

        if (mounted) {
          setSession(currentSession);
          setUser(currentSession?.user ?? null);

          if (currentSession?.user) {
            console.log("✅ Usuário logado encontrado:", currentSession.user.email);
            await loadUserInfo(currentSession.user.id, currentSession.user.email);
          } else {
            console.log("👤 Nenhum usuário logado");
          }
          
          setLoading(false);
        }
      } catch (error) {
        console.error("💥 Erro na inicialização:", error);
        if (mounted) {
          setLoading(false);
        }
      }
    };

    // Configurar listener de mudança de estado
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log("🔄 Mudança de estado de auth:", event, session?.user?.email);
        
        if (mounted) {
          setSession(session);
          setUser(session?.user ?? null);

          if (session?.user) {
            console.log("✅ Usuário autenticado:", session.user.email);
            setTimeout(() => {
              loadUserInfo(session.user.id, session.user.email);
            }, 0);
          } else {
            console.log("❌ Usuário desautenticado");
            setIsAdmin(false);
            setTrialDaysRemaining(1);
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

  // Login com e-mail e senha - MOBILE OTIMIZADO
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
          errorMessage = "Email ou senha incorretos.";
        } else if (error.message.includes("Email not confirmed")) {
          errorMessage = "Por favor, confirme seu email antes de fazer login.";
        } else if (error.message.includes("Too many requests")) {
          errorMessage = "Muitas tentativas. Tente novamente em alguns minutos.";
        }
        
        console.error("❌ Erro de login:", error.message);
        throw new Error(errorMessage);
      }
      
      if (data.user && data.session) {
        console.log("✅ Login realizado com sucesso!");
        
        toast({
          title: "Login realizado!",
          description: "Bem-vindo de volta ao Copyfy.",
        });
        
        // Aguardar um momento para garantir que o estado seja atualizado
        setTimeout(() => {
          console.log("🧭 Navegando para dashboard...");
          try {
            navigate('/dashboard');
          } catch (navError) {
            console.error("❌ Erro na navegação, usando fallback:", navError);
            window.location.href = '/dashboard';
          }
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

  // Cadastro com e-mail e senha - MOBILE OTIMIZADO
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
        
        console.error("❌ Erro de cadastro:", error.message);
        throw new Error(errorMessage);
      }

      if (data.user) {
        console.log("✅ Conta criada com sucesso!");
        
        if (data.session) {
          toast({
            title: "Conta criada!",
            description: "Sua conta foi criada com sucesso.",
          });
          
          setTimeout(() => {
            console.log("🧭 Navegando para dashboard após cadastro...");
            try {
              navigate('/dashboard');
            } catch (navError) {
              console.error("❌ Erro na navegação, usando fallback:", navError);
              window.location.href = '/dashboard';
            }
          }, 500);
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

  // Login com Google - CORRIGIDO COM CALLBACK
  const signInWithGoogle = async () => {
    setLoading(true);
    try {
      console.log("🔐 Tentando fazer login com Google...");
      
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`
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
      
      cleanupAuthState();
      
      await supabase.auth.signOut({ scope: 'global' });
      
      setSession(null);
      setUser(null);
      setIsAdmin(false);
      setTrialDaysRemaining(1);
      setIsTrialActive(true);
      
      navigate('/login');
    } catch (error: any) {
      console.error("❌ Erro no logout:", error);
      
      setSession(null);
      setUser(null);
      setIsAdmin(false);
      setTrialDaysRemaining(1);
      setIsTrialActive(true);
      
      navigate('/login');
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
