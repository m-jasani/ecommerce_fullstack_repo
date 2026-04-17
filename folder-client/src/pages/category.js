"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import Link from "next/link";




export default function Category() {
  const [category, setCategory] = useState([]);

  const getdata = async () => {
    try {
      const res = await axios.get(
        "http://localhost:1000/ecomm-backend/category"
      );
      setCategory(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div>
      
     
      
      <div>
        <p className="font-bold text-black text-3xl py-4">CATEGORIES</p>

        <div className="flex flex-wrap">
          {category?.map((item, key) => (
            <div key={key} className="border-2 border-black m-4 p-4 ">
              <image className="size-32" src={`http://localhost:1000/upload/${item.cimg}`} ></image>
              <p className="text-xl">{item.cname}</p>
              <button className="bg-blue-500 text-white p-2 rounded"><Link href={`/product/${item.cname}/${id}`}>Explore</Link></button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
