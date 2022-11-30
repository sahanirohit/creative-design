import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const copyrightYear = new Date();
  return (
    <footer className="max-w-7xl mx-auto px-6 xl:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 md:gap-6 pb-8">
        <div className="flex md:col-span-2 flex-col space-y-4">
          <h1 className="text-4xl font-bold">& Exp</h1>
          <p className="max-w-sm">
            Boost brand identity. Marketing is the key to brand sucess.
          </p>
          <div className="flex space-x-6 pt-8  text-xl">
            <FaTwitter className="text-sky-400" />
            <FaFacebook className="text-blue-600" />
            <FaLinkedin className="text-blue-900" />
            <FaInstagram className="text-pink-600" />
          </div>
        </div>
        <div className="">
          <h2 className="font-bold">About</h2>
          <ul className="text-gray-400 mt-6 space-y-2">
            <li className="">Quick Link</li>
            <li className="">Portfolio</li>
            <li className="">Out Blog</li>
            <li className="">Contact</li>
          </ul>
        </div>
        <div className="">
          <h2 className="font-bold">Company</h2>
          <ul className="text-gray-400 mt-6 space-y-2">
            <li className="">Submit</li>
            <li className="">Agency</li>
            <li className="">Advertisement</li>
            <li className="">Login</li>
          </ul>
        </div>
        <div className="">
          <h2 className="font-bold">Support</h2>
          <ul className="text-gray-400 mt-6 space-y-2">
            <li className="">Tools</li>
            <li className="">Help center</li>
            <li className="">Feedback</li>
            <li className="">Policy</li>
          </ul>
        </div>
      </div>
      <div className="text-sm sm:text-[1rem] flex items-center justify-between sm:flex-row flex-col py-4">
        <h2 className="">
          Copyright, & Exp {copyrightYear.getFullYear()}. All rights reserved.
        </h2>
        <h2 className="">Term & Conditions</h2>
      </div>
    </footer>
  );
};

export default Footer;
