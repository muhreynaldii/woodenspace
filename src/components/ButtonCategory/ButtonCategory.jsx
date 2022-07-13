import React, { useState } from "react";
import iconSearch from "../../assets/icons/fi_search.svg";
import iconSearchHover from "../../assets/icons/fi_search_hover.svg";

function ButtonCategory(props) {
  const [over, setOver] = useState(false);
  return (
    <button
      className="group mr-4 mb-4 flex h-[48px] items-center rounded-xl bg-olive-02 px-6 py-[14px] text-sm text-neutral-04 transition hover:bg-olive-04"
      onMouseOver={() => setOver(true)}
      onMouseOut={() => setOver(false)}
    >
      <img
        src={over ? iconSearchHover : iconSearch}
        alt="icon-search"
        className="mr-2 transition"
      />
      <span className="capitalize group-hover:text-white group-hover:transition">
        {props.name}
      </span>
    </button>
  );
}

export default ButtonCategory;
