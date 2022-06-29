import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/image/logo.png";
import User from "../../assets/image/user.png";
import fi_arrow_left from "../../assets/icons/fi_arrow-left.svg";
import Product from "../../assets/image/products/product-1.png";
import ModalTawarAccepted from "../../components/ModalTawarAccepted/ModalTawarAccepted";

const InfoPenawar = () => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <header className="fixed top-0 left-0 z-20 w-full items-center bg-white shadow-high">
        <div className="container mx-auto">
          <div className="relative flex items-center justify-between">
            <div className="flex items-center py-5 pl-4 pr-1 lg:px-0">
              <Link to="/" className="hidden lg:block">
                <img src={Logo} alt="Logo" width={"100px"} />
              </Link>
            </div>
            <div className="mx-auto">
              <h3 className="text-base font-normal">Info Penawar</h3>
            </div>
          </div>
        </div>
      </header>

      <section id="info_penawar" className="pt-16 lg:pt-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto flex w-full flex-wrap justify-center lg:w-[800px] lg:flex-nowrap lg:gap-[76px]">
            <div className="mr-auto mb-6 lg:mr-0 lg:mb-0">
              <Link to="/">
                <img src={fi_arrow_left} alt="" />
              </Link>
            </div>
            <div className="w-full">
              <div className="flex w-full items-center justify-between rounded-2xl p-4 shadow-low">
                <div className="flex items-center">
                  <div className="overflow-hidden rounded-2xl">
                    <img src={User} alt="User" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium">Nama Penjual</p>
                    <p className="text-xs text-neutral-03">Kota</p>
                  </div>
                </div>

                <div>
                  <button className="rounded-lg border border-olive-04 py-1 px-3 text-xs font-medium text-neutral-05 transition duration-300 hover:bg-olive-04 hover:text-white">
                    Edit
                  </button>
                </div>
              </div>
              <h3 className="py-6 text-sm font-medium text-neutral-05">
                Daftar Produkmu yang Ditawar
              </h3>
              <div className="flex justify-between hover:cursor-pointer">
                <div className="flex">
                  <div
                    className="h-[48px] w-[48px] overflow-hidden rounded-md bg-cover bg-center"
                    style={{ backgroundImage: `url(${Product})` }}
                  ></div>
                  <div className="ml-4 lg:ml-6">
                    <p className="text-[10px] font-normal text-neutral-03 lg:text-xs">
                      Penawaran Produk
                    </p>
                    <p className="py-1 text-xs font-normal lg:text-sm ">
                      Jam Tangan Casio
                    </p>
                    <p className="text-xs font-normal lg:text-sm ">
                      Rp. 250.000
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <p className="text-[10px] font-normal text-neutral-03 lg:text-xs">
                    20 Apr, 14:04
                  </p>
                  <div className="ml-1 mt-1 h-2 w-2 rounded-[50%] bg-red-500 lg:ml-2"></div>
                </div>
              </div>
              <div className="border-b-neutral-01 mt-4 flex justify-center border-b-2 pb-4 md:justify-end">
                <button className="rounded-2xl border border-olive-04 bg-white px-8 py-[6px] text-sm font-medium transition duration-300 hover:bg-olive-04 hover:text-white sm:px-12 sm:py-2">
                  Tolak
                </button>
                <button
                  onClick={openModal}
                  className="ml-4 rounded-2xl bg-olive-04 px-8 py-[6px] text-sm font-medium text-white transition duration-300 hover:bg-olive-02 hover:text-neutral-04 sm:px-12 sm:py-2"
                >
                  Terima
                </button>
              </div>
              {/* Import Modal Tawar Accepted */}
              <ModalTawarAccepted
                openModal={openModal}
                closeModal={closeModal}
                isOpen={isOpen}
              />
              {/* Import Modal Tawar Accepted */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InfoPenawar;
