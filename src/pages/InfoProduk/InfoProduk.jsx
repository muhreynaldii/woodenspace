import React from "react";
import Plus from "../../assets/icons/fi_plus (hitam).png";

function InfoProduk() {
  return (
    <>
      <section id="info-produk">
        <hr className="my-20" />
        <div className="mx-auto my-6 max-w-[564px] font-normal">
          <form action="">
            <label for="Nama Produk">
              <span className="mb-1 ml-0.5 block font-semibold text-slate-700">
                Nama Produk
              </span>
              <input
                type="Nama Produk"
                id="Nama Produk"
                placeholder="Nama Produk"
                className="block w-full rounded-2xl border px-4 py-3 text-sm shadow placeholder:text-slate-400"
              />
            </label>
          </form>
          <form action="">
            <label for="Harga Produk">
              <span className="mb-1 mt-4 ml-0.5 block font-semibold text-slate-700">
                Harga Produk
              </span>
              <input
                type="Harga Produk"
                id="Harga Produk"
                placeholder="Rp 0,00"
                className="block w-full rounded-2xl border px-4 py-3 text-sm shadow placeholder:text-slate-400"
              />
            </label>
          </form>
          <form action="">
            <label for="Kategori">
              <span className="mb-1 mt-4 ml-0.5 block font-semibold text-slate-700">
                Kategori
              </span>
              <input
                type="Kategori"
                id="Kategori"
                placeholder="Pilih Kategori"
                className="block w-full rounded-2xl border px-4 py-3 text-sm shadow placeholder:text-slate-400"
              />
            </label>
          </form>
          <form action="">
            <label for="Deskripsi">
              <span className="mb-1 mt-4 ml-0.5 block font-semibold text-slate-700">
                Deskripsi
              </span>
              <input
                type="Deskripsi"
                id="Deskripsi"
                placeholder="Contoh: Jalan Ikan Hiu 33"
                className="block h-20 w-full rounded-2xl border px-4 py-3 text-sm shadow placeholder:text-slate-400"
              />
            </label>
          </form>
          <div className="mb-1 mt-4 ml-0.5 block font-semibold text-slate-700">
            Foto Produk
          </div>
          <div className="h-24 w-24 rounded-lg border-2 border-dashed p-9 shadow">
            <img src={Plus} alt="Plus" />
          </div>
        </div>
        <div className="container mx-auto flex w-[568px] justify-center">
          <button className=" mx-auto w-[276px] rounded-full bg-white px-6 py-3 font-normal text-black hover:ring hover:ring-purple-800">
            Preview
          </button>
          <button className=" mx-auto w-[276px] rounded-full bg-purple-800 px-6 py-3 font-normal text-white hover:bg-purple-900">
            Terbitkan
          </button>
        </div>
      </section>
    </>
  );
}

export default InfoProduk;
