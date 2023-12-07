import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";
import customFetch from "../utils";
import { useState } from "react";
import { generateAmountOption } from "../utils";



export const loader = async ({ params }) => {
  console.log(params);
  const response = await customFetch.get(`/products/${params.id}`);
  const product = response.data.data;
  return { product };
};

const SingleProduct = () => {
  const { product } = useLoaderData();
  const [amount, setAmount] = useState(0)
  // console.log(product);
  const { title, colors, image, company, price, description } =
    product.attributes;
  const [productColor, setProductColor] = useState(colors[0]);
  const dollarPrice = formatPrice(parseInt(price))
  const handleChange = (e) => {
    setAmount(e.target.value)
  }
  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to={"/products"}>product</Link>
          </li>
        </ul>
      </div>
      <div className="mt-6 grid  gap-y-6 md:grid-cols-2 md:gap-x-16">
        <img
          src={image}
          alt={title}
          className="h-96 w-96 object-cover rounded-lg  md:w-full"
        />
        <div>
          <h2 className="text-3xl font-bold tracking-wide capitalize">
            {title}
          </h2>
          <h3 className="text-2xl font-bold text-neutral-content mt-2">
            {company}
          </h3>
          <p>{dollarPrice}</p>
          <p className="mt-4 leading-8">{description}</p>
          <div className="mt-6">
            <p className="text-md font-semibold tracking-wider capitalize">
              colors
            </p>
            {colors.map((color) => {
              return (
                <div
                  className={`badge h-6 w-6 ${
                    productColor === color &&
                    "border-2 border-secondary mt-4 first:ml-2"
                  }`}
                  key={color}
                  style={{ backgroundColor: color }}
                  onClick={() => {
                    setProductColor(color);
                  }}
                ></div>
              );
            })}
          </div>
          <div className="mt-2 form-control width-md max-w-xs">
            <label htmlFor="" className="label">
              {" "}
              <h4 className="text-md tracking-wider capitalize font-semibold">
                amount
              </h4>
            </label>

            <select
              value={amount}
              id=""
              className="select select-secondary select-bordered"
              onChange={handleChange}
            >
             {generateAmountOption(20)}
            </select>
          </div>
          <Link to={"/cart"}>
            {" "}
            <button className="btn btn-secondary uppercase mt-6">
              add to bag
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default SingleProduct;
