import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; // Tổng số trang

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={`px-3 py-2 ${
            currentPage === i ? "bg-blue-500 text-white" : "bg-gray-300"
          } cursor-pointer`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </li>
      );
    }

    return pageNumbers;
  };

  return (
    <nav className="flex items-center justify-center mt-4">
      <ul className="flex">
        <li
          className={`px-3 py-2 ${
            currentPage === 1 ? "bg-blue-500 text-white" : "bg-gray-300"
          } cursor-pointer`}
          onClick={handlePreviousPage}
        >
          <ChevronLeft />
        </li>
        {renderPageNumbers()}
        <li
          className={`px-3 py-2 ${
            currentPage === totalPages
              ? "bg-blue-500 text-white"
              : "bg-gray-300"
          } cursor-pointer`}
          onClick={handleNextPage}
        >
          <ChevronRight />
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
