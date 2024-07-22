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

  const handleShowNav = () => {
    setShowNav(!showNav);
  };
  const HomeScreenContent = () => (
    <div>
      <NavBar openNav={handleShowNav} />
      <Hero />

      <div className="relative z-[30]">
        <About />
        <Services />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  );

  return (
    <div className="" id="header">
      <div>
        {showNav && (
          <MiniMenuNavbar navState={showNav} closeNav={handleShowNav} />
        )}
        {<HomeScreenContent />}
      </div>
    </div>
  );
};

export default HomePage;
