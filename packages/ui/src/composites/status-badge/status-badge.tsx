import { Badge } from "@payroll/ui/components/badge/badge";
import { Clock, CheckCircle } from "lucide-react";

export function StatusBadge({ status }: { status: string }) {
  switch (status) {
    case "pending":
      return (
        <Badge variant="secondary" className="flex items-center gap-1">
          <Clock className="h-3 w-3" />
          En attente
        </Badge>
      );
    case "in_progress":
      return (
        <Badge variant="default" className="flex items-center gap-1">
          <CheckCircle className="h-4 w-4" />
          En cours
        </Badge>
      );
    default:
      return (
        <Badge variant="outline" className="text-[10px]">
          Inconnu
        </Badge>
      );
  }
}
