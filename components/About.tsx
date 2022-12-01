import React from "react";

import trophy from "../public/trophy.png";
import marketing from "../public/marketing.png";
import businessIdeas from "../public/business-ideas.png";
import aboutImage from "../public/about-image.jpg";
import Image from "next/image";

const aboutData = [
  {
    img: trophy,
    title: "Sucessfull products",
    desc: "Great selection of complete & flexible agency demos.",
  },
  {
    img: marketing,
    title: "Brand identity",
    desc: "Boost brand identity. Marketing is the key to brand sucess.",
  },
  {
    img: businessIdeas,
    title: "Business strategy",
    desc: "Great selection of complete & flexible agency demos.",
  },
];

const About = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 xl:px-0 py-16">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="flex flex-col items-center justify-center md:justify-start md:items-start">
          <h1 className="sm:text-5xl text-3xl font-normal max-w-md text-center md:text-left">
            A new site for your agency? It's here.
          </h1>

          {aboutData.map((item, index) => {
            return (
              <div
                key={index}
                className="flex mt-10 sm:pl-10 md:pl-20 gap-6 max-w-md items-center">
                <div className="relative h-14 w-14 rounded-full">
                  <Image src={item.img} alt="icons" />
                </div>
                <div className="space-y-2">
                  <h2 className="font-semibold text-xl">{item.title}</h2>
                  <p className="text-lg">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="px-24 flex items-center justify-center md:items-start md:justify-start relative h-full min-h-[24rem] w-full">
          <Image
            src={aboutImage}
            alt="aboutImage"
            className="sm:w-96 w-72 min-h-[24rem] max-w-[24rem] z-[1] transform h-full object-cover -rotate-6 top-0"
          />
          <div className="bg-yellow-400 top-0 z-[-1] transform  h-full sm:w-96 w-72 rotate-6 absolute"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
