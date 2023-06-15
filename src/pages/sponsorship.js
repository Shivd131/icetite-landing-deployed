import BottomNavbar from "@/components/bottomNavbar/bottomNavbar";
import Navbar from "@/components/navbar/navBar";
import React, {useEffect, useState} from "react";
import Image from "next/image";
import DownArrow from "../../public/icons/downarrow.svg";

const Sponsorship = () => {
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
      <div className="mx-10 md:mx-20 lg:mx-20">
        <h1 className="text-3xl font-bold text-[#E15326] pt-20 pb-10">
          Sponsorship
        </h1>
        <div className="flex flex-col md:flex-row lg:flex-row items-start justify-between text-2xl">
          <p>Platinum Sponsor</p>
          <p>₹ 1,00,000</p>
        </div>
        <div className="text-lg py-10">
          <p>&rarr; All benefits of Gold Sponsor.</p>
          <p>&rarr; One special demonstration display area.</p>
          <p>&rarr; One full page advertisement in the conference program.</p>
          <p>&rarr; Permanent recognition in conference proceedings.</p>
          <p>
            &rarr; Prominent recognition in the conference programs (front/back
            covers).
          </p>
          <p>
            &rarr; Ability to distribute Information in attendee registration
            packets.
          </p>
          <p>
            &rarr; Speaker time pre/post conference with non-competing program.
          </p>
          <p>
            &rarr; Facility space that may be setup for tabs/hands on workshops
            pre/post program.
          </p>
          <p>
            &rarr; Ability to submit articles of interest in the pre-conference
            e-mail to attendees.
          </p>
          <p>
            &rarr; Sponsor webpage on conference website, content to be
            delivered by sponsor to specific conference webmaster once approved
            by conference committee.
          </p>
        </div>

        <div className="flex flex-col md:flex-row lg:flex-row items-start justify-between text-2xl">
          <p>Gold Sponsor</p>
          <p>₹ 50,000</p>
        </div>
        <div className="text-lg py-10">
          <p>&rarr; All benefits of Silver Sponsor.</p>
          <p>
            &rarr; Two additional corporate registrations for the conference.
          </p>
          <p>&rarr; One booth in the conference registration area.</p>
          <p>
            &rarr; One half page advertisement in specific conference program.
          </p>
          <p>
            &rarr; Ability to sponsor additional conference items such as
            workshops, receptions, programs, etc. with proper recognition in all
            program materials and conference website.
          </p>
          <p>
            &rarr; Logo presence on conference website with a hotlink to your
            organization's website.
          </p>
        </div>

        <div className="flex flex-col md:flex-row lg:flex-row items-start justify-between text-2xl">
          <p>Silver Sponsor</p>
          <p>₹ 25,000</p>
        </div>
        <div className="text-lg py-10">
          <p>&rarr; Recognition in the conference programs.</p>
          <p>&rarr; One quarter page advertisement in conference program.</p>
          <p>
            &rarr; Permanent recognition in specific conference proceedings.
          </p>
          <p>
            &rarr; Recognition of the firm's representatives at the conference,
            with the opportunity to meet and interact with internationally
            recognized figures in the Information Technology and Engineering
            field.
          </p>
          <p>
            &rarr; A private reception at the conference exclusively for
            sponsors and members of the Conference committee.
          </p>
        </div>
      </div>
      <BottomNavbar />
    </div>
  );
};

export default Sponsorship;
