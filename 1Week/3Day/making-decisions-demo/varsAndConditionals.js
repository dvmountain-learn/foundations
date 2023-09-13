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
let jonSnowDefence = 0

if (jonSnowHealth <= jamieLannisterAttack) {
    console.log('Jon Snow has been slain.')
} else {
    jonSnowHealth = jonSnowHealth - jamieLannisterAttack
    console.log(`Jon Snow health is down to : ${jonSnowHealth}`)
}