import Image from "next/image";
import React, { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const Slider = ({ sliderData }) => {
  const [current, setCurrent] = useState(0);
  const slideLength = sliderData.length;

  return (
    <div id="gallery">
      <h1>Gallery</h1>
      <div>
        {sliderData.map((slide, index) => {
          return (
            <Image
              src={slide.image}
              width="1440"
              height="600"
              objectFit="cover"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
