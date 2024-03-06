const knex = require('../database/knex');

class ClientController {

    async create(req, res) {
        const { name, email, mensagem } = req.body;
        
        await knex("clients").insert({
            name,
            email,
            mensagem
        })

        return res.status(201).json("Enviado com sucesso")
    }

    async listClients(req, res) {
        const clients = await knex("clients")
        res.json(clients)
    }
}

module.exports = ClientController