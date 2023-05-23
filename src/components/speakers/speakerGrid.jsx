import React from "react";
import SpeakerImg from "./../../../public/images/speakers/speaker.png";
import Image from "next/image";

const data = [
  {
    id: 1,
    image: "image1.jpg",
    name: "John Doe",
    department: "Information Technology",
    college: "ABC University",
  },
  {
    id: 2,
    image: "image2.jpg",
    name: "Jane Smith",
    department: "Communication Engineering",
    college: "XYZ University",
  },
  {
    id: 3,
    image: "image2.jpg",
    name: "Jane Smith",
    department: "Communication Engineering",
    college: "XYZ University",
  },
  {
    id: 4,
    image: "image2.jpg",
    name: "Jane Smith",
    department: "Communication Engineering",
    college: "XYZ University",
  },
  {
    id: 5,
    image: "image2.jpg",
    name: "Jane Smith",
    department: "Communication Engineering",
    college: "XYZ University",
  },
  {
    id: 6,
    image: "image2.jpg",
    name: "Jane Smith",
    department: "Communication Engineering",
    college: "XYZ University",
  },
];

const SpeakerGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-between pb-20">
      {data.map((item) => (
        <div
          key={item.id}
          className="p-4 bg-[#111042] w-80 text-white flex flex-col items-center text-center"
        >
          <Image src={SpeakerImg} alt={item.name} className="w-64" />
          <div className="pt-8 pb-4">
            <h2 className="text-4xl font-semibold">{item.name}</h2>
            <p className="text-xl py-3">{item.department}</p>
            <p className="italic">{item.college}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SpeakerGrid;
