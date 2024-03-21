import React from "react";

const SkillsItem = ({
  title,
  year,
  decription,
}: {
  title: string;
  year: string;
  decription?: string;
}) => {
  return (
    <div className="mb-16 md:mb-32">
      <span className="px-8 text-[#55e6a5] py-[0.9rem] font-bold text-lg border-2 border-[#55e6a5]">
        {year}
      </span>
      <h1 className="mt-8 capitalize font-semibold mb-4 text-xl sm:text-[25px] md:text-[30px] text-white">
        {title}
      </h1>
      <p className="text-[#aaaaaa] font-normal w-4/5 text-[17px] opacity-80">
        {decription}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sint,
        vero magni nemo veniam assumenda expedita ducimus. Consequatur cumque
        hic, molestias nam delectus quaerat possimus?
      </p>
    </div>
  );
};

export default SkillsItem;
