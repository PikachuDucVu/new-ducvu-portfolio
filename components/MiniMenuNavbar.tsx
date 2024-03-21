import { XMarkIcon } from "@heroicons/react/20/solid";
import React from "react";

const MiniMenuNavbar = ({
  navState,
  closeNav,
}: {
  navState: boolean;
  closeNav: () => void;
}) => {
  const navAnimation = navState ? "translate-x-0" : "-translate-x-full";
  return (
    <div>
      <div
        className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-50 bg-[#09101a]`}
      >
        <div
          className="
        w-[100vw] h-[100vh] flex flex-col items-center justify-center"
        >
          <div className="nav-link-mobile">Home</div>
          <div className="nav-link-mobile">SERVICES</div>
          <div className="nav-link-mobile">ABOUT</div>
          <div className="nav-link-mobile">PROJECT</div>
          <div className="nav-link-mobile">BLOG</div>
          <div className="nav-link-mobile">CONTACT</div>
        </div>
        <div
          onClick={closeNav}
          className="absolute cursor-pointer top-8 right-8 w-8 h-8 text-yellow-400"
        >
          <XMarkIcon />
        </div>
      </div>
    </div>
  );
};

export default MiniMenuNavbar;
