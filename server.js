"use strict";

require('dotenv').config();

const PORT        = process.env.PORT || 8080;
const ENV         = process.env.ENV || "development";
const express     = require("express");
const bodyParser  = require("body-parser");
const sass        = require("node-sass-middleware");
const app         = express();

const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');

// Seperated Routes for each Resource
const pollRoutes = require("./routes/poll");
const adminRoutes = require("./routes/admin");

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

//Serving static style/script folders




app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));

// Mount all resource routes
app.use("/poll", pollRoutes(knex));
app.use("/admin", adminRoutes(knex));



//temp poll object


// Home page
app.get("/", (req, res) => {
  res.render("index");
});

//test route - create-poll
app.get("/create-poll", (req, res) => {

  res.render("create-poll");
});

//test route
app.get("/test_input", (req, res) => {

  res.render("test_input");
});

//test route - user vote




app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
