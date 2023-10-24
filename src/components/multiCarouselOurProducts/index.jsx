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
import "./multiCarouselOurProducts.css";
import ProductItem from "components/productItem";

function MultiCarouselOurProducts(props) {
  const swiperOurPRoducts = useRef();

  const { list } = props;

  const handleMouseEnter = useCallback(() => {
    swiperOurPRoducts?.current?.swiper?.autoplay?.stop();
  }, []);

  const handleMouseLeave = useCallback(() => {
    swiperOurPRoducts?.current?.swiper?.autoplay?.start();
  }, []);

  const handleNext = useCallback(() => {
    swiperOurPRoducts?.current?.swiper?.slideNext();
  }, []);

  const handlePrev = useCallback(() => {
    swiperOurPRoducts?.current?.swiper?.slidePrev();
  }, []);

  return (
    // Our Products carousel
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="cover_carousel_our_products"
    >
      <ArrowButtonCarousel prev={handlePrev} next={handleNext} />

      <Swiper
        ref={swiperOurPRoducts}
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
        className="swiper_flash_sale"
      >
        {list.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div>
                <div className="cover_our_carousel_row">
                  <ProductItem
                    isNew={item.isNew}
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
                </div>

                <div className="cover_our_carousel_row">
                  <ProductItem
                    isNew={item.isNew}
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
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default memo(MultiCarouselOurProducts);
