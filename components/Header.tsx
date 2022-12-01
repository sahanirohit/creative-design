import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaBars, FaWindowClose } from "react-icons/fa";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    if (navOpen) {
      let bodyElement = document.querySelector("body");
      bodyElement!.style.overflow = "hidden";
    } else {
      const bodyElement = document.querySelector("body");
      bodyElement!.style.overflow = "auto";
    }
  }, [navOpen]);

  return (
    <header className="h-20 flex items-center relative">
      <nav className="max-w-7xl px-6 xl:px-0 mx-auto flex items-center  justify-between w-full">
        <div className="flex items-center z-50 justify-between w-full md:w-auto">
          <h1 className="text-3xl font-black">& Exp</h1>
          {navOpen ? (
            <FaWindowClose
              onClick={() => setNavOpen(!navOpen)}
              className="md:hidden text-lg"
            />
          ) : (
            <FaBars
              onClick={() => setNavOpen(!navOpen)}
              className="md:hidden text-lg"
            />
          )}
        </div>
        {/* Desktop Nav */}
        <ul className="md:flex hidden">
          <li className="px-6 py-1">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="px-6 py-1">
            <Link href={"/portfolio"}>Portfolio</Link>
          </li>
          <li className="px-6 py-1">
            <Link href={"/"}>How it works</Link>
          </li>
          <li className="px-6 py-1">
            <Link href={"/"}>Team</Link>
          </li>
        </ul>
        <div className="md:block hidden">
          <button className="px-4 py-2 font-semibold">Login</button>
          <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg">
            Sign up
          </button>
        </div>
        {/* Mobile Nav */}
        <div
          className={`fixed bg-white top-0 transform ${
            navOpen ? "translate-x-0" : "translate-x-full"
          } z-40 py-28 left-0 w-full duration-300 h-full`}>
          <ul className="">
            <li className="px-6 py-1">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="px-6 py-1">
              <Link href={"/"}>Portfolio</Link>
            </li>
            <li className="px-6 py-1">
              <Link href={"/"}>How it works</Link>
            </li>
            <li className="px-6 py-1">
              <Link href={"/"}>Team</Link>
            </li>
          </ul>
          <div className="px-6 flex w-full">
            <button className="px-4 flex-1 py-2 bg-black text-white rounded-lg font-semibold">
              Login
            </button>
            <button className="px-4 py-2 flex-1 bg-blue-500 text-white font-semibold rounded-lg">
              Sign up
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
