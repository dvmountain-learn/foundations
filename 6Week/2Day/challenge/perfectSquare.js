function perfectSquare(number) {
    var sqrt = Math.sqrt(number)
    if (sqrt % 1 === 0) return `${sqrt} x ${sqrt} = ${(sqrt + 1) ** 2}`
    return `-1`
}

console.log(perfectSquare(25))
console.log(perfectSquare(9)) // should return 16 (3x3=9, 4x4=16)

console.log(perfectSquare(289)) // should return 324 (17x17=289 18x18=324)

console.log(perfectSquare(3000)) // should return -1 (sq root of 3000 is 54.77)
