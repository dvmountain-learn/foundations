const express = require('express')
const cors = require('cors')
const app = express()
const port = 4000

app.use(express.json())
app.use(cors())

let inputs = []

app.get("/api/users", (req, res) => {
    let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"]
    res.status(200).send(friends)
})

app.post('/api/post', (req, res) => {
    let name = req.query.name
    inputs.push(name)
    res.status(200).send(inputs)
})

app.get('/api/posts', (req, res) => {
    res.status(200).send(inputs)
})

app.get("/weather/:temperature", (req, res) => {
    // console.log(`${res.params.temperature}`) 
    const phrase = `<h3>It was ${req.params.temperature} today</h3>`
    res.status(200).send(phrase)
})

app.get("/weather/:temperature", (req, res) => {
    const { temperature } = req.params
    // console.log(temperature)
    const phrase = `<h3>It was ${temperature} today</h3>`
    res.status(200).send(phrase)
})

app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
})