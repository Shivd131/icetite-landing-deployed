import BottomNavbar from "@/components/bottomNavbar/bottomNavbar";
import Navbar from "@/components/navbar/navBar";
import SpeakerGrid from "@/components/speakers/speakerGrid";
import React from "react";

const Speakers = () => {
  return (
    <>
      <Navbar />
      <div className="mx-10 md:mx-20 lg:mx-20">
        <h1 className="text-5xl pt-20 pb-10 font-bold text-[#111042]">
          Our Speakers
        </h1>
        <SpeakerGrid />
      </div>
      <BottomNavbar />
    </>
  );
};

export default Speakers;
