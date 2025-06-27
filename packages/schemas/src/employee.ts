import { z } from "zod";

export const EmployeeQuerySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(50),
  search: z.string().trim().optional(),
  slug: z.string().optional(),
  sortBy: z
    .enum(["firstName", "lastName", "department", "createdAt"])
    .default("firstName"),
  sortOrder: z.enum(["asc", "desc"]).default("asc"),
});
