import React from "react";
import { Link } from "react-router-dom";
import Camera from "../../assets/icons/fi_camera.png";
import Logo from "../../assets/image/logo.png";
import fi_arrow_left from "../../assets/icons/fi_arrow-left.svg";

function InfoProfil() {
  return (
    <>
      <header className="fixed top-0 left-0 z-20 w-full items-center bg-white shadow-high">
        <div className="container mx-auto">
          <div className="relative flex items-center">
            <div className="flex items-center py-5 pl-4 pr-1">
              <Link to="/" className="hidden lg:block">
                <img src={Logo} alt="Logo" width={"100px"} />
              </Link>
            </div>
            <div className="mx-auto">
              <h3 className="text-base font-normal">Lengkapi Info Akun</h3>
            </div>
          </div>
        </div>
      </header>

      <section id="info-profil" className="pt-16 lg:pt-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto flex w-full flex-wrap justify-center lg:w-[800px] lg:flex-nowrap">
            <div className="mr-auto mb-6 lg:mr-0 lg:mb-0">
              <Link to="/">
                <img src={fi_arrow_left} alt="" />
              </Link>
            </div>
            <div className="mx-auto w-full font-normal lg:w-[568px]">
              <div className="mx-auto mb-6 h-24 w-24 rounded-lg bg-purple-300">
                <Link to="#">
                  <div className="p-9">
                    <img src={Camera} alt="Camera" />
                  </div>
                </Link>
              </div>
              <form>
                <div className="form-group mb-4">
                  <label htmlFor="nama">
                    <span className="mb-1 block text-xs font-normal after:text-pink-500 after:content-['*']">
                      Nama
                    </span>
                    <input
                      type="text"
                      id="nama"
                      placeholder="Nama"
                      className="block w-full rounded-2xl border px-4 py-3 text-xs placeholder:text-neutral-03"
                    />
                  </label>
                </div>

                <div className="form-grop mb-4">
                  <label htmlFor="kota">
                    <span className="mb-1 block text-xs font-normal after:text-pink-500 after:content-['*']">
                      Kota
                    </span>
                    <select
                      name="kota"
                      id="kota"
                      className="value:text-neutral-03 block w-full rounded-2xl border px-4 py-3 text-xs placeholder:text-neutral-03"
                    >
                      <option className="text-xs text-neutral-03" value="-">
                        Pilih Kota
                      </option>
                      <option
                        className="text-xs text-neutral-03"
                        value="Bandung"
                      >
                        Bandung
                      </option>
                      <option
                        className="text-xs text-neutral-03"
                        value="Jakarta"
                      >
                        Jakarta
                      </option>
                    </select>
                  </label>
                </div>

                <div className="form-grop mb-4">
                  <label htmlFor="Kota">
                    <span className="mb-1 block text-xs font-normal after:text-pink-500 after:content-['*']">
                      Alamat
                    </span>
                    <textarea
                      name="alamat"
                      id="alamat"
                      cols="30"
                      rows="2"
                      className="block w-full rounded-2xl border px-4 py-3 text-xs placeholder:text-neutral-03"
                    ></textarea>
                  </label>
                </div>

                <div className="form-group mb-4">
                  <label htmlFor="no">
                    <span className="mb-1 block text-xs font-normal after:text-pink-500 after:content-['*']">
                      No. Handphone
                    </span>
                    <input
                      type="text"
                      id="no"
                      placeholder="Contoh +628123456789"
                      className="block w-full rounded-2xl border px-4 py-3 text-xs placeholder:text-neutral-03"
                    />
                  </label>
                </div>
                <button className="mx-auto mb-20 block w-full rounded-2xl bg-olive-04 px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-olive-02 hover:text-neutral-04">
                  Simpan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default InfoProfil;
