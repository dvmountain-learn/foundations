
const movies = require('./db.json')

module.exports = {
    getMovies: (req, res) => {
        res.status(200).send(movies)
    },
    createMovie: (req, res) => {
        // console.log(req.body)
        const {title, rating, imageURL} = req.body
        console.log(movies.length + 1)
        const movie = {
            id: movies.length + 1,
            title: title,
            rating: +rating,
            imageURL: imageURL
        }
        movies.push(movie)
        res.status(200).send(movies)
    },
    updateMovie: (req, res) => {
        console.log(res.body)
        const index = movies.findIndex((movie) => movie.id === +req.params.id)
        console.log(movies)
        const {type} = req.body
        if (type === 'minus' && movies[index].rating > 1) {
            movies[index].rating -= 1
            res.status(200).send(movies)
        } else if (type === 'plus' && movies[index].rating < 5) {
            movies[index].rating += 1
            res.status(200).send(movies)
        } else {
            res.status(400).send('Invalid star for rating!')
        }
        console.log(movies)

    },
    deleteMovie: (req, res) => {
        // console.log(req.params.id)
        const index = movies.findIndex(movie => movie.id === +req.params.id)
        movies.splice(index, 1)
        res.status(200).send(movies)
    }

}