import React from "react";

const GridOfButtons = ({ buttonData }) => {
  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 m-16">
      {buttonData.map((item, index) => (
        <button
          key={index}
          className={
            (index < 3 ? "bg-green-700 hover:bg-green-900" : "bg-[#DE6D1B] hover:bg-[#8D4510]") +
            " transition-all p-4 sm:p-2 md:p-3 text-white text-center font-bold justify-center"
          }
          onClick={() => handleClick(item.url)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default GridOfButtons;
