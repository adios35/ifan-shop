import React from "react";
import { BsFillCartPlusFill } from "react-icons/bs";

const Productcard = ({
  text,
  img,
}: {
  text: string;
  img: string | "buy now";
}) => {
  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
        objectPosition: "center",
      }}
      className=" w-[230px] bg-cover overflow-hidden rounded-md bg-gray-300 max-h-xl h-[250px]  flex justify-center items-end h-md"
    >
      <div className="row w-full flex items-center bg-white bg-opacity-10 p-2 backdrop-blur-sm  justify-between">
        <div className="price  text-white items-center max-w-[50px] ">
          <span className="block  text-xs whitespace-nowrap ">
            autumn dress
          </span>
          <span className="block  font-semibold">$599.0</span>
        </div>
        <button className="hover:scale-110 text-sm p-3  justify-center flex items-center gap-2 text-white  rounded-md bg-gray-700  active:scale-125">
          <BsFillCartPlusFill />
        </button>
      </div>
    </div>
  );
};

export default Productcard;
