"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  // Get admin dashboard page
  router.get('/:id', (req, res) => {
    const id = req.params.id;
    console.log(`Requesting "admin/${id}"`);
    res.redirect('/');
  });

  // Post admin data to databas
  router.post('/', (req, res) => {
    const email = req.body.email;
    knex
      .select("*")
      .from("users")
      .where('email', email)
      .then((results) => {
        // If user doesnt exist, add user
        if (results.length === 0) {
          knex
            .insert({email: email})
            .into('users')
            .then(() => {
              console.log('User added')
            });
        } else {
          // Else, skip
          console.log('User already exists, not adding to db');
        }

    });
  });

  return router;
}
