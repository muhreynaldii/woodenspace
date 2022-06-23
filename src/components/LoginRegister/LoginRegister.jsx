import React from "react";
import Hero from "../../assets/image/hero.png";

function LoginRegister(props) {
  return (
    <div className="box-border flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2">
        <img
          src={Hero}
          alt="mobil=hero"
          className="h-[100px] w-full object-cover lg:h-screen lg:w-full"
        />
      </div>
      <div className="mt-10 flex w-full items-center justify-center lg:mt-0 lg:w-1/2">
        <div className="flex w-full flex-col px-4 md:px-36 lg:px-[134px]">
          <h2 className="mb-6 text-2xl font-bold">{props.name}</h2>
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default LoginRegister;
