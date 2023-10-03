const express = require('express')
const cors = require('cors')

const app = express()
const port = 4004

app.use(express.json())
app.use(cors())

const { getMovies, createMovie, updateMovie, deleteMovie } = require('./controller')

app.get('/api/movies', getMovies)
app.post('/api/movies', createMovie)
app.put('/api/movies/:id', updateMovie)
app.delete('/api/movies/:id', deleteMovie)


app.listen(port, () => {
    console.log(`Server running on 127.0.0.1:${port}`)
})
