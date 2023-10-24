import React, { memo } from "react";
import Image from "next/image";
import styles from "./arrowButtonCarousel.module.css";

function ArrowButtonCarousel(props) {
  const { prev, next } = props;
  return (
    <div className={styles.cover_next_back_in}>
      <div className={styles.cover_back} onClick={prev}>
        <Image
          src={require("@/assets/cardList/back.png")}
          className="d-block w-100"
          alt="..."
        />
      </div>
      <div className={styles.cover_next} onClick={next}>
        <Image
          src={require("@/assets/cardList/next.png")}
          className="d-block w-100"
          alt="..."
        />
      </div>
    </div>
  );
}

export default memo(ArrowButtonCarousel);
