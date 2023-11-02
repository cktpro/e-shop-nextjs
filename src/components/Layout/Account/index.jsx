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
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:text-text-1 transition-colors ease-in-out duration-300"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
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
