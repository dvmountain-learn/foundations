
// Write a program that counts from 1 to 50 in fizzbuzz fashion.

// To do so, loop from 1 to 50 (inclusive). 
// Each time through, if the number is evenly divisible by 3, say ‘fizz’. 
// If the number is evenly divisible by 5, say ‘buzz’. 
// If the number is evenly divisible by both 3 and 5, say ‘fizzbuzz’. 
// Otherwise, say the number.


for (let index = 1; index <= 50; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
        console.log('fizzbuzz')
    } else if (index % 3 === 0) {
        console.log('fizz')
    } else if (index % 5 === 0) {
        console.log('buzz')
    } else {
        console.log(index)
    }
}

