import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import HeadMeta from '@/components/HeadMeta'
import FlashSaleList from '@/components/flashSaleList'
import products from "@/data/product.json";
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <HeadMeta title="E-Shop Bán Đồ Công Nghệ Giá Siêu Tốt"/>
      <main className={`${styles.main} ${inter.className}`}>
      {/* <section className="container">
        <div className={styles.section1}>
          <SlideBar />
          <Carousels />
          <SlideBarMobile />
        </div>
      </section> */}
      {/* section flash sale */}
      <section>
        <FlashSaleList list={products} />
      </section>

      {/* section categories */}
      {/* <section>
        <CategoryList list={categories} />
      </section> */}

      {/* section best selling */}
      {/* <section>
        <BestSelling list={bestSelling} />
      </section> */}

      {/* section adv */}
      {/* <section>
        <Adv />
      </section> */}

      {/* section Our Products */}
      {/* <section>
        <OurProducts list={products} />
      </section> */}

      {/* section Featured */}
      {/* <section>
        <Featured />
      </section> */}

      {/* section Featured */}
      {/* <section>
        <ServicesMenu />
      </section> */}
      </main>
    </>
  )
}
