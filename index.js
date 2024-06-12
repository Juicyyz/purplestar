const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const dotenv = require("dotenv");
/* const _ = require('lodash');
app.locals._ = _; */

/* exports.index = function(req, res){
res.render('quiz-1', {lodash: lodash})
} */
/* import dotenv from "dotenv";
//const nano = require("nano")("http://localhost:5984");
import bodyParser from "body-parser";
import mysql from "mysql";
import dotenv from "dotenv";
*/
let PORT;

const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
dotenv.config()

/* const connection = mysql.createConnection({
host: "localhost",
user: "dbuser",
password: "dabonemhaters",
database: "my_db",
}); */

process.env.STATUS === "production"
? (PORT = process.env.DEV_PORT)
: (PORT = process.env.PROD_PORT);


// HOME PAGE
app.get("/", (req, res) => {
res.render("index");
});

// ABOUT PAGE
app.get("/about", (req, res) => {
res.render("about");
});

// MODULE PAGES
app.get("/module-1", (req, res) => {
res.render("module-1");
});

app.get("/module-2", (req, res) => {
res.render("module-2");
});

app.get("/module-3", (req, res) => {
res.render("module-3");
});

// QUIZ PAGES
app.get("/quiz-1", (req, res) => {
res.render("quiz-1");
});

app.listen(PORT, () => {
console.log(`Server in ${process.env.STATUS}, initialized at *:${PORT}`);
});