import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FcOldTimeCamera } from "react-icons/fc";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY > 10) {
        setColor("#fff");
        setTextColor("#111");
      } else {
        setColor("transparent");
        setTextColor("#fff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: color }}
      className="fixed top-0 left-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] flex m-auto justify-between items-center p-4 text-white">
        <Link href="/">
          <div className="flex items-center">
            <h1 className="text-4xl font-bold" style={{ color: textColor }}>
              Mbuga
            </h1>
            <FcOldTimeCamera size={30} />
          </div>
        </Link>
        <ul className="hidden lg:flex gap-8" style={{ color: textColor }}>
          <li>
            <Link href="#hero">Home</Link>
          </li>
          <li>
            <Link href="#gallery">Gallery</Link>
          </li>
          <li>
            <Link href="#portfolio">Work</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
        {/* Mobile Menu Button */}
        <div
          onClick={() => setShowMenu(!showMenu)}
          className="lg:hidden z-50"
          style={{ color: textColor }}
        >
          {showMenu ? (
            <AiOutlineClose size={30} className />
          ) : (
            <AiOutlineMenu size={30} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            showMenu
              ? ` absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-black text-center ease-in duration-300 w-full h-screen z-2 `
              : `absolute top-0 bottom-0 left-[-100] right-0 hidden justify-center items-center bg-black text-center ease-in duration-300 w-full h-screen z-2 `
          }
        >
          <ul style={{ color: textColor }}>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="#hero">Home</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="#gallery">Gallery</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="#portfolio">Work</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
