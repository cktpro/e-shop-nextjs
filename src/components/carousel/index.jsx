import imgSlide from "assets/images/slider/iphone14.webp";
import logoApple from "assets/images/slider/logo-apple.svg";
import styles from "./carousel.module.scss";
import "./carousel.scss";

function Carousels(props) {
  const listDots = [0, 1, 2, 3, 4];
  return (
    <div
      id="dots"
      className={`${styles.carousel} carousel slide`}
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        {listDots.map((dots) => (
          <button
            key={dots}
            type="button"
            data-bs-target="#dots"
            data-bs-slide-to={dots}
            className={`${styles.dots} ${dots === 0 ? "active" : ""}`}
            aria-current="true"
            aria-label={dots + 1}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {listDots.map((dots) => (
          <div
            key={dots}
            className={`carousel-item banner ${dots === 0 ? "active" : ""}`}
          >
            <img
              src={imgSlide}
              className="d-block w-100 image-banner"
              alt="img banner"
            />
            <div className="content-banner">
              <div className="d-flex align-items-center">
                <img src={logoApple} alt="logoApple" />
                <div className="title">iPhone 14 Series</div>
              </div>
              <h5 className="content-heading">Up to 10% off Voucher</h5>
              <div className="d-flex align-items-center cursor-pointer">
                <span className="btn-shop-now">Shop Now</span>
                <i className="icon-arrow-right"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Carousels;
