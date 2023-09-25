function hasUniqueChars(stringValue) {
    // Work fine with nested loop
    // let words = stringValue.split('')
    // for (let i = 0; i < words.length; i++) {
    //     for (let j = i + 1; j < words.length; j++) {
    //         if (words[i] === words[j]) return false
    //     }
    // }
    // return true
    let words = stringValue.split('')
    const uniqueSet = new Set()
    for (let word of words) {
        uniqueSet.add(word)
    }
    console.log(uniqueSet)
    if (uniqueSet.size === words.length) return true
    return false
}


console.log(hasUniqueChars('Monday'))
console.log(hasUniqueChars('Moonday'))
console.log(hasUniqueChars('Bobb'))