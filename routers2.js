// To import express library
const express = require("express");

// Import data.js
// const database = require("./data");
const { connection } = require("./database");

// define a router object
let router = express.Router();

// define an API to return all the users
router.get("/users/all", (request, response) => {
  connection.query("select * from user", (errors, results) => {
    if (errors) {
      console.log(errors);
      response.status(500).send("Something went wrong...");
    } else {
      response.status(200).send(results);
    }
  });
});

// define an API to get user based on user_id passed in the request.
router.get("/users/by-uid", (request, response) => {
  connection.query(
    `select * from user where user_id = ${request.query.uid}`,
    (errors, results) => {
      if (errors) {
        console.log(errors);
        response.status(500).send("Something went wrong...");
      } else {
        if (results.length == 0) {
          response.status(404).send("User not found");
        } else {
          response.status(200).send(results);
        }
      }
    }
  );
});

// define an POST API to add a new user to database.
// User's information is passed request's body section.
router.post("/users/add", (request, response) => {
  connection.query(
    `insert into user (first_name, last_name, email) values ("${request.body.fname}", "${request.body.lname}", "${request.body.email}")`,
    (errors, results) => {
      if (errors) {
        console.log(errors);
        response.status(500).send("Something went wrong...");
      } else {
        response.status(200).send("User added to the database!");
      }
    }
  );
});

module.exports = { router };
