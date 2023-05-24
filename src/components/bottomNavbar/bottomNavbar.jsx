import React from "react";
import Icetite from "./../../../public/icons/icetite.png";

import Instagram from "./../../../public/icons/insta.svg";
import Linkedin from "./../../../public/icons/linkedin.svg";
import Facebook from "./../../../public/icons/facebook.svg";
import Email from "./../../../public/icons/email.svg";
import Image from "next/image";

const BottomNavbar = () => {
  return (
    <div className="px-20 bg-[#111042] text-white py-10">
      <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center">
        <div className="flex flex-col items-center w-full md:w-1/4 lg:w-1/4">
          <Image src={Icetite} alt="" className="lg:-translate-x-10 " />
          <div className="flex flex-col items-center md:items-start lg:items-start w-full justify-between text-center  md:text-left lg:text-left  py-10 md:py-0 lg:py-0">
            <h3 className="text-3xl py-8 font-bold">Social Links</h3>
            <div className="flex flex-row justify-between items-center w-full md:w-full lg:w-3/4 space-x-3">
              <Image src={Instagram} alt="" />
              <Image src={Linkedin} alt="" />
              <Image src={Facebook} alt="" />
              <Image src={Email} alt="" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start lg:items-start w-full md:w-1/3 lg:w-1/3 justify-between text-center  md:text-left lg:text-left  py-2 md:py-0 lg:py-0 px-10">
          <h1 className="text-4xl py-8">Address</h1>
          <h4 className="text-xl md:text-xl lg:text-2xl py-8 w-full md:w-full lg:w-2/3">
            Vellore Institute of Technology, Vellore, Tamil Nadu, India. 632014.
          </h4>
        </div>
        <div className="flex flex-col items-center md:items-start lg:items-start w-full md:w-1/3 lg:w-1/3 justify-between text-center md:text-left lg:text-left py-5 md:py-0 lg:py-0">
          <h1 className="text-lg md:text-xl lg:text-3xl py-5">
            Download Brochure
          </h1>
          <div className="py-2"></div>
          <div className="py-5">
            <h1 className="text-lg md:text-xl lg:text-3xl">Download MHA </h1>
            <h1 className="text-lg md:text-xl lg:text-3xl">INDIA, NOC</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomNavbar;