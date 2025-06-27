import { SidebarTrigger } from "@payroll/ui/components/sidebar/sidebar";
import { Button } from "@payroll/ui/components/button/button";
import { Input } from "@payroll/ui/components/input/input";
import { Separator } from "@payroll/ui/components/separator/separator";
import { Skeleton } from "@payroll/ui/components/skeleton/skeleton";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@payroll/ui/components/tooltip/tooltip";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@payroll/ui/components/breadcrumb/breadcrumb";

export function SidebarHeader() {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
      <SidebarTrigger className="-ml-1" />
      <Separator
        orientation="vertical"
        className="mr-2 data-[orientation=vertical]:h-4"
      />
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem className="hidden md:block">
            <BreadcrumbLink href="#">Building Your Application</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="hidden md:block" />
          <BreadcrumbItem>
            <BreadcrumbPage>Data Fetching</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </header>
  );
}
