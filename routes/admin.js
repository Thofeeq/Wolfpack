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
  router.post('/:id', (req, res) => {

  });

  return router;
}
