import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import "./Carousel.css"; // Include your custom CSS for the carousel

const images = [
  {
    id: 1,
    url: "https://img.freepik.com/free-psd/mens-tri-blend-crew-tee-mockup_126278-130.jpg?w=740&t=st=1690887077~exp=1690887677~hmac=d2dd716a21eb4cd31cb5f1f3d767ce7ad3e7c5332ec4fbeac6bed7d8e06184f6",
  },
  {
    id: 2,
    url: "https://img.freepik.com/free-psd/chromatees-tshirt-mockup_126278-20.jpg?w=740&t=st=1690887183~exp=1690887783~hmac=e1cb55ea5642c0c5d40c472a38ebcf330fefd3db9b6b0eac9aca7684cc1a8d4e",
  },
  {
    id: 3,
    url: "https://img.freepik.com/free-photo/isolated-opened-white-t-shirt_125540-1452.jpg?w=740&t=st=1690887457~exp=1690888057~hmac=a17d75c42b3ac78ffc795b7b0081551a7fec4ed5b1db3464909e12ddeec36df5",
  },
  // Add more images here
];

const transition = { duration: 0.5, ease: "easeInOut" };

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState<null | string>(null);

  const handlePrevImage = () => {
    setDirection("left");
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setDirection("right");
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel-container w-full rounded-md h-[70vh] relative inset-0">
      <motion.div
        className="carousel-img-container"
        key={currentImageIndex}
        initial={
          direction === "right"
            ? { opacity: 1, x: "100%" }
            : { opacity: 1, x: "-100%" }
        }
        animate={{ opacity: 1, x: 0 }}
        exit={
          direction === "left"
            ? { opacity: 1, x: "-100%" }
            : { opacity: 1, x: "100%" }
        }
        transition={transition}
        onAnimationComplete={() => setDirection(null)}
      >
        <img
          src={images[currentImageIndex].url}
          alt={`Image ${images[currentImageIndex].id}`}
          style={{
            objectFit: "contain",
          }}
          className="bg-contain bg-center block mx-auto h-full w-full"
        />
      </motion.div>
      <div
        className="carousel-text 
       absolute bg-black top-0 w-full
       xl:py-32
       xl:px-20
       xl:text-5xl
          text-center h-full bg-opacity-30  text-6xl leading-snug text-white text-bold font-bold grid place-items-center"
      >
        <p>Level up your style with our summer collection</p>
        <button
          className="hover:scale-110 text-sm p-2 xl:mt-5 flex items-center gap-2 text-gray-700 rounded-md bg-white  active:scale-125"
          onClick={handleNextImage}
        >
          <span className="font-thin">buy now</span>
          <BsArrowRight />
        </button>
        <div>
          <ul className="dot flex gap-2 mt-10">
            {images.map((data, i) => (
              <li
                onClick={() => {
                  if (i > currentImageIndex) {
                    setDirection("left");
                  } else {
                    setDirection("right");
                  }
                  setCurrentImageIndex(i);
                }}
                className={`w-2 h-2 rounded-full ${
                  i == currentImageIndex ? "bg-white" : "bg-gray-300"
                }`}
              ></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="carousel-buttons  text-gray-600  duration-300 flex items-center p-0 rounded-md bg-white">
        <button
          className="hover:scale-110 m-2 active:scale-125 "
          onClick={handlePrevImage}
        >
          <AiOutlineLeft />
        </button>
        <button
          className="hover:scale-110 m-2 active:scale-125"
          onClick={handleNextImage}
        >
          <AiOutlineRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
