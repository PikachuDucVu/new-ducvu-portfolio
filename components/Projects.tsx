import React from "react";
import Image from "next/image";

const Projects = () => {
  const handleRedirectToProject = (subDomain: string) => {
    const hostname = window.location.hostname;

    if (hostname === "localhost") {
      const domain = "ducvu.name.vn";
      window.open(`https://${subDomain}.${domain}`, "_blank");
      return;
    }
    window.open(`https://${subDomain}.${hostname}`, "_blank");
  };

  return (
    <div className="bg-[#02050a] pt-16 md:pt-32 pb-4" id="projects">
      <h1 className="heading">
        Pro<span className="text-yellow-400">ject</span>
      </h1>
      <div className="w-4/5 pt-8 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="">
          <div
            className="flex flex-col transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-full h-[250px] md:h-[350px] gap-10"
            onClick={() => {
              handleRedirectToProject("demo");
            }}
          >
            <p className="font-bold text-white text-2xl text-center">
              Shop Example
            </p>
            <Image
              src="/images/p1.jpg"
              alt=""
              layout="fill"
              className="object-contain"
            />
          </div>
        </div>
        <div>
          <div className="flex flex-col transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-full h-[250px] md:h-[350px] gap-10">
            <p className="font-bold text-white text-2xl text-center">
              Coming soon
            </p>
            <Image
              src="/images/p2.jpg"
              alt=""
              layout="fill"
              className="opacity-40 object-contain"
            />
          </div>
        </div>
        <div>
          <div className="flex flex-col transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-full h-[250px] md:h-[350px] gap-10">
            <p className="font-bold text-white text-2xl text-center ">
              Coming soon
            </p>
            <Image
              src="/images/p3.jpg"
              alt=""
              layout="fill"
              className="object-contain opacity-40"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
