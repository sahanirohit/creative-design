import React from "react";

const Hero = () => {
  return (
    <section className="relative">
      <div className="grid grid-cols-2 max-w-7xl mx-auto px-4 lg:px-0">
        <div className="flex flex-col h-[32rem] justify-center space-y-6">
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
      </div>
    </section>
  );
};

export default Hero;
