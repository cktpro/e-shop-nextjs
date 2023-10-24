import React, { useRef } from "react";
import { Link } from "react-router-dom";

import styles from "./account.module.scss";
function Account(props) {
  const { title } = props;
  const userRef = useRef();
  const showUser = () => {
    userRef.current.classList.toggle(styles.active_user_dropdown);
  };
  return (
    <div onClick={showUser} className={styles.user}>
      {title === "img" ? 
        <img
          src={require("assets/images/icon/header/User=Off.png")}
          alt="Whishlist"
        />:<span>{title} <img style={{filter:"revert(-1)"}} src={require('assets/images/icon/header/DropDown_black.png' )} alt="dropdown" /></span>
      }

      <div ref={userRef} className={styles.user_dropdown}>
        <ul className={styles.menu_account}>
          <li>
            <Link>Manage My Account</Link>
          </li>
          <li>
            <Link>My Order</Link>
          </li>
          <li>
            <Link>My Review</Link>
          </li>
          <li>
            <Link>Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Account;
