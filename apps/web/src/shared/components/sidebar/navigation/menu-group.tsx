"use client";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
} from "@payroll/ui/components/sidebar/sidebar";

import { MenuEntry } from "./menu-entry";
import { MenuGroupProps } from "./types";

export function MenuGroup({ menu }: { menu: MenuGroupProps }) {
  return (
    <SidebarGroup className="p-0 px-2 py-1">
      {menu.items && menu.items.length > 0 ? (
        <>
          <SidebarGroupLabel className="text-xs text-muted-foreground">
            {menu.title}
          </SidebarGroupLabel>
          <SidebarMenu>
            {menu.items.map((item) => (
              <MenuEntry key={item.title} entry={item} />
            ))}
          </SidebarMenu>
        </>
      ) : (
        <SidebarMenu>
          <MenuEntry
            entry={{ title: menu.title, url: menu.url || "", icon: menu.icon }}
          />
        </SidebarMenu>
      )}
    </SidebarGroup>
  );
}
