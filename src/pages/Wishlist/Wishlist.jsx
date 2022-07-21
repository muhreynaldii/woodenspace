import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import NavMenu from "../../components/NavMenu/NavMenu";
import CardCategory from "../../components/CardCategory/CardCategory";
import CardEmpty from "../../components/CardEmpty/CardEmpty";
import axios from "axios";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const [data, setData] = useState([]);
  const [profile, setProfile] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    document.title = "Wishlist | Woodenspace";
    getUserProfile();
    getWishlist();
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

  const getWishlist = async () => {
    try {
      const res = await axios({
        method: "get",
        url: "https://wooden-space-api-development.herokuapp.com/api/v1/wishlist/",
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

          {/* list product box */}
          <div className="flex justify-center">
            <div className="w-full lg:w-[968px]">
              <div className="flex flex-col lg:flex-row">
                {/* Card Kategori */}
                <CardCategory />
                {/* Card Kategori */}

                {/* Empty Card */}
                {data.length <= 0 ? (
                  <CardEmpty />
                ) : (
                  data.map((item) => (
                    <div
                      className="h-[198px] w-[48%] rounded-md p-2 shadow-low lg:w-[207px]"
                      key={item.id}
                    >
                      <Link to={`/buyer/detail/${item?.product.id}`}>
                        <div className="mb-2 h-24 overflow-hidden rounded-md bg-cover bg-center p-2">
                          <img
                            src={
                              item.product?.product_images[3].url
                                ? item.product?.product_images[3].url
                                : "https://fakeimg.pl/300/?text=NoPhoto"
                            }
                            alt=""
                            className="h-[100px] w-[190px] overflow-hidden rounded-[4px] object-scale-down transition duration-500 hover:scale-125"
                          />
                        </div>
                      </Link>
                      <Link to={`/buyer/detail/${item?.product.id}`}>
                        <h5 className="mb-1 truncate text-xs font-normal capitalize hover:text-olive-04 sm:text-sm">
                          {item?.product?.name}
                        </h5>
                      </Link>
                      <p className="mb-2 text-[10px] capitalize text-neutral-03 sm:text-xs">
                        {item?.product?.category?.name}
                      </p>
                      <p className="mb-3 text-xs font-normal sm:text-sm">
                        Rp.
                        {new Intl.NumberFormat("id-ID").format(
                          Math.floor(item?.product?.price)
                        )}
                      </p>
                    </div>
                  ))
                )}

                {/* Empty Card */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Wishlist;
