
const { returnTwo, 
    greeting, 
    add, 
    subtract, 
    multiply,
    divide, 
} = require('./functions')

test('returnTow', () => {
    expect(returnTwo()).toBe(2)
})

describe('greeting', () => {
    test('James', () => {
        expect(greeting('James')).toEqual('Hello, James.')
    })

    test('Jill', () => {
        expect(greeting('Jill')).toEqual('Hello, Jill.')
    })

    test('Name as a string', () => {
        expect(typeof greeting('Name as a string')).toEqual('string')
    })
})

describe('Math functions of add', () => {
    test('add of 1 + 2', () => {
        expect(add(1, 2, 6)).toEqual(3)
    })

    test('add of 5 + 9', () => {
        expect(add('5', 9)).toEqual(14)
    })

    test('Type of add function', () => {
        expect(typeof add('5', 9)).toEqual('number')
    })
})

describe('Math functions of subtract', () => {
    test('subtract of 5 - 2', () => {
        expect(subtract(5, 2)).toEqual(3)
    })
    test('subtract of 20 - 5', () => {
        expect(subtract('20', 5)).toEqual(15)
    })
})

describe('Math functions of multiply', () => {
    test('multiply of 10 * 5', () => {
        expect(multiply(10, 5)).toEqual(50)
    })

    test('multiply of 3 * 7', () => {
        expect(multiply(3, 7)).toEqual(21)
    })
})

describe('Math functions of divide', () => {
    test('divide of 10 / 2', () => {
        expect(divide(10, 2)).toEqual(5)
    })

    test('divide of 50 / 10', () => {
        expect(divide(50, 10)).toEqual(5)
    })
})