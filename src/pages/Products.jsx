import customFetch from "../utils";
import { useLoaderData } from "react-router-dom";
import { Filter, ProductContainer, PaginationContainer } from "../component";
const url = "/products";

export const loader = async ({ request }) => {
  // console.log(request);
  const params = Object.fromEntries([... new URL(request.url).searchParams.entries()])
  // console.log(params);
  const { data } = await customFetch.get(url,{params});
  const products = data.data;
  const meta = data.meta;

  return { products, meta,params };
};

const Products = () => {
  const { products, meta } = useLoaderData();
  const { params } = useLoaderData()
  return (
    <>
      <Filter />
      <ProductContainer />
      <PaginationContainer />
    </>
  );
};
export default Products;
