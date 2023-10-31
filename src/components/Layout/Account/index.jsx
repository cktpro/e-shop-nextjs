import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useDispatch,useSelector } from "react-redux";
import { actionLogout } from "@/redux-store/account/action";
import styles from "@/components/Layout/Account/account.module.scss";
function Account(props) {
  const dispatch=useDispatch()
  const account = useSelector((state) => state.accountReducer);
  const { title } = props;
  const userRef = useRef();

  const showUser = () => {
    userRef.current.classList.toggle(styles.active_user_dropdown);
  };
  return (
    <div onClick={showUser} className={styles.user}>
      {title === "img" ? (
        <Image
          src={account.isLogin===true?require("@/assets/images/icon/header/user_logger.png"):require("@/assets/images/icon/header/User=Off.png")}
          alt="Whishlist"
        />
      ) : (
        <span>
          {title}{" "}
          <Image
            style={{ filter: "revert(-1)" }}
            src={require("@/assets/images/icon/header/DropDown_black.png")}
            alt="dropdown"
          />
        </span>
      )}

      <div ref={userRef} className={styles.user_dropdown}>
        {account.profile ? (
          <ul className={styles.menu_account}>
            <li>
              <Link href="/account">Manage My Account</Link>
            </li>
            <li>
              <Link href="/account">My Order</Link>
            </li>
            <li>
              <Link href="/account">My Review</Link>
            </li>
            <li onClick={()=>dispatch(actionLogout())}>
              Logout
            </li>
          </ul>
        ) : (
          <ul className={styles.menu_account}>
            <li>
              <Link href="/auth/login">Login</Link>
            </li>
            <li >
            <Link href="/auth/register">Register</Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Account;
