let jonSnowHealth = 100

let theWinnerIs = 'Jamie is the Winner'
let newWinner = theWinnerIs.replace('Jamie', 'Jon')

if (newWinner.includes('Jon')) {
    console.log('Jon was inserted in the string successfully!')
} else {
    console.log('What? Jamie is still the winner...')
}

// produce the string jon-is-the-winner from newWinner
// use the string methods: toLowerCase and split
// and last of all, use the array method: join

let newWinnerLowerCase = newWinner.toLowerCase()
let newWinnerSplitArray = newWinnerLowerCase.split(' ')
let newJoinedStringKebab = newWinnerSplitArray.join('-')
console.log(newJoinedStringKebab)


// let newJoinedStringKebab2 = newWinner.toUpperCase().split(' ').join('-')
// console.log(newJoinedStringKebab2)

function isJonAlive() {
    if (jonSnowHealth > 0) {
        console.log('Jon is alive!')
    } else {
        console.log('RIP Jon Snow!')
    }
}

function surpriseAttack(attack) {
    jonSnowHealth -= attack 
    console.log(jonSnowHealth)
    isJonAlive()
}

// Dothraki attack
surpriseAttack(20)

// Lannister guard
surpriseAttack(12)

// Bandit attack
surpriseAttack(6)

const greeting = function(p1, p2) {
    //console.log(`${p1} and ${p2} say hello to each other.`)
    return `${p1} and ${p2} say hello to each other.`
}

let greetingOutput = greeting('Jon Snow', 'Ned Stark')
console.log(greetingOutput)
// Math.floor(Math.random() * 6 + 1)

// let doubleRoll = () => {
//     let roll1 = Math.floor(Math.random() * 6 + 1)
//     let roll2 = Math.floor(Math.random() * 6 + 1)

//     return roll1 + roll2
// }

//let doubleRoll = () => (Math.floor(Math.random() * 6 + 1) + Math.floor(Math.random() * 6 + 1))
let doubleRoll = () => Math.floor(Math.random() * 6 + 1) * 2

console.log(doubleRoll())







