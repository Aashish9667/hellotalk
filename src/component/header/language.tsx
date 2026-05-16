"use client"
import { SlArrowDown } from "react-icons/sl";
import { BsCheck } from "react-icons/bs";
import { useState } from "react";
import { rotate } from "three/src/nodes/utils/RotateNode.js";

export default function Language() {
  const [open, setOpen] = useState<boolean>(false);
  const openlang = () => {
    setOpen((prev) => !prev);
  };

  const[langchoose,setLangchoose]=useState<string>("Hindi")
  const setlang= (lang:string)=>{
    setLangchoose(lang)
    setOpen(false)
  }

  return (
    <div className="mt-20 mb-200">
      <h1 className="text-xl font-bold text-center">hello I'M Aashish Kumar</h1>
      <p className="text-md font-light text-center">
        I'm here to practsing of logic of language change{" "}
      </p>
      <div>
        <h1 onClick={openlang} className="cursor-pointer flex">US {langchoose} <span className={`flex justify-center items-center `}><SlArrowDown size={10} className={`ml-3 ${open?"rotate-180":"rotate-none"}`}/></span></h1>
        {open && (
          <div>
            <ul className="">
              <li className="flex font-light" onClick={()=>setlang("hindi")}>
                Hn Hindi{" "}
                <span className="flex justify-center items-center">
                  <BsCheck />
                </span>
              </li>
              <li className="flex font-light" onClick={()=>setlang("english")}>
                Eg English{" "}
                <span className="flex justify-center items-center">
                  <BsCheck />
                </span>
              </li>
              <li className="flex font-light" onClick={()=>setlang("punjabi")}>
                Pb Punjabi{" "}
                <span className="flex justify-center items-center">
                  <BsCheck />
                </span>
              </li>
              <li className="flex font-light" onClick={()=>setlang("spanice")}>
                Sp Spanice{" "}
                <span className="flex justify-center items-center">
                  <BsCheck />
                </span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
