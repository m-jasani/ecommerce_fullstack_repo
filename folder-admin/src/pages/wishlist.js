'use client'
import axios from "axios";
import React, { useEffect, useState } from "react";
import Link from "next/link";



export default function Wishlist() {

    const [wishlistData, setWishlistData] = useState([]);
    
    const getdata = async () => {
      try {
        const res = await axios.get("http://localhost:1000/ecomm-backend/wishlist");
        setWishlistData(res?.data?.data);
      } catch (error) {
        console.log(error);
      }
    };

    useEffect(() => {
      getdata();
    }, []);


    const deleteData=async(id)=>{
        const res=await axios.delete("http://localhost:1000/ecomm-backend/wishlist/"+id);
        alert(res?.data?.data);
        getdata()
      
    }

    return (
        <div>

<table className="table-auto w-full text-left border-collapse mt-10">
            <thead className="bg-black text-white">
                <tr>
                  <th className="px-4 py-2 border border-gray-300">#</th>
                  <th className="px-4 py-2 border border-gray-300">UserID</th>
                  <th className="px-4 py-2 border border-gray-300">Product ID</th>
                  <th className="px-4 py-2 border border-gray-300">Action</th>
                </tr>
              </thead>
              <tbody>

              {wishlistData?.map((item,key)=>(
                    <tr key={key}>
                        <td className="px-4 py-2 border border-gray-300 space-x-2">
                            {++key}
                        </td>
                        <td className="px-4 py-2 border border-gray-300 space-x-2">
                            {item?.uid}
                        </td>
                        <td className="px-4 py-2 border border-gray-300 space-x-2">
                            {item?.pid}
                        </td>
                
                        <td className="px-4 py-2 border border-gray-300 space-x-2">
                       <Link href={`/wishlistform?wishlist=${item?.wid}`} className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
                        Edit
                      </Link>
                      <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600" onClick={()=>{deleteData(item.wid)}}>
                        Delete
                      </button> 

                    </td>

                    </tr>
                ))}
              </tbody>
              </table>

                        
              <button className=" mt-3 bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"><Link href={"/wishlistform"}>Add to  Wishlist</Link></button>
              <button className="ml-3 mt-3 bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"><Link href={"/home"}>HOME</Link></button>
                       
        
        </div>
    );
}