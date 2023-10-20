const { Builder, Browser, By, Key, until } = require("selenium-webdriver");

let driver;

beforeAll(async () => {
  driver = new Builder().forBrowser(Browser.CHROME).build();
});

afterAll(async () => {
  await driver.quit();
});

test("can search Google for 'automation'", async () => {
  // TODO Navigate to google.com
  await driver.get('https://google.com')

  // TODO Uncomment the line below and replace SEARCH_BAR_NAME with the name of the search bar element
  await driver.findElement(By.name('q')).sendKeys("automation", Key.RETURN);

  // Wait for the results page to load
  await driver.wait(until.titleIs("automation - Google Search"), 1000);
});

test("can search Google twice", async () => {
  // Fix the TODOs below to finish the test
  // TODO Navigate to google.com
  await driver.get('https://google.com')
  // TODO Search for something in Google and wait for the page to load
  await driver.findElement(By.name('q')).sendKeys("books", Key.RETURN)
  // TODO Call .clear() on the search bar element to clear the old search term
  await driver.findElement(By.css('div[aria-label=" Clear"]')).click()
  // TODO Call .sendKeys() on the search bar element to search for a new term
  await driver.findElement(By.name('q')).sendKeys("music", Key.RETURN)
  // TODO Wait for the results page to load
  await driver.wait(until.titleIs('music - Google Search'), 2000)
});
