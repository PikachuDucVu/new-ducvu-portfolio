import React from "react";
import SkillsItem from "./SkillsItem";

const Skills = () => {
  return (
    <div className="pt-16 md:pt-32 pb-20 bg-[#09101a] " id="skills">
      <h1 className="heading">CAREER TIMELINE</h1>
      <div className="w-4/5 mx-auto mt-10 md:pt-32 grid grid-cols-1 md:grid-cols-2 gap-[5rem] items-center">
        <div>
          <SkillsItem title="React Developer" year="2020 - 2023" />
          <SkillsItem title="Game Developer" year="2020 - 2023" />
        </div>

        <div>
          <SkillsItem title="React Developer" year="2020 - 2023" />
          <SkillsItem title="Game Developer" year="2020 - 2023" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
