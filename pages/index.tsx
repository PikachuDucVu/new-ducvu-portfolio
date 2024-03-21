import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MiniMenuNavbar from "@/components/MiniMenuNavbar";
import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import React, { useState } from "react";

const HomePage = () => {
  const [showNav, setShowNav] = useState(false);

  const closeNav = () => setShowNav(false);
  const openNav = () => setShowNav(true);

  return (
    <div className="">
      <div>
        {showNav && <MiniMenuNavbar navState={showNav} closeNav={closeNav} />}
        <NavBar openNav={openNav} />
        <Hero />

        <div className="relative z-[30]">
          <About />
          <Services />
          <Skills />
          <Projects />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
