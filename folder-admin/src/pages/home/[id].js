import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Home() { 
    const router = useRouter();
const { id } = router.query;

    return (
        <>
        <div>
          <button className="bg-blue-500 text-white p-2 rounded mt-4 ms-3"><Link href={`/profile/${id}`}>Edite profile</Link></button>  
        </div>

        <p className="font-bold text-black text-3xl py-4">Manage </p>

        <button className="bg-blue-500 text-white p-2 rounded mt-4 ms-3"><Link href={`/admin`}>Manage Admin</Link></button>
        <button className="bg-blue-500 text-white p-2 rounded mt-4 ms-3"><Link href={`/user`}>Manage User</Link></button>
        <button className="bg-blue-500 text-white p-2 rounded mt-4 ms-3"><Link href={`/category`}>Manage Categories</Link></button>
        <button className="bg-blue-500 text-white p-2 rounded mt-4 ms-3"><Link href={`/product`}>Manage Product</Link></button>
        <button className="bg-blue-500 text-white p-2 rounded mt-4 ms-3"><Link href={`/order`}>Manage Order</Link></button>
        <button className="bg-blue-500 text-white p-2 rounded mt-4 ms-3"><Link href={`/cart`}>Manage Cart</Link></button>
        <button className="bg-blue-500 text-white p-2 rounded mt-4 ms-3"><Link href={`/wishlist`}>Manage Wishlist</Link></button>
        </>
    );
  }