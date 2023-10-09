
function hasBalanceParenthesis(string) {
    let openPar = 0
    let closedPar = 0
    for (let i = 0; i < string.length; i++) {
        if (string[i] === '(') openPar += 1
        else if (string[i] === ')') closedPar += 1
    }
    return openPar === closedPar
}

function balancedParens(str) {
    let openPar = 0
    let closedPar = 0
    // Set two variables, openPar and closedPar, to count how many opening and closing parenthesis are in the string parameter.
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "(") {
        openPar += 1
      } else if (str[i] === ")") {
        closedPar += 1
      }
      // Check if the character from the str parameter equals "(" or ")". If it does, then we will add one to the respective variable.
  
    }
    return openPar === closedPar
    // The directions ask for a boolean, so we are comparing the numbers to each other. If they are balanced (equal) then it will return true since the numbers would be the same. Otherwise, it will return false.
}

console.log(hasBalanceParenthesis('()'))
// true

console.log(hasBalanceParenthesis("(Oh Noes!)("))
// false

console.log(hasBalanceParenthesis("((There's a bonus open paren here.)"))
// false

console.log(hasBalanceParenthesis(")"))
// false

console.log(hasBalanceParenthesis("("))
// false

console.log(hasBalanceParenthesis("(This has (too many closes.) ) )"))
// false

// You may consider a string with no parentheses balanced:
console.log(hasBalanceParenthesis("Hey...there are no parens here!"))
// true

console.log(hasBalanceParenthesis('(What is you name?)'))