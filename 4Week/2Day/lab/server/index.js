const express = require('express')
const cors = require('cors')

const app = express()
const port = 4000

app.use(express.json())
app.use(cors())

const {
    getHouses,
    createHouse,
    updateHouse,
    deleteHouse 
} = require('./controller')

app.get('/api/houses', getHouses)
app.post('/api/houses', createHouse)
app.put('/api/houses/:id', updateHouse)
app.delete('/api/houses/:id', deleteHouse)

app.listen(port, () => {
    console.log(`Server running on 127.0.0.1:${port}`)
})