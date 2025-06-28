"use client";

import type { Employee } from "@payroll/types";

import { UpcomingOnboarding } from "@/domains/onboarding/upcoming-onboarding";
import { UpcomingOffboarding } from "@/domains/offboarding/upcoming-offboarding";
import { PageTitle } from "@/shared/components/page-title/page-title";
import { SmicUnmet } from "@/domains/compliance/smic-unmet";
import { PendingValidation } from "@/domains/compliance/pending-validation";

import { LegalReminders } from "./legal-reminders";
import { stats } from "./data";
import { QuickActions } from "./quick-actions";
import { Compliance } from "./compliance";

export function DashboardView() {
  return (
    <div className="space-y-6">
      <PageTitle
        title="Tableau de bord"
        description="Vue d'ensemble de votre système de validation de paie. Surveillez la conformité et gérez vos données."
      />

      <div className="my-6 md:my-12">
        <Compliance />
      </div>

      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        <div className="w-full lg:col-span-2 space-y-12">
          <UpcomingOnboarding
            onboarding={stats.upcomingOnboarding.map(
              (e) =>
                ({
                  ...e,
                  id: String(e.id),
                }) as unknown as Employee,
            )} // for demo purposes only
          />
          <UpcomingOffboarding
            offboarding={stats.upcomingOffboarding.map(
              (e) =>
                ({
                  ...e,
                  id: String(e.id),
                }) as unknown as Employee,
            )} // for demo purposes only
          />
          <div className="grid grid-cols-2 gap-4 ">
            <PendingValidation stats={stats} />
            <SmicUnmet stats={stats} />
          </div>
        </div>

        <QuickActions />
      </div>
      <div className="my-6 md:my-12">
        <LegalReminders />
      </div>
    </div>
  );
}
