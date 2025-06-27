import { CheckCircle } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@payroll/ui/components/card/card";

export function ComplianceLevel({ stats }: {stats: {complianceRate: number}}) {
  return (
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
   
  )
}