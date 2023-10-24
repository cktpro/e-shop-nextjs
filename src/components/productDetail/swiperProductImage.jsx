import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./swiperProductImage.scss";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default function SwiperProductImage() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="cover_swiper">
      <Swiper
        loop={true}
        spaceBetween={0}
        // autoplay={true}
        navigation={false}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src={require("assets/productDetail/chuotlgt.webp")} alt="..." />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={require("assets/productDetail/chuotlgt-nho1.webp")}
            alt="..."
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={require("assets/productDetail/chuotlgt-nho2.webp")}
            alt="..."
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={require("assets/productDetail/chuotlgt-nho3.webp")}
            alt="..."
          />
        </SwiperSlide>
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={0}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
        // direction="vertical"
      >
        <SwiperSlide>
          <img src={require("assets/productDetail/chuotlgt.webp")} alt="..." />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={require("assets/productDetail/chuotlgt-nho1.webp")}
            alt="..."
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={require("assets/productDetail/chuotlgt-nho2.webp")}
            alt="..."
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={require("assets/productDetail/chuotlgt-nho3.webp")}
            alt="..."
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
