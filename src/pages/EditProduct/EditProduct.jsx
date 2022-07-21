import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Logo from "../../assets/image/logo.png";
import fi_arrow_left from "../../assets/icons/fi_arrow-left.svg";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Swal from "sweetalert2";
import "../../Alert.css";

function EditProduct() {
  const token = localStorage.getItem("token");
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getCategory();
    getDetailProduct();
  }, []);

  const getDetailProduct = async () => {
    try {
      const res = await axios({
        method: "get",
        url: `https://wooden-space-api-development.herokuapp.com/api/v1/seller/product/${id}`,
        data: data,
        headers: { Authorization: token },
      });

      setData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCategory = async () => {
    try {
      const res = await axios({
        method: "get",
        url: "https://wooden-space-api-development.herokuapp.com/api/v1/category/",
        data: category,
      });
      setCategory(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const editProduct = async (e) => {
    e.preventDefault();

    try {
      const res = await axios({
        method: "put",
        url: `https://wooden-space-api-development.herokuapp.com/api/v1/seller/product/${id}`,
        data: data,
        headers: {
          Authorization: token,
        },
      });

      getDetailProduct();

      if (res.status === 200) {
        navigate("/seller/list_product");
        Swal.fire({
          html: "<p>Produk berhasil diperbarui.</p>",
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
      console.log(error);
      Swal.fire({
        html: "<p>Produk gagal diperbarui.</p>",
        position: "top",
        showConfirmButton: false,
        color: "white",
        width: 500,
        padding: "0",
        timer: 2000,
        customClass: "swal-danger",
      });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 z-20 w-full items-center bg-white shadow-high">
        <div className="container mx-auto">
          <div className="relative flex items-center justify-between">
            <div className="flex items-center py-5 pl-4 pr-1 lg:px-4">
              <Link to="/">
                <img src={Logo} alt="Logo" width={"100px"} />
              </Link>
            </div>
          </div>
        </div>
      </header>
      <section id="info-profil" className="pt-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto flex w-full flex-wrap justify-center lg:w-[800px] lg:flex-nowrap">
            <div className="mr-auto mb-6 lg:mr-0 lg:mb-0">
              <Link to={`/seller/detail/${data.id}`}>
                <img src={fi_arrow_left} alt="" />
              </Link>
            </div>
            <div className="mx-auto w-full font-normal lg:w-[568px]">
              <form onSubmit={(e) => editProduct(e)}>
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
                  <label htmlFor="harga_produk">
                    <span className="mb-1 block text-xs font-normal after:text-pink-500 after:content-['*']">
                      Harga Produk
                    </span>
                    <input
                      type="number"
                      id="harga"
                      placeholder="Rp. 0,00"
                      className="block w-full rounded-2xl border px-4 py-3 text-xs placeholder:text-neutral-03"
                      value={data.price || 0}
                      onChange={(e) =>
                        setData({
                          ...data,
                          price: parseInt(e.target.value),
                        })
                      }
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
                      onChange={(e) =>
                        setData({
                          ...data,
                          category_id: parseInt(e.target.value),
                        })
                      }
                    >
                      <option className="text-xs text-neutral-03">
                        Pilih Kategori
                      </option>
                      {category &&
                        category.map((item) => (
                          <option
                            className="text-xs text-neutral-03"
                            value={item.id}
                            key={item.id}
                          >
                            {item.name}
                          </option>
                        ))}
                    </select>
                  </label>
                </div>

                <div className="form-group mb-4">
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
                      value={data.description || ""}
                      onChange={(e) =>
                        setData({
                          ...data,
                          description: e.target.value,
                        })
                      }
                    ></textarea>
                  </label>
                </div>

                <div className="button-group mb-20">
                  <button
                    type="submit"
                    className="transiiton mx-auto block w-full rounded-2xl bg-olive-04 px-6 py-3 text-sm font-medium text-white duration-300 hover:bg-olive-02 hover:text-neutral-04"
                  >
                    Update
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

export default EditProduct;
