import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import "@payroll/tailwind-config/globals.css";


import {
  SidebarInset,
  SidebarProvider,
} from "@payroll/ui/components/sidebar/sidebar";
import { Toaster } from "@payroll/ui/components/sonner/sonner";

import { AppSidebar } from "@/shared/components/sidebar/app-sidebar";
import { SidebarHeader } from "@/shared/components/sidebar/sidebar-header";

const manrope = Manrope({
  subsets: ["latin"],
});

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
    <html lang="fr" className={manrope.className}>
      <body>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset className="bg-[fF3f4f8]">
            <SidebarHeader />
            <div className="flex flex-1 flex-col gap-4 py-10 px-16 ">
              {children}
            </div>
          </SidebarInset>
        </SidebarProvider>
        <Toaster position="bottom-left" richColors />
      </body>
    </html>
  );
}
