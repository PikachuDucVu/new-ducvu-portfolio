import React from "react";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="h-[88vh] bg-[url('/images/banner.jpg')] mt-[10vh] bg-cover bg-center">
      <Particle />

      <div
        className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[5rem] h-[100%] items-center"
        id="social"
      >
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            Hello, I&apos;m <span className="text-yellow-400">DUC VU!</span>
          </h1>
          <TextEffect />
          <p className="mt-8 text-2xl text-[#ffffff92]">
            <span>
              Hi, my nickname is Pikachu. <br /> I&apos;m a{" "}
            </span>
            <span className="font-bold">Full-stack, Cloud, Game Developer</span>
            <span> at </span>
            <span className="font-bold">Gamefox.vn</span>
            <span> with 1 year experience. I enjoy building </span>
            <span className="underline">Site, Game platform and Apps.</span>
          </p>
          <div className="mt-8 flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
            <div className="flex gap-3 w-full">
              <a
                className="p-3 rounded-xl hover:bg-green-400 transition-all duration-200 text-[18px] font-bold uppercase bg-instagram-gradient text-black flex items-center space-x-2"
                href="https://www.instagram.com/_pika.dvu/"
                target="_blank"
              >
                <FaInstagram className="h-6 w-6 " />
              </a>

              <a
                className="p-3 rounded-xl hover:bg-green-400 transition-all duration-200 text-[18px] font-bold uppercase bg-[#18bff2] text-black flex items-center space-x-2"
                href="https://www.facebook.com/pikachu.dvu"
                target="_blank"
              >
                <FaFacebook className="h-6 w-6 " />
              </a>

              <a
                className="p-3 rounded-xl hover:bg-green-400 transition-all duration-200 text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2"
                href="https://github.com/PikachuDucVu"
                target="_blank"
              >
                <FaGithub className="h-6 w-6 " />
              </a>
            </div>
          </div>
        </div>
        <div className=" ml-12 w-[450px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[450px]">
          <Image
            src="/images/intro.jpg"
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
