const {Router} = require('express')
const ClientController = require('../controllers/ClientController')
const checkAdmin = require('../middlewares/checkAdmin')


const clientsRouter = Router()
const clientsController = new ClientController()


 clientsRouter.post('/', clientsController.create )
 clientsRouter.get('/:user_id',checkAdmin, clientsController.listClients)

 module.exports = clientsRouter