
const add = function(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

const multiply = (a, b) => a * b

const divide = (a, b) => a / b

// console.log(add(10, 15))
// console.log(subtract(20, 10))
// console.log(multiply(4, 5))
// console.log(divide(100, 5))

function calculator(a, b, callback) {
    return callback(a, b)
}
console.log(calculator(10, 50, add))

const applyPercentDiscount = (product, discount) => {
    product.displayPrice = product.basePrice * (1 - discount)
}

const applyFlatRateDiscount = (product, discount) => {
    product.displayPrice = product.basePrice - discount
}

function applyDiscounts(arr, callback, discount) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], discount)
    }
}

applyDiscounts([], discount)
