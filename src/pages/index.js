

"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";;
import Link from "next/link";


export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
 

  const [adminData, setAdminData] = useState([]);

  const getdata = async () => {
    try {
      const res = await axios.get("http://localhost:1000/ecomm-backend/admin");
      setAdminData(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

//   {adminData.map((item, key) =>{
//     if (item.aemail == email && item.apass == pass) {
//       alert(`Login Success`);
//       router.push(`/home/${item.aid}`);
//     } else {
//       alert("Login Failed");
//       router.push("/");
//     }
//   })
// }
  
  // const onLogin = async (email, pass) => {
  //   try {
  //     if (adminData[0].aemail == email && adminData[0].apass == pass) {
        
  //       alert(`Login Success`);
  //       router.push(`/home${adminData[0].aid}`);
  //     } else {
  //       alert("Login Failed");
  //       router.push("/");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  let aid;
  let login;
  const onLogin = async (email, pass) => {
    try{
      {adminData.map((item, key) =>{
        if (item.aemail == email && item.apass == pass) {
          login = true;
          aid= item?.aid;
        }
      })}

      if(login){
        alert(`Login Success`);
        // router.push(`/home/${adminData[0].aid}`);
        localStorage.setItem('aid', aid);
        router.push(`/home`);

      }else{
        alert("Login Failed");
        router.push("/");
      }

    }catch(error){
      console.log(error);
    }
  }

  return (
    <div>
     <div>
   
      <div className="flex justify-center items-center h-screen">
        <div className="w-1/3 border border-black p-4">
          <p className="text-3xl font-semibold">Admin Login</p>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            className="border border-black w-full p-2 mt-2"
            placeholder="Enter Email"
          />
          <input
            type="password"
            onChange={(e) => setPass(e.target.value)}
            className="border border-black w-full p-2 mt-2"
            placeholder="Enter Password"
          />
          <button
            onClick={() => {
              onLogin(email, pass);
            }}
            className="bg-blue-500 text-white p-2 rounded w-full mt-4"
          >
            Login
          </button>
          <p
            className=" text-black p-2  w-full mt-4"
          >
           if you don't have an account ,please<button className="bg-blue-500 text-white p-2 rounded  mt-4"><Link href="/signup"> signup</Link></button> 
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}
