"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
// import {useNavigate, useParams } from "react-router";
import { useRouter } from "next/router";


export default function Userform() {

    const router = useRouter();
const { product } = router.query;

  const [pname, setName] = useState("");
  const [pprice, setPrice] = useState("");
  const [cname, setCname] = useState("");
  const [pdetail, setDetail] = useState("");
  const [pimg, setImg] = useState(null);




  const getData = async () => {
    try {
      const res = await axios.get(
        `http://localhost:1000/ecomm-backend/product/${product}`
      );
      console.log(res?.data?.data);
      setName(res?.data?.data?.pname);
      setPrice(res?.data?.data?.pprice);
      setCname(res?.data?.data?.cname);
      setDetail(res?.data?.data?.pdetail);
      setImg(res?.data?.data?.pimg);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    console.log(product);
    if (product) {
      getData();
    }
  }, [product]);


  const btnSubmit = async (e) => {
    e.preventDefault();
    try {

      const formData=new FormData();
      formData.append("pname",pname);
      formData.append("pprice",pprice);
      formData.append("cname",cname);
      formData.append("pdetail",pdetail);
      formData.append("pimg",pimg);


      let res;
      if(product) {
         res = await axios.put(`http://localhost:1000/ecomm-backend/product/${product}`, 
         formData
        );
      } else {
         res = await axios.post("http://localhost:1000/ecomm-backend/product", 
         formData
        );
      }
      if (res?.status === 200) {
        alert(res?.data?.data);
        // navigate("/student")
      }
      router.push("/product");
    } catch (error) {
      console.log("Erroroccured while inserting data...", error);
    }
  };


    return(
        <div>
        <div className="flex justify-center items-center h-screen">
          <div className="w-1/3 border border-black p-4">
            <p className="text-3xl font-semibold">Product Details</p>
            <input
             value={pname}
             onChange={(e) => setName(e.target.value)}
              type="text"
              className="border border-black w-full p-2 mt-2"
              placeholder="Product Name"
            />
            <input
             value={pprice}
             onChange={(e) => setPrice(e.target.value)}
              type="text"
              className="border border-black w-full p-2 mt-2"
              placeholder="Enter price"
            />
            <input
             value={cname}
             onChange={(e) => setCname(e.target.value)}
              type="text"
              className="border border-black w-full p-2 mt-2"
              placeholder="Enter category name"
            />
            

            <input
                value={pdetail}
             onChange={(e) => setDetail(e.target.value)}
              type="text"
              className="border border-black w-full p-2 mt-2"
              placeholder="Enter details of product"
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