import HeadMeta from "@/components/HeadMeta";
import React from "react";
import styles from "./account.module.scss";
function Account(props) {
  return (
    <>
      <HeadMeta title="Account" />
      <div className="container">
        <div className={styles.wrapper}>
          {/* Account Slide */}
          <div className={`${styles.account_slide}`}>
            <div>
              <h6>Manage My Account</h6>
              <ul className="list-unstyled text-black-50 mb-0 ">
                <li>My Profile</li>
                <li>Address Book</li>
                <li>My Payment Option</li>
              </ul>
            </div>
            <div>
              <h6>My Orders</h6>
              <ul className="list-unstyled  text-black-50 mb-0">
                <li>My Profile</li>
                <li>Address Book</li>
                <li>My Payment Option</li>
              </ul>
            </div>
            <div>
              <h6>My Whishlist</h6>
            </div>
          </div>
          {/* Form Account */}
          <form action="" className={`${styles.account_form}`}>
            <h3 className="text-danger">Edit your profile</h3>
            <div className="row">
              <div className="col">
                <label
                  htmlFor="company_name"
                  className="form-label text-black-50"
                >
                  First Name
                </label>
                <input
                  type="text"
                  className={`form-control ${styles.form_input}`}
                  id="company_name"
                />
              </div>
              <div className="col">
                <label
                  htmlFor="company_name"
                  className="form-label text-black-50"
                >
                  Last Name
                </label>
                <input
                  type="text w-100"
                  className={`form-control ${styles.form_input}`}
                  id="company_name"
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label
                  htmlFor="company_name"
                  className="form-label text-black-50"
                >
                  Email
                </label>
                <input
                  type="text"
                  className={`form-control ${styles.form_input}`}
                  id="company_name"
                />
              </div>
              <div className="col">
                <label
                  htmlFor="company_name"
                  className="form-label text-black-50"
                >
                  Address
                </label>
                <input
                  type="text"
                  className={`form-control ${styles.form_input}`}
                  id="company_name"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="company_name"
                className="form-label text-black-50"
              >
                Password Changes
              </label>
              <input
                type="text"
                className={`form-control ${styles.form_input}`}
                id="company_name"
                placeholder="Current Password"
              />
            </div>
            <input
              type="text"
              className={`form-control ${styles.form_input} `}
              placeholder="New Password"
              id="company_name"
            />
            <input
              type="text"
              className={`form-control ${styles.form_input} `}
              id="company_name"
              placeholder="Confirm New Password"
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default Account;
