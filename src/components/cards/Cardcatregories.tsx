import React from "react";
import { BsArrowRight } from "react-icons/bs";

const CardCategories = ({
  img,
  text,
}: {
  text: string;
  img: string | "buy now";
}) => {
  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        height: "16rem", // You can adjust the height here
        padding: "1rem", // You can adjust the padding here
      }}
      className="max-w-[200px] bg-cover w-[200px] rounded-md max-h-xl h-[200px] p-3 flex justify-center items-end h-md"
    >
      <button className="hover:scale-110 text-sm p-2  flex items-center gap-2 text-gray-700  rounded-md bg-white  active:scale-125">
        <span className="font-thin">{text}</span>
        <BsArrowRight />
      </button>
    </div>
  );
};

export default CardCategories;
