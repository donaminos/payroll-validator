import { z } from "zod";

export const EmployeesSearchParamsSchema = z.object({
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(50),
  search: z.string().optional(),
  slug: z.string().optional(),
  sort: z.enum(["name", "email", "department", "created_at"]).optional(),
  order: z.enum(["asc", "desc"]).default("asc"),
});

export type EmployeesSearchParams = z.infer<typeof EmployeesSearchParamsSchema>;
