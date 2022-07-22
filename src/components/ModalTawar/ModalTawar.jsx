import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import iconX from "../../assets/icons/fi_x.png";

const ModalTawar = ({
  product_name,
  product_price,
  product_images,
  closeModal,
  isOpen,
  addTransaction,
  data,
  setData,
  id,
}) => {
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
                  <div className="flex flex-col">
                    <img
                      src={iconX}
                      alt="icon-X"
                      className="mb-2 h-[34px] w-[34px] cursor-pointer self-end"
                      onClick={closeModal}
                    />
                    <Dialog.Title
                      as="h6"
                      className="text-sm font-medium text-black"
                    >
                      Masukkan Harga Tawarmu
                    </Dialog.Title>
                    <p className="my-4 text-sm text-neutral-03">
                      Harga tawaranmu akan diketahui penjual, jika penjual cocok
                      kamu akan segera dihubungi penjual.
                    </p>
                    <div className="mb-6 flex h-[80px] w-full items-center rounded-2xl bg-[#EEEEEE] p-4 shadow-high">
                      <img
                        src={product_images && product_images[0].url}
                        alt="ProductImage"
                        className="mr-4 h-[48px] w-[48px] rounded-xl"
                      />
                      <div>
                        <h6 className="mb-1 text-sm font-medium text-black">
                          {product_name}
                        </h6>
                        <p className="text-sm font-normal text-neutral-05">
                          Rp{" "}
                          {new Intl.NumberFormat("id-ID").format(
                            Math.floor(product_price)
                          )}
                        </p>
                      </div>
                    </div>
                    <form onSubmit={addTransaction}>
                      <label
                        htmlFor=""
                        className="mb-1 text-xs font-normal text-black"
                      >
                        Harga Tawar
                      </label>
                      <input
                        type="number"
                        className="placeholder: mb-6 h-[48px] w-full rounded-2xl border border-neutral-02 py-3 px-4 text-sm shadow-high placeholder:text-neutral-03"
                        placeholder="Rp 0,00"
                        value={data.price_offered || ""}
                        onChange={(e) =>
                          setData({
                            ...data,
                            price_offered: e.target.value,
                            product_id: id,
                          })
                        }
                      />
                      <button
                        type="submit"
                        className="h-[48px] w-full rounded-2xl bg-olive-04 py-3 px-6 text-center text-sm font-medium text-white transition duration-300 hover:bg-olive-02 hover:text-neutral-04"
                      >
                        {" "}
                        Kirim
                      </button>
                    </form>
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

export default ModalTawar;
