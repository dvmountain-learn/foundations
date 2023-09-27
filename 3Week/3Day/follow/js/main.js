console.log('Hey!!!')

function doSomething() {
    console.log('Create function javascript with html!!!')
}

doSomething()

let arrayHeader = document.querySelectorAll('h2')
let strings = []
for (let i = 0; i < arrayHeader.length; i++) {
    strings.push(arrayHeader[i].innerText)
}
console.log(strings)

let aboutLink = document.querySelector('a')
console.log(aboutLink.textContent)
aboutLink.textContent = "Home"

let referToTheExistingDiv = document.querySelector('#ma-div')
// you can use document.getElementById('ma-div') instants of querySelector
let referToParaph = document.createElement('p')
referToParaph.innerHTML = 'Where are you from?'
referToTheExistingDiv.appendChild(referToParaph)

let callHandler = () => {
    referToParaph.style.background = 'blue'
}

referToTheExistingDiv.addEventListener('click', callHandler)