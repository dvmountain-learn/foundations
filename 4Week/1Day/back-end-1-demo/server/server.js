const express = require('express')
const cors = require('cors')
const app = express()
const port = 5050

app.use(express.json())
app.use(cors())

const inventory = ['greeting card', 'wagon', 'computer', 'table', 'chair', 'basketball', 'game console', 'Macy']

app.get('/api/inventory', (req, res) => {
    if (req.query.item) {
        let filterInventory = inventory.filter((obj) => obj.toLowerCase().includes(req.query.item.toLowerCase()))
        res.status(200).send(filterInventory)
    } else {
        res.status(200).send(inventory)
    }
})

app.get('/api/inventory/:id', (req, res) => {
    res.status(200).send(inventory[+req.params.id])
})



app.listen(port, () => {
    console.log('Server running is port: ' + port)
})