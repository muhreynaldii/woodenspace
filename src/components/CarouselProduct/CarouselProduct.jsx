import React from "react";
import Product from "../../assets/image/products/product-1.png";
import btn_right from "../../assets/icons/btn-right.png";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const CarouselProduct = () => {
  const slideImages = [Product, Product];

  const slideProperty = {
    indicators: true,
    infinite: false,
    autoplay: false,
    // prevArrow: (
    //   <span className="cursor-pointer">
    //     <img src={btn_right} alt="btn" />
    //   </span>
    // ),
    // nextArrow: (
    //   <span className="cursor-pointer">
    //     <img src={btn_right} alt="btn" />
    //   </span>
    // ),
  };

  return (
    <>
      <Slide {...slideProperty} className="mb-4">
        {slideImages.map((img, index) => {
          return (
            <div
              className="w-full justify-center overflow-hidden rounded-2xl"
              key={index}
            >
              <img src={img} alt="Product" />
            </div>
          );
        })}
      </Slide>
    </>
  );
};

export default CarouselProduct;
