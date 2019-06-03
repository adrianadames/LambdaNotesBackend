
exports.up = function(knex, Promise) {
    return knex.schema.createTable('noteEntries', function(tbl) {
        // id (primary key)
        tbl.increments(); 

        // foreign key: userId
        tbl
            .integer('userId')
            .notNullable()
            .references('id')
            .inTable('users');

        // title
        tbl
            .string('title', 128);

        // textBody
        tbl
            .string('textBody');
        
        // createdAt
        tbl
            .timestamp('createdAt')
            .defaultTo(knex.fn.now());
        
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('noteEntries');
};
