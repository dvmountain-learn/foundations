const { By, Builder, Browser, until, Key } = require("selenium-webdriver");

let driver;

// Build a new driver for each test
beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

// Quit a driver after each test
afterEach(async () => {
  await driver.quit();
});

describe("Test the Google homepage", () => {
  test("can search Google for 'Selenium'", async () => {
    // Navigate to google.com
    await driver.get("https://www.google.com/");

    // Locate the search bar and send the search term to it
    await driver.findElement(By.name("q")).sendKeys("selenium", Key.RETURN);
    // Wait until the title of the page changes to include the search term
    await driver.wait(until.titleIs("selenium - Google Search"), 1000);
  });

  test("can search Google for 'pikachu' and click on Images tab", async () => {
    await driver.get("https://www.google.com/");
    await driver.findElement(By.name("q")).sendKeys("pikachu", Key.RETURN);
    await driver.wait(until.titleIs("pikachu - Google Search"));
    await driver.findElement(By.linkText('Images')).click();
    const currentPage = await driver.wait(until.elementLocated(By.css('span[aria-current="page"]')), 1000)
    expect(await currentPage.getText()).toBe("Images")
  })

  // test("can search Google for 'Khmer New Year' and click on Videos tab", async () => {
  //   await driver.get("https://www.google.com/");
  //   await driver.findElement(By.name("q")).sendKeys("khmer new year", Key.RETURN);
  //   await driver.wait(until.titleIs("khmer new year - Google Search"));
  //   await driver.findElement(By.linkText('Videos')).click();
  //   const currentPage = await driver.wait(until.elementLocated(By.css('span[aria-current="page"]')), 1000)
  //   expect(await currentPage.getText()).toBe("Videos")
  // })

});
