"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  // Get poll page to vote
  router.get('/:id', (req, res) => {

  });

  // Post new poll data to database
  router.post('/new', (req, res) => {
    console.log(req.body);
    const email = req.body.email;
    const title = req.body.poll-title;
    const date = req.body.date;
    let choices = [];
    res.sendStatus(200);
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
