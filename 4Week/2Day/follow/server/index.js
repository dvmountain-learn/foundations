const express = require('express')
const cors = require('cors')
const joiObj = require('joi')

const app = express()
const port = 4000

app.use(express.json())
app.use(cors())

module.exports = {}

app.put('/api/books/:id', (req, res) => {
    const book = books.find((obj) => obj.id === parseInt(req.params.id))
    console.log(book)
    if (!book) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Not Found!! </h2>')
    const { error } = validateBook(req.body)
    if (error) {
        res.status(400).send(error.details[0].message)
        return
    }
    book.title = req.body.title
    res.status(200).send(book)
})

app.delete('/api/books/:id', (req, res) => {
    const book = books.find((obj) => obj.id === parseInt(req.params.id))
    if (!book) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Not Found!! </h2>')

    const index = books.indexOf(book)
    books.splice(index, 1)
    res.status(200).send(book)
})

function validateHouse(house) {
    const joiSchema = joiObj.object({
      
        title: joiObj.string()
                  .min(5)
                  .max(30)
                  .required()
    }).options({ abortEarly: false })

    return joiSchema.validate(house)
}

app.listen(port, () => {
    console.log(`Server running on 127.0.0.1:${port}`)
})