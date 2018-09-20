exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({user_id:"1H34ydjhjsu4h2",email: "thofeeq@wolfpack.com"}),
        knex('users').insert({user_id:"g2hfj5k0k20j",email: "aaron@wolfpack.com"}),
        knex('users').insert({user_id:"h3kdk9jHp9JS", email: "dave@wolfpack.com"})
      ]);
    });
};
