import { Search } from "lucide-react";
import { Label } from "@payroll/ui/components/label/label";
import { Input } from "@payroll/ui/components/input/input";
import { Button } from "@payroll/ui/components/button/button";
import { Separator } from "@payroll/ui/components/separator/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
} from "@payroll/ui/components/sidebar/sidebar";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarInput,
} from "@payroll/ui/components/sidebar/sidebar";

export function SearchForm({ ...props }: React.ComponentProps<"form">) {
  return (
    <form {...props}>
      <SidebarGroup className="py-0">
        <SidebarGroupContent className="relative">
          <Label htmlFor="search" className="sr-only">
            Search
          </Label>
          <SidebarInput
            id="search"
            placeholder="Search..."
            className="pl-8 bg-white rounded-4xl"
          />
          <Search className="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 opacity-50 select-none" />
        </SidebarGroupContent>
      </SidebarGroup>
    </form>
  );
}
