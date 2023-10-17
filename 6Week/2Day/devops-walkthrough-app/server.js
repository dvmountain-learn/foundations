const express = require('express')
const app = express()
const path = require('path')

var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '275f3b72ea95405d8efd0a0f4ea31b30',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// rollbar.debug()
// rollbar.log()
// rollbar.warning()
// rollbar.error()
// rollbar.info()
// rollbar.critical()

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

app.use(express.json())

const students = ['Jimmy', 'Timothy', 'Jimothy']

app.get('/', (req, res) => {
    rollbar.info('Someones want to access your filesystem.')
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.get('/api/students', (req, res) => {
    res.status(200).send(students)
})

app.post('/api/students', (req, res) => {
   let {name} = req.body
    rollbar.info('Do you want to add a new student.')
   const index = students.findIndex(student => {
       return student === name
   })

   try {
      bobbios()
       if (index === -1 && name !== '') {
           students.push(name)
           res.status(200).send(students)
       } else if (name === ''){
           res.status(400).send('You must enter a name.')
       } else {
           res.status(400).send('That student already exists.')
       }
   } catch (err) {
    //    console.log(err)
        console.log('my bobbios function did not work at all!')
        rollbar.error('my bobbios function did not work', err)
   }
})

app.delete('/api/students/:index', (req, res) => {
    const targetIndex = +req.params.index
    
    students.splice(targetIndex, 1)
    res.status(200).send(students)
})

const port = process.env.PORT || 5050

app.listen(port, () => console.log(`Server listening on ${port}`))
