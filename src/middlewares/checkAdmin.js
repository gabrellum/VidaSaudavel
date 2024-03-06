const knex = require("../database/knex/index")

async function checkAdmin(req, res, next) {
    const {user_id} = req.params

    const user = await knex("users").where({id: user_id}).first()

    if(!user) {
        return res.status(400).json({error: "Usuário não encontrado"})
    }
    if(user.isAdmin === 0) {
        return res.status(401).json({error: "Usuário não é administrador"}) 
    }

    next()
}

module.exports = checkAdmin