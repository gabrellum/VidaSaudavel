const migrationRun = require('./src/database/mysql/migrations')
require("dotenv/config")
const cors = require('cors')

const express = require('express')
const routes = require('./src/routes/')

const app = express()
app.use(express.json())

app.use(cors())

/* migrationRun()  */

 app.use(routes) 

const   SERVER_PORT = process.env.PORT || 3000

app.listen(SERVER_PORT, () => {
    console.log(`Server is running at ${SERVER_PORT}`);
})