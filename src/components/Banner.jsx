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
      className="flex flex-col items-center justify-center px-5 w-full h-[calc(100vh-120px)] gap-8 bg-center bg-cover backdrop-brightness-90 lg:flex-row"
    >
      <div className="flex flex-col mt-16">
        <h2 className="max-w-2xl font-serif text-6xl font-bold leading-tight">
          Find the right home for your family
        </h2>
        <p className="max-w-2xl my-2 text-zinc-800">
          Step into a world of possibilities as you explore our collection of
          residential properties. From charming family homes to elegant
          townhouses and sophisticated apartments
        </p>
        <div className="flex items-center gap-4 mt-2">
          <button className="text-white bg-blue-500 border-none hover:bg-blue-600 btn">
            Explore All
          </button>
          <button className="text-white bg-orange-500 border-none hover:bg-orange-600 btn">
            Request a Callback
          </button>
        </div>
      </div>

      <div className="w-full lg:w-[40%] lg:h-[60%]">
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
