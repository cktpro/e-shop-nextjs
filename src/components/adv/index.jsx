import React, { memo } from "react";

import styles from "./adv.module.css";
import TimeAdv from "components/timeAdv";

function Adv() {
  return (
    // section adv
    <div className={`container`}>
      <div className={`row ${styles.custom_row} ${styles.cover_adv}`}>
        {/* adv info */}
        <div
          className={`col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 ${styles.adv_info}`}
        >
          {/* adv categories */}
          <div className={styles.adv_category}>Categories</div>

          {/* adv title */}
          <div className={styles.adv_title}>Enhance Your Music Experience</div>

          {/* adv timer */}
          <TimeAdv second={864005} />

          {/* adv buy now */}
          <button className={styles.adv_btn_buy}>Buy Now!</button>
        </div>

        <div
          className={`col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 ${styles.cover_adv_image}`}
        >
          <img
            className={styles.adv_image}
            src="static/media/loa.png"
            alt="..."
          />
        </div>
      </div>
    </div>
  );
}

export default memo(Adv);
