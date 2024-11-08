import React, { useState } from "react";
import data from "./VocabData"; // Import the data from data.js
import HomeModal from "./HomeModal";
import Tuqnology from "./Tuqnology";
import Footer from "./Footer";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRow, setSelectedRow] = useState(null); // Track the selected row
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const itemsPerPage = 20;

  // Filter data based on search term (before pagination)
  const filteredData = data.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.bangla.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate the number of pages based on the filtered data
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Slice the filtered data for the current page
  const currentData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Pagination handler
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Row selection handler
  const handleRowClick = (idx) => {
    setSelectedRow(idx); // Set the clicked row as selected
  };

  // Open Modal Handler (When Exam is clicked)
  const handleExamClick = () => {
    setIsModalOpen(true); // Open the modal
    setCurrentPage(2); // Example to change the page on exam click
  };

  // Close Modal Handler
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Pagination logic: Show 5 page numbers around the current page, with 1, 2, 3, 4, 5 and the last page
  const paginationRange = () => {
    let start = Math.max(currentPage - 2, 1);
    let end = Math.min(currentPage + 2, totalPages);

    // If we are near the start, adjust the range to show earlier pages
    if (currentPage <= 3) {
      end = Math.min(5, totalPages);
    }

    // If we are near the end, adjust the range to show the last pages
    if (currentPage >= totalPages - 2) {
      start = Math.max(totalPages - 4, 1);
    }

    const range = [];
    for (let i = start; i <= end; i++) {
      range.push(i);
    }

    // Add the last page to the pagination if it's not already in the range
    if (totalPages > 5 && !range.includes(totalPages)) {
      range.push(totalPages);
    }

    return range;
  };

  return (
    <div className="container bg-white ml-auto mr-auto">
      <Tuqnology />
      <br />
      <br />
      <br />
      
      <div className="text-center relative">
        <p className="uppercase font-bold text-lg text-black inline-block mb-2">
          Best Common Vocabulary
        </p>
        <svg
          className="absolute left-1/2 transform -translate-x-1/2 bottom-0"
          width="240"
          height="10"
          viewBox="0 0 240 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 5 C40 0, 80 10, 120 5 C160 0, 200 10, 240 5"
            stroke="url(#grad)"
            strokeWidth="2"
            fill="transparent"
          />
          <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#34d399" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Search input above the table */}
      {/* <div className="mb-16 -mt-6">
        <div className="flex justify-between">
          <p className="text-white">.</p>
          <button
            className="-mt-4 flex items-center justify-center gap-2 py-2 px-6 text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg shadow-lg hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-4 focus:ring-blue-400 transform transition-all duration-200 ease-in-out"
            onClick={handleExamClick}
          >
            <span className="material-icons">school</span>
            <span className="text-lg font-semibold">Exam</span>
          </button>
        </div>
      </div> */}

<div className="md:mb-16 sm:mb-6 -mt-6">
  <div className="flex flex-col md:flex-row md:justify-between items-center">
    <p className="text-white hidden md:block">.</p>
    <button
      className="self-end mt-12 md:mt-0 flex items-center justify-center gap-2 py-2 px-6 text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg shadow-lg hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-4 focus:ring-blue-400 transform transition-all duration-200 ease-in-out"
      onClick={handleExamClick}
    >
      <span className="material-icons">school</span>
      <span className="text-lg font-semibold">Exam</span>
    </button>
  </div>
</div>


      {/* Search input */}
      <div className="flex justify-between items-center mb-6 mt-2">
        <p className="text-xl font-semibold">Search Vocabulary</p>
        <div className="relative w-full md:w-1/2">
          <input
            type="text"
            className="py-2 pl-10 pr-4 border-2 rounded-full w-full bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
            placeholder="Search Vocabulary or Bangla"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 4a7 7 0 1113.93 13.93 7 7 0 01-13.93-13.93z"
              />
            </svg>
          </span>
        </div>
      </div>

      {/* Vocabulary Table */}
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="border border-black text-xs print:!border-black w-10">
              <div className="w-10 text-center">SL No</div>
            </th>
            <th className="border border-black text-xs print:!border-black">
              Vocabulary
            </th>
            <th className="border border-black text-xs print:!border-black">
              Synonym
            </th>
            <th className="border border-black text-xs print:!border-black">
              Bangla
            </th>
          </tr>
        </thead>
        <tbody className="print:mt-4 p-1">
          {currentData.map((p, idx) => (
            <tr
              key={idx}
              className={`${
                selectedRow === idx
                  ? "bg-blue-100"
                  : idx % 2 === 0
                  ? "bg-gray-100"
                  : "bg-white"
              }`} // Apply background color if selected or alternate between gray and white
            >
              <td className="border border-black print:!border-black">
                <div className="text-center text-xs w-10">
                  <span className="block">
                    {(currentPage - 1) * itemsPerPage + idx + 1}
                  </span>
                </div>
              </td>
              <td
                className={`border border-black print:!border-black text-left cursor-pointer ${
                  p?.title === "IELTS" ? "bg-green-500 font-bold" : ""
                }`}
                onClick={() => handleRowClick(idx)}
              >
                <div className="ml-6">{p?.title}</div>
              </td>
              <td className={`border border-black print:!border-black text-left cursor-pointer`}>
                <div className="text-xs font-normal">{}</div>
              </td>
              <td className={`border border-black print:!border-black text-left cursor-pointer`}>
                <div className="text-xs font-normal ml-6">{p?.bangla}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-4 space-x-2">
        <button
          className="px-3 py-1 bg-gray-300 rounded"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {paginationRange().map((page) => (
          <button
            key={page}
            className={`px-3 py-1 rounded ${
              currentPage === page ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
           
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}
        <button
          className="px-3 py-1 bg-gray-300 rounded"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      {/* Modal Component */}
      {isModalOpen &&   <HomeModal data={data} onClose={() => setIsModalOpen(false)} />}
     <br></br>
     <br></br>
     <br></br>
    </div>
  );
};

export default Home;
