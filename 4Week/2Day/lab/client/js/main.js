
// const row = document.getElementsByClassName('row')
// const column = document.getElementsByClassName('column')
// const propertyImage = document.getElementById('property-image')
// const propertyAddress = document.getElementById('property-address')
// const propertyPrice = document.getElementById('property-price')


// const baseURL = `http://127.0.0.1:4000/api/houses`

// axios.get(`${baseURL}`)
//     .then((res) => {
//         // console.log(res.data)
//         for (property of res.data) {
            
//             propertyAddress.textContent = property.address
//             propertyPrice.textContent = property.price
//             propertyImage.src = property.imageURL
            
//         }
//     })
//     .catch((error) => {
//         console.log(error)
//     })


const housesContainer = document.querySelector('#houses-container')
const form = document.querySelector('form')

const baseURL = `http://127.0.0.1:4000/api/houses`

const housesCallback = ({ data: houses }) => displayHouses(houses)
const errCallback = err => console.log(err.response.data)

const getAllHouses = () => axios.get(baseURL).then(housesCallback).catch(errCallback)
const createHouse = body => axios.post(baseURL, body).then(housesCallback).catch(errCallback)
const deleteHouse = id => axios.delete(`${baseURL}/${id}`).then(housesCallback).catch(errCallback)
const updateHouse = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(housesCallback).catch(errCallback)

function submitHandler(e) {
    e.preventDefault()

    let address = document.querySelector('#address')
    let price = document.querySelector('#price')
    let imageURL = document.querySelector('#img')

    let bodyObj = {
        address: address.value,
        price: price.value, 
        imageURL: imageURL.value
    }

    createHouse(bodyObj)

    address.value = ''
    price.value = ''
    imageURL.value = ''
}

let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

function createHouseCard(house) {
    const houseCard = document.createElement('div')
    houseCard.classList.add('house-card')

    houseCard.innerHTML = `<img alt='house cover' src=${house.imageURL} class="house-cover"/>
    <p class="house-address">${house.address}</p>
    <div class="btns-container">
        <button onclick="updateHouse(${house.id}, 'minus')">-</button>
        <p class="house-price">${USDollar.format(house.price)}</p>
        <button onclick="updateHouse(${house.id}, 'plus')">+</button>
    </div>
    <button onclick="deleteHouse(${house.id})">delete</button>
    `


    housesContainer.appendChild(houseCard)
}

function displayHouses(arr) {
    housesContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
        createHouseCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

getAllHouses()