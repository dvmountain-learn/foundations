/*
    In this file, we'll be continuing our story
    with Jon being allowed to flee his fight with Jamie.
*/

let backpack = ['poke ball', 'poke ball', 'potion', 'beef jerky', 'running shoes']
let pokemon = []

backpack.push('oreos')
backpack.push('oreos')
console.log(backpack)


backpack.push('pokedex')
pokemon.push('pikachu')
console.log(backpack)
console.log(pokemon)

for (let i = 0; i <= 4; i++) {
    pokemon.push('pedgey')
}

backpack.splice(3, 4)
console.log('')
console.log(backpack)

let newPokemon = 'Charizard'
pokemon.push(newPokemon)

console.log('after catching charizard, our pokemon is now:')
console.log(pokemon)

// someone asks to see your cutest pokemon
// which is pikachu, duh
// so you show them pikachu
console.log('Here is my pikachu')
let cutestPokemon = pokemon[0]
console.log(cutestPokemon)

// a geneticist crosses your path, and asks if he can clone your
// pidgeys, for science
// you agree, if he'll give you the lead status of a jynx he is currently holding
let clonedPidgeys = pokemon.splice(1, 5)
console.log('Here are your cloned pidgeys')
console.log(clonedPidgeys)

// let's make sure your pokemon stayed the same (no pidgeys were lost)
console.log('checking to make sure my pokemon are all still here:')
console.log(pokemon)

backpack.unshift('jynx status')
console.log('backpack after adding the status:')
console.log(backpack)











