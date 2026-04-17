const db = require("../helpers/db.js");

const getData=async(req,res)=>{
    try{

        const q="select * from `product` inner join `cart` on `product`.`pid`=`cart`.`pid` inner join  `user` on `cart`.`uid`=`user`.`uid` where user.uid=?";
        db.query(q,req.params.uid,async (err,data)=>{
            if(err){
                return await res?.status(400)?.json({
                    status:400,
                    message:"error occured",
                    error_type:"error",
                    data:err.message,
                });
            }
            return await res?.status(200)?.json({
                status: 200,
                message:"no error",
                error_type:"success",
                data:data,
            });
        })

    }catch(error){
        return await res?.status(400)?.json({
            status: 400,
            message: "Error Occured",
            error_type: "Error",
            data: error?.message,
        });
    }
}
module.exports={getData}; 