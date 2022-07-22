import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/image/logo.png";
import fi_arrow_left from "../../assets/icons/fi_arrow-left.svg";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "../../Alert.css";

function InfoProfil() {
  const token = localStorage.getItem("token");
  const [data, setData] = useState([]);
  const [preview, setPreview] = useState("");

  const setImage = (e) => {
    const image = e.target.files[0];
    setPreview(URL.createObjectURL(image));
    setData({
      ...data,
      avatar: image,
    });
  };

  useEffect(() => {
    document.title = "Profil | Woodenspace";
    getUserProfile();
  }, []);

  const getUserProfile = async () => {
    try {
      const response = await axios({
        method: "get",
        url: "https://wooden-space-api-development.herokuapp.com/api/v1/user/profile",
        data: data,
        headers: { Authorization: token },
      });

      setData(response.data.data.detail);
    } catch (error) {
      console.log(error);
    }
  };

  const updateProfile = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("avatar", data.avatar);
    formData.append("name", data.name);
    formData.append("city", data.city);
    formData.append("address", data.address);
    formData.append("phone_number", data.phone_number);
    try {
      const res = await axios({
        method: "put",
        url: "https://wooden-space-api-development.herokuapp.com/api/v1/user/update_profile",
        data: formData,
        headers: {
          Authorization: token,
          "Content-type": "multipart/form-data",
        },
        withCredentials: true,
      });

      getUserProfile();

      if (res.status === 200) {
        Swal.fire({
          html: "<p>Berhasil Update Profil.</p>",
          position: "top",
          showConfirmButton: false,
          color: "white",
          width: 500,
          padding: "0",
          timer: 2000,
          customClass: "swal-success",
        });
      }
    } catch (error) {
      if (error.response) {
        Swal.fire({
          html: "<p>Gagal Update Profil, mohon lengkapi data yang kosong</p>",
          position: "top",
          showConfirmButton: false,
          color: "white",
          width: 600,
          padding: "0",
          timer: 2000,
          customClass: "swal-danger",
        });
      }
    }
  };

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
            <div className="mx-auto lg:relative lg:right-[45px]">
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
              <div className="mx-auto mb-6 h-24 w-24 overflow-hidden rounded-lg bg-olive-02">
                <Link to="#">
                  {preview ? (
                    <img src={preview} alt="avatar" className="object-cover" />
                  ) : (
                    <img
                      src={data.avatar_url}
                      alt="avatar"
                      className="object-cover"
                    />
                  )}
                </Link>
              </div>
              <form onSubmit={updateProfile}>
                <div className="form-group mb-4">
                  <label htmlFor="foto">
                    <span className="mb-1 block text-xs font-normal after:text-pink-500 after:content-['*']">
                      Foto
                    </span>
                    <input
                      type="file"
                      id="foto"
                      className="block w-full rounded-2xl border px-4 py-3 text-xs placeholder:text-neutral-03"
                      onChange={setImage}
                    />
                  </label>
                </div>
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
                      value={data.name || ""}
                      onChange={(e) =>
                        setData({
                          ...data,
                          name: e.target.value,
                        })
                      }
                    />
                  </label>
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="kota">
                    <span className="mb-1 block text-xs font-normal after:text-pink-500 after:content-['*']">
                      Kota
                    </span>
                    <input
                      type="text"
                      id="kota"
                      placeholder="Kota"
                      className="block w-full rounded-2xl border px-4 py-3 text-xs placeholder:text-neutral-03"
                      value={data.city || ""}
                      onChange={(e) =>
                        setData({
                          ...data,
                          city: e.target.value,
                        })
                      }
                    />
                  </label>
                </div>

                <div className="form-group mb-4">
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
                      value={data.address || ""}
                      onChange={(e) =>
                        setData({
                          ...data,
                          address: e.target.value,
                        })
                      }
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
                      value={data.phone_number || ""}
                      onChange={(e) =>
                        setData({
                          ...data,
                          phone_number: e.target.value,
                        })
                      }
                    />
                  </label>
                </div>
                <button
                  type="submit"
                  className="mx-auto mb-20 block w-full rounded-2xl bg-olive-04 px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-olive-02 hover:text-neutral-04"
                >
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
