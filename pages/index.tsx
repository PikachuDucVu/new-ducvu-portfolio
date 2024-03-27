import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MiniMenuNavbar from "@/components/MiniMenuNavbar";
import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import { useRouter } from "next/router";
import React, { useState } from "react";

const HomePage = () => {
  const [showNav, setShowNav] = useState(false);
  const router = useRouter();

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
        {router.pathname === "/" && <HomeScreenContent />}
        {/* TODO: Add CV page */}
        {/* {router.pathname === "/cv" && <CVPage />} */}
      </div>
    </div>
  );
};

export default HomePage;
