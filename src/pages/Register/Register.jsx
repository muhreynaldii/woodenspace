import React, { useState, useEffect } from "react";
import LoginRegister from "../../components/LoginRegister/LoginRegister";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import axios from "axios";
import { Formik } from "formik";

function Register() {
  const [passwordType, setPasswordType] = useState("password");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  });

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  return (
    <LoginRegister name={"Daftar"}>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = <p className="text-xs text-red-500">Required</p>;
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = (
              <p className="text-xs text-red-500">Invalid email address</p>
            );
          }

          if (!values.password) {
            errors.password = <p className="text-xs text-red-500">Required</p>;
          }
          if (!values.username) {
            errors.username = <p className="text-xs text-red-500">Required</p>;
          }

          return errors;
        }}
        onSubmit={async (values) => {
          try {
            const res = await axios({
              method: "post",
              url: "https://wooden-space-authorization.herokuapp.com/api/v1/auth/sign_up",
              data: values,
            });

            if (res.status === 201) {
              navigate("/login", { replace: true });
              alert(res.data.message);
            }
          } catch (error) {
            if (error.response) {
              alert(error.response.data.message[0].message);
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
            <label htmlFor="nama" className="mb-1 text-xs">
              Nama
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Nama Lengkap"
              className="my-2 block h-[48px] w-full rounded-2xl border-2 border-neutral-02 py-3 px-4 placeholder:text-sm"
              onBlur={handleBlur}
              value={values.username}
              onChange={handleChange}
            />
            {errors.username && touched.username && errors.username}
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
            {errors.email && touched.email && errors.email}
            <label htmlFor="password" className="mb-1 text-xs">
              Password
            </label>
            <div className="relative flex flex-row">
              <input
                type={passwordType}
                name="password"
                id="password"
                placeholder="6+ karakter"
                className="my-2 block h-[48px] w-full rounded-2xl border-2 border-neutral-02 py-3 px-4 placeholder:text-sm"
                onBlur={handleBlur}
                value={values.password}
                onChange={handleChange}
              />
              <button
                type="button"
                onClick={togglePassword}
                className="absolute right-3 top-5"
              >
                {passwordType === "password" ? (
                  <AiOutlineEyeInvisible className="text-2xl text-neutral-03" />
                ) : (
                  <AiOutlineEye className="text-2xl text-neutral-03" />
                )}
              </button>
            </div>
            {errors.password && touched.password && errors.password}
            <button
              className="mt-6 mb-10 block h-[48px] w-full rounded-2xl bg-olive-04 py-3 px-6 text-center text-white transition duration-300 hover:bg-olive-02 hover:text-neutral-04"
              type="submit"
              disabled={isSubmitting}
            >
              {" "}
              Daftar
            </button>
          </form>
        )}
      </Formik>
      <span className="flex justify-center text-sm">
        Sudah Punya Akun?
        <Link
          to="/login"
          className="mx-2 text-sm text-olive-04 hover:underline"
        >
          Masuk di sini
        </Link>
      </span>
    </LoginRegister>
  );
}

export default Register;
