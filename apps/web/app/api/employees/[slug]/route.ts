import { NextRequest, NextResponse } from "next/server";
import type { Employee } from "@payroll/types";

import { employeesData } from "../data";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } },
) {
  try {
    const { slug } = params;

    if (!slug) {
      return NextResponse.json(
        {
          error: "Paramètre manquant",
          message: "Le slug de l'employé est requis",
          timestamp: new Date().toISOString(),
        },
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    }

    const employee = employeesData.find((emp: Employee) => emp.slug === slug);

    if (!employee) {
      return NextResponse.json(
        {
          error: "Employé non trouvé",
          message: `Aucun employé trouvé avec le slug: ${slug}`,
          timestamp: new Date().toISOString(),
        },
        {
          status: 404,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    }

    // Return employee data (excluding sensitive information like social security number)
    const safeEmployee = {
      ...employee,
      socialSecurityNumber: undefined, // Don't expose sensitive data
    };

    return NextResponse.json(
      {
        data: safeEmployee,
        timestamp: new Date().toISOString(),
      },
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600", // Cache for 5 minutes
        },
      },
    );
  } catch (error) {
    console.error("Error fetching employee by slug:", error);

    return NextResponse.json(
      {
        error: "Erreur interne du serveur",
        message: "Une erreur est survenue lors de la récupération de l'employé",
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

export async function PUT(
  request: NextRequest,
  { params }: { params: { slug: string } },
) {
  try {
    const { slug } = params;
    const body = await request.json();

    // TODO: Implement employee update logic
    // This would typically involve:
    // 1. Validating the request body
    // 2. Finding the employee by slug
    // 3. Updating the employee data
    // 4. Returning the updated employee

    return NextResponse.json(
      {
        error: "Non implémenté",
        message: "La mise à jour d'employés n'est pas encore implémentée",
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
    console.error("Error updating employee:", error);

    return NextResponse.json(
      {
        error: "Erreur interne du serveur",
        message: "Une erreur est survenue lors de la mise à jour de l'employé",
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

export async function DELETE(
  request: NextRequest,
  { params }: { params: { slug: string } },
) {
  try {
    const { slug } = params;

    // TODO: Implement employee deletion logic
    // This would typically involve:
    // 1. Finding the employee by slug
    // 2. Soft delete or hard delete based on business rules
    // 3. Returning success confirmation

    return NextResponse.json(
      {
        error: "Non implémenté",
        message: "La suppression d'employés n'est pas encore implémentée",
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
    console.error("Error deleting employee:", error);

    return NextResponse.json(
      {
        error: "Erreur interne du serveur",
        message: "Une erreur est survenue lors de la suppression de l'employé",
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
