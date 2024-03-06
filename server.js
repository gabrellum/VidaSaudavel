const migrationRun = require('./src/database/mysql/migrations')
require("dotenv/config")
const cors = require('cors')

const express = require('express')
const routes = require('./src/routes/')

const app = express()
app.use(express.json())

app.use(cors())

migrationRun() 

 app.use(routes) 

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
})