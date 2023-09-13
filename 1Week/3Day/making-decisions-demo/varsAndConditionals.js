/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/

let jonSnowAttack= 35
let jamieLannisterAttack = 35

if (jonSnowAttack > jamieLannisterAttack) {
    console.log('Jon Snow better attack then Jamie Lannister.')
} else if (jamieLannisterAttack > jonSnowAttack) {
    console.log('Jamie Lannister better attack then Jon Snow.')
} else {
    console.log('The fighters are evenly on match.')
}

let jonSnowHealth = 100
let jonSnowDefense = 0

if (jonSnowHealth <= jamieLannisterAttack) {
    console.log('Jon Snow has been slain.')
} else {
    jonSnowHealth = jonSnowHealth - jamieLannisterAttack
    console.log(`Jon Snow health is down to : ${jonSnowHealth}`)
}

jonSnowDefense += 25
if (jonSnowHealth <= jamieLannisterAttack - jonSnowDefense) {
    console.log('Jon Snow is dead.')
} else {
    // jonSnowHealth -= (jamieLannisterAttack - jonSnowDefence)
    jonSnowHealth = jonSnowHealth - (jamieLannisterAttack - jonSnowDefense)
    console.log(`Jon Snow health is down to : ${jonSnowHealth}`)
}

let isDead = false
// Jamie uses a gatling gun at jon 3 times as he runs into the forest
// there is a 50% chance, per gun usage, that John is dead.
for (let i = 1; i <= 3; i++) {
    isDead = Math.random() > .5
    if (isDead === true) {
        console.log(`Jon has died after ${i} rounds.`)
        break
    }
}
if (isDead === false) {
    console.log('It is a miracle! Jon is alive after has bombardment.')

    while (jonSnowHealth > 0) {
        console.log('Jamie punches Jon.')
        jonSnowHealth -= 5
    }
    console.log('Okay, Jon did not is make it. Sorry!!')
}