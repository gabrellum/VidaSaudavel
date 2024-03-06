const {Router} = require('express')
const UserController = require('../controllers/UserController')


const usersRouter = Router()
const usersController = new UserController()


 usersRouter.post('/', usersController.create )


 module.exports = usersRouter