import React from "react";
import iconX from "../../assets/icons/fi_x.png";
import product from "../../assets/image/products/product-1.png";

function ModalTawar() {
  return (
    <div className="flex h-screen items-center">
      <div className="mx-auto h-[438px] w-[360px] rounded-2xl bg-white px-8 pt-4 pb-6 shadow-high">
        <div className="flex flex-col">
          <img
            src={iconX}
            alt=""
            className="mb-2 h-[34px] w-[34px] cursor-pointer self-end"
          />
          <h6 className="text-sm font-medium text-black">
            Masukkan Harga Tawarmu
          </h6>
          <p className="my-4 text-sm text-neutral-03">
            Harga tawaranmu akan diketahui penjual, jika penjual cocok kamu akan
            segera dihubungi penjual.
          </p>
          <div className="mb-6 flex h-[80px] w-[296px] items-center rounded-2xl bg-[#EEEEEE] p-4 shadow-high">
            <img
              src={product}
              alt=""
              className="mr-4 h-[48px] w-[48px] rounded-xl"
            />
            <div>
              <h6 className="mb-1 text-sm font-medium text-black">
                Jam Tangan Casio
              </h6>
              <p className="text-sm font-normal text-neutral-05">Rp 250.000</p>
            </div>
          </div>
          <label htmlFor="" className="mb-1 text-xs font-normal text-black">
            Harga Tawar
          </label>
          <input
            type="number"
            className="placeholder: mb-6 h-[48px] w-[296px] rounded-2xl border border-neutral-02 py-3 px-4 text-sm shadow-high placeholder:text-neutral-03"
            placeholder="Rp 0,00"
          />
          <button className="h-[48px] w-[296px] rounded-2xl bg-purple-04 py-3 px-6 text-center text-sm font-medium text-white hover:bg-purple-03">
            {" "}
            Kirim
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalTawar;
