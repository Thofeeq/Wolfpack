 exports.seed = function(knex, Promise){
    return knex('polls').del()
    .then(function (){
        return Promise.all([
            knex('polls').insert({vote_url:"AlligatorBumblebee",
            date_created:"2018-08-24",
            date_expired:"2018-08-25",
            poll_name:"what's for dinner?",
            poll_options:{1:'tacos', 2:'pasta'},
            user_id: 3})
        ]);
    });
}; 