
exports.up = function(knex) {
    return knex.schema.createTable("clients", (table) => {
        table.increments("id").primary();
        table.string("name").notNullable();
        table.string("email").notNullable();
        table.string("mensagem").notNullable();
        
    })
};


exports.down = function(knex) {
    return knex.schema.dropTableIfExists('clients')
};
