const knex = require('../database/knex');

class UserController {

    async create(req, res) {
        const { name, email, password } = req.body;

        const isAdmin = false

        const [user] = await knex('users').insert({
            name,
            email,
            password,
            isAdmin
        })

        return res.json(user);
    }

   
}

module.exports = UserController