import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./CarouselProduct.css";

const CarouselProduct = ({ images, product_name, product_images }) => {
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
          {product_images &&
            product_images?.map((item, index) => (
              <SwiperSlide key={index}>
                <img
                  src={
                    item?.url
                      ? item?.url
                      : "https://fakeimg.pl/300/?text=NoPhoto"
                  }
                  alt={product_name}
                  className="h-[436px] w-[600px] rounded-2xl object-scale-down"
                />
              </SwiperSlide>
            ))}

          {images &&
            images?.map((item, index) => (
              <SwiperSlide key={index}>
                <img
                  src={
                    item?.url
                      ? item?.url
                      : "https://fakeimg.pl/300/?text=NoPhoto"
                  }
                  alt="product"
                  className="h-[436px] w-[600px] rounded-2xl object-scale-down"
                />
              </SwiperSlide>
            ))}
        </div>
      </Swiper>
    </>
  );
};

export default CarouselProduct;
