'use client'
import axios from "axios";
import React, { useEffect, useState } from "react";
import Link from "next/link";



export default function User() {

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


    const deleteData=async(id)=>{
        const res=await axios.delete("http://localhost:1000/ecomm-backend/user/"+id);
        alert(res?.data?.data);
        getdata()
      
    }

    return (
        <div>

<table className="table-auto w-full text-left border-collapse mt-10">
            <thead className="bg-black text-white">
                <tr>
                  <th className="px-4 py-2 border border-gray-300">#</th>
                  <th className="px-4 py-2 border border-gray-300">Name</th>
                  <th className="px-4 py-2 border border-gray-300">Email</th>
                  <th className="px-4 py-2 border border-gray-300">contact</th>
                  <th className="px-4 py-2 border border-gray-300">Address</th>
                  <th className="px-4 py-2 border border-gray-300">gender</th>
                  <th className="px-4 py-2 border border-gray-300">Image</th>
                  <th className="px-4 py-2 border border-gray-300">Action</th>
                </tr>
              </thead>
              <tbody>

              {userData?.map((item,key)=>(
                    <tr key={key}>
                        <td className="px-4 py-2 border border-gray-300 space-x-2">
                            {++key}
                        </td>
                        <td className="px-4 py-2 border border-gray-300 space-x-2">
                            {item?.uname}
                        </td>
                        <td className="px-4 py-2 border border-gray-300 space-x-2">
                            {item?.uemail}
                        </td>
                        <td className="px-4 py-2 border border-gray-300 space-x-2">
                            {item?.ucontact}
                        </td>
                        <td className="px-4 py-2 border border-gray-300 space-x-2">
                            {item?.uadd}
                        </td>
                        <td className="px-4 py-2 border border-gray-300 space-x-2">
                            {(item?.ugender==1)?"female":"male"}
                        </td>
                        <td className="px-4 py-2 border border-gray-300 space-x-2">
                                 <img src={`http://localhost:1000/upload/${item.uimg}`} className="size-20"></img>
                        </td>
                
                        <td className="px-4 py-2 border border-gray-300 space-x-2">
                       <Link href={`/userform?user=${item?.uid}`} className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
                        Edit
                      </Link>
                      <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600" onClick={()=>{deleteData(item.uid)}}>
                        Delete
                      </button> 

                    </td>

                    </tr>
                ))}
              </tbody>
              </table>

                        
              <button className=" mt-3 bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"><Link href={"/userform"}>Add User</Link></button>
                       
              <button className="ml-3 mt-3 bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"><Link href={"/home"}>HOME</Link></button>
        
        </div>
    );
}