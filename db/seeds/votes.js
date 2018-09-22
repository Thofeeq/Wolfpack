exports.seed = function(knex, Promise){
    return knex('votes').del()
    .then(function (){
        return Promise.all([
            knex('votes').insert({poll_id:"jkol243d9JkP", voter_name:"Squeek", results:{1:{"pasta":"long ass rice"},2:{"tacos":"How do you not know what a taco is"}}}),
            knex('votes').insert({poll_id:"KLop45h2n19G", voter_name:"Applelonius", results:{1:{"Skyfall":"its a Bond Film"},2:{"Isle of dogs":"also wes anderson movie"},3:{"The Grand Budapest Hotel":"its a Wes Anderson movie"}}}),
            knex('votes').insert({poll_id:"J9kn75hqbHdF", voter_name:"Zaphod", results:{1:{"Riyria Revelations":""},2:{"Ready Player One":"If VR was Legit"},3:{"His Dark Materials":"Church vs the universe"},4:{"Red Rising":"Futuristic Society"}}})
        ]);

    });
};