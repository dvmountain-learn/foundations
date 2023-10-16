require('dotenv').config()

const Sequelize = require('sequelize')
// We need to load capital class of sequelize
const sequelize = new Sequelize(process.env.CONNECTION_STRING)
// We try to create instance of class Sequelize

const userID = 4;
const clientID = 3;

module.exports = {
    getUserInfo: (req, res) => {
        sequelize.query(`
            SELECT * FROM cc_clients c
            JOIN cc_users u
            ON c.user_id = u.user_id
            WHERE u.user_id = ${userID}
        `).then((dbRes) => {
            res.status(200).send(dbRes[0])
        }).catch((error) => {
            res.status(400).send('Page not found.' + error)
        })
    },

    // updateUserInfo: (req, res) => {
    //     const {firstName, lastName, phoneNumber, email, address, city, state, zipCode} = req.body
    //     sequelize.query(`
    //         UPDATE cc_users SET
    //             first_name = '${firstName}',
    //             last_name = '${lastName}',
    //             phone_number = ${phoneNumber},
    //             email = '${email}'
    //         WHERE user_id = ${userID};

    //         UPDATE cc_clients SET
    //             address = '${address},
    //             city = '${city}',
    //             state = '${state}',
    //             zip_code = ${zipCode}
    //         WHERE user_id = ${userID};
    //     `)
    //     .then(() => {
    //         res.sendStatus(200)
    //     })
    // }

    updateUserInfo: (req, res) => {
        const {firstName, lastName, phoneNumber, email, address, city, state, zipCode} = req.body
        sequelize.query(`
            UPDATE cc_users SET
            first_name = '${firstName}',
            last_name = '${lastName}',
            phone_number = ${phoneNumber},
            email = '${email}'
            WHERE user_id = ${userID};

            UPDATE cc_clients SET
            address = '${address}',
            city = '${city}',
            state = '${state}',
            zip_code = ${zipCode}
            WHERE user_id = ${userID};
        `).then(() => res.sendStatus(200))
    },

    getUserAppt: (req, res) => {
        sequelize.query(`
            SELECT * FROM cc_appointments
            WHERE client_id = ${clientID}
            ORDER BY date DESC;
        `).then((dbRes) => {
            res.status(200).send(dbRes[0])
        })
    },

    requestAppointment: (req, res) => {
        const {date, service} = req.body
        sequelize.query(`
            INSERT INTO cc_appointments (client_id, date, service_type, notes, approved, completed)
            VALUES (${clientID}, '${date}', '${service}', '', false, false)
            RETURNING *;
        `).then(dbRes => res.status(200).send(dbRes[0]))
    }
}
