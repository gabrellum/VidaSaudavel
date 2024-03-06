const mysql = require('mysql2');
require("dotenv/config")
const conn = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})

async function connection() {
    conn.connect((err) => {
        if(err) {
            throw err;
        }
        console.log('MySql Connect ...')
    })
    conn.destroy()
}

module.exports = {connection, conn}