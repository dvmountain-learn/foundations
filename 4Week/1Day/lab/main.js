
let namedInput = document.querySelector('#named')
let buttonPost = document.querySelector('#create-post')
let buttonList = document.querySelector('#list-post')
let ul = document.querySelector('ul')



let baseUrl = 'http://127.0.0.1:4000'
function postData(event) {
    event.preventDefault()
    if (namedInput.value === '') {
        alert('This field is required.')
    } else {
    axios.post(`${baseUrl}/api/post?name=${namedInput.value}`)
        .then((res) => {
            namedInput = ""
            console.log(res)
        })
        .catch((error) => {
            console.log(error)
        })
    }
}

function fetchData(event) {
    event.preventDefault()
    axios.get(`${baseUrl}/api/posts`)
        .then((res) => {
            let li = document.createElement('li')
            if (res.data.length > 0) {
                for (let name of res.data) {
                    li.textContent = name
                    ul.appendChild(li)
                }
            }
            // console.log(res.data)
        })
        .then((error) => {  
            console.log('Error: ' + error)
        })
}

buttonPost.addEventListener('click', postData)

buttonList.addEventListener('click', fetchData)