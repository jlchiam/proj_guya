const mysql = require("mysql");
require("dotenv").config();

let connection = mysql.createConnection({
    host: process.env.DBHOST,
    port: process.env.DBPORT,
    user: process.env.DBUSER,
    password: process.env.DBPASSWD,
    database: process.env.DBNAME,
});

connection.connect((error) => {
    if (error) console.log(error);
    else console.log("Connected to MySQL!");
}
);

//connection.query("query", (error, result) => {});

connection.query("Select * from books", (error, result) => {
    if (error) console.log(error);
    else console.log(result);
})

connection.query("Select * from user", (error, result) => {
    if (error) console.log(error);
    else console.log(result);
})





