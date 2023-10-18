
module.exports = {
    returnTwo: () => 2,
    greeting: (name) => `Hello, ${name}.`,
    add: (num1, num2) => Number(num1) + Number(num2),
    subtract: (num1, num2) => Number(num1) - Number(num2),
    multiply: (num1, num2) => Number(num1) * Number(num2),
    divide: (num1, num2) => {
        if (num1 === 0) return 0;
        else if (num2 === 0) return undefined;
        return Number(num1) / Number(num2);
    },
}

// what will happen if more arguments are sent in than there are parameters?
// ALL of function in Math, it doesn't matter when I send more than arguments

// what will happen to a math function if a string is sent in
// I try to casting parameters to Number, so it doesn't matter when I pass arguments as a string

// what if a falsey value is sent into the function?
// I don't know. how to resolve this issue during parameter as Number but I try to pass arguments as boolean


// Assembled Query: abc-12345678.abc.123456789.Josh.M.A.511.190.black.zoona.2023-10-18.a123456.AL.2024-07-25...