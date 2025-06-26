"use client";

import { type LucideIcon } from "lucide-react";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@payroll/ui/components/ui/sidebar/sidebar";
import Link from "next/link";

type MenuGroupProps = {
  title: string;
  items: { title: string; url: string; icon?: LucideIcon }[];
  icon?: LucideIcon;
  url?: string;
};

const MenuEntry = ({ entry }: { entry: MenuGroupProps["items"][number] }) => {
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
};

const MenuGroup = ({ menu }: { menu: MenuGroupProps }) => {
  return (
    <SidebarGroup className="p-0 px-2 py-1">
      {menu.items?.length > 0 ? (
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
        <SidebarMenu className="">
          <MenuEntry
            entry={{ title: menu.title, url: menu.url || "", icon: menu.icon }}
          />
        </SidebarMenu>
      )}
    </SidebarGroup>
  );
};
type NavMainProps = {
  items: MenuGroupProps[];
};

export function NavMain({ items }: NavMainProps) {
  return (
    <div>
      {items.map((item) => {
        return <MenuGroup key={item.title} menu={item} />;
      })}
    </div>
  );
}
