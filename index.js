const fs = require("fs");
for (let i = 0; i < 500; i++) {
  fs.writeFileSync(
    `./tests/test-${i}.spec.js`,
    `
  const { test, expect } = require("@playwright/test");
  const sleep = () => new Promise((res) => setTimeout(res, 30000));

  
  test.describe("file ${i}", () => {    

    test("one", async ({ page }) => {
      await sleep();      
    });

    test("two", async ({ page }) => {
      await sleep();      
    });
  });

  `,
  );
}
