import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Product from "../../assets/image/products/product-1.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function NavMenu() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios({
        method: "get",
        url: "https://wooden-space-authorization.herokuapp.com/api/v1/auth/logout",
        withCredentials: true,
      });
      localStorage.removeItem("token");
      navigate("/login", { replace: true });
      alert("Logout successed");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav id="nav-menu" className="mt-1">
      {/* Menu List Menu */}
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
                <button className="group flex w-full items-center rounded-md px-1 py-1 text-sm hover:bg-olive-04 hover:text-white lg:text-base">
                  Edit Profil
                </button>
              </Menu.Item>
              <Menu.Item>
                <button className="group flex w-full items-center rounded-md px-1 py-1 text-sm hover:bg-olive-04 hover:text-white lg:text-base">
                  Jualan Saya
                </button>
              </Menu.Item>
              <Menu.Item>
                <button className="group flex w-full items-center rounded-md px-1 py-1 text-sm hover:bg-olive-04 hover:text-white lg:text-base">
                  Logout
                </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>

      {/* Menu Notifikasi */}
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
          <Menu.Items className="absolute top-8 -right-4 mt-2 w-[300px] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none lg:right-0 lg:w-[376px]">
            <div className="px-1 py-1 ">
              <Menu.Item>
                <Link as="div" to="/bidding">
                  <div className="group flex justify-between p-2 hover:cursor-pointer lg:p-5">
                    <div
                      className="h-[48px] w-[48px] overflow-hidden rounded-md bg-cover bg-center"
                      style={{ backgroundImage: `url(${Product})` }}
                    ></div>
                    <div className="lg:mr-6 ">
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
                    <div className="flex">
                      <p className="text-[10px] font-normal text-neutral-03 lg:text-xs">
                        20 Apr, 14:04
                      </p>
                      <div className="ml-1 mt-1 h-2 w-2 rounded-[50%] bg-red-500 lg:ml-2"></div>
                    </div>
                  </div>
                </Link>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>

      {/* Menu User */}
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
                <Link as="div" to="/seller/list_product">
                  <button className="group flex w-full items-center rounded-md px-1 py-1 text-sm hover:bg-olive-04 hover:text-white lg:text-base">
                    Jualan Saya
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
