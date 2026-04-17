const express=require('express')
const cors=require('cors')
const protectedRoutes=require('./models/index.js')


const login=require("./models/rlogin");
// const verifyToken=require("./middleware/middleware")




const app=express();
app.use(cors());
app.use(express.json());
app.use("/upload",express.static("upload"));



app.use("/ecomm-backend/login",login);
app.use("/",protectedRoutes);
module.exports=app;
