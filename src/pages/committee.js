import React, { useEffect, useState } from "react";
import BottomNavbar from "@/components/bottomNavbar/bottomNavbar";
import Navbar from "@/components/navbar/navBar";
import Image from "next/image";
import DownArrow from "../../public/icons/downarrow.svg";

const Committee = () => {
  const [selectedButton, setSelectedButton] = useState(
    "Information Technology"
  );

  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const handleClick = (button) => {
    setSelectedButton(button);
  };

  const renderContent = () => {
    if (selectedButton === "Information Technology") {
      return (
        <div className="bg-orange flex flex-col items-start w-full text-white bg-[#111042] space-y-1 text-lg py-10 px-10 rounded-md">
          <p className="font-bold text-xl text-orange-600">
            Executive Committee
          </p>
          <p>Dr. Neelu Khare, HOD/SSE, SCORE, VIT, Vellore</p>
          <p>Dr. Parimala. M, HOD/SC, SCORE, VIT, Vellore</p>
          <p>Dr. Vanitha. M, HOD/CA, SCORE, VIT, Vellore</p>
          <p>Dr. Ajit Kumar Santra, Professor, SCORE, VIT, Vellore</p>
          <p>Dr. Balakrushna Tripathy, Professor, SCORE, VIT, Vellore</p>
          <p>Dr. Ganesan K, Professor, SCORE, VIT, Vellore</p>
          <p>Prof. Hari Ram Vishwakarma, Professor, SCORE, VIT, Vellore</p>
          <p>Dr. Subha. S, Professor, SCORE, VIT, Vellore</p>
          <p>Dr. Valarmathi. B, Professor, SCORE, VIT, Vellore</p>
          <p>Dr. Durai Raj Vincent P. M, Professor, SCORE, VIT, Vellore</p>
          <p className="font-bold text-xl text-orange-600">
            Publicity Committee
          </p>
          <p>Dr. Sumangali. K, Associate Professor, SCORE, VIT, Vellore</p>
          <p>Dr. Asha. N, Assistant Professor, SCORE, VIT, Vellore</p>
          <p className="font-bold text-xl text-orange-600">BOLT Hackathon</p>
          <p>Dr. Prabhavathy. P, Professor, SCORE, VIT, Vellore</p>
          <p>Dr. Karthikeyan. J, Associate Professor, SCORE, VIT, Vellore</p>
          <p>Dr. Brijendra Singh, Assistant Professor, SCORE, VIT, Vellore</p>
          <p>Dr. Jothish Kumar, Assistant Professor, SCORE, VIT, Vellore</p>
          <p className="font-bold text-xl text-orange-600">Expo’24 Committee</p>
          <p>Dr. Raghavan. R, Associate Professor, SCORE, VIT, Vellore</p>
          <p>
            Dr. Thanga Mariappan. L, Assistant Professor, SCORE, VIT, Vellore
          </p>
          <p>Dr. Arun Pandian. J, Assistant Professor, SCORE, VIT, Vellore</p>
          <p>Dr. Jerart Julus. L, Assistant Professor, SCORE, VIT, Vellore</p>

          <p className="font-bold text-xl text-orange-600">
            Technical Programme Committee
          </p>
          <p>Dr. Priya. M, Associate Professor, SCORE, VIT, Vellore</p>
          <p>
            Dr. Chiranji Lal Chowdhary, Associate Professor, SCORE, VIT, Vellore
          </p>
          <p>Dr. Gitanjali. J, Associate Professor, SCORE, VIT, Vellore</p>
          <p>Dr. Krithika. L. B, Assistant Professor, SCORE, VIT, Vellore</p>
          <p>Dr. Vellingiri. J, Assistant Professor, SCORE, VIT, Vellore</p>
          <p>Dr. Charanya. R, Assistant Professor, SCORE, VIT, Vellore</p>
          <p>Dr. Tamil Priya. D, Assistant Professor, SCORE, VIT, Vellore</p>
          <p>Dr. Mohana Priya. P, Assistant Professor, SCORE, VIT, Vellore</p>
          <p className="font-bold text-xl text-orange-600">Program Committee</p>
          <p>Dr. Naveneethan. C, Associate Professor, SCORE, VIT, Vellore</p>
          <p>Dr. Selva Rani. B, Associate Professor, SCORE, VIT, Vellore</p>
          <p>Dr. Deepa. M, Associate Professor, SCORE, VIT, Vellore</p>
          <p>Dr. Angulakshmi. M, Associate Professor, SCORE, VIT, Vellore</p>
          <p>Dr. Vivekananda. G. N, Associate Professor, SCORE, VIT, Vellore</p>
          <p>Dr. Kalaivani. S, Assistant Professor, SCORE, VIT, Vellore</p>
          <p>Dr. Rathi. R, Assistant Professor, SCORE, VIT, Vellore</p>
          <p>Dr. Kumaresan. P , Assistant Professor, SCORE, VIT, Vellore</p>
          <p>Dr. Santhi. K, Assistant Professor, SCORE, VIT, Vellore</p>
          <p>Dr. Gayathri. A, Assistant Professor, SCORE, VIT, Vellore</p>
          <p>
            Dr. Benjula Anbu Malar. M. B, Assistant Professor, SCORE, VIT,
            Vellore
          </p>
          <p>Dr. Magesh. G, Assistant Professor, SCORE, VIT, Vellore</p>
          <p>Dr. Chemmalar Selvi G Assistant Professor, SCORE, VIT, Vellore</p>
          <p>Dr. Balasubramani. M, Assistant Professor, SCORE, VIT, Vellore</p>
          <p>Dr. Karthikeyan. D, Assistant Professor, SCORE, VIT, Vellore</p>
          <p>Dr. Arun Kumar. A, Assistant Professor, SCORE, VIT, Vellore</p>
          <p>Dr.Senthil Kumar. T, Assistant Professor, SCORE, VIT, Vellore</p>
          <p>
            Dr. Bhuvaneswari. M. S, Assistant Professor, SCORE, VIT, Vellore
          </p>

          <p className="font-bold text-xl text-orange-600">
            Conference Coordinating Committee
          </p>
          <p>Dr. Thanapal. P, Associate Professor, SCORE, VIT, Vellore</p>
          <p>Dr. Hemalatha. S, Associate Professor, SCORE, VIT, Vellore</p>
          <p>Dr. Kamalakannan. J, Associate Professor, SCORE, VIT, Vellore</p>
          <p>Dr. Jayaram Reddy. A, Associate Professor, SCORE, VIT, Vellore</p>
          <p>Dr. Nirmala. M, Associate Professor, SCORE, VIT, Vellore</p>
          <p>Dr. Sujatha. R, Associate Professor, SCORE, VIT, Vellore</p>
          <p>Dr. Vijayan. E, Associate Professor, SCORE, VIT, Vellore</p>
          <p>Dr. Nithya. S, Associate Professor, SCORE, VIT, Vellore</p>
          <p>Dr. Seetha. R, Associate Professor, SCORE, VIT, Vellore</p>
          <p>Dr. Srinivas Koppu, Associate Professor, SCORE, VIT, Vellore</p>
          <p>
            Dr. Santhosh Kumar. S. V. N, Associate Professor, SCORE, VIT,
            Vellore
          </p>
          <p>
            Dr. Sweta Bhattacharya, Associate Professor, SCORE, VIT, Vellore
          </p>
          <p>Dr. Ramya. G, Assistant Professor, SCORE, VIT, Vellore</p>
          <p>Dr. Rajkumar. M, Assistant Professor, SCORE, VIT, Vellore</p>
          <p>Dr. Anbarasa Kumar. A, Assistant Professor, SCORE, VIT, Vellore</p>
          <p>Dr. Mohanraj. G, Assistant Professor, SCORE, VIT, Vellore</p>
          <p>Dr. Jagannathan. J, Assistant Professor, SCORE, VIT, Vellore</p>
          <p>Dr. Bala Ganesh. N, Assistant Professor, SCORE, VIT, Vellore</p>
          <p className="font-bold text-xl  text-orange-600">
            Sponsorship Committee
          </p>
          <p>Dr. Iyapparaja. M, Professor, SCORE, VIT, Vellore</p>
          <p>
            Dr. Praveen Kumar Reddy, Associate Professor, SCORE, VIT, Vellore
          </p>
          <p>
            Dr. Siva Rama Krishnan S, Assistant Professor, SCORE, VIT, Vellore
          </p>
        </div>
      );
    } else if (selectedButton === "Communication Engineering") {
      return (
        <div className="bg-orange flex flex-col items-start w-full text-white bg-[#111042] space-y-1 text-lg py-10 px-10 rounded-md">
          <p>
            Dr. Dave Cliff, Department of Computer Science, University of
            Bristol, UK
          </p>
          <p>
            Dr. Rafidah Md Noor, Faculty of Computer Science and Information
            Technology, Universiti Malaya, Malaysia
          </p>
          <p>Dr. Mohamad Nizam Ayub, Universiti Malaya, Malaysia</p>
          <p>
            Dr. Saaidal Razalli, Department of Computer Science, University of
            Warwick, UK
          </p>
          <p>
            Dr. Rossella Suma, Department of Computer Science, University of
            Warwick, UK
          </p>
          <p>
            Dr. Joemon Jose, School of Computing Science, University of Glasgow,
            UK
          </p>
          <p>
            Dr. Sung-Bae Cho, Department of Computer Science, Yonsei University,
            Korea
          </p>
          <p>
            Dr. Rajkumar Buyya, School of Computing and Information Systems, The
            University of Melbourne, Australia
          </p>
          <p>
            Dr. Elena Troubitsyna, Division of Theoretical Computer Science, KTH
            Royal Institute of Technology, Sweden
          </p>
          <p>Dr. Zvi Galil, Georgia Institute of Technology, USA</p>
          <p>
            Dr. Aravinda Prasad Sistla, Professor, Department of Computer
            Science, University of Illinois Chicago, USA
          </p>
          <p>
            Dr. Shamkant Navathe, College of Computing, Georgia Institute of
            Technology, USA
          </p>
          <p>
            Dr. V. N. Venkatakrishnan, Department of Computer Science,
            University of Illinois at Chicago, USA
          </p>
          <p>
            Dr. Mark Zwolinski, Department of Electronics and Computer Science,
            University of Southampton, UK
          </p>
          <p>
            Dr. David Stotts, Dept. of Computer Science, University of North
            Carolina, USA
          </p>
          <p>
            Dr. Mahendra Piraveenan, Faculty of Engineering, School of Computer
            Science, The University of Sydney
          </p>
          <p>
            Dr. Sophia Ananiadou, Dept. of Computer Science, School of
            Engineering, The University of Manchester, UK
          </p>
          <p>
            Dr. P. N. Suganthan, Dept. of Computer Science, Nanyang
            Technological University, Singapore
          </p>
          <p>
            Dr. Femilda Josephin Joseph Shobana Bai, Department of Computer
            Engineering, Istinye University, Istanbul, Turkey
          </p>
          <p>
            Dr. Kasper Rasmussen, Department of Computer Science, University of
            Oxford, UK
          </p>
          <p>Dr. Raija Halonen, University of Oulu, Finland</p>
          <p>
            Dr. Victor Chang, Dept. of Information Management and Information
            Systems, University of Liverpool, UK
          </p>
          <p>
            Dr. Hector Jose Garcia-Ramirez, Dept. of Computer Engineering,
            University of Michigan, USA
          </p>
          <p>Dr. Mahasweta Sarakar, San Diego State University, USA</p>
          <p>
            Dr. Mahesh Banavar, Dept. of Electrical and Computer Engineering,
            Clarkson University, USA
          </p>
          <p>
            Dr. Seamus Ross, Faculty of Information, University of Toronto,
            Canada
          </p>
          <p>Dr. Hemin Barzan Abdalla, Neusoft Institute Guangdong, China</p>
          <p>Dr. Deepak Puthal, University of Technology, Sydney, Australia</p>
          <p>Dr. Suvendu Mohapatra, Volktek Corporation, Taiwan</p>
          <p>Dr. Li Zhang, The Chinese University of Hong Kong</p>
          <p>
            Dr. Carl Gustaf Jansson, KTH Royal Institute of Technology, Sweden
          </p>
          <p>
            Dr. Olabiyisi, Ladoke Akintola University of Technology, Nigeria
          </p>
          <p>Dr. Subbu Kumarappan, Ohio State University, USA</p>
          <p>Dr. Antonella Tucci, Centro Veramico-Bologna, Italy</p>
          <p>
            Dr. Niket Tandon, Allen Institute for Artificial Intelligence, USA
          </p>
          <p>
            Dr. Sathish Gopalakrishnan, Dept. of Electrical & Computer
            Engineering, The University of British Columbia, Canada
          </p>
          <p>
            Dr. Sujatha Krishnamoorthy, Dept. of Computer Science, Wenzhou Kean
            University, China
          </p>
          <p>
            Dr. Rajinikumar Ramalingam, Karlsruhe Institute of Technology,
            Germany
          </p>
          <p>
            Dr. Chockalingam Letchumanan, Quest International University, Perak,
            Malaysia
          </p>
          <p>Dr. Adhavan Ramasamy, Verizon Enterprise Solutions, USA</p>
          <p>Dr. V. Murugesh, Cihan University, Erbil, IRAQ</p>
        </div>
      );
    } else if (selectedButton === "Computer Engineering") {
      return (
        <div className="bg-orange flex flex-col items-start w-full md:w-full lg:w-full text-white bg-[#111042] space-y-1 text-lg py-10 px-10  rounded-md">
          <p>Dr. K. Porkumaran, Chairman, IEEE Madras Section</p>
          <p>Dr. P. Sakthivel, Chairman, ACM Chennai Chapter</p>
          <p>Dr. R. Hariprakash, Secretary, IEEE Madras Section</p>
          <p>Dr. S. Radha, Treasurer, IEEE Madras Section</p>
          <p>
            Mr. P. Subramanian, Chairman, IEEE Communication Society, Madras
            Chapter
          </p>
          <p>
            Dr. Tarun Kanti Bhattacharya, Dept of Electronics & Electrical
            Communication Engineering, Indian Institute of Technology, Kharagpur
          </p>
          <p>
            Dr. Rajat Subhra Chakraborty, Dept. of Computer Science and
            Engineering, Indian Institute of Technology, Kharagpur
          </p>
          <p>
            Dr. K. Sreenivasa Rao, Dept. of Computer Science and Engineering,
            Indian Institute of Technology, Kharagpur
          </p>
          <p>
            Dr. Ashutosh Modi, Dept. of Computer Science and Engineering, Indian
            Institute of Technology, Kharagpur
          </p>
          <p>
            Dr. Srinivas Talabattula, Dept. of Electronics & Communication
            Engineering, Indian Institute of Science, Bangalore
          </p>
          <p>
            Dr. Y. N. Srikant, Dept. of Electronics & Communication Engineering,
            Indian Institute of Science, Bangalore
          </p>
          <p>
            Dr. Urbi Chatterjee, Department of Computer Science and Engineering,
            Indian Institute of Technology, Kanpur
          </p>
          <p>
            Dr. Kalidas Yeturu, Department of Computer Science and Engineering,
            Indian Institute of Technology, Tirupati
          </p>
          <p>
            Dr. Tharun Kumar Reddy Bollu, Department of Electronics and
            Communication Engineering, Indian Institute of Technology, Roorkee
          </p>
          <p>
            Dr. Subhasis Bhattacharjee, Department of Computer Science and
            Engineering, Indian Institute of Technology, Jammu
          </p>
          <p>Dr. Abhishek Tewari, Indian Institute of Technology, Roorkee</p>
          <p>
            Dr. Saravana Kumar M, Dept. of Electronics and Communication
            Engineering, Indian Institute of Technology, Roorkee
          </p>
          <p>
            Dr. Dharmendra Singh, Department of Electronics & Communication
            Engineering, Indian Institute of Technology, Roorkee
          </p>
          <p>Dr. Narendra Chaudhari, Indian Institute of Technology, Indore</p>
          <p>
            Dr. Sameer Kulkarni, Department of Computer Science and Engineering,
            Indian Institute of Technology, Gandhinagar
          </p>
          <p>
            Dr. Jimson Mathew, Department of Computer Science and Engineering,
            Indian Institute of Technology, Patna
          </p>
          <p>
            Dr. Ayan Mondal, Department of Computer Science and Engineering,
            Indian Institute of Technology, Indore
          </p>
          <p>
            Dr. Puneet Gupta, Department of Computer Science and Engineering,
            Indian Institute of Technology, Indore
          </p>
          <p>
            Dr. Srikant Srinivasan, School of Computing and Electrical
            Engineering, Indian Institute of Technology, Mandi
          </p>
          <p>
            Dr. Dileep A. D, School of Computing and Electrical Engineering,
            Indian Institute of Technology, Mandi
          </p>
          <p>
            Dr. Surya Prakash, Department of Computer Science and Engineering,
            Indian Institute of Technology, Indore
          </p>
          <p>
            Dr. G. Shrikanth Reddy, School of Computing and Electrical
            engineering, Indian Institute of Technology, Mandi
          </p>
          <p>
            Dr. Anirban Sarkar, School of Computing and Electrical engineering,
            Indian Institute of Technology, Mandi
          </p>
          <p>
            Dr. Srinivas Pinisetty, Electrical Sciences, Indian Institute of
            Technology, Bhubaneswar
          </p>
          <p>
            Dr. Suman Kumar Maji, Department of Computer Science & Engineering,
            Indian Institute of Technology, Patna
          </p>
          <p>
            Dr. Angshuman Paul, Department of Computer Science & Engineering,
            Indian Institute of Technology, Jodhpur
          </p>
          <p>
            Dr. Narendra Kumar Dhar, School of Computing and Electrical
            Engineering, Indian Institute of Technology, Mandi
          </p>
          <p>
            Dr. Sateesh Kumar Peddoju, Department of Computer Science &
            Engineering, Indian Institute of Technology, Roorkee
          </p>
          <p>
            Dr. Pratim Kundu, School of Computing and Electrical Engineering,
            Indian Institute of Technology, Mandi
          </p>
          <p>
            Dr. Shivashankar B, Dept. of Computer Science & Engineering, Indian
            Institute of Technology, Guwahati
          </p>
          <p>Mr. H. R. Mohan, ACM India</p>
          <p>
            Dr. K. V. S. Hari, Professor, Dept. of Electronics & Communication
            Engineering, Indian Institute of Science, Bangalore
          </p>
          <p>
            Dr. S. V. Kulkarni, INAE Chair Professor, Dept. of Electrical
            Engineering, Indian Institute of Technology, Bombay
          </p>
          <p>
            Dr. Arun D, Dept. of Electrical Engineering, Indian Institute of
            Technology, Madras
          </p>
          <p>
            Dr. Pabitra Mitra, Dept. of Computer Science & Engineering, Indian
            Institute of Technology, Kharagpur
          </p>
          <p>
            Dr. Dhiman Mallick, Dept. of Electrical Engineering, Indian
            Institute of Technology, Delhi
          </p>
          <p>
            Dr. Nandakumar Nambath, Dept. of Electrical Engineering, Indian
            Institute of Technology, Goa
          </p>
          <p>
            Dr. Subhananda Chakrabarti, Professor, Dept. of Electrical
            Engineering, Indian Institute of Technology, Bombay
          </p>
          <p>
            Dr. Chandan Kumar Sarkar, Dept. of Electronics & Telecommunication
            Engineering, Jadavpur University, Kolkata
          </p>
          <p>
            Dr. M. Nabi, Professor, Dept. of Electrical Engineering, Indian
            Institute of Technology, Delhi
          </p>
          <p>
            Dr. Sougata Mukherjea, Program Director, Cloud Center of Excellence,
            IBM GTS Technology Services, IBM, India
          </p>
          <p>
            Dr. Shabbir Merchant, Professor, Dept. of Electrical Engineering,
            Indian Institute of Technology, Bombay
          </p>
        </div>
      );
    } else if (selectedButton === "Electronics Engineering") {
      return (
        <div className="bg-orange flex flex-col text-lg items-start w-full space-y-1 text-white bg-[#111042] py-10 px-10 rounded-md">
          <p>
            Dr. R. Manimegalai, Professor, Dept. of CSE, PSG Institute of
            Technology and Applied Research, Coimbatore
          </p>
          <p>
            Dr. V. Balamurugan, Professor, Dept. of CSE, Manonmanian Sundaranar
            University, Tirunelveli
          </p>
          <p>
            Dr. E. Sivasankar, Dept. of Computer Science & Engineering, National
            Institute of Technology, Trichy
          </p>
          <p>
            Dr. R. Malathi, Professor, Dept. of Electronics and Instrumentation
            Engineering, Annamalai University, Tamil Nadu
          </p>
          <p>
            Dr. S. A. Khaparde, Professor, Dept. of Electrical Engineering,
            Indian Institute of Technology, Bombay
          </p>
          <p>Prof. M. Arun, Executive Committee Member, IEEE Madras Section</p>
          <p>Mr. Jeeva S. Chelladhurai, CEO, Cosmorin, Bangalore</p>
          <p>
            Dr. Anasuya Threse Innocent, Director, BiniWorld Innovations,
            Bangalore
          </p>
          <p>
            Dr. G. Zayaraz, Professor, Dept. of Computer Science & Engineering,
            Pondicherry Engineering College, Puducherry
          </p>
          <p>
            Dr. P. K. Das, Professor, Dept. of Computer Science & Engineering,
            Indian Institute of Technology, Guwahati
          </p>
          <p>
            Dr. K. A. Abdul Nazeer, Professor, Dept. of Computer Science &
            Engineering, National Institute of Technology, Calicut
          </p>
          <p>
            Dr. S. D. Madhu Kumar, Professor, Dept. of Computer Science &
            Engineering, National Institute of Technology, Calicut
          </p>
          <p>
            Dr. Manju Khari, Professor, Ambedkar Institute of Advanced
            Communication Technologies and Research, Delhi
          </p>
          <p>
            Dr. M. P. Rajan, Professor and Dean, Indian Institute of Information
            Technology, Kottayam, Delhi
          </p>
          <p>
            Dr. Shajin Nargunam, Director, Academic Affairs, Noorul Islam
            University, Kumaracoil
          </p>
          <p>
            Dr. P. Kumar, Centre for Information Technology & Engineering,
            Manonmaniam Sundaranar University, Tirunelveli
          </p>
          <p>Dr. P. Eswaran, Alagappa University, Karaikudi</p>
          <p>
            Dr. M. Marikkannan, Dept. of CSE, Government College of Engineering,
            Erode
          </p>
          <p>
            Dr. Wilson Jeberson, Professor, Dept. of CS & IT, Sam Higginbottom
            University of Agriculture, Technology and Sciences, Allahabad
          </p>
          <p>
            Dr. Asha Joseph, Professor, Amal Jyothi College of Engineering,
            Kerala
          </p>
          <p>Dr. Kunal Gagneja, SRM University, Delhi</p>
          <p>
            Dr. Vaishali R. Thakare, Cloud Security Architect- Microsoft BU,
            Tech Mahindra, Bangalore
          </p>
          <p>Dr. R. Jayanthi, VIT, Chennai</p>
          <p>
            Dr. Suchitra, Professor, Dept. of Computer Science & Engineering,
            JAIN University, Bangalore
          </p>
        </div>
      );
    } else if (selectedButton === "Student Committee") {
      return (
        <div className="bg-orange flex flex-col items-start w-full text-white bg-[#111042] space-y-1 text-lg py-10 px-10 rounded-md">
          <p className="font-bold text-xl text-orange-600">
            Student Organizers
          </p>
          <p>
            <strong>Mr. Souvik Mukherjee (21BCE0021)</strong>
          </p>
          <p>
            <strong>Ms. Ayushi Prasad (21BML0041)</strong>
          </p>
          <p>
            <strong>Mr. Jai Munjal (21BIT0709)</strong>
          </p>
          <p>
            <strong>Mr. Sourav Dhanania (21BKT0049)</strong>
          </p>
          <p>
            <strong>Mr. Lohith Pattubala (21MIS0194)</strong>
          </p>
          <p className="font-bold text-xl text-orange-600">
            Technical Committee
          </p>
          <p>
            <strong>Aaditya Mahanta(21BCI0046)</strong>
          </p>
          <p>
            <strong>Vaibhav Pathak(21BCE0835)</strong>
          </p>
          <p>Shivam Sharma (21BCE0665)</p>
          <p>Siddharth Dave (21BEC2084)</p>
          <p>Ojal Binoj Koshy (21BCE2641)</p>
          <p>Yashaswini Shivathaya (21BCE2332)</p>
          <p>Chirag Singh (21BCE2683)</p>
          <p>Rudrank Basant (21BCI0149)</p>
          <p>Kaushal Vishnukanth Rathi (21BCT0084)</p>
          <p>Ojas Tyagi (21BDS0026)</p>
          <p>Pratham Gupta (21BCE2534)</p>
          <p>Prateek Srivastava (22BCI0259)</p>
          <p>Tanvi Jain (22BCE0989)</p>
          <p>Nishant Gupta (22BCT0304)</p>
          <p>Pranav Deshmukh (22BCE3207)</p>
          <p>Shiv Deshpande (22BIT0601)</p>
          <p>Gaurav Choudhary (22BIT0375)</p>
          <p>Soham Ghugare (22BCE2053)</p>
          <p>Yajat Kapur (22BBS0110)</p>
          <p>Vedant Matanhelia (22BCE2788)</p>
          <p>Kairav Nitin Sheth (22BCI0024)</p>
          <p>Vaibhav Pandey (22BKT0081)</p>
          <p>Abhinav Ganeshan (22BCI0013)</p>
          <p>Ryan Jacob (22BCT0356)</p>
          <p>Vasu Somani (22BCE0539)</p>
          <p>Samyak Jain (22BBS0233)</p>
          <p>Kunal Singh Beniwal (22BCE2174)</p>
          <p>Aanchal Shah (22BCE3710)</p>

          <p className="font-bold text-xl text-orange-600">Finance Committee</p>
          <p>
            <strong>Arushi Bawa (21BCE3370)</strong>
          </p>
          <p>
            <strong>Swayam Ambashtha (21BCE0232)</strong>
          </p>
          <p>Amlan Srivastava (21BCE2945)</p>
          <p>Tanya Nijhawan (21BIT0314)</p>
          <p>Manan Anil Sharma (21BIT0221)</p>
          <p>Arshita Nag (21BCE0508)</p>
          <p>Bhavesh Sai (21BEC0820)</p>
          <p>Raman Sharma (21BEI0005)</p>
          <p>Charlese Patel (21BCE2984)</p>
          <p>Chahak Gupta (21BDS0381)</p>
          <p>Saanvi Samir Shah (21BCE2558)</p>
          <p>Sharvil Karwa (21BCE0122)</p>
          <p>Ramya Maheshwari (21BCE3032)</p>
          <p>Ishan Audichya (21BCE3324)</p>
          <p>Aarushi Kalia (21BEC0117)</p>
          <p>Akshat Chaudhary (21BEC2516)</p>
          <p>Vaishnavi Rathod (21BCB0191)</p>
          <p>Gaurav Hegde (21BCE0602)</p>
          <p>S Chandan (21BML0142)</p>
          <p>Aadit Shah (21BDS0203)</p>
          <p>Ansh Agarwal (21BCI0298)</p>
          <p>Murtaza Saleem (21BME0448)</p>
          <p>Aayush Chhikara (21BCE0346)</p>
          <p>Komal Vaswani (21BBT0141)</p>
          <p>K Abhimanyu Nair (21BCE0282)</p>
          <p>Vaibhavi Jha (21BCE0399)</p>
          <p>Manas (22BKT0060)</p>
          <p>Varsha S (22BCE2469)</p>
          <p>Armaan Sharma (22BDS0317)</p>
          <p>Ansu Banerjee (22BEC0130)</p>
          <p>Karan Bihani (22BCE3396)</p>
          <p>Anant Garg (22BCE0586)</p>
          <p>Muthumeenakshi (22BBT0220)</p>
          <p>Ayush Singh (22BEC0567)</p>
          <p>Sumit Kejriwal (21BCE2671)</p>
          <p>Utkarsh Tomar (22BCE3149)</p>
          <p>Animesh Seth (21BBS0053)</p>
          <p>Raghvendra (21BCE0528)</p>
          <p>Ayushman Singh (21BIT0241)</p>
          <p>Abhiram Aravind (22MIC0170)</p>
          <p>Aaditya Gupta (22BCE2070)</p>
          <p>Stephanie Ritla (21BCE3631)</p>
          <p>Arpita Mishra (21BME0282)</p>
          <p>Arya Dankh (21BEC0246)</p>
          <p>Ganta Avishi Sreenidhi (22BCE3254)</p>
          <p>Parima Shah (22BEC0167)</p>
          <p>Nataansh Arora (22BEE0022)</p>
          <p>Garv Jain (22BDS0188)</p>
          <p>Samyuktha Varma (22BEC0007)</p>
          <p>K Udaya Sindhu (22BCE0436)</p>
          <p>Rishab C P (22BCE3194)</p>
          <p>Anwesha Guhaa (22BCE3376)</p>
          <p>Maitreyi Bhardwaj (22BCE0648)</p>
          <p>Hemanth Shivanand Balgi (22BCE3106)</p>
          <p>Tamanna Bishnoi (22BCE0919)</p>
          <p>Anoushka Tandon (22BEC0383)</p>
          <p>Gaurang Bhatnagar (21BMA0108)</p>
          <p>Shivam Dave (21BCB0107)</p>
          <p>Sreya Prasobh (22BCL0079)</p>
          <p>Akansha Maneesh (22BEC0002)</p>
          <p>Malhar Shah (21BCE0146)</p>
          <p>Hrishikesh Sane (22BCE0579)</p>
          <p>Jahnika (22BBS0192)</p>
          <p>Vinayak Trivedi (22BCE0521)</p>
          <p>Anjali Ghuge (22BCE0641)</p>
          <p>Divija V Agarwal (22BDS0329)</p>
          <p>Aastik Narang (22BCE3152)</p>
          <p>Soumil Binhani (22BDS0275)</p>
          <p>Himanshu Shekhar (22BBS0070)</p>
          <p>Sharvika S (22BEC0226)</p>
          <p>Stuti Kothari (21BIT0331)</p>
          <p>Dan Anderson (21BCE3545)</p>

          <p className="font-bold text-xl text-orange-600">Bolt Committee</p>
          <p>
            <strong>Soosan Shabnam</strong> (21BCE0172)
          </p>
          <p>
            <strong>Satyam Ashutosh Rai</strong> (21BCE2087)
          </p>
          <p>
            <strong>Jeet Kanodia</strong> (21BIT0636)
          </p>
          <p>Anand Rajaram (21BCI0068)</p>
          <p>Mayhul Jindal (21BCE0300)</p>
          <p>Kartik Gupta (21BCI0194)</p>
          <p>Shiva Raj Nair (21BCE0195)</p>
          <p>Hemanth Kumar Singh (21BCE2520)</p>
          <p>Adhiraj Singh Cheema (21BCI0365)</p>
          <p>Rupanjana Choudhury (21BCI0376)</p>
          <p>Utkarsh Rai (21BDS0180)</p>
          <p>Srisha Deepak Poddar (21BCI0015)</p>
          <p>Spandan Kumar (21BCE0301)</p>
          <p>Theresa Jacob (21BCE2130)</p>
          <p>Niranjana Boby (21BCI0375)</p>
          <p>Pavan Balaji (21BCE2141)</p>
          <p>Saharsh Bhansali (21BCI0028)</p>
          <p>Sara Hasan (21BCE3972)</p>
          <p>Devansh Kuldeep Mishra (21BCE2742)</p>
          <p>Achintya Gupta (21BCE2730)</p>
          <p>Pramiti Shekhar Singh (21BCE3479)</p>
          <p>Taniya Hussain (21BKT0083)</p>
          <p>Shaurya Sharma (21BCE0510)</p>

          <p className="font-bold text-xl text-orange-600">
            Conference Committee
          </p>
          <p>
            <strong>Ishank Goel (21BEC0435)</strong>
          </p>
          <p>
            <strong>Shalavya Agrawal (21BCE2454)</strong>
          </p>
          <p>
            <strong>Gamak Sahani (21BCE0889)</strong>
          </p>
          <p>Shivam Sharma (21BEC0367)</p>
          <p>Mudit Sultania (21BBS0232)</p>
          <p>Ashish Hallur (21BEC0883)</p>
          <p>Hridya Menon P (22BCE2526)</p>
          <p>R Tharun (22BCE0634)</p>
          <p>Devika A (22BCE0836)</p>
          <p>Krishna V Nair (22BEE0260)</p>
          <p>Ashwani Kumar Moudgil (22BCE0553)</p>
          <p>M Sri Pranav (22BCI0088)</p>
          <p>Shambhavi Shreya (22BCE2516)</p>
          <p>Ujjval Raghavendra L (22BEC0464)</p>
          <p>Lakshmi K R (22BEC0110)</p>
          <p>Shruthi P (22BEC0154)</p>
          <p>Subham Agarwal (22BCE2092)</p>
          <p>Vansh Gupta</p>
          <p>Priyanshi Jain</p>
          <p>Atharv Gupta (21BCE0316)</p>
          <p>Swathi M (21BBT0152)</p>
          <p>Ishaan</p>
          <p>Manan Shah (22BCE0618)</p>
          <p>Vrinda Bajaj (22BCE2251)</p>
          <p>T Aasritha (22MIC0111)</p>
          <p>Meenakshi R S (22MIC0056)</p>
          <p>Kritika Bansal (22BDS0304)</p>
          <p>Aprajita Nandkeuliar (22BCE0544)</p>
          <p>Shreyashi Deb Roy (22BCE0470)</p>
          <p>Aryan Arora (21BIT0253)</p>
          <p>Aksh Ranjan (21BCI0071)</p>

          <p className="font-bold text-xl text-orange-600">
            Marketing Committee
          </p>
          <p>
            <strong>Tanisha Chandak (21BCE3105)</strong>
          </p>
          <p>Muskan Arora (21BIT0145)</p>
          <p>Soha Jagtap (21BCB0259)</p>

          <p className="font-bold text-xl text-orange-600">Events Committee</p>
          <p>
            <strong>Shalavya Agarwal</strong> (21BCE2454)
          </p>
          <p>Adya Sawhney (21BCE3391)</p>
          <p>Sachin Raghuvanshi (21BIT0223)</p>
          <p>Priyanshi Shah (21BIT0378)</p>
        </div>
      );
    }
    return null;
  };

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
        <Image src={DownArrow} alt="" className="rotate-180" />
      </a>
      <div className="mx-4 md:mx-20 lg:mx-20">
        <h1 className="text-3xl font-bold text-[#E15326] pt-20">
          Organizing Committee
        </h1>
        <div className="flex flex-col md:flex-row lg:flex-row justify-between">
          <div>
            <h1 className="text-2xl font-bold text-[#E15326] pt-10 pb-5">
              Chief Patron
            </h1>
            <p className="text-lg">
              <span className="font-bold">Dr. G. Viswanathan,</span> Chancellor,
              VIT
            </p>
            <h1 className="text-2xl font-bold text-[#E15326] pt-10 pb-5">
              Patrons
            </h1>
            <p className="text-lg">
              <span className="font-bold">Mr. Sankar Viswanathan,</span> Vice
              President, VIT{" "}
            </p>
            <p className="text-lg">
              <span className="font-bold">Dr. Sekar Viswanathan,</span> Vice
              President, VIT{" "}
            </p>
            <p className="text-lg">
              <span className="font-bold">Dr. G.V. Selvam,</span> Vice
              President, VIT
            </p>
            <p className="text-lg">
              <span className="font-bold">Dr. Rambabu Kodali,</span> Vice -
              Chancellor, VIT
            </p>
            <p className="text-lg">
              <span className="font-bold">Dr. Partha Sharathi Mallick, </span>
              Pro-Vice Chancellor, VIT, Vellore
            </p>
            <p className="text-lg">
              <span className="font-bold">Dr. Jayabarathi T,</span> Registrar,
              VIT
            </p>
            <h1 className="text-2xl font-bold text-[#E15326] pt-10 pb-5">
              Organising Chair
            </h1>
            <p className="text-lg">
              <span className="font-bold">Dr. Sumathy S,</span> Professor &
              Dean, SCORE, VIT, Vellore
            </p>
            <h1 className="text-2xl font-bold text-[#E15326] pt-10 pb-5">
              Organising Co-chair
            </h1>
            <p className="text-lg">
              <span className="font-bold">Dr. Dhinesh Babu. L. D,</span>{" "}
              Professor & Associate Dean, SCORE, VIT, Vellore
            </p>
            <h1 className="text-2xl font-bold text-[#E15326] pt-10 pb-5">
              Conference Chair
            </h1>
            <p className="text-lg">
              <span className="font-bold">Dr. John Singh K,</span> Professor,
              SCORE, VIT, Vellore
            </p>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#E15326] pt-10 pb-5">
              Organising Secretary
            </h1>
            <p className="text-lg">
              <span className="font-bold">Dr. Shynu P. G,</span> Associate
              Professor, SCORE, VIT, Vellore
            </p>
            <h1 className="text-2xl font-bold text-[#E15326] pt-10 pb-5">
              Publication Chair
            </h1>
            <p className="text-lg">
              <span className="font-bold">Dr. Vijayan R,</span> Professor,
              SCORE, VIT, Vellore
            </p>
            <h1 className="text-2xl font-bold text-[#E15326] pt-10 pb-5">
              Publication Co-chairs
            </h1>
            <p className="text-lg">
              <span className="font-bold">Dr. Meenatchi S,</span> Associate
              Professor, SCORE, VIT, Vellore
            </p>
            <p className="text-lg">
              <span className="font-bold">Dr. Brindha K,</span> Associate
              Professor, SCORE, VIT, Vellore
            </p>
            <p className="text-lg">
              <span className="font-bold">Dr. Malathy E,</span> Assistant
              Professor, SCORE, VIT, Vellore
            </p>
            <h1 className="text-2xl font-bold text-[#E15326] pt-10 pb-5">
              Finance Chair
            </h1>
            <p className="text-lg">
              <span className="font-bold">Dr. Gunasekaran G, </span>
              Associate Professor, SCORE, VIT, Vellore
            </p>
            <h1 className="text-2xl font-bold text-[#E15326] pt-10 pb-5">
              Finance Co-chair
            </h1>
            <p className="text-lg">
              <span className="font-bold">Dr. Prasanna. S,</span> Associate
              Professor, SCORE, VIT, Vellore
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row space-x-0 md:space-x-10 lg:space-x-10 py-10 font-semibold">
          <button
            className={`px-10 py-5 ${
              selectedButton === "Information Technology"
                ? "bg-[#111042] text-white"
                : "bg-[#46C6ED] text-black hover:bg-[#9CE8FF]"
            } text-xl font-medium w-full transition-all md:w-[40rem] lg:w-[40rem] my-5 rounded-md`}
            onClick={() => handleClick("Information Technology")}
          >
            Organizing Committee
          </button>
          <button
            className={`px-10 py-5 ${
              selectedButton === "Communication Engineering"
                ? "bg-[#111042] text-white"
                : "bg-[#46C6ED] text-black hover:bg-[#9CE8FF]"
            } text-xl font-medium w-full transition-all md:w-[40rem] lg:w-[40rem] my-5 rounded-md`}
            onClick={() => handleClick("Communication Engineering")}
          >
            International Advisory
          </button>
          <button
            className={`px-10 py-5 ${
              selectedButton === "Computer Engineering"
                ? "bg-[#111042] text-white"
                : "bg-[#46C6ED] text-black hover:bg-[#9CE8FF]"
            } text-xl font-medium w-full  transition-all md:w-[40rem] lg:w-[40rem] my-5 rounded-md`}
            onClick={() => handleClick("Computer Engineering")}
          >
            National Advisory
          </button>
          <button
            className={`px-10 py-5 ${
              selectedButton === "Electronics Engineering"
                ? "bg-[#111042] text-white "
                : "bg-[#46C6ED] text-black hover:bg-[#9CE8FF]"
            } text-xl font-medium w-full  transition-all md:w-[40rem] lg:w-[40rem] my-5 rounded-md`}
            onClick={() => handleClick("Electronics Engineering")}
          >
            Technical Committee
          </button>
          <button
            className={`px-10 py-5 ${
              selectedButton === "Student Committee"
                ? "bg-[#111042] text-white "
                : "bg-[#46C6ED] text-black hover:bg-[#9CE8FF]"
            } text-xl font-medium w-full  transition-all md:w-[40rem] lg:w-[40rem] my-5 rounded-md`}
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
