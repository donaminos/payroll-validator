// Playwright helper utilities for payroll-validator E2E tests
// Covers navigation, selectors, and common actions for dashboard and employees pages
import { Page, expect } from "@playwright/test";

export async function loginIfNeeded(page: Page) {
  // If the app requires authentication, implement login here
  // For now, assume no login is required (public mock data)
}

export async function gotoDashboard(page: Page) {
  await page.goto("http://localhost:3000/");
  await expect(page).toHaveTitle(/Tableau de bord/i);
}

export async function gotoEmployees(page: Page) {
  await page.goto("http://localhost:3000/employees");
  await expect(page).toHaveTitle(/Liste des employés/i);
}

export async function waitForTableLoaded(page: Page) {
  // Wait for the employee table to be visible
  await expect(page.locator("table")).toBeVisible();
}

export async function searchEmployee(page: Page, query: string) {
  const searchInput = page.getByPlaceholder("Rechercher un employé...");
  await searchInput.fill(query);
  await searchInput.press("Enter");
}

export async function paginateEmployees(page: Page, pageNumber: number) {
  // Assumes pagination controls are present and labeled by page number
  await page.getByRole("button", { name: String(pageNumber) }).click();
}

export async function openEmployeeDetails(page: Page, employeeName: string) {
  // Click on the row or link for the given employee
  await page.getByText(employeeName).click();
}
