"use client";
import { FaApple } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import CountUp from "react-countup";
export default function Hero() {
  return (
    <div className="mt-20">
      <div className="lg:flex lg:justify-between lg:gap-1 lg:flex-nowrap  flex flex-wrap justify-center items-center">
        <div className="space-y-5 text-center lg:text-left">
          <h1 className="md:mb-8 mb-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Talk to the <span className="text-violet-700">World</span>
          </h1>
          <p className="md:mb-8 mb-5 text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground">
            Learn a language for free by chatting with native speakers around
            the world
          </p>
          <div className="inline-flex p-2 bg-gray-100 rounded-lg  bg-cover">
            <img
              src="./welcome/qrcode.png"
              alt=""
              className="object max-w-[130]"
            />
            <div className="my-3 pr-2 pl-2">
              <p className="leading-4.5 pb-2 text-left">
                Chat with <span className="text-violet-700">millions</span> of native speakers
                
              </p>
              <p className="pb-3 text-left">Scan to download free app</p>
              <div className="flex gap-3">
                <button className="bg-white p-1 rounded-md">
                  <FaApple size={24} />
                </button>
                <button className="bg-white p-1 rounded-md ">
                  <IoLogoAndroid size={25} className="text-green-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src="./welcome/helloTalk.png" alt="" />
        </div>
      </div>
      <div className=" my-20">
        <div className="grid grid-cols-2 lg:flex justify-center items-center gap-10 sm:gap-10 p-5">
          <div className="flex justify-center items-center flex-col border px-14 py-3 rounded-lg">
            <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#5c3ae6] pb-0.5">
              <CountUp
                end={4.8}
                start={0}
                duration={2.75}
                decimals={1}
                decimal="."
                enableScrollSpy={true}
                scrollSpyOnce={true}
                suffix="/5"
              >
                {({ countUpRef }) => <span ref={countUpRef} />}
              </CountUp>
            </h1>
            <p className="text-xs sm:text-base text-gray-500/90">Ratting</p>
          </div>
          <div className="flex justify-center items-center flex-col border px-10 py-3 rounded-lg">
            <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#5c3ae6] pb-0.5">
              <CountUp
                end={70}
                start={0}
                duration={2.75}
                enableScrollSpy={true}
                scrollSpyOnce={true}
                suffix="M+"
              >
                {({ countUpRef }) => <span ref={countUpRef} />}
              </CountUp>
            </h1>

            <p className="text-xs sm:text-base md:text-lg text-center text-gray-500/90">
              <span className="inline sm:hidden">Users</span>
              <span className="hidden sm:inline">Registered Users</span>
            </p>
          </div>

          <div className="flex justify-center items-center flex-col border px-14 py-3 rounded-lg">
            <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#5c3ae6] pb-0.5">
              <CountUp
                end={195}
                start={0}
                duration={2.75}
                enableScrollSpy={true}
                scrollSpyOnce={true}
                suffix="+"
              >
                {({ countUpRef }) => <span ref={countUpRef} />}
              </CountUp>
            </h1>
            <p className="text-xs sm:text-base md:text-lg text-gray-500/90">
              Countries
            </p>
          </div>
          <div className="flex justify-center items-center flex-col border px-14 py-3 rounded-lg">
            <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#5c3ae6] pb-0.5">
              <CountUp
                end={200}
                start={0}
                duration={2.75}
                enableScrollSpy={true}
                scrollSpyOnce={true}
                suffix="+"
              >
                {({ countUpRef }) => <span ref={countUpRef} />}
              </CountUp>
            </h1>
            <p className="text-xs sm:text-base md:text-lg text-gray-500/90">
              Languages
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
