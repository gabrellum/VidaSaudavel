require('dotenv/config')
exports.seed = async (knex) => {

  await knex('users').insert([
    { 
      email: process.env.ADMIN_EMAIL,
      isAdmin: true,
      name: process.env.USER_ADMIN,
      password: process.env.ADMIN_PASSWORD,
    }
  ]);
};
