import Navbar from "./../components/navbar/navBar.jsx";
import BottomNavbar from "./../components/bottomNavbar/bottomNavbar.jsx";
import { Hero, GridOfButtons } from "./../components/index/_index.js";
import Image from "next/image";
import { useEffect, useState } from "react";

import Img from "./../../public/images/vit.png";

import Ieecs from "./../../public/icons/ieeecs.png";
import Itslogo from "./../../public/icons/itslogo.png";
import Acm from "./../../public/icons/acm.png";

import Conf1 from "./../../public/images/index/conference1.png";
import Conf2 from "./../../public/images/index/conference2.png";
import Conf3 from "./../../public/images/index/conference3.png";

import Gal1 from "./../../public/images/index/img1.png";
import Gal2 from "./../../public/images/index/img2.png";
import Gal3 from "./../../public/images/index/img3.png";

export default function Home() {
  const [shouldClip, setShouldClip] = useState(false);

  const buttonItems = [
    "IEEE ic-ETITE'24 Final Paper Template",
    "General Information For Registered Authors",
    "Instructions For Paper Presentation",
    "Guidelines For IEEE PDF eXpress",
    "IEEE Copyright eCF",
    "Camera Ready Paper Submission",
    "Registration For Indian Authors/Participants",
    "Registration For Foreign Authors/Participants",
    "SUBMISSION LINK",
  ];

  return (
    <main>
      <Navbar />
      <Hero />
      <GridOfButtons items={buttonItems} />

      <div className="flex flex-col md:flex-row lg:flex-row bg-[#E7F4FF] sm:m-0">
        <div
          className="w-[100vw] md:w-[60vw] lg:[60vw] sm:w-full sm:transform sm:-skew-x-20 pr-0 md:pr-20 lg:pr-20 text-center md:text-left lg:text-left"
          style={{
            clipPath: shouldClip
              ? "polygon(0 0, 100% 0, 80% 100%, 0% 100%)"
              : "none",
          }}
        >
          <div className="text-[#DE6D1B] pt-8 px-16">
            <h1 className="text-3xl sm:text-4xl font-bold">About IC-ETITE</h1>
          </div>
          <div className="py-8 px-16">
            <p className="text-lg sm:text-xl">
              The purpose of this conference is to enhance the research in
              Information Technology, Computer Engineering, Communication
              Engineering, Electronics Engineering and to afford an
              international platform for researchers, academicians, engineers,
              industrialists and students around the world to share their
              research findings with the global experts in the field of Science
              and Technology. The primary goal of the conference is to help the
              delegates to launch their research or business relations and to
              associate for future collaborations in their career path.
              Original, unpublished papers highlighting specific research
              domains from all subject perspectives are invited from delegates
              worldwide. In this concern, the conference aims to deliver,
              coordinate and publish research and resources to enrich the impact
              and growth of education allied.
            </p>
          </div>
        </div>
        <div className="w-full sm:w-auto">
          <Image
            src={Conf1}
            alt="Image"
            className="h-full object-cover sm:clip-none"
            style={{
              clipPath: shouldClip
                ? "polygon(20% 0, 100% 0, 100% 100%, 0 100%)"
                : "none",
            }}
          />
        </div>
      </div>
      <div className="py-10"></div>
      <div className="flex flex-col md:flex-row-reverse lg:flex-row-reverse bg-[#E7F4FF] sm:m-0">
        <div
          className="w-[100vw] md:w-[60vw] lg:[60vw] sm:w-full sm:transform sm:-skew-x-20 pl-0 md:pl-20 lg:pl-20 text-center md:text-right lg:text-right"
          style={{
            clipPath: shouldClip
              ? "polygon(20% 0, 100% 0, 100% 100%, 0 100%)"
              : "none",
          }}
        >
          <div className="text-[#DE6D1B] pt-8 px-16">
            <h1 className="text-3xl sm:text-4xl font-bold">
              Theme of the Conference
            </h1>
          </div>
          <div className="p-8 px-16">
            <p className="text-lg sm:text-xl">
              ic-ETITE’24 expresses the importance of upgrading the research in
              Information Technology and Engineering. It motivates to provide a
              worldwide platform to researchers far and widespread by exploring
              their innovations in the field of science and technology. The
              mission is to promote and improve the research and development
              related to Information Technology and Engineering. The essential
              objective of the conference is to assist the researchers in
              discovering the global linkage for future joint efforts in their
              academic outlook.
            </p>
          </div>
        </div>
        <div className="w-full h-[50vh] sm:w-auto">
          <Image
            src={Conf2}
            alt="Image"
            className="h-full object-cover"
            style={{
              clipPath: shouldClip
                ? "polygon(0 0, 100% 0, 80% 100%, 0% 100%)"
                : "none",
            }}
          />
        </div>
      </div>
      <div className="py-10"></div>
      <div className="flex flex-col md:flex-row lg:flex-row bg-[#E7F4FF] sm:m-0">
        <div
          className="w-[100vw] md:w-[60vw] lg:[60vw] sm:w-full sm:transform sm:-skew-x-20 pr-0 md:pr-20 lg:pr-20 text-center md:text-left lg:text-left"
          style={{
            clipPath: shouldClip
              ? "polygon(0 0, 100% 0, 80% 100%, 0% 100%)"
              : "none",
          }}
        >
          <div className="text-[#DE6D1B] pt-8 px-16">
            <h1 className="text-3xl sm:text-4xl font-bold">
              Highlights of previous ic-ETITE’20
            </h1>
          </div>
          <div className="py-8 px-16">
            <p className="text-lg sm:text-xl">
              ✶The previous International Conference on Emerging Trends in
              Information Technology and Engineering was organized on 24th &
              25th February 2020.
            </p>
            <p className="text-lg sm:text-xl">
              ✶ ic-ETITE’20 was technically Co-sponsored by IEEE Computer
              Society Madras Chapter, IEEE Communications Society Madras Chapter
              and supported by ACM-Madras Chapter
            </p>
            <p className="text-lg sm:text-xl">
              ✶ All the presented papers were published in the IEEE Xplore by
              the IEEE.
            </p>
            <p className="text-lg sm:text-xl mr-10">
              <span>Proceedings </span>
            </p>
            <p className="text-lg sm:text-xl">
              Electronic ISBN:978-1-7281-4142-8
            </p>
            <p className="text-lg sm:text-xl">USB ISBN:978-1-7281-4141-1</p>
            <p className="text-lg sm:text-xl">
              ✶ ic-ETITE’20 had 21 technical and 17 keynote sessions.
            </p>
            <p className="text-lg sm:text-xl">
              ✶ A hackathon titled, “Breakthrough on Locked Technology” BOLT was
              conducted with 500+ participants and gave Rs. 1,00, 000 as prize
              money.
            </p>
          </div>
        </div>
        <div className="w-full sm:w-auto">
          <Image
            src={Conf3}
            alt="Image"
            className="h-full object-cover sm:clip-none"
            style={{
              clipPath: shouldClip
                ? "polygon(20% 0, 100% 0, 100% 100%, 0 100%)"
                : "none",
            }}
          />
        </div>
      </div>
      <div className="py-10"></div>

      <div className="flex flex-col items-start bg-[#111042] text-white py-10 text-center md:text-left lg:text-left">
        <div className="mx-8 md:mx-16 lg:mx-16">
          <div>
            <h3 className="text-4xl font-bold">About VIT</h3>
            <p className="text-xl py-3">
              Vellore Institute of Technology was established under Section 3 of
              the University Grants Commission (UGC) Act, 1956, and was founded
              in 1984 as Vellore Engineering College. The Union Ministry of
              Human Resources Development conferred University status on Vellore
              Engineering College in 2001. The University is headed by its
              founder and Chancellor, Dr. G. Viswanathan, a former
              Parliamentarian and Minister in the Tamil Nadu Government. It
              persistently seeks and adopts innovative methods to improve the
              quality of higher education consistently. The campus has a
              cosmopolitan atmosphere with students from all corners of the
              globe. Experienced and learned teachers are strongly encouraged to
              nurture the students. The diversity of faculty members and their
              unrelenting focus on teaching and research enable to realize the
              high requirements of modern day teaching-learning process. The
              Institution has established and sustains a strong support
              structure for the successful progression of students during their
              student days. The institution is committed towards its vision of
              “Transforming life through excellence in education and research”
              and adopts professional approach in governance.
            </p>
            <h6 className="text-xl font-bold py-3">Ranking & Accreditation</h6>
            <div className="text-xl">
              <p>
                VIT has emerged as one of the best institutes in India and is
                aspiring to become a global leader. Quality in
                teaching-learning, research and innovation make VIT unique.
              </p>
              <p>
                ✶ Ranked among the top 601-700 Universities of the world and one
                among the top 3 Institutions in India (Shanghai ARWU Ranking
                2022)
              </p>
              <p>
                ✶ The 9th best University, the 10th best research institution
                and the 12th best engineering institution in India (NIRF
                Ranking, Govt. of India 2022)
              </p>
              <p>
                ✶ The engineering and Technology subject areas of VIT are the
                346th best in the World and the 9th best in India as per QS
                World University Rankings by Subject 2022
              </p>
              <p>✶ NAAC Accreditation with A++ grade in the 4th cycle</p>
              <p>
                ✶ Ranked within the top 200 Universities in Asia (QS - Asia
                University Rankings 2022)
              </p>
            </div>
          </div>
          <div className="pt-10">
            <h3 className="text-4xl font-bold">About SITE</h3>
            <p className="text-xl py-3">
              The School of Information Technology and Engineering (SITE) offers
              B.Tech (IT), M.Tech (Software Engineering), MCA, BCA, B.Sc
              (Computer Science), M.Tech (by Research) and Ph.D programs in the
              domain of Information Technology and Engineering. Its focus is on
              holistic learning to help students to make significant
              contributions to the Information Technology industry and to serve
              society at large. The school has more than 4,800 students and 180
              committed faculty members, apart from many visiting professors,
              working professionals from the industry and R&D organizations. The
              School has State-of-the-art infrastructure for teaching-learning,
              research and consultancy. The School has strong linkages with
              leading IT companies and research organizations. It has many
              industry-supported Laboratories and Centre of Excellence. It has a
              track record in organizing many Seminars, Workshops, Symposia and
              Conferences in the emerging and technical areas of Information
              Technology and Engineering.
            </p>
          </div>
          <div className="pt-10">
            <h3 className="text-4xl font-bold">
              About IEEE Information Theory Society, VIT
            </h3>
            <p className="text-xl py-3">
              The IEEE Information Theory Society at VIT is a newly established
              student chapter that explores the latest advancements in
              information theory to tackle modern-day challenges. We provide a
              nurturing environment for fresh ideas and innovative thinking,
              empowering individuals to make a difference. Our chapter organizes
              technical events, workshops, and delivers high-quality projects to
              partners and collaborators. We inspire and shape curious minds,
              helping them overcome present-day challenges and achieve success.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row lg:flex-row items-center justify-center">
        <div className="w-full md:w-1/3 lg:w-1/3 bg-cover aspect-w-3 h-[40vh]">
          <Image
            src={Gal1}
            alt=""
            className="object-cover object-center h-full"
          />
        </div>
        <div className="w-full md:w-1/3 lg:w-1/3 bg-cover aspect-w-3 h-[40vh]">
          <Image
            src={Gal2}
            alt=""
            className="object-cover object-center h-full"
          />
        </div>
        <div className="w-full md:w-1/3 lg:w-1/3 bg-cover aspect-w-3 h-[40vh]">
          <Image
            src={Gal3}
            alt=""
            className="object-cover object-center h-full"
          />
        </div>
      </div>

      <div className="px-8 md:px-16 lg:px-16 py-10 shadow-xl text-center md:text-left lg:text-left">
        <h3 className="text-[#FF6000] text-3xl font-bold pb-2">
          Manuscript Submission
        </h3>
        <p className="text-xl py-3">
          The papers should be submitted through link provided. All submitted
          papers will go through a plagiarism check process. The manuscript
          should not contain embedded links, scanned images, header and footer.
          Email submission will not be accepted. All queries related to the
          conference shall be addressed to icetiteconference@gmail.com. Original
          Contributions are solicited on topics covered under broad areas not
          restricted to Information Technology and Engineering.
        </p>
      </div>

      <div className="flex flex-col items-center text-black font-bold pt-20 text-4xl mx-8 md:mx-24 lg:mx-48">
        <h3>TECHNICAL CO-SPONSORS</h3>
        <div className="flex flex-col md:flex-row lg:flex-row items-center justify-between w-full py-10 gap-y-12">
          <Image src={Acm} alt="" />
          <Image src={Itslogo} alt="" />
          <Image src={Ieecs} alt="" />
        </div>
      </div>

      <div className="flex flex-col items-center text-black font-bold pt-10 text-4xl mx-8 md:mx-24 lg:mx-48">
        <h3>SUPPORTED BY</h3>
        <div className="flex flex-col md:flex-row lg:flex-row items-center justify-between w-full py-10 gap-y-12">
          <Image src={Acm} alt="" />
          <Image src={Itslogo} alt="" />
          <Image src={Ieecs} alt="" />
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .flex-col {
            flex-direction: column;
          }
          .w-60vw {
            width: 100%;
          }
          .sm\:transform {
            transform: none;
          }
          .sm\:skew-x-20 {
            transform: skewX(0);
          }
          .h-full {
            height: auto;
          }
          .object-cover {
            object-fit: contain;
          }
          .clip-path {
            clip-path: none;
          }
        }
      `}</style>
      <BottomNavbar />
    </main>
  );
}
