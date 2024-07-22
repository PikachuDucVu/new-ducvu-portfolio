import { Bars3Icon } from "@heroicons/react/20/solid";
import React from "react";
import { Link } from "react-scroll";

const NavBar = ({ openNav }: { openNav: () => void }) => {
  return (
    <div className="w-full fixed z-50 top-0 h-[12vh] bg-[#141c27] shadow-md">
      <div className="flex items-center justify-between w-[80%] mx-auto h-full">
        <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
          DUCVU
          <span className="text-yellow-300">DEV</span>
        </h1>
        <Link to={"header"} className="nav-link" smooth duration={500}>
          HOME
        </Link>
        <Link to={"about"} className="nav-link" smooth duration={500}>
          ABOUT
        </Link>
        <Link to={"services"} className="nav-link" smooth duration={500}>
          SERVICES
        </Link>
        <Link to={"skills"} className="nav-link" smooth duration={500}>
          CAREER
        </Link>
        <Link to={"projects"} className="nav-link" smooth duration={500}>
          PROJECTS
        </Link>
        <Link to={"contact"} className="nav-link" smooth duration={500}>
          CONTACT
        </Link>
        <div>
          <Bars3Icon
            className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300"
            onClick={openNav}
          />
        </div>

        <Link
          to={"projects"}
          className="hidden lg:flex uppercase px-10 border-2 hover:bg-slate-700 hover:scale-125 text-white font-bold transition text-lg cursor-pointer"
          smooth
          duration={500}
        >
          DEMO
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
