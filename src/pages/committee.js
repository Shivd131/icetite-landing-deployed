import React, { useState } from "react";
import BottomNavbar from "@/components/bottomNavbar/bottomNavbar";
import Navbar from "@/components/navbar/navBar";

const Committee = () => {
  const [selectedButton, setSelectedButton] = useState(
    "Information Technology"
  );

  const handleClick = (button) => {
    setSelectedButton(button);
  };

  const renderContent = () => {
    if (selectedButton === "Information Technology") {
      return (
        <div className="bg-orange flex flex-col items-center w-full md:w-1/2 lg:w-1/2 text-white bg-[#111042] space-y-5 py-10 rounded-md">
          <p>Mr. Sankar Viswanathan, Vice President, VIT </p>
          <p>Mr. Sankar Viswanathan, Vice President, VIT </p>
          {/* Add more items here */}
        </div>
      );
    } else if (selectedButton === "Communication Engineering") {
      return (
        <div className="bg-orange flex flex-col items-center w-full md:w-1/2 lg:w-1/2 text-white bg-[#111042] space-y-5 py-10 rounded-md">
          <p>Dr. Sekar Viswanathan, Vice President, VIT </p>
          <p>Dr. Sekar Viswanathan, Vice President, VIT </p>
          {/* Add more items here */}
        </div>
      );
    } else if (selectedButton === "Computer Engineering") {
      return (
        <div className="bg-orange flex flex-col items-center w-full md:w-1/2 lg:w-1/2 text-white bg-[#111042] space-y-5 py-10 rounded-md">
          <p>Mr. G.V. Selvam, Vice President, VIT</p>
          <p>Mr. G.V. Selvam, Vice President, VIT</p>
        </div>
      );
    } else if (selectedButton === "Electronics Engineering") {
      return (
        <div className="bg-orange flex flex-col items-center w-full md:w-1/2 lg:w-1/2 text-white bg-[#111042] space-y-5 py-10 rounded-md">
          <p>Dr. Jayabarathi T, Registrar i/c, VIT</p>
          <p>Dr. Jayabarathi T, Registrar i/c, VIT</p>
          {/* Add more items here */}
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      <Navbar />

      <div className="mx-20">
        <h1 className="text-5xl font-bold text-[#E15326] pt-20 pb-10">
          Organizing Committee
        </h1>
        <h1 className="text-3xl font-bold text-[#E15326] py-10">
          Chief Patron
        </h1>
        <p className="text-xl">
          <span className="font-bold">Dr. G. Viswanathan,</span> Chancellor, VIT
        </p>
        <h1 className="text-3xl font-bold text-[#E15326] py-10">
          Chief Patron
        </h1>
        <p className="text-xl">
          <span className="font-bold">Mr. Sankar Viswanathan,</span> Vice
          President, VIT{" "}
        </p>
        <p className="text-xl">
          <span className="font-bold">Dr. Sekar Viswanathan,</span> Vice
          President, VIT{" "}
        </p>
        <p className="text-xl">
          <span className="font-bold">Mr. G.V. Selvam,</span> Vice President,
          VIT
        </p>
        <p className="text-xl">
          <span className="font-bold">Dr. Rambabu Kodali,</span> Vice -
          Chancellor, VIT
        </p>
        <p className="text-xl">
          <span className="font-bold">Dr. S. Narayanan,</span>
          Pro-Vice Chancellor, VIT, Vellore
        </p>
        <p className="text-xl">
          <span className="font-bold">Dr. Jayabarathi T,</span> Registrar i/c,
          VIT
        </p>
        <div className="flex flex-col md:flex-row lg:flex-row space-x-0 md:space-x-10 lg:space-x-10 py-20 font-semibold">
          <button
            className={`px-10 py-10 ${
              selectedButton === "Information Technology"
                ? "bg-[#111042] text-white"
                : "bg-[#46C6ED] text-black"
            } text-xl font-medium w-full md:w-[40rem] lg:w-[40rem] my-5 rounded-md`}
            onClick={() => handleClick("Information Technology")}
          >
            Organizing Chair
          </button>
          <button
            className={`px-10 py-10 ${
              selectedButton === "Communication Engineering"
                ? "bg-[#111042] text-white"
                : "bg-[#46C6ED] text-black"
            } text-xl font-medium w-full md:w-[40rem] lg:w-[40rem] my-5 rounded-md`}
            onClick={() => handleClick("Communication Engineering")}
          >
            International Advisory
          </button>
          <button
            className={`px-10 py-10 ${
              selectedButton === "Computer Engineering"
                ? "bg-[#111042] text-white"
                : "bg-[#46C6ED] text-black"
            } text-xl font-medium w-full md:w-[40rem] lg:w-[40rem] my-5 rounded-md`}
            onClick={() => handleClick("Computer Engineering")}
          >
            National Advisory
          </button>
          <button
            className={`px-10 py-10 ${
              selectedButton === "Electronics Engineering"
                ? "bg-[#111042] text-white"
                : "bg-[#46C6ED] text-black"
            } text-xl font-medium w-full md:w-[40rem] lg:w-[40rem] my-5 rounded-md`}
            onClick={() => handleClick("Electronics Engineering")}
          >
            Technical Committee
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

export default Committee;
