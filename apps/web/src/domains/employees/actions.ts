"use server";

import { API_EMPLOYEES_URL } from "@/shared/constants/routes";
import { EmployeeCreateSchema } from "@payroll/schemas/employee";

export async function createEmployee(formData: FormData) {
  const data = Object.fromEntries(formData.entries());

  // Validate the data using zod schema
  const result = EmployeeCreateSchema.safeParse(data);
  if (!result.success) {
    const errors = result.error.flatten().fieldErrors;
    return { errors };
  }

  try {
    const url = new URL(API_EMPLOYEES_URL);
    const response = await fetch(url.toString(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(result.data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return {
        errors: errorData.errors || {
          api: ["Erreur lors de la création de l'employé."],
        },
      };
    }

    const responseData = await response.json();
    return { success: true, data: responseData };
  } catch (error) {
    console.error("Error creating employee:", error);
    return {
      errors: { api: ["Erreur réseau ou serveur. Veuillez réessayer."] },
    };
  }
}
