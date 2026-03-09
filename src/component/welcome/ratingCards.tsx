"use client";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const users = [
  {
    topic: "Cultural immersion from home",
    description: `"Through HelloTalk, I've learned not just French, but discovered French culture, food, and made lifelong friends across the globe."`,
    username: "— Emma Johnson",
    laguage: "French Exchange Partner",
  },
  {
    topic: "Cultural immersion from home",
    description: `"Through HelloTalk, I've learned not just French, but discovered French culture, food, and made lifelong friends across the globe."`,
    username: "— Emma Johnson",
    laguage: "French Exchange Partner",
  },
  {
    topic: "Cultural immersion from home",
    description: `"Through HelloTalk, I've learned not just French, but discovered French culture, food, and made lifelong friends across the globe."`,
    username: "— Emma Johnson",
    laguage: "French Exchange Partner",
  },
  {
    topic: "Cultural immersion from home",
    description: `"Through HelloTalk, I've learned not just French, but discovered French culture, food, and made lifelong friends across the globe."`,
    username: "— Emma Johnson",
    laguage: "French Exchange Partner",
  },
  {
    topic: "Cultural immersion from home",
    description: `"Through HelloTalk, I've learned not just French, but discovered French culture, food, and made lifelong friends across the globe."`,
    username: "— Emma Johnson",
    laguage: "French Exchange Partner",
  },
  {
    topic: "Cultural immersion from home",
    description: `"Through HelloTalk, I've learned not just French, but discovered French culture, food, and made lifelong friends across the globe."`,
    username: "— Emma Johnson",
    laguage: "French Exchange Partner",
  },
];
export default function RatingCards() {
  return (
    <div>
      <div>
        <h1 className="my-15 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center">
          What People are Saying
        </h1>
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
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="max-w-7xl mx-auto "
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-xl">
            {users.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white  p-5  border  rounded-lg ">
                  <div className="flex text-yellow-300 px-3 py-2 ">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <h1 className="text-xl font-bold p-3">{item.topic}</h1>
                  <p className="text-lg px-3 pb-3">{item.description}</p>
                  <p className="text-md px-3 text-gray-500/80">
                    {item.username}
                  </p>
                  <p className="text-sm px-3 text-gray-500/80">
                    {item.laguage}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
        <div
          className="my-custom-pagination mt-6 flex justify-center  [&_.swiper-pagination-bullet-active]:w-5 
    [&_.swiper-pagination-bullet-active]:h-5 "
        ></div>
      </div>
    </div>
  );
}
