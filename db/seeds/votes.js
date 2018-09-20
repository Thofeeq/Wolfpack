exports.seed = function(knex, Promise){
    return knex('votes').del()
    .then(function (){
        return Promise.all([
            knex('votes').insert({poll_id:"jkol243d9JkP", voter_name:"Squeek", results:{1:"pasta",2:"tacos"}}),
            knex('votes').insert({poll_id:"KLop45h2n19G", voter_name:"Applelonius", results:{1:"Skyfall",2:"Isle of dogs",3:"The Grand Budapest Hotel"}}),
            knex('votes').insert({poll_id:"J9kn75hqbHdF", voter_name:"Zaphod", results:{1:"Riyria Revelations",2:"Ready Player One",3:"His Dark Materials",4:"Red Rising"}})
        ]);

    });
};