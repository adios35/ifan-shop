import React from "react";
import Carousel from "./HomeCarousel";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { CgSmileMouthOpen } from "react-icons/cg";
import { FaShippingFast } from "react-icons/fa";
import { MdUpdate } from "react-icons/md";
// import Cards from "../cards/Cardcatregories";
// import CardContainer from "../cards/CardContainer";

import {} from "../cards/Cardcatregories";
import CardCategories from "../cards/Cardcatregories";
import FeatureCard from "../cards/FeatureCard";
import Productcard from "../cards/ProductCard";

const Home = () => {
  return (
    <div className="w-full mt-8 lg:px-32">
      <Carousel />
      <section className="w-full py-8 mt-10 divide-gray-900 text-gray-700 [&>*]:flex-1 flex justify-between divide-x-2">
        <div className="row text-xl  font-semibold">
          <h2>
            Discover pure comfort and style <br /> with our high-quality cotton
            t-shirts. Shop now!
          </h2>
        </div>
        <div className="row grid place-items-center text-sm text-gray-400">
          <span className="block">
            We ensure our customers have best shoping experinece
          </span>
        </div>
      </section>
      <section className="flex justify-between my-10">
        <FeatureCard
          desc={"we provide money back guarante"}
          title="Original products"
          icon={<RiMoneyDollarCircleLine />}
        />
        <FeatureCard
          desc={"We offer fast and free shipping to our customer"}
          title="Fast and free shipping"
          icon={<FaShippingFast />}
        />
        <FeatureCard
          desc={"Exchange your product if it doesnt satify you"}
          title="SatisFaction Guarantee"
          icon={<CgSmileMouthOpen />}
        />
        <FeatureCard
          desc={"we provide money back guarante"}
          title="Original products"
          icon={<MdUpdate />}
        />
      </section>
      <section className="mt-5 text-gray-800">
        <h1 className="text-2xl my-4 font-semibold">Categories</h1>
        <div className="cardContainer flex gap-5">
          <CardCategories
            text="Men clothes"
            img="https://i.pinimg.com/564x/00/13/4d/00134d6d068e331d91d837b45e2b3595.jpg"
          />
          <CardCategories
            text="women clothes"
            img="https://i.pinimg.com/564x/3d/19/64/3d1964c877318a7b4eb4bfe021fd15ad.jpg"
          />
        </div>
      </section>
      <section className="my-10 text-gray-800">
        <h1 className="text-2xl my-4 font-semibold">Featured Products</h1>
        <div className="cardContainer flex gap-5">
          <Productcard
            text="hello world"
            img="https://cdn.nueta.id/product_images/7ab5fa0b-60ce-4a4e-8dbf-1eb6ed756a3d/large_f59ee004_fecb_4c83_be04_d6a4fd7f8a93.jpeg"
          />
          <Productcard
            text="hello mom"
            img="https://cdn.nueta.id/product_images/4d8fe0d1-cb8b-4ce8-96a4-a87b3c2139db/large_b444efe3_0841_4461_98aa_dc1148f79c5f.jpeg"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
