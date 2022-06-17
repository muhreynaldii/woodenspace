import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import fi_list from "../../assets/icons/fi_list.png";
import fi_bell from "../../assets/icons/fi_bell.png";
import fi_user from "../../assets/icons/fi_user.png";
import Product from "../../assets/image/products/product-1.png";

function NavMenu() {
  return (
    <nav id="nav-menu">
      {/* Menu List Menu */}
      <Menu as="div" className="relative inline-block text-left">
        <div className="flex">
          <Menu.Button className="inline-flex w-full justify-center rounded-md px-4">
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
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                <button className="group mb-2 flex w-full items-center rounded-md px-2 px-2 py-2 hover:bg-violet-500 hover:text-white">
                  Edit Profil
                </button>
              </Menu.Item>
              <Menu.Item>
                <button className="group mb-2 flex w-full items-center rounded-md px-2 px-2 py-2 hover:bg-violet-500 hover:text-white">
                  Jualan Saya
                </button>
              </Menu.Item>
              <Menu.Item>
                <button className="group mb-2 flex w-full items-center rounded-md px-2 px-2 py-2 hover:bg-violet-500 hover:text-white">
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
          <Menu.Button className="inline-flex w-full justify-center rounded-md px-4">
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
          <Menu.Items className="absolute right-0 mt-2 w-[376px] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                <div className="flex justify-between p-5">
                  <div
                    className="h-[48px] w-[48px] overflow-hidden rounded-md bg-cover bg-center"
                    style={{ backgroundImage: `url(${Product})` }}
                  ></div>
                  <div className="mr-6 ">
                    <p className="text-xs font-normal text-neutral-03">
                      Penawaran Produk
                    </p>
                    <p className="py-1 text-sm font-normal ">
                      Jam Tangan Casio
                    </p>
                    <p className="text-sm font-normal ">Rp. 250.000</p>
                  </div>
                  <div className="flex">
                    <p className="text-xs font-normal text-neutral-03">
                      20 Apr, 14:04
                    </p>
                    <div className="ml-2 mt-1 h-2 w-2 rounded-[50%] bg-red-500"></div>
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
          <Menu.Button className="inline-flex w-full justify-center rounded-md px-4">
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
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                <button className="group mb-2 flex w-full items-center rounded-md px-2 py-2 hover:bg-violet-500 hover:text-white">
                  Edit Profil
                </button>
              </Menu.Item>
              <Menu.Item>
                <button className="group mb-2 flex w-full items-center rounded-md px-2 py-2 hover:bg-violet-500 hover:text-white">
                  Jualan Saya
                </button>
              </Menu.Item>
              <Menu.Item>
                <button className="group flex w-full items-center rounded-md px-2 py-2 hover:bg-violet-500 hover:text-white">
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
