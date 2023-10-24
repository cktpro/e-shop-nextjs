import React, { memo } from "react";

import styles from "./featured.module.css";

function Featured(props) {
  return (
    <div className={`container ${styles.cover_flashsalelist}`}>
      {/* Featured header */}
      <div className={`row ${styles.custom_row} ${styles.row_best_title}`}>
        {/* Featured title */}
        <div
          className={`col-12 ${styles.custom_col} ${styles.cover_category_browse}`}
        >
          <div className={styles.cover_today}>
            <div className={styles.rectangle}></div>

            <div className={styles.this_month}>Featured</div>
          </div>

          <div className={styles.cover_best_text}>New Arrival</div>
        </div>
      </div>

      {/* Featured info */}
      <div className={`row ${styles.custom_row} ${styles.row_featured}`}>
        {/* large featured */}
        <div
          className={`col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 ${styles.custom_col_featured}`}
        >
          <div className={styles.big_featured}>
            <div className={styles.large_featured_info}>
              <div className={styles.large_featured_info_title}>
                PlayStation 5
              </div>

              <div className={styles.large_featured_info_text}>
                Black and White version of the PS5 coming out on sale.
              </div>

              <div className={styles.large_featured_info_shop_now}>
                Shop Now
              </div>
            </div>

            <div className={styles.cover_img_featured_big}>
              <img
                className={styles.img_featured_big}
                src="static/media/featured_big.png"
                alt="..."
              />
            </div>
          </div>
        </div>

        <div
          className={`col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 ${styles.custom_col_featured}`}
        >
          {/* small featured */}
          <div className={`row ${styles.custom_row}`}>
            <div className={`col-12 ${styles.custom_col_featured_small}`}>
              <div className={styles.small_featured}>
                <div className={styles.small_featured_info}>
                  <div className={styles.small_featured_info_title}>
                    PlayStation 5
                  </div>

                  <div className={styles.small_featured_info_text}>
                    Black and White version of the PS5 coming out on sale.
                  </div>

                  <div className={styles.small_featured_info_shop_now}>
                    Shop Now
                  </div>
                </div>

                <div className={styles.cover_img_featured_small}>
                  <img
                    className={styles.img_featured_small}
                    src="static/media/featured_small.png"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>

          {/* mini featured */}
          <div className={`row ${styles.custom_row_mini_featured}`}>
            {/* mini featured 1 */}
            <div
              className={`col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 ${styles.custom_col_mini_featured} ${styles.featured_mini_1}`}
            >
              <div className={styles.cover_mini_featured}>
                <div className={styles.mini_featured_info}>
                  <div className={styles.mini_featured_info_title}>
                    PlayStation 5
                  </div>

                  <div className={styles.mini_featured_info_text}>
                    Black and White version of the PS5 coming out on sale.
                  </div>

                  <div className={styles.mini_featured_info_shop_now}>
                    Shop Now
                  </div>
                </div>
                
                <img
                  className={styles.img_mini_featured}
                  src="static/media/featured_mini1.png"
                  alt="..."
                />
              </div>
            </div>

            {/* mini featured 2 */}
            <div
              className={`col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 ${styles.custom_col_mini_featured} ${styles.featured_mini_2}`}
            >
              <div className={styles.cover_mini_featured_2}>
              <div className={styles.mini_featured_info_2}>
                  <div className={styles.mini_featured_info_title_2}>
                    PlayStation 5
                  </div>

                  <div className={styles.mini_featured_info_text_2}>
                    Black and White version of the PS5 coming out on sale.
                  </div>

                  <div className={styles.mini_featured_info_shop_now_2}>
                    Shop Now
                  </div>
                </div>

                <img
                  className={styles.img_mini_featured}
                  src="static/media/featured_mini2.png"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Featured);
