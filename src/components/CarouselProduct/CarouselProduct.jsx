import React from "react";
import Product from "../../assets/image/products/product-1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./CarouselProduct.css";

const CarouselProduct = () => {
  const swiperProp = {
    cssMode: true,
    navigation: true,
    loop: true,
    pagination: {
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
    modules: [Navigation, Pagination, Mousewheel, Keyboard],
  };

  return (
    <>
      <Swiper {...swiperProp} className="mySwiper mb-6 md:w-3/4 lg:w-full">
        <div className="justify-center overflow-hidden rounded-2xl">
          <SwiperSlide>
            <img src={Product} alt="Product" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Product} alt="Product" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Product} alt="Product" />
          </SwiperSlide>
        </div>
      </Swiper>
    </>
  );
};

export default CarouselProduct;
