import React from "react";
import Header from "../../components/Header/Header";
import User from "../../assets/image/user.png";
import Product from "../../assets/image/products/product-1.png";
import fi_plus from "../../assets/icons/fi_plus.svg";
import { Link } from "react-router-dom";

const ListProduct = () => {
  return (
    <>
      <Header />

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
                  <button className="rounded-lg border border-dark-blue-04 py-1 px-3 text-xs font-medium text-neutral-05">
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* list product box */}
          <div className="flex justify-center">
            <div className="w-full lg:w-[968px]">
              <div className="flex flex-col justify-between lg:flex-row">
                <div className="mr-8 mb-6 h-[248px] w-full rounded-2xl p-6 shadow-low md:w-full lg:w-[268px]">
                  <h3 className="mb-6 text-base font-semibold">Kategori</h3>
                  <ul>
                    <li className="border-b-neutral-01 border-b-2 pb-4">
                      Semua Produk
                    </li>
                    <li className="border-b-neutral-01 mt-4 border-b-2 pb-4">
                      Diminati
                    </li>
                    <li className="mt-4">Terjual</li>
                  </ul>
                </div>
                <div className="flex w-full flex-wrap justify-between lg:w-3/4">
                  <Link to="/detail">
                    <div className="border-neutral-01 mb-6 flex h-[198px] w-full flex-col items-center justify-center rounded-md border-2 border-dashed p-6 lg:w-[207px]">
                      <img src={fi_plus} alt="icon_add" />
                      <p className="mt-3 text-sm font-normal text-neutral-03">
                        Tambah Produk
                      </p>
                    </div>
                  </Link>
                  <div className="mb-6 h-[198px] w-full rounded-md p-2 shadow-low lg:w-[207px]">
                    <div
                      className="mb-2 h-24 overflow-hidden rounded-md bg-cover bg-center p-2"
                      style={{ backgroundImage: `url(${Product})` }}
                    ></div>
                    <p className="mb-1 text-sm font-normal">Jam Tangan Casio</p>
                    <p className="mb-2 text-xs text-neutral-03">Aksesoris</p>
                    <p className="mb-3 text-sm font-normal">Rp. 250.000</p>
                  </div>
                  <div className="mb-6 h-[198px] w-full rounded-md p-2 shadow-low lg:w-[207px]">
                    <div
                      className="mb-2 h-24 overflow-hidden rounded-md bg-cover bg-center p-2"
                      style={{ backgroundImage: `url(${Product})` }}
                    ></div>
                    <p className="mb-1 text-sm font-normal">Jam Tangan Casio</p>
                    <p className="mb-2 text-xs text-neutral-03">Aksesoris</p>
                    <p className="mb-3 text-sm font-normal">Rp. 250.000</p>
                  </div>
                  <div className="mb-6 h-[198px] w-full rounded-md p-2 shadow-low lg:w-[207px]">
                    <div
                      className="mb-2 h-24 overflow-hidden rounded-md bg-cover bg-center p-2"
                      style={{ backgroundImage: `url(${Product})` }}
                    ></div>
                    <p className="mb-1 text-sm font-normal">Jam Tangan Casio</p>
                    <p className="mb-2 text-xs text-neutral-03">Aksesoris</p>
                    <p className="mb-3 text-sm font-normal">Rp. 250.000</p>
                  </div>
                  <div className="mb-6 h-[198px] w-full rounded-md p-2 shadow-low lg:w-[207px]">
                    <div
                      className="mb-2 h-24 overflow-hidden rounded-md bg-cover bg-center p-2"
                      style={{ backgroundImage: `url(${Product})` }}
                    ></div>
                    <p className="mb-1 text-sm font-normal">Jam Tangan Casio</p>
                    <p className="mb-2 text-xs text-neutral-03">Aksesoris</p>
                    <p className="mb-3 text-sm font-normal">Rp. 250.000</p>
                  </div>
                  <div className="mb-6 h-[198px] w-full rounded-md p-2 shadow-low lg:w-[207px]">
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
