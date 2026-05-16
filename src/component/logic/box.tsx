"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const cards = [
  {
    image1: "./welcome/qrcode.png",
    head1: "learning",
    para1: "publised on date",
    head2: "HTML AND CSS AND JAVA SCRIPT",
    para2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aspernatur nihil quis.",
    image2: "./welcome/qrcode.png",
    head3: "Ashish kumar",
  },
  {
    image1: "./welcome/qrcode.png",
    head1: "learning",
    para1: "publised on date",
    head2: "HTML AND CSS AND JAVA SCRIPT",
    para2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aspernatur nihil quis.",
    image2: "./welcome/qrcode.png",
    head3: "rajan kumar",
  },
  {
    image1: "./welcome/qrcode.png",
    head1: "learning",
    para1: "publised on date",
    head2: "HTML AND CSS AND JAVA SCRIPT",
    para2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aspernatur nihil quis.",
    image2: "./welcome/qrcode.png",
    head3: "shuresh kumar",
  },
  {
    image1: "./welcome/qrcode.png",
    head1: "learning",
    para1: "publised on date",
    head2: "HTML AND CSS AND JAVA SCRIPT",
    para2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aspernatur nihil quis.",
    image2: "./welcome/qrcode.png",
    head3: "raju kumar",
  },
];

export default function Box() {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={24}
      slidesPerView={1}
      pagination={{
        el: ".my-custom-pagination",
        clickable: true,
      }}
      autoplay={true}
      loop={true}
      breakpoints={{
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
      }}
      className=""
    >
      <div className="flex flex-wrap gap-5 justify-center items-center ">
        {cards.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="boder border-2 p-3 rounded-2xl  w-full md:w-70 ">
              <img
                src={item.image1}
                alt=""
                className="bg-amber-300 w-full object-fill rounded-2xl"
              />
              <h1 className="bg-amber-300 px-1.5 py-0.5 mt-1 w-fit rounded-lg font-bold">
                {item.head1}
              </h1>
              <p>{item.para1}</p>
              <h1 className="font-bold text-sm leading-tight">{item.head2}</h1>
              <p className="text-xs">{item.para2}</p>
              <div className="flex gap-3 mt-2">
                <img
                  src={item.image2}
                  alt=""
                  className="rounded-full w-7 h-7"
                />
                <h1 className="text-xs pt-1">{item.head3}</h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div
          className="my-custom-pagination mt-6 flex justify-center  [&_.swiper-pagination-bullet-active]:w-5 
    [&_.swiper-pagination-bullet-active]:h-5 "
        ></div>
      </div>
    </Swiper>
  );
}
