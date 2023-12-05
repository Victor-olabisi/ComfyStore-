import customFetch from "../utils"
import FeaturedProduct from "../component/FeaturedProduct";



export const loader = async () => {
const url = "/products?featured=true";

  const response = await customFetch.get(url)
  // console.log(response);
  const products = response.data.data
  return {products}
}



const Landing = () => {
  return (
    <div><FeaturedProduct/></div>
  )
}
export default Landing