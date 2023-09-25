// Starting array
let array = [28, 43, -12, 30, 4, 0, 12, 0, 0]

// Write your solution below:

function isExiting(arrays) {
    for (let i = 0; i < arrays.length; i++) {
        for (let j = 0; j < arrays.length; j++) {
            // console.log(`i: ${i}, j: ${j}`)
            if (i != j) {
               // console.log(`array[i]: ${arrays[i]}, arrays[j]: ${arrays[j]}`)
                if (arrays[i] + arrays[j] === 0) {
                    return true 
                }
            }
        }
    }
    return false
}

let result = isExiting(array)
console.log(result)

let test1 = [1, 4, 11, 2, 37, -4]
console.log(isExiting(test1))
let test2 = [0, 21, 33, 6, 0, -9]
console.log(isExiting(test2))
let test3 = [0, 1, 2, 3, 4, 5]
console.log(isExiting(test3))

const multiply = (a, b) => {
    return a * b
}

const multiplyOneLine = (a, b) => a * b

console.log(multiply(5, 6))
console.log(multiplyOneLine(10, 20))

