
import axios from "axios";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Order from "./order";



export default function Home(){
      const router = useRouter();
    const { uid } = router.query;

        const [cart, setCart] = useState([]);
        var oamt=0;
       

    const getdata = async () => {
        try {
          const res = await axios.get(
            `http://localhost:1000/ecomm-backend/usercart/${uid}`
          );
          setCart(res?.data?.data);
        } catch (error) {
          console.log(error);
        }
      };

    // const addOrder = async (oamt) => {
    //     try {
    //       const res = await axios.post(
    //         `http://localhost:1000/ecomm-backend/placeorder`,
    //         {uid,oamt}
    //       );
    //       setCart(res?.data?.data);
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   };

    const addOrder = async () => {
      try {
        const res = await axios.post(
          `http://localhost:1000/ecomm-backend/placeorder`,
          {uid,oamt}
        );
        if (res?.status === 200) {
          console.log(res?.data?.data);
          alert("Order sucessfully");
        }  
      
      } catch (error) {
        console.log(error);
      }
    };

      
            useEffect(() => {
                getdata();
              }, []);
              return (
  
                <div>

                    
                  {/* {console.log(uid)} */}
                  {/* <Nav /> */}
                  <div>
                    <p className="font-bold text-black text-3xl py-4">CART ITEMS</p>
            
                    <div className="flex flex-wrap justify-center ">
                      {cart?.map((item, key) => (
                        <div key={key} className="border-2 border-black m-4 p-4 w-1/4">
                          <img src={`http://localhost:1000/upload/${item.pimg}`} ></img>
                          <p className="text-xl font-semibold">{item.pname}</p>
                          <p className="text-xl">{item.pprice}<span className="text-sm px-2">M.R.P.</span></p>
                          <span className="text-xl w-16"><span className="text-lg  ">Details:</span>{item.pdetail}</span>
                          
                          <p className="hidden">{oamt=oamt+item.pprice}</p>
                          {/* {setAmt(amt+item.pprice)} */}
                          {/* <p>{uid}</p> */}
                          {/* <button onClick={()=>{addCart(item.pid)}} className="mr-3 bg-blue-500 text-white p-2 rounded mt-4">Add to Cart</button> */}
                          {/* <button onClick={()=>{addWishlist(item.pid)}} className="bg-blue-500 text-white p-2 rounded mt-4">Add to Wishlist</button> */}
            
                        </div>
                      ))}

                    </div>

                      <p className="ml-60 font-bold text-black text-2xl py-4">total amount={oamt}</p> 
                      {localStorage.setItem(`amount`,oamt)}
                        {/* <button className="ml-60 bg-blue-500 text-white p-2 rounded mt-4"><Link href={`/order?uid=${uid}&oamt=${oamt}`}>place Order</Link></button> */}
                        <button onClick={()=>{addOrder()}} className="ml-60 bg-blue-500 text-white p-2 rounded mt-4">place Order</button>
                        {/* <label className="ml-60 font-bold text-black  py-4 mr-5">Enter order Date</label> */}
                        {/* <input type="date"  onChange={(e)=>{setOdate(e.target.value)}} className="border border-4   font-bold text-black"/> */}
                  </div>
                </div>
              );
    
}