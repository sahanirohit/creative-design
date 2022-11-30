import Image from "next/image";
import React from "react";
import heroImage from "../public/heroImage.jpg";

const Hero = () => {
  return (
    <section className="relative h-[90vh]">
      {/* <div className="absolute w-full vector top-0 left-0 h-full bg-gradient-to-tr from-yellow-500 via-emerald-400 to-sky-500"></div> */}
      <div className="grid grid-cols-2 max-w-7xl mx-auto w-full h-full px-4 lg:px-0">
        <div className="flex flex-col h-full justify-center space-y-6">
          <h1 className="text-6xl font-semibold max-w-md">
            Creative Design & Experience
          </h1>
          <p className="max-w-md text-xl">
            Discuss your goals, determine success metrics, identify problems to
            solve and define visitors of the website.
          </p>
          <div className="relative flex items-center max-w-md">
            <input
              type="text"
              className="px-4 py-3 focus:outline-none w-full max-w-md relative bg-white shadow-md rounded-md"
              placeholder="Type your email here"
            />
            <button className="absolute px-4 rounded-lg right-2 py-1 bg-blue-500 text-white">
              Sign up
            </button>
          </div>
        </div>
        <div className="relative flex items-center h-full w-full">
          <Image
            src={heroImage}
            alt="hero image"
            priority
            className="object-contain "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
