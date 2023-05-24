import BottomNavbar from "@/components/bottomNavbar/bottomNavbar";
import Hero from "./../components/registrations/heroSection";
import Navbar from "@/components/navbar/navBar";
import React from "react";

const Registrations = () => {
  return (
    <div>
      <Navbar />
      <Hero />

      <BottomNavbar />
    </div>
  );
};

export default Registrations;
