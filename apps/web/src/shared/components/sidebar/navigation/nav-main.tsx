"use client";

import { MenuGroup } from "./menu-group";
import type { MenuGroup as MenuGroupType } from "./types";

type NavMainProps = {
  items: Array<MenuGroupType>;
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
