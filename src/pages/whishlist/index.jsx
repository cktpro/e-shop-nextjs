import HeadMeta from "@/components/HeadMeta";
import React from "react";
import Image from "next/image";
import Link from "next/link";
// import styles
import styles from "./whishlist.module.scss";
const whishlist = [
  {
    id: 1,
    name: "Gucci duffle bag",
    price: 1160,
    discount: 35,
    image: require("@/assets/product/bag.png"),
  },
  {
    id: 2,
    name: "Rgb liquid CPU Cooler",
    price: 1960,
    discount: 0,
    image: require("@/assets/product/waterCooling.png"),
  },
  {
    id: 3,
    name: "GP11 Shooter USB Gamepad",
    price: 550,
    discount: 0,
    image: require("@/assets/product/gamePad2.png"),
  },
  {
    id: 4,
    name: "Quited Satin Jacket",
    price: 750,
    discount: 0,
    image: require("@/assets/product/jacket.png"),
  },
];
const getDiscountPrice = (price, discount) => {
  return (price * (100 - discount)) / 100;
};
const justForYouList=[
    {
        id: 1,
        name: "Asus FHD Gaming Laptop",
        price: 1160,
        discount: 35,
        image: require("@/assets/product/laptop.png"),
      },
      {
        id: 2,
        name: "IPS LCD Gaming Monitor",
        price: 1160,
        discount: 0,
        image: require("@/assets/product/monitor.png"),
      },
      {
        id: 3,
        name: "HAVIT HV-G92 Gamepad",
        price: 560,
        discount: 0,
        image: require("@/assets/product/gamePad.png"),
      },
      {
        id: 4,
        name: "AK-900 Wired Keyboard",
        price: 200,
        discount: 0,
        image: require("@/assets/product/keyBoard.png"),
      },

]
function WhishList(props) {
  // console.log('◀◀◀ productList,justForYouList ▶▶▶',productList,justForYouList);
  return (
    <>
      <HeadMeta title="Whish List" />
      <div className={styles.whishlist}>
        <div className="container">
          {/* Whishlist */}
          <div className="d-flex justify-content-between">
            <h4>Whishlist(4)</h4>
            <button className="btn btn-outline-dark">Move All To Bag</button>
          </div>
          {/* Card */}
          <div className="row my-3">
            {whishlist.map((item, idx) => {
              return (
                <div
                  className=" col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3"
                  key={idx}
                >
                  <div className={styles.card}>
                    <div className={styles.card_img}>
                      <Image src={item.image} alt={item.name} />
                      {/* Discount content hidden if = 0 */}
                      {item.discount !== 0 ? (
                        <span className={styles.content_sale}>
                          {item.discount}%
                        </span>
                      ) : (
                        ""
                      )}
                      <button className={styles.btn_top_right}>
                        <Image
                          src={require("@/assets/cardOptions/icon_delete.png")}
                          alt="delete icon"
                        />
                      </button>
                      <button className={styles.btn_add_cart}>
                      <Image src={require('@/assets/images/cart/Cart1.png')} alt="cart icon"/>
                        Add to Cart
                      </button>
                    </div>
                    <div className={styles.card_content}>
                      <h5 className="m-0">{item.name}</h5>
                      <p className="m-0">
                        <b className="text-danger ">${getDiscountPrice(item.price,item.discount)}</b>
                        {item.discount !== 0 ? (
                          <span className="ms-2 text-decoration-line-through text-secondary">
                            ${item.price}
                          </span>
                        ) : (
                          ""
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* JustForYou */}
          <div className="d-flex justify-content-between mt-5">
            <div className="d-flex align-items-center gap-3">
              <Image
                src={require("@/assets/images/Category_Rectangle.png")}
                alt="Category Rectangle"
              />
              <h4 className="m-0"> Just For You</h4>
            </div>
            <Link href="/product"><button className="btn btn-outline-dark">See All</button></Link>
          </div>
          <div className="row my-3">
            {justForYouList.map((item, idx) => {
              return (
                <div
                  className=" col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3"
                  key={idx}
                >
                  <div className={styles.card}>
                    <div className={styles.card_img}>
                      <Image src={item.image} alt={item.name} />
                      {/* Discount content hidden if = 0 */}
                      {item.discount !== 0 ? (
                        <span className={styles.content_sale}>
                          {item.discount}%
                        </span>
                      ) : (
                        ""
                      )}
                      <Link href={`/product/${item.id}`} >
                        <button className={styles.btn_top_right}>
                        <Image
                          src={require("@/assets/cardOptions/icon_view_2.png")}
                          alt="view icon"
                        />
                        </button>
                      </Link>
                      <button className={styles.btn_add_cart}>
                        <Image src={require('@/assets/images/cart/Cart1.png')} alt="cart icon"/>
                        Add to Cart
                      </button>
                    </div>
                    <div className={styles.card_content}>
                      <h5 className="m-0">{item.name}</h5>
                      <p className="m-0">
                        <b className="text-danger ">${getDiscountPrice(item.price,item.discount)}</b>
                        {item.discount !== 0 ? (
                          <span className="ms-2 text-decoration-line-through text-secondary">
                            ${item.price}
                          </span>
                        ) : (
                          ""
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default WhishList;
