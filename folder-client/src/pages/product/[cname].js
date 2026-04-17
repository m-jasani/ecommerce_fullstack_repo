"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";


import Nav from "../../component/nav";

export default function Home() {
  const router = useRouter();
const { cname } = router.query;

    const [product, setProduct] = useState([]);
    const [pid, setPid] = useState(0);
    
    const getdata = async () => {
        try {
          const res = await axios.get(
            `http://localhost:1000/ecomm-backend/productpercat/${cname}`
          );
          setProduct(res?.data?.data);
        } catch (error) {
          console.log(error);
        }
      };

      useEffect(() => {
          getdata();
        }, []);
      
return (
    <div>
      <Nav />
      <div>
        <p className="font-bold text-black text-3xl py-4">PRODUCTS</p>

        <div className="flex flex-wrap justify-center ">
          {product?.map((item, key) => (
            <div key={key} className="border-2 border-black m-4 p-4 w-1/4">
              <img src={`http://localhost:1000/upload/${item.pimg}`} ></img>
              <p className="text-xl font-semibold">{item.pname}</p>
              <p className="text-xl">{item.pprice}<span className="text-sm px-2">M.R.P.</span></p>
              <span className="text-xl w-16"><span className="text-lg  ">Details:</span>{item.pdetail}</span>
              <hr></hr>
              <button onClick={()=>{setPid(item.pid)}} className="bg-blue-500 text-white p-2 rounded mt-4">Add to Cart</button>
              <button className="bg-blue-500 text-white p-2 rounded mt-4 ms-3"><Link href={"/"}>Add to wishlist</Link></button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

    
}