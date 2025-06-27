import { Label } from "@payroll/ui/components/label/label";
import { SearchInput } from "@payroll/ui/components/form/search-input/searh-input";


import {
  SidebarGroup,
  SidebarGroupContent,
} from "@payroll/ui/components/sidebar/sidebar";

export function SearchForm({ ...props }: React.ComponentProps<"form">) {
  return (
    <form {...props}>
      <SidebarGroup className="py-0">
        <SidebarGroupContent className="relative">
          <Label htmlFor="search" className="sr-only">
            Search
          </Label>
          <SearchInput
            id="search"
            placeholder="Search..."
            value=""
            onValueChange={() => {}}
          />
        </SidebarGroupContent>
      </SidebarGroup>
    </form>
  );
}
