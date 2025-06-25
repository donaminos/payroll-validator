import { NextRequest, NextResponse } from 'next/server';
import { employeesData, type Employee } from './data';

/**
 * GET /api/employees
 * Returns a list of employees with optional filtering and pagination
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Extract query parameters
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '50');
    const search = searchParams.get('search') || '';
    const department = searchParams.get('department') || '';
    const status = searchParams.get('status') || '';
    const contractType = searchParams.get('contractType') || '';
    
    // Validate pagination parameters
    const validPage = Math.max(1, page);
    const validLimit = Math.min(100, Math.max(1, limit)); // Max 100 items per page
    
    // Filter employees based on search criteria
    let filteredEmployees = employeesData.filter((employee: Employee) => {
      // Search in name, email, or employee number
      const searchMatch = !search || 
        employee.firstName.toLowerCase().includes(search.toLowerCase()) ||
        employee.lastName.toLowerCase().includes(search.toLowerCase()) ||
        employee.email.toLowerCase().includes(search.toLowerCase()) ||
        employee.employeeNumber.toLowerCase().includes(search.toLowerCase());
      
      // Filter by department
      const departmentMatch = !department || employee.department === department;
      
      // Filter by status
      const statusMatch = !status || employee.status === status;
      
      // Filter by contract type
      const contractMatch = !contractType || employee.contractType === contractType;
      
      return searchMatch && departmentMatch && statusMatch && contractMatch;
    });
    
    // Calculate pagination
    const totalItems = filteredEmployees.length;
    const totalPages = Math.ceil(totalItems / validLimit);
    const startIndex = (validPage - 1) * validLimit;
    const endIndex = startIndex + validLimit;
    
    // Get paginated results
    const paginatedEmployees = filteredEmployees.slice(startIndex, endIndex);
    
    // Prepare response data
    const response = {
      data: paginatedEmployees,
      pagination: {
        page: validPage,
        limit: validLimit,
        totalItems,
        totalPages,
        hasNextPage: validPage < totalPages,
        hasPreviousPage: validPage > 1
      },
      filters: {
        search,
        department,
        status,
        contractType
      }
    };
    
    return NextResponse.json(response, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600' // Cache for 5 minutes
      }
    });
    
  } catch (error) {
    console.error('Error fetching employees:', error);
    
    return NextResponse.json(
      {
        error: 'Erreur interne du serveur',
        message: 'Une erreur est survenue lors de la récupération des employés',
        timestamp: new Date().toISOString()
      },
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
}

/**
 * POST /api/employees
 * Creates a new employee (placeholder for future implementation)
 */
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
        error: 'Non implémenté',
        message: 'La création d\'employés n\'est pas encore implémentée',
        timestamp: new Date().toISOString()
      },
      {
        status: 501,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    
  } catch (error) {
    console.error('Error creating employee:', error);
    
    return NextResponse.json(
      {
        error: 'Erreur interne du serveur',
        message: 'Une erreur est survenue lors de la création de l\'employé',
        timestamp: new Date().toISOString()
      },
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
} 