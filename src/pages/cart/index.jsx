import React, { memo, useCallback, useEffect, useState } from "react";
// import gamepad from "@/assets/product/gamePad.png";
// import laptop from "@/assets/product/laptop.png";
import Link from "next/link";
import Image from "next/image";
import styles from "./cart.module.scss";
import HeadMeta from "@/components/HeadMeta";
import { useCartStore } from "@/zustand/store";
import { message } from "antd";
import { useRouter } from "next/router";
import { formattedMoney } from "@/helper";
import withAuth from "@/components/authentication";
// import { Checkbox } from "antd";

function Cart(props) {
  let total = 0;
  const cart = useCartStore();
  const [selected, setSelected] = useState([]);
  const [showModal, setShowModal] = useState(null);
  const router = useRouter();
  const formSubmit =  async(event) => {
    event.preventDefault();
    await cart.updateCart(selected);
  };
  const handleChange = useCallback(
    (e, index) => {
      if (parseInt(e.target.value) > selected[index].productDetail.stock) {
        const newItem = selected;
        newItem[index].product.quantity = parseInt(
          selected[index].productDetail.stock
        );
        setSelected(newItem);
        message.error(
          `Số lượng sản phầm trong kho chỉ còn ${selected[index].productDetail.stock} sản phẩm`
        );
        e.target.value = selected[index].productDetail.stock;
      }
      const newItem = selected;
      newItem[index].product.quantity = parseInt(e.target.value);
      setSelected(newItem);
    },
    [selected]
  );
  useEffect(() => {
    cart.getListCart()
    if (cart.isSuccess) {
      setSelected(cart.cart);
    }
  }, []);
  return (
    <>
      <HeadMeta title="Cart" />
      <div className={`container`}>
        {/* header link  */}
        <div className={`row ${styles.custom_row} ${styles.row_header_link}`}>
          <div className={`col-12 ${styles.custom_col}`}>
            <div className={styles.header_link}>
              <div className={styles.parent_link}>
                <Link href="/">Home /</Link>
              </div>
              <div className={styles.children_link}>
                <Link href="/">Cart</Link>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.block_cart}>
          {/* Shopping Detail Cart  */}
          <form name="form" onSubmit={formSubmit}>
            <table className={`table text-center ${styles.cart_table}`}>
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Discount</th>
                  <th scope="col">Subtotal</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              {cart.isSuccess ? (
                <tbody>
                  {cart.cart.map((item, index) => {
                    total +=
                      ((item.productDetail.price *
                        (100 - item.productDetail.discount)) /
                        100) *
                      item.product.quantity;
                    return (
                      <tr key={index}>
                        <td>
                          <div className="d-flex align-items-center justify-content-center gap-2">
                            <Image
                              src={item.image.location}
                              alt={item.productDetail.name}
                              className={styles.image}
                              width={100}
                              height={100}
                              priority
                            />
                            <div className="d-flex flex-column align-items-start gap-1">
                              <span>{item.productDetail.name}</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          {formattedMoney(item.productDetail.price)}
                        </td>
                        <td>
                          <input
                            className={styles.cart_input}
                            name="quantity"
                            type="number"
                            min={0}
                            defaultValue={item.product.quantity}
                            onChange={(e) => handleChange(e, index)}
                          />
                        </td>
                        <td>
                          <span className="badge bg-success">
                            {item.productDetail.discount}%
                          </span>
                        </td>
                        <td>
                          
                          {formattedMoney(
                            ((item.productDetail.price *
                              (100 - item.productDetail.discount)) /
                              100) * 
                              (item.product.quantity)
                          )}
                        </td>
                        <td>
                          <div className={`${styles.btn_del}`}>
                            <button
                              id={index}
                              type="button"
                              className="btn btn-danger"
                              on
                              onClick={() => setShowModal(index)}
                            >
                              Delete
                            </button>
                            <div
                              className={
                                showModal === index
                                  ? `${styles.modal} ${styles.btn_active}`
                                  : `${styles.modal}`
                              }
                            >
                              <p>Are you sure delete?</p>
                              <div
                                className={`d-flex justify-content-center gap-1`}
                              >
                                <button
                                  type="button"
                                  className="btn btn-sm btn-primary"
                                  onClick={() =>
                                    cart.removeCart(item.product.varianId)
                                  }
                                >
                                  Xác nhận
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-sm btn-secondary"
                                  onClick={() => setShowModal(null)}
                                >
                                  Hủy
                                </button>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              ) : (
                <tbody>
                  <tr>
                    <td colSpan={5}>Loading</td>
                  </tr>
                </tbody>
              )}
            </table>
            <div className={`d-flex justify-content-between`}>
              <button
                type="button"
                onClick={() => {
                  window.history.back();
                }}
                className="btn btn-outline-dark style "
              >
                Return To Shop
              </button>
              <button type="submit" className="btn btn-outline-dark style">
                Update Cart
              </button>
            </div>
            {/* <hr  width="90%"/> */}
          </form>
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
              {cart.isSuccess ? (
                <div className="container mt-3">
                  <h5 className="text" width={100} height={28}>
                    Cart Total
                  </h5>
                  <div className="d-flex justify-content-between my-4 ">
                    <p>Subtotal:</p>
                    <p>{formattedMoney(total)}</p>
                  </div>
                  <hr width="99%" color="black" size="1px" />
                  <div className="d-flex justify-content-between">
                    <p>Coupon:</p>
                    <p>
                      <span className="badge bg-danger">No</span>
                    </p>
                  </div>
                  <hr width="99%" color="black" size="1px" />
                  <div className="d-flex justify-content-between">
                    <p>Total:</p>
                    <p className="bold">
                      {formattedMoney(total)} +{" "}
                      <span className="badge bg-info">Shipping Fee</span>
                    </p>
                  </div>

                  <div className="d-flex justify-content-around">
                    <Link href="/checkout">
                      <button type="submit" className="btn btn-danger ">
                        Process Checkout
                      </button>
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="container mt-3">Loading</div>
              )}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default withAuth(Cart);
