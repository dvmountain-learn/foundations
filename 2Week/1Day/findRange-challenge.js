let numbers = [-2, 1, 3, 10, 59, -20, 25, 7, 50]

let max = 0
let min = 0
// for loop
// for (let i = 0; i < numbers.length; i++) {
//     let elements = numbers[i]
//     if (min > elements) { 
//         min = elements
//     }
//     if (max < elements) {
//         max = elements
//     }
// }

// forEach
numbers.forEach((num) => {
    let ele = num
    if (min > ele) min = ele 
    if (max < ele) max = ele
})

console.log(`Min: ${min}, Max: ${max}`)

