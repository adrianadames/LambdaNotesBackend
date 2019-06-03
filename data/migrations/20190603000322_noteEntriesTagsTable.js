
exports.up = function(knex, Promise) {
    return knex.schema.createTable('noteEntriesTags', function(tbl) {
        tbl.integer('noteEntriesId').references('id').inTable('noteEntries').onDelete('CASCADE');
        tbl.integer('tagsId').references('id').inTable('tags').onDelete('CASCADE');
        tbl.timestamp('createdAt').defaultTo(knex.fn.now())
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('noteEntriesTags');
};
