 exports.seed = function(knex, Promise){
    return knex('polls').del()
    .then(function (){
        return Promise.all([
            knex('polls').insert({vote_url:"AlligatorBumblebee",
            date_created:"2018-08-24",
            date_expired:"2018-08-25",
            poll_name:"what's for dinner?",
            poll_options:{1:'tacos', 2:'pasta'},
            user_id: "h3kdk9jHp9JS"}),
            knex('polls').insert({vote_url:"GiraffeAardvark",
            date_created:"2018-09-16",
            date_expired:"2018-09-23",
            poll_name:"What Movie Should We Watch?",
            poll_options:{1:'The Grand Budapest Hotel', 2:'Skyfall', 3:'Isle of dogs'},
            user_id: "g2hfj5k0k20j"}),
            knex('polls').insert({vote_url:"ParrotGuineaPig",
            date_created:"2018-07-16",
            date_expired:"2018-08-16",
            poll_name:"Books for Bookclub?",
            poll_options:{1:'Red Rising', 2:'Riyria Revelations', 3:'Ready Player One', 4:"His Dark Materials"},
            user_id: "1H34ydjhjsu4h2"})
        ]);
    });
}; 