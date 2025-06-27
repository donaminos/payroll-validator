import { Users } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@payroll/ui/components/card/card";

export function Headcount({ stats }: { stats: { totalEmployees: number } }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Total Employés</CardTitle>
        <Users className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{stats.totalEmployees}</div>
        <p className="text-xs text-muted-foreground">
          +12 depuis le mois dernier
        </p>
      </CardContent>
    </Card>
  );
}
