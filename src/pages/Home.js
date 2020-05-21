import React, { useEffect } from "react";
import Showcase from "../components/Showcase";
import About from "../components/About";
import Partners from "../components/Partners";
import Footer from "../components/Footer";
import MainProjects from "../components/MainProjects";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Showcase />
      <MainProjects />
      <About />
      <Partners />
      <Footer />
    </>
  );
};

export default Home;
