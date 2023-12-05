import customFetch from "../utils";
import FeaturedProduct from "../component/FeaturedProduct";
import { Btn } from "../component";
import { Link } from "react-router-dom";

export const loader = async () => {
  const url = "/products?featured=true";

  const response = await customFetch.get(url);
  // console.log(response);
  const products = response.data.data;
  return { products };
};

const Landing = () => {
  return (
    <section>
      <div>
        <div>
          <h1 className="text-5xl font-bold">
            We are changing the way people shop
          </h1>
          <p className="leading-8 mt-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
            accusantium eos nam, quam optio provident recusandae iste ratione,
            reiciendis similique perferendis vel totam omnis a!
          </p>
          <Link to={"/products"} className=" mt-8 inline-block ">
          
            <Btn text={"our product"} displayType={'btn-block'}/>
          </Link>
        </div>
      </div>
      <FeaturedProduct />
    </section>
  );
};
export default Landing;
