import React from "react";

const Hero = ({ heading, message }) => {
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img w-full">
      {/* Image Overlay */}
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/80 z[2] " />
      <div className="p-5 text-white z-[2]  lg:mt-[-3em]">
        <h2 className="text-5xl font-bold">{heading}</h2>
        <p className="py-5 text-xl">{message}</p>
        <button className="px-8 hover:py-3 duration-500 border ">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
