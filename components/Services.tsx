import React from "react";
import Image from "next/image";
import appDevelopment from "../public/app-development.png";
import webDevelopment from "../public/web-development.png";
import webDesign from "../public/web-design.png";
import contentWriting from "../public/content-writing.png";
import brandAwareness from "../public/brand-awareness.png";
import marketing from "../public/marketing.png";
import { FaArrowRight } from "react-icons/fa";

const serviceData = [
  {
    img: appDevelopment,
    title: "App Development",
    desc: "App Development for your business. This will help your business to grow.",
    href: "/",
  },
  {
    img: brandAwareness,
    title: "Brand identity",
    desc: "Boost brand identity. Marketing is the key to brand sucess.",
    href: "/",
  },
  {
    img: webDevelopment,
    title: "Web Development",
    desc: "Boost brand identity. Marketing is the key to brand sucess.",
    href: "/",
  },
  {
    img: contentWriting,
    title: "Content Writing",
    desc: "Boost brand identity. Marketing is the key to brand sucess.",
    href: "/",
  },
  {
    img: webDesign,
    title: "Web Desiging",
    desc: "Boost brand identity. Marketing is the key to brand sucess.",
    href: "/",
  },
  {
    img: marketing,
    title: "Digital Marketing",
    desc: "Boost brand identity. Marketing is the key to brand sucess.",
    href: "/",
  },
];

const Services = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-16 xl:px-0">
      <div className="flex flex-col space-y-4">
        <h1 className="sm:text-4xl text-3xl font-semibold sm:font-bold max-w-md">
          Services provide for you
        </h1>
        <p className="sm:text-xl text-lg max-w-md">
          There are many services which you can select to grow your business.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
        {serviceData.map((item, index) => {
          return (
            <div
              className="hover:shadow-2xl max-w-sm mx-auto cursor-pointer px-8 py-8"
              key={index}>
              <div className="relative w-16 bg-white p-2 shadow-sm">
                <Image src={item.img} alt="icon" objectFit="contain" />
              </div>
              <div className="mt-8 flex flex-col space-y-4">
                <h1 className="text-2xl font-semibold">{item.title}</h1>
                <p className="max-w-md">{item.desc}</p>
                <div className="">
                  <a
                    href="/"
                    target="_blank"
                    className="inline-flex px-2 hover:shadow-xl hover:border hover:border-gray-100 border-white border py-2 items-center space-x-2"
                    rel="noopener noreferrer">
                    <span>Learn more</span> <FaArrowRight />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
