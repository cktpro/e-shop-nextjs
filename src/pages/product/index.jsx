import HeadMeta from "@/components/HeadMeta";
import React from "react";
import { axiosClient } from "@/helper/axiosClient";
import ProductItemComponent from "@/components/productItemComponent";
import Loading from "@/components/loader/loading";

function Product(props) {
  const list = ["1", "2", "3", "4", "5", "6", "6", "8", "9", "10"];

  const { data } = props;
  console.log("◀◀◀ data ▶▶▶", data);
  return (
    <>
      <HeadMeta title="Trang sản phẩm" />

      <div className="container">
        <div className="row">
          {list.map((item, idx) => {
            return <ProductItemComponent key={idx} item={data[0]} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Product;

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await axiosClient.get("/products");
  const data = await res.data.payload;

  // Pass data to the page via props
  return { props: { data } };
}
