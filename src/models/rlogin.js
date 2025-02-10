const express = require("express");
const controllers = require("../controllers/login.js"); 
// const { query } = require('express-validator');



const app = express.Router();


app.get("/", 
controllers.getToken);


module.exports = app