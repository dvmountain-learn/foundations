
function printDigits(num) {
    let result = 0
    while(num > 0){
        // Getting the rightmost digit
        rightmost = num % 10
        // console.log(`${result*10} ${rightmost}`)
        
        result = result * 10 + rightmost
        
        // Removing the rightmost digit from the number
        num = Math.floor(num / 10)
    }
    console.log(result)
}

function reverseDigits(num) {
    let result = Number(String(num).split('').reverse().join(''))
    console.log(result)
}

function hello(num) {
    let digit = 0
    while(num) {
        digit = num % 10
        // console.log(digit)
        num = (num - digit) / 10
        console.log(digit)
    }
    // console.log(digit)
}

// printDigits(1)
// 1
hello(31468)
// 8 6 4 1 3
// printDigits(314)
// 4 1 3
// printDigits(12)
// 2 1