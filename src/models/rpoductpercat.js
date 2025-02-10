const express = require("express");
const controllers = require("../controllers/productpercat.js"); 



const course = express.Router();

course.get("/:cname",controllers.getData);

module.exports = course;