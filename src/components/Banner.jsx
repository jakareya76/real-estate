import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Banner = () => {
  return (
    <div
      style={{ backgroundImage: 'url("./bg.svg")' }}
      className="w-full h-screen bg-center bg-cover  -mt-[100px] flex items-center justify-center gap-8"
    >
      <div className="z-20 flex flex-col mt-16">
        <h2 className="font-serif text-6xl font-bold leading-tight">
          Find the right home <br /> for your family
        </h2>
        <p className="max-w-2xl my-2 text-zinc-800">
          Step into a world of possibilities as you explore our collection of
          residential properties. From charming family homes to elegant
          townhouses and sophisticated apartments
        </p>
        <div className="flex items-center gap-4 mt-2">
          <button className="text-white bg-blue-500 hover:bg-blue-600 btn">
            Explore All
          </button>
          <button className="text-white bg-orange-500 hover:bg-orange-600 btn">
            Request a Callback
          </button>
        </div>
      </div>

      <div className="w-[40%] h-[60%] mt-20">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            <img
              src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="slider-img"
              className="rounded-xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="slider-img"
              className="rounded-xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.pexels.com/photos/2187605/pexels-photo-2187605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="slider-img"
              className="rounded-xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.pexels.com/photos/277667/pexels-photo-277667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="slider-img"
              className="rounded-xl"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
