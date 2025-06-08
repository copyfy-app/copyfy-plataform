
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import Login from "./pages/Login";
import DashboardHome from "./pages/DashboardHome";
import PainelPage from "./pages/PainelPage";
import PolicyPage from "./pages/PolicyPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import Support from "./pages/Support";
import NotFound from "./pages/NotFound";
import { AuthProvider, useAuth } from "./contexts/AuthContext";

const queryClient = new QueryClient();

// Componente para proteger rotas que requerem autenticação
const ProtectedRoute = () => {
  const { user, loading } = useAuth();
  
  // Enquanto carrega, não faz nada
  if (loading) return null;
  
  // Se não houver usuário autenticado, redireciona para login
  if (!user) return <Navigate to="/login" replace />;
  
  // Se houver usuário, permite acessar a rota
  return <Outlet />;
};

// Componente para redirecionar usuários já autenticados
const RedirectIfAuthenticated = () => {
  const { user, loading } = useAuth();
  
  // Enquanto carrega, não faz nada
  if (loading) return null;
  
  // Se houver usuário autenticado, redireciona para dashboard
  if (user) return <Navigate to="/dashboard" replace />;
  
  // Se não houver usuário, permite acessar a rota
  return <Outlet />;
};

// Wrapper para poder usar o AuthProvider com o useAuth nos componentes de rota
const AppRoutes = () => {
  return (
    <Routes>
      {/* Redireciona diretamente para dashboard (ou login se não autenticado) */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      
      {/* Rotas que redirecionam se já estiver autenticado */}
      <Route element={<RedirectIfAuthenticated />}>
        <Route path="/login" element={<Login />} />
      </Route>
      
      {/* Rotas protegidas que requerem autenticação */}
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<DashboardHome />} />
        <Route path="/painel" element={<PainelPage />} />
        <Route path="/politica" element={<PolicyPage />} />
      </Route>
      
      {/* Rotas públicas */}
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-use" element={<TermsOfUse />} />
      <Route path="/support" element={<Support />} />
      
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
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

export default App;
