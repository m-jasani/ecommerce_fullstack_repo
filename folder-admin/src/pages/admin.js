'use client'
import axios from "axios";
import React, { useEffect, useState } from "react";
import Link from "next/link";



export default function Admin() {

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


    const deleteData=async(id)=>{
        const res=await axios.delete("http://localhost:1000/ecomm-backend/admin/"+id);
        alert(res?.data?.data);
        getdata()
      
    }

    return (
        <div>
            {/* <div>
                <p className="font-bold text-black text-3xl py-4">Admin Details</p>
                <div className="flex flex-wrap">
                    {adminData?.map((item, key) => (
                        <div key={key} className="border-2 border-black m-4 p-4">
                            <p className="text-xl">Admin ID: {item.aid}</p>
                            <p className="text-xl">Admin Name: {item.aname}</p>
                            <p className="text-xl">Admin Email: {item.aemail}</p>
                            <p className="text-xl">Admin Password: {item.apass}</p>
                        </div>
                    ))}
                </div>
            </div> */}

<table className="table-auto w-full text-left border-collapse mt-10">
            <thead className="bg-black text-white">
                <tr>
                  <th className="px-4 py-2 border border-gray-300">#</th>
                  <th className="px-4 py-2 border border-gray-300">Name</th>
                  <th className="px-4 py-2 border border-gray-300">Email</th>
                  <th className="px-4 py-2 border border-gray-300">contact</th>
                  <th className="px-4 py-2 border border-gray-300">gender</th>
                  <th className="px-4 py-2 border border-gray-300">Image</th>
                  <th className="px-4 py-2 border border-gray-300">Action</th>
                </tr>
              </thead>
              <tbody>

              {adminData?.map((item,key)=>(
                    <tr key={key}>
                        <td className="px-4 py-2 border border-gray-300 space-x-2">
                            {++key}
                        </td>
                        <td className="px-4 py-2 border border-gray-300 space-x-2">
                            {item?.aname}
                        </td>
                        <td className="px-4 py-2 border border-gray-300 space-x-2">
                            {item?.aemail}
                        </td>
                        <td className="px-4 py-2 border border-gray-300 space-x-2">
                            {item?.acontact}
                        </td>
                        <td className="px-4 py-2 border border-gray-300 space-x-2">
                            {(item?.agender==1)?"female":"male"}
                        </td>
                        <td className="px-4 py-2 border border-gray-300 space-x-2">
                            {/* {item?.aimg} */}
                                 <img src={`http://localhost:1000/upload/${item.aimg}`} className="size-20"></img>
                        </td>
                
                        <td className="px-4 py-2 border border-gray-300 space-x-2">
                       <Link href={`/adminform?admin=${item?.aid}`} className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
                        Edit
                      </Link>
                      <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600" onClick={()=>{deleteData(item.aid)}}>
                        Delete
                      </button> 

                    </td>

                    </tr>
                ))}
              </tbody>
              </table>
              <button className=" mt-3 bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"><Link href={"/adminform"}>Add Admin</Link></button>
              <button className="ml-3 mt-3 bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"><Link href={"/home"}>HOME</Link></button>
        </div>
    );
}