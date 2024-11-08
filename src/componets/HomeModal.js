import { useState, useEffect } from "react";

const HomeModal = ({ onClose, data }) => {
  const itemsPerPage = 11;
  const [currentPage, setCurrentPage] = useState(1);
  const [editableData, setEditableData] = useState(data);
  const [isResultChecked, setIsResultChecked] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false); // New state for screen size check

  // Check for mobile screen width
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 640); // Check if width is 640px or below
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    const updatedData = editableData.map((item) => ({
      ...item,
      bangla1: "",
    }));
    setEditableData(updatedData);
  };

  const generatePaginationRange = () => {
    const paginationRange = [];
    const maxPageButtons = isMobileView ? 3 : 5; // Adjust max buttons for mobile
    const lastPage = totalPages;

    let startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
    let endPage = Math.min(totalPages, startPage + maxPageButtons - 1);

    if (endPage - startPage < maxPageButtons - 1) {
      startPage = Math.max(1, endPage - maxPageButtons + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      paginationRange.push(i);
    }

    // Add ellipsis and last page for mobile view if needed
    if (isMobileView && totalPages > 3) {
      if (!paginationRange.includes(lastPage)) {
        paginationRange.push("...");
        paginationRange.push(lastPage);
      }
    } else if (!paginationRange.includes(lastPage) && lastPage > 5) {
      paginationRange.push("...");
      paginationRange.push(lastPage);
    }

    return paginationRange;
  };

  const currentData = editableData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleBanglaChange = (e, index) => {
    const updatedData = [...editableData];
    updatedData[index].bangla1 = e.target.value;
    setEditableData(updatedData);
  };

  const handleResultClick = () => {
    const updatedData = [...editableData];
    const currentData = updatedData.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );

    currentData.forEach((item, idx) => {
      const updatedBangla = item.bangla1
        ? item.bangla1.trim().toLowerCase()
        : "";
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

  const getTextFieldStyle = (editedValue, originalValue, resultStatus) => {
    if (!isResultChecked) return "";

    return resultStatus === "correct"
      ? "bg-green-300"
      : resultStatus === "incorrect"
      ? "bg-red-300"
      : "";
  };

  return (
    <div  className={`fixed inset-0 bg-black bg-opacity-20 flex justify-center items-center z-50 ${
      isMobileView ? "w-full h-full" : ""
    }`}>
      {/*  className={`fixed inset-0 bg-black bg-opacity-20 flex justify-center items-center z-50 ${
    isMobileView ? "w-full h-full" : ""
  }`} */}
      <div className={`bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full sm:w-5/6 max-w-5xl ${
      isMobileView ? "h-full rounded-none" : ""
    }`}>
        <div className="flex justify-between items-center mb-4 -mt-4">
          <h3 className="text-xl font-semibold">Vocabulary Exam</h3>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded flex items-center"
            onClick={onClose}
          >
            <span className="material-icons mr-2">close</span>
            Close
          </button>
        </div>

        <table className="table-auto w-full border-collapse mb-4 mt-2">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2 text-left">S.N</th>
              <th className="border border-gray-300 p-2 text-left">Bangla</th>
              <th className="border border-gray-300 p-2 text-left">
                Vocabulary
              </th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item, idx) => (
              <tr key={item.id} className={idx % 2 === 0 ? "bg-gray-100" : ""}>
                <td className="border border-gray-300 text-center">
                  {(currentPage - 1) * itemsPerPage + idx + 1}
                </td>
                <td className="border border-gray-300 ">
                 
                  <p className="ml-2"> {item?.bangla}</p>
                  </td>
                <td className="border border-gray-300 ml-2">
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

        <div className="flex justify-center mt-4 space-x-2">
          <button
            className="px-3 py-1 bg-gray-300 rounded"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>

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
        </div>

        {/* <div className="flex mt-4 justify-center lg:justify-end lg:-mt-8">
          <button
            className="px-6 py-2 bg-blue-500 text-white rounded flex items-center"
            onClick={handleResultClick}
          >
            <span className="material-icons mr-2">check_circle</span> Check
            Results
          </button>
        </div> */}

<div className="flex mt-4 justify-center lg:justify-end lg:-mt-8">
  <button
    className="w-full md:w-[200px] px-6 py-2 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white font-medium rounded-md shadow-lg flex items-center justify-center"
    onClick={handleResultClick}
  >
    <span className="material-icons mr-2">check_circle</span> Check Results
  </button>
</div>

      </div>
    </div>
  );
};

export default HomeModal;
