import { Link, useLoaderData } from "react-router-dom"


const ProductsGrid = () => {
    const { products } = useLoaderData()
    console.log(products);
  return (
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">{products.map((product) => {
          const {id,title, price,image} = product.attributes
          return <Link key={id} className="card shadow-lg hover:shadow-2xl duration-300 w-full">
              <figure className="px-4 pt-4">
                  <img src={image} alt="" className="w-full h-64 md:h-48 object-cover rounded-xl" />
              </figure>
              <div className="text-center card-body items-center">
                  <h1 className=" capitalize card-title tracking-wider">{title}</h1>
                  <p className="text-secondary">{ price}</p>
</div>

          </Link>
      })}</div>
  )
}
export default ProductsGrid