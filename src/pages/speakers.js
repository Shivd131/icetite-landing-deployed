import BottomNavbar from "@/components/bottomNavbar/bottomNavbar";
import Navbar from "@/components/navbar/navBar";
import SpeakerGrid from "@/components/speakers/speakerGrid";
import React, {useEffect, useState} from "react";
import Image from "next/image";
import DownArrow from "../../public/icons/downarrow.svg";

const Speakers = () => {

    const [showScrollToTop, setShowScrollToTop] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShowScrollToTop(true);
            } else {
                setShowScrollToTop(false);
            }
        };

        // Call handleResize initially and add event listener for window resize
        window.addEventListener("scroll", handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
  return (
    <>
      <Navbar />
        <a
            className="fixed text-3xl cursor-pointer bottom-5 right-5 h-14 w-14 border-4 bg-blue-900 border-[#E7F4FF] py-2 px-3 rounded-full scrollbutton flex flex-col items-center justify-center"
            onClick={scrollToTop}
        >
            <Image src={DownArrow} alt="" className="rotate-180"/>
        </a>

        <div className="mx-10 md:mx-20 lg:mx-20">
        <h1 className="text-3xl pt-20 pb-10 font-bold text-[#111042]">
          Our Speakers
        </h1>
        <SpeakerGrid />
      </div>
      <BottomNavbar />
    </>
  );
};

export default Speakers;
