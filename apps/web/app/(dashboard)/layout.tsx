import type { Metadata } from "next";

import "@payroll/tailwind-config/globals.css";

import {
  SidebarInset,
  SidebarProvider,
} from "@payroll/ui/components/ui/sidebar/sidebar";

import { AppSidebar } from "@/shared/components/app-sidebar";
import { SidebarHeader } from "@/shared/components/sidebar-header";

export const metadata: Metadata = {
  title: "PayrollValidator - Validation de paie intelligente",
  description:
    "Validez vos données de paie contre la législation française en quelques secondes. Traitement de 500 lignes en moins de 30 secondes avec une précision de 99.9%.",
  keywords: [
    "paie",
    "validation",
    "législation française",
    "SMIC",
    "heures",
    "conformité",
  ],
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <SidebarHeader />
            <div className="flex flex-1 flex-col gap-4 p-4">{children}</div>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
