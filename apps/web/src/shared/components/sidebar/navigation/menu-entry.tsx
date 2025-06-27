"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  SidebarMenuButton,
  SidebarMenuItem,
} from "@payroll/ui/components/sidebar/sidebar";

import type { MenuEntry } from "./types";

type MenuEntryProps = {
  entry: MenuEntry;
};

export function MenuEntry({ entry }: MenuEntryProps) {
  const pathname = usePathname();

  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        tooltip={entry.title}
        asChild
        isActive={pathname === entry.url}
      >
        <Link href={entry.url}>
          {entry.icon && <entry.icon />}
          <span>{entry.title}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
