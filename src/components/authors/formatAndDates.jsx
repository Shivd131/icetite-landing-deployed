import React from "react";

const FormatAndDates = () => {
    return (
        <div>
            <h1 className="text-[#111042] text-xl md:text-2xl lg:text-3xl font-semibold pt-12">
                Download Paper Format
            </h1>
            <div className="bg-[#FF794F] h-0.5 w-[20vw] mb-4"></div>
            <div className="flex flex-col md:flex-row lg:flex-row space-x-0 md:space-x-8 lg:space-x-8 space-y-4 md:space-y-0 lg:space-y-0 py-3">
                <a className="border-2 border-white bg-[#111042] hover:bg-[#090926] text-center text-white py-2 px-4 text-base sm:text-lg font-semibold rounded-md shadow z-40 cursor-pointer transition-all w-full md:w-96 lg:w-96" target="_blank" href="https://docs.google.com/document/d/1zi81EFII2v7mcJbpOxd4FNTG7p3uwbMU/edit?usp=sharing&ouid=111259705956702533874&rtpof=true&sd=true">
                    Microsoft Word Template
                </a>
                <a className="border-2 border-white bg-[#111042] hover:bg-[#090826] text-center text-white py-2 px-4 text-base sm:text-lg font-semibold rounded-md shadow z-40 cursor-pointer transition-all w-full md:w-96 lg:w-96" target="_blank" href="https://www.ieee.org/conferences/publishing/templates.html">
                    Latex Template
                </a>
            </div>
            <h1 className="text-[#111042] text-xl md:text-2xl lg:text-3xl font-semibold pt-12">
                Important Dates
            </h1>
            <div className="bg-[#FF794F] h-0.5 w-[20vw] mb-4"></div>
            <div className="py-3 overflow-x-auto">
                <table className="w-full border border-blue-500">
                    <tbody>
                    <tr>
                        <th className="border border-blue-500 px-4 py-2 text-left">Event</th>
                        <th className="border border-blue-500 px-4 py-2 text-left">Date</th>
                    </tr>
                    <tr>
                        <td className="border border-blue-500 px-4 py-2">Full Paper Submission</td>
                        <td className="border border-blue-500 px-4 py-2">05 November 2023</td>
                    </tr>
                    <tr>
                        <td className="border border-blue-500 px-4 py-2">Notification of Acceptance</td>
                        <td className="border border-blue-500 px-4 py-2">04 December 2023</td>
                    </tr>
                    <tr>
                        <td className="border border-blue-500 px-4 py-2">Camera Ready Paper Submission</td>
                        <td className="border border-blue-500 px-4 py-2">06 January 2024</td>
                    </tr>
                    <tr>
                        <td className="border border-blue-500 px-4 py-2">Conference Dates</td>
                        <td className="border border-blue-500 px-4 py-2">22 & 23 February 2024</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FormatAndDates;
