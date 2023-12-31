import React, { useEffect, useState } from "react";
import Image from "next/image";
import BgImageDesktop from "./../../../public/images/vit.png";
import BgImageMobile from "./../../../public/images/vit-mobile.png";
import IeeeNav from "../../../public/icons/ieeemadras.png";

const HeroSection = () => {
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
        <div className="relative h-[85vh] md:h-[90vh] bg-cover z-0">
            <Image
                src={bgImage}
                alt="Background Image"
                layout="fill"
                objectFit="cover"
                className="z-10"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#111042] z-20" />
            <div className="absolute top-0 left-0 p-5 z-30 text-white mx-5 flex flex-col h-full justify-center w-[80vw] md:w-[70vw] lg:w-[50vw]">
                <div className="py-3"></div>
                <h1 className="text-3xl md:text-3xl lg:text-3xl font-bold">
                    Registration Guidelines for ic-ETITE'24
                </h1>
                <div className="py-3"></div>
                <div className="flex flex-col md:flex-row lg:flex-row space-x-0 md:space-x-5 lg:space-x-5 py-3 space-y-4 md:space-y-0 lg:space-y-0 ">
                    
                    <a href="https://events.vit.ac.in/events/ICETITE" target="_blank" rel="noopener noreferrer" className="text-center border-2 border-white bg-transparent hover:bg-white text-white hover:text-[#111042] py-2 px-4 text-base sm:text-lg font-semibold rounded-md shadow z-40 cursor-pointer transition-all w-full md:w-96 lg:w-96">
                        Click here Register For Indian Authors/Participants
                    </a>
                    <a href="https://events.vit.ac.in/events/ICETITE/foreign" target="_blank" rel="noopener noreferrer" className="text-center border-2 border-white bg-transparent hover:bg-white text-white hover:text-[#111042] py-2 px-4 text-base sm:text-lg font-semibold rounded-md shadow z-40 cursor-pointer transition-all w-full md:w-96 lg:w-96">
                        Click here Register For Foreign Authors/Participants
                    </a>
                    
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
