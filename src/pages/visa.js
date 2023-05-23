import BottomNavbar from "@/components/bottomNavbar/bottomNavbar";
import Navbar from "@/components/navbar/navBar";
import React from "react";

const Visa = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-10 md:mx-20 lg:mx-20">
        <h1 className="text-4xl font-bold text-[#E15326] pt-20 pb-10">
          Visa Information
        </h1>
        <p className="text-xl">
          The Organizers of ic-ETITE24 will issue appropriate invitation letters
          to delegates after registration to facilitate their e-Visa /regular
          visa application. In case, authors of accepted papers are refused to
          issue VISA then SKYPE presentation can be organized during the
          conference period. It is important that delegates apply early to allow
          adequate time for processing Visa applications. This will allow for a
          smooth, hassle-free process in coming to Vellore. Rephrase this in a
          better manner
        </p>

        <h1 className="text-4xl font-bold text-[#111042] pt-20 pb-10">
          E-visa
        </h1>
        <p className="text-xl">
          Delegates from eligible Countries/Territories are advised to apply for
          e-Visa which is completely an online process. At present e-Visa is
          issued to passport holders of 161 countries. e-Visa has 5
          sub-categories i.e. e-Tourist visa, e-Business visa, e-Medical visa,
          e-Medical Attendant visa and e-Conference visa. Delegates are advised
          to apply for e-Conference Visa. Delegates applying for e-Conference
          visa will be permitted to club with e-Tourist visa only. Online
          application for e-Visa can be made 120 days in advance of the actual
          arrival date in India. However, applications are to be made minimum 4
          days in advance of the date of arrival. For details and applying for
          e-Visa, please visit: https://indianvisaonline.gov.in/evisa/tvoa.html
        </p>

        <h1 className="text-4xl font-bold text-[#111042] pt-20 pb-10">
          Regular Visa
        </h1>
        <p className="text-xl">
          Alternatively, delegates can apply for a regular visa through online
          application link. Delegates from Countries/Territories not listed
          under the e-Visa scheme must apply for regular visa only.For details
          and applying for regular visa please visit:
          https://indianvisaonline.gov.in/visa/index.html
        </p>

        <h1 className="text-3xl font-extrabold text-[#111042] pt-20 pb-5">
          Note
        </h1>
        <p className="text-xl">
          If participant does not belong to Afghanistan, Pakistan, Iraq, Sudan,
          foreigners of Pakistani origin and Stateless persons(PRC Category) PRC
          or if participants are not required to visit ‘Restricted’ or
          ‘Protected’ areas in India, or areas affected by terrorism, militancy
          and extremism etc. viz. Jammu & Kashmir and the North Eastern States(
          Other than States of Manipur, Mizoram and Nagaland) then no need to be
          take prior permission.
        </p>

        <p className="text-[#111042] text-lg py-10">
          For More details please Contact our Event Organizers:
          icetiteconference@gmail.com
        </p>
      </div>
      <BottomNavbar />
    </div>
  );
};

export default Visa;
