import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import LoginRegister from "../../components/LoginRegister/LoginRegister";
import axios from "axios";
import { Formik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import "../../Alert.css";

function ForgotPassword() {
  useEffect(() => {
    document.title = "Lupa Password | Woodenspace";
  }, []);

  const ForgotSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
  });

  return (
    <LoginRegister name={"Lupa Password"}>
      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={ForgotSchema}
        onSubmit={async (values) => {
          try {
            const res = await axios({
              method: "post",
              url: "https://wooden-space-api-development.herokuapp.com/api/v1/auth/forgot_password",
              data: values,
            });

            if (res.status === 200) {
              Swal.fire({
                html: "<p>Jika Email anda terdapat di Database, Anda akan menerima alamat pemulihan dalam beberapa menit </p>",
                position: "top",
                showConfirmButton: false,
                color: "black",
                width: 1000,
                padding: "0",
                timer: 4000,
                customClass: "swal-dark",
              });
            }
          } catch (error) {
            if (error.response) {
              Swal.fire({
                html: "<p>Jika Email anda terdapat di Database, Anda akan menerima alamat pemulihan dalam beberapa menit </p>",
                position: "top",
                showConfirmButton: false,
                color: "black",
                width: 1000,
                padding: "0",
                timer: 4000,
                customClass: "swal-dark",
              });
            }
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          handleChange,
          handleBlur,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="email" className="mb-1 text-xs">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Contoh : Johndoe@gmail.com"
              className="my-2 block h-[48px] w-full rounded-2xl border-2 border-neutral-02 py-3 px-4 placeholder:text-sm"
              onBlur={handleBlur}
              value={values.email}
              onChange={handleChange}
            />
            <span className="block text-xs text-red-500">
              {errors.email && touched.email && errors.email}
            </span>
            <button
              className="hover:bg- mt-6 mb-10 block h-[48px] w-full rounded-2xl bg-olive-04 py-3 px-6 text-center text-white transition hover:bg-olive-02 hover:text-neutral-04"
              disabled={isSubmitting}
            >
              {" "}
              Reset Password
            </button>
            <span className="flex justify-center text-sm">
              Sudah memiliki email dan password?
              <Link
                to="/login"
                className="mx-2 text-sm text-olive-04 hover:underline"
              >
                Masuk di sini
              </Link>
            </span>
          </form>
        )}
      </Formik>
      ;
    </LoginRegister>
  );
}

export default ForgotPassword;
