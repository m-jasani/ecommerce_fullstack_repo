`use client`
import axios from "axios";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Order(){
     const router = useRouter();
        const { uid } = router.query;
        const amount=localStorage.getItem('amount');
  
        const[product,setProduct]=useState([]);
     
    

        const getProduct = async () => {
          try {
            const res = await axios.get(
              `http://localhost:1000/ecomm-backend/displayorder/${uid}`
            );
            setProduct(res?.data?.data);
          } catch (error) {
            console.log(error);
          }
        };

       
      

        useEffect(() => {
                           getProduct();
                          
                            }, []);

    return(
    <div>
      
      <p className="font-bold text-black text-3xl py-4">ORDER</p>

        <table className="table-auto w-full text-left border-collapse mt-10">
            <thead className="bg-black text-white">
              <tr >
                <td className="px-4 py-2 border border-gray-300">#</td>
                <td className="px-4 py-2 border border-gray-300">product name</td>
                <td className="px-4 py-2 border border-gray-300">product price</td>
              </tr>
            </thead>
            <tbody>
      {product?.map((item,key)=>(
        
          <tr key={key}>
          <td className="px-4 py-2 border border-gray-300 space-x-2">
                            {++key}
                        </td>
          <td className="px-4 py-2 border border-gray-300 space-x-2">{item.pname}</td>
          <td className="px-4 py-2 border border-gray-300 space-x-2">{item.pprice}</td>
          </tr>
          
      ))}
      </tbody>
      </table>
      <lable className=" py-2 ">total amount  :</lable>
      <span>{`${amount}`}</span>
      </div>
    
    )
  }
      