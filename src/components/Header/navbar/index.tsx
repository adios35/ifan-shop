import React from "react";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="justify-between flex p-3 lg:px-32">
      <div className="logo">
        <span
          //   className="text-white text-xl font-bold"
          //   style={{ textShadow: ".7px .7px 1.5px rgba(0, 0, 0, 0.6)" }}
          className="bg-black/80 mr-[2px] -skew-x-12 text-white text-xl font-bold inline-block px-[4px] rounded-md"
        >
          Ifan
        </span>
        <span className="text-gray-700 text-xl font-bold">Store</span>
      </div>
      <ul className="flex gap-4 text-gray-700 items-center text-sm">
        <li>Shop</li>
        <li>Most Wanted</li>
        <li>New Arival</li>
        <li>Brands</li>
      </ul>
      <ul className="actions flex gap-4 ">
        <div className="flex gap-1 items-center">
          <label className="relative w-full" htmlFor="search">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="search"
              className="h-full pl-8 bg-blue-50 p-2 text-sm  text-gray-700  rounded-lg outline-none focus:border-b-2"
            />
            <span className="block top-2/4 text-gray-400 -translate-y-2/4 text-xl p-2 absolute">
              <AiOutlineSearch />
            </span>
          </label>
        </div>
        <button className="text-lg text-gray-700">
          <AiOutlineShoppingCart />
        </button>
        <button className="text-lg text-gray-700">
          <FaUserAlt />
        </button>
      </ul>
    </div>
  );
};

export default Navbar;
