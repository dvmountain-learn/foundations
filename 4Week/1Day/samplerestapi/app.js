const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const joiObj = require('joi')
const app = express()
const port = 5050

// app.use(express.json())
app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))

const books = [
    {title: 'Harry Potter', id: 1},
    {title: 'Twilight', id: 2},
    {title: 'Lorien Legacies', id: 3}
]

app.get('/', (req, res) => {
    res.send('Welcome to Edurekas REST API with Node.')
})

app.get('/api/books', (req, res) => {
    res.status(200).send(books)
})

app.get('/api/books/:id', (req, res) => {
    const findBook = books.find((book) => book.id === parseInt(req.params.id))
    if (!findBook) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Ooops... Cant find what you are looking for!</h2>')
    res.status(200).send(findBook)
})

app.post('/api/books', (req, res) => {
    // console.log(req.params)
    const { error } = validateBook(req.body)
    if (error) {
        res.status(400).send(error.details[0].message)
        return
    }
    const book = {
        id: books.length + 1,
        title: req.body.title
        };
    books.push(book);
    res.status(200).send(book)
})

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

function validateBook(book) {
    const schema = {
        title: joiObj.string().min(3).required()
    }
    const joiSchema = joiObj.object({
      
        title: joiObj.string()
                  .min(5)
                  .max(30)
                  .required()
    }).options({ abortEarly: false });

    return joiSchema.validate(book)
}

app.listen(port, () => {
    console.log('Server running on port: 127.0.0.1:' + port)
}) 