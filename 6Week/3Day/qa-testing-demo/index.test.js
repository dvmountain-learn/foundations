 const {
    formatTitle, 
    shortenBio, 
    convertLength
} = require('./public/utils')

let testData = {
    id: 1,
    firstName: "Patten",
    lastName: "Goforth",
    bio: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    datetime: "2022-03-14 8:00:00",
    title: "nulla ac",
    length: 65,
    floor: 5,
    roomNumber: 3
}

function sum(a, b) {
  return a + b;
}

test('should run', () => expect(2).toBe(2))
// test('1 + 2 = 3', () => expect(sum(1, 2)).toBe(3))
test('first name should be Patten', () => expect(testData.firstName).toBe('Patten'))

describe('formatTitle tests', () => {
  test('Format title return string', () => {
    let formatedTitle = formatTitle(testData.title)
    expect(typeof formatedTitle).toBe('string')
  })

  // test('Format data as object', () => {
  //   expect(typeof testData).toBe('object')
  // })

  test('Format title are correctly formatted', () => {
    let formatedTitle = formatTitle(testData.title)
    expect(formatedTitle).toBe('Nulla Ac')
  })
})

describe('ShortBio tests', () => {
  test('ShortBio shorten the bio length', () => {
    let shortBio = shortenBio(testData.bio)
    expect(shortBio.length).toBeLessThan(testData.bio.length)
  })

  test('ShortBio adds periods to the string', () => {
    let shortBio = shortenBio(testData.bio)
    expect(shortBio).toContain('...')
  })

  // test('shortenBio shortens the bio string', () => {
  //   let shortBio = shortenBio(testData.bio)
  //   expect(shortBio.length).toBeLessThan(testData.bio.length)
  // })

  // test('shortenBio adds periods to the end of the string', () => {
  //   let shortBio = shortenBio(testData.bio)
  //   expect(shortBio).toContain('...')
  // })
})

describe('Convert Length tests', () => {
  test('Return an array with 2 items', () => {
    let result = convertLength(testData.length)
    // expect(result).toHaveLength(2)

    // 1. It will pass 
    // expect(result).toEqual([1, 5])
    // 2. It will pass too
    expect(result).toEqual([1, 5])
  })

  test('Can handle numbers under 60', () => {
    let result = convertLength(30)
    expect(result[0]).toEqual(0)
    // expect(result[1]).toEqual(30)
  })
})