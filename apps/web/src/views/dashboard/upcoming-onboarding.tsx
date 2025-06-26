import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@payroll/ui/components/ui/card/card";
import { Badge } from "@payroll/ui/components/ui/badge/badge";
import { Button } from "@payroll/ui/components/ui/button/button";
import { StatusBadge } from "@payroll/ui/composites/status-badge/status-badge";
import {
  UserPlus,
  ChevronDown,
  ChevronRight,
  Briefcase,
  Mail,
  Phone,
} from "lucide-react";
import {
  formatCurrency,
  getDaysUntilText,
} from "@/shared/utils/display-helpers";
import { useState } from "react";

interface Employee {
  id: string;
  name: string;
  position: string;
  department: string;
  status: string;
  startDate: string;
  daysUntil: number;
  salary: number;
}

interface UpcomingOnboardingProps {
  onboarding: Employee[];
}

export function UpcomingOnboarding({ onboarding }: UpcomingOnboardingProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Card>
      <CardHeader>
        <Button
          variant="ghost"
          className="w-full justify-between p-0 h-auto hover:bg-transparent"
          onClick={() => setIsOpen((v) => !v)}
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
              {onboarding.length}
            </Badge>
            {isOpen ? (
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            ) : (
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            )}
          </div>
        </Button>
      </CardHeader>
      {isOpen && (
        <CardContent className="space-y-4 pt-0">
          {onboarding.map((employee) => (
            <div key={employee.id} className="border rounded-lg p-4 space-y-3">
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
                    {new Date(employee.startDate).toLocaleDateString("fr-FR")}
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
  );
}
