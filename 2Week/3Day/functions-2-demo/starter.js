////////////////////////
////// CALCULATOR //////
////////////////////////

// CODE HERE

const add = function(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}

const multiply = (a, b) => a * b

const divide = (a, b) => a / b

// console.log(add(10, 15))
// console.log(subtract(20, 10))
// console.log(multiply(4, 5))
// console.log(divide(100, 5))

function calculator(a, b, callback) {
  return callback(a, b)
}
console.log(calculator(10, 50, add))


///////////////////////
////// PET STORE //////
///////////////////////

const dogProducts = [
    {
      name: 'leash',
      colors: ['red', 'blue', 'green'],
      category: 1,
      inventory: 30,
      basePrice: 13.99, 
      displayPrice: 13.99
    }, 
    {
      name: 'chew toy',
      colors: ['brown'],
      category: 2,
      inventory: 120,
      basePrice: 6.00, 
      displayPrice: 6.00
    }, 
    {
      name: 'rope',
      colors: ['blue & green', 'red & yellow'],
      category: 2,
      inventory: 75,
      basePrice: 4.99, 
      displayPrice: 4.99
    }
]

const catProducts = [
  {
    name: 'mouse toy', 
    colors: ['pink', 'grey', 'black'], 
    category: 2, 
    inventory: 125, 
    basePrice: 2.50, 
    displayPrice: 2.50
  },
  {
    name: 'cat sweater',
    colors: ['black'],
    category: 1,
    inventory: 15,
    basePrice: 10.00, 
    displayPrice: 10.00
  }, 
  {
    name: 'straching post',
    colors: ['tan'],
    category: 2,
    inventory: 40,
    basePrice: 22.99, 
    displayPrice: 22.99
  }
]

// CODE HERE
// Refer to sub class (dog)
const applyPercentDiscount = (product, discount) => {
  product.displayPrice = product.basePrice * (1 - discount)
}

// Refer to sub class (cat)
const applyFlatRateDiscount = (product, discount) => {
  product.displayPrice = product.basePrice - discount
}

// Refer to base class
function applyDiscounts(arr, callback, discount) {
  for (let i = 0; i < arr.length; i++) {
    // Refer to callback function related to different type 
    callback(arr[i], discount)
  }
}

function applyDiscountsByCategory(arr, category, callback, discount) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].category === category) {
      callback(arr[i], discount)
    }
  }
}

function applyDiscountsByInventory(amount, arr, callback, discount) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].inventory < amount) {
      callback(arr[i], discount)
    }
  }
}

// applyDiscounts(dogProducts, applyPercentDiscount, .10)
// console.log(dogProducts)

// applyDiscounts(catProducts, applyFlatRateDiscount, 2)
// console.log(catProducts)

// applyDiscountsByCategory(catProducts, applyFlatRateDiscount, 2, 4)
// console.log(catProducts)

// applyDiscountsByInventory(50, dogProducts, applyPercentDiscount, .50)
// console.log(dogProducts)

////////////////////////
////// SANDWICHES //////
////////////////////////

// CODE HERE
function makeSandwich(bread) {
  return (ingredients) => {
    let order = `You ordered a ${bread} bread sandwich with `
    for (let i = 0; i < ingredients.length; i++) {
      if (i === ingredients.length -1 && i !== 0) {
        order += `and ${ingredients[i]}.`
      } else if (ingredients.length === 1) {
        order += `${ingredients[i]}.`
      } else {
        order += `${ingredients[i]}, `
      }
    }
    return order
  }
}

const makeYummySandwich = makeSandwich('Pink')
const makeIdiotSandwich = makeSandwich('Hands') 
console.log(makeYummySandwich(['bacon', 'lettuce', 'avocado']))
console.log(makeIdiotSandwich(['idiot']))


