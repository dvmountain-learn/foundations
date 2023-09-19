// Starting array
let array = [28, 43, -12, 30, 4, 0, 12, 0, 0]

// Write your solution below:

function isExiting(arrays) {
    for (let i = 0; i < arrays.length; i++) {
        for (let j = 0; j < arrays.length; j++) {
            console.log(`i: ${i}, j: ${j}`)
            // prevents the element from comparing with itself
            if (i != j) {
                // check if elements' values are equal
                if (arrays[i] === arrays[j]) {
                    return true 
                    break
                }
            }
        }
    }
    return false
}

let result = isExiting(array)
console.log(result)
