

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
    // li.textContent = movieTitle
    span.textContent = movieTitle
    ul.appendChild(li)
    deleteBtn.innerHTML = ' X '
    deleteBtn.id = 'remove'
    li.appendChild(span)
    li.appendChild(deleteBtn)
    inputField.value = ''
    } else {
        alert('The movie is required.')
    }

    deleteBtn.addEventListener('click', deleteMovie)
    span.addEventListener('click', crossOffMovie)
}

function deleteMovie(event) {
    event.target.parentNode.remove()
    message.textContent = 'Movie deleted!'
}

function crossOffMovie(event) {
    event.target.classList.toggle('checked') 
    if (event.target.classList.contains('checked')) {
        message.textContent = 'Movie watched!'
    } else {
        message.textContent = 'Movie added back!'
    }
}

// document.querySelector('button').addEventListener("click", addMovie)
document.querySelector('form').addEventListener('submit', addMovie)




