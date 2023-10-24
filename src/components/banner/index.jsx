import React, { memo } from "react";
import { Link } from "react-router-dom";

import styles from "./banner.module.css";
import "./carousel.css";
import { bannerIndicators } from "constants/index";

function Banner(props) {
  return (
    <div className="container">
      <div className={`row ${styles.custom_row}`}>
        <div className="col-0 col-sm-4 col-md-4 col-lg-4 col-xl-4"></div>
        <div className="col-12 col-sm-8 col-md-8 col-lg-8 col-xl-8">
          {/* begin banner */}
          <div
            id="carouselExampleIndicators"
            className={`carousel slide carousel-fade ${styles.cover_banner}`}
            data-bs-ride="carousel"
          >
            {/* banner dot */}
            <div
              className={`carousel-indicators ${styles.carousel_indicators}`}
            >
              {bannerIndicators.map((item, index) => {
                if (index === 0) {
                  return (
                    <button
                      key={index}
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to={index}
                      className="active"
                      aria-current="true"
                      aria-label={item.label}
                    />
                  );
                }

                return (
                  <button
                    key={index}
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to={index}
                    aria-label={item.label}
                  />
                );
              })}
            </div>

            {/* banner img */}
            <div className={`carousel-inner ${styles.carousel_inner}`}>
              {bannerIndicators.map((item, index) => {
                if (index === 0) {
                  return (
                    <div
                      key={index}
                      className={`carousel-item active ${styles.carousel_item}`}
                    >
                      <Link to={item.link}>
                        <img
                          src={item.src}
                          className="d-block w-100"
                          alt="..."
                        />
                      </Link>
                    </div>
                  );
                }

                return (
                  <div
                    key={index}
                    className={`carousel-item ${styles.carousel_item}`}
                  >
                    <Link to={item.link}>
                      <img src={item.src} className="d-block w-100" alt="..." />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Banner);
