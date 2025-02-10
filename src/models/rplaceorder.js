const express = require("express");
const controllers = require("../controllers/placeorder.js"); 



const course = express.Router();




course.post("/",controllers.insertData);


module.exports = course;
