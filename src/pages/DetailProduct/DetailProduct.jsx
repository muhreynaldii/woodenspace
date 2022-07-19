import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CarouselProduct from "../../components/CarouselProduct/CarouselProduct";
import Header from "../../components/Header/Header";
import NavMenu from "./../../components/NavMenu/NavMenu";
import Swal from "sweetalert2";
import "../../Alert.css";

const DetailProduct = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
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

  const deleteProduct = async (id) => {
    try {
      const res = await axios({
        method: "delete",
        url: `https://wooden-space-api-development.herokuapp.com/api/v1/seller/product/${id}`,
        data: data,
        headers: { Authorization: token },
      });

      if (res.status === 200) {
        navigate("/seller/list_product");
        Swal.fire({
          html: "<p>Produk berhasil dihapus.</p>",
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
        alert(error.response.data.message);
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
              <CarouselProduct images={data?.product_images} />
              {/* /Caousel Product/ */}
              <div className="mb-2 w-full rounded-2xl p-4 shadow-low">
                <h3 className="mb-4 text-sm font-bold">Deskripsi</h3>
                <p className="mb-4 text-sm text-neutral-03">
                  {data?.description}
                </p>
              </div>
            </div>
            <div className="w-full px-4 lg:w-[336px]">
              <div className="mb-6 rounded-2xl p-4 shadow-high">
                <h3 className="mb-2 text-base font-medium">{data?.name}</h3>
                <p className="mb-4 text-sm font-normal capitalize text-neutral-03">
                  {data?.category?.name}
                </p>
                <p className="text-md mb-6 font-normal">
                  Rp.
                  {new Intl.NumberFormat("id-ID").format(
                    Math.floor(data?.price)
                  )}
                </p>
                <button
                  type="button"
                  className="mb-4 block w-full rounded-2xl bg-olive-04 px-6 py-3 text-sm text-white transition duration-300 hover:bg-olive-02 hover:text-neutral-04"
                >
                  Edit
                </button>
                <button
                  className=" block w-full rounded-2xl border border-olive-04 bg-white px-6 py-3 text-sm text-black transition duration-300 hover:bg-olive-04 hover:text-white"
                  onClick={() => {
                    window.confirm("Delete this product ?") &&
                      deleteProduct(data.id);
                  }}
                >
                  Delete
                </button>
              </div>
              <div className="flex items-center rounded-2xl p-4 shadow-low">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={data?.owner?.detail?.avatar_url}
                    alt="User"
                    className="h-[48px] w-[48px]"
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
    </>
  );
};

export default DetailProduct;
