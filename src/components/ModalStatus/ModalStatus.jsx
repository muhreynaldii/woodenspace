import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import iconX from "../../assets/icons/fi_x.png";
import "./ModalStatus.css";
import Swal from "sweetalert2";
import "../../Alert.css";
import axios from "axios";

const ModalStatus = ({ closeModal, isOpen, id, token }) => {
  const [data, setData] = useState("");

  const handleStatus = async (e) => {
    e.preventDefault();

    if (data === "finish") {
      try {
        const res = await axios.put(
          `https://wooden-space-api-development.herokuapp.com/api/v1/transaction/seller/${id}`,
          { status: data },
          { headers: { Authorization: token } }
        );

        if (res.status === 201) {
          Swal.fire({
            html: "<p>Transaksi Selesai.</p>",
            position: "top",
            showConfirmButton: false,
            color: "white",
            width: 500,
            padding: "0",
            timer: 2000,
            customClass: "swal-success",
          });

          closeModal();
        }
      } catch (error) {
        console.log(error);
      }
    }

    if (data === "failed") {
      try {
        const res = await axios.put(
          `https://wooden-space-api-development.herokuapp.com/api/v1/transaction/cancel/${id}`,
          { status: data },
          { headers: { Authorization: token } }
        );

        if (res.status === 200) {
          Swal.fire({
            html: "<p>Tawaran Berhasil Ditolak.</p>",
            position: "top",
            showConfirmButton: false,
            color: "white",
            width: 500,
            padding: "0",
            timer: 2000,
            customClass: "swal-success",
          });

          closeModal();
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
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

                  <form onSubmit={(e) => handleStatus(e)}>
                    <div className="mt-6 flex">
                      <input
                        type="radio"
                        name="status"
                        id="berhasil"
                        value="finish"
                        onChange={(e) => setData(e.target.value)}
                      />
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
                      <input
                        type="radio"
                        name="status"
                        id="batalkan"
                        value="failed"
                        onChange={(e) => setData(e.target.value)}
                      />
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
                        type="submit"
                        className="inline-flex w-full justify-center rounded-2xl bg-olive-04 px-4 py-3 text-sm font-medium text-white transition duration-300 hover:bg-olive-02 hover:text-neutral-04"
                      >
                        Kirim
                      </button>
                    </div>
                  </form>
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
