import React, { useCallback,  useState } from "react";
import { Dropdown, Space, Input, Badge, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/header.module.scss"
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
  const onSearch = (value, _e, info) => console.log(info?.source, value);
function Header(props) {
    const [isShowMenu, setIsShowMenu] = useState(false);
  const showMenu = useCallback(() => {
    setIsShowMenu((prev) => !prev);
  }, []);
    return (
        <>
      {/* Top Header */}
      <header className={styles.top_header}>
        <div className="container">
          {/* Content Sale */}
          <div className={styles.center_content}>
            <div className={styles.bounce}>
              <p>
                Summer Sale For All Swim Suits And Free Express Delivery - OFF
                50%! <Link href="/">ShopNow</Link>
              </p>
            </div>
            {/* Language Select */}
            <div className={styles.right_content}>
              <Dropdown
                menu={{
                  items,
                }}
                trigger={["click"]}
                placement="bottomRight"
              >
                <Link href="/" onClick={(e) => e.preventDefault()}>
                  <Space>
                    Ngôn ngữ
                    <span>
                      <Image
                        src={require("@/assets/images/icon/header/DropDown.png")}
                        alt=""
                      />
                    </span>
                  </Space>
                </Link>
              </Dropdown>
            </div>
          </div>
        </div>
      </header>
      {/* Main Header */}
      <div className={styles.main_header}>
        <div className="container">
          <div className={styles.content_header}>
            {/* Logo */}
            <div className={styles.logo_header}>
              <h2>E-Shop</h2>
            </div>
            {/* Navbar */}
            <nav
              className={
                isShowMenu
                  ? `${styles.navbar_header} ${styles.navbar_active} `
                  : `${styles.navbar_header} `
              }
            >
              <ul className={`${styles.menu} list-unstyled`} onClick={()=>setIsShowMenu(false)}>
              <li><Link href="/" >Home</Link></li>
              <li><Link href="/contract" >Contract</Link></li>
              <li><Link href="/about" >About</Link></li>
              <li className={styles.li_pc}><Link href="/signup">Sign Up</Link></li>
              <li className={styles.li_mobile}><Link href="/whishlist" >Whishlist</Link></li>
              </ul>
              <ul className={styles.account}>
              {/* <li><Account title="Account" /></li> */}
              </ul>
              
            </nav>
            <Search
                placeholder="What are you looking for?"
                allowClear
                onSearch={onSearch}
                className={styles.search_bar}
              />
            {/* Right Content */}
            <div className={styles.right_header}>
              {/* Search bar */}
             
              <div className={styles.box_icon}>
                {/* Wishlist icon*/}
                <Link href="/whishlist" className={styles.wishlist}><Image
                  src={require("@/assets/images/icon/header/Wishlist.png")}
                  alt="wishlist icon"
                /></Link>
                {/* Cart icon */}
               <Link href="/cart">
               <Badge count={0} showZero>
                  <Image
                    src={require("@/assets/images/icon/header/Cart.png")}
                    alt="cart icon"
                  />
                </Badge>
               </Link>
                {/* User icon */}
                <div className={styles.account}>
                <Account title="img"/>
                </div>
              </div>
              <Button className={styles.button_menu} onClick={showMenu}>
                <MenuOutlined />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
    );
}

export default Header;