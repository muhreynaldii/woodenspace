import React from "react";
import Camera from "../../assets/icons/fi_camera.png";
import Logo from "../../assets/image/logo.png";
import fi_arrow_left from "../../assets/icons/fi_arrow-left.svg";

function InfoProfil() {
  return (
    <>
      <header className="fixed top-0 left-0 z-20 w-full items-center bg-white shadow-high">
        <div className="container mx-auto">
          <div className="relative flex items-center justify-between">
            <div className="flex items-center py-5 pl-4 pr-1 lg:px-0">
              <img src={Logo} alt="Logo" width={"100px"} />
            </div>
            <div className="mx-auto">
              <h3 className="text-base font-normal">Lengkapi Info Akun</h3>
            </div>
          </div>
        </div>
      </header>
      <section id="info-profil">
        <div className="container mx-auto my-[80px] px-4">
          <div className="mr-auto mb-6 lg:mr-0 lg:mb-0">
            <img src={fi_arrow_left} alt="" />
            <div className="mx-auto h-24 w-24 rounded-lg bg-purple-300">
              <div className="p-9">
                <img src={Camera} alt="Camera" />
              </div>
            </div>
          </div>
          <div className="mx-auto my-6 max-w-[564px] font-normal">
            <form action="">
              <label for="nama">
                <span className="mb-1 ml-0.5 block font-semibold text-slate-700 after:text-pink-500 after:content-['*']">
                  Nama
                </span>
                <input
                  type="nama"
                  id="nama"
                  placeholder="Nama"
                  className="block w-full rounded-2xl border px-4 py-3 text-sm shadow placeholder:text-slate-400"
                />
              </label>
            </form>
            <form action="">
              <label for="kota">
                <span className="mb-1 mt-4 ml-0.5 block font-semibold text-slate-700 after:text-pink-500 after:content-['*']">
                  Kota
                </span>
                <div className="block w-full rounded-2xl border px-4 py-3 text-sm shadow">
                  <select
                    name="kota"
                    id="kota"
                    className="value:text-slate-400 w-[530px]"
                  >
                    <option value="Kota">Kota</option>
                    <option value="Jakarta">Jakarta</option>
                    <option value="Bogor">Bogor</option>
                    <option value="Depok">Depok</option>
                  </select>
                </div>
              </label>
            </form>
            <div>
              <form action="">
                <label for="alamat">
                  <span className="mb-1 mt-4 ml-0.5 block font-semibold text-slate-700 after:text-pink-500 after:content-['*']">
                    Alamat
                  </span>
                  <input
                    type="alamat"
                    id="alamat"
                    placeholder="Contoh: Jalan Ikan Hiu 33"
                    className="block h-20 w-full rounded-2xl border px-4 py-3 text-sm shadow placeholder:text-slate-400"
                  />
                </label>
              </form>
            </div>
            <form action="">
              <label for="hp">
                <span className="mb-1 mt-4 ml-0.5 block font-semibold text-slate-700 after:text-pink-500 after:content-['*']">
                  No Handphone
                </span>
                <input
                  type="hp"
                  id="hp"
                  placeholder="Contoh: +628123456789"
                  className="block w-full rounded-2xl border px-4 py-3 text-sm shadow placeholder:text-slate-400"
                />
              </label>
            </form>
          </div>
          <button className=" mx-auto mb-20 block w-[564px] rounded-full bg-purple-800 px-6 py-3 font-normal text-white hover:bg-purple-900">
            Simpan
          </button>
        </div>
      </section>
    </>
  );
}

export default InfoProfil;
