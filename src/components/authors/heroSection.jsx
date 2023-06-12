import React from "react";

import Image from "next/image.js";
import BgImage from "./../../../public/images/vit.png";
import IeeeNav from "../../../public/icons/ieeemadras.png";

const heroSection = () => {
  return (
    <div className="relative h-[70vh] bg-cover z-0">
      <Image
        src={BgImage}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        className="z-10"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#111042] z-20" />
      <div className="absolute top-0 left-0 p-5 z-30 text-white mx-16 flex flex-col h-full justify-center w-[80vw] md:w-[70vw] lg:w-[50vw]">
        <Image src={IeeeNav} className="pb-10"/>
        <h1 className="text-3xl md:text-3xl lg:text-3xl font-bold">
          Paper Submission
        </h1>
        <p className="text-2xl md:text-2xl lg:text-2xl my-6">
          All presented papers in the conference will be submitted to IEEE for
          possible publication in the IEEE Xplore® digital library.
        </p>
          <p className="font-bold text-orange-600 text-xl">IEEE Xplore ISBN: 979-8-3503-2820-2 </p>
          <p className="font-bold text-orange-600 text-xl"> USB ISBN: 979-8-3503-2819-6</p>
        <p className="text-xl md:text-2xl lg:text-xl my-6">
          Extended version of selected papers will be recommended for
          publication in Scopus indexed journals.
        </p>

        <div className="flex flex-col md:flex-row lg:flex-row space-x-0 md:space-x-5 lg:space-x-5 py-3 space-y-4 md:space-y-0 lg:space-y-0 ">
          <a className="border-2 border-white bg-transparent hover:bg-white text-center text-white hover:text-[#111042] py-2 px-4 text-base sm:text-lg font-semibold rounded-md shadow z-40 cursor-pointer transition-all w-full md:w-96 lg:w-96" target="_blank" href="https://cmt3.research.microsoft.com/icETITE2024">
            Submission Link
          </a>
        </div>
      </div>
    </div>
  );
};

export default heroSection;
