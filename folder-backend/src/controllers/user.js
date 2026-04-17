const db = require("../helpers/db.js");


const getData=async(req,res)=>{
    try{

        const q="SELECT * FROM `user`";
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

        const q="SELECT * FROM `user` WHERE uid=?";
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
    const q = "INSERT INTO `user`(`uname`, `uemail`, `upass`, `ucontact`, `uadd`,  `ugender`, `uimg`) VALUES (?)";
    const values = [
      req?.body?.uname,
      req?.body?.uemail,
      req?.body?.upass,
      req?.body?.ucontact,
      req?.body?.uadd,
      req?.body?.ugender,
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
      const q = "UPDATE `user` SET `uname`=?,`uemail`=?,`upass`=?,`ucontact`=?,`uadd`=?,`ugender`=?,`uimg`=? WHERE uid=?";
      const values = [
        req?.body?.uname,
      req?.body?.uemail,
      req?.body?.upass,
      req?.body?.ucontact,
      req?.body?.uadd,
      req?.body?.ugender,
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
      const q = "DELETE FROM `user` WHERE uid=?";
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
