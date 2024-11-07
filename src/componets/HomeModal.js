import React, { useState } from "react";

const HomeModal = ({ onClose, data }) => {
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [editableData, setEditableData] = useState(data); // State to store edited data
  const [isResultChecked, setIsResultChecked] = useState(false); // Track if result check is done

  // Calculate the number of pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Pagination handler
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);

    // Clear the "bangla" field when page changes
    const updatedData = editableData.map((item) => ({
      ...item,
      bangla1: "", // Reset "bangla" field on page change
    }));
    setEditableData(updatedData);
  };

  // Helper to create pagination range
  const generatePaginationRange = () => {
    const paginationRange = [];
    const maxPageButtons = 7; // Max number of pages to show at a time

    const halfRange = Math.floor(maxPageButtons / 2);

    let startPage = Math.max(1, currentPage - halfRange);
    let endPage = Math.min(totalPages, currentPage + halfRange);

    if (currentPage - startPage < halfRange) {
      endPage = Math.min(
        totalPages,
        endPage + (halfRange - (currentPage - startPage))
      );
    }
    if (endPage - currentPage < halfRange) {
      startPage = Math.max(
        1,
        startPage - (halfRange - (endPage - currentPage))
      );
    }

    for (let i = startPage; i <= endPage; i++) {
      paginationRange.push(i);
    }

    return paginationRange;
  };

  const currentData = editableData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle the edit of Bangla column
  const handleBanglaChange = (e, index) => {
    const updatedData = [...editableData];
    updatedData[index].bangla1 = e.target.value; // Update the Bangla text
    setEditableData(updatedData); // Set the new data state
  };

  // Result button click handler
  const handleResultClick = () => {
    // Only check the current page data for matching
    const updatedData = [...editableData];
    const currentData = updatedData.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );

    // Loop over the current page data and check the result
    currentData.forEach((item, idx) => {
      const updatedBangla = item.bangla1 ? item.bangla1.trim().toLowerCase() : "";
      const originalTitle = item.title ? item.title.trim().toLowerCase() : "";

      if (updatedBangla === originalTitle) {
        updatedData[(currentPage - 1) * itemsPerPage + idx].resultStatus =
          "correct";
      } else {
        updatedData[(currentPage - 1) * itemsPerPage + idx].resultStatus =
          "incorrect";
      }
    });

    setEditableData(updatedData);
    setIsResultChecked(true);
  };

  // Get background color for text field based on result
  const getTextFieldStyle = (editedValue, originalValue, resultStatus) => {
    if (!isResultChecked) return "";

    return resultStatus === "correct"
      ? "bg-green-300"
      : resultStatus === "incorrect"
      ? "bg-red-300"
      : "";
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-20 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-5/6 max-w-5xl">
        <div className="flex justify-between -mt-4">
          <h3 className="text-xl font-semibold mb-4">Vocabulary Exam</h3>
         
          <button
  className="px-4 bg-blue-500 text-white rounded flex items-center"
  onClick={onClose}
>
  <span className="material-icons mr-2">close</span> {/* Material Icon */}
  Close
</button>
        </div>

        {/* Table inside modal */}
        <table className="table-auto w-full border-collapse mb-4 mt-2">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2 text-left">SL No</th>
              <th className="border border-gray-300 p-2 text-left">
              Bangla
              </th>
              <th className="border border-gray-300 p-2 text-left"> Vocabulary</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item, idx) => (

              <tr key={item.id} className={idx % 2 === 0 ? "bg-gray-100" : ""}>
                {console.log("item",item)}
                <td className="border border-gray-300 p-2">
                  {(currentPage - 1) * itemsPerPage + idx + 1}
                </td>
                <td className="border border-gray-300 p-2">{item?.bangla}</td>
                <td className="border border-gray-300 p-2">
                  {/* Input for Bangla column with dynamic styling */}
                  <input
                    type="text"
                    value={item.bangla1}
                    onChange={(e) =>
                      handleBanglaChange(
                        e,
                        (currentPage - 1) * itemsPerPage + idx
                      )
                    }
                    className={`border px-2 py-1 w-full ${getTextFieldStyle(
                      item.bangla1,
                      item.title,
                      item.resultStatus
                    )}`}
                  />
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

          {/* Generate pagination range */}
          {generatePaginationRange().map((page, idx) => (
            <button
              key={idx}
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
          <div className="flex justify-center mt-4"></div>
        </div>

        {/* Result Button */}
        <div className="flex justify-between -mt-14">
          <p></p>
          <div className="flex justify-center mt-4">
            <button
              className="px-6 py-2 bg-blue-500 text-white rounded flex items-center"
              onClick={handleResultClick}
            >
              {/* Material Icon */}
              <span className="material-icons mr-2">check_circle</span>{" "}
              {/* Check Icon */}
              Check Results
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeModal;
