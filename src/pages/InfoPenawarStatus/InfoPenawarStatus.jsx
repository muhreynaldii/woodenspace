import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/image/logo.png";
import User from "../../assets/image/user.png";
import fi_arrow_left from "../../assets/icons/fi_arrow-left.svg";
import Product from "../../assets/image/products/product-1.png";
import ModalStatus from "../../components/ModalStatus/ModalStatus";

const InfoPenawarStatus = () => {
  useEffect(() => {
    document.title = "Info Penawar Status | Woodenspace";
  }, []);

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
                <button
                  onClick={openModal}
                  className="rounded-2xl border border-olive-04 bg-white px-3 py-1 text-sm font-medium transition duration-300 hover:bg-olive-04 hover:text-white sm:px-12 sm:py-2"
                >
                  Status
                </button>
                <button className="group relative ml-4 rounded-2xl bg-olive-04 px-10 py-2 text-sm font-medium text-white transition duration-300 hover:bg-olive-02 hover:text-neutral-04 lg:px-12">
                  Hubungi di
                  <span className="absolute right-4 top-3 lg:right-6">
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      className="fill-white transition duration-300 group-hover:fill-neutral-04"
                    >
                      <title>WhatsApp</title>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </span>
                </button>
              </div>
              {/* Import Modal Status */}
              <ModalStatus
                openModal={openModal}
                closeModal={closeModal}
                isOpen={isOpen}
              />
              {/* Import Modal Status */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InfoPenawarStatus;
