import React from "react";
import Image from "next/image";

const Projects = () => {
  const openProjectLink = (subDomain: string) => {
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
        {[
          { title: "QUIZ APP", src: "/images/quizScreen.png", link: "quiz" },
          { title: "Games Platform", src: "/images/games.png", link: "games" },
          {
            title: "Coming soon",
            src: "/images/p3.jpg",
            opacity: "opacity-40",
          },
        ].map(({ title, src, link, opacity }, index) => (
          <div
            key={index}
            className="flex flex-col transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-full aspect-square"
            onClick={link ? () => openProjectLink(link) : undefined}
          >
            <p className="font-bold text-white text-2xl text-center z-50">
              {title}
            </p>
            <div className="relative w-full h-full">
              <Image
                src={src}
                alt={title}
                layout="fill"
                className={`object-cover ${opacity || ""}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
