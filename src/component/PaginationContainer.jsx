import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const PaginationContainer = () => {
  const { meta } = useLoaderData();
  const { page, pageCount } = meta.pagination;
  const { search, pathname } = useLocation();
  const navigate = useNavigate();
  console.log(search);
  console.log(pathname);
  // console.log(meta);

  const pageNumber = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  });
  const handleChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams}`);
  };
  if (pageCount < 2) return null;
  return (
    <div className="flex justify-end mt-12">
      <div className="join">
        <button
          className="join-item btn btn-xs sm:btn-sm border-none"
          onClick={() => {
            let newPage = page - 1;
            if (newPage < 1) {
              newPage = pageCount;
            }
            handleChange(newPage);
          }}
        >
          prev
        </button>
        {pageNumber.map((pageNumber) => {
          return (
            <div
              className={`join-item  btn btn-xs sm:btn-sm ${
                page == pageNumber ? "bg-base-300 border-base-300" : ""
              }`}
              key={pageNumber}
              onClick={() => handleChange(pageNumber)}
            >
              {pageNumber}
            </div>
          );
        })}
        <button
          className="join-item btn-xs sm:btn-sm  "
          onClick={() => {
            let nextPage = page + 1;
            if (nextPage > pageCount) nextPage = 1;
            handleChange(nextPage);
          }}
        >
          next
        </button>
      </div>
    </div>
  );
};
export default PaginationContainer;
