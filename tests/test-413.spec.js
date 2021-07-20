
  const { test, expect } = require("@playwright/test");
  const sleep = () => new Promise((res) => setTimeout(res, 30000));

  
  test.describe("file 413", () => {    

    test("one", async ({ page }) => {
      await sleep();      
    });

    test("two", async ({ page }) => {
      await sleep();      
    });
  });

  