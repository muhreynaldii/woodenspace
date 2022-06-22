import React from "react";
import Header from "../../components/Header/Header";
import User from "../../assets/image/user.png";
import NavMenu from "../../components/NavMenu/NavMenu";
import CardCategory from "../../components/CardCategory/CardCategory";
import CardEmpty from "../../components/CardEmpty/CardEmpty";

const Wishlist = () => {
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
                  <button className="rounded-lg border border-purple-04 py-1 px-3 text-xs font-medium text-neutral-05 transition duration-300 hover:bg-purple-04 hover:text-white">
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
                {/* Card Kategori */}
                <CardCategory />
                {/* Card Kategori */}

                {/* Empty Card */}
                <CardEmpty />
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
