
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function(tbl) {
        // id (primary key)
        tbl.increments(); 

        // username
        tbl
            .string('username', 128)
            .notNullable();

        // password
        tbl
            .string('password', 128)
            .notNullable();
        
        // createdAt
        tbl
            .timestamp('createdAt')
            .defaultTo(knex.fn.now());
        
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
};
