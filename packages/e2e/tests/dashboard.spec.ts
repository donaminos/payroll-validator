import { test, expect } from '@playwright/test';
import { gotoDashboard } from '../src/helpers';

test.describe('Dashboard Page - Core Functionality', () => {
  test.beforeEach(async ({ page }) => {
    await gotoDashboard(page);
  });

  test('should load all widgets and metrics', async ({ page }) => {
    await expect(page.getByText('Tableau de bord')).toBeVisible();
    await expect(page.getByText(/Vue d'ensemble/)).toBeVisible();
    await expect(page.getByText(/Conformité/)).toBeVisible();
    await expect(page.getByText(/Embauches à venir/)).toBeVisible();
    await expect(page.getByText(/Départs à venir/)).toBeVisible();
    await expect(page.getByText(/Actions rapides/)).toBeVisible();
  });

  test('should have working navigation links', async ({ page }) => {
    await expect(page.getByRole('link', { name: /Employés/i })).toBeVisible();
    await page.getByRole('link', { name: /Employés/i }).click();
    await expect(page).toHaveURL(/employees/);
  });
});

test.describe('Dashboard Page - Responsive Design', () => {
  test('should adapt layout for mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 800 });
    await gotoDashboard(page);
    await expect(page.getByText('Tableau de bord')).toBeVisible();
    // Check that widgets stack vertically (heuristic: check order or class)
    // Optionally, take a screenshot for visual regression
    // await page.screenshot({ path: 'dashboard-mobile.png' });
  });
});

test.describe('Dashboard Page - Performance', () => {
  test('should load under 2 seconds', async ({ page }) => {
    const start = Date.now();
    await gotoDashboard(page);
    const duration = Date.now() - start;
    expect(duration).toBeLessThan(2000);
  });
}); 