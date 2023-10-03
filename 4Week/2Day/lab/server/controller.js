
// getHouses, deleteHouse, createHouse, updateHouse
const houses = require('./db.json')
const autoId = houses.length + 1

module.exports = {
    getHouses: (req, res) => {
        // console.log(houses)
        res.status(200).send(houses)
    },
    createHouse: (req, res) => {
        const {address, price, imageURL} = req.body
        const house = {
            id: autoId,
            address: address,
            price: price,
            imageURL: imageURL
        }
        houses.push(house)
        res.status(200).send(houses)
    },
    updateHouse: (req, res) => {
        const {type} = req.body
        const index = houses.findIndex((house) => house.id === +req.params.id)
        if (type === 'minus') {
            if (houses[index].price <= 0) houses[index].price = 0
            else houses[index].price -= 10000
            res.status(200).send(houses)
        } else if (type === 'plus') {
            houses[index].price += 10000
            res.status(200).send(houses)
        } else {
            res.status(400).send('Invalid to update on price!')
        }
    },
    deleteHouse: (req, res) => {
        const index = houses.findIndex((house) => house.id === +req.params.id)
        houses.splice(index, 1)
        res.status(200).send(houses)
    }
}