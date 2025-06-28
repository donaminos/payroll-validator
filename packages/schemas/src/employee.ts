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

export const EmployeeCreateSchema = z.object({
  firstName: z.string().trim().min(1, { message: "Le prénom est requis." }),
  lastName: z.string().trim().min(1, { message: "Le nom est requis." }),
  email: z.string().trim().email({ message: "Email invalide." }),
  contractType: z.enum(["CDI", "CDD", "Interim", "Stage"], {
    message: "Type de contrat invalide.",
  }),
  salary: z.coerce
    .number()
    .min(1801, { message: "Le salaire doit être au moins le SMIC (1801€)." })
    .multipleOf(0.01),
  status: z.enum(["active", "inactive"], { message: "Statut invalide." }),
});
