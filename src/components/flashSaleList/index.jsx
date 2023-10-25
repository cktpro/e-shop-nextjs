import React, { memo } from "react";

import styles from "./flashSaleList.module.css";
import MultiCarouselFlashSale from "@/components/multiCarousel";
import ViewAllProductsButton from "@/components/button/viewAllProductsButton";
import TimeFlashSale from "@/components/timeFlashSale";

function FlashSaleList(props) {

  const { list } = props;

  const handleClick = () => {
    navigate("http://zing.vn");
  };

  return (
    <div className={`container ${styles.cover_flashsalelist}`}>
      {/* flash sale header */}
      <div className={`row ${styles.custom_row}`}>
        {/* today flash sale */}
        <div
          className={`col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 ${styles.custom_col} ${styles.cover_today_flashsale}`}
        >
          <div className={styles.cover_today}>
            <div className={styles.rectangle}></div>

            <div className={styles.today}>Today’s</div>
          </div>

          <div className={styles.cover_flashsale_text}>Flash Sales</div>
        </div>

        {/* flash sale time */}
        <div
          className={`col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 ${styles.custom_col} ${styles.cover_time_out}`}
        >
          <TimeFlashSale second={864005} />
        </div>
      </div>

      {/* carousel flash sale products */}
      <div className={`row ${styles.custom_row} ${styles.cover_img}`}>
        <MultiCarouselFlashSale list={list} />
      </div>

      {/* button view all products */}
      <div className={styles.cover_view_all_products}>
        <ViewAllProductsButton
          onClick={handleClick}
          content={"View All Products"}
        />
      </div>

      <hr className={styles.hr_bottom_section} />
    </div>
  );
}

export default memo(FlashSaleList);
