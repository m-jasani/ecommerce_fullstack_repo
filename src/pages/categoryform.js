"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
// import {useNavigate, useParams } from "react-router";
import { useRouter } from "next/router";


export default function Categoryform() {

    const router = useRouter();
const { category } = router.query;

  const [cname, setName] = useState("");
  const [pid, setPid] = useState();
  const [cimg, setImg] = useState(null);




  const getData = async () => {
    try {
      const res = await axios.get(
        `http://localhost:1000/ecomm-backend/category/${category}`
      );
      console.log(res?.data?.data);
      setName(res?.data?.data?.cname);
      setPid(res?.data?.data?.pid);
      setImg(res?.data?.data?.cimg);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    console.log(category);
    if (category) {
      getData();
    }
  }, [category]);


  const btnSubmit = async (e) => {
    e.preventDefault();
    try {

      const formData=new FormData();
      formData.append("cname",cname);
      formData.append("pid",pid);
      formData.append("cimg",cimg);


      let res;
      if(category) {
         res = await axios.put(`http://localhost:1000/ecomm-backend/category/${category}`, 
         formData
        );
      } else {
         res = await axios.post("http://localhost:1000/ecomm-backend/category", 
         formData
        );
      }
      if (res?.status === 200) {
        alert(res?.data?.data);
        // navigate("/student")
      }
      router.push("/category");
    } catch (error) {
      console.log("Erroroccured while inserting data...", error);
    }
  };


    return(
        <div>
        <div className="flex justify-center items-center h-screen">
          <div className="w-1/3 border border-black p-4">
            <p className="text-3xl font-semibold">Edit category Details</p>
            <input
             value={cname}
             onChange={(e) => setName(e.target.value)}
              type="text"
              className="border border-black w-full p-2 mt-2"
              placeholder="Category Name"
            />
            <input
             value={pid}
             onChange={(e) => setPid(e.target.value)}
              type="text"
              className="border border-black w-full p-2 mt-2"
              placeholder="Product id"
            />
           
            
  <div>
        
  <input
              onChange={(e) => setImg(e.target.files[0])}

              type="file"
              id="password"
              class=" mt-5 mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
  
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