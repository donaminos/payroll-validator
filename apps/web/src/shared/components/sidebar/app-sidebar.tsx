"use client";

import * as React from "react";
import { Home, User2, FileText, Settings2 } from "lucide-react";
import { SearchForm } from "@/shared/components/sidebar/search-form";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@payroll/ui/components/ui/sidebar/sidebar";
import { ProfileSwitcher } from "./profile-switcher";
import { NavMain } from "./nav-main";
export interface AppSidebarNavItem {
  title: string;
  url: string;
  isActive?: boolean;
}

const data = {
  profiles: [
    {
      name: "Payroll",
      plan: "Admin",
    },
    {
      name: "Payroll",
      plan: "GP",
    },
    {
      name: "Payroll",
      plan: "HR",
    },
  ],
  navigation: [
    {
      title: "Dashboard",
      url: "/",
      icon: Home,
    },
    {
      title: "Employees",
      url: "#",
      icon: User2,
      isActive: true,
      items: [
        {
          title: "List",
          url: "/employees",
        },
        {
          title: "Add",
          url: "#",
        },
        {
          title: "Import",
          url: "#",
        },
      ],
    },
    {
      title: "Payroll",
      url: "#",
      icon: FileText,
      items: [
        {
          title: "List",
          url: "#",
        },
        {
          title: "Add",
          url: "#",
        },
        {
          title: "Import",
          url: "#",
        },
        {
          title: "Validate",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <ProfileSwitcher profiles={data.profiles} />
        <SearchForm className="mt-4" />
      </SidebarHeader>
      <SidebarContent className="my-4">
        <NavMain items={data.navigation} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
