import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import styles
import styles from'./productItemComponent.module.scss'
function ProductItemComponent(props) {
    const {item}=props
    const getDiscountPrice = (price, discount) => {
        return (price * (100 - discount)) / 100;
      };
    return (
             <div
                  className=" col-xs-6 col-sm-6 col-md-6 col-lg-4 col-xl-3"
                >
                  <div className={styles.card}>
                    <div className={styles.card_img}>
                      <Image src={item.image.location} alt={item.name}   fill/>
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
}

export default ProductItemComponent;