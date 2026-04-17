const db = require("../helpers/db.js");


const getData=async(req,res)=>{
    try{

        const q="SELECT * FROM `admin` ";
        db.query(q,async (err,data)=>{
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
};


const getData1=async (req,res)=>{
  
    try{

        const q="SELECT * FROM `admin` WHERE aid=?";
        db.query(q,[req?.params?.id],async(err,data)=>{
            if(err){
                return await res?.status(400)?.json({
                    status: 400,
                    message: "Error Occured",
                    error_type: "Error",
                    data: err.message,
                  });
            }
            return await res?.status(200)?.json({
                status: 200,
                message: "No Error",
                error_type: "Success",
                data: data?.[0],
            });
        });

    }catch(error){
        return await res?.status(400)?.json({
            status: 400,
            message: "Error Occured",
            error_type: "Error",
            data: error?.message,
        });
    }
};



const insertData = async (req, res) => {
  
  try {
    const q = "INSERT INTO `admin`(`aname`, `aemail`, `apass`, `acontact`,`agender`, `aimg`) VALUES (?)";
    const values = [
      req?.body?.aname,
      req?.body?.aemail,
      req?.body?.apass,
      req?.body?.acontact,
      req?.body?.agender,
      req?.file?.filename,
     
    ];
    db.query(q, [values], async (err, data) => {
      if (err) {
        return await res?.status(400)?.json({
          status: 400,
          message: "Error Occured",
          error_type: "Error",
          data: err.message,
        });
      }
      return await res?.status(200)?.json({
        status: 200,
        message: "No Error",
        error_type: "Success",
        data: "Data Inserted Successfully",
      });
    });
  } catch (error) {
    return await res?.status(400)?.json({
      status: 400,
      message: "Error Occured",
      error_type: "Error",
      data: error?.message,
    });
  }
};


const updateData = async (req, res) => {
  
    try {
      const q = "UPDATE `admin` SET `aname`=?,`aemail`=?,`apass`=?,`acontact`=?,`agender`=?,`aimg`=? WHERE aid=?";
      const values = [
        req?.body?.aname,
      req?.body?.aemail,
      req?.body?.apass,
      req?.body?.acontact,
      req?.body?.agender,
      req?.file?.filename,
      ];
      db.query(q, [...values, req?.params?.id], async (err, data) => {
        if (err) {
          return await res?.status(400)?.json({
            status: 400,
            message: "Error Occured",
            error_type: "Error",
            data: err.message,
          });
        }
        return await res?.status(200)?.json({
          status: 200,
          message: "No Error",
          error_type: "Success",
          data: "Data Updated Successfully",
        });
      });
    } catch (error) {
      return await res?.status(400)?.json({
        status: 400,
        message: "Error Occured",
        error_type: "Error",
        data: error?.message,
      });
    }
  };

  const deleteData = async (req, res) => {
  
    try {
      const q = "DELETE FROM `admin` WHERE aid=?";
      db.query(q, req?.params?.id, async (err, data) => {
        if (err) {
          return await res?.status(400)?.json({
            status: 400,
            message: "Error Occured",
            error_type: "Error",
            data: err.message,
          });
        }
        return await res?.status(200)?.json({
          status: 200,
          message: "No Error",
          error_type: "Success",
          data: "Data Deleted Successfully",
        });
      });
    } catch (error) {
      return await res?.status(400)?.json({
        status: 400,
        message: "Error Occured",
        error_type: "Error",
        data: error?.message,
      });
    }
  };
  


  module.exports = { getData, getData1, insertData, updateData, deleteData };
