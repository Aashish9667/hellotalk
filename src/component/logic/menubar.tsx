"use client";
import React, { useState } from 'react';
import { Home, User, MessageCircle, Camera, Settings } from 'lucide-react';

const menuItems = [
  { icon: <Home size={15} />, name: 'Home', pos: 'translate-x-0' },
  { icon: <User size={15} />, name: 'Profile', pos: 'translate-x-16' },
  { icon: <MessageCircle size={15} />, name: 'Chat', pos: 'translate-x-32' },
  { icon: <Camera size={15} />, name: 'Photo', pos: 'translate-x-48' },
  { icon: <Settings size={15} />, name: 'Settings', pos: 'translate-x-64' },
];

const MagicHoverNavbar = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const bgColor = "bg-[#222327]"; 
  const borderColor = "border-[#222327]";

  return (
    <div className={`flex justify-center items-center min-h-screen ${bgColor}`}>
      <div className="bg-white px-6 relative flex items-center shadow-lg">
        <ul className="flex relative">
          
          {/* Magic Indicator with Bottom Gap */}
          <span
            className={`absolute -top-2 h-10 w-10 rounded-full border-[10px] ${borderColor} 
            bg-white transition-all duration-500 ease-in-out flex items-center justify-center
            ${hoverIndex !== null ? `opacity-100 ${menuItems[hoverIndex].pos} ml-3` : "opacity-0"}`}
          >
          </span>

          {menuItems.map((item, i) => (
            <li 
              key={i} 
              className="w-16 z-20"
              onMouseEnter={() => setHoverIndex(i)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <div className="flex flex-col items-center justify-center cursor-pointer relative h-[40px]">
                <span
                  className={`duration-500 transition-all ${
                    i === hoverIndex ? "-translate-y-2 " : "translate-y-0 text-gray-500"
                  }`}
                >
                  {item.icon}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MagicHoverNavbar;
