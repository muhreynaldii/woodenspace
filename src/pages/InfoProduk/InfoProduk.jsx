import React from "react";
import Plus from "../../assets/icons/fi_plus (hitam).png";
import Logo from "../../assets/image/logo.png";
import fi_arrow_left from "../../assets/icons/fi_arrow-left.svg";

function InfoProduk() {
  return (
    <>
      <header className="fixed top-0 left-0 z-20 w-full items-center bg-white shadow-high">
        <div className="container mx-auto">
          <div className="relative flex items-center justify-between">
            <div className="flex items-center py-5 pl-4 pr-1 lg:px-0">
              <img src={Logo} alt="Logo" width={"100px"} />
            </div>
          </div>
        </div>
      </header>

      <section id="info-produk">
        <div className="container mx-auto my-[80px] px-4">
          <div className="mr-auto mb-6 lg:mr-0 lg:mb-0">
            <img src={fi_arrow_left} alt="" />
          </div>
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
                <div className="block w-full rounded-2xl border px-4 py-3 text-sm shadow">
                  <select
                    name="Kategori"
                    id="kKategori"
                    className="value:text-slate-400 w-[530px]"
                  >
                    <option value="Pilih Kategori">Pilih Kategori</option>
                    <option value="Meja">Meja</option>
                    <option value="Kursi">Kursi</option>
                    <option value="Lemari">Lemari</option>
                  </select>
                </div>
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
          <div className="container mx-auto mb-20 flex w-[568px] justify-center">
            <button className=" mx-auto w-[276px] rounded-full border border-purple-04 bg-white px-6 py-3 font-normal transition duration-300 hover:bg-purple-04 hover:text-white">
              Preview
            </button>
            <button className=" mx-auto w-[276px] rounded-full bg-purple-800 px-6 py-3 font-normal text-white hover:bg-purple-900">
              Terbitkan
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default InfoProduk;
