const express = require("express");
const controllers = require("../controllers/userwishlist.js"); 



const course = express.Router();

course.get("/:id",controllers.getData);

module.exports = course;