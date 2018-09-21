 exports.seed = function(knex, Promise){
    return knex('polls').del()
    .then(function (){
        return Promise.all([
            knex('polls').insert({poll_id:"jkol243d9JkP",
            vote_url:"AlligatorBumblebee",
            date_created:"2018-08-24",
            created_by:"thofeeq@wolfpack.com",
            date_expired:"2018-08-25",
            poll_name:"what's for dinner?",
            poll_options:{1:'tacos', 2:'pasta'}}),
            knex('polls').insert({poll_id:"KLop45h2n19G",
            vote_url:"GiraffeAardvark",
            created_by:"aaron@wolfpack.com",
            date_created:"2018-09-16",
            date_expired:"2018-09-23",
            poll_name:"What Movie Should We Watch?",
            poll_options:{1:'The Grand Budapest Hotel', 2:'Skyfall', 3:'Isle of dogs'}}),
            knex('polls').insert({poll_id:"J9kn75hqbHdF",
            vote_url:"ParrotGuineaPig",
            created_by:"dave@wolfpack.com",
            date_created:"2018-07-16",
            date_expired:"2018-08-16",
            poll_name:"Books for Bookclub?",
            poll_options:{1:'Red Rising', 2:'Riyria Revelations', 3:'Ready Player One', 4:"His Dark Materials"}})
        ]);
    });
}; 