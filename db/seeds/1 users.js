exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({ email: "thofeeq@wolfpack.com"}),
        knex('users').insert({ email: "aaron@wolfpack.com"}),
        knex('users').insert({ email: "dave@wolfpack.com"})
      ]);
    });
};
