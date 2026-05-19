"use client";
import { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { NavigationMenuDemo } from "@/component/logic/shadcnnavigation";
import { BsCheck } from "react-icons/bs";
import { PiDownloadSimpleBold } from "react-icons/pi";
export default function BigScreenMenu() {
  const [dropdownlanguage, setDropdownlanguage] = useState<boolean>(false);
  const [selectlang, setSelectlang] = useState<string>("EG English");
  const setlang = (lang: string) => {
    setSelectlang(lang);
    setDropdownlanguage(false);
  };
  return (
    <>
      <div className="md:fixed p-5 shadow  top-0 right-0 w-full z-1000 md:flex hidden bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <div className="w-full md:flex md:justify-center hidden relative">
          <div className="flex sm:gap-0 w-full max-w-7xl justify-between items-center">
            <div className="flex  items-center ">
              <img
                src="https://ali-global-cdn.hellotalk8.com/website/public/logos/logo-only/with-bg/logo-bg-round.svg"
                alt=""
                className="w-10 h-7 "
              />

              <h1 className="text-[25px] text-center font-bold">HelloTalk</h1>
            </div>
            <div className="flex flex-row gap-5 justify-center items-center text-md ">
              <NavigationMenuDemo />
            </div>
            <div className="flex gap-5 justify-center items-center text-md relative">
              <div
                className="relative"
                onMouseEnter={() => setDropdownlanguage(true)}
                onMouseLeave={() => setDropdownlanguage(false)}
              >
                <h1 className="text-center hover:bg-gray-200/50 dark:hover:bg-gray-800  px-3 py-1 rounded-md cursor-pointer">
                  {selectlang}
                  <span>
                    <SlArrowDown
                      className={`inline size-2 ml-1.5 transition-transform duration-300 ${
                        dropdownlanguage ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </span>
                </h1>

                {dropdownlanguage && (
                  <div className="absolute top-full pt-2 w-72 right-0 z-50">
                    <ul className="grid grid-cols-2 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 shadow-lg rounded-sm list-none px-3 border border-gray-100 dark:border-gray-800">
                      {[
                        "HN Hindi",
                        "EG English",
                        "SP Spanish",
                        "KR Korean",
                        "FR French",
                        "JP Japanese",
                        "TH Thai",
                        "GJ Gujarati",
                        "BN Bengali",
                        "PN Panjabi",
                      ].map((item) => (
                        <li
                          onClick={() => setlang(item)}
                          key={item}
                          className={`text-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded-sm px-2 py-2 flex justify-between items-center mt-1 mb-1 ${selectlang === item ? "text-black dark:text-black/400" : "text-gray-400 dark:text-gray-400/50"}`}
                        >
                          {item} <BsCheck className={``} />
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="flex justify-center items-center hover:bg-gray-200/50 dark:hover:bg-gray-800 px-2 py-1 rounded-md gap-2.5 shadow border">
                <span className="inline-flex text-center">
                  <PiDownloadSimpleBold className="" />
                </span>
                <h1 className="text-center  ">Download</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


