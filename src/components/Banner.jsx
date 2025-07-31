import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";
function Banner() {
  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
      autoplay={{
        delay: 8000,
        disableOnInteraction: false,
      }}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="w-full">
          <img src="/images/banners/HP_Main.jpg" alt="" className="w-full"  />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full">
          <img src="/images/banners/HP_Luzon.jpg" alt="" className="w-full" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Banner;
