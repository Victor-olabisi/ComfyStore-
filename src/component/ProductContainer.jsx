import { useLoaderData } from "react-router-dom"
import ProductsGrid from "./ProductsGrid";

// import {ProductsGrid} from './ProductsGrid'
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useState } from "react";
import ProductList from "./ProductList";

const ProductContainer = () => {
    const { meta } = useLoaderData()
    const total = meta.pagination.total;
    const [display, setDisplay] = useState('grid')

   const setActiveStyles = (pattern) => {
     return ` btn btn-circle btn-sm ${
       pattern === display
         ? "btn-primary text-primary-content"
         : "btn-ghost text-base-content"
     }`;
   };
  return (
    <>
      <header className="flex border-b-2 justify-between border-base-300 pb-5 items-center">
        <h4 className="font-semibold tracking-wide font-md capitalize">
          <span>{total}</span> product{total > 1 && "s"}{" "}
        </h4>
        <div className="flex gap-x-2">
          <span
            className={setActiveStyles("grid")}
            onClick={() => {
              setDisplay("grid");
            }}
          >
            <BsFillGridFill className="h-4 w-4" />
          </span>
          <span
            className={setActiveStyles("list")}
            onClick={() => {
              setDisplay("list");
            }}
          >
            <BsList className="h-4 w-4/6" />
          </span>
        </div>
      </header>
      {display === "grid" ? <ProductsGrid /> : <ProductList />}
    </>
  );
}
export default ProductContainer