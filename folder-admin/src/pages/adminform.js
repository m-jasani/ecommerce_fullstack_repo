"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
// import {useNavigate, useParams } from "react-router";
import { useRouter } from "next/router";


export default function Adminform() {

    const router = useRouter();
const { admin } = router.query;

  const [aname, setName] = useState("");
  const [aemail, setEmail] = useState("");
  const [acontact, setContact] = useState("");
  const [apass, setPass] = useState("");
  const [aimg, setImg] = useState(null);
  const [agender, setGender] = useState("");



  const getAdmin = async () => {
    try {
      const res = await axios.get(
        `http://localhost:1000/ecomm-backend/admin/${admin}`
      );
      console.log(res?.data?.data);
      setName(res?.data?.data?.aname);
      setEmail(res?.data?.data?.aemail);
      setContact(res?.data?.data?.acontact);
      setPass(res?.data?.data?.apass);
      setImg(res?.data?.data?.aimg);
      setImg(res?.data?.data?.agender);
      // setStudentData(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    console.log(admin);
    if (admin) {
      getAdmin();
    }
  }, [admin]);


  const btnSubmit = async (e) => {
    e.preventDefault();
    try {

      const formData=new FormData();
      formData.append("aname",aname);
      formData.append("aemail",aemail);
      formData.append("acontact",acontact);
      formData.append("apass",apass);
      formData.append("aimg",aimg);
      formData.append("agender",agender);

      let res;
      if(admin) {
         res = await axios.put(`http://localhost:1000/ecomm-backend/admin/${admin}`, 
         formData
        );
      } else {
         res = await axios.post("http://localhost:1000/ecomm-backend/admin", 
         formData
        );
      }
      if (res?.status === 200) {
        alert(res?.data?.data);
        // navigate("/student")
      }
      router.push("/admin");
    } catch (error) {
      console.log("Erroroccured while inserting data...", error);
    }
  };


    return(
        <div>
        <div className="flex justify-center items-center h-screen">
          <div className="w-1/3 border border-black p-4">
            <p className="text-3xl font-semibold">Edit Admin Details</p>
            <input
             value={aname}
             onChange={(e) => setName(e.target.value)}
              type="text"
              className="border border-black w-full p-2 mt-2"
              placeholder="Enter Name"
            />
            <input
             value={aemail}
             onChange={(e) => setEmail(e.target.value)}
              type="text"
              className="border border-black w-full p-2 mt-2"
              placeholder="Enter Email"
            />
            <input
             value={apass}
             onChange={(e) => setPass(e.target.value)}
              type="password"
              className="border border-black w-full p-2 mt-2"
              placeholder="Enter password"
            />
            
            <input
                value={acontact}
             onChange={(e) => setContact(e.target.value)}
              type="text"
              className="border border-black w-full p-2 mt-2"
              placeholder="Enter contact"
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
  
  
  
            <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            
            </label>
            <div className="flex justify-around gap-4 bg-[#f9fafb] border-2 rounded-md py-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="guide"
                  value="1"
                  onChange={(e) => setGender(e.target.value)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                  checked={(agender == 1)?true:false}
                />
                <span className="ml-2 text-gray-900 dark:text-white">Female</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="guide"
                  value="0"
                  onChange={(e) => setGender(e.target.value)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                />
                <span className="ml-2 text-gray-900 dark:text-white">Male</span>
              </label>
            </div>
          </div>
            <button onClick={btnSubmit} className="w-full bg-black text-white p-2 mt-2">
              Submit
            </button>
          </div>
        </div>
      </div>
    )
}