const bcrypt = require('bcryptjs')

const users = []

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body
      console.log(users)
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && bcrypt.compareSync(password, users[i].hashPassword)) {
          res.status(200).send(users[i])
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
        console.log('Registering User')
        // console.log(req.body)
        const {username, email, firstName, lastName, password} = req.body
        let hashPassword = bcrypt.hashSync(password, 8)
        users.push({
          username,
          email,
          firstName,
          lastName,
          hashPassword
        })
        console.log(users)
        res.status(200).send(req.body)
    }
}