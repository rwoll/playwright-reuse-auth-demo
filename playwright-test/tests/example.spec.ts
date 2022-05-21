import { test, expect } from '@playwright/test';

test('dashboard is logged in', async ({ page }) => {
  await page.goto("https://rwoll.github.io/playwright-reuse-auth-demo/index.html");
  await expect(page.locator("#status")).toContainText("logged in");
})
