import { test, expect } from '@playwright/test';
import {
  gotoEmployees,
  waitForTableLoaded,
  searchEmployee,
  paginateEmployees,
  openEmployeeDetails,
} from '../src/helpers';

test.describe('Employees Page - Data Display', () => {
  test.beforeEach(async ({ page }) => {
    await gotoEmployees(page);
    await waitForTableLoaded(page);
  });

  test('should load employee list table', async ({ page }) => {
    await expect(page.locator('table')).toBeVisible();
    await expect(page.getByText('Prénom')).toBeVisible();
    await expect(page.getByText('Nom')).toBeVisible();
  });

  test('should paginate employee list', async ({ page }) => {
    await paginateEmployees(page, 2);
    await expect(page).toHaveURL(/page=2/);
  });

  test('should search employees', async ({ page }) => {
    await searchEmployee(page, 'Jean');
    await expect(page.locator('table')).toContainText('Jean');
  });
});

test.describe('Employees Page - Interactions', () => {
  test.beforeEach(async ({ page }) => {
    await gotoEmployees(page);
    await waitForTableLoaded(page);
  });

  test('should open employee details', async ({ page }) => {
    await openEmployeeDetails(page, 'Jean'); // Replace with a real name from mock data
    // Expect a drawer or modal to open
    await expect(page.getByRole('dialog')).toBeVisible();
  });
});

test.describe('Employees Page - Edge Cases', () => {
  test('should handle empty search results', async ({ page }) => {
    await gotoEmployees(page);
    await searchEmployee(page, 'zzzzzzzzzzzzzzzzzzzz');
    await expect(page.getByText(/Aucun employé trouvé|No data/i)).toBeVisible();
  });
});

test.describe('Employees Page - Performance', () => {
  test('should load under 3 seconds with 1000+ employees', async ({ page }) => {
    const start = Date.now();
    await gotoEmployees(page);
    await waitForTableLoaded(page);
    const duration = Date.now() - start;
    expect(duration).toBeLessThan(3000);
  });
}); 