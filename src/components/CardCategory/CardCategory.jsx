import React from "react";
import { Link } from "react-router-dom";

const CardCategory = () => {
  return (
    <>
      <div className="mr-8 mb-6 h-[248px] w-full rounded-2xl p-6 shadow-low md:w-full lg:w-[268px]">
        <h3 className="mb-6 text-base font-medium">Kategori</h3>
        <ul>
          <li className="border-b-neutral-01 group border-b pb-4 hover:border-b-purple-04">
            <div className="flex items-center justify-between">
              <svg
                id="package-alt"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="icon line mr-2 stroke-neutral-03 group-hover:stroke-purple-04"
                width="28"
                height="28"
              >
                <polygon
                  id="primary"
                  points="20 16.5 20 7.5 12 3 4 7.5 4 16.5 12 21 20 16.5"
                  style={{
                    fill: "none",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 1,
                  }}
                ></polygon>
                <polyline
                  id="primary-2"
                  data-name="primary"
                  points="20 7.5 12 11.5 4 7.5"
                  style={{
                    fill: "none",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 1,
                  }}
                ></polyline>
                <line
                  id="primary-3"
                  data-name="primary"
                  x1="12"
                  y1="11.5"
                  x2="12"
                  y2="21"
                  style={{
                    fill: "none",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 1,
                  }}
                ></line>
                <polyline
                  id="primary-4"
                  data-name="primary"
                  points="16 14 16 9.5 12 7.5"
                  style={{
                    fill: "none",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 1,
                  }}
                ></polyline>
              </svg>
              <Link
                to="/list_product"
                className="mr-[6.50rem] text-base font-normal text-neutral-05 group-hover:text-purple-04 lg:mr-8"
              >
                Semua Produk
              </Link>
              <svg
                id="right-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="icon line stroke-neutral-02 group-hover:stroke-purple-04"
                width="20"
                height="20"
              >
                <polyline
                  id="primary"
                  points="7.5 3 16.5 12 7.5 21"
                  style={{
                    fill: "none",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                  }}
                ></polyline>
              </svg>
            </div>
          </li>
          <li className="border-b-neutral-01 group mt-4 border-b pb-4 hover:border-b-purple-04">
            <div className="flex items-center justify-between">
              <svg
                id="heartbeat"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="icon line mr-2 stroke-neutral-03 group-hover:stroke-purple-04"
                width="26"
                height="26"
              >
                <path
                  id="primary"
                  d="M19,14.07A32,32,0,0,1,12,21a32,32,0,0,1-7-6.93c-2.22-3-2.76-7.25-.53-9.45,4-4,7.57.61,7.57.61s3.55-4.58,7.57-.61C21.8,6.82,21.26,11.09,19,14.07ZM8,12h2l1-3,2,6,1-3h2"
                  style={{
                    fill: "none",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 1.5,
                  }}
                ></path>
              </svg>
              <Link
                to="/wishlist"
                className="mr-[9.5rem] text-base font-normal text-neutral-05 group-hover:text-purple-04 lg:mr-[78px]"
              >
                Diminati
              </Link>
              <svg
                id="right-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="icon line stroke-neutral-02 group-hover:stroke-purple-04"
                width="20"
                height="20"
              >
                <polyline
                  id="primary"
                  points="7.5 3 16.5 12 7.5 21"
                  style={{
                    fill: "none",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                  }}
                ></polyline>
              </svg>
            </div>
          </li>
          <li className="group mt-4">
            <div className="flex items-center justify-between">
              <svg
                id="dollar-symbol"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="icon line mr-2 stroke-neutral-03 group-hover:stroke-purple-04"
                width="26"
                height="26"
              >
                <path
                  id="primary"
                  d="M12,21V3M7,15.5A3.5,3.5,0,0,0,10.5,19h3A3.5,3.5,0,0,0,17,15.5h0A3.5,3.5,0,0,0,13.5,12h-3A3.5,3.5,0,0,1,7,8.5H7A3.5,3.5,0,0,1,10.5,5h3A3.5,3.5,0,0,1,17,8.5"
                  style={{
                    fill: "none",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 1.5,
                  }}
                ></path>
              </svg>
              <Link
                to="#"
                className="mr-[10.25rem] text-base font-normal text-neutral-05 group-hover:text-purple-04 lg:mr-[92px]"
              >
                Terjual
              </Link>
              <svg
                id="right-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="icon line stroke-neutral-02 group-hover:stroke-purple-04"
                width="20"
                height="20"
              >
                <polyline
                  id="primary"
                  points="7.5 3 16.5 12 7.5 21"
                  style={{
                    fill: "none",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                  }}
                ></polyline>
              </svg>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default CardCategory;
