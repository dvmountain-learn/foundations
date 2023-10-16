
function formatPhoneNumber(phoneNumber) {
    let cleanedData = ('' + phoneNumber).replace(/\D/g, '')
    let match = cleanedData.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/)
    if (match) {
      let countryCode = (match[1] ? '+1 ' : '')
      return [countryCode, '(', match[2], ') ', match[3], '-', match[4]].join('')
    }
    return null
}

function createPhoneNumber(words) {
    let format = '(xxx) xxx-xxxx'
    for (let i = 0; i < words.length; i++) {
        format = format.replace('x', words[i])
    }
    return format
}

console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
console.log(createPhoneNumber(+17752309080))
console.log(formatPhoneNumber('7752308584'))