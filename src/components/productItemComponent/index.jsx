import React,{useState} from "react";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/zustand/store";
import Loading from "@/components/loader/loading";
import { Modal ,Rate} from "antd";
// import styles
import styles from "./productItemComponent.module.scss";
import ProductDetail from "../productDetail";
import { formattedMoney } from "@/helper";
function ProductItemComponent(props) {
  const cart = useCartStore();
  const[selectedItem,setSelectedItem]=useState([])
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const addCart = (productId) => {
    const data = {
      productId,
      quantity: 1,
    };
    cart.createCart(data);
  };
  const { item } = props;
  const getDiscountPrice = (price, discount) => {
    return (price * (100 - discount)) / 100;
  };
  return (
    <>
      <Loading isLoading={cart.isLoading} />
      <div className="col-6 col-xs-6 col-sm-6 col-md-6 col-lg-4 col-xl-3 ">
        <div className={styles.card}>
          <div className={styles.card_img}>
            <Image
              className={styles.img}
              src={item.image?.location?item.image?.location:require("@/assets/images/noimage.jpeg")}
              alt={item.name}
              fill
            />
            {/* Discount content hidden if = 0 */}
            {item.discount !== 0 ? (
              <span className={styles.content_sale}>{item.discount}%</span>
            ) : (
              ""
            )}
            
              <button className={styles.btn_top_right} onClick={()=>{
                setSelectedItem(item)
                setIsModalOpen(true)}}>
                <Image
                  src={require("@/assets/cardOptions/icon_view_2.png")}
                  alt="view icon"
                />
              </button>
            
            <button
              className={styles.btn_add_cart}
              onClick={() => addCart(item._id)}
              disabled={cart.isLoading}
            >
              <Image
                src={require("@/assets/images/cart/Cart1.png")}
                alt="cart icon"
              />
              Add to Cart
            </button>
          </div>
          <div className={styles.card_content}>
            <h5 className="m-0">{item.name}</h5>
            <p className="m-0">
              <b className="text-danger ">
                {formattedMoney(getDiscountPrice(item.price, item.discount))}
              </b>
              {item.discount !== 0 ? (
                <span className="ms-2 text-decoration-line-through text-secondary">
                  {formattedMoney(item.price)}
                </span>
              ) : (
                ""
              )}
            </p>
            
            <Rate allowHalf defaultValue={3.5} disabled style={{fontSize:"1rem",}} />
            
          </div>
        </div>
      </div>
      <Modal
        title="Product Detail"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width={800}

      >
       <ProductDetail item={selectedItem} isRelated={false}/>
      </Modal>
    </>
  );
}

export default ProductItemComponent;
