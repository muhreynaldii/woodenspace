import React, { useState, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import "animate.css";
import "../../Alert.css";
import dateFormat from "dateformat";

function NavMenu() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState([]);

  useEffect(() => {
    getTransactions();
    getBuyerTransactions();
  }, []);

  const getTransactions = async () => {
    try {
      const res = await axios({
        method: "get",
        url: "https://wooden-space-api-development.herokuapp.com/api/v1/transaction/seller",
        data: data,
        headers: { Authorization: token },
      });

      setData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getBuyerTransactions = async () => {
    try {
      const res = await axios({
        method: "get",
        url: "https://wooden-space-api-development.herokuapp.com/api/v1/transaction/buyer",
        data: newData,
        headers: { Authorization: token },
      });

      setNewData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async () => {
    try {
      await axios({
        method: "get",
        url: "https://wooden-space-authorization.herokuapp.com/api/v1/auth/logout",
        withCredentials: true,
      });
      localStorage.removeItem("token");
      navigate("/login", { replace: true });
      Swal.fire({
        html: "<p>Berhasil Logout</p>",
        position: "top",
        showConfirmButton: false,
        color: "black",
        width: 500,
        padding: "0",
        timer: 2000,
        showClass: {
          popup: "animate__animated animate__backInDown",
        },
        hideClass: {
          popup: "animate__animated animate__backOutUp",
        },
        customClass: "swal-info",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav id="nav-menu" className="mt-1">
      <Menu as="div" className="relative inline-block text-left">
        <div className="flex items-center">
          <Menu.Button className="inline-flex w-full justify-center rounded-md px-2 lg:px-4">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              className="stroke-neutral-05 hover:stroke-olive-04 sm:h-[24px] sm:w-[24px]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 18H21"
                style={{
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }}
              />
              <path
                d="M3 18H3.01"
                style={{
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }}
              />
              <path
                d="M8 12H21"
                style={{
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }}
              />
              <path
                d="M3 12H3.01"
                style={{
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }}
              />
              <path
                d="M8 6H21"
                style={{
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }}
              />
              <path
                d="M3 6H3.01"
                style={{
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }}
              />
            </svg>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute top-8 right-0 mt-2 w-48 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none lg:w-56">
            <div className="px-2 py-2">
              <Menu.Item>
                <Link as="div" to="/seller/list_product">
                  <button className="group flex w-full items-center rounded-md px-1 py-1 text-sm hover:bg-olive-04 hover:text-white lg:text-base">
                    Jualan Saya
                  </button>
                </Link>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>

      <Menu as="div" className="relative inline-block text-left">
        <div className="flex">
          <Menu.Button className="inline-flex w-full justify-center rounded-md px-2 lg:px-4">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              className="stroke-neutral-05 hover:stroke-olive-04 sm:h-[24px] sm:w-[24px]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
                style={{
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }}
              />
              <path
                d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
                style={{
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }}
              />
            </svg>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute top-8 -right-4 mt-2 max-h-[300px] w-[300px]  origin-top-right divide-y divide-gray-100 overflow-auto rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none lg:right-0 lg:w-[376px]">
            <div className="px-1 py-1 ">
              {data &&
                data.map((item) => (
                  <Menu.Item key={item?.product_transactions[0]?.id}>
                    <Link
                      to={`/seller/bidding/${item?.product_transactions[0]?.id}`}
                      as="div"
                    >
                      <div className="group flex justify-between border-b-[1px] p-2 hover:cursor-pointer hover:rounded-lg hover:bg-olive-02 lg:p-5">
                        <div className="flex">
                          <div className="mr-2 lg:mr-4">
                            <img
                              src={item?.product_images[0].url}
                              alt=""
                              className="h-[48px] w-[48px] overflow-hidden rounded-md object-cover"
                            />
                          </div>
                          <div>
                            <div className="flex">
                              <p className="mr-8 text-[10px] font-normal text-neutral-03 lg:text-xs">
                                Penawaran Produk
                              </p>

                              <p className="text-[10px] font-normal text-neutral-03 lg:text-xs">
                                {dateFormat(
                                  item?.product_transactions[0]?.updatedAt,
                                  "dS mmmm, mm:ss"
                                )}
                              </p>
                              <span className="ml-1 mt-1 h-2 w-2 rounded-[50%] bg-red-500 lg:ml-2"></span>
                            </div>
                            <div>
                              <p className="truncate py-1 text-xs font-normal capitalize lg:text-sm">
                                {item.name}
                              </p>

                              <p className="pb-1 text-xs font-normal line-through lg:text-sm ">
                                Rp.
                                {new Intl.NumberFormat("id-ID").format(
                                  Math.floor(item.price)
                                )}
                              </p>

                              <p className="pb-1 text-xs font-normal lg:text-sm ">
                                Ditawar Rp.
                                {new Intl.NumberFormat("id-ID").format(
                                  Math.floor(
                                    item?.product_transactions[0]?.price_offered
                                  )
                                )}
                              </p>

                              {item?.product_transactions[0]?.status ===
                                "accepted" && (
                                <p className="text-xs font-normal text-green-400 lg:text-sm ">
                                  OnProcess
                                </p>
                              )}

                              {item?.product_transactions[0]?.status ===
                                "failed" && (
                                <p className="text-xs font-normal text-red-400 lg:text-sm ">
                                  Canceled
                                </p>
                              )}

                              {item?.product_transactions[0]?.status ===
                                "finish" && (
                                <p className="text-xs font-normal text-neutral-03 lg:text-sm ">
                                  Finished
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </Menu.Item>
                ))}

              {newData &&
                newData.map((item) => (
                  <Menu.Item key={item.id}>
                    <Link to={"/"}>
                      <div className="group flex justify-between border-b-[1px] p-2 hover:cursor-pointer hover:rounded-lg hover:bg-olive-02 lg:p-5">
                        <div className="flex">
                          <div className="mr-2 lg:mr-4">
                            <img
                              src={item.product.product_images[0].url}
                              alt=""
                              className="h-[48px] w-[48px] overflow-hidden rounded-md object-cover"
                            />
                          </div>

                          <div>
                            <div className="flex">
                              <p className="mr-8 text-[10px] font-normal text-neutral-03 lg:text-xs">
                                {item.status === "offered"
                                  ? "Berhasil Diterbitkan"
                                  : "Penawaran produk"}
                              </p>

                              <p className="text-right text-[10px] font-normal text-neutral-03 lg:text-xs">
                                {dateFormat(item.updatedAt, "dS mmmm, mm:ss")}
                              </p>
                              <span className="ml-1 mt-1 h-2 w-2 rounded-[50%] bg-red-500"></span>
                            </div>
                            <p className="truncate py-1 text-xs font-normal capitalize lg:text-sm">
                              {item.product.name}
                            </p>

                            {item.status === "offered" && (
                              <p className="text-xs font-normal lg:text-sm ">
                                Rp.
                                {new Intl.NumberFormat("id-ID").format(
                                  Math.floor(item.price_offered)
                                )}
                              </p>
                            )}

                            {item.status === "accepted" && (
                              <>
                                <p className="text-xs font-normal line-through lg:text-sm ">
                                  Rp.
                                  {new Intl.NumberFormat("id-ID").format(
                                    Math.floor(item.product.price)
                                  )}
                                </p>
                                <p className="text-xs font-normal lg:text-sm ">
                                  Berhasil ditawar Rp.
                                  {new Intl.NumberFormat("id-ID").format(
                                    Math.floor(item.price_offered)
                                  )}
                                </p>
                                <p className="text-[10px] font-normal text-neutral-03">
                                  Kamu akan segera dihubungi penjual via
                                  whatsapp
                                </p>
                              </>
                            )}

                            {item.status === "finish" && (
                              <>
                                <p className="text-xs font-normal lg:text-sm ">
                                  Rp.
                                  {new Intl.NumberFormat("id-ID").format(
                                    Math.floor(item.price_offered)
                                  )}
                                </p>
                                <p className="text-xs font-normal lg:text-sm">
                                  Transaksi Selesai
                                </p>
                              </>
                            )}

                            {item.status === "failed" && (
                              <>
                                <p className="text-xs font-normal lg:text-sm">
                                  Rp.
                                  {new Intl.NumberFormat("id-ID").format(
                                    Math.floor(item.price_offered)
                                  )}
                                </p>
                                <p className="text-xs font-normal lg:text-sm">
                                  Tawaran ditolak
                                </p>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </Menu.Item>
                ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>

      <Menu as="div" className="relative inline-block text-left">
        <div className="flex">
          <Menu.Button className="inline-flex w-full justify-center rounded-md px-2 lg:px-4">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              className="stroke-neutral-05 hover:stroke-olive-04 sm:h-[24px] sm:w-[24px]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                style={{
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }}
              />
              <path
                d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                style={{
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }}
              />
            </svg>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute top-8 right-0 mt-2 w-48 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none lg:w-56">
            <div className="px-2 py-2">
              <Menu.Item>
                <Link as="div" to="/profile">
                  <button className="group flex w-full items-center rounded-md px-1 py-1 text-sm hover:bg-olive-04 hover:text-white lg:text-base">
                    Edit Profil
                  </button>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <button
                  className="group flex w-full items-center rounded-md px-1 py-1 text-sm hover:bg-olive-04 hover:text-white lg:text-base"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </nav>
  );
}

export default NavMenu;
