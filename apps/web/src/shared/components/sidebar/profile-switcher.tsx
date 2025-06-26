"use client";

import * as React from "react";
import { ChevronsUpDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@payroll/ui/components/ui/dropdown-menu/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@payroll/ui/components/ui/sidebar/sidebar";
import {
  Avatar,
  AvatarFallback,
} from "@payroll/ui/components/ui/avatar/avatar";

export function ProfileSwitcher({
  profiles,
}: {
  profiles: {
    name: string;
    plan: string;
  }[];
}) {
  const { isMobile } = useSidebar();
  const [activeTeam, setActiveTeam] = React.useState(profiles[0]);

  if (!activeTeam) {
    return null;
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground gap-x-2"
            >
              <div className="text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                <Avatar className="">
                  <AvatarFallback className="text-primary bg-[#E6F4FF] font-bold text-lg">
                    {activeTeam.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="grid flex-1 text-left text-base leading-tight">
                <span className="truncate">{activeTeam.name}</span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-muted-foreground text-xs">
              Profiles
            </DropdownMenuLabel>
            {profiles.map((profile, index) => (
              <DropdownMenuItem
                key={profile.name}
                onClick={() => setActiveTeam(profile)}
                className="gap-2 p-2"
              >
                {profile.plan}
                <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
