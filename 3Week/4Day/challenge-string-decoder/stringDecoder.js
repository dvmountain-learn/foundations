
// function decoder(code) {
//     let result = ''
//     for (let i = 0; i < code.length; i++) {
//         if (!isNaN(+code[i])) {
//             i += +code[i]
//         } else {
//             result += code[i]
//         }
//     }
//     return result
// }

// Funky isNaN Version:
function decoder(code){
// Make a function called decoder taking in a parameter called code, which is a string.
    
    let result = ''
    // Set a variable called result equal to an empty string. This is where I'll be storing the letters once they've been decoded.
    
    for (let i = 0; i < code.length; i++) {
    // Loop over the code parameter.
    
    if (!isNaN(+code[i])) {
    // Here I'm checking if the character from the code parameter currently being accessed by the for loop (code[i]) is a number. I'm doing this by converting it into a number data type with the Number conversion shorthand (+). I'm using the isNaN method in conjunciton with the opposite operator (!) to check if the converted character is actually a number.
        
        i += +code[i]
        // If it is a number, I'm going to add the number to the i variable (which is what I'm using as an index to decode the next letter to save).
        
    } else {
        result += code[i]
        // If it's not a number, we're going to add that character to the result instead.
    }
    }
    return result
    // Once the loop is finished, we'll return result which holds the decoded string.
}

// No isNaN Version:
function decoder(code){
  let result = ''
  for(let i = 1; i < code.length; i++){
    // I'm starting my loop at 1 to ignore the first number in the code string since we don't need it.
    if(+code[i] || +code[i] === 0){
      // I'm converting the character currently being accessed by the loop (code[i]) into a number (with +) and seeing if it is true or(||) the number 0. If code[i] is a letter, I will get NaN from the conversion which is a falsey value (it will not be true like the first condition checks for). The second part of the condition is to catch when a number equals 0. Since 0 is also a falsey value, it will fail the first condition when I want it to pass because it's a number.
      let prevIndex = i - 1
      // Since each number has a "good" letter in front of it that needs to be added to result, I am making a variable that stores the value of the previous index.
      result += code[prevIndex]
      // Here is where I am using that prevIndex variable to store the "good" letter.
    }
  }
  result += code[code.length - 1]
  // All of the code strings end with the last "good" letter, so the code I wrote before won't add it in since theree are no more numbers. I am manually adding the last letter in here.
  return result
}

console.log(decoder('0h2xce5ngbrdy'))