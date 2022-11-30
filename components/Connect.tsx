import Image from "next/image";
import React from "react";
import connect from "../public/connect.jpg";

const Connect = () => {
  return (
    <section className=" pb-16">
      <div className="w-full h-96 relative">
        <Image
          src={connect}
          alt="contact"
          className="h-96 object-center object-cover"
          objectFit="cover"
        />
        <div className="w-full h-full bg-gradient-to-l from-black to-transparent absolute top-0"></div>
        <div className="absolute top-0 right-0 left-0 sm:left-auto text-white flex flex-col space-y-4 items-center sm:items-start text-center sm:text-left justify-center h-full">
          <h1 className="sm:text-4xl text-2xl font-bold max-w-md">
            Enough Talk, Let's Build Something
          </h1>
          <p className="">send a line here and get update</p>
          <div className="">
            <button className="bg-blue-500 hover:bg-blue-700 duration-200 text-white font-bold px-2 py-2">
              Let's start
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
