"use client";
import { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { RxCross2 } from "react-icons/rx";
import { NavigationMenuDemo } from "@/component/logic/shadcnnavigation";
import { FaBars } from "react-icons/fa";
export default function Nav() {
  const [chooselanguage, setChooselanguage] = useState<boolean>(false);
  const dropdownlanguage = () => {
    setChooselanguage((prev) => !prev);
    setLanguage(false);
  };
  const [language, setLanguage] = useState<boolean>(false);
  const dropdown = () => {
    setLanguage((prev) => !prev);
    setChooselanguage(false);
  };

  return (
    <>
      <div className="md:fixed p-5 shadow bg-white top-0 right-0 w-full z-1000 md:flex hidden ">
        <div className="w-full md:flex md:justify-center hidden relative">
          <div className="flex gap-10 w-full max-w-7xl justify-between items-center">
            <div className="flex  items-center ">
              <img
                src="https://ali-global-cdn.hellotalk8.com/website/public/logos/logo-only/with-bg/logo-bg-round.svg"
                alt=""
                className="w-10 h-7 "
              />
              <h1 className="text-[25px] text-center font-bold">HelloTalk</h1>
            </div>
            <div className="flex flex-row gap-5 justify-center items-center text-md">
              <NavigationMenuDemo />
            </div>
            <div className="flex gap-5 justify-center items-center text-md relative">
              <div className="relative">
                <h1
                  className="text-center hover:bg-gray-200/50 hover:px-3 hover:py-1 rounded-md cursor-pointer"
                  onMouseEnter={() => {
                    setChooselanguage(true);
                  }}
                >
                  US english
                  <span>
                    {" "}
                    <SlArrowDown
                      className={`inline size-2 ml-1 transition-transform duration-300 ${chooselanguage ? "rotate-180" : "rotate-0"}`}
                    />
                  </span>
                </h1>
                {chooselanguage && (
                  <div className="absolute top-full pt-3 w-48 right-0">
                    <ul
                      className="grid grid-cols-2 bg-white shadow rounded-sm list-none h-40 pt-2 px-1"
                      onMouseLeave={() => {
                        setChooselanguage(false);
                      }}
                    >
                      <li className="text-sm cursor-pointer hover:bg-gray-200/80 rounded-sm text-center py-0">HN Hindi</li>
                      <li className="text-sm cursor-pointer hover:bg-gray-200/80 rounded-sm text-center py-0">EG English</li>
                      <li className="text-sm cursor-pointer hover:bg-gray-200/80 rounded-sm text-center py-0">SP Spanice</li>
                      <li className="text-sm cursor-pointer hover:bg-gray-200/80 rounded-sm text-center py-0">KR Korian</li>
                      <li className="text-sm cursor-pointer hover:bg-gray-200/80 rounded-sm text-center py-0">FR Franch</li>
                      <li className="text-sm cursor-pointer hover:bg-gray-200/80 rounded-sm text-center py-0">JP Japanice</li>
                      <li className="text-sm cursor-pointer hover:bg-gray-200/80 rounded-sm text-center py-0">TH Thai</li>
                      <li className="text-sm cursor-pointer hover:bg-gray-200/80 rounded-sm text-center py-0">GJ Gujarati</li>
                      <li className="text-sm cursor-pointer hover:bg-gray-200/80 rounded-sm text-center py-0">BG Bangali</li>
                      <li className="text-sm cursor-pointer hover:bg-gray-200/80 rounded-sm text-center py-0">PN Panjabi</li>
                    </ul>
                  </div>
                )}
              </div>
              <div>
                <h1 className="text-center hover:bg-gray-200/50 hover:px-2 hover:py-1 rounded-md">Download</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed p-5 bg-white top-0 right-0 w-full z-1000 md:hidden flex">
        <div className="w-full flex md:justify-center relative md:hidden">
          <div className="flex gap-10 w-full max-w-7xl justify-between items-center relative">
            <div className="flex  items-center ">
              <img
                src="https://ali-global-cdn.hellotalk8.com/website/public/logos/logo-only/with-bg/logo-bg-round.svg"
                alt=""
                className="w-10 h-7 "
              />
              <h1 className="text-[25px] text-center font-bold ">HelloTalk</h1>
            </div>
            <div className="flex  gap-5 justify-center items-center text-md relative ">
              <h1 className=" " onClick={dropdown}>
                {language ? <RxCross2 /> : <FaBars />}
              </h1>
              {language && (
                <div className="md:hidden flex absolute top-full left-0 pt-2 ">
                  <ul className="bg-white px-2 py-1 rounded-md shadow  w-[150px]">
                    <li className="text-sm">All feature</li>
                    <li className="text-sm">Discoverd</li>
                    <li className="text-sm">About hello talk</li>
                    <li className="text-sm">Download</li>
                  </ul>
                </div>
              )}
            </div>
            <div className="flex gap-5 justify-center items-center text-md relative">
              <div className="relative">
                <h1 className="text-center" onClick={dropdownlanguage}>
                  US english
                  <span>
                    {" "}
                    <SlArrowDown
                      className={`inline size-2 ml-1 transition-transform duration-300 ${chooselanguage ? "rotate-180" : "rotate-0"}`}
                    />
                  </span>
                </h1>
                {chooselanguage && (
                  <div className="md:hidden flex absolute top-full right-10 w-48 -mr-14 pt-2">
                    <ul className={`grid grid-cols-2  bg-white shadow p-3 rounded-sm list-none w-[350px]`}>
                      <li className="text-sm basis-1/2 text-center">hn hindi</li>
                      <li className="text-sm basis-1/2 text-center">eg english</li>
                      <li className="text-sm basis-1/2 text-center">hn hindi</li>
                      <li className="text-sm basis-1/2 text-center">eg english</li>
                      <li className="text-sm basis-1/2 text-center">hn hindi</li>
                      <li className="text-sm basis-1/2 text-center">eg english</li>
                      <li className="text-sm basis-1/2 text-center">hn hindi</li>
                      <li className="text-sm basis-1/2 text-center">eg english</li>
                      <li className="text-sm basis-1/2 text-center">hn hindi</li>
                      <li className="text-sm basis-1/2 text-center">eg english</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
