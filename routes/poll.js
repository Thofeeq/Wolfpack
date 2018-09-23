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
      if (results.length === 0) {
        res.render('poll-error');
      } else {
        res.render("user-vote", results[0]);
      }
    });
  });


  // Post vote data to database
  router.post('/:id/vote', (req, res) => {
    const urlId = req.params.id;
    const userName = req.body.userName;
    const results = req.body.results;
    let votes = {};
    for (let i in results) {
      votes[i] = results[i];
    }
    let email = '';
    let pollTitle = '';
    knex.select("*")
    .from("polls")
    .where({"polls.vote_url":urlId})
    .then((results)=>{
      console.log(results);
      let pollId = results[0].poll_id;
      email = results[0].created_by;
      pollTitle = results[0].poll_name;
      knex("votes")
        .insert({
          poll_id:pollId,
          voter_name:userName,
          results:votes
        })
        .then(()=>{
          const dataAdmin = {
            from: 'WOLFPACK <postmaster@sandboxd56fc5940f144690b23198bcbaa6ebe5.mailgun.org>',
            to:email,
            subject: `${userName} has voted on your poll: ${pollTitle}!` ,
            text:`A new vote has been cast on you ${pollTitle} poll.\n You can see the current results here: http://localhost:8080/admin/${pollId} \n\n Wolfpack`
          };
          mailgun.messages().send(dataAdmin, function (error, body){
            console.log(body);
          });
          res.json({
            url: urlId
          });
        })
    })
  });

  // Post new poll data to database
  router.post('/new', (req, res) => {
    const id = generateRandomString();
    const voteURL = urlGenerate.generateCombination(2, '', true);
    console.log(voteURL);
    const email = req.body.email;
    const pollTitle = req.body.pollTitle;
    const createdDate = moment();
    const expiredDate = req.body.date;
    console.log(moment(expiredDate));

    let choices = {};
    for (let i in req.body.choices) {
      choices[req.body.choices[i]] = req.body.desc[i];
    }


    const dataAdmin = {
      from: 'WOLFPACK <postmaster@sandboxd56fc5940f144690b23198bcbaa6ebe5.mailgun.org>',
      to:email,
      subject: `WolfPack Poll created: ${pollTitle}` ,
      text:`Your poll has been succesfully created: ${pollTitle}\n\n Use the admin link to view the results, and send the voting link with your friends!\n Admin link: http://localhost:8080/admin/${id}\n Voting Link: http://localhost:8080/poll/${voteURL} \n\n Wolfpack`
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
