exports.up = function(knex, Promise) {
    return knex.schema.createTable("polls", function (table) {
        table.increments("poll_id");
        table.string("vote_url",255);
        table.date("date_created");
        table.date("date_expired");
        table.string("poll_name",255);
        table.jsonb("poll_options");
        table.string("user_id").references("user_id").inTable("users");
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("polls");
};
