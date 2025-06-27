import { AlertTriangle } from "lucide-react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@payroll/ui/components/card/card";

export function SmicUnmet({ stats }: { stats: { smicViolations: number } }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Violations SMIC</CardTitle>
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
  );
}
