import React, { memo, useEffect, useState } from "react";

import styles from "./timeAdv.module.css";
import { formatNumberToString, formatTime } from "helper";

function TimeAdv(props) {
  const { second } = props;

  let interval;

  const [numOfSecond, setNumOfSecond] = useState(second);
  const [dateTime, setDateTime] = useState(formatTime(second));

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    interval = setInterval(() => {
      setNumOfSecond((s) => s - 1);
    }, 1000);

    if (numOfSecond === 0) {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [numOfSecond]);

  useEffect(() => {
    if (numOfSecond === 0) {
      clearInterval(interval);
    }

    setDateTime(formatTime(numOfSecond));

    return () => {
      clearInterval(interval);
    };
  }, [interval, numOfSecond]);

  return (
    <div className={`row ${styles.custom_row} ${styles.adv_timer}`}>
      <div
        className={`col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 ${styles.custom_col_adv_timer}`}
      >
        <div className={styles.adv_timer_content}>
          <div className={styles.adv_number}>
            {formatNumberToString(dateTime.day)}
          </div>

          <div className={styles.adv_text}>Days</div>
        </div>
      </div>

      <div
        className={`col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 ${styles.custom_col_adv_timer}`}
      >
        <div className={styles.adv_timer_content}>
          {/* <div className={styles.adv_timer_content}> */}
          <div className={styles.adv_number}>
            {formatNumberToString(dateTime.hour)}
          </div>

          <div className={styles.adv_text}>Hours</div>
          {/* </div> */}
        </div>
      </div>

      <div
        className={`col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 ${styles.custom_col_adv_timer}`}
      >
        <div className={styles.adv_timer_content}>
          {/* <div className={styles.adv_timer_content}> */}
          <div className={styles.adv_number}>
            {formatNumberToString(dateTime.minute)}
          </div>

          <div className={styles.adv_text}>Minutes</div>
          {/* </div> */}
        </div>
      </div>

      <div
        className={`col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 ${styles.custom_col_adv_timer}`}
      >
        <div className={styles.adv_timer_content}>
          {/* <div className={styles.adv_timer_content}> */}
          <div className={styles.adv_number}>
            {formatNumberToString(dateTime.second)}
          </div>

          <div className={styles.adv_text}>Seconds</div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default memo(TimeAdv);
