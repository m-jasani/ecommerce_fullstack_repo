const db = require("../helpers/db.js");






const insertData = async (req, res) => {
  
  try {
    const q = "INSERT INTO `order`(`uid`,`oamt`) VALUES (?)";
    const values = [
      req?.body?.uid,
      // req?.body?.cartid,
      req?.body?.oamt,
    //   req?.body?.odate,
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


  


  module.exports = { insertData };
