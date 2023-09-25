
// // This is a function declaration
// function myFunc1() {

// }

// function myFuncWithParam1(param) {

// }

// // This is a standard function expression
// let myFunc2 = function() {

// }

// let myFuncWithParam2 = function (param, param2, []) {  }

// // This is an arrow function expression
// let myFunc3 = () => {

// }

// let myFuncWithParam3 = (param1, param2, param3) => {

// }

// // This is an arrow function expression (with parens omitted due to having exactly 1 param)
// let myFuncWithOnly1Param = param => {
//     return param * 10
// }
// console.log(myFuncWithOnly1Param(10))

// Copy from Instructor
//all five of these are ways to define (write) functions

//this is a function declaration
function myFunc1(myParam) {
    return myParam * 2
}

//this is a standard function expression
let myFunc2 = function(myParam) {
    return myParam * 2
}

//this is an arrow function expression
let myFunc3 = (myParam) => {
    return myParam * 2
}

//this is an arrow function expression (with parens omitted due to having exactly 1 param)
let myFunc4 = myParam => {
    return myParam * 2
}

//this is an arrow function expression (with an implicit return) (with parens omitted)
//note: implicit returns have no curly brackets, and no return keyword:
//      the thing after the arrow is the thing that is returned
let myFunc5 = myParam => myParam * 2

//since all of my above defined functions do the same thing
//and below, when they are being invoked, they are given the exact same inputs as each other,
//all of my output variables below will contain the exact same value: 8
const output1 = myFunc1(4)
const output2 = myFunc2(4)
const output3 = myFunc3(4)
const output4 = myFunc4(4)
const output5 = myFunc5(4)

let stringValue = 'Devmountain'
let arrayValue = stringValue.split('')
console.log(arrayValue)