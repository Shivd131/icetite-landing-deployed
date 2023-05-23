import React from "react";

const GridOfButtons = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-16">
      {items.map((item, index) => (
        <button
          key={index}
          className="bg-[#DE6D1B] p-4 sm:p-2 md:p-4 text-white text-center font-bold"
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default GridOfButtons;
