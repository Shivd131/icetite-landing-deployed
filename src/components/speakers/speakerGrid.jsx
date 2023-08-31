import React from "react";
import SpeakerImg from "./../../../public/images/speakers/speaker.png";
import Image from "next/image";

import Anupriya from "./../../../public/anupriya_microsoft.png";
import Dr1 from "./../../../public/Dr 1.png";
import Dr2 from "./../../../public/Dr 2.png";
import Ganesan from "./../../../public/Ganesan Narayanasamy 1.png";
import Korhan from "./../../../public/Korhan.png";
import Rahul from "./../../../public/Rahul.png";
import Tokunbo from "./../../../public/Tokunbo.png";
import Vladimir from "./../../../public/vladimir-brusic.png";

const data = [
  {
    id: 1,
    image: Dr1,
    name: "Dr. Zvi Galil",
    department: "Professor and Dean, College of Computing",
    college: "Georgia Institute of Technology, Atlanta, USA",
  },
  {
    id: 2,
    image: Vladimir,
    name: "Dr. Vladimir Brusic",
    department: "Professor, Computer Science",
    college: "University of Nottingham, China",
  },
  {
    id: 3,
    image: Tokunbo,
    name: "Dr. Tokunbo Ogunfunmi",
    department: "Department of Electrical and Computer Engineering",
    college: "Santa Clara University, USA",
  },
  {
    id: 4,
    image: Dr2,
    name: "Dr. Biju Issac",
    department: "Department of Computer, Information Sciences",
    college: "Northumbria University,NewCastle, UK",
  },
  {
    id: 5,
    image: Ganesan,
    name: "Ganesan Narayanasamy",
    department: "Senior Technical Computing Solution Manager",
    college: "IBM, USA",
  },
  {
    id: 6,
    image: Korhan,
    name: "Dr. Korhan Cengiz",
    department: "Faculty of Engineering",
    college: "University of Fujairah, UAE",
  },
  {
    id: 7,
    image: SpeakerImg,
    name: "Dr. Srinivas Talabattula",
    department: "Dept. Of Electrical Communication Engineering",
    college: "Indian Institute of Science, Bangalore"
  },
  {
    id: 8,
    image: Anupriya,
    name: "Anupriya Singh",
    department: "",
    college: "Microsoft",
  },
  {
    id: 9,
    image: Rahul,
    name: "Dr. Rahul Sharad Gaikwad",
    department: "",
    college: "Amazon",
  },

];

const SpeakerGrid = () => {
  return (
      <div className="flex flex-col items-center md:items-stretch justify-between">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-between pb-20">
      {data.map((item) => (
        <div
          key={item.id}
          className="p-4 bg-[#111042] w-full text-white flex flex-col items-center text-center rounded-3xl"
        >
          <Image src={item.image} alt={item.name} className="w-60 rounded-3xl"/>
          <div className="pt-3 pb-2">
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="text-lg py-1">{item.department}</p>
            <p className="text-lg">{item.college}</p>
          </div>
        </div>
      ))}

    </div>
  <p className="text-2xl text-[#ea0763] flex flex-col items-center pb-10 font-bold">and many more...</p>
      </div>
        );
};

export default SpeakerGrid;
