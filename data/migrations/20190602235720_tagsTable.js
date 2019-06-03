
exports.up = function(knex, Promise) {
    return knex.schema.createTable('tags', function(tbl) {
        // id (primary key)
        tbl.increments(); 

        // tag 
        tbl
            .string('tag', 16)
            .notNullable()
            .unique();
        
        // createdAt
        tbl
            .timestamp('createdAt')
            .defaultTo(knex.fn.now());
        
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('tags');
};
