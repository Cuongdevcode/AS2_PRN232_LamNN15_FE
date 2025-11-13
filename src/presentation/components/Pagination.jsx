/**
 * Pagination Component
 * Handles page navigation
 */
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];
  const maxPagesToShow = 5;

  let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

  if (endPage - startPage < maxPagesToShow - 1) {
    startPage = Math.max(1, endPage - maxPagesToShow + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className="flex items-center justify-center space-x-2 my-8">
      {/* Previous button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 rounded-lg border-2 border-orange-500 text-orange-600 font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-orange-500 hover:text-white transition"
      >
        ← Trước
      </button>

      {/* Page numbers */}
      {startPage > 1 && (
        <>
          <button
            onClick={() => onPageChange(1)}
            className="px-4 py-2 rounded-lg border-2 border-gray-300 text-gray-700 hover:border-orange-500 hover:text-orange-600 transition"
          >
            1
          </button>
          {startPage > 2 && <span className="text-gray-400">...</span>}
        </>
      )}

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 rounded-lg border-2 font-semibold transition ${
            currentPage === page
              ? 'bg-orange-600 text-white border-orange-600'
              : 'border-gray-300 text-gray-700 hover:border-orange-500 hover:text-orange-600'
          }`}
        >
          {page}
        </button>
      ))}

      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && <span className="text-gray-400">...</span>}
          <button
            onClick={() => onPageChange(totalPages)}
            className="px-4 py-2 rounded-lg border-2 border-gray-300 text-gray-700 hover:border-orange-500 hover:text-orange-600 transition"
          >
            {totalPages}
          </button>
        </>
      )}

      {/* Next button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 rounded-lg border-2 border-orange-500 text-orange-600 font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-orange-500 hover:text-white transition"
      >
        Sau →
      </button>
    </div>
  );
};

export default Pagination;
