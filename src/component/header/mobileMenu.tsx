"use client";
import { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { RxCross2 } from "react-icons/rx";
import { FaBars } from "react-icons/fa";
import { BsCheck } from "react-icons/bs";
export default function NavigationMobileMenu() {
  const [dropdownlanguage, setDropdownlanguage] = useState<boolean>(false);
  const openlanguage = () => {
    setDropdownlanguage((prev) => !prev);
    setMenu(false);
  };
  
  const [selectlang, setSelectlang] = useState<string>("EG English");
  const setlang = (lang: string) => {
    setSelectlang(lang);
    setDropdownlanguage(false);
  };

  const [menu, setMenu] = useState<boolean>(false);
  const openMenu = () => {
    setMenu((prev) => !prev);
    setDropdownlanguage(false);
  };

  return (
    <>
      <div className=" bg-white z-1000 md:hidden top-0 left-0 right-0 shadow w-full fixed max-h-screen overflow-y-auto">{/*fixed p-5 bg-white top-0 right-0 w-full z-1000 md:hidden flex */}
        <div className="p-5 w-full">
          <div className="flex items-center justify-between w-full ">
            <div className=" flex justify-start">
              <h1 className="font-bold text-2xl">HelloTalk</h1>
            </div>
            <div className=" flex justify-center">
              <h1 onClick={openMenu}>{menu ? <RxCross2 /> : <FaBars />}</h1>
            </div>
            <div className="flex justify-end">
              <h1 onClick={openlanguage}>{selectlang}
                <span>
                    <SlArrowDown
                      className={`inline size-2 ml-1.5 transition-transform duration-300 ${
                        dropdownlanguage ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </span>
              </h1>
            </div>
          </div>
          {dropdownlanguage && (
            <div className="bg-white border-2 px-3 py-1 rounded-lg mt-5">
              <ul className="grid grid-cols-2 gap-5">
                <li
                  className={`flex justify-between items-center ${selectlang==="HN Hindi"?"text-black":"text-gray-400"} `}
                  onClick={() => setlang("HN Hindi")}
                >
                  HN Hindi <BsCheck className={``} />
                </li>
                <li
                  className={`flex justify-between items-center ${selectlang==="EG English"?"text-black":"text-gray-400"} `}
                  onClick={() => setlang("EG English")}
                >
                  EG English <BsCheck className={``} />
                </li>
                <li
                  className={`flex justify-between items-center ${selectlang==="SP Spanish"?"text-black":"text-gray-400"} `}
                  onClick={() => setlang("SP Spanish")}
                >
                SP Spanish <BsCheck className={``} />
                </li>
                <li
                  className={`flex justify-between items-center ${selectlang==="FR French"?"text-black":"text-gray-400"} `}
                  onClick={() => setlang("FR French")}
                >
                  FR French <BsCheck className={``} />
                </li>
                <li
                  className={`flex justify-between items-center ${selectlang==="GR German"?"text-black":"text-gray-400"} `}
                  onClick={() => setlang("GR German ")}
                >
                  GR German <BsCheck className={``} />
                </li>
                <li
                  className={`flex justify-between items-center ${selectlang==="JP Japanese"?"text-black":"text-gray-400"} `}
                  onClick={() => setlang("JP Japanese")}
                >
                  JP Japanese <BsCheck className={``} />
                </li>
                <li
                  className={`flex justify-between items-center ${selectlang==="KR Korean"?"text-black":"text-gray-400"} `}
                  onClick={() => setlang("KR Korean")}
                >
                  KR Korean <BsCheck className={``} />
                </li>
                <li
                  className={`flex justify-between items-center ${selectlang==="AR Arabic"?"text-black":"text-gray-400"} `}
                  onClick={() => setlang("AR Arabic")}
                >
                  AR Arabic <BsCheck className={``} />
                </li>
                <li
                  className={`flex justify-between items-center ${selectlang==="CH China"?"text-black":"text-gray-400"} `}
                  onClick={() => setlang("CH China")}
                >
                  CH China <BsCheck className={``} />
                </li>
                <li
                  className={`flex justify-between items-center ${selectlang==="RU Russia"?"text-black":"text-gray-400"} `}
                  onClick={() => setlang("RU Russia")}
                >
                  RU Russia <BsCheck className={``} />
                </li>
              </ul>
            </div>
          )}
          {menu && (
            <div className="mt-5 z-1000 p-1">
              <div>
                <h1 className="font-bold mb-4">All Features</h1>
                <ul className="flex flex-col gap-3.5 ml-2">
                  <li>
                    {" "}
                    <a href="">Chat & Messaging</a>
                  </li>
                  <li>
                    {" "}
                    <a href="">Voice Rooms</a>
                  </li>
                  <li>
                    {" "}
                    <a href="">Live Streming</a>
                  </li>
                  <li>
                    {" "}
                    <a href="">Moments</a>
                  </li>
                  <li>
                    {" "}
                    <a href="">Language Exchange</a>
                  </li>
                  <li>
                    {" "}
                    <a href="">Transiation Tools</a>
                  </li>
                  <li>
                    {" "}
                    <a href="">Immevresing Learning</a>
                  </li>
                  <li>
                    {" "}
                    <a href="">Certified Theacher</a>
                  </li>
                </ul>
              </div>
              <div className="mt-5.5">
                <h1 className="font-bold mb-4">Discover</h1>
                <ul className="flex flex-col gap-3.5 ml-2">
                  <li>
                    <a href="">Find Partners</a>
                  </li>
                  <li>
                    <a href="">Moment</a>
                  </li>
                  <li>
                    <a href="">Topics</a>
                  </li>
                </ul>
              </div>
              <div className="font-bold ml-2 text-lg mt-5.5 mb-2">
                <a href="">About HellloTalk</a>
              </div>
              <div className="font-bold ml-2 text-lg">
                <a href="">HelloTalk for Business</a>
              </div>
              <hr className="mt-5" />
              <div className="border-2 w-full text-center py-1 rounded-md mt-3">
                <a href="" className="text-center py-6">
                  Download
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    
    </>
  );
}


