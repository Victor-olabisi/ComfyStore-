import { useLoaderData } from "react-router-dom"
import ProductsGrid from "./ProductsGrid";
// import {ProductsGrid} from './ProductsGrid'

const ProductContainer = () => {
    const { meta } = useLoaderData()
    const total = meta.pagination.total;
    console.log(meta);
  return (
    <>
      <header className="flex border-b-2 border-base-300 pb-5">
        <h4 className="font-semibold tracking-wide font-md capitalize">
          <span>{total}</span> product{total > 1 && "s"}{" "}
        </h4>
          </header>
          <ProductsGrid/>
    </>
  );
}
export default ProductContainer