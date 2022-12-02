import Head from "next/head";
import Image from "next/legacy/image";
import React from "react";

import planningStrategy from "../public/planning-strategy.jpg";
import consult from "../public/consult.jpg";
import design from "../public/design.jpg";
import develope from "../public/develope.jpg";

const WorkingProcess = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-0">
      <Head>
        <title>Creative Design - How it works?</title>
      </Head>
      <div className="grid md:grid-cols-2 gap-6 h-[85vh] md:h-[90vh] ">
        <div className="flex flex-col justify-center space-y-4 ">
          <h2 className="max-w-md md:text-2xl text-xl text-gray-400 italic">
            Struggling with your idea?
          </h2>
          <h1 className="md:text-5xl text-3xl font-bold max-w-lg">
            Out process can help you move forward
          </h1>
        </div>
        <div className="my-auto">
          <Image
            src={planningStrategy}
            placeholder="blur"
            alt="strategy planning"
          />
        </div>
      </div>
      <div className="md:text-center text-left w-full flex flex-col items-start md:items-center">
        <h2 className="md:text-2xl text-xl font-semibold text-gray-500">
          If your vision seems fuzzy
        </h2>
        <h1 className="md:text-4xl text-2xl font-bold max-w-xl">
          Our structured approch helps you navigate uncertainties
        </h1>
      </div>
      <div className="grid md:grid-cols-2 gap-6 py-16">
        <div className="relative md:order-1 w-full border-2 min-h-[14rem] duration-500 md:min-h-[24rem]">
          <Image
            src={consult}
            layout="fill"
            alt="consult"
            className="object-cover w-full h-full"
            placeholder="blur"
          />
        </div>
        <div className="flex flex-col md:order-2 justify-center space-y-4">
          <h1 className="text-4xl font-bold">Consult</h1>
          <ol className="text-lg">
            <li className="">1. Learn your ideas and goals</li>
            <li className="">2. Research and Brainstorm</li>
            <li className="">3. Draft outlines and plans</li>
          </ol>
          <p className="text-lg font-bold text-gray-600">
            Output: Concepts, Outlines, Detailed Plans
          </p>
        </div>
        <div className="flex flex-col md:order-3 order-4 justify-center space-y-4">
          <h1 className="text-4xl font-bold">Design</h1>
          <ol className="text-lg">
            <li className="">1. Concept / Branding Designs</li>
            <li className="">2. Detailed Design for App and Site</li>
            <li className="">3. Marketing Material Designs</li>
          </ol>
          <p className="text-lg font-bold text-gray-600">
            Output: Detailed and Actionable Designs
          </p>
        </div>
        <div className="relative w-full md:order-4 order-3 border-2 min-h-[14rem] duration-500 md:min-h-[24rem]">
          <Image
            className="w-full h-full object-cover"
            src={design}
            layout="fill"
            alt="design"
            placeholder="blur"
          />
        </div>
        <div className="relative border-2 md:order-5 w-full min-h-[14rem] duration-500 md:min-h-[24rem]">
          <Image
            className="object-cover w-full h-full"
            src={develope}
            layout="fill"
            alt="develope"
            placeholder="blur"
          />
        </div>
        <div className="flex flex-col md:order-6 justify-center space-y-4">
          <h1 className="text-4xl font-bold">Develope</h1>
          <ol className="text-lg">
            <li className="">1. Website Development</li>
            <li className="">2. Mobile App Development</li>
            <li className="">3. Setup Cloud Hosting</li>
          </ol>
          <p className="text-lg font-bold text-gray-600">
            Output: working setup OR code
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
