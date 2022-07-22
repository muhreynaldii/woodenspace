import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser, userSelectors } from "../../redux/features/userSlice";
import { useState } from "react";

const ProfileMenu = () => {
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const dispatch = useDispatch();
  const user = useSelector(userSelectors.selectAll);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      setAvatar(user[0]?.avatar_url);
      setName(user[0]?.name);
      setCity(user[0]?.city);
    }
  }, [user]);

  return (
    <div className="mb-6 flex justify-center">
      <div className="w-full lg:w-[968px]">
        <h3 className="mb-6 text-xl font-bold">Daftar Jualan Saya</h3>
        <div className="flex w-full items-center justify-between rounded-2xl p-4 shadow-low">
          <div className="flex items-center">
            <div className="overflow-hidden rounded-2xl">
              <img src={avatar} alt="User" className="h-[48px] w-[48px]" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium">{name}</p>
              <p className="text-xs text-neutral-03">{city}</p>
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
  );
};

export default ProfileMenu;
