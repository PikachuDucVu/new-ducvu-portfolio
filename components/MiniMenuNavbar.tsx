import { XMarkIcon } from "@heroicons/react/20/solid";
import React from "react";
import { Link } from "react-scroll";

const MiniMenuNavbar = ({
  navState,
  closeNav,
}: {
  navState: boolean;
  closeNav: () => void;
}) => {
  return (
    <div>
      <div
        className={`fixed  top-0 left-0 right-0 bottom-0 z-50 bg-[#09101a] md:hidden`}
      >
        <div
          className="
        w-[100vw] h-[100vh] flex flex-col items-center justify-center"
        >
          <Link
            to={"header"}
            className="nav-link-mobile"
            smooth
            duration={500}
            onClick={closeNav}
          >
            HOME
          </Link>
          <Link
            to={"about"}
            className="nav-link-mobile"
            smooth
            duration={500}
            onClick={closeNav}
          >
            ABOUT
          </Link>
          <Link
            to={"services"}
            className="nav-link-mobile"
            smooth
            duration={500}
            onClick={closeNav}
          >
            SERVICES
          </Link>
          <Link
            to={"skills"}
            className="nav-link-mobile"
            smooth
            duration={500}
            onClick={closeNav}
          >
            CAREER
          </Link>
          <Link
            to={"projects"}
            className="nav-link-mobile"
            smooth
            duration={500}
            onClick={closeNav}
          >
            PROJECTS
          </Link>
          <Link
            to={"contact"}
            className="nav-link-mobile"
            smooth
            duration={500}
            onClick={closeNav}
          >
            CONTACT
          </Link>
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
