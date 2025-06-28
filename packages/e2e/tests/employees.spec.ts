import { test, expect } from "@playwright/test";
import {
  gotoEmployees,
  waitForTableLoaded,
  searchEmployee,
} from "../src/helpers";

test.describe("Employees Page - Data Display", () => {
  test.beforeEach(async ({ page }) => {
    await gotoEmployees(page);
    await waitForTableLoaded(page);
  });

  test("should load employee list table", async ({ page }) => {
    await expect(page.locator("table")).toBeVisible();
    await expect(page.locator("th").nth(0)).toHaveText("Prénom");
    await expect(page.locator("th").nth(1)).toHaveText("Nom");
  });

  test("should paginate employee list", async ({ page }) => {
    await page.getByRole("button", { name: "Page suivante" }).click();
    await expect(
      page.getByText(/Page 2 of|Page 2 sur/, { exact: false }),
    ).toBeVisible();
  });

  test("should search employees", async ({ page }) => {
    await searchEmployee(page, "Jean");
    await expect(page.locator("table")).toContainText("Jean");
  });
});

test.describe("Employees Page - Edge Cases", () => {
  test("should handle empty search results", async ({ page }) => {
    await gotoEmployees(page);
    await searchEmployee(page, "zzzzzzzzzzzzzzzzzzzz");
    await expect(page.getByText(/No results found\./i)).toBeVisible();
  });
});

test.describe("Employees Page - Performance", () => {
  test("should load under 3 seconds with 1000+ employees", async ({ page }) => {
    const start = Date.now();
    await gotoEmployees(page);
    await waitForTableLoaded(page);
    const duration = Date.now() - start;
    expect(duration).toBeLessThan(3000);
  });
});
