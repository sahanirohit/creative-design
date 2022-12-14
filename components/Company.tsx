import Image from "next/legacy/image";
import React from "react";
import airbnb from "../public/airbnb.png";
import google from "../public/google.png";
import microsoft from "../public/microsoft.png";
import hubspot from "../public/hubspot.png";
import welmart from "../public/welmart.png";
import fedex from "../public/fedex.png";

const companyLogo = [
  { img: airbnb },
  { img: hubspot },
  { img: google },
  { img: microsoft },
  { img: welmart },
  { img: fedex },
];

const Company = () => {
  return (
    <section className="max-w-7xl mx-auto flex items-center h-full w-full px-6 lg:px-0 flex-wrap gap-4 justify-evenly py-8">
      {companyLogo.map((item, index) => {
        return (
          <div className="w-28 h-full" key={index}>
            <Image
              src={item.img}
              alt="logo"
              className="filter w-full h-full object-contain grayscale-[100] hover:grayscale-0"
            />
          </div>
        );
      })}
    </section>
  );
};

export default Company;
