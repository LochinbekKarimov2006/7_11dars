import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="h-[100vh] bg-[#0000000c] flex flex-col justify-center">
      <div className="bg-[#59ff0065] p-[12px] py-[25px] rounded-[10px] flex flex-col gap-5 mx-2">
        <div className="w-[45px] h-[45px] rounded-[10px] bg-[#000dffae] flex items-center justify-center">
          <NavLink to="/">
            <img
              className="w-[30px]"
              src="   https://cdn-icons-png.flaticon.com/512/2163/2163350.png "
              alt=""
            />
          </NavLink>
        </div>
        <div className="w-[45px] h-[45px] rounded-[10px] bg-[#ff0000ae] flex items-center justify-center">
          <NavLink to="/+">
            <img
              className="w-[30px]"
              src="   https://cdn-icons-png.flaticon.com/512/8922/8922789.png "
              alt=""
            />
          </NavLink>
        </div>
        <div className="w-[45px] h-[45px] rounded-[10px] bg-[#d9ff00ae] flex items-center justify-center">
          <NavLink to="/boockmark">
            <img
              className="w-[30px]"
              src="   https://cdn-icons-png.flaticon.com/512/2702/2702221.png "
              alt=""
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
