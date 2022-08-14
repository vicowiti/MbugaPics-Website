import Image from "next/image";
import React, { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const Slider = ({ sliderData }) => {
  const [current, setCurrent] = useState(0);
  const length = sliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(sliderData) || sliderData.length < 1) {
    return null;
  }

  return (
    <div id="gallery" className="max-w-[1240px] mx-auto">
      <h1 className="text-2xl text-center font-bold p-4">Gallery</h1>
      <div className="relative flex justify-center p-4">
        {sliderData.map((slide, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? "opacity-[1] ease-in duration-1000 "
                  : "opacity-0"
              }
            >
              <FaArrowCircleLeft
                onClick={prevSlide}
                size={30}
                className="absolute left-[30px] top-[50%] z-[3] text-white/70 cursor-pointer hover:text-white duration-500 select-none"
              />

              {index === current && (
                <Image
                  src={slide.image}
                  width="1440"
                  height="600"
                  objectFit="cover"
                />
              )}
              <FaArrowCircleRight
                onClick={nextSlide}
                size={30}
                className="absolute right-[30px] top-[50%] text-white/70 z-1 hover:text-white duration-500 cursor-pointer select-none"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
