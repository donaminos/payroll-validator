"use client";

import { type LucideIcon } from "lucide-react";

import { MenuGroup } from "./menu-group";

type MenuGroupProps = {
  title: string;
  items: Array<{ title: string; url: string; icon?: LucideIcon }>;
  icon?: LucideIcon;
  url?: string;
};

type NavMainProps = {
  items: Array<MenuGroupProps>;
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
