// export default memo(MultiCarouselFlashSale);

import React, { memo, useCallback, useRef } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay } from "swiper/modules";

import FlashSaleItem from "@/components/flashSaleItem";
import styles from "./multiCarousel.module.css";

import ArrowButtonCarousel from "@/components/button/arrowButtonCarousel";

function MultiCarouselFlashSale(props) {
  const swiperFlashSale = useRef();

  const { list } = props;

  const handleMouseEnter = useCallback(() => {
    swiperFlashSale?.current?.swiper?.autoplay?.stop();
  }, []);

  const handleMouseLeave = useCallback(() => {
    swiperFlashSale?.current?.swiper?.autoplay?.start();
  }, []);

  const handleNext = useCallback(() => {
    swiperFlashSale?.current?.swiper?.slideNext();
  }, []);

  const handlePrev = useCallback(() => {
    swiperFlashSale?.current?.swiper?.slidePrev();
  }, []);

  return (
    <div
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    className={styles.cover_carousel_flash_sale}
    >
      <ArrowButtonCarousel prev={handlePrev} next={handleNext} />

       {/* Multi Carousel FlashSale */}
      <Swiper
        ref={swiperFlashSale}
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
        className={styles.swiper_flash_sale}
      >
        {list.map((item, index) => {
          return (
            <SwiperSlide key={index} className={styles.swiper_slide}>
              <FlashSaleItem
                discount={item.discount}
                imgSrc={item.imgSrc}
                name={item.name}
                discountedPrice={item.discountedPrice}
                price={item.price}
                numOfEvaluate={item.numOfEvaluate}
                numOfEvaluate1Star={item.numOfEvaluate1Star}
                numOfEvaluate2Star={item.numOfEvaluate2Star}
                numOfEvaluate3Star={item.numOfEvaluate3Star}
                numOfEvaluate4Star={item.numOfEvaluate4Star}
                numOfEvaluate5Star={item.numOfEvaluate5Star}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default memo(MultiCarouselFlashSale);
