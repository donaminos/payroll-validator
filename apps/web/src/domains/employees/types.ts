import { z } from "zod";

import { EmployeeQuerySchema } from "@payroll/schemas/employee";

export type EmployeeQueryParams = z.infer<typeof EmployeeQuerySchema>;
