import type { Metadata } from "next";

import "@payroll/tailwind-config/globals.css";

import {
  SidebarInset,
  SidebarProvider,
} from "@payroll/ui/components/ui/sidebar/sidebar";

import { AppSidebar, AppSidebarData } from "@/shared/components/sidebar/app-sidebar";
import { SidebarHeader } from "@/shared/components/sidebar/sidebar-header";

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

  const sidebarData: AppSidebarData = {
    versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
    navMain: [
      {
        title: "Employees",
        url: "/employees",
        items: [
          { title: "All Employees", url: "/employees" },
          { title: "Add Employee", url: "/employees/add" },
          { title: "Employee Groups", url: "/employees/groups" },
          { title: "Contracts", url: "/employees/contracts" },
          { title: "Work Schedules", url: "/employees/schedules" },
        ],
      },
      {
        title: "Payroll",
        url: "/payroll",
        items: [
          { title: "Payslips", url: "/payroll/payslips" },
          { title: "Payroll Validation", url: "/payroll/validation" },
          { title: "Salary Structure", url: "/payroll/salary-structure" },
          { title: "Bonuses & Benefits", url: "/payroll/bonuses" },
          { title: "Tax Calculations", url: "/payroll/tax" },
        ],
      },
      {
        title: "Time Management",
        url: "/time",
        items: [
          { title: "Time Tracking", url: "/time/tracking" },
          { title: "Time-off Requests", url: "/time/requests" },
          { title: "Overtime", url: "/time/overtime" },
          { title: "Holidays", url: "/time/holidays" },
          { title: "Work Hours", url: "/time/hours" },
        ],
      },
      {
        title: "Expenses",
        url: "/expenses",
        items: [
          { title: "Expense Reports", url: "/expenses/reports" },
          { title: "Submit Expense", url: "/expenses/submit" },
          { title: "Expense Categories", url: "/expenses/categories" },
          { title: "Approval Workflow", url: "/expenses/approval" },
        ],
      },
      {
        title: "Reports",
        url: "/reports",
        items: [
          { title: "Payroll Reports", url: "/reports/payroll" },
          { title: "Employee Analytics", url: "/reports/analytics" },
          { title: "Compliance Reports", url: "/reports/compliance" },
          { title: "Cost Analysis", url: "/reports/costs" },
        ],
      },
      {
        title: "Settings",
        url: "/settings",
        items: [
          { title: "Company Settings", url: "/settings/company" },
          { title: "Payroll Rules", url: "/settings/payroll-rules" },
          { title: "User Management", url: "/settings/users" },
          { title: "Integrations", url: "/settings/integrations" },
        ],
      },
    ],
  };
  return (
    <html lang="fr">
      <body>
        <SidebarProvider>
          <AppSidebar data={sidebarData} />
          <SidebarInset>
            <SidebarHeader />
            <div className="flex flex-1 flex-col gap-4 p-4">{children}</div>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
