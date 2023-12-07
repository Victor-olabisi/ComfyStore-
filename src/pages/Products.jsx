import customFetch from "../utils";
import { useLoaderData } from "react-router-dom";
import { Filter, ProductContainer, PaginationContainer } from "../component";
const url = "/products";

export const loader = async () => {
  const { data } = await customFetch.get(url);
  const products = data.data;
  const meta = data.meta;

  return { products, meta };
};

const Products = () => {
  const { products, meta } = useLoaderData();
  console.log(products);
  console.log(meta);
  return (
    <>
      <Filter />
      <ProductContainer />
      <PaginationContainer />
    </>
  );
};
export default Products;
