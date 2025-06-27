import { LucideIcon } from "lucide-react";

export type MenuGroup = {
  title: string;
  items?: Array<{ title: string; url: string; icon?: LucideIcon }>;
  icon?: LucideIcon;
  url?: string;
  isActive?: boolean;
};

export type MenuEntry = {
  title: string;
  url: string;
  icon?: LucideIcon;
};
