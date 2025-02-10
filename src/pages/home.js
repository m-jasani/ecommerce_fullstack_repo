
"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Link from 'next/link';
import { useRouter } from "next/router";

export default function Home() {
    // const router = useRouter();
    // const { id } = router.query;
    let id;
    useEffect(()=>{
   id = localStorage.getItem('uid');

},[])

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
      <>
            <nav className="bg-gray-800 p-4">
              <ul className="flex space-x-4">
                {/* <li>
                  <Link href="/" legacyBehavior>
                    <a className="text-white hover:text-gray-400">Home</a>
                  </Link>
                </li> */}
                <li>
                  <Link href={`/cart?uid=${id}`} legacyBehavior>
                    <a className="text-white hover:text-gray-400">Cart</a>
                  </Link>
                </li>
                <li>
                  <Link href={`/wishlist?uid=${id}`} legacyBehavior>
                    <a className="text-white hover:text-gray-400">Wishlist</a>
                  </Link>
                </li>
                <li>
                  <Link href={`/order?uid=${id}`} legacyBehavior>
                    <a className="text-white hover:text-gray-400">Order</a>
                  </Link>
                </li>
                <li>
                  <Link href={`/profile?uid=${id}`} legacyBehavior>
                    <a className="text-white hover:text-gray-400">Profile</a>
                  </Link>
                </li>
              </ul>
            </nav>



            <div>
      
     
      
      <div>
        <p className="font-bold text-black text-3xl py-4">CATEGORIES</p>

        <div className="flex flex-wrap">
          {category?.map((item, key) => (
            <div key={key} className="border-2 border-black m-4 p-4">
              <img src={`http://localhost:1000/upload/${item.cimg}`}></img>
              <p className="text-xl">{item.cname}</p>
              <button className="bg-blue-500 text-white p-2 rounded"><Link href={`/product?cname=${item.cname}&uid=${id}`}>Explore</Link></button>
            </div>
          ))}
        </div>
      </div>
    </div>
         </>
  
    )
}