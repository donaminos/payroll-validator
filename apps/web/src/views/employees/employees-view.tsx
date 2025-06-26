import { Suspense } from "react";
import { DataTable } from "@payroll/ui/components/ui/table/data-table";
import { Skeleton } from "@payroll/ui/components/ui/skeleton/skeleton";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@payroll/ui/components/ui/card/card";
import { Badge } from "@payroll/ui/components/ui/badge/badge";

function EmployeesTableSkeleton() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Skeleton className="h-6 w-48" />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <Skeleton className="h-10 w-[300px]" />
          <Skeleton className="h-4 w-32" />
        </div>
        <div className="rounded-md border">
          <div className="p-4">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="flex items-center space-x-4 py-2">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-4 w-40" />
                <Skeleton className="h-4 w-48" />
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-4 w-16" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <Skeleton className="h-8 w-64" />
        </div>
      </CardContent>
    </Card>
  );
}

interface EmployeesViewProps {
  searchParams: Record<string, string | string[] | undefined>;
}

export function EmployeesView() {
  return (
    <>
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="bg-muted/50 aspect-video rounded-xl" />
        <div className="bg-muted/50 aspect-video rounded-xl" />
        <div className="bg-muted/50 aspect-video rounded-xl" />
      </div>
      <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
    </>
  );
}
