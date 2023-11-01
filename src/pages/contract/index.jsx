import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import Image from "next/image";
// Import styles
import styles from "./contract.module.scss";
import HeadMeta from "@/components/HeadMeta";
function Contact(props) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validation = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Ít nhất 2 ký tự")
        .max(50, "Tối đa 50 ký tự")
        .required("Bạn chưa nhập tên!"),
      email: Yup.string()
        .email("Định dạng email không hợp lệ")
        .required("Bạn chưa nhập địa chỉ email!"),
      phone: Yup.string()
        .matches(/^[0-9]{10,15}$/, "Số điện thoại không hợp lệ")
        .required("Bạn chưa nhập số điện thoại!"),

      message: Yup.string()
        .required("Bạn chưa nhập tin nhắn!")
        .max(500, "Tối đa 5000 ký tự"),
    }),
    onSubmit: (values) => {
      setIsSubmitted(true);
    },
  });

  return (
    <>
    <HeadMeta title="Contract"/>
      <div className="container">
        <div className={styles.wrapper}>
          {/* Contract Slide */}
          <div className={`${styles.contract_slide}`}>
            <div className="d-flex flex-column gap-3">
              <div className="d-flex align-items-center gap-3">
                <Image src={require('@/assets/images/icon/contract/icons_phone.png')} alt="icon phone" /><h6 className="m-0">Call to us</h6>
              </div>
              <p className="m-0">We are available 24/7, 7 days a week.</p>
              <Link href="tel:+8801611112222">Phone: +8801611112222</Link>
            </div>
            <hr />
            <div className="d-flex flex-column gap-3">
            <div className="d-flex align-items-center gap-3">
                <Image src={require('@/assets/images/icon/contract/icons_mail.png')} alt="icon phone" /><h6 className="m-0">Write to us</h6>
              </div>
              <p className="m-0">Fill out our form and we will contact you within 24 hours.</p>
              <Link href="mailto:customer@exclusive.com">Emails: customer@exclusive.com</Link>
              <Link href="mailto:support@exclusive.com">Emails: support@exclusive.com</Link>
            </div>
          </div>
          {/* Form contract */}
          <form action="" className={`${styles.contract_form}`}>
            <div className="row">
              <div className="col-lg-4 col-xs-12 col-md-6 my-2">
                <input
                  type="text"
                  className={`form-control ${styles.form_input}`}
                  id="company_name"
                  placeholder="Your Name"
                />
              </div>
              <div className="col-lg-4 col-xs-12 col-md-6 my-2">
                <input
                  type="text w-100"
                  className={`form-control ${styles.form_input}`}
                  id="company_name"
                  placeholder="Your Email"
                />
              </div>
              <div className="col-lg-4 col-xs-12 col-md-6 my-2">
                <input
                  type="text w-100"
                  className={`form-control ${styles.form_input}`}
                  id="company_name"
                  placeholder="Your Phone"
                />
              </div>
            </div>

              <textarea
              style={{height:"100%"}}
                type="text"
                className={`form-control ${styles.form_input}`}
                id="company_name"
                placeholder="Your Message"
              />
            <div className="d-flex justify-content-end gap-2">
              <button type="button" className="btn btn-outline-secondary">
                Cancel
              </button>
              <button type="button" className="btn btn-danger">
              Send Massage
              </button>
            </div>
          </form>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Contact;
