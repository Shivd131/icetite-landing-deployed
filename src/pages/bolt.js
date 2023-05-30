import React from "react";
import Navbar from "@/components/navbar/navBar";
import BottomNavbar from "@/components/bottomNavbar/bottomNavbar";

const Bolt = () => {
  return (
      <div>
          <Navbar />
          <div className="h-[80vh] flex flex-col items-center justify-center">
              "Page Under Development"
          </div>
          <BottomNavbar />
      </div>
  );
};

export default Bolt;
