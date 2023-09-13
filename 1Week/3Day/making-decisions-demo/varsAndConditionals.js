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
    console.log('They are evently on match.')
}