import React, { useCallback, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link"
import googleLogo from "@/assets/images/form/googlelogo.png";
import form from "@/assets/images/form/form.png";
import styles from "./styles/login.module.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import HeadMeta from "@/components/HeadMeta";

function Form(props) {
  const validationLogin = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Email sai định dạng")
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
      <HeadMeta title="Login" />
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
                  className="form-control form-control-sm"
                  placeholder="Email "
                  aria-label="Email "
                  type="email"
                  name="email"
                  value={validationLogin.values.email}
                  onChange={validationLogin.handleChange}
                  onBlur={validationLogin.handleBlur}
                  style={{
                    borderTopColor: "white",
                    borderLeftColor: "white",
                    borderRightColor: "white",
                    borderBottomColor:
                      validationLogin.errors?.email &&
                      validationLogin.touched?.email
                        ? "red"
                        : "black",
                  }}
                />
                {validationLogin.errors?.email &&
                  validationLogin.touched?.email && (
                    <p className="text-danger mx-1">
                      {validationLogin.errors.email}
                    </p>
                  )}
              </div>

              <div className="">
                <input
                  className="form-control form-control-sm"
                  placeholder="Password"
                  aria-label="Password"
                  type="password"
                  name="password"
                  value={validationLogin.values.password}
                  onChange={validationLogin.handleChange}
                  onBlur={validationLogin.handleBlur}
                  style={{
                    borderTopColor: "white",
                    borderLeftColor: "white",
                    borderRightColor: "white",
                    borderBottomColor:
                      validationLogin.errors?.password &&
                      validationLogin.touched?.password
                        ? "red"
                        : "black",
                  }}
                />
                {validationLogin.errors?.password &&
                  validationLogin.touched?.password && (
                    <p className="text-danger mx-1">
                      {validationLogin.errors.password}
                    </p>
                  )}
              </div>
            </form>

            <div className="row">
              <div className="col">
                <button
                  type="submit"
                  className="btn btn-danger"
                  onClick={validationLogin.submitForm}
                >
                  Login
                </button>
              </div>

              <div className="col text-end text-danger py-2">
                <Link href="/auth/forgot-password">Forget Password?</Link>
              </div>
            </div>
            <div className="text-center">
              Already have an account?{" "}
              <Link href="/login" className="text-primary">
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
