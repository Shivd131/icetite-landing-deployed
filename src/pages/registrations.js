import BottomNavbar from "@/components/bottomNavbar/bottomNavbar";
import Hero from "./../components/registrations/heroSection";
import Navbar from "@/components/navbar/navBar";
import React, {useEffect, useState} from "react";
import Image from "next/image";
import DownArrow from "../../public/icons/downarrow.svg";

const Registrations = () => {
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
    <div>
      <Navbar />
        <a
            className="fixed text-3xl cursor-pointer bottom-5 right-5 h-14 w-14 border-4 bg-blue-900 border-[#E7F4FF] py-2 px-3 rounded-full scrollbutton flex flex-col items-center justify-center"
            onClick={scrollToTop}
        >
            <Image src={DownArrow} alt="" className="rotate-180"/>
        </a>
      <Hero />
        <div className="text-white p-4 overflow-x-auto">
            <table className="w-full border-collapse table-auto bg-[#111042]">
                <thead>
                <tr>
                    <th className="border border-white py-2 px-4 font-bold text-lg" colSpan={0}>Category</th>
                    <th className="border border-white py-2 px-4" colSpan={2}>Indian authors and delegates</th>
                    <th className="border border-white py-2 px-4" colSpan={2}>Foreign authors and delegates</th>
                </tr>
                <tr>
                    <th className="border border-white py-2 px-4 font-bold text-lg"></th>
                    <th className="border border-white py-2 px-4">Standard Rates (From 6th January 2024)</th>
                    <th className="border border-white py-2 px-4">Early Bird Rates (Upto 5th January 2024)</th>
                    <th className="border border-white py-2 px-4">Standard Rates (From 6th January 2024)</th>
                    <th className="border border-white py-2 px-4">Early Bird Rates (Upto 5th January 2024)</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="border border-white py-2 px-4 text-center">Industry Professionals</td>
                    <td className="border border-white py-2 px-4 text-center">Rs. 9000</td>
                    <td className="border border-white py-2 px-4 text-center">Rs. 10000</td>
                    <td className="border border-white py-2 px-4 text-center">250$</td>
                    <td className="border border-white py-2 px-4 text-center">300$</td>
                </tr>
                <tr>
                    <td className="border border-white py-2 px-4 text-center">Faculty / Academicians</td>
                    <td className="border border-white py-2 px-4 text-center">Rs. 8000</td>
                    <td className="border border-white py-2 px-4 text-center">Rs. 8000</td>
                    <td className="border border-white py-2 px-4 text-center">200$</td>
                    <td className="border border-white py-2 px-4 text-center">250$</td>
                </tr>
                <tr>
                    <td className="border border-white py-2 px-4 text-center">Faculty / Academicians (IEEE Members)</td>
                    <td className="border border-white py-2 px-4 text-center">Rs. 6000</td>
                    <td className="border border-white py-2 px-4 text-center">Rs. 7000</td>
                    <td className="border border-white py-2 px-4 text-center">175$</td>
                    <td className="border border-white py-2 px-4 text-center">225$</td>
                </tr>
                <tr>
                    <td className="border border-white py-2 px-4 text-center">Research Scholars, UG and PG Students</td>
                    <td className="border border-white py-2 px-4 text-center">Rs. 5000</td>
                    <td className="border border-white py-2 px-4 text-center">Rs. 6000</td>
                    <td className="border border-white py-2 px-4 text-center">150$</td>
                    <td className="border border-white py-2 px-4 text-center">200$</td>
                </tr>
                <tr>
                    <td className="border border-white py-2 px-4 text-center">Research Scholars, UG and PG Students (IEEE Members)</td>
                    <td className="border border-white py-2 px-4 text-center">Rs. 4000</td>
                    <td className="border border-white py-2 px-4 text-center">Rs. 5000</td>
                    <td className="border border-white py-2 px-4 text-center">125$</td>
                    <td className="border border-white py-2 px-4 text-center">175$</td>
                </tr>
                <tr>
                    <td className="border border-white py-2 px-4 text-center">VIT (internal)</td>
                    <td className="border border-white py-2 px-4 text-center">Rs. 3000</td>
                    <td className="border border-white py-2 px-4 text-center">Rs. 4000</td>
                    <td className="border border-white py-2 px-4 text-center"> -- </td>
                    <td className="border border-white py-2 px-4 text-center"> -- </td>
                </tr>
                <tr>
                    <td className="border border-white py-2 px-4 text-center">Co-Authors / Participants (non-authors)</td>
                    <td className="border border-white py-2 px-4 text-center">Rs. 2000</td>
                    <td className="border border-white py-2 px-4 text-center">Rs. 6000</td>
                    <td className="border border-white py-2 px-4 text-center">50$</td>
                    <td className="border border-white py-2 px-4 text-center">100$</td>
                </tr>
                </tbody>
            </table>
        </div>
      <BottomNavbar />
    </div>
  );
};

export default Registrations;
