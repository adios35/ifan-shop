import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200  lg:p-14 lg:pb-8">
      <div className="mx-auto flex  gap-10 mb-10  items-center [&>*]:flex-1 ">
        {/* Left Column - Logo */}
        <div className="mb-4 sm:mb-0 max-w-sm ">
          <div className="logo ">
            <span className="bg-black/80 mr-[2px] -skew-x-12 text-white text-xl font-bold inline-block px-[4px] rounded-md">
              Ifan
            </span>
            <span className="text-gray-700 text-xl font-bold">Store</span>
          </div>
        </div>
        {/* Middle Column - Links */}
        <div className="flex flex-col items-center justify-between  sm:flex-row ">
          <div className="mb-4 sm:mb-0">
            <h3 className="font-bold uppercase">Shop</h3>
            <ul className="mt-2 text-gray-500">
              <li>Categories</li>
              <li>Products</li>
              {/* Add more shop-related links */}
            </ul>
          </div>
          <div className="mb-4 sm:mb-0">
            <h3 className="font-bold uppercase">Company</h3>
            <ul className="mt-2 text-gray-500">
              <li>About Us</li>
              <li>Contact Us</li>
              {/* Add more company-related links */}
            </ul>
          </div>
          <div className="mb-4 sm:mb-0">
            <h3 className="font-bold uppercase">Support</h3>
            <ul className="mt-2 text-gray-500">
              <li>FAQs</li>
              <li>Shipping & Returns</li>
              {/* Add more support-related links */}
            </ul>
          </div>
        </div>

        {/* Right Column - Empty */}
      </div>
      <hr className=" bg-gray-400  h-[2px]" />
      {/* Copyright Section */}
      <div className="container mx-auto mt-8 text-center text-gray-500">
        © {new Date().getFullYear()} ifanStore. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
