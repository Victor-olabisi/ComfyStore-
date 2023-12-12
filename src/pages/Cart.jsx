import { Link } from "react-router-dom";
import { CartList, CartTotals,SectionTitle } from "../component"

import { useSelector } from "react-redux"
const Cart = () => {
  const { numItemsInCart } = useSelector((state) => state.cartState);
  const user =null
  if (numItemsInCart == 0) {
  return <SectionTitle text={'your cart is empty'}/>
}

  return (
    <>
      <SectionTitle text={"shopping cart"} />
      <div className="mt-12 grid gap-y-16 ">
        <div>
          <CartList />
        </div>
        <div>
          <CartTotals />
          {user ? (
            <link>
              <button className="btn btn-primary btn-block uppercase text-md mt-4 tracking-wide">
                proceed to checkout
              </button>
            </link>
          ) : (
            <Link to='/login'>
              {" "}
              <button className="btn btn-primary btn-block uppercase text-md mt-4 tracking-wide">
                please login
              </button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
export default Cart