import { formatPrice } from "../utils";
import { Link, useLoaderData } from "react-router-dom";

const ProductList = () => {
  const { products } = useLoaderData();
  return (
    <div>
      {products.map((product) => {
        const { image, title, company, price } = product.attributes;
        return (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className="flex flex-col  sm:flex-row card  shadow-xl group  hover:shadow-2xl bg-base-100 transition duration-300 p-8 mb-4 gap-y-4"
          >
            <img
              src={image}
              alt=""
              className="h-32 w-32 rounded-lg group-hover:scale-105 transition duration-300"
            />
            <div className="ml-0 sm:ml-16">
              <h2 className="capitalize font-bold tracking-wider text-lg">
                {title}
              </h2>
              <h4 className="capitalize text-neutral-content">{company}</h4>
            </div>
            <p className="sm:ml-auto">{formatPrice(price)}</p>
          </Link>
        );
      })}
    </div>
  );
};
export default ProductList;
