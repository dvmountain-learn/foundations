
let count = 0
let counter = document.getElementById('counter')
let minusBtn = document.getElementById('minus-btn')
let plusBtn = document.getElementById('plus-btn')
let resetBtn = document.getElementById('reset-btn')

function increase() {
    count++
    counter.innerHTML = count
}

function decrease() {
    count--
    counter.innerHTML = count
}

function reset() {
    count = 0
    counter.innerHTML = count
}

function changeTheme(event) {
    let classString = event.target.innerHTML
    document.querySelector('body').className = classString
    document.querySelector('main').className = classString
    let allButtons = document.querySelectorAll('button')

    for (let i = 0; i < allButtons.length; i++) {
        let currentButton = allButtons[i]
        currentButton.classList = classString
    }
}

minusBtn.addEventListener('click', decrease);
resetBtn.addEventListener('click', reset);
plusBtn.addEventListener('click', increase);

let themeButtons = document.getElementsByClassName('theme-buttons')
for (let i = 0; i < themeButtons.length; i++) {
    let currentButton = themeButtons[i]
    currentButton.addEventListener('click', changeTheme)
}

