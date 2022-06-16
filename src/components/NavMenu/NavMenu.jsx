import React from "react";
import fi_list from "../../assets/icons/fi_list.png";
import fi_bell from "../../assets/icons/fi_bell.png";
import fi_user from "../../assets/icons/fi_user.png";

function NavMenu() {
  return (
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
  );
}

export default NavMenu;
