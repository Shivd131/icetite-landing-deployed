import BottomNavbar from "@/components/bottomNavbar/bottomNavbar";
import Navbar from "@/components/navbar/navBar";
import React, {useEffect, useState} from "react";

import Img1 from "./../../public/images/icetite20/img1.png";
import Img2 from "./../../public/images/icetite20/img2.png";
import Img3 from "./../../public/images/icetite20/img3.png";
import Img4 from "./../../public/images/icetite20/img4.png";
import Img5 from "./../../public/images/icetite20/img5.png";
import Img6 from "./../../public/images/icetite20/img6.png";
import Img7 from "./../../public/images/icetite20/img7.png";
import Img8 from "./../../public/images/icetite20/img8.png";
import Img9 from "./../../public/images/icetite20/img9.png";
import Img10 from "./../../public/images/icetite20/img10.png";
import Img11 from "./../../public/images/icetite20/img11.png";
import Img12 from "./../../public/images/icetite20/img12.png";
import Image from "next/image";
import DownArrow from "../../public/icons/downarrow.svg";

const Icetite20 = () => {
  const images = [
    Img1,
    Img2,
    Img3,
    Img4,
    Img5,
    Img6,
    Img7,
    Img8,
    Img9,
    Img10,
    Img11,
    Img12,
  ];

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
        <h1 className="text-4xl font-bold text-[#E15326] pt-20 pb-5">
          About ic-ETITE'20
        </h1>
        <p className="text-lg  text-justify">
          This event took place in Vellore Institute of Technology, Vellore,
          India on 24th & 25th February 2020. The purpose of this conference was
          to enhance the research in Information Technology, Computer
          Engineering, Communication Engineering, Electronics Engineering and to
          afford an international platform for the researchers, academicians,
          engineers, industrialists and students around the world to share their
          research findings with the global experts in the field of Science and
          Technology. The primary goal of the conference is to help the
          delegates to launch their research or business relations and to
          associate for future collaborations in their career path. Original,
          unpublished papers highlighting specific research domains from all
          subject perspectives are invited from delegates worldwide. In this
          concern, the conference aimed to deliver, coordinate and publish
          research and resources to enrich the impact and growth of education
          allied.
        </p>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-14">
          {images.map((image, index) => (
            <div key={index} className="bg-gray-200">
              <Image
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </div>

        <h1 className="text-2xl font-bold text-[#111042] pt-10 pb-5">
          Theme of the Conference
        </h1>
        <p className="text-lg text-justify">
          ic-ETITE 2020 expresses its concern towards the upgradation of
          researchers in Information Technology and Engineering. It motivates to
          provide a worldwide platform to researchers far and widespread by
          exploring their innovations in the field of science and technology.
          The mission is to promote and improve the research and development
          related to the topics of the conference. The essential objective of
          the conference is to assist the researchers in discovering the global
          linkage for future joint efforts in their academic and
          researchoutlook.
        </p>

        <h1 className="text-2xl font-bold text-[#111042] py-5">
          Proceedings Link
        </h1>
        <a className="text-lg pb-20" target="_blank" href="https://ieeexplore.ieee.org/xpl/conhome/9070069/proceeding">
          IEEE Xplore Proceeding
          <span className="font-bold text-blue-800"> (link)</span>
        </a>
      </div>
      <BottomNavbar />
    </div>
  );
};

export default Icetite20;
