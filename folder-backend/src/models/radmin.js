const express = require("express");
const multer = require("multer");
const controllers = require("../controllers/admin.js"); 



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./upload");
    },
    filename: function (req, file, cb) {
        cb(null, `${file.fieldname}-${Date.now()}${file.originalname}`);
    },
});


const upload = multer({ storage });


const course = express.Router();


course.get("/", controllers.getData);


course.get("/:id",controllers.getData1);


course.post("/",upload.single("aimg"),controllers.insertData);


course.put("/:id",upload.single("aimg"), controllers.updateData);


course.delete("/:id",controllers.deleteData);
module.exports = course;
