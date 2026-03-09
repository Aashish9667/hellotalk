import { FaApple } from "react-icons/fa6";
import { IoLogoAndroid } from "react-icons/io";
import Marquee from "react-fast-marquee";
export default function Hero1() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="m-5 grid md:grid-cols-2 gap-10 grid-cols-1">
        <div className="pt-10 ">
          <h1 className="text-7xl font-bold pb-5">
            Talk to the <span className="text-violet-700">World</span>
          </h1>
          <p className="text-gray-500 text-[27px] leading-10">
            Learn a language for free by chatting with native speakers around
            the world{" "}
          </p>
          <div className="pt-10">
            <div className=" bg-gray-50/80 px-5 py-5 rounded-2xl max-w-xs">
              <div className="flex gap-6">
                <img src="./welcome/qrcode.png" alt="qrcode" className="w-32" />
                <div className="font-semibold text-[18px] space-y-1.5">
                  <p className="leading-tight">
                    Chat with <span className="text-violet-500">millions</span>{" "}
                    of native <br />
                    speakers
                  </p>
                  <p className="text-[16px] text-gray-500">
                    Scan to download free app
                  </p>
                  <div className="flex gap-2">
                    <div className="border p-1.5 rounded-md">
                      <FaApple className="size-6.5 " />
                    </div>
                    <div className="border p-1.5 rounded-md">
                      <IoLogoAndroid className="size-7 text-green-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src="./welcome/helloTalk.png" alt="Image" className="w-fit"/>
        </div>
      </div>
      <div className="bg-gray-100">
      <div className="flex justify-center-safe m-5 pt-10">
        <div className="grid grid-cols-2 md:grid-cols-3 justify-center items-center md:gap-50 gap-10">
        <div>
          <h1 className="text-5xl font-bold text-center">70M+</h1>
          <p className="text-center">Registered Users</p>
        </div>
        <div>
          <h1 className="text-5xl font-bold text-center">710M+</h1>
          <p className="text-center">Country</p>
        </div>

        <div>
          <h1 className="text-5xl font-bold text-center">170M+</h1>
          <p className="text-center">Language</p>
        </div>
        </div>
      </div>
      <div className="w-fit  flex justify-center items-center mx-auto bg-gray-100 mt-10">
      <Marquee pauseOnHover={true} speed={50}>
        <div className="flex flex-row gap-5">
    <img src="./welcome/japan.avif" alt="qrcode" className="w-30 ml-5" />
    <img src="./welcome/aus.avif" alt="qrcode" className="w-30" />
    <img src="./welcome/koria.avif" alt="qrcode" className="w-30" />
    <img src="./welcome/russia.avif" alt="qrcode" className="w-30" />
    <img src="./welcome/shrilanka.avif" alt="qrcode" className="w-30" />
    <img src="./welcome/china.avif" alt="qrcode" className="w-30" />
    <img src="./welcome/germen.avif" alt="qrcode" className="w-30" /> 
    <img src="./welcome/koria.avif" alt="qrcode" className="w-30" />
    <img src="./welcome/russia.avif" alt="qrcode" className="w-30" />
    <img src="./welcome/shrilanka.avif" alt="qrcode" className="w-30" />
    </div>
  </Marquee>
  </div>
  </div>
      </div>
  );
}
