import React, { memo, useCallback } from "react";

import styles from "./bestSelling.module.css";
import ViewAllBestSellingButton from "components/button/viewAllBestSelling";
import ProductItem from "components/productItem";

function BestSelling(props) {
  const { list } = props;

  const onClick = useCallback(() => {
    console.log("««««« best selling »»»»»");
  }, []);

  return (
    <div className={`container ${styles.cover_flashsalelist}`}>
      {/* best selling header */}
      <div className={`row ${styles.custom_row} ${styles.row_best_title}`}>
        {/* today best selling */}
        <div
          className={`col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6  ${styles.custom_col} ${styles.cover_category_browse}`}
        >
          <div className={styles.cover_today}>
            <div className={styles.rectangle}></div>

            <div className={styles.this_month}>This Month</div>
          </div>

          <div className={styles.cover_best_text}>Best Selling Products</div>
        </div>

        <div
          className={`col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6  ${styles.custom_col} ${styles.cover_btn_view_all_best}`}
        >
          <ViewAllBestSellingButton onClick={onClick} content={"View All"} />
        </div>
      </div>

      {/* best selling */}
      <div className={`row ${styles.custom_row}`}>
        {/* <div className={styles.cover_best_item}> */}
        {list.map((item, index) => {
          return (
            <div
              key={index}
              className={`col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 ${styles.custom_col} ${styles.cover_item}`}
            >
              <ProductItem
                isNew={item.isNew}
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
          );
        })}
        {/* </div> */}
      </div>

      <hr className={styles.hr_bottom_section} />
    </div>
  );
}

export default memo(BestSelling);
