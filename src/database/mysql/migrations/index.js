const  { conn } = require('../../')
const  createUser = require("./CreateUser")
require('dotenv/config')
async function migrationRun() {
    const schemas = [createUser].join('')

    const TableName = `users` ; 

    const verifyIfTableExists = `SHOW TABLES LIKE '${TableName}'`

    conn.execute(verifyIfTableExists, (err, results) => {
        if(err) {
            console.error("Erro ao verificar a existência da tabela", err)
            conn.end()
            return;
        } if(results.length === 0) {
            conn.execute(schemas, (err) => {
                if(err) {
                    console.error("Erro ao criar a tabela", err)
                } else {
                console.log("Tabela criada com sucesso");
                }
                conn.end()
            })
        }
    })
}

module.exports = migrationRun