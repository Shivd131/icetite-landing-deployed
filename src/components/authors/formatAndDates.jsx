import React from "react";

const formatAndDates = () => {
  return (
    <div>
      <h1 className="text-[#111042] text-xl md:text-2xl lg:text-3xl font-semibold pt-12">
        Download Paper Format
      </h1>
      <div className="bg-[#FF794F] h-0.5 w-[20vw] mb-4"></div>
      <div className="flex flex-col md:flex-row lg:flex-row space-x-0 md:space-x-8 lg:space-x-8 space-y-4 md:space-y-0 lg:space-y-0 py-3">
        <button className="border-2 border-white bg-[#111042] text-white py-2 px-4 text-base sm:text-lg font-semibold rounded-md shadow z-40 cursor-pointer transition-all w-full md:w-96 lg:w-96">
          Microsoft Word Template
        </button>
        <button className="border-2 border-white bg-[#111042] text-white py-2 px-4 text-base sm:text-lg font-semibold rounded-md shadow z-40 cursor-pointer transition-all w-full md:w-96 lg:w-96">
          Latex Template
        </button>
      </div>
      <h1 className="text-[#111042] text-xl md:text-2xl lg:text-3xl font-semibold pt-12">
        Important Dates
      </h1>
      <div className="bg-[#FF794F] h-0.5 w-[20vw] mb-4"></div>
      <div className="text-2xl flex flex-col py-3 space-y-4">
        <p>Full Paper Submission</p>
        <p>Notification of Acceptance</p>
        <p>Camera Ready Paper Submission</p>
        <p>Conference Dates</p>
      </div>
    </div>
  );
};

export default formatAndDates;
