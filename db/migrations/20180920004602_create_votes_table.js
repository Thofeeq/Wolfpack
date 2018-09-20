
exports.up = function(knex, Promise) {
    return knex.schema.createTable("votes", function (table) {
        table.increments("vote_id");
        table.integer("poll_id").references("poll_id").inTable("polls");
        table.string("voter_name",50);
        table.jsonb("results");
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable("votes");
  };
  