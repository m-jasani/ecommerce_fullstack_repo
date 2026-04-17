import React, { useEffect, useState } from "react";
import axios from "axios";
// import {useNavigate, useParams } from "react-router";
import { useRouter } from "next/router";

export default function signup() {
  const router = useRouter();

  const [uname, setName] = useState("");
  const [uemail, setEmail] = useState("");
  const [upass, setPass] = useState("");
  const [ucontact, setContact] = useState("");
  const [uadd, setAdd] = useState("");
  const [uimg, setImg] = useState(null);
  const [ugender, setGender] = useState("");

  const btnSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("uname", uname);
    formData.append("uemail", uemail);
    formData.append("upass", upass);
    formData.append("ucontact", ucontact);
    formData.append("uadd", uadd);
    formData.append("uimg", uimg);
    formData.append("ugender", ugender);

    let res;
    try {
       res = await axios.post("http://localhost:1000/ecomm-backend/user", formData);
      console.log(res);
    } catch (error) {
      console.log(error);
    }

    if (res?.status === 200) {
      alert(res?.data?.data);
      router.push("/home");
    }
  };


  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div className="w-1/3 border border-black p-4">
          <p className="text-3xl font-semibold">Signup Form</p>
          <input
           onChange={(e) => setName(e.target.value)}
            type="text"
            className="border border-black w-full p-2 mt-2"
            placeholder="Enter Name"
          />
          <input
           onChange={(e) => setEmail(e.target.value)}
            type="text"
            className="border border-black w-full p-2 mt-2"
            placeholder="Enter Email"
          />
          <input
           onChange={(e) => setPass(e.target.value)}
            type="password"
            className="border border-black w-full p-2 mt-2"
            placeholder="Enter Password"
          />
          <input
           onChange={(e) => setContact(e.target.value)}
            type="text"
            className="border border-black w-full p-2 mt-2"
            placeholder="Enter contact"
          />
          <input
           onChange={(e) => setAdd(e.target.value)}
            type="text"
            className="border border-black w-full p-2 mt-2"
            placeholder="Enter address"
          />
<div>
      
<input
            onChange={(e) => setImg(e.target.files[0])}
            type="file"
            id="password"
            class="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />



{uimg && (
                        <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium">Preview:</label>
                        <img
                          src={typeof uimg === "string" ? `http://localhost:1000/ecomm-backend/user/${uimg}`  : URL.createObjectURL(uimg)}
                          alt="Uploaded Preview"
                          className="w-32 h-32 object-cover rounded"
                        />
                      </div>
          )}

</div>



          <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        
          </label>
          <div className="flex justify-around gap-4 bg-[#f9fafb] border-2 rounded-md py-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="guide"
                value="1"
                onChange={(e) => setGender(e.target.value)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
              />
              <span className="ml-2 text-gray-900 dark:text-white">Female</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="guide"
                value="0"
                onChange={(e) => setGender(e.target.value)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
              />
              <span className="ml-2 text-gray-900 dark:text-white">Male</span>
            </label>
          </div>
        </div>
          <button onClick={btnSubmit} className="w-full bg-black text-white p-2 mt-2">
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}