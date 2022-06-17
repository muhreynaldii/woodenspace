import React from "react";
import Camera from "../../assets/icons/fi_camera.png";
import Down from "../../assets/icons/fi_chevron-down.png";

function InfoProfil() {
  return (
    <>
      <section id="info-profil">
        <hr className="my-20" />
        <div className="mx-auto h-24 w-24 rounded-lg bg-purple-300">
          <div className="p-9">
            <img src={Camera} alt="Camera" />
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
              <input
                type="kota"
                id="kota"
                placeholder="Pilih Kota"
                className="block w-full rounded-2xl border px-4 py-3 text-sm shadow placeholder:text-slate-400"
              />
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
        <button className=" mx-auto block w-[564px] rounded-full bg-purple-800 px-6 py-3 font-normal text-white hover:bg-purple-900">
          Simpan
        </button>
      </section>
    </>
  );
}

export default InfoProfil;
