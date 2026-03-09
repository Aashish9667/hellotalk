"use client";

import { useState } from "react";

export default function LanguageDropdown() {
    const[show,setShow]=useState<boolean>(false)
  return (
    <div className="m-20">
      <div>
        <h1 onClick={()=>setShow((prev)=>!prev)} className="cursor-pointer">{show ?"x" : "="}</h1>
        {show &&(
            <div>
        <ul className="space-y-0.5">
            <li className="font-bold mb-1"> 
                All features
            </li>
            <li>home</li>
            <li>about</li>
            <li>advance feature</li>
            <li className="mb-2.5">countact us</li>
            <li className="font-bold mb-1">About firm</li>
            <li>home</li>
            <li>about</li>
            <li>advance feature</li>
            <li>countact us</li>
        </ul>
        <button className="font-bold border border-gray-200 bg-gray-300 px-1 mt-3">DOWNLOAD</button>
        </div>
        )}
        </div>
      </div>
  );
}
