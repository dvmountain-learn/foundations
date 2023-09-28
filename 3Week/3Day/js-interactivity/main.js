

let ul = document.querySelector('ul')
let inputField = document.querySelector('input')
let message = document.getElementById('message')

function addMovie(event) {
    event.preventDefault()
    let li = document.createElement('li');
    let deleteBtn = document.createElement('button')
    let span = document.createElement('span')
    let movieTitle = inputField.value
    if (movieTitle !== '') {
        span.textContent = movieTitle
        ul.appendChild(li)
        deleteBtn.innerHTML = ' X '
        deleteBtn.id = 'remove'
        li.appendChild(span)
        li.appendChild(deleteBtn)
        inputField.value = ''
    } else {
        message.textContent = 'The movie title is required.'
        revealMessage()
    }
    deleteBtn.addEventListener('click', deleteMovie)
    span.addEventListener('click', crossOffMovie)
}

function deleteMovie(event) {
    let movieTitle = event.target.parentNode.querySelector('span').innerHTML
    var isConfirm = confirm(`Are you sure you want to delete this movie: ${movieTitle}?`);
    if (isConfirm) {
        event.target.parentNode.remove()
        message.textContent = `${movieTitle} deleted!`
        revealMessage()
    }
}

function crossOffMovie(event) {
    let movieTitle = event.target.innerHTML
    event.target.classList.toggle('checked') 
    if (event.target.classList.contains('checked')) {
        message.textContent = `${movieTitle} watched!`
    } else {
        message.textContent = `${movieTitle} added back!`
    }
    revealMessage()
}

function revealMessage() {
    message.classList.remove('hide')
    setTimeout(() => {
        message.classList = 'hide'
    }, 1000)
}

// document.querySelector('button').addEventListener("click", addMovie)
document.querySelector('form').addEventListener('submit', addMovie)




