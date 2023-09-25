const innerFn = () => 'I am a callback'
const anotherFn = () => 'Hello there'
const outerFn = callback => console.log(callback())

outerFn(innerFn)

outerFn(anotherFn)

function createAdder(x) {
    return function(y) {
        return x + y
    }
}

const addFive = createAdder(55)
console.log(addFive(15))
// const addFiveFn = function(y) {
//     return 5 + y
// }

// console.log(addFive(12))

// function addFive(12) {
//     return 5 + 12
// }
