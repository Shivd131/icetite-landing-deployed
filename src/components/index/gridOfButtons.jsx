import React from "react";

const GridOfButtons = ({ buttonData }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 m-16">
      {buttonData.map((item, index) => (
        <a
          key={index}
          href={
            index === 3
              ? "https://docs.google.com/document/d/1wOA1VCp99Ou5bmZmAaIIMWRomM2anSEF/edit?usp=sharing&ouid=116025341701836271433&rtpof=true&sd=true"
              : item.url
          }
          download={index === 3 ? "" : "template.docx"} 
          target="_blank" 
          className={
            (index === 3
              ? "bg-green-700 hover:bg-green-900"
              : index < 4
              ? "bg-green-700 hover:bg-green-900"
              : "bg-[#DE6D1B] hover.bg-[#8D4510]") +
            " transition-all p-4 sm:p-2 md:p-3 text-white text-center font-bold justify-center"
          }
        >
          {item.label}
        </a>
      ))}
    </div>
  );
};

export default GridOfButtons;
