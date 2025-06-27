"use client";

import * as React from "react";
import { SearchForm } from "@/shared/components/sidebar/search-form";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@payroll/ui/components/sidebar/sidebar";
import { ProfileSwitcher } from "./profile-switcher";
import { NavMain } from "./nav-main";
export interface AppSidebarNavItem {
  title: string;
  url: string;
  isActive?: boolean;
}
import { data } from "./constants";

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
