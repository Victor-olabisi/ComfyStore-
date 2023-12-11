
import { useLoaderData, useLocation } from "react-router-dom"



const PaginationContainer = () => {
  const { meta } = useLoaderData()
  const { page, pageCount } = meta.pagination
  const { search, pathname } = useLocation()
  console.log(search);
  console.log(pathname);
  // console.log(meta);

  const pageNumber = Array.from({ length: pageCount }, (_, index) => {
    return index + 1
  })
  const handleChange = (pageNumber) => { }
  if (pageCount < 2) return null
  return (
    <div className="flex justify-end mt-12">
      <div className="join">
        <button className="join-item btn btn-xs sm:btn-sm border-none">prev</button>
        {pageNumber.map((page) => {
          return (
            <div className="join-item  btn btn-xs sm:btn-sm" key={page}>
              {page}
            </div>
          );
        })}
        <button
          className="join-item btn-xs sm:btn-sm  "
          onClick={() => handleChange()}
        >
          next
        </button>
      </div>
    </div>
  );
}
export default PaginationContainer