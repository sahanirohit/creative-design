import Image from "next/image";
import React from "react";
import heroImage from "../public/heroImage.jpg";

const Hero = () => {
  return (
    <section className="relative h-full w-full">
      {/* <div className="absolute w-full vector top-0 left-0 h-full bg-gradient-to-tr from-yellow-500 via-emerald-400 to-sky-500"></div> */}
      <div className="grid grid-cols-1 pt-8 lg:pt-0 lg:grid-cols-2 max-w-7xl lg:gap-0 gap-6 mx-auto w-full h-full px-6 xl:px-0">
        <div className="flex flex-col h-full justify-center items-center lg:items-start lg:text-left text-center space-y-6">
          <h1 className="sm:text-6xl text-4xl font-semibold max-w-md">
            Creative Design & Experience
          </h1>
          <p className="max-w-md sm:text-xl text-lg">
            Discuss your goals, determine success metrics, identify problems to
            solve and define visitors of the website.
          </p>
          <div className="relative flex items-center max-w-md w-full">
            <input
              type="text"
              className="px-4 py-3 focus:outline-none w-full max-w-md relative bg-gray-50 hover:shadow-md rounded-md"
              placeholder="Type your email here"
            />
            <button className="absolute px-4 rounded-lg right-2 py-2 bg-blue-500 text-white">
              Sign up
            </button>
          </div>
        </div>
        <div className="relative flex items-center h-full justify-center w-full">
          <Image
            src={heroImage}
            alt="hero image"
            priority
            className="object-contain w-96 lg:w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
