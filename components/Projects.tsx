import React from "react";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="bg-[#02050a] pt-16 md:pt-32 pb-4" id="projects">
      <h1 className="heading">
        Pro<span className="text-yellow-400">ject</span>
      </h1>
      <div className="w-4/5 pt-8 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-full h-[200px] md:h-[300px]">
            <Image
              src="/images/p1.jpg"
              alt=""
              layout="fill"
              className="object-contain"
            />
          </div>
        </div>
        <div>
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-full h-[200px] md:h-[300px]">
            <Image
              src="/images/p2.jpg"
              alt=""
              layout="fill"
              className="object-contain"
            />
          </div>
        </div>
        <div>
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-full h-[200px] md:h-[300px]">
            <Image
              src="/images/p3.jpg"
              alt=""
              layout="fill"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
