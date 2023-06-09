import React, { useState } from "react";
import BottomNavbar from "@/components/bottomNavbar/bottomNavbar";
import Navbar from "@/components/navbar/navBar";

const Committee = () => {
  const [selectedButton, setSelectedButton] = useState(
    "Information Technology"
  );

  const handleClick = (button) => {
    setSelectedButton(button);
  };

  const renderContent = () => {
    if (selectedButton === "Information Technology") {
      return (
          <div className="bg-orange flex flex-col items-start w-full text-white bg-[#111042] space-y-5 py-10 px-10 rounded-md">
              <p className="font-bold text-3xl text-orange-600">Executive Committee</p>
              <p>Dr. Shantharajah. S. P, HOD/SSE, SITE, VIT, Vellore</p>
              <p>Dr. Usha Devi. G, HOD/IT, SITE, VIT, Vellore</p>
              <p>Dr. Parimala. M, HOD/SC, SITE, VIT, Vellore</p>
              <p>Dr. Vanitha. M, HOD/CA, SITE, VIT, Vellore</p>
              <p>Dr. Ajit Kumar Santra, Senior Professor, SITE, VIT, Vellore</p>
              <p>Dr. Balakrushna Tripathy, Professor, SITE, VIT, Vellore</p>
              <p>Dr. Ganesan K, Professor, SITE, VIT, Vellore</p>
              <p>Prof. Hari Ram Vishwakarma, Senior Professor, SITE, VIT, Vellore</p>
              <p>Dr. Subha. S, Professor, SITE, VIT, Vellore</p>
              <p>Dr. Valarmathi. B, Professor, SITE, VIT, Vellore</p>
              <p>Dr. Neelu Khare, Professor, SITE, VIT, Vellore</p>
              <p>Dr. Durai Raj Vincent P. M, Professor, SITE, VIT, Vellore</p>
              <p className="font-bold text-3xl text-orange-600">Publicity Committee</p>
              <p>Dr. Sumangali. K, Associate Professor, SITE, VIT, Vellore</p>
              <p>Dr. Asha. N, Assistant Professor, SITE, VIT, Vellore</p>
              <p className="font-bold text-3xl text-orange-600">BOLT Hackathon</p>
              <p>Dr. Prabhavathy. P, Professor, SITE, VIT, Vellore</p>
              <p>Dr. Karthikeyan. J, Associate Professor, SITE, VIT, Vellore</p>
              <p>Dr. Brijendra Singh, Assistant Professor, SITE, VIT, Vellore</p>
              <p>Dr. Jothish Kumar, Assistant Professor, SITE, VIT, Vellore</p>
              <p className="font-bold text-3xl text-orange-600">Expo’24 Committee</p>
              <p>Dr. Raghavan. R, Associate Professor, SITE, VIT, Vellore</p>
              <p>Dr. Thanga Mariappan. L, Assistant Professor, SITE, VIT, Vellore</p>
              <p>Dr. Arun Pandian. J, Assistant Professor, SITE, VIT, Vellore</p>
              <p>Dr. Jerart Julus. L, Assistant Professor, SITE, VIT, Vellore</p>

              <p className="font-bold text-3xl text-orange-600">Technical Programme Committee</p>
              <p>Dr. Priya. M, Associate Professor, SITE, VIT, Vellore</p>
              <p>Dr. Chiranji Lal Chowdhary, Associate Professor, SITE, VIT, Vellore</p>
              <p>Dr. Gitanjali. J, Associate Professor, SITE, VIT, Vellore</p>
              <p>Dr. Krithika. L. B, Assistant Professor, SITE, VIT, Vellore</p>
              <p>Dr. Vellingiri. J, Assistant Professor, SITE, VIT, Vellore</p>
              <p>Dr. Charanya. R, Assistant Professor, SITE, VIT, Vellore</p>
              <p>Dr. Tamil Priya. D, Assistant Professor, SITE, VIT, Vellore</p>
              <p>Dr. Mohana Priya. P, Assistant Professor, SITE, VIT, Vellore</p>
              <p className="font-bold text-3xl text-orange-600">Program Committee</p>
              <p>Dr. Naveneethan. C, Associate Professor, SITE, VIT, Vellore</p>
              <p>Dr. Selva Rani. B, Associate Professor, SITE, VIT, Vellore</p>
              <p>Dr. Deepa. M, Associate Professor, SITE, VIT, Vellore</p>
              <p>Dr. Angulakshmi. M, Associate Professor, SITE, VIT, Vellore</p>
              <p>Dr. Vivekananda. G. N, Associate Professor, SITE, VIT, Vellore</p>
              <p>Dr. Kalaivani. S, Assistant Professor, SITE, VIT, Vellore</p>
              <p>Dr. Rathi. R, Assistant Professor, SITE, VIT, Vellore</p>
              <p>Dr. Kumaresan. P , Assistant Professor, SITE, VIT, Vellore</p>
              <p>Dr. Santhi. K, Assistant Professor, SITE, VIT, Vellore</p>
              <p>Dr. Gayathri. A, Assistant Professor, SITE, VIT, Vellore</p>
              <p>Dr. Magesh. G, Assistant Professor, SITE, VIT, Vellore</p>
              <p>Dr. Balasubramani. M, Assistant Professor, SITE, VIT, Vellore</p>
              <p>Dr. Karthikeyan. D, Assistant Professor, SITE, VIT, Vellore</p>
              <p>Dr. Arun Kumar. A, Assistant Professor, SITE, VIT, Vellore</p>
              <p>Dr.Senthil Kumar. T, Assistant Professor, SITE, VIT, Vellore</p>
              <p>Dr. Bhuvaneswari. M. S, Assistant Professor, SITE, VIT, Vellore</p>

              <p className="font-bold text-3xl text-orange-600">Conference Coordinating Committee</p>
              <p>Dr. Thanapal. P, Associate Professor, SITE, VIT, Vellore</p>
              <p>Dr. Hemalatha. S, Associate Professor, SITE, VIT, Vellore</p>
              <p>Dr. Kamalakannan. J, Associate Professor, SITE, VIT, Vellore</p>
              <p>Dr. Jayaram Reddy. A, Associate Professor, SITE, VIT, Vellore</p>
              <p>Dr. Nirmala. M, Associate Professor, SITE, VIT, Vellore</p>
              <p>Dr. Raghavan. R, Associate Professor, SITE, VIT, Vellore</p>
              <p>Dr. Sujatha. R, Associate Professor, SITE, VIT, Vellore</p>
              <p>Dr. Vijayan. E, Associate Professor, SITE, VIT, Vellore</p>
              <p>Dr. Nithya. S, Associate Professor, SITE, VIT, Vellore</p>
              <p>Dr. Seetha. R, Associate Professor, SITE, VIT, Vellore</p>
              <p>Dr. Srinivas Koppu, Associate Professor, SITE, VIT, Vellore</p>
              <p>Dr. Santhosh Kumar. S. V. N, Associate Professor, SITE, VIT, Vellore</p>
              <p>Dr. Sweta Bhattacharya, Associate Professor, SITE, VIT, Vellore</p>
              <p>Dr. Ramya. G, Assistant Professor, SITE, VIT, Vellore</p>
              <p>Dr. Rajkumar. M, Assistant Professor, SITE, VIT, Vellore</p>
                  <p>Dr. Anbarasa Kumar. A, Assistant Professor, SITE, VIT, Vellore</p>
                  <p>Dr. Mohanraj. G, Assistant Professor, SITE, VIT, Vellore</p>
                  <p>Dr. Jagannathan. J, Assistant Professor, SITE, VIT, Vellore</p>
                  <p>Dr. Bala Ganesh. N, Assistant Professor, SITE, VIT, Vellore</p>
             <p className="font-bold text-3xl  text-orange-600">Sponsorship Committee</p>
              <p>Dr. Iyapparaja. M, Professor, SITE, VIT, Vellore</p>
              <p>Dr. Praveen Kumar Reddy, Associate Professor, SITE, VIT, Vellore</p>
              <p>Dr. Siva Rama Krishnan S, Assistant Professor, SITE, VIT, Vellore</p>
          </div>
      );
    } else if (selectedButton === "Communication Engineering") {
      return (
        <div className="bg-orange flex flex-col items-start w-full text-white bg-[#111042] space-y-5 py-10 px-10 rounded-md">
          <p>Dr. Dave Cliff, Department of Computer Science, University of Bristol, UK</p>
          <p>Dr. Rafidah Md Noor, Faculty of Computer Science and Information Technology, Universiti Malaya, Malaysia</p>
          <p>Dr. Mohamad Nizam Ayub, Universiti Malaya, Malaysia</p>
          <p>Dr. Saaidal Razalli, Department of Computer Science, University of Warwick, UK</p>
          <p>Dr. Rossella Suma, Department of Computer Science, University of Warwick, UK</p>
          <p>Dr. Joemon Jose, School of Computing Science, University of Glasgow, UK</p>
          <p>Dr. Sung-Bae Cho, Department of Computer Science, Yonsei University, Korea</p>
          <p>Dr. Rajkumar Buyya, School of Computing and Information Systems, The University of Melbourne, Australia</p>
          <p>Dr. Elena Troubitsyna, Division of Theoretical Computer Science, KTH Royal Institute of Technology, Sweden</p>
          <p>Dr. Zvi Galil, Georgia Institute of Technology, USA</p>
          <p>Dr. Aravinda Prasad Sistla, Professor, Department of Computer Science, University of Illinois Chicago, USA</p>
          <p>Dr. Shamkant Navathe, College of Computing, Georgia Institute of Technology, USA</p>
          <p>Dr. V. N. Venkatakrishnan, Department of Computer Science, University of Illinois at Chicago, USA</p>
          <p>Dr. Mark Zwolinski, Department of Electronics and Computer Science, University of Southampton, UK</p>
          <p>Dr. David Stotts, Dept. of Computer Science, University of North Carolina, USA</p>
          <p>Dr. Mahendra Piraveenan, Faculty of Engineering, School of Computer Science, The University of Sydney</p>
          <p>Dr. Sophia Ananiadou, Dept. of Computer Science, School of Engineering, The University of Manchester, UK</p>
          <p>Dr. P. N. Suganthan, Dept. of Computer Science, Nanyang Technological University, Singapore</p>
          <p>Dr. Femilda Josephin Joseph Shobana Bai, Department of Computer Engineering, Istinye University, Istanbul, Turkey</p>
          <p>Dr. Kasper Rasmussen, Department of Computer Science, University of Oxford, UK</p>
          <p>Dr. Raija Halonen, University of Oulu, Finland</p>
          <p>Dr. Victor Chang, Dept. of Information Management and Information Systems, University of Liverpool, UK</p>
          <p>Dr. Hector Jose Garcia-Ramirez, Dept. of Computer Engineering, University of Michigan, USA</p>
          <p>Dr. Mahasweta Sarakar, San Diego State University, USA</p>
          <p>Dr. Mahesh Banavar, Dept. of Electrical and Computer Engineering, Clarkson University, USA</p>
          <p>Dr. Seamus Ross, Faculty of Information, University of Toronto, Canada</p>
          <p>Dr. Hemin Barzan Abdalla, Neusoft Institute Guangdong, China</p>
          <p>Dr. Deepak Puthal, University of Technology, Sydney, Australia</p>
          <p>Dr. Suvendu Mohapatra, Volktek Corporation, Taiwan</p>
          <p>Dr. Li Zhang, The Chinese University of Hong Kong</p>
          <p>Dr. Carl Gustaf Jansson, KTH Royal Institute of Technology, Sweden</p>
          <p>Dr. Olabiyisi, Ladoke Akintola University of Technology, Nigeria</p>
          <p>Dr. Subbu Kumarappan, Ohio State University, USA</p>
          <p>Dr. Antonella Tucci, Centro Veramico-Bologna, Italy</p>
          <p>Dr. Niket Tandon, Allen Institute for Artificial Intelligence, USA</p>
          <p>Dr. Sathish Gopalakrishnan, Dept. of Electrical & Computer Engineering, The University of British Columbia, Canada</p>
          <p>Dr. Sujatha Krishnamoorthy, Dept. of Computer Science, Wenzhou Kean University, China</p>
          <p>Dr. Rajinikumar Ramalingam, Karlsruhe Institute of Technology, Germany</p>
          <p>Dr. Chockalingam Letchumanan, Quest International University, Perak, Malaysia</p>
          <p>Dr. Adhavan Ramasamy, Verizon Enterprise Solutions, USA</p>
          <p>Dr. V. Murugesh, Cihan University, Erbil, IRAQ</p>
        </div>
      );
    } else if (selectedButton === "Computer Engineering") {
      return (
        <div className="bg-orange flex flex-col items-start w-full md:w-full lg:w-full text-white bg-[#111042] space-y-5 py-10 px-10  rounded-md">
          <p>Dr. K. Porkumaran, Chairman, IEEE Madras Section</p>
          <p>Dr. P. Sakthivel, Chairman, ACM Chennai Chapter</p>
          <p>Dr. R. Hariprakash, Secretary, IEEE Madras Section</p>
          <p>Dr. S. Radha, Treasurer, IEEE Madras Section</p>
          <p>Mr. P. Subramanian, Chairman, IEEE Communication Society, Madras Chapter</p>
          <p>Dr. Tarun Kanti Bhattacharya, Dept of Electronics & Electrical Communication Engineering, Indian Institute of Technology, Kharagpur</p>
          <p>Dr. Rajat Subhra Chakraborty, Dept. of Computer Science and Engineering, Indian Institute of Technology, Kharagpur</p>
          <p>Dr. K. Sreenivasa Rao, Dept. of Computer Science and Engineering, Indian Institute of Technology, Kharagpur</p>
          <p>Dr. Ashutosh Modi, Dept. of Computer Science and Engineering, Indian Institute of Technology, Kharagpur</p>
          <p>Dr. Srinivas Talabattula, Dept. of Electronics & Communication Engineering, Indian Institute of Science, Bangalore</p>
          <p>Dr. Y. N. Srikant, Dept. of Electronics & Communication Engineering, Indian Institute of Science, Bangalore</p>
          <p>Dr. Urbi Chatterjee, Department of Computer Science and Engineering, Indian Institute of Technology, Kanpur</p>
          <p>Dr. Kalidas Yeturu, Department of Computer Science and Engineering, Indian Institute of Technology, Tirupati</p>
          <p>Dr. Tharun Kumar Reddy Bollu, Department of Electronics and Communication Engineering, Indian Institute of Technology, Roorkee</p>
          <p>Dr. Subhasis Bhattacharjee, Department of Computer Science and Engineering, Indian Institute of Technology, Jammu</p>
          <p>Dr. Abhishek Tewari, Indian Institute of Technology, Roorkee</p>
          <p>Dr. Saravana Kumar M, Dept. of Electronics and Communication Engineering, Indian Institute of Technology, Roorkee</p>
          <p>Dr. Dharmendra Singh, Department of Electronics & Communication Engineering, Indian Institute of Technology, Roorkee</p>
          <p>Dr. Narendra Chaudhari, Indian Institute of Technology, Indore</p>
          <p>Dr. Sameer Kulkarni, Department of Computer Science and Engineering, Indian Institute of Technology, Gandhinagar</p>
          <p>Dr. Jimson Mathew, Department of Computer Science and Engineering, Indian Institute of Technology, Patna</p>
          <p>Dr. Ayan Mondal, Department of Computer Science and Engineering, Indian Institute of Technology, Indore</p>
          <p>Dr. Puneet Gupta, Department of Computer Science and Engineering, Indian Institute of Technology, Indore</p>
          <p>Dr. Srikant Srinivasan, School of Computing and Electrical Engineering, Indian Institute of Technology, Mandi</p>
          <p>Dr. Dileep A. D, School of Computing and Electrical Engineering, Indian Institute of Technology, Mandi</p>
          <p>Dr. Surya Prakash, Department of Computer Science and Engineering, Indian Institute of Technology, Indore</p>
          <p>Dr. G. Shrikanth Reddy, School of Computing and Electrical engineering, Indian Institute of Technology, Mandi</p>
          <p>Dr. Anirban Sarkar, School of Computing and Electrical engineering, Indian Institute of Technology, Mandi</p>
          <p>Dr. Srinivas Pinisetty, Electrical Sciences, Indian Institute of Technology, Bhubaneswar</p>
          <p>Dr. Suman Kumar Maji, Department of Computer Science & Engineering, Indian Institute of Technology, Patna</p>
          <p>Dr. Angshuman Paul, Department of Computer Science & Engineering, Indian Institute of Technology, Jodhpur</p>
          <p>Dr. Narendra Kumar Dhar, School of Computing and Electrical Engineering, Indian Institute of Technology, Mandi</p>
          <p>Dr. Sateesh Kumar Peddoju, Department of Computer Science & Engineering, Indian Institute of Technology, Roorkee</p>
          <p>Dr. Pratim Kundu, School of Computing and Electrical Engineering, Indian Institute of Technology, Mandi</p>
          <p>Dr. Shivashankar B, Dept. of Computer Science & Engineering, Indian Institute of Technology, Guwahati</p>
          <p>Mr. H. R. Mohan, ACM India</p>
          <p>Dr. K. V. S. Hari, Professor, Dept. of Electronics & Communication Engineering, Indian Institute of Science, Bangalore</p>
          <p>Dr. S. V. Kulkarni, INAE Chair Professor, Dept. of Electrical Engineering, Indian Institute of Technology, Bombay</p>
          <p>Dr. Arun D, Dept. of Electrical Engineering, Indian Institute of Technology, Madras</p>
          <p>Dr. Pabitra Mitra, Dept. of Computer Science & Engineering, Indian Institute of Technology, Kharagpur</p>
          <p>Dr. Dhiman Mallick, Dept. of Electrical Engineering, Indian Institute of Technology, Delhi</p>
          <p>Dr. Nandakumar Nambath, Dept. of Electrical Engineering, Indian Institute of Technology, Goa</p>
          <p>Dr. Subhananda Chakrabarti, Professor, Dept. of Electrical Engineering, Indian Institute of Technology, Bombay</p>
          <p>Dr. Chandan Kumar Sarkar, Dept. of Electronics & Telecommunication Engineering, Jadavpur University, Kolkata</p>
          <p>Dr. M. Nabi, Professor, Dept. of Electrical Engineering, Indian Institute of Technology, Delhi</p>
          <p>Dr. Sougata Mukherjea, Program Director, Cloud Center of Excellence, IBM GTS Technology Services, IBM, India</p>
          <p>Dr. Shabbir Merchant, Professor, Dept. of Electrical Engineering, Indian Institute of Technology, Bombay</p>
        </div>
      );
    } else if (selectedButton === "Electronics Engineering") {
      return (
        <div className="bg-orange flex flex-col items-start w-full text-white bg-[#111042] space-y-5 py-10 px-10 rounded-md">
          <p>Dr. R. Manimegalai, Professor, Dept. of CSE, PSG Institute of Technology and Applied Research, Coimbatore</p>
          <p>Dr. V. Balamurugan, Professor, Dept. of CSE, Manonmanian Sundaranar University, Tirunelveli</p>
          <p>Dr. E. Sivasankar, Dept. of Computer Science & Engineering, National Institute of Technology, Trichy</p>
          <p>Dr. R. Malathi, Professor, Dept. of Electronics and Instrumentation Engineering, Annamalai University, Tamil Nadu</p>
          <p>Dr. S. A. Khaparde, Professor, Dept. of Electrical Engineering, Indian Institute of Technology, Bombay</p>
          <p>Prof. M. Arun, Executive Committee Member, IEEE Madras Section</p>
          <p>Mr. Jeeva S. Chelladhurai, CEO, Cosmorin, Bangalore</p>
          <p>Dr. Anasuya Threse Innocent, Director, BiniWorld Innovations, Bangalore</p>
          <p>Dr. G. Zayaraz, Professor, Dept. of Computer Science & Engineering, Pondicherry Engineering College, Puducherry</p>
          <p>Dr. P. K. Das, Professor, Dept. of Computer Science & Engineering, Indian Institute of Technology, Guwahati</p>
          <p>Dr. K. A. Abdul Nazeer, Professor, Dept. of Computer Science & Engineering, National Institute of Technology, Calicut</p>
          <p>Dr. S. D. Madhu Kumar, Professor, Dept. of Computer Science & Engineering, National Institute of Technology, Calicut</p>
          <p>Dr. Manju Khari, Professor, Ambedkar Institute of Advanced Communication Technologies and Research, Delhi</p>
          <p>Dr. M. P. Rajan, Professor and Dean, Indian Institute of Information Technology, Kottayam, Delhi</p>
          <p>Dr. Shajin Nargunam, Director, Academic Affairs, Noorul Islam University, Kumaracoil</p>
          <p>Dr. P. Kumar, Centre for Information Technology & Engineering, Manonmaniam Sundaranar University, Tirunelveli</p>
          <p>Dr. P. Eswaran, Alagappa University, Karaikudi</p>
          <p>Dr. M. Marikkannan, Dept. of CSE, Government College of Engineering, Erode</p>
          <p>Dr. Wilson Jeberson, Professor, Dept. of CS & IT, Sam Higginbottom University of Agriculture, Technology and Sciences, Allahabad</p>
          <p>Dr. Asha Joseph, Professor, Amal Jyothi College of Engineering, Kerala</p>
          <p>Dr. Kunal Gagneja, SRM University, Delhi</p>
          <p>Dr. Vaishali R. Thakare, Cloud Security Architect- Microsoft BU, Tech Mahindra, Bangalore</p>
          <p>Dr. R. Jayanthi, VIT, Chennai</p>
          <p>Dr. Suchitra, Professor, Dept. of Computer Science & Engineering, JAIN University, Bangalore</p>
        </div>
      )
    } else if (selectedButton === "Student Committee"){
        return (
            <div className="bg-orange flex flex-col items-start w-full text-white bg-[#111042] space-y-5 py-10 px-10 rounded-md">
                <p>Ms. Ayushi Prasad</p>
                <p>Mr. Souvik Mukherjee</p>
                <p>Mr. Jai Munjal</p>
                <p>Mr. Sourav Dhanania</p>
                <p>Mr. Namit Dessapanwar</p>
                <p>Mr. Lohith Pattubala</p>
            </div>
        )
    }
    return null;
  };

  return (
    <div>
      <Navbar />

      <div className="mx-20">
        <h1 className="text-5xl font-bold text-[#E15326] pt-20 pb-10">
          Organizing Committee
        </h1>
        <div className="flex flex-col md:flex-row lg:flex-row justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#E15326] pt-10 pb-5">
              Chief Patron
            </h1>
            <p className="text-xl">
              <span className="font-bold">Dr. G. Viswanathan,</span> Chancellor, VIT
            </p>
            <h1 className="text-3xl font-bold text-[#E15326] pt-10 pb-5">
              Patrons
            </h1>
            <p className="text-xl">
              <span className="font-bold">Mr. Sankar Viswanathan,</span> Vice
              President, VIT{" "}
            </p>
            <p className="text-xl">
              <span className="font-bold">Dr. Sekar Viswanathan,</span> Vice
              President, VIT{" "}
            </p>
            <p className="text-xl">
              <span className="font-bold">Dr. G.V. Selvam,</span> Vice President,
              VIT
            </p>
            <p className="text-xl">
              <span className="font-bold">Dr. Rambabu Kodali,</span> Vice -
              Chancellor, VIT
            </p>
            <p className="text-xl">
              <span className="font-bold">Dr. Partha Sharathi Mallick, </span>
              Pro-Vice Chancellor, VIT, Vellore
            </p>
            <p className="text-xl">
              <span className="font-bold">Dr. Jayabarathi T,</span> Registrar, VIT
            </p>
            <h1 className="text-3xl font-bold text-[#E15326] pt-10 pb-5">
              Organising Chair
            </h1>
            <p className="text-xl">
              <span className="font-bold">Dr. Sumathy S,</span> Professor & Dean, SITE, VIT, Vellore
            </p>
            <h1 className="text-3xl font-bold text-[#E15326] pt-10 pb-5">
              Organising Co-chair
            </h1>
            <p className="text-xl">
              <span className="font-bold">Dr. Dhinesh Babu. L. D,</span> Professor & Associate Dean, SITE, VIT, Vellore
            </p>
            <h1 className="text-3xl font-bold text-[#E15326] pt-10 pb-5">
              Conference Chair
            </h1>
            <p className="text-xl">
              <span className="font-bold">Dr. John Singh K,</span> Professor, SITE, VIT, Vellore
            </p>

          </div>
          <div>
            <h1 className="text-3xl font-bold text-[#E15326] pt-10 pb-5">
              Organising Secretary
            </h1>
            <p className="text-xl">
              <span className="font-bold">Dr. Shynu P. G,</span> Associate Professor, SITE, VIT, Vellore
            </p>
          <h1 className="text-3xl font-bold text-[#E15326] pt-10 pb-5">
          Publication Chair
        </h1>
          <p className="text-xl">
          <span className="font-bold">Dr. Vijayan R,</span> Professor, SITE, VIT, Vellore
        </p>
          <h1 className="text-3xl font-bold text-[#E15326] pt-10 pb-5">
          Publication Co-chairs
        </h1>
          <p className="text-xl">
          <span className="font-bold">Dr. Meenatchi S,</span> Associate Professor, SITE, VIT, Vellore
        </p>
          <p className="text-xl">
          <span className="font-bold">Dr. Brindha K,</span> Associate Professor, SITE, VIT, Vellore
        </p>
          <p className="text-xl">
          <span className="font-bold">Dr. Malathy E,</span> Assistant Professor, SITE, VIT, Vellore
        </p>
          <h1 className="text-3xl font-bold text-[#E15326] pt-10 pb-5">
          Finance Chair
        </h1>
          <p className="text-xl">

          <span className="font-bold">Dr. Gunasekaran G, </span>
              Associate Professor, SITE, VIT, Vellore
        </p>
          <h1 className="text-3xl font-bold text-[#E15326] pt-10 pb-5">
          Finance Co-chair
        </h1>
          <p className="text-xl">
          <span className="font-bold">Dr. Prasanna. S,</span> Associate Professor, SITE, VIT, Vellore
        </p>
        </div>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row space-x-0 md:space-x-10 lg:space-x-10 py-20 font-semibold">
          <button
            className={`px-10 py-10 ${
              selectedButton === "Information Technology"
                ? "bg-[#111042] text-white"
                : "bg-[#46C6ED] text-black"
            } text-xl font-medium w-full md:w-[40rem] lg:w-[40rem] my-5 rounded-md`}
            onClick={() => handleClick("Information Technology")}
          >
            Organizing Committee
          </button>
          <button
            className={`px-10 py-10 ${
              selectedButton === "Communication Engineering"
                ? "bg-[#111042] text-white"
                : "bg-[#46C6ED] text-black"
            } text-xl font-medium w-full md:w-[40rem] lg:w-[40rem] my-5 rounded-md`}
            onClick={() => handleClick("Communication Engineering")}
          >
            International Advisory
          </button>
          <button
            className={`px-10 py-10 ${
              selectedButton === "Computer Engineering"
                ? "bg-[#111042] text-white"
                : "bg-[#46C6ED] text-black"
            } text-xl font-medium w-full md:w-[40rem] lg:w-[40rem] my-5 rounded-md`}
            onClick={() => handleClick("Computer Engineering")}
          >
            National Advisory
          </button>
          <button
            className={`px-10 py-10 ${
              selectedButton === "Electronics Engineering"
                ? "bg-[#111042] text-white"
                : "bg-[#46C6ED] text-black"
            } text-xl font-medium w-full md:w-[40rem] lg:w-[40rem] my-5 rounded-md`}
            onClick={() => handleClick("Electronics Engineering")}
          >
            Technical Committee
          </button>
            <button
                className={`px-10 py-10 ${
                    selectedButton === "Student Committee"
                        ? "bg-[#111042] text-white"
                        : "bg-[#46C6ED] text-black"
                } text-xl font-medium w-full md:w-[40rem] lg:w-[40rem] my-5 rounded-md`}
                onClick={() => handleClick("Student Committee")}
            >
                Student Committee
            </button>
        </div>
        <div className="flex flex-col items-center mb-10 text-2xl">
          {renderContent()}
        </div>
      </div>
      <BottomNavbar />
    </div>
  );
};

export default Committee;
