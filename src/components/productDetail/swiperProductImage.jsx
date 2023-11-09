import React, { useState } from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import styles from "./swiperProductImage.module.scss";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default function SwiperProductImage() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className={styles.cover_swiper}>
      <Swiper
        loop={true}
        spaceBetween={0}
        // autoplay={true}
        navigation={false}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className={styles.mySwiper2}
      >
        <SwiperSlide>
          <Image src={require("@/assets/productDetail/chuotlgt.webp")} alt="..." />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src={require("@/assets/productDetail/chuotlgt-nho1.webp")}
            alt="..."
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src={require("@/assets/productDetail/chuotlgt-nho2.webp")}
            alt="..."
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src={require("@/assets/productDetail/chuotlgt-nho3.webp")}
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
        className={styles.mySwiper}
        // direction="vertical"
      >
        <SwiperSlide>
          <Image src={require("@/assets/productDetail/chuotlgt.webp")} alt="..." />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src={require("@/assets/productDetail/chuotlgt-nho1.webp")}
            alt="..."
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src={require("@/assets/productDetail/chuotlgt-nho2.webp")}
            alt="..."
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src={require("@/assets/productDetail/chuotlgt-nho3.webp")}
            alt="..."
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
