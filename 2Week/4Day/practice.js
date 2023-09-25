
let higherOrderFunc = (callback) => {
    callback('Hello!')
    callback('Hello!')
}

let callbackFunc = (printValue) => {
    console.log(printValue)
}

higherOrderFunc(callbackFunc)

let originalArray = [2, 4, 5]
let newMappedArray = originalArray.map((value, index) => {
    return value * (index + 1)
})
let mappedArray = originalArray.map((value, index, array) => {
    return array
})
console.log(originalArray)
console.log(newMappedArray)
console.log(mappedArray)