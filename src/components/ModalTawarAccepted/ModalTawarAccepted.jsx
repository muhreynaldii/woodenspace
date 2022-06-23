import React, { Fragment } from "react";
import User from "../../assets/image/user.png";
import Product from "../../assets/image/products/product-1.png";
import { Dialog, Transition } from "@headlessui/react";
import iconX from "../../assets/icons/fi_x.png";
import { Link } from "react-router-dom";

const ModalTawarAccepted = ({ closeModal, isOpen }) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[99]" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[360px] transform overflow-hidden rounded-2xl bg-white p-8 text-left align-middle shadow-xl transition-all">
                  <div className="-mt-4 flex justify-end">
                    <button onClick={closeModal}>
                      <img
                        src={iconX}
                        alt=""
                        className="mb-2 h-[34px] w-[34px] cursor-pointer self-end"
                      />
                    </button>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="text-sm font-medium leading-6"
                  >
                    Yeay kamu berhasil mendapat harga yang sesuai
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm font-normal text-neutral-03">
                      Segera hubungi pembeli melalui whatsapp untuk transaksi
                      selanjutnya
                    </p>
                  </div>

                  <div className="mx-auto mt-4 rounded-2xl bg-[#EEEEEE] p-4">
                    <div className="flex justify-center">
                      <h3 className="text-sm font-medium">Product Match</h3>
                    </div>
                    <div className="mt-4 flex items-center">
                      <div className="overflow-hidden rounded-xl">
                        <img src={User} alt="User" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium">Nama Pembeli</p>
                        <p className="text-xs text-neutral-03">Kota</p>
                      </div>
                    </div>
                    <div className="mt-4 flex">
                      <div className="h-[48px] w-[48px] overflow-hidden rounded-xl">
                        <img
                          src={Product}
                          alt="User"
                          className="h-[48px] w-[48px]"
                        />
                      </div>
                      <div className="ml-4">
                        <p className="text-xs font-normal text-neutral-05 lg:text-sm ">
                          Jam Tangan Casio
                        </p>
                        <p className="text-xs font-normal text-neutral-05 lg:text-sm ">
                          Rp. 250.000
                        </p>
                        <p className="text-xs font-normal text-neutral-05 lg:text-sm ">
                          Ditawar Rp. 200.000
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="relative mt-4">
                    <Link to="/info_penawar_status">
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-2xl bg-purple-04 px-4 py-3 text-sm font-medium text-white"
                      >
                        Hubungi Via Whatsapp
                      </button>
                    </Link>
                    <span className="absolute right-6 top-4">
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
                        className="fill-white"
                      >
                        <title>WhatsApp</title>
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                    </span>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ModalTawarAccepted;
