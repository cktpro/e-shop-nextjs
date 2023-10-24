import React, { memo } from "react";

import FlashSaleList from "components/flashSaleList";
import products from "data/products.json";
import categories from "data/categories.json";
import bestSelling from "data/bestSelling.json";
import CategoryList from "components/categoryList";
import BestSelling from "components/bestSelling";
import Adv from "components/adv";
import OurProducts from "components/ourProducts";
import Featured from "components/featured";
import ServicesMenu from "components/servicesMenu";
import SlideBar from "components/slidebar";
import Carousels from "components/carousel";
import SlideBarMobile from "components/slidebar/slidebarMobile";
import styles from './main.module.scss'

function Main() {
  return (
    <>
    <section className="container">
        <div className={styles.section1}>
          <SlideBar />
          <Carousels />
          <SlideBarMobile />
        </div>
      </section>
      {/* section flash sale */}
      <section>
        <FlashSaleList list={products} />
      </section>

      {/* section categories */}
      <section>
        <CategoryList list={categories} />
      </section>

      {/* section best selling */}
      <section>
        <BestSelling list={bestSelling} />
      </section>

      {/* section adv */}
      <section>
        <Adv />
      </section>

      {/* section Our Products */}
      <section>
        <OurProducts list={products} />
      </section>

      {/* section Featured */}
      <section>
        <Featured />
      </section>

      {/* section Featured */}
      <section>
        <ServicesMenu />
      </section>
    </>
  );
}

export default memo(Main);
