import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/image/logo.png";

const Header = (props) => {
  return (
    <>
      <header className="fixed top-0 left-0 z-20 w-full items-center bg-white shadow-high">
        <div className="container mx-auto">
          <div className="relative flex items-center justify-between">
            <div className="flex items-center py-5 pl-4 pr-1 lg:px-4">
              <div>
                <Link to="/home" className="hidden lg:block">
                  <img src={Logo} alt="Logo" width={"100px"} />
                </Link>
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Cari di sini..."
                  className="h-[35px] w-[200px] rounded-2xl bg-slate-200 px-4 py-4 text-sm focus:outline-none lg:ml-6 lg:h-[48px] lg:w-[444px]"
                />
                <span className="absolute right-4 top-1/4">
                  <button>
                    <svg
                      id="search"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="icon line lg:h-[28px] lg:w-[28px]"
                      width="20"
                      height="20"
                    >
                      <path
                        id="primary"
                        d="M17,10a7,7,0,1,1-7-7A7,7,0,0,1,17,10Zm4,11-6-6"
                        style={{
                          fill: "none",
                          stroke: "#8a8a8a",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                        }}
                      ></path>
                    </svg>
                  </button>
                </span>
              </div>
            </div>
            <div className="px-1 py-5 lg:px-4">{props.children}</div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
