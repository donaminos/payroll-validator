import { type VariantProps } from "class-variance-authority";

import { Badge, type badgeVariants } from "@payroll/ui/components/badge/badge";

import { STATUS } from "./constants";

export function StatusBadge({
  status,
  label,
}: {
  status: string;
  label: string;
}) {
  const badgeData = {
    [STATUS.PENDING]: {
      label: "En attente",
      variant: "warning",
    },
    [STATUS.SUCCESS]: {
      label: "Success",
      variant: "success",
    },
    [STATUS.ERROR]: {
      label: "Error",
      variant: "error",
    },
  };

  const variant = badgeData[status]?.variant as unknown as VariantProps<
    typeof badgeVariants
  >["variant"];

  const text = label || badgeData[status]?.label || "Inconnu";

  return (
    <Badge
      variant={variant}
      className="flex items-center uppercase text-[9px] font-semibold w-18"
    >
      {text}
    </Badge>
  );
}
