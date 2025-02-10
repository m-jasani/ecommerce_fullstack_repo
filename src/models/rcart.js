const express = require("express");
const controllers = require("../controllers/cart.js"); 



const course = express.Router();


course.get("/", controllers.getData);


course.get("/:id",controllers.getData1);


course.post("/",controllers.insertData);


course.put("/:id", controllers.updateData);


course.delete("/:id",controllers.deleteData);
module.exports = course;
