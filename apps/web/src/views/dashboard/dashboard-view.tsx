"use client";

import { AlertTriangle, CheckCircle, Users, Clock } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@payroll/ui/components/card/card";

import { PageTitle } from "@/shared/components/page-title/page-title";

import { LegalReminders } from "./legal-reminders";
import { stats } from "./data";
import { QuickActions } from "./quick-actions";
import { Compliance } from "./compliance";
import { RecentActivity } from "./recent-activity";
import { UpcomingOnboarding } from "./upcoming-onboarding";
import { UpcomingOffboarding } from "./upcoming-offboarding";

export function DashboardView() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <PageTitle
        title="Tableau de bord"
        description="Vue d'ensemble de votre système de validation de paie. Surveillez la conformité et gérez vos données."
      />

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Employés
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalEmployees}</div>
            <p className="text-xs text-muted-foreground">
              +12 depuis le mois dernier
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Validations en attente
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.pendingValidations}</div>
            <p className="text-xs text-muted-foreground">
              Nécessitent votre attention
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Taux de conformité
            </CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.complianceRate}%</div>
            <p className="text-xs text-muted-foreground">
              +2.1% vs mois précédent
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Violations SMIC
            </CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">
              {stats.smicViolations}
            </div>
            <p className="text-xs text-muted-foreground">
              Nécessitent correction immédiate
            </p>
          </CardContent>
        </Card>
      </div>

      {/* HR Planning Section */}
      <div className="grid gap-6 md:grid-cols-2 items-start">
        <UpcomingOnboarding
          onboarding={stats.upcomingOnboarding.map((e) => ({
            ...e,
            id: String(e.id),
          }))}
        />
        <UpcomingOffboarding
          offboarding={stats.upcomingOffboarding.map((e) => ({
            ...e,
            id: String(e.id),
          }))}
        />
      </div>

      {/* Main Content Grid */}
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
