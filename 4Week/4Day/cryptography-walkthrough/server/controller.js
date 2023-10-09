let bcrypt = require('bcryptjs')

let userDatabase = []

let randomFortunes = [
    'You befriend a bear',
    'You get $3000 dropped off on your porch',
    'You give a child a hug'
]

let startingId = 1

module.exports = {
    logIn: (req, res) => {
        let { email, password } = req.body

        let userObj
        for (let i = 0; i < userDatabase.length; i++) {
            if (email === userDatabase[i].email) {
                userObj = userDatabase[i]
            }
        }

        if (!userObj) {
            res.status(200).send({success: false, message: 'user with that email does not exist'})
            return
        }
        // userObj.password === bcrypt.hashSync(password)
        if (bcrypt.compareSync(password, userObj.hashPassword)) {
            let randomFortune = randomFortunes[Math.floor(Math.random() * randomFortunes.length)]

            res.send({success: true, fortune: randomFortune})
        } else {
            res.status(200).send({success: false, message: 'bad password'})
        }
    },
    signUp: (req, res) => {
        let { email, password, firstName, lastName } = req.body
        var hashPassword = bcrypt.hashSync(password, 8)

        userDatabase.push({
            email,
            hashPassword,
            firstName,
            lastName,
            id: startingId++
        })
        console.log(userDatabase)

        res.send({success: true})
    }
}
