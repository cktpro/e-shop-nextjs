import React, { memo } from "react";

import styles from "./servicesMenu.module.css";

function ServicesMenu() {
  return (
    // bottom menu
    <div className={`container`}>
      <div className={`row ${styles.custom_row_services}`}>
        <div
          className={`col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 ${styles.custom_col_services}`}
        >
          <div className={styles.cover_service_item}>
            <div className={styles.service_icon}>
              <img
                className={styles.service_img}
                src="static/media/shipping.png"
                alt="..."
              />
            </div>

            <div className={styles.cover_service_info}>
              <div className={styles.service_title}>FREE AND FAST DELIVERY</div>

              <div className={styles.service_info}>
                Free delivery for all orders over $140
              </div>
            </div>
          </div>
        </div>

        <div
          className={`col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 ${styles.custom_col_services}`}
        >
          <div className={styles.cover_service_item}>
            <div className={styles.service_icon}>
              <img
                className={styles.service_img}
                src="static/media/custom.png"
                alt="..."
              />
            </div>

            <div className={styles.cover_service_info}>
              <div className={styles.service_title}>24/7 CUSTOMER SERVICE</div>

              <div className={styles.service_info}>
                Friendly 24/7 customer support
              </div>
            </div>
          </div>
        </div>

        <div
          className={`col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 ${styles.custom_col_services}`}
        >
          <div className={styles.cover_service_item}>
            <div className={styles.service_icon}>
              <img
                className={styles.service_img}
                src="static/media/sercurity.png"
                alt="..."
              />
            </div>

            <div className={styles.cover_service_info}>
              <div className={styles.service_title}>MONEY BACK GUARANTEE</div>

              <div className={styles.service_info}>
                We reurn money within 30 days
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(ServicesMenu);
