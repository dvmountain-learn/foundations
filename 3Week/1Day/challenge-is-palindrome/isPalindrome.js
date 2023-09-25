// Write your code below

const isPalindrome = (words) => {
    // Find the last item of an array
    let len = words.length - 1
    // console.log(len)
    for (let i = 0; i < len / 2; i++) {
        // Check the first & last item are the same
        if (words[i] !== words[len]) return false 
        len--
    }
    return true
}
// Return true if this word is a palindrome. 
// false if it is not. 
// A palindrome is a word that is spelled the same backwards and forwards.

// kayak
// deified
// rotator
// repaper
// deed
// peep
// wow
// noon
// civic
// racecar
// racecar
// level
// mom
// bird rib
// taco cat

console.log(isPalindrome("a"))
// returns true

console.log(isPalindrome("noon"))
// returns true

console.log(isPalindrome("hello"))
// // returns false

console.log(isPalindrome("Racecar"))
// // returns false

console.log(isPalindrome("racecar"))
// returns true
