"use client";
import * as React from "react";
import { Menu, X } from "lucide-react";
import { SlArrowDown } from "react-icons/sl";

export default function MenuTrying() {
  const [menuOpen, setMenuOpen] = React.useState<boolean>(false);
  const [allFeaturesOpen, setAllFeaturesOpen] = React.useState<boolean>(false);
  const [allAboutOpen, setAllAboutOpen] = React.useState<boolean>(false);
  const [allCoursesOpen, setAllCoursesOpen] = React.useState<boolean>(false);

  const toggleAllFeatures = () => setAllFeaturesOpen((prev) => !prev);
  const toggleAllAbout = () => setAllAboutOpen((prev) => !prev);
  const toggleAllCourses = () => setAllCoursesOpen((prev) => !prev);

  React.useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <nav className="relative">
      {/* Top Navbar Header */}
      <div className="flex justify-between items-center shadow-md p-5 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 z-[60] fixed w-full top-0 md:hidden transition-colors duration-300">
        <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">HelloTalk</h1>
        <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 focus:outline-none">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Backdrop Overlay */}
      <div
        className={`inset-0 bg-black/50 dark:bg-black/70 transition-opacity duration-300 z-40 md:hidden ${
          menuOpen ? "opacity-100 backdrop-blur-sm visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Slide Down Menu Content */}
      <div
        className={`fixed top-0 left-0 w-full bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 z-50 shadow-2xl transform transition-all duration-300 ease-in-out overflow-y-auto md:hidden
          ${menuOpen ? "translate-y-0" : "-translate-y-full"}
          ${(allFeaturesOpen || allAboutOpen || allCoursesOpen) ? "h-screen" : "h-fit"}`}
      >
        <div className="p-6 pt-28 pb-10 w-full">
          <ul className="flex flex-col gap-6 text-lg font-medium">
            
            {/* Section 1: All Features */}
            <li>
              <h3 className="font-bold flex items-center justify-between cursor-pointer" onClick={toggleAllFeatures}>
                All Features 
                <SlArrowDown size={15} className={`transition-all duration-300 ${allFeaturesOpen ? "rotate-180 text-black dark:text-white" : "rotate-0 text-gray-400 dark:text-gray-500"}`}/>
              </h3>
              {allFeaturesOpen && (
                <ul className="space-y-4 mt-4 ml-4 border-l-2 border-gray-300 dark:border-gray-700 pl-4">
                  <li className="border-b border-gray-100 dark:border-gray-800 pb-2"><a href="./home" className="hover:text-blue-500">Home</a></li>
                  <li className="border-b border-gray-100 dark:border-gray-800 pb-2"><a href="./about" className="hover:text-blue-500">About</a></li>
                  <li className="border-b border-gray-100 dark:border-gray-800 pb-2"><a href="./contact" className="hover:text-blue-500">Contact</a></li>
                  <li className="border-b border-gray-100 dark:border-gray-800 pb-2"><a href="./help" className="hover:text-blue-500">Help</a></li>
                </ul>
              )}
            </li>

            {/* Section 2: All About */}
            <li>
              <h3 className="font-bold flex items-center justify-between cursor-pointer" onClick={toggleAllAbout}>
                All About 
                <SlArrowDown size={15} className={`transition-all duration-300 ${allAboutOpen ? "rotate-180 text-black dark:text-white" : "rotate-0 text-gray-400 dark:text-gray-500"}`}/>
              </h3>
              {allAboutOpen && (
                <ul className="space-y-4 mt-4 ml-4 border-l-2 border-gray-300 dark:border-gray-700 pl-4">
                  <li className="border-b border-gray-100 dark:border-gray-800 pb-2"><a href="./about-business" className="hover:text-blue-500">About Business</a></li>
                  <li className="border-b border-gray-100 dark:border-gray-800 pb-2"><a href="./about-services" className="hover:text-blue-500">About Services</a></li>
                  <li className="border-b border-gray-100 dark:border-gray-800 pb-2"><a href="./about-us" className="hover:text-blue-500">About Us</a></li>
                  <li className="border-b border-gray-100 dark:border-gray-800 pb-2"><a href="./about-advertisement" className="hover:text-blue-500">About Advertisement</a></li>
                </ul>
              )}
            </li>

            {/* Section 3: All Courses */}
            <li>
              <h3 className="font-bold flex items-center justify-between cursor-pointer" onClick={toggleAllCourses}>
                All Courses 
                <SlArrowDown size={15} className={`transition-all duration-300 ${allCoursesOpen ? "rotate-180 text-black dark:text-white" : "rotate-0 text-gray-400 dark:text-gray-500"}`}/>
              </h3>
              {allCoursesOpen && (
                <ul className="space-y-4 mt-4 ml-4 border-l-2 border-gray-300 dark:border-gray-700 pl-4">
                  <li className="border-b border-gray-100 dark:border-gray-800 pb-2"><a href="./about-courses" className="hover:text-blue-500">About Courses</a></li>
                  <li className="border-b border-gray-100 dark:border-gray-800 pb-2"><a href="./about-pro" className="hover:text-blue-500">About Professionalism</a></li>
                </ul>
              )}
            </li>
          </ul>

          <button className="w-full mt-8 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-xl font-bold text-[18px] transition-colors">
            Download Now
          </button>
        </div>
      </div>
    </nav>
  );
}
