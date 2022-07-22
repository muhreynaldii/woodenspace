import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Logo from "../../assets/image/logo.png";
import fi_arrow_left from "../../assets/icons/fi_arrow-left.svg";
import ModalTawarAccepted from "../../components/ModalTawarAccepted/ModalTawarAccepted";
import axios from "axios";
import dateFormat from "dateformat";
import Swal from "sweetalert2";
import "../../Alert.css";
import { useDispatch, useSelector } from "react-redux";
import { getUser, userSelectors } from "../../redux/features/userSlice";

const InfoPenawar = () => {
  useEffect(() => {
    document.title = "Info Penawar | Woodenspace";
  }, []);

  const token = localStorage.getItem("token");
  let [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState("");
  const [idTransaction, setIdTransaction] = useState(0);
  const dispatch = useDispatch();
  const user = useSelector(userSelectors.selectAll);

  useEffect(() => {
    getTransaction();
  }, [id]);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  useEffect(() => {
    if (status === "accepted") {
      navigate(`/seller/bidding_status/${idTransaction}`);
    }
  }, [status]);

  const getTransaction = async () => {
    try {
      const res = await axios({
        method: "get",
        url: `https://wooden-space-api-development.herokuapp.com/api/v1/transaction/seller/${id}`,
        data: data,
        headers: { Authorization: token },
      });

      setData(res.data.data);
      setStatus(res.data.data.status);
      setIdTransaction(res.data.data.id);
    } catch (error) {
      console.log(error);
    }
  };

  const acceptTransaction = async () => {
    try {
      const res = await axios.put(
        `https://wooden-space-api-development.herokuapp.com/api/v1/transaction/seller/${id}`,
        { status: "accepted" },
        { headers: { Authorization: token } }
      );

      if (res.status === 201) {
        navigate(`/seller/bidding_status/${id}`);
        Swal.fire({
          html: "<p>Tawaran Diterima.</p>",
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
    }
  };

  const cancelTransaction = async () => {
    try {
      const res = await axios({
        method: "put",
        url: `https://wooden-space-api-development.herokuapp.com/api/v1/transaction/cancel/${id}`,
        headers: { Authorization: token },
      });

      if (res.status === 200) {
        Swal.fire({
          html: "<p>Tawaran Berhasil Ditolak.</p>",
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
    }
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <header className="fixed top-0 left-0 z-20 w-full items-center bg-white shadow-high">
        <div className="container mx-auto">
          <div className="relative flex items-center justify-between">
            <div className="flex items-center py-5 pl-4 pr-1 lg:px-0">
              <Link to="/" className="hidden lg:block">
                <img src={Logo} alt="Logo" width={"100px"} />
              </Link>
            </div>
            <div className="mx-auto">
              <h3 className="text-base font-normal">Info Penawar</h3>
            </div>
          </div>
        </div>
      </header>

      <section id="info_penawar" className="pt-16 lg:pt-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto flex w-full flex-wrap justify-center lg:w-[800px] lg:flex-nowrap lg:gap-[76px]">
            <div className="mr-auto mb-6 lg:mr-0 lg:mb-0">
              <Link to="/">
                <img src={fi_arrow_left} alt="" />
              </Link>
            </div>
            <div className="w-full">
              <div className="flex w-full items-center justify-between rounded-2xl p-4 shadow-low">
                <div className="flex items-center">
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src={user[0]?.avatar_url}
                      alt="User"
                      className="h-[48px] w-[48px] overflow-hidden rounded-2xl"
                    />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium">{user[0]?.name}</p>
                    <p className="text-xs text-neutral-03">{user[0]?.city}</p>
                  </div>
                </div>

                <div>
                  <Link
                    to="/profile"
                    className="rounded-lg border border-olive-04 py-1 px-3 text-xs font-medium text-neutral-05 transition duration-300 hover:bg-olive-04 hover:text-white"
                  >
                    Edit
                  </Link>
                </div>
              </div>
              <h3 className="py-6 text-sm font-medium text-neutral-05">
                Daftar Produkmu yang Ditawar
              </h3>
              <div className="flex justify-between hover:cursor-pointer">
                <div className="flex">
                  <div
                    className="h-[48px] w-[48px] overflow-hidden rounded-md bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${data?.product?.product_images[0]?.url})`,
                    }}
                  ></div>
                  <div className="ml-4 lg:ml-6">
                    <p className="text-[10px] font-normal text-neutral-03 lg:text-xs">
                      Penawaran Produk
                    </p>
                    <p className="py-1 text-xs font-normal capitalize lg:text-sm ">
                      {data?.product?.name}
                    </p>
                    <p className="text-xs font-normal lg:text-sm ">
                      Rp.
                      {new Intl.NumberFormat("id-ID").format(
                        Math.floor(data.price_offered)
                      )}
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <p className="text-[10px] font-normal text-neutral-03 lg:text-xs">
                    {dateFormat(data.updatedAt, "dS mmmm, mm:ss")}
                  </p>
                  <div className="ml-1 mt-1 h-2 w-2 rounded-[50%] bg-red-500 lg:ml-2"></div>
                </div>
              </div>
              <div className="border-b-neutral-01 mt-4 flex justify-center border-b-2 pb-4 md:justify-end">
                <button
                  onClick={() => {
                    window.confirm("Tolak Tawaran ?") && cancelTransaction();
                  }}
                  className="rounded-2xl border border-olive-04 bg-white px-8 py-[6px] text-sm font-medium transition duration-300 hover:bg-olive-04 hover:text-white sm:px-12 sm:py-2"
                >
                  Tolak
                </button>
                <button
                  onClick={openModal}
                  className="ml-4 rounded-2xl bg-olive-04 px-8 py-[6px] text-sm font-medium text-white transition duration-300 hover:bg-olive-02 hover:text-neutral-04 sm:px-12 sm:py-2"
                >
                  Terima
                </button>
              </div>

              <ModalTawarAccepted
                openModal={openModal}
                closeModal={closeModal}
                isOpen={isOpen}
                acceptTransaction={() => acceptTransaction()}
                avatar={user[0]?.avatar_url}
                nama_penjual={user[0]?.name}
                city={user[0]?.city}
                product_image={data?.product?.product_images[0]?.url}
                nama_product={data?.product?.name}
                price={data?.product?.price}
                price_offered={data.price_offered}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InfoPenawar;
