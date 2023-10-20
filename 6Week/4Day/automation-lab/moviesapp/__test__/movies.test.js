const {By, Builder, Browser, Key, until} = require('selenium-webdriver')

let driver 

beforeEach(async () => {
    driver = await new Builder().forBrowser(Browser.CHROME).build()

    await driver.get('http://localhost:3001')
    await driver.findElement(By.css('input[name="movieTitle"]')).sendKeys('Detective Pikachu')
    await driver.findElement(By.xpath('//button[@type="submit"]')).click()
})

afterEach(async () => {
    await driver.quit()
})

// describe('Movies List app', () => {
    
//     test('crossing off a movie by checkbox one or off', async () => {
//         await driver.findElement(By.xpath('//input[@type="checkbox"]')).click()
//         await driver.sleep(1000)

//         const checkedMovie = await driver.wait(until.elementLocated(By.css('input[type="checkbox"]')))
//         let selected = await checkedMovie.getAttribute('checked')
//         expect(selected).toBe('true')

//     })

//     test('deleting a movie', async () => {
//         await driver.sleep(1000)
//         await driver.findElement(By.className('delete-btn')).click()
//         await driver.sleep(1000)

//         let deleteMovie = await driver.wait(until.elementLocated(By.id('message')))
//        expect(await deleteMovie.getText()).toContain('deleted')
//     })

//     // test('notifications are displayed', async () => {
//     //     await driver.findElement(By.css('input[type="checkbox"]')).click()
//     //     await driver.sleep(3000)

//     //     const alertMessage = await driver.wait(until.elementLocated(By.id('message')))
//     //     expect(await alertMessage.getText()).toContain('Watched')
//     // })

    
// })

// From Instructor
describe('Test the Movies App', () => {

    test('can add a movie', async () => {
      const addedMovie = await driver.wait(until.elementLocated(By.css('label[for="movie-0"]')))
      expect(await addedMovie.getText()).toBe('Detective Pikachu')
    });
  
    test('can check off a movie', async () => {
      await driver.findElement(By.css('input[type="checkbox"]')).click()
      const watchMessage = await driver.wait(until.elementLocated(By.id('message')))
      expect(await watchMessage.getText()).toContain('Watched')
    });
  
    test('can check off a movie 2', async () => {
      await driver.findElement(By.css('input[type="checkbox"]')).click()
      const checkbox = await driver.wait(until.elementLocated(By.id('movie-0')))
      const checked = await checkbox.getAttribute('value')
      expect(checked).toBe('on')
    });
  
    test('can delete a movie', async () => {
      await driver.findElement(By.className('delete-btn')).click()
      const unorderedList = await driver.wait(until.elementLocated(By.id('movies-list')))
      const emptyUl = await unorderedList.getAttribute('childElementCount')
      expect(emptyUl).toEqual('0')
    });
});

