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
          <p>₹ 5,00,000</p>
        </div>
        <div className="text-lg py-10">
          <p>&rarr; Company will be identified as the Title Sponsor for ic-ETITE 2024.</p>
          <p>&rarr; Branding of the Company around the campus during the fest through LED screens (more than 50-60 times a day).</p>
          <p>&rarr; One full page advertisement in the conference program.</p>
          <p>&rarr; Publicity on campus at the Academic Blocks (during Pre-ic-ETITE and all two days of ic-ETITE).</p>
          <p>
            &rarr; Nation-wide circulation of commercials through our online media partners.
          </p>
          <p>
            &rarr; Marketing through standees inside the campus everywhere.
          </p>
          <p>
            &rarr; Speaker time pre/post conference with non-competing program.
          </p>
          <p>
            &rarr; Advertisement on the ic-ETITE’24 website and mobile app.
          </p>
          <p>
            &rarr; Name and Logo on the T-Shirt of the conference.
          </p>
          <p>
            &rarr; Sponsor webpage on conference website, content to be
            delivered by sponsor to specific conference webmaster once approved
            by conference committee.
          </p>
          <p>
            &rarr; Judge for the Technext Exhibition and Bolt hackathon.
          </p>
          <p>
            &rarr; Speaker session and Tailored event during the conference.
          </p>
          <p>
            &rarr; Stalls 10x10 sq ft. for two days.
          </p>
        </div>

        <div className="flex flex-col md:flex-row lg:flex-row items-start justify-between text-2xl">
          <p>Gold Sponsor</p>
          <p>₹ 3,50,000</p>
        </div>
        <div className="text-lg py-10">
          <p>&rarr; Company will be identified as a co-sponsor for ic-ETITE 2024.</p>
          <p>
            &rarr; Branding of the Company around the campus during the fest through LED screens (more than 40-30 times a day).
          </p>
          <p>&rarr; Publicity on campus at the Academic Blocks (during Pre-ic-ETITE and all two days of ic-ETITE).</p>
          <p>
            &rarr; One half page advertisement in specific conference program.
          </p>
          <p>
            &rarr; Nation-wide circulation of commercials through our online media partners.
          </p>
          <p>
            &rarr; Marketing through standees inside the campus everywhere.
          </p>
          <p>
            &rarr; Advertisement on the ic-ETITE’24 website and mobile app
          </p>
          <p>
            &rarr; Marketing through standees inside the campus everywhere.
          </p>
          <p>
            &rarr; Name and Logo on the T-Shirt of the conference.
          </p>
          <p>
            &rarr; Speaker session at the conference.
          </p>
          <p>
            &rarr; Stalls 10x10 sq ft. for two days
          </p>
        </div>

        <div className="flex flex-col md:flex-row lg:flex-row items-start justify-between text-2xl">
          <p>Silver Sponsor</p>
          <p>₹ 2,00,000</p>
        </div>
        <div className="text-lg py-10">
          <p>&rarr; Company will be identified as a sponsor for ic-ETITE 2024. </p>
          <p>&rarr; Branding of the Company around the campus during the fest through LED screens (more than 25-10 times a day). </p>
          <p>
            &rarr; Publicity on campus at the Academic Blocks (during Pre-ic-ETITE and all two days of ic-ETITE).
          </p>
          <p>
            &rarr; Nation-wide circulation of commercials through our online media partners.
          </p>
          <p>
            &rarr; Marketing through standees inside the campus everywhere.
          </p>
          <p>
            &rarr; Advertisement on the ic-ETITE’24 website and mobile app.
          </p>
          <p>
            &rarr; Name and Logo on the T-Shirt of the conference.
          </p>
          <p>
            &rarr; Speaker session at the conference
          </p>
          <p>
            &rarr; Stalls 5x5 sq ft. for one day.
          </p>
        </div>
      </div>
      <BottomNavbar />
    </div>
  );
};

export default Sponsorship;
