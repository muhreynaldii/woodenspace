import React from "react";
import Product from "../../assets/image/products/product-1.png";

const CarouselProduct = () => {
  // const slideImages = [Product, Product];

  return (
    <>
      <div className="mb-6 w-full justify-center overflow-hidden rounded-2xl">
        <img src={Product} alt="Product" />
      </div>
    </>
  );
};

export default CarouselProduct;
