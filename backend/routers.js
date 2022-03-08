const express = require("express");
const database = require("./database");
let router = express.Router();

require('dotenv').config();

const { auth, requiresAuth } = require('express-openid-connect');
const Connection = require("mysql/lib/Connection");
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

router.get("/home", (request, response) => {
    response.send("Welcome to Dev Toolkit 2!");
})

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

module.exports = { router };
  



