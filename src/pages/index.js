import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import HeadMeta from '@/components/HeadMeta'
import FlashSaleList from '@/components/flashSaleList'
import CategoryList from '@/components/categoryList'
import BestSelling from '@/components/bestSelling'
import Adv from '@/components/adv'
import OurProducts from '@/components/ourProducts'
import Featured from '@/components/featured'
import ServicesMenu from '@/components/servicesMenu'
import SlideBar from '@/components/slidebar'
// import Carousels from '@/components/carousel'
// import SlideBarMobile from '@/components/slidebar/slidebarMobile'
// Import Data
import products from "@/data/product.json";
import categories from "@/data/categories.json";
import bestSelling from "@/data/bestSelling.json";
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <HeadMeta title="E-Shop Bán Đồ Công Nghệ Giá Siêu Tốt"/>
      <main className={`${styles.main} ${inter.className}`}>
      <section className="container">
          <SlideBar />
          {/* <SlideBarMobile /> */}
      </section>
      {/* section flash sale */}
      <section className='w-100'>
        <FlashSaleList list={products} />
      </section>

      {/* section categories */}
      <section className='w-100'>
        <CategoryList list={categories} />
      </section>

      {/* section best selling */}
      <section className='w-100'>
        <BestSelling list={bestSelling} />
      </section>

      {/* section adv */}
      <section className='w-100'>
        <Adv />
      </section>

      {/* section Our Products */}
      <section className='w-100'>
        <OurProducts list={products} />
      </section>

      {/* section Featured */}
      <section className='w-100'>
        <Featured />
      </section>

      {/* section Featured */}
      <section className='w-100'>
        <ServicesMenu />
      </section>
      </main>
    </>
  )
}
