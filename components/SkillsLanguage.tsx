import React from "react";

const SkillsLanguage = ({
  level1,
  level2,
  level3,
  skill1,
  skill2,
  skill3,
}: {
  level1: string;
  level2: string;
  level3: string;
  skill1: string;
  skill2?: string;
  skill3?: string;
}) => {
  return (
    <div>
      <div className="relative mb-12">
        <h1 className="p-5 w-full uppercase bg-gray-800 rounded-sm text-white text-xl font-bold">
          {skill1}
        </h1>
        <span
          className={`${level1} bottom-0 h-[6px] absolute bg-[#55e6a5]`}
        ></span>
      </div>
      <div className="relative mb-12">
        <h1 className="p-5 w-full uppercase bg-gray-800 rounded-sm text-white text-xl font-bold">
          {skill2}
        </h1>
        <span
          className={`${level2} bottom-0 h-[6px] absolute bg-[#55e6a5]`}
        ></span>
      </div>
      <div className="relative mb-12">
        <h1 className="p-5 w-full uppercase bg-gray-800 rounded-sm text-white text-xl font-bold">
          {skill3}
        </h1>
        <span
          className={`${level3} bottom-0 h-[6px] absolute bg-[#55e6a5]`}
        ></span>
      </div>
    </div>
  );
};

export default SkillsLanguage;
