import * as React from "react";
import { User2, FileText, Wallet, CalendarCheck, BarChart2, Settings } from "lucide-react";

import { SearchForm } from "@/shared/components/search-form";
import { VersionSwitcher } from "@/shared/components/version-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@payroll/ui/components/ui/sidebar/sidebar";

/**
 * Sidebar navigation item type for AppSidebar.
 */
export interface AppSidebarNavItem {
  title: string;
  url: string;
  isActive?: boolean;
}

/**
 * Sidebar navigation group type for AppSidebar.
 */
export interface AppSidebarNavGroup {
  title: string;
  url: string;
  items: AppSidebarNavItem[];
}

/**
 * Data prop type for AppSidebar.
 */
export interface AppSidebarData {
  versions: string[];
  navMain: AppSidebarNavGroup[];
}

// Map section titles to Lucide icons (for possible future use, but not rendered now)
const sectionIcons: Record<string, React.ReactNode> = {
  Employees: <User2 className="w-4 h-4 mr-2" />,
  Payroll: <FileText className="w-4 h-4 mr-2" />,
  Expenses: <Wallet className="w-4 h-4 mr-2" />,
  "Time Management": <CalendarCheck className="w-4 h-4 mr-2" />,
  Reports: <BarChart2 className="w-4 h-4 mr-2" />,
  Settings: <Settings className="w-4 h-4 mr-2" />,
};

/**
 * AppSidebar component for displaying navigation and version switcher.
 * @param data - Sidebar data (versions and navigation groups)
 * @param props - Additional Sidebar props
 */
export function AppSidebar({ data, ...props }: React.ComponentProps<typeof Sidebar> & { data: AppSidebarData }) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <VersionSwitcher
          versions={data.versions}
          defaultVersion={data.versions[0] || ""}
        />
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        {data.navMain.map((group) => (
          <SidebarGroup
            key={group.title}>
            <SidebarGroupLabel className="text-sm font-medium text-gray-700 mb-2 mt-2 tracking-tight uppercase flex items-center">
              {sectionIcons[group.title]}
              {group.title}
            </SidebarGroupLabel>
            <SidebarGroupContent className="gap-1">
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={item.isActive}
                      className={
                        item.isActive
                          ? "text-md font-normal px-4 py-1 rounded-md bg-primary/10 border-l-4 border-primary text-primary transition-colors"
                          : "text-md font-normal px-4 py-1 rounded-md hover:bg-gray-100 focus:bg-gray-100 transition-colors text-gray-900"
                      }
                    >
                      <a
                        href={item.url}
                        className="w-full text-left block"
                        aria-current={item.isActive ? "page" : undefined}
                      >
                        {item.title}
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
