
console.log('connected')

const getAllBtn = document.querySelector('#all')
const charBtns = document.querySelectorAll('.char-btns')
const ageForm = document.querySelector('#age-form')
const ageInput = document.querySelector('#age-input')
const createForm = document.querySelector('#create-form')
const newFirstInput = document.querySelector('#first')
const newLastInput = document.querySelector('#last')
const newGenderDropDown = document.querySelector('select')
const newAgeInput = document.querySelector('#age')
const newLikesText = document.querySelector('textarea')
const charContainer = document.querySelector('section')

const baseURL = 'http://localhost:4000/'

function createCharacterCard(char) {
  let charCard = document.createElement('div')
  charCard.innerHTML = `<h3>${char.firstName} ${char.lastName}</h3>
  <p>gender: ${char.gender} | age: ${char.age}</p>
  <h4>Likes</h4>
  <ul>
    <li>${char.likes[0]}</li>
    <li>${char.likes[1]}</li>
    <li>${char.likes[2]}</li>
  </ul>`

  charContainer.appendChild(charCard)
}

function clearCharacters() {
  charContainer.innerHTML = ``
}

for (let i = 0; i < charBtns.length; i++) {
  charBtns[i].addEventListener('click', (event) => {
    clearCharacters()
    let search = event.target.id
    axios.get(baseURL + 'character/' + search)
      .then((res) => {
        // console.log(res.data)
        createCharacterCard(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  })
}

getAllBtn.addEventListener('click', (event) => {
  clearCharacters()
  axios.get(baseURL + 'characters')
    .then((res) => {
      // console.log(res.data)
      for (let name of res.data) {
        createCharacterCard(name)
      }
    })
    .catch((error) => {
      console.log(error)
    })
})

// charBtns[0].addEventListener('click', (event) => {
//   clearCharacters()
//   axios.get(baseURL + 'character/jake')
//     .then((res) => {
//       // console.log(res.data)
//       createCharacterCard(res.data)
//     })
//     .catch((error) => {
//       console.log(error)
//     })
// })

// charBtns[1].addEventListener('click', (event) => {
//   clearCharacters()
//   axios.get(baseURL + 'character/amy')
//     .then((res) => {
//       // console.log(res.data)
//       createCharacterCard(res.data)
//     })
//     .catch((error) => {

//     })
// })

// charBtns[2].addEventListener('click', (event) => {
//   clearCharacters()
//   axios.get(baseURL + 'character/rosa')
//     .then((res) => {
//       // console.log(res.data)
//       createCharacterCard(res.data)
//     })
//     .catch((error) => {

//     })
// })

// charBtns[3].addEventListener('click', (event) => {
//   clearCharacters()
//   axios.get(baseURL + 'character/charles')
//     .then((res) => {
//       // console.log(res.data)
//       createCharacterCard(res.data)
//     })
//     .catch((error) => {

//     })
// })

ageForm.addEventListener('submit', (event) => {
  event.preventDefault()
  let age = ageInput.value
  console.log(age)
  clearCharacters()
  axios.get(baseURL + 'character?age=' + age)
    .then((res) => {
      console.log(res.data)
      for (let data of res.data) {
        createCharacterCard(data)
      }
    })
    .catch((error) => {

    })
})

createForm.addEventListener('submit', (event) => {
  event.preventDefault()
  let personObj = {
    "firstName": newFirstInput.value,
    "lastName": newLastInput.value,
    "gender": newGenderDropDown.value,
    "age": newAgeInput.value,
    "likes": newLikesText.value.split(',')
  }
  axios.post(`${baseURL}character`, personObj)
    .then((res) => {
      clearForm()
      clearCharacters()
      console.log(res.data)
      for (let data of res.data) {
        createCharacterCard(data)
      }
    })
    .catch((error) => {
      console.log(error)
    })
})

function clearForm() {
  newFirstInput.value = ''
  newLastInput.value = ''
  newAgeInput.value = ''
  newLikesText.value = ''
}