const jwt=require("jsonwebtoken");

const verifyToken=(req,res,next)=>{
    try{
        const token=req?.headers["authorization"];
        if(token){
            jwt.verify(token,"secreatekey",(err,data)=>{
                if(err){
                    return res?.json({
                        status: 400,
                        message:"token varification failed",
                        error_type: "Error",
                        // data: error?.message,
                        });
                }else{
                    next();
                }
            });
        }else{
            return res?.json({
                status: 400,
                message: "Token not Found",
                error_type: "Error",
                // data: error?.message,
                });
        }
    }catch(error){
        console.log("error occurde");
    }
};
 module.exports=verifyToken;