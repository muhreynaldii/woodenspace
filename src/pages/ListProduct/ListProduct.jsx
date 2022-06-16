import React from "react";
import Header from "../../components/Header/Header";
import User from "../../assets/image/user.png";
import Product from "../../assets/image/products/product-1.png";
import fi_plus from "../../assets/icons/fi_plus.svg";
import fi_box from "../../assets/icons/fi_box.svg";
import fi_chevron from "../../assets/icons/fi_chevron-right.svg";
import fi_chevron_1 from "../../assets/icons/fi_chevron-right-1.svg";
import fi_heart from "../../assets/icons/fi_heart.svg";
import fi_dollar from "../../assets/icons/fi_dollar-sign.svg";
import { Link } from "react-router-dom";
import NavMenu from "./../../components/NavMenu/NavMenu";

const ListProduct = () => {
  return (
    <>
      <Header>
        <NavMenu />
      </Header>

      <section id="list-product" className="pt-32">
        <div className="container mx-auto px-4">
          {/* Box */}
          <div className="mb-6 flex justify-center">
            <div className="w-full lg:w-[968px]">
              <h3 className="mb-6 text-xl font-bold">Daftar Jualan Saya</h3>
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
                  <button className="rounded-lg border border-purple-04 py-1 px-3 text-xs font-medium text-neutral-05 transition duration-300 hover:bg-purple-04 hover:text-white">
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* list product box */}
          <div className="flex justify-center">
            <div className="w-full lg:w-[968px]">
              <div className="flex flex-col lg:flex-row">
                <div className="mr-8 mb-6 h-[248px] w-full rounded-2xl p-6 shadow-low md:w-full lg:w-[268px]">
                  <h3 className="mb-6 text-base font-semibold">Kategori</h3>
                  <ul>
                    <li className="border-b-neutral-01 border-b-2 pb-4">
                      <div className="flex items-center">
                        <img src={fi_box} alt="" className="mr-2" />
                        <Link
                          to="#"
                          className="mr-7 text-base font-medium text-purple-04"
                        >
                          Semua Produk
                        </Link>
                        <img src={fi_chevron} alt="" />
                      </div>
                    </li>
                    <li className="border-b-neutral-01 mt-4 border-b-2 pb-4">
                      <div className="flex items-center">
                        <img src={fi_heart} alt="" className="mr-2" />
                        <Link
                          to="#"
                          className="mr-[78px] text-base font-medium text-black"
                        >
                          Diminati
                        </Link>
                        <img src={fi_chevron_1} alt="" />
                      </div>
                    </li>
                    <li className="mt-4">
                      <div className="flex items-center">
                        <img src={fi_dollar} alt="" className="mr-2" />
                        <Link
                          to="#"
                          className="mr-[90px] text-base font-medium text-black"
                        >
                          Terjual
                        </Link>
                        <img src={fi_chevron_1} alt="" />
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="flex w-full flex-wrap justify-between lg:w-3/4">
                  {/* <Link to="/detail"> */}
                  <div className="border-neutral-01 mb-6 flex h-[198px] w-full flex-col items-center justify-center rounded-md border-2 border-dashed p-6 hover:cursor-pointer lg:w-[207px]">
                    <img src={fi_plus} alt="icon_add" />
                    <p className="mt-3 text-sm font-normal text-neutral-03">
                      Tambah Produk
                    </p>
                  </div>
                  {/* </Link> */}

                  <div className="mb-6 h-[198px] w-[48%] rounded-md p-2 shadow-low lg:w-[207px]">
                    <div
                      className="mb-2 h-24 overflow-hidden rounded-md bg-cover bg-center p-2"
                      style={{ backgroundImage: `url(${Product})` }}
                    ></div>
                    <p className="mb-1 text-sm font-normal">Jam Tangan Casio</p>
                    <p className="mb-2 text-xs text-neutral-03">Aksesoris</p>
                    <p className="mb-3 text-sm font-normal">Rp. 250.000</p>
                  </div>
                  <div className="mb-6 h-[198px] w-[48%] rounded-md p-2 shadow-low lg:w-[207px]">
                    <div
                      className="mb-2 h-24 overflow-hidden rounded-md bg-cover bg-center p-2"
                      style={{ backgroundImage: `url(${Product})` }}
                    ></div>
                    <p className="mb-1 text-sm font-normal">Jam Tangan Casio</p>
                    <p className="mb-2 text-xs text-neutral-03">Aksesoris</p>
                    <p className="mb-3 text-sm font-normal">Rp. 250.000</p>
                  </div>
                  <div className="mb-6 h-[198px] w-[48%] rounded-md p-2 shadow-low lg:w-[207px]">
                    <div
                      className="mb-2 h-24 overflow-hidden rounded-md bg-cover bg-center p-2"
                      style={{ backgroundImage: `url(${Product})` }}
                    ></div>
                    <p className="mb-1 text-sm font-normal">Jam Tangan Casio</p>
                    <p className="mb-2 text-xs text-neutral-03">Aksesoris</p>
                    <p className="mb-3 text-sm font-normal">Rp. 250.000</p>
                  </div>
                  <div className="mb-6 h-[198px] w-[48%] rounded-md p-2 shadow-low lg:w-[207px]">
                    <div
                      className="mb-2 h-24 overflow-hidden rounded-md bg-cover bg-center p-2"
                      style={{ backgroundImage: `url(${Product})` }}
                    ></div>
                    <p className="mb-1 text-sm font-normal">Jam Tangan Casio</p>
                    <p className="mb-2 text-xs text-neutral-03">Aksesoris</p>
                    <p className="mb-3 text-sm font-normal">Rp. 250.000</p>
                  </div>
                  <div className="mb-6 h-[198px] w-[48%] rounded-md p-2 shadow-low lg:w-[207px]">
                    <div
                      className="mb-2 h-24 overflow-hidden rounded-md bg-cover bg-center p-2"
                      style={{ backgroundImage: `url(${Product})` }}
                    ></div>
                    <p className="mb-1 text-sm font-normal">Jam Tangan Casio</p>
                    <p className="mb-2 text-xs text-neutral-03">Aksesoris</p>
                    <p className="mb-3 text-sm font-normal">Rp. 250.000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ListProduct;
