// Write your code below this line
// In this challenge, you’ll write a decoder.

// Write a function that takes in a string and returns a string. 
// A valid argument is a number followed by a sequence of letters. Ex. 2fcjjm


function decodeString(letter) {
    letter = letter.replace(/[a-z]/gi)
    return String.fromCharCode(letter.charCodeAt() + 1)
}

  console.log(decodeString('2fcjjm'))