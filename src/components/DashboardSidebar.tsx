import { useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarSeparator } from "@/components/ui/sidebar";
import { Layers, FileText, HelpCircle, Home, User, LogOut } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Badge } from "./ui/badge";
const DashboardSidebar = () => {
  const location = useLocation();
  const {
    user,
    trialDaysRemaining,
    isTrialActive,
    isAdmin,
    signOut
  } = useAuth();
  const isActive = useCallback((path: string) => {
    return location.pathname === path;
  }, [location.pathname]);
  return <Sidebar>
      <SidebarContent className="bg-black">
        {user && <SidebarGroup className="bg-gray-950">
            <SidebarGroupContent className="p-3 bg-black">
              <div className="flex flex-col gap-2">
                <div className="text-sm font-medium overflow-hidden text-ellipsis">
                  {user.email}
                </div>
                {isAdmin && <Badge variant="default" className="w-fit text-white bg-red-500">
                    ADMIN
                  </Badge>}
                <Badge variant={isTrialActive ? "outline" : "destructive"} className="w-fit bg-yellow-500">
                  {isAdmin ? "Acesso Ilimitado" : isTrialActive ? `Trial: ${trialDaysRemaining} dia${trialDaysRemaining !== 1 ? 's' : ''}` : 'Trial expirado'}
                </Badge>
              </div>
            </SidebarGroupContent>
          </SidebarGroup>}
        
        <SidebarSeparator />

        <SidebarGroup className="bg-gray-950">
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem className="bg-blue-950">
                <SidebarMenuButton asChild isActive={isActive("/dashboard")} tooltip="Dashboard">
                  <Link to="/dashboard">
                    <Home />
                    <span className="text-yellow-500">Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarSeparator />

        <SidebarGroup className="bg-black">
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/privacy-policy")} tooltip="Política de Privacidade">
                  <Link to="/privacy-policy">
                    <FileText />
                    <span className="text-yellow-500 text-lg font-bold">Política de Privacidade</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/terms-of-use")} tooltip="Termos de Uso">
                  <Link to="/terms-of-use">
                    <Layers />
                    <span className="text-yellow-500 text-lg font-bold">Termos de Uso</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/support")} tooltip="Suporte">
                  <Link to="/support">
                    <HelpCircle />
                    <span className="text-yellow-500 font-extrabold text-lg">Suporte</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {user && <>
          <SidebarSeparator />
          <SidebarContent className="bg-black">
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Minha Conta" asChild>
                      <Link to="/dashboard">
                        <User />
                        <span className="text-yellow-500 text-lg font-bold">Minha Conta</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Sair" onClick={signOut} className="font-normal">
                      <LogOut />
                      <span className="text-yellow-500 font-bold text-lg">Sair</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </>}

      <SidebarFooter className="py-2">
        <div className="px-3 text-xs text-gray-500 bg-black">
          © {new Date().getFullYear()} Copyfy
        </div>
      </SidebarFooter>
    </Sidebar>;
};
export default DashboardSidebar;