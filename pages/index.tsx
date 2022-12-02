import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import About from "../components/About";
import Company from "../components/Company";
import Connect from "../components/Connect";
import Hero from "../components/Hero";
import Services from "../components/Services";

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Creative Design - Landing Page</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="all" />
        <meta
          name="description"
          content="Creative Design - Landing Page"
          key="desc"
        />
        <meta
          name="google-site-verification"
          content="Dr6cM6mm_t_4gnYsBppNTWv9su6n6x20sPC6yXE53uw"
        />
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
