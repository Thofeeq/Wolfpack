"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  // Get admin dashboard page
  router.get('/:id', (req, res) => {

  });

  return router;
}
