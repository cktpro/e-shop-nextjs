import React, { useEffect, useState } from "react";
import styles from "./checkout.module.scss";
import gamepad from "@/assets/product/gamePad.png";
import laptop from "@/assets/product/laptop.png";
import visa from "@/assets/images/payment-method/Visa.wine.svg";
import bkash from "@/assets/images/payment-method/Bkash.wine.svg";
import nagad from "@/assets/images/payment-method/Nagad.wine.svg";
import master_card from "@/assets/images/payment-method/Mastercard.wine.svg";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { headers } from "../../../next.config";
function Checkout(props) {
  const[province,setProvince]=useState([])
  const[distric,setDistric]=useState([])
  const[ward,setWard]=useState([])
  const getProvince= async()=>{
    try {
      axios.defaults.headers.common['token'] = "b100dde3-66b8-11ee-96dc-de6f804954c9"
      const res = await axios.get("https://online-gateway.ghn.vn/shiip/public-api/master-data/province")
      setProvince(res.data.data)
    } catch (error) {
      console.log('◀◀◀ error ▶▶▶',error);
    }
  }
  const getDistric= async(provinceId)=>{
    console.log('◀◀◀ provinceId ▶▶▶',provinceId);
    try {
      const data={
        'province_id':parseInt(provinceId)
      }
      // axios.defaults.headers.common['token'] = "b100dde3-66b8-11ee-96dc-de6f804954c9"
      const res = await axios.post("https://online-gateway.ghn.vn/shiip/public-api/master-data/district",data)
      setDistric(res.data.data)
    } catch (error) {
      console.log('◀◀◀ error ▶▶▶',error);
    }
  }
  const getWard= async(districId)=>{
    try {
      const data={
        'district_id':parseInt(districId)
      }
      // axios.defaults.headers.common['token'] = "b100dde3-66b8-11ee-96dc-de6f804954c9"
      const res = await axios.post("https://online-gateway.ghn.vn/shiip/public-api/master-data/ward?district_id",data)
      setWard(res.data.data)
    } catch (error) {
      console.log('◀◀◀ error ▶▶▶',error);
    }
  }
  const getFeeShip= async()=>{
    try {
      const data={
        'district_id':parseInt(districId)
      }
      // axios.defaults.headers.common['token'] = "b100dde3-66b8-11ee-96dc-de6f804954c9"
      const res = await axios.post("https://online-gateway.ghn.vn/shiip/public-api/master-data/ward?district_id",data)
      setWard(res.data.data)
    } catch (error) {
      console.log('◀◀◀ error ▶▶▶',error);
    }
  }

 useEffect(()=>{
  getProvince();
 },[])
  
  return (
    <div className="container mb-5">
      {/* header link */}
      <div className="d-flex my-5 text-black-50 form-text">
        <Link href="/account">Account</Link>
        <span className="mx-2">/</span>
        <Link href="/my-account">My Account</Link>
        <span className="mx-2">/</span>
        <Link href="/product">Product</Link>
        <span className="mx-2">/</span>
        <Link href="/cart">View Cart</Link>
        <span className="mx-2">/</span>
        {/* active text-body */}
        <Link href="/cart-checkout" className="text-body">
          CheckOut
        </Link>
      </div>
      <h1 className="mb-5">Billing Details</h1>

      <div className="row">
        <div className="col-12 col-md-6">
          <div className="row g-3">
            <div className="col-12 col-lg-10">
              <label htmlFor="first_name" className={`form-label text-black-50 ${styles.required}`}>
                First Name
              </label>
              <input type="text" className={`form-control ${styles.input_info}`} id="first_name" />
            </div>
            <div className="col-12 col-lg-10">
              <label
                htmlFor="company_name"
                className="form-label text-black-50"
              >
                Company Name
              </label>
              <input type="text" className={`form-control ${styles.input_info}`} id="company_name" />
            </div>
            <div className="col-12 col-lg-10">
              <label
                htmlFor="street_address"
                className={`form-label text-black-50 ${styles.required}`}
              >
                Street Address
              </label>
              <input type="text" className={`form-control ${styles.input_info}`} id="street_address" />
            </div>
            <div className="col-12 col-lg-10">
              <label htmlFor="apartment" className="form-label text-black-50">
                Apartment, floor, etc. (optional)
              </label>
              <input type="text" className={`form-control ${styles.input_info}`} id="apartment" />
            </div>
            <div className="col-12 col-lg-10">
              <label htmlFor="apartment" className="form-label text-black-50">
                Tỉnh/Thành Phố
              </label>
              <select className={`form-control ${styles.input_info}`} onChange={(e)=>getDistric(e.target.value)} name="province" >
                {
                  province.map((item,idx)=>{
                    return <option value={item.ProvinceID}  key={idx}  >{item.ProvinceName} </option>
                  })
                }
              </select>
            </div>
            <div className="col-12 col-lg-10">
              <label htmlFor="apartment" className="form-label text-black-50">
                Quận/Huyện
              </label>
              <select className={`form-control ${styles.input_info}`} onChange={(e)=>getWard(e.target.value)} name="distric" >
                {
                  distric.map((item,idx)=>{
                    return <option value={item.DistrictID}  key={idx}  >{item.DistrictName} </option>
                  })
                }
              </select>
            </div>
            <div className="col-12 col-lg-10">
              <label htmlFor="apartment" className="form-label text-black-50">
                Phường/Xã
              </label>
              <select className={`form-control ${styles.input_info}`}  name="distric" >
                {
                  ward.map((item,idx)=>{
                    return <option value={item.WardCode}  key={idx}  >{item.WardName} </option>
                  })
                }
              </select>
            </div>
            <div className="col-12 col-lg-10">
              <label htmlFor="town_city" className={`form-label text-black-50 ${styles.required}`}>
                Town/City
              </label>
              <input type="text" className={`form-control ${styles.input_info}`} id="town_city" />
            </div>
            <div className="col-12 col-lg-10">
              <label
                htmlFor="phone_number"
                className={`form-label text-black-50 ${styles.required}`}
              >
                Phone Number
              </label>
              <input type="text" className={`form-control ${styles.input_info}`} id="phone_number" />
            </div>
            <div className="col-12 col-lg-10">
              <label htmlFor="email" className={`form-label text-black-50 ${styles.required}`}>
                Email Address
              </label>
              <input type="email" className={`form-control ${styles.input_info}`} id="email" />
            </div>
            <div className="col-12 col-lg-10">
              <div className="form-check d-flex align-items-center">
                <input
                  className={`form-check-input fs-5 text mt-0 ${styles.checkbox}`}
                  type="checkbox"
                  name="checkbox"
                  id="save_info"
                  style={{ marginLeft: "-1.5rem" }}
                />
                <label className="form-check-label mx-3" htmlFor="save_info">
                  Save this information for faster check-out next time
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="row justify-content-end mt-2 g-3">
            <div className="col-12 col-md-11">
              <div className="row g-3">
                <div className="col-12 col-lg-10 d-flex justify-content-between align-items-center p-2">
                  <div className="d-flex align-items-center">
                    <Image src={gamepad} alt="gamepad" width={50} height="auto" />
                    <div className="mx-2">LCD Monitor</div>
                  </div>
                  <label>$650</label>
                </div>
                <div className="col-12 col-lg-10 d-flex justify-content-between align-items-center p-2">
                  <div className="d-flex align-items-center">
                    <Image src={laptop} alt="laptop" width={50} height="auto" />
                    <div className="mx-2">H1 GamePad</div>
                  </div>
                  <label>$1100</label>
                </div>
                <div className="col-12 col-lg-10 g-2 px-2">
                  <div className="d-flex justify-content-between align-items-center my-2">
                    <label>Subtotal:</label>
                    <label>$1750</label>
                  </div>
                  <hr className="hr border-2" />
                  <div className="d-flex justify-content-between align-items-center my-2">
                    <label>Shipping:</label>
                    <label>Free</label>
                  </div>
                  <hr className="hr border-2" />
                  <div className="d-flex justify-content-between align-items-center my-2">
                    <label>Total:</label>
                    <label>$1750</label>
                  </div>
                </div>
                <div className="col-12 col-lg-10 d-flex justify-content-between align-items-center py-1 px-2 g-1">
                  <div className="d-flex align-items-center">
                    <div className="form-check d-flex align-items-center">
                      <input
                        className={`form-check-input fs-5 text mt-0 ${styles.radio}`}
                        type="radio"
                        name="payment_method"
                        id="payment_method_1"
                        style={{ marginLeft: "-1.5rem" }}
                      />
                      <label
                        className="form-check-label mx-2"
                        htmlFor="payment_method_1"
                      >
                        Bank
                      </label>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <Image src={bkash} alt="bkash" width={40} height={40} />
                    <Image src={visa} alt="visa" width={40} height={40} />
                    <Image
                      src={master_card}
                      alt="master_card"
                      width={40}
                      height={40}
                    />
                    <Image src={nagad} alt="nagad" width={40} height={40} />
                  </div>
                </div>
                <div className="col-12 col-md-10 d-flex justify-content-between align-items-center py-1 px-2 g-1">
                  <div className="d-flex align-items-center">
                    <div className="form-check d-flex align-items-center">
                      <input
                        className={`form-check-input fs-5 text mt-0 ${styles.radio}`}
                        type="radio"
                        name="payment_method"
                        id="payment_method_2"
                        style={{ marginLeft: "-1.5rem" }}
                        defaultChecked
                       
                      />
                      <label
                        className="form-check-label mx-2"
                        htmlFor="payment_method_2"
                      >
                        Cash on delivery
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-11 mt-3">
              <div className="row g-2">
                <div className="col-12 col-lg-7">
                  <input
                    type="text"
                    className="form-control border-1 border-dark w-100"
                    placeholder="Coupon Code"
                    style={{ height: 45 }}
                  />
                </div>
                <div className="col-12 col-lg-5 ">
                  <button
                    className="btn bg-danger text-white w-100"
                    type="button"
                    style={{ height: 45 }}
                  >
                    Apply Coupon
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-11 mt-3">
              <div className="row g-2">
                <div className="col-12 col-lg-4 ">
                  <button
                    className="btn bg-danger text-white w-100"
                    type="button"
                    style={{ height: 45 }}
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
// rsf
