const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const isPreviousDisabled = currentPage === 1;
    const isNextDisabled = currentPage === totalPages;
  
    return (
      <div className="flex justify-center gap-4 p-4">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={isPreviousDisabled}
          className="btn"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={isNextDisabled}
          className="btn"
        >
          Next
        </button>
      </div>
    );
  };
  
  export default Pagination;
  