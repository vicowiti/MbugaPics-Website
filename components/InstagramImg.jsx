import Image from "next/image";
import React from "react";
import { FaInstagram } from "react-icons/fa";

const InstagramImg = ({ socialImage }) => {
  return (
    <div className="relative">
      <Image
        src={socialImage}
        alt=""
        className="w-full h-full"
        layout="responsive"
      />
      <div className="group flex justify-center items-center absolute top-0 bottom-0 left-0 right-0 hover:bg-black/70">
        <p className="text-gray-300 hidden group-hover:block">
          <a
            href="https://www.instagram.com/veekdev/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram size={25} />
          </a>
        </p>
      </div>
    </div>
  );
};

export default InstagramImg;
