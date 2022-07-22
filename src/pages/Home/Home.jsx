import React from "react";
import iconLogin from "../../assets/icons/fi_log-in.png";
import iconPlus from "../../assets/icons/fi_plus.png";
import banner2 from "../../assets/image/banner2.png";
import banner3 from "../../assets/image/banner3.png";
import banner4 from "../../assets/image/banner4.png";
import ButtonCategory from "./../../components/ButtonCategory/ButtonCategory";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper";
import "swiper/css";
import Header from "../../components/Header/Header";
import "./Home.css";
import { Link } from "react-router-dom";
import NavMenu from "../../components/NavMenu/NavMenu";
import "swiper/css/pagination";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import "../../Alert.css";
import { useDispatch, useSelector } from "react-redux";
import {
  categorySelectors,
  getCategories,
} from "../../redux/features/categorySlice";

function Home() {
  const token = localStorage.getItem("token");
  const [isVerified, setIsVeryfied] = useState(null);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const categories = useSelector(categorySelectors.selectAll);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    document.title = "Home | Woodenspace";
  }, []);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    if (token) {
      getUser();
    }
  }, [token]);

  const getProducts = async () => {
    try {
      const response = await axios({
        method: "get",
        url: "https://wooden-space-api-development.herokuapp.com/api/v1/buyer/product/",
        headers: token && { Authorization: token },
        data: data,
      });
      setData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getUser = async () => {
    try {
      const res = await axios({
        method: "get",
        url: "https://wooden-space-api-development.herokuapp.com/api/v1/user/profile",
        headers: { Authorization: token },
      });
      setIsVeryfied(res.data.data.isVerified);
    } catch (error) {
      console.log(error);
    }
  };

  const emailVerification = async () => {
    try {
      const res = await axios({
        method: "get",
        url: "https://wooden-space-api-development.herokuapp.com/api/v1/user/email_verification",
        headers: { Authorization: token },
      });

      if (res.status === 200) {
        Swal.fire({
          html: "<p>Cek email untuk mendapatkan link verifikasi!</p>",
          position: "top",
          showConfirmButton: false,
          color: "white",
          width: 600,
          padding: "0",
          timer: 5000,
          customClass: "swal-success",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {isVerified === false && (
        <div className="absolute left-[50%] top-[15%] z-[4] -translate-x-[50%] rounded-xl bg-blue-400 p-4">
          <p className="text-xs text-white lg:text-sm">
            Harap segera melakukan verifikasi akun{" "}
            <span
              className="cursor-pointer underline"
              onClick={emailVerification}
            >
              disini
            </span>
          </p>
        </div>
      )}
      <Header>
        {token ? (
          <NavMenu />
        ) : (
          <Link to="/login">
            <button className="mx-4 flex h-[48px] w-[105px] rounded-xl bg-olive-04 px-4 py-[14px] text-white">
              <img src={iconLogin} alt="icon-login" className="mr-2" />
              <span className="text-sm">Masuk</span>
            </button>
          </Link>
        )}
      </Header>
      <section
        id="carousel"
        className="my-10 mt-32 h-[144px] sm:h-[194px] lg:h-[288px]"
      >
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 325,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={true}
          loop={true}
          pagination={true}
          modules={[EffectCoverflow, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src={banner2}
              alt="img-banner2"
              className="h-[144px] overflow-hidden rounded-[20px] object-cover sm:h-[194px] lg:h-[288px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={banner3}
              alt="img-banner3"
              className="h-[144px] overflow-hidden rounded-[20px] object-cover sm:h-[194px] lg:h-[288px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={banner4}
              alt="img-banner4"
              className="h-[144px] overflow-hidden rounded-[20px] object-cover sm:h-[194px] lg:h-[288px]"
            />
          </SwiperSlide>
        </Swiper>
      </section>
      <section id="product" className="container mx-auto mb-20">
        <div id="category">
          <h2 className="text-center font-bold lg:text-left">
            Telusuri Kategori
          </h2>
          <div className="mt-4 mb-10 ml-4 lg:ml-0">
            <Swiper slidesPerView={"auto"} className="mySwiper">
              <SwiperSlide style={{ width: "auto" }}>
                <ButtonCategory name={"Semua"} />
              </SwiperSlide>

              {categories &&
                categories.map((item) => (
                  <SwiperSlide style={{ width: "auto" }} key={item.id}>
                    <ButtonCategory name={item.name} />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
        <div
          id="card"
          className="flex flex-wrap justify-center lg:justify-start"
        >
          {data &&
            data.map((item) => (
              <div
                className="mr-3 mb-4 h-[198px] w-[181px] rounded-[4px] bg-white px-2 pt-2 pb-4 shadow-low"
                key={item.id}
              >
                <div>
                  <Link as="div" to={`/buyer/detail/${item.id}`}>
                    <div className="overflow-hidden">
                      <img
                        src={
                          item?.product_images[0]?.url
                            ? item?.product_images[0]?.url
                            : "https://fakeimg.pl/300/?text=NoPhoto"
                        }
                        alt={item.name}
                        className="mb-2 h-[100px] w-[165px] overflow-hidden rounded-[4px] object-scale-down transition duration-500 hover:scale-125"
                      />
                    </div>
                  </Link>
                  <Link to={`/buyer/detail/${item.id}`}>
                    <h5 className="mb-1 truncate text-sm text-black hover:text-olive-04">
                      {item.name}
                    </h5>
                  </Link>
                  <p className="mb-2 text-[10px] capitalize text-neutral-03">
                    {item?.category?.name}
                  </p>
                  <p className="mb-1 text-sm text-black">
                    Rp.
                    {new Intl.NumberFormat("id-ID").format(
                      Math.floor(item.price)
                    )}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </section>
      <div className="fixed bottom-1 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Link to="/seller/add_product">
          <button className="mx-auto flex h-[52px] w-[115px] items-center rounded-xl bg-olive-04 py-4 px-6 text-white shadow-lg shadow-olive-03 transition duration-300">
            <img src={iconPlus} alt="icon-plus" className="mr-4" />
            <span>Jual</span>
          </button>
        </Link>
      </div>
    </>
  );
}

export default Home;
