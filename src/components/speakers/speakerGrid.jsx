import React from "react";
import SpeakerImg from "./../../../public/images/speakers/speaker.png";
import Image from "next/image";

import Anupriya from "./../../../public/anupriya_microsoft.png";
import Dr1 from "./../../../public/Dr 1.png";
import Dr2 from "./../../../public/Dr 2.png";
import Ganesan from "./../../../public/Ganesan Narayanasamy 1.png";

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
    image: Dr2,
    name: "Dr. Biju Issac",
    department: "Department of Computer &amp; Information Sciences",
    college: "Northumbria University,NewCastle, UK",
  },
  {
    id: 3,
    image: Ganesan,
    name: "Ganesan Narayanasamy",
    department: "Senior Technical Computing Solution Manager",
    college: "IBM, USA",
  },
  {
    id: 4,
    image: Anupriya,
    name: "Anupriya Singh",
    department: "",
    college: "Microsoft",
  },
  {
    id: 5,
    image: SpeakerImg,
    name: "Dr. Srinivas Talabattula",
    department: "Dept. Of Electrical Communication Engineering",
    college: "Indian Institute of Science, Bangalore"
  }
];

const SpeakerGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-between pb-20">
      {data.map((item) => (
        <div
          key={item.id}
          className="p-4 bg-[#111042] w-80 text-white flex flex-col items-center text-center"
        >
          <Image src={item.image} alt={item.name} className="w-60"/>
          <div className="pt-8 pb-4">
            <h2 className="text-3xl font-semibold">{item.name}</h2>
            <p className="text-lg py-3">{item.department}</p>
            <p className="text-xl">{item.college}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SpeakerGrid;
