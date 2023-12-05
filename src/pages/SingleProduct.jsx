import { Link, useLoaderData } from "react-router-dom"
import { formatPrice } from "../utils"
import customFetch from "../utils"
export const loader = async ({ params }) => {
  console.log(params);
  const response = await customFetch.get(`/products/${params.id}`);
  const product = response.data.data
  return {product}
}




const SingleProduct = () => {
  const { product } = useLoaderData()
  const {title, color, image,company, price, description} = product.attributes
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
          <p>{formatPrice({ price })}</p>
          <p className="mt-4 leading-8">{description}</p>
        
          <Link to={'/cart'}>
            {" "}
            <button className="btn btn-secondary uppercase mt-6">
              add to bag
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
export default SingleProduct