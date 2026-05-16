"use client";
import * as React from "react";
import { Menu, X } from "lucide-react";
import { SlArrowDown } from "react-icons/sl";
export default function MenuTrying() {
  const [menuOpen, setMenuOpen] = React.useState<boolean>(false);
  const[allFeaturesOpen, setAllFeaturesOpen] = React.useState<boolean>(false);
  const[allAboutOpen, setAllAboutOpen] = React.useState<boolean>(false);
  const[allCoursesOpen, setAllCoursesOpen] = React.useState<boolean>(false);
  const toggleAllFeatures=()=>{
    setAllFeaturesOpen((prev)=>!prev)
  }
  const toggleAllAbout=()=>{
    setAllAboutOpen((prev)=>!prev)
  }
  const toggleAllCourses=()=>{
    setAllCoursesOpen((prev)=>!prev)
  }
  React.useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <nav className="relative">
      <div className="flex justify-between items-center shadow-md p-5 bg-white z-[60] fixed w-full top-0 md:hidden">
        <h1 className="text-xl font-bold text-blue-600">HelloTalk</h1>
        <button onClick={() => setMenuOpen(!menuOpen)} className="p-2">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      <div
        className={`inset-0 bg-black/50 transition-opacity duration-300 z-40 md:hidden ${
          menuOpen ? "opacity-100 backdrop-blur-sm visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      />
      <div
        className={`fixed top-0 left-0 w-full bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out overflow-y-auto md:hidden
          ${menuOpen ? "translate-y-0" : "-translate-y-full"}
         ${(allFeaturesOpen || allAboutOpen || allCoursesOpen) ? "h-screen" : "h-fit"}`}
      >
        <div className="p-6 pt-28 pb-10 w-full">
          <ul className="flex flex-col gap-6 text-lg font-medium text-gray-700">
            <h3 className="font-bold flex items-center justify-between" onClick={toggleAllFeatures}>
              All Features <SlArrowDown size={15} className={`transition-all duration-300 ${allFeaturesOpen ? "rotate-180 text-black" :"rotate-0 text-gray-400"}`}/>
            </h3>
            {allFeaturesOpen &&(
            <ul className="space-y-4 ml-4 border-l-2 border-gray-300 pl-4">
              <li className="border-b pb-2"><a href="./home">Home</a></li>
              <li className="border-b pb-2"><a href="./about">About</a></li>
              <li className="border-b pb-2"><a href="./contact">Contact</a></li>
              <li className="border-b pb-2"><a href="./help">Help</a></li>
            </ul>
            )}

            <h3 className="font-bold flex items-center justify-between" onClick={toggleAllAbout}>
              All About <SlArrowDown size={15} className={`transition-all duration-300 ${allAboutOpen ? "rotate-180 text-black" :"rotate-0 text-gray-400"}`}/>
            </h3>
            {allAboutOpen &&(
            <ul className="space-y-4 ml-4 border-l-2 border-gray-300 pl-4">
              <li className="border-b pb-2"><a href="./about-business">About Business</a></li>
              <li className="border-b pb-2"><a href="./about-services">About Services</a></li>
              <li className="border-b pb-2"><a href="./about-us">About Us</a></li>
              <li className="border-b pb-2"><a href="./about-advertisement">About Advertisement</a></li>
            </ul>
            )}

            <h3 className="font-bold flex items-center justify-between" onClick={toggleAllCourses}>
              All Courses <SlArrowDown size={15} className={`transition-all duration-300 ${allCoursesOpen ? "rotate-180 text-black" :"rotate-0 text-gray-400"}`}/>
            </h3>
            {allCoursesOpen &&(
            <ul className="space-y-4 ml-4 border-l-2 border-gray-300 pl-4">
              <li className="border-b pb-2"><a href="./about-courses">About Courses</a></li>
              <li className="border-b pb-2"><a href="./about-pro">About Professionalism</a></li>
            </ul>
            )}
          </ul>

          <button className="w-full mt-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-[18px]">
            Download Now
          </button>
        </div>
      </div>
    </nav>
  );
}
