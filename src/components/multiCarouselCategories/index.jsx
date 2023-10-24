import React, { memo, useCallback, useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";

import ArrowButtonCarousel from "components/button/arrowButtonCarousel";
import "./multiCarouselCategories.css";
import CategoryItem from "components/categoryItem";

function MultiCarouselCategories(props) {
  const swiperCategories = useRef();

  const { list } = props;

  const handleMouseEnter = useCallback(() => {
    swiperCategories?.current?.swiper?.autoplay?.stop();
  }, []);

  const handleMouseLeave = useCallback(() => {
    swiperCategories?.current?.swiper?.autoplay?.start();
  }, []);

  const handleNext = useCallback(() => {
    swiperCategories?.current?.swiper?.slideNext();
  }, []);

  const handlePrev = useCallback(() => {
    swiperCategories?.current?.swiper?.slidePrev();
  }, []);

  return (
    // categories carousel
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="cover_carousel_categories"
    >
      <ArrowButtonCarousel prev={handlePrev} next={handleNext} />

      <Swiper
        ref={swiperCategories}
        slidesPerView={"auto"}
        spaceBetween={10}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        // loopedSlidesLimit={false}
        // loopedSlides={1}
        modules={[Autoplay]}
        className="swiper_categories"
      >
        {list.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <CategoryItem imgSrc={item.imgSrc} name={item.name} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default memo(MultiCarouselCategories);
