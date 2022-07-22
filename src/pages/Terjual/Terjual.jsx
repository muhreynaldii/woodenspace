import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import NavMenu from "../../components/NavMenu/NavMenu";
import CardCategory from "../../components/CardCategory/CardCategory";
import ProfileMenu from "../../components/ProfileMenu/ProfileMenu";
import { useDispatch, useSelector } from "react-redux";
import {
  getSellerProducts,
  productSelectors,
} from "../../redux/features/productSlice";

const Terjual = () => {
  const dispatch = useDispatch();
  const products = useSelector(productSelectors.selectAll);

  useEffect(() => {
    dispatch(getSellerProducts());
  }, [dispatch]);
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
                <CardCategory />
                <div className="flex w-full flex-wrap justify-center gap-3 sm:justify-start lg:w-3/4 lg:gap-7">
                  {products &&
                    products
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
