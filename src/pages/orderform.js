"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
// import {useNavigate, useParams } from "react-router";
import { useRouter } from "next/router";


export default function Orderform() {

    const router = useRouter();
const { order } = router.query;

  const [uid, setUid] = useState();
  // const [cartid, setCartid] = useState();
  const [oamt, setOamt] = useState();
  const [odate, setOdate] = useState("");
 




  const getData = async () => {
    try {
      const res = await axios.get(
        `http://localhost:1000/ecomm-backend/order/${order}`
      );
      console.log(res?.data?.data);
      setUid(res?.data?.data?.uid);
      // setCartid(res?.data?.data?.cartid);
      setOamt(res?.data?.data?.oamt);
      setOdate(res?.data?.data?.odate);

    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    console.log(order);
    if (order) {
      getData();
    }
  }, [order]);


  const btnSubmit = async (e) => {
    e.preventDefault();
    try {

      let res;
      if(order) {
         res = await axios.put(`http://localhost:1000/ecomm-backend/order/${order}`, 
         {uid,oamt,odate}
        );
      } else {
         res = await axios.post("http://localhost:1000/ecomm-backend/order", 
            {uid,oamt,odate}
        );
      }
      if (res?.status === 200) {
        alert(res?.data?.data);
        // navigate("/student")
      }
      router.push("/order");
    } catch (error) {
      console.log("Erroroccured while inserting data...", error);
    }
  };


    return(
        <div>
        <div className="flex justify-center items-center h-screen">
          <div className="w-1/3 border border-black p-4">
            <p className="text-3xl font-semibold">Edit User Details</p>
            <input
             value={uid}
             onChange={(e) => setUid(e.target.value)}
              type="text"
              className="border border-black w-full p-2 mt-2"
              placeholder="user ID"
            />
            {/* <input
             value={cartid}
             onChange={(e) => setCartid(e.target.value)}
              type="text"
              className="border border-black w-full p-2 mt-2"
              placeholder="cart ID"
            /> */}
            <input
             value={oamt}
             onChange={(e) => setOamt(e.target.value)}
              type="text"
              className="border border-black w-full p-2 mt-2"
              placeholder="order amount"
            />
            
            <p className="mt-2">Order Date</p>
            <input
                value={odate}
             onChange={(e) => setOdate(e.target.value)}
              type="text"
              className="border border-black w-full p-2 mt-2"
              placeholder="order date"
            />
  <div>
        
  
  
  {/* {aimg && (
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium">Preview:</label>
              <img
                src={aimg?`http://localhost:1000/ecomm-backend/admin/${aimg} ` : URL.createObjectURL(aimg) }
                alt="Uploaded Preview"
                className="w-32 h-32 object-cover rounded"
              />
            </div>
          )} */}
  
  {/* {aimg && (
                        <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium">Preview:</label>
                        <img
                          src={typeof aimg === "string" ? `http://localhost:1000/ecomm-backend/admin/${aimg}`  : URL.createObjectURL(aimg)}
                          alt="Uploaded Preview"
                          className="w-32 h-32 object-cover rounded"
                        />
                      </div>
          )} */}
  
  </div>
  
  
  
         
            <button onClick={btnSubmit} className="w-full bg-black text-white p-2 mt-2">
              Submit
            </button>
          </div>
        </div>
      </div>
    )
}