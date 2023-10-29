import React, { useCallback, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import googleLogo from "@/assets/images/form/googlelogo.png";
import form from "@/assets/images/form/form.png";
import styles from "./styles/login.module.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import HeadMeta from "@/components/HeadMeta";

function Form(props) {
  const regexPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
  const validationRegister = useFormik({
    initialValues: {
      email: "",
      phoneNumber:"",
      password: "",
    },
    validationSchema: Yup.object({
      
      email: Yup.string()
        .email("Email sai định dạng")
        .required("Vui lòng nhập đầy đủ thông tin"),
      phoneNumber: Yup.string()
        .matches(regexPhoneNumber,"Số điện thoại không hợp lệ")
        .required("Vui lòng nhập đầy đủ thông tin"),
      password: Yup.string()
        .min(6, "Mật khẩu lớn hơn 6 ký tự")
        .required("Vui lòng nhập mật khẩu"),
    }),
    onSubmit: (values) => {
      console.log("◀◀◀ values ▶▶▶", values);
      //   const { password, confirmPassword } = values;
      //   const data = {
      //     password,
      //     email: validationSignUp.values.email,
      //   };

      // onSubmitAsync({
      //   email: validationSignUp.values.email,
      //   password: validationSignUp.values.password,
      // });

      // Xử lý logic đăng nhập ở đây
    },
  });

  return (
    <>
      <HeadMeta title="Sign Up" />
      <div className={`container`}>
        <div className={styles.main_login}>
          <div className={styles.login_image}>
            <Image src={form} alt="img login" priority />
          </div>

          <div className={styles.login_content}>
            <div className="d-flex flex-column gap-3">
              <h1 className="m-0">Login to E-Shop</h1>
              <h6 className="m-0">Enter your details below</h6>
            </div>
            <form name="formLogin" className="d-flex flex-column gap-4">
              <div className="d-flex flex-column gap-2">
                <input
                  className="form-control"
                  placeholder="Email "
                  aria-label="Email "
                  type="email"
                  name="email"
                  value={validationRegister.values.email}
                  onChange={validationRegister.handleChange}
                  onBlur={validationRegister.handleBlur}
                  style={{
                    borderTopColor: "white",
                    borderLeftColor: "white",
                    borderRightColor: "white",
                    borderBottomColor:
                      validationRegister.errors?.email &&
                      validationRegister.touched?.email
                        ? "red"
                        : "black",
                  }}
                />
                {validationRegister.errors?.email &&
                  validationRegister.touched?.email && (
                    <p className="text-danger mx-1">
                      {validationRegister.errors.email}
                    </p>
                  )}
              </div>
              <div className="d-flex flex-column gap-2">
                <input
                  className="form-control "
                  placeholder="Phone number"
                  aria-label="Phone Number"
                  type="text"
                  name="phoneNumber"
                  value={validationRegister.values.phoneNumber}
                  onChange={validationRegister.handleChange}
                  onBlur={validationRegister.handleBlur}
                  style={{
                    borderTopColor: "white",
                    borderLeftColor: "white",
                    borderRightColor: "white",
                    borderBottomColor:
                      validationRegister.errors?.phoneNumber &&
                      validationRegister.touched?.phoneNumber 
                        ? "red"
                        : "black",
                  }}
                />
                {validationRegister.errors?.phoneNumber  &&
                  validationRegister.touched?.phoneNumber  && (
                    <p className="text-danger mx-1">
                      {validationRegister.errors.phoneNumber }
                    </p>
                  )}
              </div>
              <div className="d-flex flex-column gap-2">
                <input
                  className="form-control "
                  placeholder="Password"
                  aria-label="Password"
                  type="password"
                  name="password"
                  value={validationRegister.values.password}
                  onChange={validationRegister.handleChange}
                  onBlur={validationRegister.handleBlur}
                  style={{
                    borderTopColor: "white",
                    borderLeftColor: "white",
                    borderRightColor: "white",
                    borderBottomColor:
                      validationRegister.errors?.password &&
                      validationRegister.touched?.password
                        ? "red"
                        : "black",
                  }}
                />
                {validationRegister.errors?.password &&
                  validationRegister.touched?.password && (
                    <p className="text-danger mx-1">
                      {validationRegister.errors.password}
                    </p>
                  )}
              </div>
            </form>

            <div className="d-flex flex-column gap-3">
              <button
                type="submit"
                className="btn btn-danger py-2"
                onClick={validationRegister.submitForm}
              >
                Create Account
              </button>
              <button
                type="submit"
                className="btn border py-2"
                onClick={validationRegister.submitForm}
              >
                <Image src={googleLogo} alt="google logo" />
                <span className="ms-2">Sign up with Google</span>
              </button>
            </div>
            <div className="text-center">
              Already have an account?{" "}
              <Link href="/auth/login" className="text-primary">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
