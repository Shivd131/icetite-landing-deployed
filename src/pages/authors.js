import React, { useState } from "react";
import BottomNavbar from "@/components/bottomNavbar/bottomNavbar";
import Navbar from "@/components/navbar/navBar";
import Hero from "./../components/authors/heroSection";
import FormatAndDates from "@/components/authors/formatAndDates";

const Authors = () => {
  const [selectedButton, setSelectedButton] = useState(
    "Information Technology"
  );

  const handleClick = (button) => {
    setSelectedButton(button);
  };

  const renderContent = () => {
    if (selectedButton === "Information Technology") {
      return (
        <div className="bg-orange flex flex-col items-center w-full md:w-1/2 lg:w-1/2 text-black bg-[#ff794f] space-y-5 py-10 rounded-md">
          <p>Information Systems</p>
          <p>Information Retrieval</p>
          {/* Add more items here */}
        </div>
      );
    } else if (selectedButton === "Communication Engineering") {
      return (
        <div className="bg-orange flex flex-col items-center w-full md:w-1/2 lg:w-1/2 text-black bg-[#ff794f] space-y-5 py-10 rounded-md">
          <p>Knowledge Management</p>
          <p>Molecular Information Systems</p>
          {/* Add more items here */}
        </div>
      );
    } else if (selectedButton === "Computer Engineering") {
      return (
        <div className="bg-orange flex flex-col items-center w-full md:w-1/2 lg:w-1/2 text-black bg-[#ff794f] space-y-5 py-10 rounded-md">
          <p>Data Management and Visualization</p>
          <p>Cyber-Physical Systems</p>
          {/* Add more items here */}
        </div>
      );
    } else if (selectedButton === "Electronics Engineering") {
      return (
        <div className="bg-orange flex flex-col items-center w-full md:w-1/2 lg:w-1/2 text-black bg-[#ff794f] space-y-5 py-10 rounded-md">
          <p>Security Systems</p>
          <p>Digital Society</p>
          {/* Add more items here */}
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="mx-20">
        <FormatAndDates />

        <div className="flex flex-col md:flex-row lg:flex-row space-x-0 md:space-x-10 lg:space-x-10 py-20 font-semibold">
          <button
            className={`px-10 py-10 ${
              selectedButton === "Information Technology"
                ? "bg-[#FA5E2E]"
                : "bg-[#FF794F]"
            } text-xl font-medium w-full md:w-[40rem] lg:w-[40rem] my-5 rounded-md`}
            onClick={() => handleClick("Information Technology")}
          >
            Information Technology
          </button>
          <button
            className={`px-10 py-10 ${
              selectedButton === "Communication Engineering"
                ? "bg-[#FA5E2E]"
                : "bg-[#FF794F]"
            } text-xl font-medium w-full md:w-[40rem] lg:w-[40rem] my-5 rounded-md`}
            onClick={() => handleClick("Communication Engineering")}
          >
            Communication Engineering
          </button>
          <button
            className={`px-10 py-10 ${
              selectedButton === "Computer Engineering"
                ? "bg-[#FA5E2E]"
                : "bg-[#FF794F]"
            } text-xl font-medium w-full md:w-[40rem] lg:w-[40rem] my-5 rounded-md`}
            onClick={() => handleClick("Computer Engineering")}
          >
            Computer Engineering
          </button>
          <button
            className={`px-10 py-10 ${
              selectedButton === "Electronics Engineering"
                ? "bg-[#FA5E2E]"
                : "bg-[#FF794F]"
            } text-xl font-medium w-full md:w-[40rem] lg:w-[40rem] my-5 rounded-md`}
            onClick={() => handleClick("Electronics Engineering")}
          >
            Electronics Engineering
          </button>
        </div>
        <div className="flex flex-col items-center mb-10 text-2xl">
          {renderContent()}
        </div>
      </div>
      <BottomNavbar />
    </div>
  );
};

export default Authors;
