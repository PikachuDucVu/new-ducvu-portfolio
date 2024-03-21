import React from "react";
import SkillsItem from "./SkillsItem";
import SkillsLanguage from "./SkillsLanguage";

const Skills = () => {
  return (
    <div className="pt-16 md:pt-32 pb-20 bg-[#09101a]">
      <h1 className="heading">Education & Skills</h1>
      <div className="w-4/5 mx-auto mt-16 md:pt-32 grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
        <div>
          <SkillsItem title="React Developer" year="2020 - 2023" />
          <SkillsItem title="Game Developer" year="2020 - 2023" />
          <SkillsLanguage
            skill1="html"
            skill2="css"
            skill3="js"
            level1="w-3/4"
            level2="w-3/4"
            level3="w-3/4"
          />
        </div>

        <div>
          <SkillsItem title="React Developer" year="2020 - 2023" />
          <SkillsItem title="Game Developer" year="2020 - 2023" />
          <SkillsLanguage
            skill1="html"
            skill2="css"
            skill3="js"
            level1="w-3/4"
            level2="w-3/4"
            level3="w-3/4"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
