# E2E Test Fixtures

This directory contains mock data used for Playwright E2E tests.

## Files
- `large-employees.json`: Array of Employee objects (see @payroll/types) for pagination and performance testing. Extend to 1000+ records as needed.

## Usage
- Import or load these fixtures in your Playwright tests or mock server setup to simulate large datasets and edge cases.

## Structure
Each employee object should match the following shape:
```json
{
  "id": "string",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "department": "string",
  "contractType": "CDI|CDD|Interim|Stage",
  "salary": 1801.00,
  "weeklyHours": 35,
  "status": "active|on_leave|inactive",
  "hireDate": "YYYY-MM-DD"
}
``` 