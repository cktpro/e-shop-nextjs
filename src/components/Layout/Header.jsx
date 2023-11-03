import React, { useCallback, useState } from "react";
import { Dropdown, Space, Input, Badge, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "@/styles/header.module.scss";
import Account from "./Account";
const { Search } = Input;
// Item of Language Select
const items = [
  {
    label: "English",
    key: "0",
  },
  {
    label: "Tiếng Việt",
    key: "1",
  },
  {
    type: "divider",
  },
];
// Function Search
function Header(props) {
  const router = useRouter();
  const account = useSelector((state) => state.accountReducer);
  const [isShowMenu, setIsShowMenu] = useState(false);
  const showMenu = useCallback(() => {
    setIsShowMenu((prev) => !prev);
  }, []);
  return (
    <>
      {/* Top Header */}

      {/* Main Header */}
      <div className={styles.main_header}>
        <div className="container">
          <div className={styles.content_header}>
            {/* Logo */}
            <div className={styles.logo_header}>
              <h2>E-Shop</h2>
            </div>
            {/* Navbar */}
            <nav className={styles.navbar_header}>
              <ul
                className={`${styles.menu} list-unstyled`}
                onClick={() => setIsShowMenu(false)}
              >
                <li>
                  <Link
                    className={router.pathname === "/" ? styles.li_active : ""}
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className={
                      router.pathname === "/contract" ? styles.li_active : ""
                    }
                    href="/contract"
                  >
                    Contract
                  </Link>
                </li>
                <li>
                  <Link
                    className={
                      router.pathname === "/about" ? styles.li_active : ""
                    }
                    href="/about"
                  >
                    About
                  </Link>
                </li>
                <li className={styles.li_pc}>
                  <Link
                    className={
                      router.pathname === "/auth/register"
                        ? styles.li_active
                        : ""
                    }
                    href="/auth/register"
                  >
                    Sign Up
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Right Content */}
            <div className={styles.right_header}>
              {/* Search bar */}
              <div className={styles.search_bar}>
                <input type="text" placeholder="What are you looking for?" />
                <button className="border-0 bg-transparent">
                  <Image src={require('@/assets/images/icon/header/search_header.png')} alt="search icon" priority/>
                </button>
              </div>
              {/* Wishlist icon*/}
              <div className={styles.box_icon}>
                <Link
                  href="/whishlist"
                  className={
                    router.pathname === "/whishlist"
                      ? `${styles.icon_whishlist} ${styles.icon_active}`
                      : `${styles.icon_whishlist}`
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-heart"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </Link>
                {/* Cart icon */}
                <Link
                  href="/cart"
                  className={
                    router.pathname === "/cart"
                      ? `${styles.icon_cart} ${styles.icon_active}`
                      : `${styles.icon_cart}`
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-shopping-cart"
                  >
                    <circle cx="8" cy="21" r="1" />
                    <circle cx="19" cy="21" r="1" />
                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                  </svg>
                </Link>
                {/* User icon */}
                <div
                  className={
                    router.pathname === "/account"
                      ? `${styles.icon_account} ${styles.icon_active}`
                      : `${styles.icon_account}`
                  }
                >
                  <Account title="img" />
                </div>
              </div>
              <Button className={styles.button_menu} onClick={showMenu}>
                <MenuOutlined />
              </Button>
            </div>
          </div>
        </div>
        {/*------------------------------------------------------ Mobile --------------------------------------------------------*/}
        <div
          className={
            isShowMenu
              ? `${styles.navbar_mobile} ${styles.navbar_mobile_active}`
              : ` ${styles.navbar_mobile}`
          }
        >
          <div className={styles.content}>
            <div className={styles.btn_navbar_mobile}>
              <button
                onClick={() => setIsShowMenu(false)}
                className="btn btn-sm btn-outline-danger px-3"
              >
                X
              </button>
            </div>
            <div className={styles.search_bar_mobile}>
              <input type="text" placeholder="What are you looking for?" />
              <button className="border-0 bg-transparent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-search"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </button>
            </div>
            <div className={styles.box_icon_mobile}>
              <Link href="/whishlist" className={styles.icon_whishlist}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-heart"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </Link>
              {/* Cart icon */}
              <Link href="/cart" className={styles.icon_cart}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-shopping-cart"
                >
                  <circle cx="8" cy="21" r="1" />
                  <circle cx="19" cy="21" r="1" />
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                </svg>
              </Link>
              {/* User icon */}
              <div className={`${styles.icon_account} `}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-user"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
            </div>
            <ul className={`${styles.menu_navbar} list-unstyled`}>
              <li>
                <Link
                  className={router.pathname === "/" ? styles.li_active : ""}
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={
                    router.pathname === "/contract" ? styles.li_active : ""
                  }
                  href="/contract"
                >
                  Contract
                </Link>
              </li>
              <li>
                <Link
                  className={
                    router.pathname === "/about" ? styles.li_active : ""
                  }
                  href="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className={
                    router.pathname === "/auth/register" ? styles.li_active : ""
                  }
                  href="/auth/register"
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
