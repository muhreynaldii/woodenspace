import React, { useState, useEffect } from "react";
import CarouselProduct from "../../components/CarouselProduct/CarouselProduct";
import Header from "../../components/Header/Header";
import NavMenu from "./../../components/NavMenu/NavMenu";
import ModalTawar from "../../components/ModalTawar/ModalTawar";
import axios from "axios";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import "../../Alert.css";

const DetailProductBuyer = () => {
  let [isOpen, setIsOpen] = useState(false);
  const token = localStorage.getItem("token");
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    product();
  }, [id]);

  const product = async () => {
    try {
      const res = await axios({
        method: "get",
        url: `https://wooden-space-api-development.herokuapp.com/api/v1/buyer/product/${id}`,
        data: data,
        headers: { Authorization: token },
      });
      setData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const addTransaction = async (e) => {
    e.preventDefault();
    try {
      const res = await axios({
        method: "post",
        url: "https://wooden-space-api-development.herokuapp.com/api/v1/transaction/buyer",
        data: data,
        headers: { Authorization: token },
      });

      if (res.status === 201) {
        Swal.fire({
          html: "<p>Berhasil Melakukan Penawaran</p>",
          position: "top",
          showConfirmButton: false,
          color: "white",
          width: 500,
          padding: "0",
          timer: 2000,
          customClass: "swal-success",
        });

        closeModal();
      }
    } catch (error) {
      if (error.response) {
        Swal.fire({
          html: "<p>Gagal Melakukan Penawaran</p>",
          position: "top",
          showConfirmButton: false,
          color: "white",
          width: 500,
          padding: "0",
          timer: 2000,
          customClass: "swal-danger",
        });

        closeModal();
      }
    }
  };
  return (
    <>
      <Header>
        <NavMenu />
      </Header>

      <section id="detail-product" className="pt-32">
        <div className="container mx-auto">
          <div className="mb-8 flex flex-wrap justify-center gap-4">
            <div className="w-full px-4 lg:w-[600px]">
              {/* Carousel Product */}
              <CarouselProduct
                product_name={data.name}
                product_images={data?.product_images}
              />
              {/* /Caousel Product/ */}
              <div className="mb-2 w-full rounded-2xl p-4 shadow-low">
                <h3 className="mb-4 text-sm font-bold">Deskripsi</h3>
                <p className="mb-4 text-sm text-neutral-03">
                  {data.description}
                </p>
              </div>
            </div>
            <div className="w-full px-4 lg:w-[336px]">
              <div className="mb-6 rounded-2xl p-4 shadow-high">
                <h3 className="mb-2 text-base font-medium">{data.name}</h3>
                <p className="mb-4 text-sm font-normal capitalize text-neutral-03">
                  {data?.category?.name}
                </p>
                <p className="text-md mb-6 font-normal">
                  Rp.
                  {new Intl.NumberFormat("id-ID").format(
                    Math.floor(data.price)
                  )}
                </p>
                <button
                  type="button"
                  className="mb-4 block w-full rounded-2xl bg-olive-04 py-3 px-2 text-sm text-white transition duration-300 hover:bg-olive-02 hover:text-neutral-04 sm:px-6 sm:py-3"
                  onClick={openModal}
                >
                  Saya tertarik dan ingin nego
                </button>
              </div>
              <div className="flex items-center rounded-2xl p-4 shadow-low">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={data?.owner?.detail?.avatar_url}
                    alt={data?.owner?.detail?.name}
                    className="h-[48px] w-[48px] rounded-2xl"
                  />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium">
                    {data?.owner?.detail?.name}
                  </p>
                  <p className="text-xs text-neutral-03">
                    {data?.owner?.detail?.city}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ModalTawar
        openModal={openModal}
        closeModal={closeModal}
        isOpen={isOpen}
        product_name={data.name}
        product_price={data.price}
        product_images={data?.product_images}
        addTransaction={(e) => addTransaction(e)}
        data={data}
        setData={setData}
        id={id}
      />
    </>
  );
};

export default DetailProductBuyer;
