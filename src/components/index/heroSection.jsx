import React, {useEffect, useState} from "react";

import Image from "next/image";
import BgImage from "./../../../public/images/vit.png";

import IeeeNav from "./../../../public/icons/ieeemadras.png";
import BgImageMobile from "../../../public/images/vit-mobile.png";
import BgImageDesktop from "../../../public/images/vit.png";

const heroSection = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Add event listener for window resize
        window.addEventListener("resize", handleResize);

        // Initial check for mobile on component mount
        handleResize();

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const bgImage = isMobile ? BgImageMobile : BgImageDesktop;

    return (
    <div className="relative h-[92vh] bg-cover z-0">
      <Image
        src={bgImage}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        className="z-10"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#111042] z-20" />
      <div className="absolute top-0 left-0 z-30 text-white mx-8 md:mx-16 lg:mx-16 flex flex-col h-full justify-center w-[80vw] md:w-[70vw] lg:w-[50vw]">
          <Image src={IeeeNav} className="pb-5 w-40 h-auto"/>
          <h1 className="text-2xl md:text-4xl lg:text-4xl font-bold">
          Welcome to ic-ETITE'24!
        </h1>

        <p className="text-xl md:text-2xl lg:text-2xl my-6">
          Second International Conference on Emerging Trends in Information
          Technology and Engineering(ic-ETITE'24)
        </p>
          <p className="text-xl md:text-2xl lg:text-2xl text-white">
          Technically co-sponsored by
      </p>
          <p className="text-2xl md:text-2xl lg:text-2xl mb-6 text-white"><span className="font-bold"> IEEE </span>Madras Section</p>
        <p className="text-xl md:text-2xl lg:text-2xl mt-6 mb-16">
          February 22-23, 2024 at VIT Vellore, India
        </p>
          <a href="https://drive.google.com/file/d/1y31_cGWay-OHGtcst0mo4D5V2A5Msz1j/view?usp=sharing" target="_blank" className="w-fit border-2 border-white bg-transparent bg-white hover:bg-transparent hover:text-white text-[#111042] py-2 px-4 text-base sm:text-lg font-semibold rounded-md shadow z-40 cursor-pointer transition-all">
              Download Brochure
          </a>
      </div>
    </div>
  );
};

export default heroSection;
