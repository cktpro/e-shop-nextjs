import React, { memo, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./timeFlashSale.module.css";
import { formatTime, formatNumberToString } from "@/helper";

function TimeFlashSale(props) {
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
    <div className={styles.cover_time_in}>
      <div className={styles.cover_day}>
        <div className={styles.day}>Days</div>

        <div className={styles.day_num}>
          {formatNumberToString(dateTime.day)}
        </div>
      </div>

      <div className={styles.cover_two_dot_1}>
        <Image
          src={require("@/assets/cardList/twoDot.png")}
          className="d-block w-100"
          alt="..."
        />
      </div>

      <div className={styles.cover_hour}>
        <div className={styles.hour}>Hours</div>

        <div className={styles.hour_num}>
          {formatNumberToString(dateTime.hour)}
        </div>
      </div>

      <div className={styles.cover_two_dot_2}>
        <Image
          src={require("@/assets/cardList/twoDot.png")}
          className="d-block w-100"
          alt="..."
        />
      </div>

      <div className={styles.cover_minute}>
        <div className={styles.minute}>Minutes</div>

        <div className={styles.minute_num}>
          {formatNumberToString(dateTime.minute)}
        </div>
      </div>

      <div className={styles.cover_two_dot_3}>
        <Image
          src={require("@/assets/cardList/twoDot.png")}
          className="d-block w-100"
          alt="..."
        />
      </div>

      <div className={styles.cover_second}>
        <div className={styles.second}>Seconds</div>

        <div className={styles.second_num}>
          {formatNumberToString(dateTime.second)}
        </div>
      </div>
    </div>
  );
}

export default memo(TimeFlashSale);
