"use client";

import { UpcomingOnboarding } from "@/domains/onboarding/upcoming-onboarding";
import { UpcomingOffboarding } from "@/domains/offboarding/upcoming-offboarding";
import { PageTitle } from "@/shared/components/page-title/page-title";
import { SmicUnmet } from "@/domains/compliance/smic-unmet";
import { ComplianceLevel } from "@/domains/compliance/compliance-level";
import { Headcount } from "@/domains/employees/components/headcount";
import { PendingValidation } from "@/domains/compliance/pending-validation";
import type { Employee } from "@payroll/types";

import { LegalReminders } from "./legal-reminders";
import { stats } from "./data";
import { QuickActions } from "./quick-actions";
import { Compliance } from "./compliance";
import { RecentActivity } from "./recent-activity";

export function DashboardView() {
  return (
    <div className="space-y-6">
      <PageTitle
        title="Tableau de bord"
        description="Vue d'ensemble de votre système de validation de paie. Surveillez la conformité et gérez vos données."
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Headcount stats={stats} />

        <PendingValidation stats={stats} />
        <ComplianceLevel stats={stats} />
        <SmicUnmet stats={stats} />
      </div>

      <div className="grid gap-6 md:grid-cols-2 items-start">
        <UpcomingOnboarding
          onboarding={stats.upcomingOnboarding.map((e) => ({
            ...e,
            id: String(e.id),
          }) as unknown as Employee)} // for demo purposes only
        />
        <UpcomingOffboarding
          offboarding={stats.upcomingOffboarding.map((e) => ({
            ...e,
            id: String(e.id),
          }) as unknown as Employee)} // for demo purposes only
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <QuickActions />
        <RecentActivity
          recentUploads={stats.recentUploads.map((e) => ({
            ...e,
            id: String(e.id),
          }))}
        />
      </div>

      <Compliance />
      <LegalReminders />
    </div>
  );
}
