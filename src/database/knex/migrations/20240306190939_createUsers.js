exports.up = function(knex) {
    return knex.schema.createTable("users", (table) => {
        table.increments("id").primary();
        table.string("name").notNullable();
        table.string("email").notNullable();
        table.string("mensagem").notNullable();
        table.boolean("isAdmin").defaultTo("false");

        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.fn.now());
        
    })
};


exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users')
};
