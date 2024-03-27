import { DevicePhoneMobileIcon, EnvelopeIcon } from "@heroicons/react/20/solid";
import React from "react";

const Footer = () => {
  return (
    <div className="pt-32 pb-16 bg-[#02050a]" id="contact">
      <h1 className="heading p-10 -ml-10">
        Con<span className="text-yellow-400 o">tact </span>
      </h1>
      <div className="grid border-b-[1px] pb-24 border-gray-400 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-4/5 mx-auto gap-12">
        <div className="flex items-center space-x-6">
          <div className="md:w-[6.5rem] md:h-[6.5rem] w-20 h-20 flex items-center justify-center rounded-full bg-[#55e6a5]">
            <EnvelopeIcon className="md:w-[5rem] md:h-[5rem] w-14 h-14 text-black" />
          </div>
          <div>
            <h1 className="text-[25px] mb-1 font-semibold text-white">
              Social | Email
            </h1>
            <a
              href="https://www.facebook.com/pikachu.dvu/"
              className="text-[16px] w-full text-white opacity-75 nav-link transition-all duration-200 font-normal "
            >
              Facebook: <span className="font-bold">@pikachu.dvu</span>
            </a>

            <a
              href="mailto:ducvubn1@gmail.com"
              className="text-[16px] w-full text-white opacity-75 nav-link transition-all duration-200 font-normal text-md"
            >
              Email: <span className="font-bold">ducvubn1@gmail.com</span>
            </a>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <div className="md:w-[6.5rem] md:h-[6.5rem] w-20 h-20 flex items-center justify-center rounded-full bg-[#55e6a5]">
            <DevicePhoneMobileIcon className="md:w-[5rem] md:h-[5rem] w-14 h-14 text-black" />
          </div>
          <div>
            <h1 className="text-[25px] mb-1 font-semibold text-white">
              Zalo | Phone number
            </h1>
            <p className="text-[16px] w-[90%] text-white opacity-75 ">
              Private
            </p>
            <p className="text-[16px] w-[90%] text-white opacity-75 ">
              Private
            </p>
          </div>
        </div>
      </div>

      <div className="w-4/5 mt-8 mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-between">
        <div className="text-lg mb-8 md:mb-0 text-white opacity-20">
          Developed by Tran Duc Vu | All Rights Reserved
        </div>
        <div className="flex items-center space-x-10 justify-end">
          <p className="text-lg text-white opacity-20">Terms & Condition</p>
          <p className="text-lg text-white opacity-20">Privacy Policy</p>
          <p className="text-lg text-white opacity-20">Sitemap</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
