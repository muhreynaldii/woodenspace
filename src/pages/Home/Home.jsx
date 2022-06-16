import React from "react";
import iconLogin from "../../assets/icons/fi_log-in.png";
import iconPlus from "../../assets/icons/fi_plus.png";
import casio1 from "../../assets/image/casio_1.png";
import casio2 from "../../assets/image/casio_2.png";
import banner from "../../assets/image/banner.png";
import ButtonCategory from "./../../components/ButtonCategory/ButtonCategory";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper";
import "swiper/css";
import Header from "../../components/Header/Header";
import "./Home.css";

function Home() {
  return (
    <>
      <Header>
        <button className="flex h-[48px] w-[105px] rounded-xl bg-purple-04 px-4 py-[14px] text-white">
          <img src={iconLogin} alt="icon-login" className="mr-2" />
          <span className="text-sm">Masuk</span>
        </button>
      </Header>
      <section id="carousel" className="my-10 mt-32 h-[144px] sm:h-[288px]">
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
          pagination={true}
          modules={[EffectCoverflow]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src={banner}
              alt=""
              className="overflow-hidden rounded-[20px] object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={banner}
              alt=""
              className="overflow-hidden rounded-[20px] object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={banner}
              alt=""
              className="overflow-hidden rounded-[20px] object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={banner}
              alt=""
              className="overflow-hidden rounded-[20px] object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </section>
      <section id="product" className="container mx-auto">
        <div id="category">
          <h2 className="text-center font-bold lg:text-left">
            Telusuri Kategori
          </h2>
          <div className="mt-4 mb-10 flex flex-wrap justify-center lg:justify-start">
            <ButtonCategory name={"Semua"} />
            <ButtonCategory name={"Hobi"} />
            <ButtonCategory name={"Kendaraan"} />
            <ButtonCategory name={"Baju"} />
            <ButtonCategory name={"Elektronik"} />
            <ButtonCategory name={"Kesehatan"} />
          </div>
        </div>
        <div
          id="card"
          className="flex flex-wrap justify-center lg:justify-start"
        >
          <div className="mr-3 mb-4 h-[198px] w-[181px] rounded-[4px] bg-white px-2 pt-2 pb-4 shadow-low">
            <div>
              <img
                src={casio1}
                alt="casio1"
                className="mb-2 h-[100px] w-[165px] rounded-[4px] object-cover"
              />
              <h5 className="mb-1 text-sm text-black">Jam Tangan Casio</h5>
              <p className="mb-2 text-[10px] text-neutral-03">Aksesoris</p>
              <p className="mb-1 text-sm text-black">Rp.250.000</p>
            </div>
          </div>
          <div className="mr-3 mb-4 h-[198px] w-[181px] rounded-[4px] bg-white px-2 pt-2 pb-4 shadow-low">
            <div>
              <img
                src={casio2}
                alt="casio1"
                className="mb-2 h-[100px] w-[165px] rounded-[4px] object-cover"
              />
              <h5 className="mb-1 text-sm text-black">Jam Tangan Casio</h5>
              <p className="mb-2 text-[10px] text-neutral-03">Aksesoris</p>
              <p className="mb-1 text-sm text-black">Rp.250.000</p>
            </div>
          </div>
          <div className="mr-3 mb-4 h-[198px] w-[181px] rounded-[4px] bg-white px-2 pt-2 pb-4 shadow-low">
            <div>
              <img
                src={casio1}
                alt="casio1"
                className="mb-2 h-[100px] w-[165px] rounded-[4px] object-cover"
              />
              <h5 className="mb-1 text-sm text-black">Jam Tangan Casio</h5>
              <p className="mb-2 text-[10px] text-neutral-03">Aksesoris</p>
              <p className="mb-1 text-sm text-black">Rp.250.000</p>
            </div>
          </div>
          <div className="mr-3 mb-4 h-[198px] w-[181px] rounded-[4px] bg-white px-2 pt-2 pb-4 shadow-low">
            <div>
              <img
                src={casio2}
                alt="casio1"
                className="mb-2 h-[100px] w-[165px] rounded-[4px] object-cover"
              />
              <h5 className="mb-1 text-sm text-black">Jam Tangan Casio</h5>
              <p className="mb-2 text-[10px] text-neutral-03">Aksesoris</p>
              <p className="mb-1 text-sm text-black">Rp.250.000</p>
            </div>
          </div>
          <div className="mr-3 mb-4 h-[198px] w-[181px] rounded-[4px] bg-white px-2 pt-2 pb-4 shadow-low">
            <div>
              <img
                src={casio1}
                alt="casio1"
                className="mb-2 h-[100px] w-[165px] rounded-[4px] object-cover"
              />
              <h5 className="mb-1 text-sm text-black">Jam Tangan Casio</h5>
              <p className="mb-2 text-[10px] text-neutral-03">Aksesoris</p>
              <p className="mb-1 text-sm text-black">Rp.250.000</p>
            </div>
          </div>
          <div className="mr-3 mb-4 h-[198px] w-[181px] rounded-[4px] bg-white px-2 pt-2 pb-4 shadow-low">
            <div>
              <img
                src={casio2}
                alt="casio1"
                className="mb-2 h-[100px] w-[165px] rounded-[4px] object-cover"
              />
              <h5 className="mb-1 text-sm text-black">Jam Tangan Casio</h5>
              <p className="mb-2 text-[10px] text-neutral-03">Aksesoris</p>
              <p className="mb-1 text-sm text-black">Rp.250.000</p>
            </div>
          </div>
          <div className="mr-3 mb-4 h-[198px] w-[181px] rounded-[4px] bg-white px-2 pt-2 pb-4 shadow-low">
            <div>
              <img
                src={casio1}
                alt="casio1"
                className="mb-2 h-[100px] w-[165px] rounded-[4px] object-cover"
              />
              <h5 className="mb-1 text-sm text-black">Jam Tangan Casio</h5>
              <p className="mb-2 text-[10px] text-neutral-03">Aksesoris</p>
              <p className="mb-1 text-sm text-black">Rp.250.000</p>
            </div>
          </div>
          <div className="mr-3 mb-4 h-[198px] w-[181px] rounded-[4px] bg-white px-2 pt-2 pb-4 shadow-low">
            <div>
              <img
                src={casio2}
                alt="casio1"
                className="mb-2 h-[100px] w-[165px] rounded-[4px] object-cover"
              />
              <h5 className="mb-1 text-sm text-black">Jam Tangan Casio</h5>
              <p className="mb-2 text-[10px] text-neutral-03">Aksesoris</p>
              <p className="mb-1 text-sm text-black">Rp.250.000</p>
            </div>
          </div>
        </div>
      </section>
      <div className="fixed bottom-5 w-screen">
        <button className="mx-auto flex h-[52px] w-[115px] items-center rounded-xl bg-purple-04 py-4 px-6 text-white shadow-lg shadow-purple-03">
          <img src={iconPlus} alt="icon-plus" className="mr-4" />
          <span>Jual</span>
        </button>
      </div>
    </>
  );
}

export default Home;
