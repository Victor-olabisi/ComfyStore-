import customFetch from "../utils";
import FeaturedProduct from "../component/FeaturedProduct";
import { Btn } from "../component";
import { Link } from "react-router-dom";
import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";

const carouselImages = [hero1, hero2, hero3, hero4];
export const loader = async () => {
  const url = "/products?featured=true";

  const response = await customFetch.get(url);
  const products = response.data.data;
  return { products };
};

const Landing = () => {
  return (
    <section>
      <div className="grid lg:grid-cols-2 gap-x-20">
        <div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight max-w-2xl">
            We are changing the way people shop
          </h1>
          <p className="leading-8 mt-10 text-lg max-w-xl"> 
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
            accusantium eos nam, quam optio provident recusandae iste ratione,
            reiciendis similique perferendis vel totam omnis a!
          </p>
          <Link to={"/products"} className=" mt-8 inline-block ">
          
            <Btn text={"our products"} displayType={'btn-block'}/>
          </Link>
        </div>
        <div className="hidden lg:carousel bg-neutral h-[28rem] p-4 gap-x-4 rounded-box carousel-center">
          {carouselImages.map((image) => {
            return <div className="carousel-item " key={image}>
              <img src={image} alt="" className=" object-cover rounded-box w-80" />
            </div>
          })}
        </div>
      </div>
      <FeaturedProduct />
    </section>
  );
};
export default Landing;
