import Image from "next/image";
import styles from "./carousel.module.scss";
import Link from "next/link";
const carouselItem = [
  {
    icon: require("@/assets/images/slider/logo-apple.svg"),
    name: "Iphone 13 Series",
    content: "Up to 10% of Voucher",
    images: require("@/assets/images/slider/iphone13.png"),
  },
  {
    icon: require("@/assets/images/slider/logo-apple.svg"),
    name: "Iphone 14 Series",
    content: "Up to 5% of Voucher",
    images: require("@/assets/images/slider/iphone14.webp"),
  },
  {
    icon: require("@/assets/images/slider/logo-apple.svg"),
    name: "Iphone 15 Series",
    content: "Up to 5% of Voucher",
    images: require("@/assets/images/slider/iphone15.png"),
  },
];

function Carousels(props) {
  return (
    // <Image src={require('@/assets/images/Frame 560.png')} class="d-block w-100" alt="..." />
    // <Carousel dots={{ className: styles.dots }} className={styles.carousel} autoplay>
    //   {carouselItem.map((item,idx)=>{
    //     return <div className={styles.carousel_inner} key={idx}>
    //     <div className="text-white d-flex flex-column gap-3">
    //       <div className="d-flex gap-2 align-items-center">
    //         <Image
    //           src={item.icon}
    //           width={35}
    //           height={35}
    //           alt="logo"
    //         />
    //         <p className="mb-0 mt-1 ">{item.name}</p>
    //       </div>
    //       <h2 className="ms-1 mb-0">
    //         {item.content}
    //       </h2>
    //       <Link href="/" className="text-decoration-underline ms-1">
    //         Shop now
    //       </Link>
    //     </div>
    //     <Image
    //       src={item.images}
    //       className={styles.carousel_img}
    //       width={200}
    //       height={200}
    //       alt="..."
    //       priority
    //     />
    //   </div>
    //   })}

    // </Carousel>
    <div
      id="carouselExampleIndicators"
      className={`carousel slide ${styles.carousel}`}
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators gap-1">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className={`active ${styles.dots}`}
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          className={styles.dots}
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          className={styles.dots}
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        {carouselItem.map((item,idx)=>{
          return <div className="carousel-item active" data-bs-interval="3000" key={idx}>
          <div className={styles.carousel_inner}>
            <div className="text-white d-flex flex-column gap-3">
              <div className="d-flex gap-2 align-items-center">
                <Image
                  src={item.icon}
                  width={35}
                  height={35}
                  alt="logo"
                />
                <p className="mb-0 mt-1 ">{item.name}</p>
              </div>
              <h3 className="ms-1 w-75 mb-0">{item.content}</h3>
              <Link href="/" className="text-decoration-underline ms-1">
                Shop now
              </Link>
            </div>
            <Image
              src={item.images}
              className={styles.carousel_img}
              alt={item.name}
              priority
            />
          </div>
          </div>
        })}
        {/* <div className="carousel-item active" data-bs-interval="3000">
          <div className={styles.carousel_inner}>
            <div className="text-white d-flex flex-column gap-3">
              <div className="d-flex gap-2 align-items-center">
                <Image
                  src={require("@/assets/images/slider/iphone14.webp")}
                  width={35}
                  height={35}
                  alt="logo"
                />
                <p className="mb-0 mt-1 ">test</p>
              </div>
              <h2 className="ms-1 mb-0">Iphone series</h2>
              <Link href="/" className="text-decoration-underline ms-1">
                Shop now
              </Link>
            </div>
            <Image
              src={require("@/assets/images/slider/iphone14.webp")}
              className={styles.carousel_img}
              width={200}
              height={200}
              alt="..."
              priority
            />
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="3000">
          <div className={styles.carousel_inner}>
            <div className="text-white d-flex flex-column gap-3">
              <div className="d-flex gap-2 align-items-center">
                <Image
                  src={require("@/assets/images/slider/iphone14.webp")}
                  width={35}
                  height={35}
                  alt="logo"
                />
                <p className="mb-0 mt-1 ">test</p>
              </div>
              <h2 className="ms-1 mb-0">Iphone series</h2>
              <Link href="/" className="text-decoration-underline ms-1">
                Shop now
              </Link>
            </div>
            <Image
              src={require("@/assets/images/slider/iphone14.webp")}
              className={styles.carousel_img}
              width={200}
              height={200}
              alt="..."
              priority
            />
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="3000">
          <div className={styles.carousel_inner}>
            <div className="text-white d-flex flex-column gap-3">
              <div className="d-flex gap-2 align-items-center">
                <Image
                  src={require("@/assets/images/slider/iphone14.webp")}
                  width={35}
                  height={35}
                  alt="logo"
                />
                <p className="mb-0 mt-1 ">test</p>
              </div>
              <h2 className="ms-1 mb-0">Iphone series</h2>
              <Link href="/" className="text-decoration-underline ms-1">
                Shop now
              </Link>
            </div>
            <Image
              src={require("@/assets/images/slider/iphone14.webp")}
              className={styles.carousel_img}
              width={200}
              height={200}
              alt="..."
              priority
            />
          </div>
        </div> */}
      </div>
      <button
        className={`carousel-control-prev ${styles.carousel_control}`}
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className={`carousel-control-next ${styles.carousel_control}`}
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
export default Carousels;
