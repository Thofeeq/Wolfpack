"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  // Get poll page to vote
  router.get('/:id', (req, res) => {
    const id = req.params.id;
    console.log(`Requesting "poll/${id}"`);
    res.redirect('/');
  });

  // Get poll builder page
  router.get('/new', (req, res) => {

  });

  // Post new poll data to database
  router.post('/new', (req, res) => {

  });

  // Post poll vote data to database
  router.post('/:id/vote', (req, res) => {

  });

  return router;
}
