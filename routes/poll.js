"use strict";

const express = require('express');
const router  = express.Router();
const urlGenerate = require('gfycat-style-urls');
const moment = require('moment');
const mailgun = require('mailgun-js')({apiKey:process.env.apiKey, domain:process.env.mailDomain});
moment().format();

module.exports = (knex) => {

  // Get poll page to vote
  router.get('/:poll_url', (req, res) => {

    const urlToVote = req.params.poll_url;
    knex.select("*")
    .from("polls")
    .where({'polls.vote_url' : urlToVote})
    .then((results) => {
      console.log(results);
      console.log(results[0]);
      res.render("user-vote", results[0]);
    });
  });


  // Post vote data to database
  router.post('/:id/vote', (req, res) => {
    const urlId = req.params.id;
    const userName = req.body.userName;
    const results = req.body.results;
    knex.select("*")
    .from("polls")
    .where({urlId : "polls.vote_url"})
    .then((results)=>{
      let pollId = results[0].poll_id;
      let email = results[0].created_by;
      let pollTitle = results[0].poll_name;
      knex("votes")
    .insert({
      poll_id:pollId,
      voter_name:userName,
      results:results
    });
  })
    .then(()=>{

      const mailgun = require('mailgun-js')({apiKey:process.env.apiKey, domain:process.env.mailDomain});
      const dataAdmin = {
        from: 'WOLFPACK <postmaster@sandboxd56fc5940f144690b23198bcbaa6ebe5.mailgun.org>',
        to:email,
        subject: `WolfPack ${userName} voted on ${pollTitle}` ,
        text:`See Results   http://localhost:8080/admin/${id}`
     };
      mailgun.messages().send(dataAdmin, function (error, body){
        console.log(body);
      });
    
    })    
  });

  // Post new poll data to database
  router.post('/new', (req, res) => {
    const id = generateRandomString();
    console.log(req.body);
    const voteURL = urlGenerate.generateCombination(2, '', true);
    console.log(voteURL);
    const email = req.body.email;
    const pollTitle = req.body.pollTitle;
    const createdDate = moment();
    const expiredDate = req.body.date;
    console.log(moment(expiredDate));
    //console.log(moment().isAfter(expiredDate));
    let choices = {};
    let index = 0;
    for (let i in req.body) {
      if (i === index.toString()) {
        choices[i] = req.body[i];
      }
      index++;
    }


    const dataAdmin = {
      from: 'WOLFPACK <postmaster@sandboxd56fc5940f144690b23198bcbaa6ebe5.mailgun.org>',
      to:email,
      subject: `WolfPack Poll Admin Link ${pollTitle}` ,
      text:`adminlink   http://localhost:8080/admin/${id} votelink  http://localhost:8080/poll/${voteURL}`
    };
     mailgun.messages().send(dataAdmin, function (error, body){
      console.log(body);
     });

    knex('polls')
      .insert({
        poll_id: id,
        vote_url: voteURL,
        created_by: email,
        date_created: createdDate,
        date_expired: expiredDate,
        poll_name: pollTitle,
        poll_options: choices,
      })
      .then(() => {
        res.json({
          shareURL: voteURL
        });
    });
  });

  return router;
}

function generateRandomString() {
  let newString = '';
  const strLength = 12;
  const characters = [
    { min: 48, max: 57 },
    { min: 65, max: 90 },
    { min: 97, max: 122 }
  ];

  for (let i = 0; i < strLength; i++) {
    const randomIndex = Math.floor(Math.random() * Math.floor(3));
    const min = characters[randomIndex].min;
    const max = characters[randomIndex].max;
    const code = Math.floor(Math.random() * (max - min + 1)) + min;
    newString += String.fromCharCode(code);
  }
  return newString;
}
