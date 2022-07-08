import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginRegister from "../../components/LoginRegister/LoginRegister";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import axios from "axios";
import { Formik } from "formik";
import * as Yup from "yup";

function Login() {
  const [passwordType, setPasswordType] = useState("password");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  });

  const refreshToken = async () => {
    try {
      const response = await axios({
        method: "get",
        url: "https://wooden-space-authorization.herokuapp.com/api/v1/auth/refresh_token",
        withCredentials: true,
      });

      if (response.status === 200) {
        localStorage.setItem("token", response.data.data.token);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
  });

  return (
    <LoginRegister name={"Masuk"}>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={async (values) => {
          try {
            const res = await axios({
              method: "post",
              url: "https://wooden-space-authorization.herokuapp.com/api/v1/auth/login",
              data: values,
              withCredentials: true,
            });
            // console.log(res.data);

            if (res.status === 200) {
              await refreshToken();
              navigate("/", { replace: true });
              alert(res.data.message);
            }
          } catch (error) {
            if (error.response) {
              alert(error.response.data.message);
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
            <label htmlFor="password" className="mb-1 text-xs">
              Password
            </label>
            <div className="relative flex flex-row">
              <input
                type={passwordType}
                name="password"
                id="password"
                placeholder="Masukkan Password"
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
            <span className="block text-xs text-red-500">
              {errors.password && touched.password && errors.password}
            </span>
            <span className="flex justify-end text-sm">
              <Link
                to="/forgot"
                className="mx-2 text-sm text-olive-04 hover:underline"
              >
                Lupa Password?
              </Link>
            </span>
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 mb-10 block h-[48px] w-full rounded-2xl bg-olive-04 py-3 px-6 text-center text-white transition duration-300 hover:bg-olive-02 hover:text-neutral-04"
            >
              {" "}
              Masuk
            </button>
          </form>
        )}
      </Formik>
      <span className="flex justify-center text-sm">
        Belum Punya Akun?
        <Link
          to="/register"
          className="mx-2 text-sm text-olive-04 hover:underline"
        >
          Daftar disini
        </Link>
      </span>
    </LoginRegister>
  );
}

export default Login;
