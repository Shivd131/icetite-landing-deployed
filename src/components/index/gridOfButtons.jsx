import React from "react";

const GridOfButtons = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 m-16">
      {items.map((item, index) => (
          item !== "PAPER SUBMISSION" ?
        <button
          key={index}
          className="bg-[#DE6D1B] hover:bg-[#8D4510] transition-all p-4 sm:p-2 md:p-3 text-white text-center font-bold justify-center"
          disabled={true}
        >
          {item}
        </button> : <a href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FicETITE2024" target="_blank"
                       className="bg-green-700 hover:bg-green-900 transition-all p-4 sm:p-2 md:p-4 text-white cursor-pointer text-center font-bold">
                {item}
              </a>
      ))}
    </div>
  );
};

export default GridOfButtons;
