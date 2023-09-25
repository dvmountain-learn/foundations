// let dog = {
//     name: 'Freida',
//     color: 'brown/black',
//     hunger: 40,
//     mood: 'feisty',
//     age: 9,
//     sex: 'F'
//   };

// console.log(dog.color)    // prints Freida

// console.log(dog['name'])

// let dogAge = dog.age
// console.log(dogAge)

// let {name} = dog
// console.log(name)

// dog.sex = 'M'
// console.log(dog.sex)
// let {dogSex} = dog.sex
// console.log(dogSex)

// for (let key in dog) {
//     console.log(key + ': ', dog[key])
// }

// delete dog.sex
// delete dog.mood
// delete dog.name
// console.log(dog)

// class Dog {
//     constructor(name, color) {
//         this.name = name
//         this.color = color
//     }

//     bark() { 
//         console.log(`Arf! I am ${this.name} the dog!`)
//      }
// }

// class Puppy extends Dog {
//     constructor(name, color, trainingLevel) {
//         super(name, color)
//         this.trainingLevel = trainingLevel
//     }

//     levelUp() {
//         this.trainingLevel += 4
//     }
// }

// let objDog = new Dog('Pikachu', 'black')
// console.log(objDog)

let person = {
    'firstName': 'Senghort',
    'lastName': 'Kheang',
    'age': 34
}
console.log(person.firstName)
console.log(person['firstName'])

let {firstName, lastName} = person
console.log(firstName, lastName)

class Animal {
    constructor(name, color, age) {
        this.animalName = name
        this.color = color
        this.age = age
    }
}

let dallas = new Animal('Dallas', 'Brown/Black', 7)
console.log(dallas)
let koda = new Animal('Koda', 'Brown/Black/White', 4)
console.log(koda)

for (let pro in dallas) {
    console.log(pro, dallas[pro])
}

for (let p in koda) {
    koda[p] = 'woof'
}
console.log(koda)

dallas.age++
console.log(dallas.age)

class Cat extends Animal {
    constructor(name, color, age, attacksBugs) {
        super(name, color, age)
        this.attacksBugs = attacksBugs
    }

    meow() {
        console.log(`Hi, my name is ${this.animalName} and it is ${this.attacksBugs} that I hunt bugs.`)
    }
}

class Kitten extends Cat {
    constructor(name, color, age, attacksBugs, howTiny) {
        super(name, color, age, attacksBugs)
        this.howTiny = howTiny
    }

    tinyMeow() {
        console.log('meow')
    }
}

let macy = new Cat('Macy', 'black/white', 3, true)
console.log(macy.meow())

let wisp = new Kitten('Wisp', 'brown/gray', 0, true, 'VERY')
console.log(wisp)
wisp.meow()
