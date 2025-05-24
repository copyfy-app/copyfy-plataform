
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
import { Layers, FileText, HelpCircle, Home } from "lucide-react";

const DashboardSidebar = () => {
  const location = useLocation();
  
  const isActive = useCallback(
    (path: string) => {
      return location.pathname === path;
    },
    [location.pathname]
  );

  return (
    <Sidebar>
      <SidebarContent>
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

      <SidebarFooter className="py-2">
        <div className="px-3 text-xs text-gray-500">
          © {new Date().getFullYear()} Copyfy
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default DashboardSidebar;
