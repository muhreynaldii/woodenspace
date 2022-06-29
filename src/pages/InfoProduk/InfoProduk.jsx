import React from "react";
import Plus from "../../assets/icons/fi_plus (hitam).png";
import { Link } from "react-router-dom";
import Logo from "../../assets/image/logo.png";
import fi_arrow_left from "../../assets/icons/fi_arrow-left.svg";

function InfoProduk() {
  return (
    <>
      <header className="fixed top-0 left-0 z-20 w-full items-center bg-white shadow-high">
        <div className="container mx-auto">
          <div className="relative flex items-center justify-between">
            <div className="flex items-center py-5 pl-4 pr-1 lg:px-4">
              <img src={Logo} alt="Logo" width={"100px"} />
            </div>
          </div>
        </div>
      </header>

      <section id="info-profil" className="pt-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto flex w-full flex-wrap justify-center lg:w-[800px] lg:flex-nowrap">
            <div className="mr-auto mb-6 lg:mr-0 lg:mb-0">
              <Link to="/">
                <img src={fi_arrow_left} alt="" />
              </Link>
            </div>
            <div className="mx-auto w-full font-normal lg:w-[568px]">
              <form>
                <div className="form-group mb-4">
                  <label htmlFor="nama_produk">
                    <span className="mb-1 block text-xs font-normal after:text-pink-500 after:content-['*']">
                      Nama Produk
                    </span>
                    <input
                      type="text"
                      id="nama"
                      placeholder="Nama Produk"
                      className="block w-full rounded-2xl border px-4 py-3 text-xs placeholder:text-neutral-03"
                    />
                  </label>
                </div>

                <div className="form-group mb-4">
                  <label htmlFor="harga_produk">
                    <span className="mb-1 block text-xs font-normal after:text-pink-500 after:content-['*']">
                      Harga Produk
                    </span>
                    <input
                      type="number"
                      id="harga"
                      placeholder="Rp. 0,00"
                      className="block w-full rounded-2xl border px-4 py-3 text-xs placeholder:text-neutral-03"
                    />
                  </label>
                </div>

                <div className="form-grop mb-4">
                  <label htmlFor="kategori">
                    <span className="mb-1 block text-xs font-normal after:text-pink-500 after:content-['*']">
                      Kategori
                    </span>
                    <select
                      name="kategori"
                      id="kategori"
                      className="value:text-neutral-03 block w-full rounded-2xl border px-4 py-3 text-xs placeholder:text-neutral-03"
                    >
                      <option className="text-xs text-neutral-03" value="-">
                        Pilih Kategori
                      </option>
                      <option className="text-xs text-neutral-03" value="Meja">
                        Meja
                      </option>
                      <option
                        className="text-xs text-neutral-03"
                        value="Lemari"
                      >
                        Lemari
                      </option>
                    </select>
                  </label>
                </div>

                <div className="form-grop mb-4">
                  <label htmlFor="deskripsi">
                    <span className="mb-1 block text-xs font-normal after:text-pink-500 after:content-['*']">
                      Deskripsi
                    </span>
                    <textarea
                      name="deskripsi"
                      id="deskripsi"
                      cols="30"
                      rows="2"
                      placeholder="Deskripsi Produk"
                      className="block w-full rounded-2xl border px-4 py-3 text-xs placeholder:text-neutral-03"
                    ></textarea>
                  </label>
                </div>

                <div className="form-group mb-4">
                  <label htmlFor="no">
                    <span className="mb-1 block text-xs font-normal after:text-pink-500 after:content-['*']">
                      Foto Produk
                    </span>
                    <div className="h-24 w-24 rounded-lg border-2 border-dashed p-9 shadow">
                      <img src={Plus} alt="Plus" />
                    </div>
                  </label>
                </div>
                <div className="mb-20 flex gap-4">
                  <button className="mx-auto block w-1/2 rounded-2xl border border-purple-04 bg-white px-6 py-3 text-sm font-medium text-neutral-05 transition duration-300 hover:bg-purple-03 hover:text-white">
                    <Link to="/seller/detail">Preview</Link>
                  </button>
                  <button className="transiiton mx-auto block w-1/2 rounded-2xl border border-purple-04 bg-purple-04 px-6 py-3 text-sm font-medium text-white duration-300 hover:bg-purple-03">
                    <Link to="/seller/list_product">
                      <span>Terbitkan</span>
                    </Link>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default InfoProduk;
