import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import iconX from "../../assets/icons/fi_x.png";
import "./ModalStatus.css";

const ModalStatus = ({ closeModal, isOpen }) => {
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
                    Perbarui status penjualan produkmu
                  </Dialog.Title>

                  <div className="mt-6 flex">
                    <input type="radio" name="berhasil" id="berhasil" />
                    <div className="ml-6 -mt-1">
                      <p className="mb-2 text-sm font-medium text-neutral-05">
                        Berhasil Terjual
                      </p>
                      <p className="text-sm font-normal text-neutral-03">
                        Kamu telah sepakat menjual produk ini kepada pembeli
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 flex">
                    <input type="radio" name="berhasil" id="berhasil" />
                    <div className="ml-6 -mt-1">
                      <p className="mb-2 text-sm font-medium text-neutral-05">
                        Batalkan Transaksi
                      </p>
                      <p className="text-sm font-normal text-neutral-03">
                        Kamu membatalkan transaksi produk ini dengan pembeli
                      </p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-2xl bg-purple-04 px-4 py-3 text-sm font-medium text-white"
                      onClick={closeModal}
                    >
                      Kirim
                    </button>
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

export default ModalStatus;
