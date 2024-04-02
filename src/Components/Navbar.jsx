import React from "react";
import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav>
      <div className=" max-w-container  mx-auto">
        <div className=" flex items-center justify-between">
          <img src={Logo} alt="" />

          <div>
            <ul className=" flex gap-16 font-dm text-xl leading-[26px] text-ligthGray ">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Blog</li>
              <li>Service</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
