// after move need to import express library
//const { response } = require("express");
const express = require("express");

// mock the database
// import data.js
const database = require("./data");



// define router object
let router = express.Router();
// if i get a request from this path, i will call this callback function with 2 para
    // request and response
//router.get("path", callback);

require('dotenv').config();

const { auth, requiresAuth } = require('express-openid-connect');
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



// define a GET API with path "/home"
router.get("/home", (request, response) => {
    response.send("Welcome to Dev Toolkit 2!");
})

// example for post
    //router.post("path", callback);

// define a GET API with path "/sum"
router.get("/sum", (request, response) => {
    // in my api request, in the query section, i have a parameter called a
    let sum = request.query.a + request.query.b;
    response.send("Sum is: " + sum);
})

router.post("/sum", (request, response) => {
    let sum = request.body.a + request.body.b;
    response.send("Sum is: " + sum);
})


router.get("/users/all", (request, response) => {
    let users = database.get_all_users();
    response.send(users);
});
router.get("/users/by-uid", (request, response) => {
    let user = database.get_user_by_user_id(request.query.user_id);
    response.send(user);
})


//define a post api to add a new user to database.
//user's information is passed request's body section
router.post ("/users/add", (request, response) => {
    // fetch the user details from the request.body
    let user = request.body;
    // add user to database
    database.add_user(user);

    //send the success message as a response
    response.send("New user added!");
})



// req.isAuthenticated is provided from the auth router
router.get('/', (request, response) => {
  response.send(request.oidc.isAuthenticated() ? 'Logged in' : 'Logged out')
});

router.get('/profile', requiresAuth(), (request, response) => {
    response.send(JSON.stringify(request.oidc.user));
});

router.get('/user/by-uid', requiresAuth(), (request, response) => {
    let user = data.get_user_by_user_id(request.query.user_id);
    response.status(200).send(user);
  });


// can also use router.get() but not recommended as we may want to decouple the 
    // file from the main.js

module.exports = { router };