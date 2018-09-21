exports.up = function(knex, Promise) {
    return knex.schema.createTable("polls", function (table) {
        table.string("poll_id", 12).unique();
        table.string("vote_url",255);
        table.string("created_by");
        table.timestamp("date_created").defaultTo(knex.fn.now());
        table.date("date_expired");
        table.string("poll_name",255);
        table.jsonb("poll_options");
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("polls");
};
