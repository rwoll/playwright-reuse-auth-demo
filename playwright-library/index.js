const playwright = require("playwright");
const fs = require('fs');

(async () => {
  if (!fs.existsSync('./auth.json')) {
    console.error([
      "Please run:",
      "",
      "   $ npm run login",
      "",
      "so you are already authenticated before this script runs!",
    ].join('\n'));
    process.exit(1);
  }

  const browser = await playwright.chromium.launch({ headless: false });
  const context = await browser.newContext({
    storageState: './auth.json'
  });

  const page = await context.newPage();
  await page.goto("https://rwoll.github.io/playwright-reuse-auth-demo/index.html");

  await page.waitForTimeout(10000);
})()
