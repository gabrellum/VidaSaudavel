exports.up = function(knex) {
    return knex.schema.createTable("users", (table) => {
        table.increments("id").primary();
        table.string("email").notNullable();
        table.boolean("isAdmin").defaultTo("false");
        table.string("name").notNullable();
        table.string("password").notNullable();

        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.fn.now());
        
    })
};


exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users')
};
