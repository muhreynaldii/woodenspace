import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/image/logo.png";
import fi_list from "../../assets/icons/fi_list.png";
import fi_bell from "../../assets/icons/fi_bell.png";
import fi_user from "../../assets/icons/fi_user.png";
import fi_search from "../../assets/icons/fi_search.png";

const Header = () => {
  return (
    <>
      <header className="fixed top-0 left-0 z-10 w-full items-center bg-white shadow-high">
        <div className="container mx-auto">
          <div className="relative flex items-center justify-between">
            <div className="flex items-center px-4 py-5">
              <div>
                <Link to="/home" className="block">
                  <img src={Logo} alt="Logo" width={"100px"} />
                </Link>
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Cari di sini..."
                  className="ml-6 h-[48px] w-[444px] rounded-2xl bg-slate-200 px-4 py-4 focus:outline-none"
                />
                <span className="absolute right-4 top-1/4">
                  <button>
                    <img src={fi_search} alt="Search Icon" />
                  </button>
                </span>
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
    </>
  );
};

export default Header;
