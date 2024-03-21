import React from "react";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";

const Hero = () => {
  return (
    <div className="h-[88vh] bg-[url('/images/banner.jpg')] mt-[10vh] bg-cover bg-center">
      <Particle />

      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            Hi I&apos;m <span className="text-yellow-400">DUC VU!</span>
          </h1>
          <TextEffect />
          <p className="mt-8 text-2xl text-[#ffffff92]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            sint, vero magni nemo veniam assumenda expedita ducimus. Consequatur
            cumque hic, molestias nam delectus quaerat possimus?
          </p>
          <div className="mt-8 flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
            <button className="px-8 hover:bg-yellow-400 transition-all duration-200 py-4 text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2">
              <p>Download My CV</p>
              <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black " />
            </button>
          </div>
        </div>
        <div className="w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px]">
          <Image
            src="/images/u1.jpg"
            layout="fill"
            alt=""
            className="object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
