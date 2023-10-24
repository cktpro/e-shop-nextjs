import React, { memo } from "react";

import styles from "./categoryList.module.css";
import MultiCarouselCategories from "components/multiCarouselCategories";

function CategoryList(props) {
  const { list } = props;

  return (
    <div className={`container ${styles.cover_flashsalelist}`}>
      {/* category header */}
      <div className={`row ${styles.custom_row}`}>
        {/* title category */}
        <div
          className={`col-12 ${styles.custom_col} ${styles.cover_category_browse}`}
        >
          <div className={styles.cover_today}>
            <div className={styles.rectangle}></div>

            <div className={styles.today}>Categories</div>
          </div>

          <div className={styles.cover_category_text}>Browse By Category</div>
        </div>
      </div>

      {/* carousel categories */}
      <div className={`row ${styles.custom_row}`}>
        <MultiCarouselCategories list={list} />
      </div>

      <hr className={styles.hr_bottom_section} />
    </div>
  );
}

export default memo(CategoryList);
