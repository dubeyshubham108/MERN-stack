export default function Pagination ( 
    { goToNextPage,
     goToPrevPage,
     handlePageChange,
     noOfPages,
     currentPage }
    )  {
    return (
    <div>
    <div className="pagination-container">
    <button disabled={currentPage===0} className="page-number" onClick={() => goToPrevPage()}>◀️</button>
    {[...Array(noOfPages).keys()].map((n) => (
      <button
         className={"page-number " + (n === currentPage ? "active" : "")}
         key={n} onClick={() => handlePageChange(n) }>{n}
      </button>
    ))}
    <button disabled={currentPage===noOfPages-1} className="page-number" onClick={() => goToNextPage()}>▶️</button>
  </div>
  
    </div>
    );
};