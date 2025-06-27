"use client";

import { MenuGroup } from "./menu-group";
import { MenuGroupProps } from "./types";

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
