import {
  CodeBracketSquareIcon,
  RocketLaunchIcon,
} from "@heroicons/react/20/solid";
import React from "react";

const Services = () => {
  return (
    <div className="bg-[#121212] pt-16 md:pt-32 pb-20">
      <p className="heading">
        My <span className="text-yellow-400">Services</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-4/5 mx-auto items-center gap-14 mt-16 text-white">
        <div>
          <div className="bg-orange-700 hover:scale-110 transform transition-all duration-300  uppercase font-semibold text-center p-8">
            <RocketLaunchIcon className="w-24 h-24 mx-auto text-[#d3fae8]" />
            <h1 className="text-xl md:text-3xl mt-6 mb-6">Frontend</h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              sint, vero magni nemo veniam assumenda expedita ducimus.
            </p>
          </div>
        </div>
        <div>
          {" "}
          <div className="bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-8">
            <CodeBracketSquareIcon className="w-24 h-24 mx-auto text-[#d3fae8]" />
            <h1 className="text-xl md:text-3xl mt-6 mb-6">Backend</h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              sint, vero magni nemo veniam assumenda expedita ducimus.
            </p>
          </div>
        </div>
        <div>
          {" "}
          <div className="bg-blue-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-8">
            <CodeBracketSquareIcon className="w-24 h-24 mx-auto text-[#d3fae8]" />
            <h1 className="text-xl md:text-3xl mt-6 mb-6">Fullstack</h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              sint, vero magni nemo veniam assumenda expedita ducimus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
