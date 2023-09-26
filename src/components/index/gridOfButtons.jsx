import React from "react";

const GridOfButtons = ({ buttonData }) => {
  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 m-16">
      {buttonData.map((item, index) =>
        item.label !== "PAPER SUBMISSION" ? (
          <button
            key={index}
            className="bg-[#DE6D1B] hover:bg-[#8D4510] transition-all p-4 sm:p-2 md:p-3 text-white text-center font-bold justify-center"
            onClick={() => handleClick(item.url)}
          >
            {item.label}
          </button>
        ) : (
          <a
            href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FicETITE2024"
            target="_blank"
            className="bg-green-700 hover:bg-green-900 transition-all p-4 sm:p-2 md:p-4 text-white cursor-pointer text-center font-bold"
          >
            {item.label}
          </a>
        )
      )}
    </div>
  );
};

export default GridOfButtons;
