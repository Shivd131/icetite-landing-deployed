import Navbar from "./../components/navbar/navBar.jsx";
import BottomNavbar from "./../components/bottomNavbar/bottomNavbar.jsx";
import Image from "next/image.js";
import YourImage from "./../../public/images/vit.png";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="relative h-screen sm:h-[60vh] bg-cover -z-10">
        <Image
          src={YourImage}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#11104280] via-transparent z-10" />
        <div className="absolute top-0 left-0 p-5 z-20 text-white">
          <h1 className="text-3xl sm:text-5xl font-bold">Your Heading Text</h1>
          <p className="text-sm sm:text-base mt-2">Your Description</p>
        </div>
        <button className="absolute right-5 bottom-5 bg-white text-[#111042] py-2 px-4 text-base sm:text-lg font-semibold rounded-md shadow z-20">
          Download Brochure Now
        </button>
      </div>
      <BottomNavbar />
    </main>
  );
}
