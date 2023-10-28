import React, { useCallback, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import googleLogo from "@/assets/images/form/googlelogo.png";
import form from "@/assets/images/form/form.png";
import styles from "./styles/login.module.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import HeadMeta from "@/components/HeadMeta";

const REGISTER_STEP = {
  SIGNUP_STEP: 1,
  LOGIN_STEP: 2,
  SUCCESS_STEP: 3,
};

function Register(props) {
  const [currentStep, setCurrentStep] = useState(REGISTER_STEP.SIGNUP_STEP);
  console.log("««««« currentStep »»»»»", currentStep);
  const validationSignUp = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(2, "Mininum 2 characters")
        .max(50, "Maximum 50 characters")
        .required("Bạn chưa nhập tên!"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Bạn chưa nhập địa chỉ email!"),
      password: Yup.string()
        .min(8, "Mật khẩu ít nhất có 8 kí tự")
        .required("Bạn chưa nhập mật khẩu!"),
    }),
    onSubmit: (values) => {
      setCurrentStep((step) => step + 1);
      console.log("««««« values signup »»»»»", values);
    },
  });

  const validationLogin = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email format").required("Required!"),
      password: Yup.string().required("Password Required!"),
    }),
    onSubmit: (values) => {
      const { password, confirmPassword } = values;
      const data = {
        password,
        email: validationSignUp.values.email,
      };

      // onSubmitAsync({
      //   email: validationSignUp.values.email,
      //   password: validationSignUp.values.password,
      // });

      // Xử lý logic đăng nhập ở đây
      setCurrentStep(REGISTER_STEP.SUCCESS_STEP);
    },
  });

  const getButtonContent = useMemo(() => {
    switch (currentStep) {
      case REGISTER_STEP.SIGNUP_STEP:
        return "Create Account";

      case REGISTER_STEP.LOGIN_STEP:
        return "Login ";

      default:
        return "Next step";
    }
  }, [currentStep]);

  const onClickButton = useCallback(
    (e) => {
      e.preventDefault();

      if (currentStep === REGISTER_STEP.SIGNUP_STEP) {
        validationSignUp.handleSubmit();
      }

      if (currentStep === REGISTER_STEP.SIGNUP_STEP) {
        validationLogin.handleSubmit();
      }
    },
    [currentStep, validationLogin, validationSignUp]
  );

  const isInvalid = useMemo(() => {
    return;
  }, []);

  const handleLoginClick = () => {
    setCurrentStep(REGISTER_STEP.LOGIN_STEP);
  };

  const handleSignInWithGoogle = useCallback(() => {
    window.location.href = "https://accounts.google.com";
  }, [handleLoginClick]);

  return (
    <>
    <HeadMeta title="Register" />
    <div className={styles.login}>
      <div style={{ display: "flex" }}>
        <div className={styles.image}>
          <Image
            src={form}
            alt=""
            style={{ width: "420px", height: "420px" }}
          />
        </div>

        <div className={styles.form}>
          <h1 className="h3 mb-3 fw-normal">Login to E-Shop</h1>
          <h6>Enter your details below</h6>
          <div className="mb-3" style={{ width: "300px" }}>
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
                <p style={{ color: "red" }}>{validationLogin.errors.email}</p>
              )}
          </div>

          <div className="mb-3" style={{ width: "300px" }}>
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
                <p style={{ color: "red" }}>
                  {validationLogin.errors.password}
                </p>
              )}
          </div>

          {/* {currentStep === REGISTER_STEP.SIGNUP_STEP && (
            <>
              <h1 className="h3 mb-3 fw-normal">Create an account</h1>
              <h6>Enter your details below</h6>
              <div className="mb-3" style={{ width: "300px" }}>
                <input
                  className="form-control form-control-sm "
                  placeholder="Name"
                  aria-label="Name"
                  type="text"
                  name="username"
                  value={validationSignUp.values.username}
                  onChange={validationSignUp.handleChange}
                  onBlur={validationSignUp.handleBlur}
                  style={{
                    borderTopColor: "white",
                    borderLeftColor: "white",
                    borderRightColor: "white",
                    borderBottomColor:
                      validationSignUp.errors?.username &&
                      validationSignUp.touched?.username
                        ? "red"
                        : "black",
                  }}
                />
                {validationSignUp.errors?.username &&
                  validationSignUp.touched?.username && (
                    <p style={{ color: "red" }}>
                      {validationSignUp.errors.username}
                    </p>
                  )}
              </div>

              <div className="mb-3" style={{ width: "300px" }}>
                <input
                  className="form-control form-control-sm"
                  placeholder="Email "
                  aria-label="Email "
                  type="email"
                  name="email"
                  value={validationSignUp.values.email}
                  onChange={validationSignUp.handleChange}
                  onBlur={validationSignUp.handleBlur}
                  style={{
                    borderTopColor: "white",
                    borderLeftColor: "white",
                    borderRightColor: "white",
                    borderBottomColor:
                      validationSignUp.errors?.email &&
                      validationSignUp.touched?.email
                        ? "red"
                        : "black",
                  }}
                />
                {validationSignUp.errors?.email &&
                  validationSignUp.touched?.email && (
                    <p style={{ color: "red" }}>
                      {validationSignUp.errors.email}
                    </p>
                  )}
              </div>

              <div className="mb-3" style={{ width: "300px" }}>
                <input
                  className="form-control form-control-sm"
                  placeholder="Password"
                  aria-label="Password"
                  type="password"
                  name="password"
                  value={validationSignUp.values.password}
                  onChange={validationSignUp.handleChange}
                  onBlur={validationSignUp.handleBlur}
                  style={{
                    borderTopColor: "white",
                    borderLeftColor: "white",
                    borderRightColor: "white",
                    borderBottomColor:
                      validationSignUp.errors?.password &&
                      validationSignUp.touched?.password
                        ? "red"
                        : "black",
                  }}
                />
                {validationSignUp.errors?.password &&
                  validationSignUp.touched?.password && (
                    <p style={{ color: "red" }}>
                      {validationSignUp.errors.password}
                    </p>
                  )}
              </div>
            </>
          )} */}

          <div>
            <button
              type="submit"
              className="btn btn-danger"
              onClick={onClickButton}
            >
              {getButtonContent}
            </button>

            {currentStep === REGISTER_STEP.LOGIN_STEP && (
              <Link href="" className={styles.forget_password}>
                Forget Password
              </Link>
            )}
            {currentStep === REGISTER_STEP.SIGNUP_STEP && (
              <>
                {" "}
                <div>
                  <button
                    onClick={handleSignInWithGoogle}
                    className={styles.google_signin_button}
                  >
                    <Image
                      src={googleLogo}
                      alt="Google Logo"
                      className={styles.google_logo}
                    />
                    Sign in with Google
                  </button>
                </div>
                <div className="">
                  Already have an account?{" "}
                  <Link href="/login" onClick={handleLoginClick}>
                    Login
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Register;
