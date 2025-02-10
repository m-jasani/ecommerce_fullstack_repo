const express = require("express");
const controllers = require("../controllers/displyorder"); 



const course = express.Router();




course.get("/:uid",controllers.getData);


module.exports = course;
