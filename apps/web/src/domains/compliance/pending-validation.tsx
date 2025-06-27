import { Clock } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@payroll/ui/components/card/card";

export function PendingValidation({
  stats,
}: {
  stats: { pendingValidations: number };
}) {
  return (
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
  );
}
