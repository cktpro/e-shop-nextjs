import React, { memo } from "react";

import styles from "./viewAllProducts.module.css";

function ViewAllProductsButton(props) {
  const { content, onClick } = props;

  return (
    <button onClick={onClick} className={styles.view_all_products}>
      <div className={styles.button_content}>{content}</div>
    </button>
  );
}

export default memo(ViewAllProductsButton);
