
// Write a function called hasMoreVowels that takes in one argument, word. When the function is called, return true if that word contains more vowels than non-vowels; otherwise, return false. The word will always be a single word, without any punctuation or spaces. It will contain only uppercase and/or lowercase letters.

function isVowel(char) {
    switch (char) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        return true
    default:
        return false
    }
}

function hasMoreVowels(words) {
    words = words.toLowerCase()
    for (let i = 0; i < words.length; i++) {
        // console.log(words[i], words[i + 1])
        if (isVowel(words[i]) && isVowel(words[i + 1])) return true
    }
    return false
}

function checkMoreVowels(word) {
    let vowelsArr = ['a', 'e', 'i', 'o', 'u']
    let vowelCount = 0
    let lowered = word.toLowerCase()
    for (let i = 0; i < lowered.length; i++) {
        if (vowelsArr.includes(lowered[i])) vowelCount ++
    }
    if (vowelCount > word.length / 2) return true
    return false
}

// If the phrase is over half vowels, it should return true:
console.log(hasMoreVowels('moose'))
// true

// If it’s half vowels (or less), it’s false:
console.log(hasMoreVowels('mice'))
// false
// console.log(hasMoreVowels('graph'))
// false

console.log(checkMoreVowels('main'))
// console.log(hasMoreVowels('contains'))
// console.log(hasMoreVowels('audio'))
// true

// Don’t consider “y” as a vowel:
// console.log(hasMoreVowels('yay'))
// false

// Uppercase vowels are still vowels:
console.log(hasMoreVowels('Aal'))
// true