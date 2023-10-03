const express = require('express')
const cors = require('cors')

const app = express()
const port = 4000

app.use(express.json())
app.use(cors())

module.exports = {}

app.listen(port, () => {
    console.log(`Server running on 127.0.0.1:${port}`)
})