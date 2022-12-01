import Head from "next/head";
import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

import img1 from "../public/Creative Design - Landing Page.png";
import img2 from "../public/Rohit Sahani _ UI_UX Designer & Developer.png";
import img3 from "../public/teacher-portfolio.jpg";
import img4 from "../public/Village Bank.jpg";

const portfolioImage = [
  { img: img1, href: "/" },
  { img: img2, href: "https://www.rohitsahani.in/" },
];

const portfolio = () => {
  return (
    <section className="max-w-7xl mx-auto">
      <Head>
        <title>Creative Design | Portfolio</title>
      </Head>
      <div className="py-16">
        <h1 className="text-4xl font-[poppins]">
          Here are my some Live projects.
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-4 pb-16">
        {portfolioImage.map((item, index) => {
          return (
            <div className="flex flex-col space-y-4" key={index}>
              <div className="h-[36rem] w-full overflow-hidden border relative group">
                <Image
                  src={item.img}
                  alt="landingPage"
                  className="w-full h-full object-cover z-[-1] object-top group-hover:object-bottom duration-[1s]"
                />
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-transparent z-[1] w-full h-full absolute top-0"></a>
              </div>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className=" inline-flex items-center space-x-3">
                <span>Preview</span>
                <FaArrowRight />{" "}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default portfolio;
