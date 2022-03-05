// importing the express module
const express = require("express");

// use ./ because it is a file in the directory
// need { routers } because that's how we are exporting from routers.js
// import router from routers.js
const { router } = require("./routers");

// import cors to allow running backend on same machine as frontend
const cors = require("cors");

// define an application
// create an instance of an express module
// creates a web app instance
let app = express();
app.use(cors());
app.use(express.json());

    //move the router codes to routers.js

// tell my app to use this router for API mappings
app.use(router);



function get_all_users() {
    return users;
}

function get_user_by_user_id(user_id) {
    for (i = 0; i < users.length; i++) {
        if (users[i].user_id == user_id) {
            return users[i];
        }
    }
}


// start the web app and provide a callback
// callback takes in one parameter error
app.listen(process.env.PORT, (errors) => {
    if(errors) {
        console.log(errors);
    } else {
        console.log("Server started on port 3000");
    }
});

