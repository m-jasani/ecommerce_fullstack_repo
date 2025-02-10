const db = require("../helpers/db.js");
const jwt=require("jsonwebtoken");
// const { validationResult } = require("express-validator");



const getToken=async(req,res)=>{
    // const result = validationResult(req);
    // if (!result.isEmpty()) {
    //   return res.json({  result });
    // }
    try{
      

        const q="SELECT `uid` FROM `user`  WHERE `uemail`=? AND `upass`=?";
        db.query(q,[req?.query?.uemail,req?.query?.upass],async (err,data)=>{
            if(err){
                return await res?.status(400)?.json({
                    status:400,
                    message:"error occured",
                    error_type:"error",
                    data:err.message,
                }); 
            }else {
                if (data?.length > 0) {
                //   const token = jwt.sign({ uid: data[0]?.uid }, "secreatekey");
                  const token = jwt.sign({ user_id: data[0]?.uid }, "secreatekey");

                  return res?.json({
                    status: 200,
                    message: "No Error",
                    error_type: "Success",
                    token: token 
                });
                } else {
                  return res?.json({
                    status:400,
                    message:"error occured",
                    error_type:"error",
                   
                    });
                }
              }
            
        })

    }catch(error){
        return await res?.status(400)?.json({
            status: 400,
            message: "Error Occured",
            error_type: "Error",
            data: error?.message,
        });
    }
};


module.exports = {getToken};
