import React from "react";
import { IconType } from "react-icons/lib";
type props = {
  icon: IconType;
  title: string;
  desc: string;
};

const FeatureCard = ({ icon, title, desc }) => {
  return (
    <div className="w-[200px] h-[200px] rounded-md space-y-2">
      <span className="p-4 bg-gray-200 inline-block text-xl rounded-md">
        {icon}
      </span>
      <h1 className="">{title}</h1>
      <p className="desc text-sm  text-gray-400">{desc}</p>
    </div>
  );
};

export default FeatureCard;
