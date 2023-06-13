import BottomNavbar from "@/components/bottomNavbar/bottomNavbar";
import Navbar from "@/components/navbar/navBar";
import React from "react";

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-10 md:mx-20 lg:mx-20">
        <h1 className="text-3xl font-bold text-[#E15326] pt-20 pb-10">
          Get in touch with us
        </h1>

        <h4 className="text-2xl font-bold text-[#111042]">Conference Chair</h4>
        <div className="text-lg flex flex-col md:flex-row lg:flex-row w-[80vw] md:w-[60vw] lg:w-[60vw] justify-between space-x-0 md:space-x-12 py-5 space-y-4 md:space-y-0 lg:space-y-0">
          <div>
            <p>Dr. K. John Singh</p>
            <p>Professor, SITE, VIT, Vellore</p>
          </div>
          <div className="text-left md:text-right lg:text-right">
            <p>+91 9442451035</p>
            <p>johnsingh.k@vit.ac.in</p>
          </div>
        </div>

        <h4 className="text-2xl font-bold text-[#111042]">
          Organizing Secretary
        </h4>
        <div className="text-lg flex flex-col md:flex-row lg:flex-row w-[80vw] md:w-[60vw] lg:w-[60vw] justify-between space-x-0 md:space-x-12 py-5 space-y-4 md:space-y-0 lg:space-y-0">
          <div>
            <p>Dr. P. G. Shynu</p>
            <p>Associate Professor, SITE, VIT, Vellore</p>
          </div>
          <div className="text-left md:text-right lg:text-right">
            <p>+91 9840800396</p>
            <p>pgshynu@vit.ac.in</p>
          </div>
        </div>

        <h4 className="text-2xl font-bold text-[#111042]">Publication Chair</h4>
        <div className="text-lg flex flex-col md:flex-row lg:flex-row w-[80vw] md:w-[60vw] lg:w-[60vw] justify-between space-x-0 md:space-x-12 py-5 space-y-4 md:space-y-0 lg:space-y-0">
          <div>
            <p>Dr. Vijayan.R</p>
            <p>Professor, SITE, VIT, Vellore</p>
          </div>
          <div className="text-left md:text-right lg:text-right">
            <p>+91 9842350596</p>
            <p>rvijayan@vit.ac.in</p>
          </div>
        </div>

        <h4 className="text-2xl font-bold text-[#111042]">Finance Chair</h4>
        <div className="text-lg flex flex-col md:flex-row lg:flex-row w-[80vw] md:w-[60vw] lg:w-[60vw] justify-between space-x-0 md:space-x-12 py-5 pb-10 space-y-4 md:space-y-0 lg:space-y-0">
          <div>
            <p>Dr. Gunasekaran G</p>
            <p>Associate Professor, SITE, VIT, Vellore</p>
          </div>
          <div className="text-left md:text-right lg:text-right">
            <p>+91 9443049982</p>
            <p>ggunasekaran@vit.ac.in</p>
          </div>
        </div>
      </div>
      <BottomNavbar />
    </div>
  );
};

export default ContactUs;
