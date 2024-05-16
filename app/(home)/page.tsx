import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import Gallerys from "./components/Gallerys";
import Footer from "./components/Footer";
import { Member } from "./components/Member";
import Skills from "./components/Skills";
import About from "./components/About";
import Client from "./components/Client";

const page = () => {
  return (
    <div className="min-h-[300vh] bg-white overflow-hidden ">
      <div className=" dark:bg-white bg-blue-800 dark:bg-grid-blue-800/[0.08] bg-grid-white/[0.2] relative">
        <div className="max-w-7xl mx-auto p-5 ">
          <Navbar />
          <Hero />
        </div>
      </div>
      <div className="h-10 xl:h-32 bg-gradient-to-t from-white absolute -bottom-7 left-0 xl:bottom-0 smw-full"></div>
      <div className="max-w-7xl mx-auto p-5 mt-20 mb-20">
        
        <About />
        <div className=" dark:bg-white bg-blue-800 dark:bg-grid-blue-800/[0.08] bg-grid-white/[0.2] relative">
          <Skills />
          </div>
        <Gallerys />
        <Client />
        <Member />
        
      </div>
      <div className=" dark:bg-gray-300 bg-blue-800 dark:bg-grid-blue-800/[0.2] bg-grid-gray-300/[0.2] relativeg-gray-300 ">
        <Footer />
        </div>
    </div>
  );
};

export default page;
