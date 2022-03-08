const express = require("express");
const database = require("./database");
let router = express.Router();

require('dotenv').config();

const { auth, requiresAuth } = require('express-openid-connect');
const { connection } = require("./database");

router.use(
  auth({
    //auth0_domain: 'dev-8xccpmo6.us.auth0.com',
    authRequired: false,
    auth0Logout: true,
    issuerBaseURL: process.env.ISSUER_BASE_URL,
    baseURL: process.env.BASE_URL,
    clientID: process.env.CLIENT_ID,
    secret: process.env.SECRET,
    idpLogout: true,
  })
);

/*
router.get("/home", (request, response) => {
    response.send("Welcome to Dev Toolkit 2!");
})
*/
/*
router.get('/', (request, response) => {
    response.send(request.oidc.isAuthenticated() ? 'Logged in' : 'Logged out')
  });
  
  router.get('/profile', requiresAuth(), (request, response) => {
      response.send(JSON.stringify(request.oidc.user));
  });
*/

/*
router.get("/users/all", (request, response) => {
  // let users = database.get_all_users(); //users variable is only defined in this area, for the other router.get with let users, it is considered another area
  // response.send(users);
  connection.query("select * from user", (errors, results) => {
      if (errors) {
          console.log(errors);
          response.status(500).send("Something went wrong...");
      } else {
          response.status(200).send(results);
      }
  });
});
*/

router.post("/user/add", (request, response) => {
  connection.query(
      `INSERT INTO user (first_name, last_name, email) 
      VALUES ("${request.body.fname}", 
      "${request.body.lname}", 
      "${request.body.email}")`, 
      (errors,results)=>{
        if (errors) {
          console.log(errors);
          response.status(500).send("Something went wrong...");
        } else {
          response.status(200).send("User added to the database!");
        }
      }
    );

});


  router.get("/Workprofile/all", (request, response) => {
    connection.query("SELECT * FROM Workprofile", (errors, results) => {
        if (errors) {
            console.log(errors);
            response.status(500).send("Something went wrong...");
        } else {
            response.status(200).send(results);
        }
    });
});

router.get("/Userprofile/all", (request, response) => {
  connection.query("SELECT * FROM Userprofile", (errors, results) => {
      if (errors) {
          console.log(errors);
          response.status(500).send("Something went wrong...");
      } else {
          response.status(200).send(results);
      }
  });
});


router.post("/Userprofile/add", (request, response) => {
   connection.query(
      `INSERT INTO Userprofile (first_name, last_name,
        email_address, work_profile_id, monthly_income, 
        risk_appetite, retire_by,
        answer1, answer2, answer3, answer4,
        savings, spendings, investments) 
      values ("${request.body.first_name}", 
      "${request.body.last_name}", 
      "${request.body.email_address}",
      "${request.body.work_profile_id}",
      "${request.body.monthly_income}",
      "${request.body.risk_appetite}",
      "${request.body.retire_by}",
      "${request.body.answer1}",
      "${request.body.answer2}",
      "${request.body.answer3}",
      "${request.body.answer4}",
      "${request.body.savings}",
      "${request.body.spendings}",
      "${request.body.investments}",
      )`,
      (errors,results)=>{
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
  



