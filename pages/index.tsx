import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import About from "../components/About";
import Company from "../components/Company";
import Connect from "../components/Connect";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Creative Design - Landing Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <Hero />

      {/* Company */}
      <Company />

      {/* About */}
      <About />

      {/* Services */}
      <Services />

      {/* Let's Connect */}
      <Connect />
    </Fragment>
  );
};

export default Home;
