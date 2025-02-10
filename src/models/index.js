const express=require('express')


const admin=require("./radmin");
const user=require("./ruser");
const cart=require("./rcart");
const order=require("./rorder");
const product=require("./rproduct");
const wishlist=require("./rwishlist");
const category=require("./rcategory");



const productpercat=require("./rpoductpercat");
const usercart=require("./rusercart");
const userwishlist=require("./ruserwishlist");
const placeorder=require("./rplaceorder");
const displayorder=require("./rdisplayorder");



const app=express.Router();


app.use("/ecomm-backend/admin",admin);
app.use("/ecomm-backend/user",user);
app.use("/ecomm-backend/cart",cart);
app.use("/ecomm-backend/order",order);
app.use("/ecomm-backend/product",product);
app.use("/ecomm-backend/wishlist",wishlist);
app.use("/ecomm-backend/category",category);




app.use("/ecomm-backend/productpercat",productpercat);
app.use("/ecomm-backend/usercart",usercart);
app.use("/ecomm-backend/userwishlist",userwishlist);
app.use("/ecomm-backend/placeorder",placeorder);
app.use("/ecomm-backend/displayorder",displayorder);


module.exports=app;
