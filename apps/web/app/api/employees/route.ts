import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { EmployeeQuerySchema } from "@payroll/schemas/employee";
import type { Employee } from "@payroll/types";

import { employeesData } from "./data";

type EmployeeQuery = z.infer<typeof EmployeeQuerySchema>;

const getPaginatedEmployees = ({
  employees,
  validatedParams,
}: {
  employees: Employee[];
  validatedParams: EmployeeQuery;
}) => {
  const { page, limit } = validatedParams;

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedEmployees = employees.slice(startIndex, endIndex);

  return paginatedEmployees;
};

const filterEmployees = ({
  employees,
  validatedParams,
}: {
  employees: Array<Employee>;
  validatedParams: EmployeeQuery;
}) => {
  return employees.filter((employee) => {
    return (
      employee.firstName
        .toLowerCase()
        .includes(validatedParams.search?.toLowerCase() ?? "") ||
      employee.lastName
        .toLowerCase()
        .includes(validatedParams.search?.toLowerCase() ?? "") ||
      employee.email
        .toLowerCase()
        .includes(validatedParams.search?.toLowerCase() ?? "")
    );
  });
};

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const queryParams = Object.fromEntries(searchParams.entries());
    const validatedParams = EmployeeQuerySchema.parse(queryParams);

    const filteredEmployees = filterEmployees({
      employees: employeesData,
      validatedParams,
    });

    const paginatedEmployees = getPaginatedEmployees({
      employees: filteredEmployees,
      validatedParams,
    });

    const totalItems = filteredEmployees.length;
    const totalPages = Math.ceil(totalItems / validatedParams.limit);

    const response = {
      data: paginatedEmployees,
      pagination: {
        page: validatedParams.page,
        limit: validatedParams.limit,
        totalItems,
        totalPages,
        hasNextPage: validatedParams.page < totalPages,
        hasPreviousPage: validatedParams.page > 1,
      },
      filters: {
        search: validatedParams.search,
        slug: validatedParams.slug,
        sortBy: validatedParams.sortBy,
        sortOrder: validatedParams.sortOrder,
      },
    };

    return NextResponse.json(response, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600", // Cache for 5 minutes
      },
    });
  } catch (error) {
    console.error("Error fetching employees:", error);

    return NextResponse.json(
      {
        error: "Erreur interne du serveur",
        message: "Une erreur est survenue lors de la récupération des employés",
        timestamp: new Date().toISOString(),
      },
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // TODO: Implement employee creation logic
    // This would typically involve:
    // 1. Validating the request body
    // 2. Checking for duplicate employees
    // 3. Saving to database
    // 4. Returning the created employee

    return NextResponse.json(
      {
        error: "Non implémenté",
        message: "La création d'employés n'est pas encore implémentée",
        timestamp: new Date().toISOString(),
      },
      {
        status: 501,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  } catch (error) {
    console.error("Error creating employee:", error);

    return NextResponse.json(
      {
        error: "Erreur interne du serveur",
        message: "Une erreur est survenue lors de la création de l'employé",
        timestamp: new Date().toISOString(),
      },
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }
}
