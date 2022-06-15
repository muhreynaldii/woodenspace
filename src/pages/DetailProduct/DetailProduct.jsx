import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/image/logo.png";
import fi_list from "../../assets/icons/fi_list.png";
import fi_bell from "../../assets/icons/fi_bell.png";
import fi_user from "../../assets/icons/fi_user.png";
import Product from "../../assets/image/products/product-1.png";
import User from "../../assets/image/user.png";

const DetailProduct = () => {
  return (
    <>
      <header className="shadow-3xl fixed top-0 left-0 z-10 w-full items-center bg-white">
        <div className="container">
          <div className="relative flex items-center justify-between">
            <div class="flex items-center px-4 py-5">
              <div>
                <Link to="/home" className="block">
                  <img src={Logo} alt="Logo" width={"100px"} />
                </Link>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Car di sini..."
                  className="ml-6 h-[48px] w-[444px] rounded-2xl bg-slate-200 px-4 py-4 focus:outline-none"
                />
              </div>
            </div>
            <div className="px-4 py-5">
              <nav id="nav-menu">
                <ul className="flex">
                  <li>
                    <a href="#">
                      <img src={fi_list} alt="List Icon" className="mx-5" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={fi_bell} alt="List Icon" className="mx-5" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={fi_user} alt="List Icon" className="mx-5" />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <section id="detail-product" className="pt-36">
        <div className="container">
          <div className="mb-8 flex justify-center">
            <div className="w-2/4 px-6">
              <div className="mb-4 w-full overflow-hidden rounded-lg">
                <img src={Product} alt="Product" />
              </div>
              <div className="shadow-3xl w-full rounded-lg p-4">
                <h3 className="mb-4 text-base font-bold">Deskripsi</h3>
                <p className="mb-4 text-base text-slate-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur consectetur hic consequatur delectus id vero deserunt
                  debitis optio, dolor perspiciatis quod quae amet ut ea. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Eos odio
                  magni quasi tenetur minus architecto dolorem ullam doloremque
                  cumque facilis.
                </p>
                <p className="text-base text-slate-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur consectetur hic consequatur delectus id vero deserunt
                  debitis optio, dolor perspiciatis quod quae amet ut ea. Lorem,
                  ipsum dolor sit amet consectetur adipisicing elit. Sit enim
                  molestiae assumenda quos. Dignissimos eos veniam cum quaerat?
                  Eum, repellat?
                </p>
              </div>
            </div>
            <div className="w-1/4">
              <div className="shadow-3xl mb-6 rounded-lg p-4">
                <h3 className="mb-3 text-2xl font-semibold">
                  Jam Tangan Casio
                </h3>
                <p className="mb-6 text-base text-slate-400">Aksesoris</p>
                <p className="text-md mb-6 font-semibold">Rp. 250.000</p>
                <button
                  type="button"
                  className="bg-primary mb-4 block w-full rounded-2xl px-6 py-3 text-white"
                >
                  Terbitkan
                </button>
                <button className=" border-primary block w-full rounded-2xl border bg-white px-6 py-3 text-black">
                  Edit
                </button>
              </div>
              <div className="shadow-3xl flex items-center rounded-lg p-4">
                <div className="overflow-hidden rounded-lg">
                  <img src={User} alt="User Image" />
                </div>
                <div className="ml-4">
                  <h3 className="text-base font-bold">Nama Penjual</h3>
                  <p className="text-xs text-slate-400">Kota</p>
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
