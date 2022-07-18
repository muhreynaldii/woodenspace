import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/image/logo.png";
import fi_arrow_left from "../../assets/icons/fi_arrow-left.svg";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function InfoProduk() {
  const token = localStorage.getItem("token");
  const [name, setName] = useState("");
  const [category_id, setCategory_id] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [productImages, setProductImages] = useState(null);
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getCategory();
  }, []);

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

  const handleFilesChange = (e) => {
    setProductImages(e.target.files);
  };

  const addProduct = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", name);
    data.append("category_id", category_id);
    data.append("price", price);
    data.append("description", description);

    for (let i = 0; i < productImages.length; i++) {
      data.append("productImages", productImages[i]);
    }

    try {
      const res = await axios({
        method: "post",
        url: "https://wooden-space-api-development.herokuapp.com/api/v1/seller/product/",
        data: data,
        headers: {
          Authorization: token,
          "content-type": "multipart/formdata",
        },
      });

      if (res.status === 200) {
        navigate("/seller/list_product");
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
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
              <Link to="/">
                <img src={fi_arrow_left} alt="" />
              </Link>
            </div>
            <div className="mx-auto w-full font-normal lg:w-[568px]">
              <form onSubmit={(e) => addProduct(e)}>
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
                      onChange={(e) => setName(e.target.value)}
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
                      onChange={(e) => setPrice(e.target.value)}
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
                      onChange={(e) => setCategory_id(e.target.value)}
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
                      onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                  </label>
                </div>

                <div className="form-group mb-4">
                  <label htmlFor="no">
                    <span className="mb-1 block text-xs font-normal after:text-pink-500 after:content-['*']">
                      Foto Produk
                    </span>
                    <div className="relative h-24 w-24 rounded-lg border-2 border-dashed p-9 shadow hover:border-olive-03">
                      <label
                        htmlFor="fileInput"
                        className="absolute top-8 left-8"
                      >
                        <svg
                          id="plus"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="icon line cursor-pointer stroke-neutral-03 group-hover:stroke-olive-04"
                          width="30"
                          height="30"
                        >
                          <path
                            id="primary"
                            d="M5,12H19M12,5V19"
                            style={{
                              strokelLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: 2,
                            }}
                          ></path>
                        </svg>
                      </label>
                      <input
                        id="fileInput"
                        type="file"
                        name="productImages"
                        className="hidden"
                        onChange={handleFilesChange}
                        accept="image/png, image/jpg, image/jpeg"
                        multiple
                      />
                    </div>
                  </label>
                </div>
                <div className="button-group mb-20 flex gap-4">
                  <button className="mx-auto block w-1/2 rounded-2xl border border-olive-04 bg-white px-6 py-3 text-sm font-medium text-neutral-04 transition duration-300 hover:bg-olive-04 hover:text-white">
                    <Link to="/seller/detail">Preview</Link>
                  </button>
                  <button
                    type="submit"
                    className="transiiton mx-auto block w-1/2 rounded-2xl bg-olive-04 px-6 py-3 text-sm font-medium text-white duration-300 hover:bg-olive-02 hover:text-neutral-04"
                  >
                    Terbitkan
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
