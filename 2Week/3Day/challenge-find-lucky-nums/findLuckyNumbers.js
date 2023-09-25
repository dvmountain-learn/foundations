// Write your code below this line.

let checkExisting = (array, value) => {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return false
        }
    }
    return true 
}

function luckyNumbers(n) {
    let arrays = []
    let random = 0
    if (n <= 0 || n > 10) {
        return NaN
    } else {
        for (let i = 0; i < n; i++) {
            random = Math.floor(Math.random() * 10) + 1
            if (arrays.length <= 0) {
                arrays.push(random)
            } else {
                if (checkExisting(arrays, random)) arrays.push(random)
            }
        }
    }
    return arrays
}

// Lucky number by n = 6
let findLuckyNumbers = luckyNumbers(6)
console.log(`Lucky Number n = 6: ${findLuckyNumbers}`)
// Lucky number by n = 3
console.log(`Lucky Number n = 3: ${luckyNumbers(2)}`)