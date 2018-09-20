"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  // Get admin dashboard page
  router.get('/:id', (req, res) => {
    const id = req.params.id;
    console.log(`Requesting "admin/${id}"`);
    knex
      .select('*')
      .from('users')
      .where('user_id', id)
      .asCallback((err, result) => {
        if (err) {
          return console.log(err);
        }
        res.redirect('/');
      })
  });

  // Post admin data to databas
  router.post('/newpoll', (req, res) => {
    const id = generateRandomString();
    console.log(id);
    const email = req.body.email;
    knex
      .select('*')
      .from('users')
      .where('email', email)
      .asCallback((err, result) => {
        if (err) {
          return console.log(err);
        }
        // If user doesnt exist, add user
        if (result.length === 0) {
          knex
            .insert({user_id: id, email: email})
            .into('users')
            .asCallback((err, result) => {
              if (err) {
                return console.log(err);
              }
              console.log('User added');
            })
        } else {
          // Else, skip
          console.log('User already exists, not adding to db');
        }
        res.render('temp-poll-builder');
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
