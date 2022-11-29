import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="h-20 flex items-center ">
      <nav className="max-w-7xl mx-auto flex items-center justify-between w-full">
        <div className="">
          <h1 className="text-3xl font-black">& Exp</h1>
        </div>
        <ul className="flex">
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
        <div className="">
          <button className="px-4 py-2 font-semibold">Login</button>
          <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg">
            Sign up
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
