const {By, Builder, Browser, until} = require('selenium-webdriver');

let driver;

beforeEach(async () => {
    driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
    await driver.quit();
});

describe("Test the Movies App", () => {
    test("can add a movie", async () => {
        let movie = 'Avatar'
        await driver.get("http://localhost:3000/")
        await driver.findElement(By.css('input[name="movieTitle"]')).sendKeys(movie)
        await driver.findElement(By.xpath('//button[@type="submit"]')).click()
        await driver.sleep(2000)
        let addedMovie = await driver.wait(until.elementLocated(By.css('label[for="movie-0"]')), 1000)
        expect(await addedMovie.getText()).toBe(movie)
    })
});