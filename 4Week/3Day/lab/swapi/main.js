
let button = document.querySelector('button')

function getResidents() {
    let index = 0
    let h2 = document.querySelectorAll('h2') 
    axios.get('https://swapi.dev/api/planets/?search=Alderaan')
        .then((res) => {
            let residents = res.data.results[0].residents
            for (let url of residents) {
                if (h2.length > 0) {
                    h2[index].remove()
                }
                requestUrl(url)
                index++
            }
        })
        .catch((error) => {
            console.log(error)
        })
}

function requestUrl(url) {
    axios.get(url)
        .then((res) => {
            let name = res.data.name
            let header = document.createElement('h2')
            header.className = 'header'
            header.innerHTML = name
            document.body.appendChild(header)
        })
        .catch((error) => {
            console.log(error)
        })
}

button.addEventListener('click', getResidents)