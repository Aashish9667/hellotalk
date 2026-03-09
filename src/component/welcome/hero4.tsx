const countriesData = [
  {
    name: "이수채",
    flag: "./welcome/russia.avif",
    bgImage:
      "https://ali-global-cdn.hellotalk8.com/website/public/images/homepage/partners/assets_3512af747f4c4611bb1ad1bd0f2c1a3c_d4b7e858af534ad2920ecbf2ed8c7114.jpeg",
    languages: ["한국어", "English"],
    link: "/profile/1",
    qrcode: "./welcome/qrcode.png",
  },
  {
    name: "Alex",
    flag: "./welcome/aus.avif",
    bgImage:
      "https://ali-global-cdn.hellotalk8.com/website/public/images/homepage/partners/assets_3512af747f4c4611bb1ad1bd0f2c1a3c_79ce104701b14297a0d3492ed7a97c10.jpeg",
    languages: ["English", "Spanish"],
    link: "/profile/2",
    qrcode: "./welcome/qrcode.png",
  },
  {
    name: "이수채",
    flag: "./welcome/russia.avif",
    bgImage:
      "https://ali-global-cdn.hellotalk8.com/website/public/images/homepage/partners/assets_3512af747f4c4611bb1ad1bd0f2c1a3c_b5f81b78355742ebbbfa92d8c4dcedc8.jpeg",
    languages: ["한국어", "English"],
    link: "/profile/1",
    qrcode: "./welcome/qrcode.png",
  },
  {
    name: "Alex",
    flag: "./welcome/aus.avif",
    bgImage:
      "https://ali-global-cdn.hellotalk8.com/website/public/images/homepage/partners/assets_3512af747f4c4611bb1ad1bd0f2c1a3c_ce8b0efe7320420abaf74901c3256700.jpeg",
    languages: ["English", "Spanish"],
    link: "/profile/2",
    qrcode: "./welcome/qrcode.png",
  },
  {
    name: "Alyza",
    flag: "./welcome/aus.avif",
    bgImage:
      "https://ali-global-cdn.hellotalk8.com/website/public/images/homepage/partners/assets_3512af747f4c4611bb1ad1bd0f2c1a3c_ae6c043701704b6ba091f7ae45ff99ae.jpeg",
    languages: ["English", "Spanish"],
    link: "/profile/2",
    qrcode: "./welcome/qrcode.png",
  },
  {
    name: "이수채",
    flag: "./welcome/russia.avif",
    bgImage:
      "https://ali-global-cdn.hellotalk8.com/website/public/images/homepage/partners/assets_3512af747f4c4611bb1ad1bd0f2c1a3c_dda290648df34659aabd0d6a60a687ee.jpeg",
    languages: ["한국어", "English"],
    link: "/profile/1",
    qrcode: "./welcome/qrcode.png",
  },

  {
    name: "Alex",
    flag: "./welcome/aus.avif",
    bgImage:
      "https://ali-global-cdn.hellotalk8.com/website/public/images/homepage/partners/assets_3512af747f4c4611bb1ad1bd0f2c1a3c_66664d46245142f7b4eb096bdfc50b3a.jpeg",
    languages: ["English", "Spanish"],
    link: "/profile/2",
    qrcode: "./welcome/qrcode.png",
  },
  {
    name: "이수채",
    flag: "./welcome/russia.avif",
    bgImage:
      "https://ali-global-cdn.hellotalk8.com/website/public/images/homepage/partners/assets_3512af747f4c4611bb1ad1bd0f2c1a3c_35f12928ecb847708d8407083f55d555.jpeg",
    languages: ["한국어", "English"],
    link: "/profile/1",
    qrcode: "./welcome/qrcode.png",
  },
];
export default function Hero4() {
  return (
    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 md:mt-20 mt-10 ">
      <div className="">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center mb-5">
          Find Your Ideal Language Partner
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed text-center mb-8">
          From cross-cultural exchanges to local practice, HelloTalk helps you
          easily connect with language partners globally
        </p>
      </div>
      <div className="flex  overflow-x-auto p-4  flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6">
        {countriesData.map((item, index) => (
          <div key={index} className="group cursor-pointer shrink-0">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl w-40 sm:w-65.5 h-50 sm:h-90">
              <div className="absolute top-2 sm:top-4 left-2 sm:left-4 z-20">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white shadow-lg overflow-hidden">
                  <img
                    src={item.flag}
                    alt="flag"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 z-20 text-white p-2 sm:p-4">
                <div className="flex justify-center absolute lg:bottom-30 bottom-19.5 md:bottom-30 left-2 right-2  transition-all duration-0 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 z-30">
                  <img
                    src={item.qrcode}
                    alt="QR Code"
                    className="bg-white rounded-md lg:p-3 p-1.5 lg:w-35 w-20 md:w-33  transition-all"
                  />
                </div>
                <div className="transition-all duration-300 group-hover:-translate-y-10">
                  <h3 className="font-bold text-lg sm:text-2xl mb-1">
                    {item.name}
                  </h3>
                  <div className="flex gap-1 sm:gap-2 pb-2">
                    {item.languages.map((lang, lIdx) => (
                      <span
                        key={lIdx}
                        className="bg-white/90 text-gray-800 px-2 py-0.5 rounded-full text-xs font-medium"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="absolute bottom-4 left-2 right-2 transition-all duration-300 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 ">
                  <a
                    href={item.link}
                    className="inline-flex items-center justify-center w-full h-10 bg-primary text-white rounded-full font-semibold text-sm sm:text-base hover:bg-primary/90 transition-all"
                  >
                    Connect Now
                  </a>
                </div>
              </div>
              <img
                src={item.bgImage}
                alt={item.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="bg-blue-700 rounded-lg mb-5">
        <a href="#">
          <button className="text-white py-3 px-10 font-semibold text-md cursor-pointer">
            Browse More Partners
          </button>
        </a>
      </div>
    </div>
  );
}
