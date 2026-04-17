const express = require("express");
const multer = require("multer");
const controllers = require("../controllers/user.js"); 



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


course.post("/",upload.single("uimg"),controllers.insertData);


course.put("/:id",upload.single("uimg"), controllers.updateData);


course.delete("/:id",controllers.deleteData);
module.exports = course;
