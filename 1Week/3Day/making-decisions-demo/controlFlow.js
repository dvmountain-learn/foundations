// let guessMe = 54

// console.log('starting...')
// while (guessMe < 100) {
//     console.log(`starting a new loop with number ${guessMe}, beacuse it is less than 100`)
//     if (guessMe % 4 == 0 || guessMe % 5 == 0) {
//         console.log(`   ${guessMe} is divisible by either 4 or 5`)
//         console.log(`   so let's add 25 to it`)
//         guessMe += 25
//         console.log(`   guessMe is now ${guessMe}`)
//         console.log('  ------------------------------------')
//     } else if (guessMe % 3 == 0) {
//         console.log(`   ${guessMe} is divisible by 3`)
//         console.log(`   so let's subtract 27 from it`)
//         guessMe -= 27
//         console.log(`   guessMe is now ${guessMe}`)
//         console.log('  ------------------------------------')
//     } else {
//         console.log(`   ${guessMe} was not divisible by 3, 4, or 5`)
//         console.log(`   so let's add 3 to it`)
//         guessMe += 3
//         console.log(`   guessMe is now ${guessMe}`)
//         console.log('  ------------------------------------')
//     }
//     console.log('   each loop, we add 22 to guessMe')
//     guessMe += 22
//     console.log(`   guessMe is now ${guessMe}`)
//     console.log('  ------------------------------------')
// }
// console.log(`${guessMe} is now greater than 100, so we don't loop again. Here is the final value:`)

// console.log(guessMe)

// var arr = [10,20,30,40,50,60]

// var named = 'firstItem'
// arr[0] = named
// console.log(arr)

// arr.pop()
// console.log(arr)

var myFavoriteNumbers = [4,8,12,16,20,24];

let someNum =  15
console.log(myFavoriteNumbers)
myFavoriteNumbers.splice(1, someNum)
console.log(myFavoriteNumbers)