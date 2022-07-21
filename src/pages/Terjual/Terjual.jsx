import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import { useState } from "react";
import { Link } from "react-router-dom";
import NavMenu from "../../components/NavMenu/NavMenu";
import CardCategory from "../../components/CardCategory/CardCategory";
import axios from "axios";

const Terjual = () => {
  const [data, setData] = useState([]);
  const [profile, setProfile] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    getUserProfile();
    getProducts();
  }, []);

  const getUserProfile = async () => {
    try {
      const res = await axios({
        method: "get",
        url: "https://wooden-space-api-development.herokuapp.com/api/v1/user/profile",
        data: profile,
        headers: { Authorization: token },
      });

      setProfile(res.data.data.detail);
    } catch (error) {
      console.log(error);
    }
  };

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
          <div className="mb-6 flex justify-center">
            <div className="w-full lg:w-[968px]">
              <h3 className="mb-6 text-xl font-bold">Daftar Jualan Saya</h3>
              <div className="flex w-full items-center justify-between rounded-2xl p-4 shadow-low">
                <div className="flex items-center">
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src={profile.avatar_url}
                      alt="User"
                      className="h-[48px] w-[48px]"
                    />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium">{profile.name}</p>
                    <p className="text-xs text-neutral-03">{profile.city}</p>
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
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-full lg:w-[968px]">
              <div className="flex flex-col lg:flex-row">
                <CardCategory />

                <div className="flex w-full flex-wrap justify-center gap-3 sm:justify-start lg:w-3/4 lg:gap-7">
                  {data &&
                    data
                      .filter((status) => status.status === "sold")
                      .map((item) => (
                        <div
                          className="h-[198px] w-[48%] rounded-md p-2 shadow-low lg:w-[207px]"
                          key={item.id}
                        >
                          <Link to={`/seller/detail/${item.id}`}>
                            <div className="mb-2 h-24 overflow-hidden rounded-md bg-cover bg-center p-2">
                              <img
                                src={
                                  item.product_images[0].url
                                    ? item.product_images[0].url
                                    : "https://fakeimg.pl/300/?text=NoPhoto"
                                }
                                alt=""
                                className="h-[100px] w-[190px] overflow-hidden rounded-[4px] object-scale-down transition duration-500 hover:scale-125"
                              />
                            </div>
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
    </>
  );
};

export default Terjual;
