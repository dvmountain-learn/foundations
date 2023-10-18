// My solution
function perfectSquare(number) {
    var sqrt = Math.sqrt(number)
    if (sqrt % 1 === 0) return `${sqrt} x ${sqrt} = ${(sqrt + 1) ** 2}`
    return `-1`
}

// Instructor solution
function perfectSquare(square) {
    let sqrt = Math.sqrt(square);
    // Find the square root of the square parameter and save it to a variable called sqrt.
    let next;
    // Set a variable called next, but don't assign it's value yet just leave it as undefined.
    if (sqrt % 1 === 0) {
      next = sqrt + 1;
      // If the square root is NOT a decimal (the remainder of it devided by 1 is 0) then that means it's actually a square root. We will set the next variable equal to sqrt plus 1. What this will do is: let's say square equals 9, the sqrt would be 3. If we were to add 1 to 3 it would become 4, and then we could reverse the square root to find the next perfect square.
    } else {
      return -1;
      // If the number isn't a perfect square, then just return -1.
    }
    return next * next;
    // Here is where we reverse the square root. We multiply the next variable by itself, which returns the next perfect square.
}

console.log(perfectSquare(25))
console.log(perfectSquare(9)) // should return 16 (3x3=9, 4x4=16)

console.log(perfectSquare(289)) // should return 324 (17x17=289 18x18=324)

console.log(perfectSquare(3000)) // should return -1 (sq root of 3000 is 54.77)
