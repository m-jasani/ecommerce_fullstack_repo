

"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";;
import Link from "next/link";



export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  // const token=localStorage.get('token');
  const [userData, setUserData] = useState([]);

  const getdata = async () => {
    try {
      const res = await axios.get("http://localhost:1000/ecomm-backend/user");
      setUserData(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  
 
  let uid;
  let login;
  const onLogin = async (email, pass) => {
    try{
      {userData.map((item, key) =>{
        if (item.uemail == email && item.upass == pass) {
          login = true;
          uid= item?.uid;
        }
      })}

      if(login){
        alert(`Login Success`);
        // router.push(`/home/${userData[0].uid}`);
          localStorage.setItem('uid', uid);

        router.push(`/home`);
      }else{
        alert("Login Failed");
        router.push("/");
      }

    }catch(error){
      console.log(error);
    }
  }




  // const onLogin = async (e) => {
  //   e.preventDefault();
  //   try {
  //     let res;
  //     { 
  //       res = await axios.get(`http://localhost:1000/ecomm-backend/login/?uemail=${email}&upass=${pass}`);
  //     }
  //     if (res?.status === 200) {
  //       console.log(res?.data);
  //       // setData(res?.data?.)
  //       localStorage.setItem('token',res?.data?.token)
        
 
        
  //     }
      
  //     // console.log(localStorage.getItem)
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // };

  

  return (
    <div>
     <div>
   
      <div className="flex justify-center items-center h-screen">
        <div className="w-1/3 border border-black p-4">
          <p className="text-3xl font-semibold">User Login</p>
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
          {/* <button
            onClick={(e) => {
              onLogin(e);
            }}
            className="bg-blue-500 text-white p-2 rounded w-full mt-4"
          >
            Login
          </button> */}
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

