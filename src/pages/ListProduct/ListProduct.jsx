import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import User from "../../assets/image/user.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import NavMenu from "./../../components/NavMenu/NavMenu";
import Alert from "../../components/Alert/Alert";
import CardCategory from "../../components/CardCategory/CardCategory";
import axios from "axios";

const ListProduct = () => {
  let [isOpen, setIsOpen] = useState(true);
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    getProducts();
  }, []);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const getProducts = async () => {
    try {
      const res = await axios({
        method: "get",
        url: "https://wooden-space-api-development.herokuapp.com/api/v1/seller/product",
        data: data,
        headers: { Authorization: token },
      });

      setData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Header>
        <NavMenu />
      </Header>

      <section id="list-product" className="pt-32">
        <div className="container mx-auto px-4">
          {/* Box */}
          <div className="mb-6 flex justify-center">
            <div className="w-full lg:w-[968px]">
              <h3 className="mb-6 text-xl font-bold">Daftar Jualan Saya</h3>
              <div className="flex w-full items-center justify-between rounded-2xl p-4 shadow-low">
                <div className="flex items-center">
                  <div className="overflow-hidden rounded-2xl">
                    <img src={User} alt="User" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium">Nama Penjual</p>
                    <p className="text-xs text-neutral-03">Kota</p>
                  </div>
                </div>

                <div>
                  <button className="rounded-lg border border-olive-04 py-1 px-3 text-xs font-medium text-neutral-05 transition duration-300 hover:bg-olive-04 hover:text-white">
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* list product box */}
          <div className="flex justify-center">
            <div className="w-full lg:w-[968px]">
              <div className="flex flex-col lg:flex-row">
                {/* Card Category */}
                <CardCategory />
                {/* Card Category */}
                <div className="flex w-full flex-wrap justify-center gap-3 sm:justify-start lg:w-3/4 lg:gap-7">
                  <Link
                    as="div"
                    to="/produk"
                    className=" border-neutral-01 group mb-3 flex h-[198px] w-full flex-col items-center justify-center rounded-md border-2 border-dashed p-6 hover:cursor-pointer hover:border-olive-04 lg:mb-0 lg:w-[207px]"
                  >
                    <svg
                      id="plus"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="icon line stroke-neutral-03 group-hover:stroke-olive-04"
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
                    <p className="mt-3 text-sm font-normal text-neutral-03 group-hover:text-olive-04">
                      Tambah Produk
                    </p>
                  </Link>

                  {data &&
                    data.map((item) => (
                      <div
                        className="h-[198px] w-[48%] rounded-md p-2 shadow-low lg:w-[207px]"
                        key={item.id}
                      >
                        <Link to={`/seller/detail/${item.id}`}>
                          <div
                            className="mb-2 h-24 overflow-hidden rounded-md bg-cover bg-center p-2"
                            style={{
                              backgroundImage: `url(${
                                item.product_images[0].url
                                  ? item.product_images[0].url
                                  : "https://fakeimg.pl/300/?text=NoPhoto"
                              })`,
                            }}
                          ></div>
                        </Link>
                        <Link to={`/seller/detail/${item.id}`}>
                          <h5 className="mb-1 truncate text-xs font-normal capitalize hover:text-olive-04 sm:text-sm">
                            {item?.name}
                          </h5>
                        </Link>
                        <p className="mb-2 text-[10px] capitalize text-neutral-03 sm:text-xs">
                          {item?.category?.name}
                        </p>
                        <p className="mb-3 text-xs font-normal sm:text-sm">
                          Rp.
                          {new Intl.NumberFormat("id-ID").format(
                            Math.floor(item?.price)
                          )}
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Alert
        openModal={openModal}
        closeModal={closeModal}
        isOpen={isOpen}
        title={"Produk berhasil diterbitkan."}
      />
    </>
  );
};

export default ListProduct;
