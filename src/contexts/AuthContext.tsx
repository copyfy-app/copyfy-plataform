
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

  // Função para determinar admin status - CORRIGIDA para garantir admin total
  const determineAdminStatus = async (userId: string, userEmail: string | undefined): Promise<boolean> => {
    console.log("👑 Verificando status de admin para:", userEmail);
    
    // Verificação 1: Email direto - ADMIN GARANTIDO
    if (isAdminEmail(userEmail)) {
      console.log("✅ Admin confirmado por email - ACESSO TOTAL:", userEmail);
      
      try {
        // Para admin: GARANTIR que não há trial_start e is_admin = true
        const { data: existingProfile } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', userId)
          .single();

        if (existingProfile) {
          console.log("📋 Perfil admin existente - garantindo acesso total");
          // Atualizar perfil admin: remover trial_start e garantir is_admin = true
          await supabase
            .from('profiles')
            .update({ 
              is_admin: true,
              trial_start: null // REMOVER trial_start para admin
            })
            .eq('id', userId);
          console.log("✅ Perfil admin atualizado com acesso total");
        } else {
          console.log("🆕 Criando novo perfil admin sem trial");
          await supabase
            .from('profiles')
            .insert({ 
              id: userId, 
              is_admin: true
              // NÃO inserir trial_start para admin
            });
          console.log("✅ Perfil admin criado com acesso total");
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

  // Carregar informações do usuário - CORRIGIDA para admin total
  const loadUserInfo = async (userId: string, userEmail: string | undefined) => {
    try {
      console.log("📊 Carregando informações do usuário:", userId, userEmail);
      
      // Determinar status de admin primeiro
      const adminStatus = await determineAdminStatus(userId, userEmail);
      setIsAdmin(adminStatus);

      if (adminStatus) {
        console.log("👑 Usuário é admin - ACESSO TOTAL ILIMITADO");
        setTrialDaysRemaining(999); // Número alto para indicar ilimitado
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
      if (profile.trial_start && !profile.is_admin) {
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
      } else {
        // Usuário sem trial_start (provavelmente admin ou erro)
        setTrialDaysRemaining(1);
        setIsTrialActive(true);
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
        
        // Verificar sessão atual
        const { data: { session: currentSession }, error: sessionError } = await supabase.auth.getSession();
        
        if (sessionError) {
          console.error("❌ Erro ao obter sessão:", sessionError);
          // Limpar apenas se houver erro específico de token corrompido
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

  // Login com e-mail e senha - FORTALECIDO para novos usuários
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
          errorMessage = "Email ou senha incorretos. Verifique se você já criou uma conta.";
        } else if (error.message.includes("Email not confirmed")) {
          errorMessage = "Por favor, confirme seu email antes de fazer login. Verifique sua caixa de entrada.";
        } else if (error.message.includes("Too many requests")) {
          errorMessage = "Muitas tentativas. Tente novamente em alguns minutos.";
        } else if (error.message.includes("signup")) {
          errorMessage = "Conta não encontrada. Você precisa criar uma conta primeiro.";
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
        }, 1000);
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

  // Cadastro com e-mail e senha - MELHORADO
  const signUp = async (email: string, password: string) => {
    setLoading(true);
    try {
      console.log("📝 Tentando criar conta com:", email);
      
      const { data, error } = await supabase.auth.signUp({
        email: email.trim().toLowerCase(),
        password: password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`
        }
      });

      if (error) {
        let errorMessage = "Não foi possível criar sua conta";
        
        if (error.message.includes("already registered")) {
          errorMessage = "Este email já está cadastrado. Tente fazer login.";
        } else if (error.message.includes("Password should be")) {
          errorMessage = "A senha deve ter pelo menos 6 caracteres.";
        } else if (error.message.includes("Invalid email")) {
          errorMessage = "Email inválido. Verifique o formato do email.";
        }
        
        console.error("❌ Erro de cadastro:", error.message);
        throw new Error(errorMessage);
      }

      if (data.user) {
        console.log("✅ Conta criada com sucesso!");
        
        if (data.session) {
          // Usuário já está logado (confirmação automática)
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
          }, 1000);
        } else {
          // Usuário precisa confirmar email
          toast({
            title: "Conta criada!",
            description: "Verifique seu email para confirmar a conta e fazer login.",
            duration: 8000,
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

  // Login com Google - CORRIGIDO com callback robusto
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
      setLoading(false);
    }
  };

  // Logout - ROBUSTO
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
