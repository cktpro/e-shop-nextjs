import React, { memo } from "react";

import styles from "./viewAllBest.module.css";

function ViewAllBestSellingButton(props) {
  const { content, onClick } = props;

  return (
    <button onClick={onClick} className={styles.view_all_best}>
      <div className={styles.button_content}>{content}</div>
    </button>
  );
}

export default memo(ViewAllBestSellingButton);
