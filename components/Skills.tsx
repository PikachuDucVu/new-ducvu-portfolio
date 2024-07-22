import React from "react";
import SkillsItem from "./SkillsItem";

const Skills = () => {
  return (
    <div className="pt-16 md:pt-32 pb-20 bg-[#09101a] " id="skills">
      <h1 className="heading">CAREER TIMELINE</h1>
      <div className="w-4/5 mx-auto mt-10 md:pt-32 grid grid-cols-1 md:grid-cols-2 gap-[5rem] items-center">
        <div>
          <SkillsItem
            title="MindX Technology School"
            year="10/2021 - Present"
            decription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <SkillsItem
            title="IT CLUB - HUMG"
            year="10/2022 - 11/2023"
            decription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>

        <div>
          <SkillsItem
            title="Game Developer"
            year="7/2023 - 12/2023"
            decription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <SkillsItem
            title="React/LLM/WebApp Developer"
            year="12/2023 - Present"
            decription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
