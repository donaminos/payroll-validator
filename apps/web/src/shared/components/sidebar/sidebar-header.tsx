"use client";

import React from "react";

import { SidebarTrigger } from "@payroll/ui/components/sidebar/sidebar";
import { Separator } from "@payroll/ui/components/separator/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@payroll/ui/components/breadcrumb/breadcrumb";
import { usePathname } from "next/navigation";

import { data } from "./constants";
import type { MenuEntry } from "./navigation/types";

const getBreadcrumb = ({ pathname }: { pathname: string }) => {
  const breadcrumb: Array<MenuEntry> = [];

  data.navigation.map((item) => {
    if (pathname === item.url) {
      breadcrumb.push({ title: item.title, url: item.url || "#" });
      return;
    }
    if (item.items) {
      item.items.map((subItem) => {
        if (pathname === subItem.url) {
          breadcrumb.push({ title: item.title, url: item.url || "#" });
          breadcrumb.push(subItem);
          return;
        }
      });
    }
  });

  return breadcrumb;
};

export function SidebarHeader() {
  const pathname = usePathname();
  const breadcrumb = getBreadcrumb({ pathname });

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b border-slate-200 px-4">
      <SidebarTrigger className="-ml-1" />
      <Separator
        orientation="vertical"
        className="mr-2 data-[orientation=vertical]:h-4 bg-border"
      />
      <Breadcrumb>
        <BreadcrumbList>
          {breadcrumb.map((item, idx) => {
            return (
              <React.Fragment key={item.title}>
                {idx < breadcrumb.length - 1 ? (
                  <>
                    <BreadcrumbItem>
                      <BreadcrumbLink href={item.url}>
                        {item.title}
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="hidden md:block" />
                  </>
                ) : (
                  <BreadcrumbItem>
                    <BreadcrumbPage>{item.title}</BreadcrumbPage>
                  </BreadcrumbItem>
                )}
              </React.Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </header>
  );
}
