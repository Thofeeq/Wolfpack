exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function (table) {
      table.string("user_id",12);
      table.string('email');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
  };