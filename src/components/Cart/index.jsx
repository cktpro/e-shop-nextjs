import React, { memo, useCallback, useState } from "react";
import gamepad from "assets/product/gamePad.png";
import laptop from "assets/product/laptop.png";
import { Link } from "react-router-dom";
import { LOCATIONS } from "constants/index";
import styles from "./cart.module.scss";
import { Checkbox } from "antd";

function Cart(props) {
  const [quantity, setQuantity] = useState(1);
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

  const [value, setValue] = useState(1);
  return (
    <div className={`container`}>
      {/* header link  */}
      <div className={`row ${styles.custom_row} ${styles.row_header_link}`}>
        <div className={`col-12 ${styles.custom_col}`}>
          <div className={styles.header_link}>
            <div className={styles.parent_link}>
              <Link to={LOCATIONS.HOME_PAGE}>Home /</Link>
            </div>
            <div className={styles.children_link}>
              <Link to={LOCATIONS.CART}>Cart</Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.block_cart}>
        {/* Shopping Detail Cart  */}
        <div className={"container1 my-5"}>
          {/* Category */}
          <div className={`row ${styles.custom_row} ${styles.row_category}`}>
            <div className={`col-1 ${styles.custom_col}`}>
              <div className={styles.category_checkbox}>
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                  style={{ height: 21, width: 21 }}
                />
              </div>
            </div>
            <div className={`col-4  ${styles.custom_col}`}>
              <div className={styles.category_product}>Product</div>
            </div>

            <div className={`col-2 ${styles.custom_col}`}>
              <div className={styles.category_price}>Price</div>
            </div>

            <div className={`col-2 ${styles.custom_col}`}>
              <div className={styles.category_quantity}>Quantity</div>
            </div>

            <div className={`col-2 ${styles.custom_col}`}>
              <div className={styles.category_subtotal}>Subtotal</div>
            </div>

            <div className={`col-1 ${styles.custom_col}`}>
              <div className={styles.category_operate}>operate</div>
            </div>
          </div>
          <br />

          {/* Detail Product to Cart */}
          <div className={`row ${styles.custom_row} ${styles.row_detail_cart}`}>
            <div className={`col-1 ${styles.custom_col}`}>
              <div className={styles.detail_checkbox}>
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                  style={{ height: 21, width: 21 }}
                />
              </div>
            </div>

            <div className={`col-4  ${styles.custom_col}`}>
              <div className={styles.detail_product}>
                <div className="d-flex center">
                  <img
                    src={require("assets/images/cart/monitor.png")}
                    alt="..."
                    width={54}
                    height={54}
                  />
                  <div className="mx-2 my-3">LCD Monitor</div>
                </div>
              </div>
            </div>

            <div className={`col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2  ${styles.custom_col}`}>
              <div className={styles.detail_price}>$650</div>
            </div>

            {/* Quantity - Cart  */}

            <div
              className={`col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 ${styles.custom_col} ${styles.custom_col_detail_cart}`}
            >
              <div className={styles.cover_quantity}>
                <div onClick={subQuantity} className={styles.subtraction}>
                  <img
                    src={require("assets/productDetail/sub.png")}
                    alt="..."
                  />
                </div>
                <div>
                  <input
                    className={`${styles.quantity_input} ${styles.no_arrow_input}`}
                    type="number"
                    required
                    // value={quantity || 0}
                    value={quantity !== 0 ? parseInt(quantity).toString() : "0"}
                    onChange={handleChangeQuantity}
                    // max={100}
                    // min={1}
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

            <div className={`col-sm-2 ${styles.custom_col}`}>
              <div className={styles.detail_subtotal}>$650</div>
            </div>

            <div className={`col-1 ${styles.custom_col}`}>
              <div className={styles.detail_operation}>
                <button className="btn btn-danger  ">Delete</button>
              </div>
            </div>
          </div>
          {/* <hr  width="90%"/> */}
          <br />

          {/* Detail Product to Cart */}
          <div className={`row ${styles.custom_row} ${styles.row_detail_cart}`}>
            <div className={`col-1 ${styles.custom_col}`}>
              <div className={styles.detail_checkbox}>
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                  style={{ height: 21, width: 21 }}
                />
              </div>
            </div>

            <div className={`col-4  ${styles.custom_col}`}>
              <div className={styles.detail_product}>
                <div className="d-flex center">
                  <img
                    src={require("assets/images/cart/gamePad.png")}
                    alt="..."
                    width={54}
                    height={54}
                  />
                  <div className="mx-2 my-3">GamePad</div>
                </div>
              </div>
            </div>

            <div className={`col-2 ${styles.custom_col}`}>
              <div className={styles.detail_price}>$650</div>
            </div>

            {/* Quantity - Cart  */}

            <div
              className={`col-2  ${styles.custom_col} ${styles.custom_col_detail_cart}`}
            >
              <div className={styles.cover_quantity}>
                <div onClick={subQuantity} className={styles.subtraction}>
                  <img
                    src={require("assets/productDetail/sub.png")}
                    alt="..."
                  />
                </div>
                <div>
                  <input
                    className={`${styles.quantity_input} ${styles.no_arrow_input}`}
                    type="number"
                    required
                    // value={quantity || 0}
                    value={quantity !== 0 ? parseInt(quantity).toString() : "0"}
                    onChange={handleChangeQuantity}
                    // max={100}
                    // min={1}
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

            <div className={`col-sm-2 ${styles.custom_col}`}>
              <div className={styles.detail_subtotal}>$650</div>
            </div>

            <div className={`col-1 ${styles.custom_col}`}>
              <div className={styles.detail_operation}>
                <button className="btn btn-danger  ">Delete</button>
              </div>
            </div>
          </div>
        </div>
        <br />

        <div
          className={`row d-flex justify-content-between ${styles.custom_row} ${styles.row_return_update}`}
        >
          <div
            className={`col-12 col-sm-2 col-md-2 col-lg-2 col-xl-2 ${styles.custom_col}`}
          >
            <div className={styles.return}>
              <button type="button" className="btn btn-outline-danger style ">
                Return To Shop
              </button>
            </div> 
          </div>
          <div
            className={` col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 ${styles.custom_col}`}
          >
            <div className={styles.update}>
              <button
                type="button"
                className="  btn btn-outline-danger style"
                // style={{ height: 56, width: 218 }}
              >
                Update Cart
              </button>
            </div>
          </div>
        </div>
        {/* <hr  width="90%"/> */}

        <div className="d-flex justify-content-between my-4">
          <div className="d-flex justify-content-around gap-lg-3">
            <input
              type="text"
              className="form-control border-1 border-dark w-100"
              placeholder="Coupon Code"
              style={{ height: 56, width: 300 }}
            />
            <button
              className="btn btn-danger w-90"
              style={{ height: 56, width: 211, borderRadius: 4 }}
            >
              Apply Coupon
            </button>
          </div>

          <span
            className="border border-dark  "
            style={{ height: 324, width: 470, margin: "top" }}
          >
            <div className="container mt-3">
              <h5 className="text" width={100} height={28}>
                Cart Total
              </h5>
              <div className="d-flex justify-content-between my-4 ">
                <p>Subtotal:</p>
                <p>1750$</p>
              </div>
              <hr width="99%" color="black" size="1px" />
              <div className="d-flex justify-content-between">
                <p>Shiping:</p>
                <p>Free</p>
              </div>
              <hr width="99%" color="black" size="1px" />
              <div className="d-flex justify-content-between">
                <p>Total:</p>
                <p>1750$</p>
              </div>

              <div className="d-flex justify-content-around">
                <Link to={LOCATIONS.CHECKOUT}>
                  <button className="btn btn-danger ">Process Checkout</button>
                </Link>
              </div>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Cart;
