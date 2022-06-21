import React from "react";
import Empty from "../../assets/image/empty.png";

const CardEmpty = () => {
  return (
    <>
      <div className="mx-auto flex w-full flex-col items-center justify-center text-center lg:w-3/4">
        <div className="w-[268px]">
          <img src={Empty} alt="Empty" />
          <p className="mt-6 text-sm font-normal text-neutral-05">
            Belum ada produkmu yang diminati nih, sabar ya rejeki nggak kemana
            kok
          </p>
        </div>
      </div>
    </>
  );
};

export default CardEmpty;
