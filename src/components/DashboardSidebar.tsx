
import { useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { Layers, FileText, HelpCircle, Home, User, LogOut } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Badge } from "./ui/badge";

const DashboardSidebar = () => {
  const location = useLocation();
  const { user, trialDaysRemaining, isTrialActive, isAdmin, signOut } = useAuth();
  
  const isActive = useCallback(
    (path: string) => {
      return location.pathname === path;
    },
    [location.pathname]
  );

  return (
    <Sidebar>
      <SidebarContent>
        {user && (
          <SidebarGroup>
            <SidebarGroupContent className="p-3">
              <div className="flex flex-col gap-2">
                <div className="text-sm font-medium overflow-hidden text-ellipsis">
                  {user.email}
                </div>
                {isAdmin && (
                  <Badge variant="default" className="w-fit bg-red-600 text-white">
                    ADMIN
                  </Badge>
                )}
                <Badge variant={isTrialActive ? "outline" : "destructive"} className="w-fit">
                  {isAdmin
                    ? "Acesso Ilimitado"
                    : isTrialActive 
                      ? `Trial: ${trialDaysRemaining} dia${trialDaysRemaining !== 1 ? 's' : ''}` 
                      : 'Trial expirado'}
                </Badge>
              </div>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
        
        <SidebarSeparator />

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  asChild 
                  isActive={isActive("/dashboard")}
                  tooltip="Dashboard"
                >
                  <Link to="/dashboard">
                    <Home />
                    <span>Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarSeparator />

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  asChild 
                  isActive={isActive("/privacy-policy")}
                  tooltip="Política de Privacidade"
                >
                  <Link to="/privacy-policy">
                    <FileText />
                    <span>Política de Privacidade</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton 
                  asChild 
                  isActive={isActive("/terms-of-use")}
                  tooltip="Termos de Uso"
                >
                  <Link to="/terms-of-use">
                    <Layers />
                    <span>Termos de Uso</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton 
                  asChild 
                  isActive={isActive("/support")}
                  tooltip="Suporte"
                >
                  <Link to="/support">
                    <HelpCircle />
                    <span>Suporte</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {user && (
        <>
          <SidebarSeparator />
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      tooltip="Minha Conta"
                      asChild
                    >
                      <Link to="/dashboard">
                        <User />
                        <span>Minha Conta</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      tooltip="Sair"
                      onClick={signOut}
                    >
                      <LogOut />
                      <span>Sair</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </>
      )}

      <SidebarFooter className="py-2">
        <div className="px-3 text-xs text-gray-500">
          © {new Date().getFullYear()} Copyfy
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default DashboardSidebar;
