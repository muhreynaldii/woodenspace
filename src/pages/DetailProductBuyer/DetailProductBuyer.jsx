import React, { useState } from "react";
import User from "../../assets/image/user.png";
import CarouselProduct from "../../components/CarouselProduct/CarouselProduct";
import Header from "../../components/Header/Header";
import NavMenu from "./../../components/NavMenu/NavMenu";
import ModalTawar from "../../components/ModalTawar/ModalTawar";

const DetailProductBuyer = () => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <Header>
        <NavMenu />
      </Header>

      <section id="detail-product" className="pt-32">
        <div className="container mx-auto">
          <div className="mb-8 flex flex-wrap justify-center gap-4">
            <div className="w-full px-4 lg:w-[600px]">
              {/* Carousel Product */}
              <CarouselProduct />
              {/* /Caousel Product/ */}
              <div className="mb-2 w-full rounded-2xl p-4 shadow-low">
                <h3 className="mb-4 text-sm font-bold">Deskripsi</h3>
                <p className="mb-4 text-sm text-neutral-03">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur consectetur hic consequatur delectus id vero deserunt
                  debitis optio, dolor perspiciatis quod quae amet ut ea. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Eos odio
                  magni quasi tenetur minus architecto dolorem ullam doloremque
                  cumque facilis.
                </p>
                <p className="mb-4 text-sm text-neutral-03">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur consectetur hic consequatur delectus id vero deserunt
                  debitis optio, dolor perspiciatis quod quae amet ut ea. Lorem,
                  ipsum dolor sit amet consectetur adipisicing elit. Sit enim
                  molestiae assumenda quos. Dignissimos eos veniam cum quaerat?
                  Eum, repellat?
                </p>
              </div>
            </div>
            <div className="w-full px-4 lg:w-[336px]">
              <div className="mb-6 rounded-2xl p-4 shadow-high">
                <h3 className="mb-2 text-base font-medium">Jam Tangan Casio</h3>
                <p className="mb-4 text-sm font-normal text-neutral-03">
                  Aksesoris
                </p>
                <p className="text-md mb-6 font-normal">Rp. 250.000</p>
                <button
                  type="button"
                  className="mb-4 block w-full rounded-2xl bg-purple-04 py-3 px-2 text-sm text-white transition duration-300 hover:bg-purple-03 sm:px-6 sm:py-3"
                  onClick={openModal}
                >
                  Saya tertarik dan ingin nego
                </button>
              </div>
              <div className="flex items-center rounded-2xl p-4 shadow-low">
                <div className="overflow-hidden rounded-2xl">
                  <img src={User} alt="User" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium">Nama Penjual</p>
                  <p className="text-xs text-neutral-03">Kota</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ModalTawar
        openModal={openModal}
        closeModal={closeModal}
        isOpen={isOpen}
      />
    </>
  );
};

export default DetailProductBuyer;
