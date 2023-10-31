import React, { memo, useCallback, useState } from "react";
// import gamepad from "@/assets/product/gamePad.png";
// import laptop from "@/assets/product/laptop.png";
import Link from "next/link";
import Image from "next/image";
import styles from "./cart.module.scss";
import HeadMeta from "@/components/HeadMeta";
// import { Checkbox } from "antd";
const fakeItem = [
  {
    id: 1,
    name: "LCD Monitor",
    image: require("@/assets/images/cart/monitor.png"),
    price: 650,
    quantity: 10,
    discount: 5,
  },
  {
    id: 2,
    name: "Hi Gamepad",
    image: require("@/assets/images/cart/gamePad.png"),
    price: 550,
    quantity: 2,
    discount: 4,
  },
];
function Cart(props) {
  let total=0
  const [product,setProduct]=useState(fakeItem)
  const [selected,setSelected]=useState([])
  const formSubmit =(event)=>{
    event.preventDefault()
    console.log('◀◀◀ check ▶▶▶',product);
    console.log('◀◀◀ selected ▶▶▶',selected);

  }
const handleChecked=(e,item)=>{
  if(e.target.checked)
  setSelected((prev)=>[...prev,item])
}
const deleteItem=useCallback((index)=>{
  const newProduct=product
  newProduct.splice(index,1)
  setProduct([...newProduct])
  console.log('◀◀◀ index ▶▶▶',newProduct);
},[product])
const handleChange=useCallback((e,index)=>{
  const newProduct=product
  newProduct[index].quantity= e.target.value
  setProduct(newProduct)
},[product])
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
                <th scope="col">
                  <input type="checkbox"  />
                </th>
                <th scope="col">Product</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Discount</th>
                <th scope="col">Subtotal</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody >
              {
                product.map((item,index)=>{
                 total += item.price * (100 - item.discount) / 100
                  return <tr key={index} >
                    <td><input type="checkbox" onChange={(e)=>handleChecked(e,item)}/></td>
                    <td ><Image src={item.image} alt={item.name} width={80} height={80} /><span className="ms-2">{item.name}</span></td>
                    <td>${item.price}</td>
                    <td><input className={styles.cart_input} name="quantity" type="number" defaultValue={item.quantity} onChange={(e)=>handleChange(e,index)} /></td>
                    <td ><span className="badge bg-success">{item.discount}%</span></td>
                    <td>${item.price * (100 - item.discount) / 100}</td>
                    <td><button type="button" onClick={()=>deleteItem(index)} className="btn btn-danger">Delete</button></td>
                  </tr>
                })
              }
            </tbody>
          </table>
          <div
            className={`d-flex justify-content-between`}
          >
           <button
                  type="button"
                  onClick={() => {
                    window.history.back();
                  }}
                  className="btn btn-outline-dark style"
                >
                  Return To Shop
                </button>
                <button
                  type="submit"
                  className="btn btn-outline-dark style"
                >
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
              <div className="container mt-3">
                <h5 className="text" width={100} height={28}>
                  Cart Total
                </h5>
                <div className="d-flex justify-content-between my-4 ">
                  <p>Subtotal:</p>
                  <p>${total}</p>
                </div>
                <hr width="99%" color="black" size="1px" />
                <div className="d-flex justify-content-between">
                  <p>Shiping:</p>
                  <p ><span className="badge bg-info">Free</span></p>
                </div>
                <hr width="99%" color="black" size="1px" />
                <div className="d-flex justify-content-between">
                  <p>Total:</p>
                  <p>${total}</p>
                </div>

                <div className="d-flex justify-content-around">
                  <Link href="/checkout">
                    <button className="btn btn-danger ">
                      Process Checkout
                    </button>
                  </Link>
                </div>
              </div>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
