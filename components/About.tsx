import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import React from "react";
import { ShareIcon } from "@heroicons/react/20/solid";
import { Link } from "react-scroll";

const About = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "TranDucVu-CV-Developer-ENG.pdf";
    link.download = "CV.pdf";
    link.click();
  };

  return (
    <div className="bg-[#121121] pb-12 pt-16 md:pt-32" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-12 items-center">
        <div>
          <h1 className="text-[24px]  font-bold uppercase text-[#55e6a5] mb-[1rem]">
            About Me
          </h1>
          <div className="mb-12 flex items-center md:space-x-10">
            <span className="w-[100px] hidden md:block h-5 bg-slate-400 rounded-sm"></span>
            <p className="text-[19px] text-slate-300 w-[55%] ">
              Currently, I am working as a Game and Frontend Developer at
              TEKMATE Software Solutions Ltd, responsible for developing and
              maintaining game interfaces and web applications. Additionally, I
              serve as a part-time lecturer at MindX Technology School, teaching
              programming courses to students and ensuring they complete
              practical projects.
            </p>
          </div>

          <div className="flex gap-3">
            <Link
              to="social"
              smooth
              className="px-8 hover:bg-yellow-400 transition-all duration-200 py-4 text-[18px] font-bold uppercase bg-[#3498db]  text-black flex items-center space-x-2"
            >
              <p>Social</p>
              <ShareIcon className="h-6 w-6 " />
            </Link>

            <button
              className="px-8 hover:bg-yellow-400 transition-all duration-200 py-4 text-[18px] font-bold uppercase bg-[#55e6a5]  text-black flex items-center space-x-2"
              onClick={handleDownload}
            >
              <p>CV</p>
              <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black " />
            </button>
          </div>
        </div>
        <div className="lg:w-[500px] mx-auto md:mx-0 mt-8 lg-mt-0 lg:h-[500px] w-[300px] h-[300px] relative">
          <Image
            src="/images/working.jpg"
            layout="fill"
            objectFit="contain"
            className="relative z-[11] w-full h-full object-contain"
            alt=""
          />
        </div>
      </div>
      s
    </div>
  );
};

export default About;
