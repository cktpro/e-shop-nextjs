import React, { memo } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./ourProducts.module.css";
import ViewAllProductsButton from "components/button/viewAllProductsButton";
import MultiCarouselOurProducts from "components/multiCarouselOurProducts";

function OurProducts(props) {
  const navigate = useNavigate();

  const { list } = props;

  const handleClick = () => {
    navigate("http://zing.vn");
  };

  return (
    <div className={`container ${styles.cover_flashsalelist}`}>
      {/* Our Products header */}
      <div className={`row ${styles.custom_row} ${styles.cover_our_title}`}>
        {/* today Our Products */}
        <div
          className={`col-12 ${styles.custom_col} ${styles.cover_today_flashsale}`}
        >
          <div className={styles.cover_today}>
            <div className={styles.rectangle}></div>

            <div className={styles.our_products}>Our Products</div>
          </div>

          <div className={styles.cover_flashsale_text}>
            Explore Our Products
          </div>
        </div>
      </div>

      {/* carousel Our Products */}
      <div className={`row ${styles.custom_row}`}>
        <MultiCarouselOurProducts list={list} />
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

export default memo(OurProducts);
