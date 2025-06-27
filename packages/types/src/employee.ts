export type Employee = {
    id: string;
    slug: string; // UUID for secure referencing without exposing database ID
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    department: string;
    position: string;
    hireDate: string;
    contractType: "CDI" | "CDD" | "Interim" | "Stage";
    salary: number;
    weeklyHours: number;
    status: "active" | "inactive" | "on_leave";
    managerId?: string;
    employeeNumber: string;
    socialSecurityNumber: string;
    address: {
      street: string;
      city: string;
      postalCode: string;
      country: string;
    };
    emergencyContact: {
      name: string;
      relationship: string;
      phone: string;
    };
    lastUpdated: string;
  }