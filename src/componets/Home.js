import React, { useState } from "react";
import data from "./VocabData"; // Import the data from data.js
import HomeModal from "./HomeModal";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRow, setSelectedRow] = useState(null); // Track the selected row
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
  const itemsPerPage = 10;

  // Calculate the number of pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Slice data for the current page
  const currentData = data.slice(
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
    // You can also change the page if you want. For example, go to page 2:
    setCurrentPage(2);
  };

  // Close Modal Handler
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container bg-white ml-auto mr-auto">
      <div className="flex justify-between">
        <p>Vocab</p>
        <p
          className="cursor-pointer text-blue-500"
          onClick={handleExamClick} // Handle click to open modal and change page
        >
          Exam
        </p>
      </div>

      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="border border-black text-xs print:!border-black">SL No</th>
            <th className="border border-black text-xs print:!border-black">Vocabulary</th>
            <th className="border border-black text-xs print:!border-black">Bangla</th>
          </tr>
        </thead>
        <tbody className="print:mt-4 p-1 ">
          {currentData.map((p, idx) => (
            <tr
              key={idx}
              className={selectedRow === idx ? "bg-blue-100" : ""} // Apply background color if selected
            >
              <td className="border border-black print:!border-black">
                <div className="text-center text-xs">
                  <span className="block">{(currentPage - 1) * itemsPerPage + idx + 1}</span>
                </div>
              </td>

              {/* Add onClick to Vocabulary cell to set row color */}
              <td
                className="border border-black print:!border-black text-left cursor-pointer"
                onClick={() => handleRowClick(idx)}
              >
                <div className="text-xs font-normal">{p?.title}</div>
              </td>

              <td className="border border-black print:!border-black text-left">
                <div className="text-xs font-normal">{p?.bangla}</div>
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
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={`px-3 py-1 rounded ${currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
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

      {/* Modal */}
      {isModalOpen && (
        <HomeModal data={data} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

export default Home;
