"use strict";

const express = require('express');
const router  = express.Router();
const urlGenerate = require('gfycat-style-urls');
const moment = require('moment');
moment().format();

module.exports = (knex) => {

  // Get poll page to vote
  router.get('/:poll_url', (req, res) => {
    
    const urlToVote = req.params.poll_url;
    knex.select("*")
    .from("votes")
    .join("polls",{"polls.poll_id" : "votes.poll_id"})
    .where({'polls.vote_url' : urlToVote})
    .then((results) => {
      console.log(results[0]);
      res.render("user-vote", results[0]);
    });
  });


  // Post vote data to database
  router.post('/:id/vote', (req, res) => {

  });

  // Post new poll data to database
  router.post('/new', (req, res) => {
    const id = generateRandomString();
    const voteURL = urlGenerate.generateCombination(2, '', true);
    console.log(voteURL);
    const email = req.body.email;
    const pollTitle = req.body['poll-title'];
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
