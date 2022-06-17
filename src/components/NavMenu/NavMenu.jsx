import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import fi_list from "../../assets/icons/fi_list.png";
import fi_bell from "../../assets/icons/fi_bell.png";
import fi_user from "../../assets/icons/fi_user.png";
import Product from "../../assets/image/products/product-1.png";

function NavMenu() {
  return (
    <nav id="nav-menu" className="mr-2 mt-1">
      {/* Menu List Menu */}
      <Menu as="div" className="relative inline-block text-left">
        <div className="flex items-center">
          <Menu.Button className="inline-flex w-full justify-center rounded-md px-2 lg:px-4">
            <img src={fi_list} alt="" />
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
                <button className="group flex w-full items-center rounded-md px-1 py-1 text-sm hover:bg-violet-500 hover:text-white lg:text-base">
                  Edit Profil
                </button>
              </Menu.Item>
              <Menu.Item>
                <button className="group flex w-full items-center rounded-md px-1 py-1 text-sm hover:bg-violet-500 hover:text-white lg:text-base">
                  Jualan Saya
                </button>
              </Menu.Item>
              <Menu.Item>
                <button className="group flex w-full items-center rounded-md px-1 py-1 text-sm hover:bg-violet-500 hover:text-white lg:text-base">
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
            <img src={fi_bell} alt="" />
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
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>

      {/* Menu User */}
      <Menu as="div" className="relative inline-block text-left">
        <div className="flex">
          <Menu.Button className="inline-flex w-full justify-center rounded-md px-2 lg:px-4">
            <img src={fi_user} alt="" />
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
                <button className="group flex w-full items-center rounded-md px-1 py-1 text-sm hover:bg-violet-500 hover:text-white lg:text-base">
                  Edit Profil
                </button>
              </Menu.Item>
              <Menu.Item>
                <button className="group flex w-full items-center rounded-md px-1 py-1 text-sm hover:bg-violet-500 hover:text-white lg:text-base">
                  Jualan Saya
                </button>
              </Menu.Item>
              <Menu.Item>
                <button className="group flex w-full items-center rounded-md px-1 py-1 text-sm hover:bg-violet-500 hover:text-white lg:text-base">
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
