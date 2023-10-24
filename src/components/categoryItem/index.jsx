import React, { memo } from "react";

import styles from "./categoryItem.module.css";

function CategoryItem(props) {
  const { imgSrc, name } = props;

  return (
    // category item
    <div className={styles.coverCategoryItem}>
      <div className={styles.cover_category_img}>
        <img className={styles.category_img} src={imgSrc} alt="..." />
      </div>

      <div className={styles.cover_category_text}>{name}</div>
    </div>
  );
}

export default memo(CategoryItem);
