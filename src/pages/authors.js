import React, {useEffect, useState} from "react";
import BottomNavbar from "@/components/bottomNavbar/bottomNavbar";
import Navbar from "@/components/navbar/navBar";
import Hero from "./../components/authors/heroSection";
import FormatAndDates from "@/components/authors/formatAndDates";
import Image from "next/image";
import DownArrow from "../../public/icons/downarrow.svg";

const Authors = () => {
  const [selectedButton, setSelectedButton] = useState(
    "Information Technology"
  );
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

  const handleClick = (button) => {
    setSelectedButton(button);
  };

  const renderContent = () => {
    if (selectedButton === "Information Technology") {
      return (
        <div className="flex flex-col px-10 items-start w-full md:w-1/2 text-lg py-10  lg:w-1/2 rounded-md">
          <p>Information Systems</p>
          <p>Information Retrieval</p>
          <p>Cloud Computing</p>
          <p>Cloud Security</p>
          <p>Knowledge Management</p>
          <p>Molecular Information Systems</p>
          <p>Data Management and Visualization</p>
          <p>Cyber-Physical Systems</p>
          <p>Security Systems</p>
          <p>Digital Society</p>
          <p>Big Data Analytics</p>
          <p>Data Mining and Sentiment Analysis</p>
          <p>Social Network Analytics</p>
          <p>Data Sources and Integration</p>
          <p>Distributed, Pervasive, and Embedded Systems Security</p>
          <p>Multimedia and Internet Security</p>
          <p>Image and Video Retrieval</p>
          <p>Web-based Application and Service Security</p>
          <p>Cyber Security</p>
          <p>Network Security and Cryptography</p>
          <p>Digital Forensics</p>
          <p>Biometric Security</p>
          <p>Quantum Cryptography</p>
          <p>Malware Analysis and Detection</p>
          <p>Secure IoT</p>
          <p>Web Ontology</p>
          <p>Web Intelligence</p>
          <p>Search Engines</p>
          <p>Innovative Information Security</p>
          <p>Deep Learning</p>
          <p>E-learning</p>
        </div>
      );
    } else if (selectedButton === "Communication Engineering") {
      return (
        <div className=" flex flex-col px-10 items-start w-full md:w-1/2 lg:w-1/2 py-10  text-black text-lg rounded-md">
            <p>Wireless and Sensor Systems</p>
            <p>Social Networking</p>
            <p>Communication Signal Processing</p>
            <p>Wireless Communications</p>
            <p>Mobile Communication</p>
            <p>Communication Theory and Techniques</p>
            <p>Ad-Hoc Networks</p>
            <p>Innovative Networking and Communication Techniques</p>
            <p>Data Communication</p>
            <p>TV and Sound Broadcasting</p>
            <p>Communication IC Design</p>
            <p>Communication Protocols</p>
            <p>Optical Communications</p>
            <p>Telecommunication Networks</p>
            <p>Radio and Satellite Communications</p>
            <p>Radar, Sonar and Navigation Systems</p>
            <p>Space Technologies</p>
            <p>Zigbee Technology</p>
            <p>Human Area Network</p>
            <p>Next Generation Protocols</p>
            <p>Software Defined Network</p>
            <p>GPRS</p>
            <p>HSPA</p>
            <p>Quantum Communication</p>
            <p>Fiber Optic Communication</p>
            <p>Modeling and Simulation</p>
            <p>Sensor and Micro-Machines</p>
            <p>Wireless Video</p>
            <p>Intelligent Control Systems</p>
            <p>4G & 5G</p>
            <p>Antenna and EMC/EMI</p>
            <p>Aerospace Applications</p>
            <p>Speech Processing</p>
        </div>
      );
    } else if (selectedButton === "Computer Engineering") {
      return (
        <div className=" flex flex-col px-10 items-start w-full md:w-1/2 lg:w-1/2 py-10  text-black text-lg rounded-md">
            <p>Computer Architecture</p>
            <p>Computing for Development</p>
            <p>Cognitive Analysis</p>
            <p>Fuzzy Systems</p>
            <p>Granular Computing</p>
            <p>Modern Operating Systems</p>
            <p>Rough Sets</p>
            <p>Storage Techniques</p>
            <p>User Interfaces</p>
            <p>Next Generation Computing Technologies</p>
            <p>Virtualization</p>
            <p>Pervasive Computing</p>
            <p>Quantum Computing</p>
            <p>Human-Computer Interaction and Accessible Technology</p>
            <p>Machine Learning</p>
            <p>Computational Intelligence</p>
            <p>Natural Language Processing</p>
            <p>Programming Languages and Software Engineering</p>
            <p>Systems and Networking</p>
            <p>Theory of Computation</p>
            <p>Ubiquitous Computing</p>
            <p>Artificial Intelligence</p>
            <p>Augmented and Virtual Reality</p>
            <p>Computer Graphics, Vision, Animation, and Game Science</p>
        </div>
      );
    } else if (selectedButton === "Electronics Engineering") {
      return (
        <div className="flex flex-col px-10 items-start w-full md:w-1/2 lg:w-1/2 py-10 text-black text-lg rounded-md">
            <p>Fabrication</p>
            <p>Robotics</p>
            <p>Digital Image/Signal Processing</p>
            <p>VLSI/Embedded systems</p>
            <p>Microprocessor Based Technologies</p>
            <p>Applied Electromagnetics and RF Circuits</p>
            <p>Control Systems</p>
            <p>MEMS and Microsystems</p>
            <p>Optics and Photonics</p>
            <p>Plasma Science and Engineering</p>
            <p>Power and Energy</p>
            <p>Quantum Science and Technology</p>
            <p>Solid-State Devices and Nanotechnology</p>
            <p>Antenna and Wave Propagation</p>
            <p>Intelligent Systems Architectures and Applications</p>
            <p>Microelectronics</p>
            <p>Nano-electronics</p>
            <p>Power Electronics</p>
            <p>Signal and System Theory</p>
            <p>Solar Technology</p>
            <p>Network Theory</p>
            <p>Modulation Techniques</p>
            <p>Source and Channel Coding</p>
            <p>Switching Theory and Techniques</p>
            <p>Microwave Theory and Techniques</p>
            <p>Wave Propagation</p>
            <p>Measurement and Instrumentation</p>
            <p>Circuit Design</p>
            <p>Simulation and CAD</p>
            <p>Microwaves, Antennas and Radio Propagation</p>
            <p>Optoelectronics</p>
            <p>Electromagnetic Compatibility</p>
            <p>Digital Governance</p>
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
          <a
              className="fixed text-3xl cursor-pointer bottom-5 right-5 h-14 w-14 border-4 bg-blue-900 border-[#E7F4FF] py-2 px-3 rounded-full scrollbutton flex flex-col items-center justify-center"
              onClick={scrollToTop}
          >
              <Image src={DownArrow} alt="" className="rotate-180"/>
          </a>

        <div className="flex flex-col md:flex-row lg:flex-row space-x-0 md:space-x-10 lg:space-x-10 text-white font-bold">
          <button
            className={`px-10 py-3 ${
              selectedButton === "Information Technology"
                ? "bg-[#ea0763]"
                : "bg-[#ea0763]"
            } font-medium w-full md:w-[40rem] lg:w-[40rem] text-lg my-2 rounded-md`}
            onClick={() => handleClick("Information Technology")}
          >
            Information Technology
          </button>
          <button
            className={`px-10 py-3 ${
              selectedButton === "Communication Engineering"
                ? "bg-[#ea0763]"
                : "bg-[#ea0763]"
            } font-medium w-full md:w-[40rem] lg:w-[40rem] text-lg my-2 rounded-md`}
            onClick={() => handleClick("Communication Engineering")}
          >
            Communication Engineering
          </button>
          <button
            className={`px-10 py-3 ${
              selectedButton === "Computer Engineering"
                ? "bg-[#ea0763]"
                : "bg-[#ea0763]"
            } font-medium w-full md:w-[40rem] lg:w-[40rem] text-lg my-2 rounded-md`}
            onClick={() => handleClick("Computer Engineering")}
          >
            Computer Engineering
          </button>
          <button
            className={`px-10 py-3 ${
              selectedButton === "Electronics Engineering"
                ? "bg-[#ea0763]"
                : "bg-[#ea0763]"
            } text-lg my-2 font-medium w-full md:w-[40rem] lg:w-[40rem] rounded-md`}
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
