
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CopyfyPage from "./pages/CopyfyPage";
import PainelPage from "./pages/PainelPage";
import PolicyPage from "./pages/PolicyPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import PrivacyPolicyEn from "./pages/PrivacyPolicyEn";
import TermsOfUse from "./pages/TermsOfUse";
import TermsOfUseEn from "./pages/TermsOfUseEn";
import Support from "./pages/Support";
import NotFound from "./pages/NotFound";
import AuthCallback from "./components/AuthCallback";
import { AuthProvider, useAuth } from "./contexts/AuthContext";

const queryClient = new QueryClient();

// Componente para proteger rotas que requerem autenticação
const ProtectedRoutes = () => {
  const { user, loading } = useAuth();
  
  console.log("🛡️ ProtectedRoutes - user:", user?.email, "loading:", loading);
  
  // Enquanto carrega, mostra loading
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-zinc-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-500 mx-auto mb-4"></div>
          <p className="text-white">Carregando...</p>
        </div>
      </div>
    );
  }
  
  // Se não houver usuário autenticado, redireciona para login
  if (!user) {
    console.log("🚫 Usuário não autenticado, redirecionando para login");
    return <Navigate to="/login" replace />;
  }
  
  // Se houver usuário, permite acessar a rota
  return <Outlet />;
};

// Componente para redirecionar usuários já autenticados
const PublicRoutes = () => {
  const { user, loading } = useAuth();
  
  console.log("🔓 PublicRoutes - user:", user?.email, "loading:", loading);
  
  // Enquanto carrega, mostra loading
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-zinc-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-500 mx-auto mb-4"></div>
          <p className="text-white">Carregando...</p>
        </div>
      </div>
    );
  }
  
  // Se houver usuário autenticado, redireciona para dashboard
  if (user) {
    console.log("✅ Usuário autenticado, redirecionando para dashboard");
    return <Navigate to="/dashboard" replace />;
  }
  
  // Se não houver usuário, permite acessar a rota
  return <Outlet />;
};

// Componente interno com as rotas - só renderiza após o AuthProvider estar disponível
const AppRoutes = () => {
  return (
    <Routes>
      {/* Home page - publicly accessible */}
      <Route path="/" element={<Home />} />
      
      {/* Auth callback route for OAuth */}
      <Route path="/auth/callback" element={<AuthCallback />} />
      
      {/* Rotas que redirecionam se já estiver autenticado */}
      <Route element={<PublicRoutes />}>
        <Route path="/login" element={<Login />} />
      </Route>
      
      {/* Rotas protegidas que requerem autenticação */}
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/copyfy" element={<CopyfyPage />} />
        <Route path="/painel" element={<PainelPage />} />
        <Route path="/politica" element={<PolicyPage />} />
      </Route>
      
      {/* Rotas públicas */}
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/privacy-policy-en" element={<PrivacyPolicyEn />} />
      <Route path="/terms-of-use" element={<TermsOfUse />} />
      <Route path="/terms-of-use-en" element={<TermsOfUseEn />} />
      <Route path="/support" element={<Support />} />
      
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => {
  console.log("🚀 App component renderizado");
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AuthProvider>
            <AppRoutes />
          </AuthProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
