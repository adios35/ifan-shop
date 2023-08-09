import React from "react";
import CardCategories from "./Cardcatregories";

type Text = {
  img: string;
  text: string;
};

type product = Text & {
  type: "product";
  price: Number;
  discount: Number;
};
type notProduct = Text & {
  type?: null;
  price?: never;
  discount?: never;
};

type props = product | notProduct;

const CardContainer = () => {
  return (
    <div className="flex gap-8">
      <CardCategories
        img={
          "https://i.pinimg.com/originals/00/13/4d/00134d6d068e331d91d837b45e2b3595.jpg"
        }
        text="female clothes"
      />
      {/* <CardCategories
        img="https://i.pinimg.com/564x/3d/19/64/3d1964c877318a7b4eb4bfe021fd15ad.jpg"
        text="female clothes"
      /> */}
    </div>
  );
};

export default CardContainer;
