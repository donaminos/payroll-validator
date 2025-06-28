# Payroll Validator E2E Tests

## Overview
This directory contains comprehensive end-to-end (E2E) tests for the Payroll Validator application, covering:
- Dashboard page (`/`): widgets, metrics, navigation, responsiveness, and performance
- Employees page (`/employees`): data table, search, pagination, interactions, edge cases, and performance

## Structure
- `dashboard.spec.ts`: E2E tests for the dashboard page
- `employees.spec.ts`: E2E tests for the employees management page
- `src/helpers.ts`: Common Playwright helpers and utilities
- `fixtures/` (planned): Mock data for large/edge case datasets

## How to Run
1. Start the Next.js app on `http://localhost:3000`
2. In this directory, run:
   ```sh
   pnpm test
   ```
   or
   ```sh
   npx playwright test
   ```
3. View the HTML report:
   ```sh
   npx playwright show-report
   ```

## Coverage Summary
- **Functional**: All primary user workflows, CRUD, search, pagination, and navigation
- **UI/UX**: Responsive layouts, loading/empty/error states, accessibility heuristics
- **Performance**: Page load and interaction benchmarks
- **Edge Cases**: Empty results, large datasets, error handling

## Quality Standards
- Deterministic, fast, and maintainable tests
- CI-ready configuration
- Clear assertions and descriptive error messages

---
For more details, see `../docs/analysis-prompt.md`. 