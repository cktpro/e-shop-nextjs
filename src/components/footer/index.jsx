import React from "react";

import styles from "./footer.module.scss";
import { Row, Col } from "antd";

function Footer(props) {
  return (
    <footer className={styles.footer}>
      {/* Main Footer */}
      <div className="container">
        <div className={styles.content}>
          <Row>
            <Col xl={5} md={12} sm={24} xs={24}>
              <h1>Logo</h1>
              <h3>Subscribe</h3>
              <p>Get 10% off your first order</p>
              <div className={styles.box_mail}>
                <input type="text" placeholder="Enter your email..." />
                <button>
                  <img
                    src={require("assets/images/icon/footer/icon-send.png")}
                    alt=""
                  />
                </button>
              </div>
            </Col>
            <Col xl={6} md={12} sm={24} xs={24}>
              <h3>Support</h3>
              <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
              <p>exclusive@gmail.com</p>
              <p>+88015-88888-9999</p>
            </Col>
            <Col xl={4} md={8} sm={0} xs={0}>
              <h3>Account</h3>
              <p>My account</p>
              <p>Login / Register</p>
              <p>Cart</p>
              <p>Whitelist</p>
              <p>Shop</p>
            </Col>
            <Col xl={4} md={8} sm={0} xs={0}>
              <h3>Quick Link</h3>
              <p>Privacy Policy</p>
              <p>Terms Of User</p>
              <p>FAQ</p>
              <p>Contact</p>
            </Col>
            <Col className={styles.download_app} xl={5} md={8} sm={24} xs={24} >
              <h3>Download App</h3>
              <span className={styles.small_content}>
                Save $3 with App New User Only
              </span>
              <div className={styles.logo_wrapper}>
                <div className={styles.logo_qr}>
                  <img
                    src={require("assets/images/icon/footer/Qrcode 1.png")}
                    alt="qrcode"
                  />
                </div>
                <div className={styles.logo_download}>
                  <img
                    src={require("assets/images/icon/footer/GooglePlay.png")}
                    alt="googleplay"
                  />
                  <img
                    src={require("assets/images/icon/footer/AppStore.png")}
                    alt="appstore"
                  />
                </div>
              </div>
              <div className={styles.logo_social}>
                <img
                  src={require("assets/images/icon/footer/Icon-Facebook.png")}
                  alt=""
                />
                <img
                  src={require("assets/images/icon/footer/Icon-Twitter.png")}
                  alt=""
                />
                <img
                  src={require("assets/images/icon/footer/icon-instagram.png")}
                  alt=""
                />
                <img
                  src={require("assets/images/icon/footer/Icon-Linkedin.png")}
                  alt=""
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>
      {/* Sub Footer */}
      <div className={styles.sub_footer}>
        <p>Copyright Rimel 2022. All right reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
