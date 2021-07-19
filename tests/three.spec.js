const { test, expect } = require("@playwright/test");
const sleep = () => new Promise((res) => setTimeout(res, 30000));

test.beforeEach(async ({ page }) => {
  await page.goto("https://www.example.com");
});

test.describe("file 3", () => {
  test("one", async ({ page }) => {
    expect(await page.title()).toBe("Example Domain");
  });

  test("two", async ({ page }) => {
    await sleep();
    expect(await page.title()).toBe("Example Domain");
  });
});
