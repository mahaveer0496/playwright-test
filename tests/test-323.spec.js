
  const { test, expect } = require("@playwright/test");
  const sleep = () => new Promise((res) => setTimeout(res, 30000));

  
  test.describe("file 323", () => {    

    test("one", async ({ page }) => {
      await sleep();      
    });

    test("two", async ({ page }) => {
      await sleep();      
    });
  });

  