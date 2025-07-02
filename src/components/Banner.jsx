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
        delay: 5000,
        disableOnInteraction: false,
      }}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="w-full">
          <img src="/images/Banner_HANDA PILIPINAS 2025-01.jpg" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full">
          <img src="/images/Banner_HANDA PILIPINAS 2025-01.jpg" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full">
          <img src="/images/Banner_HANDA PILIPINAS 2025-01.jpg" alt="" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Banner;
