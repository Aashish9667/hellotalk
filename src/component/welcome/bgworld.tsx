const leftimages = [
  {
    image:
      "https://ali-global-cdn.hellotalk8.com/website/public/images/homepage/avatar/5.png",
    Languages: "नमस्ते",
    Lang: "HN",
  },
  {
    image:
      "https://ali-global-cdn.hellotalk8.com/website/public/images/homepage/avatar/2.png",
    Languages: "Hola",
    Lang: "ES",
  },
  {
    image:
      "https://ali-global-cdn.hellotalk8.com/website/public/images/homepage/avatar/13.png",
    Languages: "Franch",
    Lang: "FR",
  },
  {
    image:
      "https://ali-global-cdn.hellotalk8.com/website/public/images/homepage/avatar/1.png",
    Languages: "привет",
    Lang: "RU",
  },
  {
    image:
      "https://ali-global-cdn.hellotalk8.com/website/public/images/homepage/avatar/1.png",
    Languages: "Hello",
    Lang: "US",
  },
  {
    image:
      "https://ali-global-cdn.hellotalk8.com/website/public/images/homepage/avatar/15.png",
    Languages: "안녕하세요",
    Lang: "KR",
  },
  {
    image:
      "https://ali-global-cdn.hellotalk8.com/website/public/images/homepage/avatar/23.png",
    Languages: "你好",
    Lang: "CN",
  },
];
const rightimages = [
  {
    image:
      "https://ali-global-cdn.hellotalk8.com/website/public/images/homepage/avatar/3.png",
    Languages: "привет",
    Lang: "RU",
  },
  {
    image:
      "https://ali-global-cdn.hellotalk8.com/website/public/images/homepage/avatar/1.png",
    Languages: "Hello",
    Lang: "US",
  },
  {
    image:
      "https://ali-global-cdn.hellotalk8.com/website/public/images/homepage/avatar/1.png",
    Languages: "안녕하세요",
    Lang: "KR",
  },
  {
    image:
      "https://ali-global-cdn.hellotalk8.com/website/public/images/homepage/avatar/12.png",
    Languages: "你好",
    Lang: "CN",
  },
  {
    image:
      "https://ali-global-cdn.hellotalk8.com/website/public/images/homepage/avatar/1.png",
    Languages: "नमस्ते",
    Lang: "HN",
  },
  {
    image:
      "https://ali-global-cdn.hellotalk8.com/website/public/images/homepage/avatar/1.png",
    Languages: "Hola",
    Lang: "ES",
  },
  {
    image:
      "https://ali-global-cdn.hellotalk8.com/website/public/images/homepage/avatar/4.png",
    Languages: "Franch",
    Lang: "FR",
  },
];
import Marquee from "react-fast-marquee";
export default function BgWorld() {
  return (
    <div className=" my-10 md:my-40 relative">
      <div className=" absolute inset-0 flex items-center justify-center">
        <img src="./welcome/world.avif" alt="" className="w-[80vw] pl-10" />
      </div>
      <div>
        <div className="relative flex  justify-center items-center">
          <div className="flex-col mb-10 md:mb-25 flex-wrap">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-2 sm:mb-4 text-center">
              <span className="text-violet-700 text-center">Search</span> the
              World
            </h1>
            <p className="text-center sm:text-lg lg:text-xl text-gray-500">
              Search for language partners by native language, city, and more
            </p>
          </div>
        </div>
        <div className=" space-y-3 flex-col justify-center item">
          <Marquee
            speed={45}
            gradient={false}
            pauseOnHover={true}
            direction="left"
            autoFill={true}
          >
            <div className="flex gap-8 py-4 pr-10">
              {leftimages.map((item, index) => (
                <div
                  key={index}
                  className="inline-flex justify-center items-center gap-2.5 ${index === 0 ? 'ml-20' : 'ml-0'}"
                >
                  <div className="relative">
                    <img
                      src={item.image}
                      className="w-20 h-auto rounded-full"
                      alt="gallery"
                    />
                    <span className="absolute bottom-0 left-0  py-0.5 px-1 border-gray-200 border bg-white text-black text-[10px] font-semibold rounded-[100%] z-10">
                      {item.Lang}
                    </span>
                  </div>
                  <h1 className="text-center p-1">{item.Languages}</h1>
                </div>
              ))}
            </div>
          </Marquee>
          <Marquee
            speed={45}
            gradient={false}
            pauseOnHover={true}
            direction="right"
            autoFill={true}
          >
            <div className="flex gap-8 py-4 pr-10">
              {" "}
              {rightimages.map((item, index) => (
                <div
                  key={index}
                  className="inline-flex justify-center items-center gap-2.5 ${index === 0 ? 'ml-20' : 'ml-0'}`}"
                >
                  <div className="relative">
                    <img
                      src={item.image}
                      className="w-20 h-auto rounded-full"
                      alt="gallery"
                    />
                    <span className="absolute bottom-0 left-0  py-0.5 px-1 border-gray-200 border bg-white text-black text-[10px] font-semibold rounded-[100%] z-10">
                      hn
                    </span>
                  </div>
                  <h1 className="text-center p-1">{item.Languages}</h1>
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
}
