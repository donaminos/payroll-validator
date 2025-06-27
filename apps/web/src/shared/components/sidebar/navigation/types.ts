import { LucideIcon } from "lucide-react";

export type MenuGroupProps = {
  title: string;
  items?: Array<{ title: string; url: string; icon?: LucideIcon }>;
  icon?: LucideIcon;
  url?: string;
  isActive?: boolean;
};
