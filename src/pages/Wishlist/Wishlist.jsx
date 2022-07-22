import React from "react";
import Header from "../../components/Header/Header";
import NavMenu from "../../components/NavMenu/NavMenu";
import CardCategory from "../../components/CardCategory/CardCategory";
import CardEmpty from "../../components/CardEmpty/CardEmpty";
import ProfileMenu from "../../components/ProfileMenu/ProfileMenu";

const Wishlist = () => {
  return (
    <>
      <Header>
        <NavMenu />
      </Header>

      <section id="list-product" className="pt-32">
        <div className="container mx-auto px-4">
          <ProfileMenu />
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
