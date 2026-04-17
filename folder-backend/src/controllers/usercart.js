const db = require("../helpers/db.js");

const getData=async(req,res)=>{
    try{

        const q="SELECT * FROM `product` INNER JOIN `cart` ON `product`.`pid`=`cart`.`pid` WHERE `cart`.`uid`=?";
        db.query(q,req.params.id,async (err,data)=>{
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