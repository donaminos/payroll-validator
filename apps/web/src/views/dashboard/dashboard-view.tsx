"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@payroll/ui/components/ui/card/card";
import { Badge } from "@payroll/ui/components/ui/badge/badge";
import { Button } from "@payroll/ui/components/ui/button/button";
import { PageTitle } from "@/shared/components/page-title/page-title";
import { StatusBadge } from "@payroll/ui/composites/status-badge/status-badge";
import {
  formatCurrency,
  getDaysUntilText,
} from "@/shared/utils/display-helpers";

import {
  AlertTriangle,
  CheckCircle,
  Download,
  Users,
  FileText,
  Clock,
  Euro,
  Calendar,
  UserPlus,
  UserMinus,
  Mail,
  Phone,
  Briefcase,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

import { stats } from "./data";

export function DashboardView() {
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false);
  const [isOffboardingOpen, setIsOffboardingOpen] = useState(false);

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
        {/* Upcoming Onboarding */}
        <Card>
          <CardHeader>
            <Button
              variant="ghost"
              className="w-full justify-between p-0 h-auto hover:bg-transparent"
              onClick={() => setIsOnboardingOpen(!isOnboardingOpen)}
            >
              <div className="flex items-start gap-2">
                <UserPlus className="h-5 w-5 text-green-600 relative top-[2px]" />
                <div className="text-left">
                  <CardTitle className="text-lg leading-none">
                    Arrivées prévues
                  </CardTitle>
                  <CardDescription>
                    Nouveaux employés à intégrer dans le système de paie
                  </CardDescription>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge
                  variant="outline"
                  className="text-green-600 border-green-600 text-sm"
                >
                  {stats.upcomingOnboarding.length}
                </Badge>
                {isOnboardingOpen ? (
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                )}
              </div>
            </Button>
          </CardHeader>
          {isOnboardingOpen && (
            <CardContent className="space-y-4 pt-0">
              {stats.upcomingOnboarding.map((employee) => (
                <div
                  key={employee.id}
                  className="border rounded-lg p-4 space-y-3"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{employee.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {employee.position}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <Briefcase className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">
                          {employee.department}
                        </span>
                      </div>
                    </div>
                    <StatusBadge status={employee.status} />
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Début:</span>
                      <div className="font-medium">
                        {new Date(employee.startDate).toLocaleDateString(
                          "fr-FR",
                        )}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {getDaysUntilText(employee.daysUntil)}
                      </div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Salaire:</span>
                      <div className="font-medium">
                        {formatCurrency(employee.salary)}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        brut annuel
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-2 border-t">
                    <Button variant="ghost" size="sm" className="h-8">
                      <Mail className="h-3 w-3" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8">
                      <Phone className="h-3 w-3" />
                    </Button>
                    <Button variant="outline" size="sm" className="h-8 ml-auto">
                      Préparer contrat
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          )}
        </Card>

        {/* Upcoming Offboarding */}
        <Card>
          <CardHeader>
            <Button
              variant="ghost"
              className="w-full justify-between p-0 h-auto hover:bg-transparent"
              onClick={() => setIsOffboardingOpen(!isOffboardingOpen)}
            >
              <div className="flex items-start gap-2">
                <UserMinus className="h-5 w-5 text-red-600 relative top-[2px]" />
                <div className="text-left">
                  <CardTitle className="text-lg leading-none">
                    Départs prévus
                  </CardTitle>
                  <CardDescription>
                    Employés à retirer du système de paie
                  </CardDescription>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge
                  variant="outline"
                  className="text-red-600 border-red-600 text-sm"
                >
                  {stats.upcomingOffboarding.length}
                </Badge>
                {isOffboardingOpen ? (
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                )}
              </div>
            </Button>
          </CardHeader>
          {isOffboardingOpen && (
            <CardContent className="space-y-4 pt-0">
              {stats.upcomingOffboarding.map((employee) => (
                <div
                  key={employee.id}
                  className="border rounded-lg p-4 space-y-3"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{employee.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {employee.position}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <Briefcase className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">
                          {employee.department}
                        </span>
                      </div>
                    </div>
                    <StatusBadge status={employee.status} />
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Fin:</span>
                      <div className="font-medium">
                        {new Date(employee.endDate).toLocaleDateString("fr-FR")}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {getDaysUntilText(employee.daysUntil)}
                      </div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Motif:</span>
                      <div className="font-medium text-xs">
                        {employee.reason}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Dernière paie:{" "}
                        {new Date(employee.lastPayroll).toLocaleDateString(
                          "fr-FR",
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-2 border-t">
                    <Button variant="ghost" size="sm" className="h-8">
                      <Mail className="h-3 w-3" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8">
                      <Phone className="h-3 w-3" />
                    </Button>
                    <Button variant="outline" size="sm" className="h-8 ml-auto">
                      Préparer sortie
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          )}
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Quick Actions */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Actions rapides</CardTitle>
            <CardDescription>
              Accédez rapidement aux fonctionnalités principales
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {stats.quickActions.map((action, index) => (
              <Button
                key={index}
                variant="outline"
                className="w-full justify-start h-auto p-4"
                asChild
              >
                <a href={action.href}>
                  <action.icon className="mr-3 h-5 w-5" />
                  <div className="text-left">
                    <div className="font-medium">{action.title}</div>
                    <div className="text-sm text-muted-foreground">
                      {action.description}
                    </div>
                  </div>
                </a>
              </Button>
            ))}
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Activité récente</CardTitle>
            <CardDescription>
              Derniers fichiers importés et validés
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {stats.recentUploads.map((upload) => (
                <div
                  key={upload.id}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <FileText className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {upload.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {upload.records} enregistrements •{" "}
                        {new Date(upload.date).toLocaleDateString("fr-FR")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge
                      variant={
                        upload.status === "validated" ? "default" : "secondary"
                      }
                      className="flex items-center gap-1"
                    >
                      {upload.status === "validated" ? (
                        <>
                          <CheckCircle className="h-3 w-3" />
                          Validé
                        </>
                      ) : (
                        <>
                          <Clock className="h-3 w-3" />
                          En attente
                        </>
                      )}
                    </Badge>
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Compliance Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Vue d'ensemble de la conformité</CardTitle>
          <CardDescription>
            Résumé des validations selon la législation française
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">SMIC 2024</span>
                <span className="text-sm text-muted-foreground">1398,69€</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-600 h-2 rounded-full"
                  style={{ width: "98.5%" }}
                ></div>
              </div>
              <p className="text-xs text-muted-foreground">
                98,5% de conformité
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Heures légales</span>
                <span className="text-sm text-muted-foreground">
                  35h/semaine
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-yellow-500 h-2 rounded-full"
                  style={{ width: "92%" }}
                ></div>
              </div>
              <p className="text-xs text-muted-foreground">92% de conformité</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">
                  Heures supplémentaires
                </span>
                <span className="text-sm text-muted-foreground">
                  Max 48h/semaine
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-red-500 h-2 rounded-full"
                  style={{ width: "85%" }}
                ></div>
              </div>
              <p className="text-xs text-muted-foreground">85% de conformité</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Legal Reminders */}
      <Card>
        <CardHeader>
          <CardTitle>Rappels légaux</CardTitle>
          <CardDescription>
            Points importants de la législation française
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Euro className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <h4 className="font-medium">SMIC 2024</h4>
                  <p className="text-sm text-muted-foreground">
                    Salaire minimum interprofessionnel de croissance fixé à
                    1398,69€ brut mensuel
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <h4 className="font-medium">Durée légale</h4>
                  <p className="text-sm text-muted-foreground">
                    35 heures par semaine, maximum 48h avec accord d'entreprise
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Calendar className="h-5 w-5 text-orange-600 mt-0.5" />
                <div>
                  <h4 className="font-medium">Heures supplémentaires</h4>
                  <p className="text-sm text-muted-foreground">
                    Majoration de 25% pour les 8 premières heures, 50% au-delà
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
                <div>
                  <h4 className="font-medium">Sanctions</h4>
                  <p className="text-sm text-muted-foreground">
                    Non-respect du SMIC : amende de 1500€ par salarié concerné
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
