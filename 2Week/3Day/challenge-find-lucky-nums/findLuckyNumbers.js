// Write your code below this line.

function contains(array, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return false
        }
    }
    return true
}

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
    if (n < 0 || n > 10) {
        return NaN
    } else {
        for (let i = 0; i < n; i++) {
            random = Math.floor(Math.random() * (10 - 1)) + 1
            if (arrays.length <= 0) {
                arrays.push(random)
            } else {
                if (checkExisting(arrays, random)) arrays.push(random)
            }
        }
    }
    return arrays
}

let findLuckyNumbers = luckyNumbers(6)
console.log(findLuckyNumbers)