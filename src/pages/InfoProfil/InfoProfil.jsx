import React from "react";

function InfoProfil() {
  return (
    <>
      <section id="info-profil">
        <hr className="my-20" />
            <div className="max-w-[564px] mx-auto font-normal my-6">
                <form action="">
                    <label for="nama">
                        <span className="block font-semibold mb-1 text-slate-700 after:content-['*'] after:text-pink-500 ml-0.5">Nama</span>
                    <input type="nama" id="nama" placeholder="Nama" className="px-4 py-3 w-full block text-sm border shadow rounded-2xl placeholder:text-slate-400" />
                    </label>
                </form>
                <form action="">
                    <label for="kota">
                        <span className="block font-semibold mb-1 mt-4 text-slate-700 after:content-['*'] after:text-pink-500 ml-0.5">Kota</span>
                    <input type="kota" id="kota" placeholder="Pilih Kota" className="px-4 py-3 w-full block text-sm border shadow rounded-2xl placeholder:text-slate-400" />
                    </label>
                </form>
                <form action="">
                    <label for="alamat">
                        <span className="block font-semibold mb-1 mt-4 text-slate-700 after:content-['*'] after:text-pink-500 ml-0.5">Alamat</span>
                    <input type="alamat" id="alamat" placeholder="Contoh: Jalan Ikan Hiu 33" className="h-20 px-4 py-3 w-full block text-sm border shadow rounded-2xl placeholder:text-slate-400" />
                    </label>
                </form>
                <form action="">
                    <label for="hp">
                        <span className="block font-semibold mb-1 mt-4 text-slate-700 after:content-['*'] after:text-pink-500 ml-0.5">No Handphone</span>
                    <input type="hp" id="hp" placeholder="Contoh: +628123456789" className="px-4 py-3 w-full block text-sm border shadow rounded-2xl placeholder:text-slate-400" />
                    </label>
                </form>
            </div>
                <button className=" bg-purple-800 px-6 py-3 rounded-full text-white font-normal block mx-auto hover:bg-purple-900 w-[564px]">Simpan</button>
      </section>
    </>
  );
}

export default InfoProfil;