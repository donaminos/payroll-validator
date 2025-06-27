"use client";

import { type LucideIcon } from "lucide-react";
import Link from "next/link";

import {
  SidebarMenuButton,
  SidebarMenuItem,
} from "@payroll/ui/components/sidebar/sidebar";

type MenuEntryProps = {
  entry: {
    title: string;
    url: string;
    icon?: LucideIcon;
  };
};

export function MenuEntry({ entry }: MenuEntryProps) {
  return (
    <SidebarMenuItem>
      <SidebarMenuButton tooltip={entry.title} asChild>
        <Link href={entry.url}>
          {entry.icon && <entry.icon />}
          <span>{entry.title}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
} 