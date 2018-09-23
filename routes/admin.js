"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  // Get admin results page
  router.get('/:id', (req, res) => {
    const pollId = req.params.id;
    knex.select("*")
    .from("votes")
    .join("polls",{"polls.poll_id" : "votes.poll_id"})
    .where({'votes.poll_id' : pollId})
    .then((results) => {
       let templateVar = {results}
       console.log(templateVar);
       
       console.dir(results[0]);
      res.render("view-results", templateVar);
    });
  });

  return router;
};
