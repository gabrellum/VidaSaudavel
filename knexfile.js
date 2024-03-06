const path = require('path');
require('dotenv/config')
module.exports = {

    development: {
        client: 'pg',
        connection: {
          host: process.env.HOST,
          user: process.env.USER,
          password: process.env.PASSWORD,
          database: process.env.DATABASE,
          port: process.env.DB_PORT,
        },
       
        migrations: { 
          directory: path.resolve(
            __dirname,
             'src',
            'database',
            'knex',
            'migrations',
            ),
        },

        seeds: { 
          directory: path.resolve(
            __dirname,
             'src',
            'database',
            'knex',
            'seeds',
            ),
        },

        useNullAsDefault: true,
      },

};