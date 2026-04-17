"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
// import {useNavigate, useParams } from "react-router";
import { useRouter } from "next/router";


export default function Orderform() {

    const router = useRouter();
const { wishlist } = router.query;

  const [uid, setUid] = useState();
  const [pid, setPid] = useState();

 




  const getData = async () => {
    try {
      const res = await axios.get(
        `http://localhost:1000/ecomm-backend/wishlist/${wishlist}`
      );
      console.log(res?.data?.data);
      setUid(res?.data?.data?.uid);
      setPid(res?.data?.data?.pid);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    console.log(wishlist);
    if (wishlist) {
      getData();
    }
  }, [wishlist]);


  const btnSubmit = async (e) => {
    e.preventDefault();
    try {

      let res;
      if(wishlist) {
         res = await axios.put(`http://localhost:1000/ecomm-backend/wishlist/${wishlist}`, 
         {uid,pid}
        );
      } else {
         res = await axios.post("http://localhost:1000/ecomm-backend/wishlist", 
            {uid,pid}
        );
      }
      if (res?.status === 200) {
        alert(res?.data?.data);
        // navigate("/student")
      }
      router.push("/wishlist");
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
            <input
             value={pid}
             onChange={(e) => setPid(e.target.value)}
              type="text"
              className="border border-black w-full p-2 mt-2"
              placeholder="product ID"
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