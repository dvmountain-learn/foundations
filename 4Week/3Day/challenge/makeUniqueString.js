
// Write a function to remove all duplicate letters from a provided string. 
// The string will only contain lowercase letters between a - z. 
// The string will not contain spaces.

function makeUnique(letter) {
    letter = letter.toLowerCase()
    let result = []
    for (let i = 0; i < letter.length; i++) {
        if (!result.includes(letter[i])) result.push(letter[i])
    }
    return result.join('').replace(' ', '')
}

function test(letter) {
    letter = letter.toLowerCase()
    for (let i = 0; i < letter.length; i++) {
        for (let j = 1; j < letter.length; j++) {
            if (letter[i] !== letter[j]) {
                letter.splice(letter[i], 1)
            }
        }
    }
    return letter
}

console.log(makeUnique('helloWorLd'))
console.log(makeUnique('hello world'))
// helowrd
console.log(makeUnique('iwanttoclimbamountain'))
// iwantoclmbu
