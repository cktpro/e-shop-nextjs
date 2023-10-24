import React, { memo, useCallback, useState } from "react";

import styles from "./productDetail.module.scss";
import SwiperProductImage from "./swiperProductImage";
import { renderStars } from "helper";
import RelatedProducts from "components/relatedProducts";
import bestSelling from "data/bestSelling.json";

function ProductDetail() {
  const [colorSelected, setColorSelected] = useState("1");

  const [sizeSelected, setSizeSelected] = useState("1");

  const [quantity, setQuantity] = useState(0);

  const handleSelectedColor = useCallback((e) => {
    setColorSelected(e.target.id);
  }, []);

  const handleSelectedSize = useCallback((e) => {
    setSizeSelected(e.target.id);
  }, []);

  const subQuantity = useCallback(() => {
    if (quantity <= 0) {
      return;
    }
    setQuantity((quantity) => quantity - 1);
  }, [quantity]);

  const sumQuantity = useCallback(() => {
    setQuantity((quantity) => quantity + 1);
  }, []);

  const handleChangeQuantity = useCallback((e) => {
    if (!e.target.value) {
      setQuantity(0);
      return;
    }
    setQuantity(parseInt(e.target.value));
  }, []);

  const handleBuyNow = useCallback(() => {
    console.log("««««« colorSelected »»»»»", colorSelected);
    console.log("««««« sizeSelected »»»»»", sizeSelected);
    console.log("««««« quantity »»»»»", quantity);
  }, [colorSelected, quantity, sizeSelected]);

  return (
    <div className={`container`}>
      {/* header link */}
      <div className={`row ${styles.custom_row} ${styles.row_header_link}`}>
        <div className={`col-12 ${styles.custom_col}`}>
          <div className={styles.header_link}>
            <div className={styles.parent_link}>Products /</div>

            <div className={styles.children_link}>GamePad</div>
          </div>
        </div>
      </div>

      {/* product detail */}
      <div className={`row ${styles.custom_row} ${styles.row_product_detail}`}>
        {/* product image */}
        <div
          className={`col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 ${styles.custom_col}`}
        >
          <SwiperProductImage />
        </div>

        <div
          className={`col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 ${styles.custom_col}`}
        >
          {/* product name */}
          <div
            className={`row ${styles.custom_row} ${styles.row_product_name}`}
          >
            <div className={`col-12 ${styles.custom_col}`}>
              <div className={styles.product_name}>Havic HV G-92 Gamepad</div>
            </div>
          </div>

          {/* evaluate stock */}
          <div
            className={`row ${styles.custom_row} ${styles.row_evaluate_stock}`}
          >
            {/* star */}
            <div
              className={`col-12 col-sm-2 col-md-2 col-lg-2 col-xl-2 ${styles.custom_col}`}
            >
              <div className={styles.star}>{renderStars(4)}</div>
            </div>

            {/* num of evaluate */}
            <div
              className={`col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 ${styles.custom_col}`}
            >
              <div className={styles.num_of_evaluate}>(150 Reviews)</div>
            </div>

            {/* num of stock */}
            <div
              className={`col-12 col-sm-2 col-md-2 col-lg-2 col-xl-2 ${styles.custom_col}`}
            >
              <div className={styles.num_of_stock}>Stock: 150</div>
            </div>
          </div>

          {/* price */}
          <div className={`row ${styles.custom_row} ${styles.row_price}`}>
            <div className={`col-12 ${styles.custom_col}`}>
              <div className={styles.price}>10.000.000 VND</div>
            </div>
          </div>

          {/* description */}
          <div className={`row ${styles.custom_row} ${styles.row_description}`}>
            <div className={`col-12 ${styles.custom_col}`}>
              <div className={styles.description}>
                PlayStation 5 Controller Skin High quality vinyl with air
                channel adhesive for easy bubble free install & mess free
                removal Pressure sensitive.
              </div>
            </div>
          </div>

          {/* hr */}
          <div className={`row ${styles.custom_row} ${styles.row_hr}`}>
            <div className={`col-12 ${styles.custom_col}`}>
              <div className={styles.hr}>
                <hr />
              </div>
            </div>
          </div>

          {/* colours */}
          <div className={`row ${styles.custom_row} ${styles.row_colours}`}>
            <div className={`col-12 ${styles.custom_col}`}>
              <div className={styles.colours}>
                {/* colours text */}
                <div className={styles.colours_text}>Colours:</div>

                {/* colours text */}
                <div className={styles.colours_options}>
                  <div
                    id="1"
                    className={`${styles.colored_div} ${
                      colorSelected === "1" && styles.selectedColor
                    }`}
                    style={{ "--bg-color": "#FF0000" }}
                    onClick={handleSelectedColor}
                  ></div>

                  <div
                    id="2"
                    className={`${styles.colored_div} ${
                      colorSelected === "2" && styles.selectedColor
                    }`}
                    style={{ "--bg-color": "#00FF00" }}
                    onClick={handleSelectedColor}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* size */}
          <div className={`row ${styles.custom_row} ${styles.row_size}`}>
            <div
              className={`col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 ${styles.custom_col}`}
            >
              <div className={styles.size_label}>Size:</div>
            </div>

            <div
              className={`col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8 ${styles.custom_col}`}
            >
              <div className={styles.size_options}>
                <div
                  id="1"
                  onClick={handleSelectedSize}
                  className={`${styles.size} ${
                    sizeSelected === "1" && styles.selectedSize
                  }`}
                >
                  XS
                </div>

                <div
                  id="2"
                  onClick={handleSelectedSize}
                  className={`${styles.size} ${
                    sizeSelected === "2" && styles.selectedSize
                  }`}
                >
                  S
                </div>

                <div
                  id="3"
                  onClick={handleSelectedSize}
                  className={`${styles.size} ${
                    sizeSelected === "3" && styles.selectedSize
                  }`}
                >
                  M
                </div>

                <div
                  id="4"
                  onClick={handleSelectedSize}
                  className={`${styles.size} ${
                    sizeSelected === "4" && styles.selectedSize
                  }`}
                >
                  L
                </div>

                <div
                  id="5"
                  onClick={handleSelectedSize}
                  className={`${styles.size} ${
                    sizeSelected === "5" && styles.selectedSize
                  }`}
                >
                  XL
                </div>
              </div>
            </div>
          </div>

          {/* quantity - buy */}
          <div
            className={`row ${styles.custom_row} ${styles.row_quantity_buy}`}
          >
            <div
              className={`col-12 col-sm-12 col-md-3 col-lg-5 col-xl-4 ${styles.custom_col} ${styles.custom_col_quantity_buy}`}
            >
              <div className={styles.cover_quantity}>
                <div onClick={subQuantity} className={styles.subtraction}>
                  <img
                    src={require("assets/productDetail/sub.png")}
                    alt="..."
                  />
                </div>

                <div className={styles.quantity}>
                  <input
                    className={`${styles.quantity_input} ${styles.no_arrow_input}`}
                    type="number"
                    required
                    // value={quantity || 0}
                    value={quantity !== 0 ? parseInt(quantity).toString() : '0'}
                    onChange={handleChangeQuantity}
                  />
                </div>

                <div onClick={sumQuantity} className={styles.summation}>
                  <img
                    src={require("assets/productDetail/sum.png")}
                    alt="..."
                  />
                </div>
              </div>
            </div>

            <div
              className={`col-12 col-sm-12 col-md-3 col-lg-5 col-xl-4 ${styles.custom_col} ${styles.custom_col_quantity_buy}`}
            >
              <div className={styles.cover_buy_now}>
                <button onClick={handleBuyNow} className={styles.buy_now}>
                  Buy Now
                </button>
              </div>
            </div>

            <div
              className={`col-12 col-sm-12 col-md-1 col-lg-2 col-xl-1 ${styles.custom_col} ${styles.custom_col_quantity_buy}`}
            >
              <div className={styles.cover_love}>
                <div className={styles.love}>
                  <img
                    src={require("assets/productDetail/love.png")}
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>

          {/* delivery */}
          <div className={`row ${styles.custom_row} ${styles.row_delivery}`}>
            <div className={`col-12 ${styles.custom_col}`}>
              <div className={styles.cover_delivery}>
                <div className={styles.free_delivery}>
                  <div className={styles.cover_icon_delivery}>
                    <img
                      src={require("assets/productDetail/icon-delivery.png")}
                      alt="..."
                    />
                  </div>

                  <div className={styles.cover_delivery_info}>
                    <div className={styles.free_delivery_title}>
                      Free Delivery
                    </div>

                    <div className={styles.free_delivery_content}>
                      Enter your postal code for Delivery Availability
                    </div>
                  </div>
                </div>

                <div className={styles.hr}>
                  <hr />
                </div>

                <div className={styles.free_delivery}>
                  <div className={styles.cover_icon_delivery}>
                    <img
                      src={require("assets/productDetail/Icon-return.png")}
                      alt="..."
                    />
                  </div>

                  <div className={styles.cover_delivery_info}>
                    <div className={styles.free_delivery_title}>
                      Return Delivery
                    </div>

                    <div className={styles.free_delivery_content}>
                      Free 30 Days Delivery Returns. Details
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <RelatedProducts list={bestSelling} />
    </div>
  );
}

export default memo(ProductDetail);
