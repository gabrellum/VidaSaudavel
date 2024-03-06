const { Router } = require('express');
const usersRouter = require('./users.routes');
const clientsRouter = require('./clients.routes')

const routes = Router()

routes.use('/users', usersRouter)
routes.use('/clients', clientsRouter)

module.exports = routes;