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

// you continue on you journey
// but your backpack is so heavy
// that you decide you are going to ditch your status in the woods
// it was kind of weird anyway
backpack.shift()
console.log('backpack after getting rid of the status:')
console.log(backpack)

// you find a wild butterfree
// which is your favorite pokemon!
// you use up one pokeball to catch it
// however, once you've caught it, you realize you have 7
// pokemon, which is illegal
// you're really hungy anyway, so you decide eat one of your pedgeys

// make a variable for butterfree
// cut out a pekeball using any array method
// splice out pidgey and put butterfree where the pidgey was at
// save the new spliced array (which pidgey in it) to a variable call lunch

let favePokemon = 'butterfree'
backpack.shift()
let lunch = pokemon.splice(3, 1, favePokemon)
console.log('Here is my backpack after catching butterfree:')
console.log(backpack)
console.log('and here are my pokemon:')
console.log(pokemon)
console.log('and here is my lunch:')
console.log(lunch)

// you're walking along, and you stumble upon a rare stone called the 'pidgey-stone'
// that immediately causes all of your pidgeys to evolve into pidgeotto

// loop through all of your pokemon
// if the pokemon you are currently looking at in the loop is a pidgey
// replace it's value in the array with pidgeotto
for (let i = 0; i < pokemon.length; i++) {
    //let currentPokemon = pokemon[i]
    if (pokemon[i] === 'pidgey') {
        pokemon[i] = 'pidgeotto'
    } 
}
console.log('after the evolution event, my pokemon is now:')
console.log(pokemon)










