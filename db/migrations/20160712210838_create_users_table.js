exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function (table) {
      table.increments("user_id");
      table.string('email');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
  };