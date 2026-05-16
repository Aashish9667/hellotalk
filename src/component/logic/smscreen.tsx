"use client";
import { useState } from "react";

export default function Smallscreen() {
  const [show, setShow] = useState(false);

  return (
    <div
      className="relative w-32 h-44 overflow-hidden cursor-pointer rounded-lg border shadow-md"
      onClick={() => setShow(!show)}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {/* Background Image */}
      <img
        src="https://ali-global-cdn.hellotalk8.com/website/public/images/homepage/partners/assets_3512af747f4c4611bb1ad1bd0f2c1a3c_79ce104701b14297a0d3492ed7a97c10.jpeg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      <h1 className="text-white font-bold text-2xl drop-shadow-md ml-2">hello</h1>

      {/* QR Code: Fixed position (No Animation) */}
      <img
        src="./welcome/qrcode.png"
        alt="QR Code"
        className={`absolute top-10 left-1/2 -translate-x-1/2 w-16 border-2 border-white bg-white shadow-xl transition-opacity duration-300 ${
          show ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* English & Indian Texts: Always visible, between QR and Chat */}
      <div className={`absolute left-0 w-full flex justify-center gap-1 transition-all duration-500 ease-out ${show?"bottom-10":"bottom-3"}`}>

        <h1 className={`text- text-[10px] font-bold leading-tight drop-shadow-lg bg-amber-400 px-2 py-0.5 text-xs rounded-2xl` }>English</h1>
        <h1 className={`text- text-[10px] font-bold leading-tight drop-shadow-lg bg-amber-400 px-2 py-0.5 text-xs rounded-2xl` }>Endian</h1>
      </div>

      {/* Chat Button: Slide Up Animation */}
      <h1
        className={`absolute left-1/2 -translate-x-1/2 w-24 py-1 text-white text-xs text-center rounded-2xl bg-amber-600 shadow-xl transition-all duration-500 ease-out ${
          show ? "bottom-2" : "-bottom-10"
        }`}
      >
        Chat
      </h1>
    </div>
  );
}
