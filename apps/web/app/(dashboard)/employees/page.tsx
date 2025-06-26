import { EmployeesView } from "@/views/employees/employees-view";

interface EmployeesPageProps {
  searchParams: Record<string, string | string[] | undefined>;
}

export default function EmployeesPage({ searchParams }: EmployeesPageProps) {
  return <EmployeesView searchParams={searchParams} />;
}
