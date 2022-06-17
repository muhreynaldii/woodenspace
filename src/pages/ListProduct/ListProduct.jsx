import React from "react";
import Header from "../../components/Header/Header";
import User from "../../assets/image/user.png";
import Product from "../../assets/image/products/product-1.png";
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
                    <li className="border-b-neutral-01 group border-b pb-4 hover:border-b-purple-04">
                      <div className="flex items-center">
                        <svg
                          id="package-alt"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          class="icon line mr-2 stroke-neutral-03 group-hover:stroke-purple-04"
                          width="28"
                          height="28"
                        >
                          <polygon
                            id="primary"
                            points="20 16.5 20 7.5 12 3 4 7.5 4 16.5 12 21 20 16.5"
                            style={{
                              fill: "none",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: 1,
                            }}
                          ></polygon>
                          <polyline
                            id="primary-2"
                            data-name="primary"
                            points="20 7.5 12 11.5 4 7.5"
                            style={{
                              fill: "none",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: 1,
                            }}
                          ></polyline>
                          <line
                            id="primary-3"
                            data-name="primary"
                            x1="12"
                            y1="11.5"
                            x2="12"
                            y2="21"
                            style={{
                              fill: "none",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: 1,
                            }}
                          ></line>
                          <polyline
                            id="primary-4"
                            data-name="primary"
                            points="16 14 16 9.5 12 7.5"
                            style={{
                              fill: "none",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: 1,
                            }}
                          ></polyline>
                        </svg>
                        <Link
                          to="#"
                          className="mr-7 text-base font-normal text-neutral-05 group-hover:text-purple-04"
                        >
                          Semua Produk
                        </Link>
                        <svg
                          id="right-2"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          class="icon line stroke-neutral-02 group-hover:stroke-purple-04"
                          width="20"
                          height="20"
                        >
                          <polyline
                            id="primary"
                            points="7.5 3 16.5 12 7.5 21"
                            style={{
                              fill: "none",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: 2,
                            }}
                          ></polyline>
                        </svg>
                      </div>
                    </li>
                    <li className="border-b-neutral-01 group mt-4 border-b pb-4 hover:border-b-purple-04">
                      <div className="flex items-center">
                        {/* <img src={fi_heart} alt="" className="mr-2" /> */}
                        <svg
                          id="heartbeat"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          class="icon line mr-2 stroke-neutral-03 group-hover:stroke-purple-04"
                          width="26"
                          height="26"
                        >
                          <path
                            id="primary"
                            d="M19,14.07A32,32,0,0,1,12,21a32,32,0,0,1-7-6.93c-2.22-3-2.76-7.25-.53-9.45,4-4,7.57.61,7.57.61s3.55-4.58,7.57-.61C21.8,6.82,21.26,11.09,19,14.07ZM8,12h2l1-3,2,6,1-3h2"
                            style={{
                              fill: "none",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: 1.5,
                            }}
                          ></path>
                        </svg>
                        <Link
                          to="#"
                          className="mr-[78px] text-base font-normal text-neutral-05 group-hover:text-purple-04"
                        >
                          Diminati
                        </Link>
                        <svg
                          id="right-2"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          class="icon line stroke-neutral-02 group-hover:stroke-purple-04"
                          width="20"
                          height="20"
                        >
                          <polyline
                            id="primary"
                            points="7.5 3 16.5 12 7.5 21"
                            style={{
                              fill: "none",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: 2,
                            }}
                          ></polyline>
                        </svg>
                      </div>
                    </li>
                    <li className="group mt-4">
                      <div className="flex items-center">
                        <svg
                          id="dollar-symbol"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          class="icon line mr-2 stroke-neutral-03 group-hover:stroke-purple-04"
                          width="26"
                          height="26"
                        >
                          <path
                            id="primary"
                            d="M12,21V3M7,15.5A3.5,3.5,0,0,0,10.5,19h3A3.5,3.5,0,0,0,17,15.5h0A3.5,3.5,0,0,0,13.5,12h-3A3.5,3.5,0,0,1,7,8.5H7A3.5,3.5,0,0,1,10.5,5h3A3.5,3.5,0,0,1,17,8.5"
                            style={{
                              fill: "none",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: 1.5,
                            }}
                          ></path>
                        </svg>
                        <Link
                          to="#"
                          className="mr-[90px] text-base font-normal text-neutral-05 group-hover:text-purple-04"
                        >
                          Terjual
                        </Link>
                        <svg
                          id="right-2"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          class="icon line stroke-neutral-02 group-hover:stroke-purple-04"
                          width="20"
                          height="20"
                        >
                          <polyline
                            id="primary"
                            points="7.5 3 16.5 12 7.5 21"
                            style={{
                              fill: "none",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: 2,
                            }}
                          ></polyline>
                        </svg>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="flex w-full flex-wrap justify-between lg:w-3/4">
                  {/* <Link to="/detail"> */}
                  <div className=" border-neutral-01 group mb-6 flex h-[198px] w-full flex-col items-center justify-center rounded-md border-2 border-dashed p-6 hover:cursor-pointer hover:border-purple-04 lg:w-[207px]">
                    {/* <img src={fi_plus} alt="icon_add" /> */}
                    <svg
                      id="plus"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="icon line stroke-neutral-03 group-hover:stroke-purple-04"
                      width="30"
                      height="30"
                    >
                      <path
                        id="primary"
                        d="M5,12H19M12,5V19"
                        style={{
                          strokelLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                        }}
                      ></path>
                    </svg>
                    <p className="mt-3 text-sm font-normal text-neutral-03 group-hover:text-purple-04">
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
