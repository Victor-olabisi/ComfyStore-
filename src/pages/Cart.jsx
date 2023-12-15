import { Link } from "react-router-dom";
import { CartList, CartTotals,SectionTitle } from "../component"

import { useSelector } from "react-redux"
const Cart = () => {
  const { numItemsInCart } = useSelector((state) => state.cartState);
  // const user = null
  const user = useSelector((state)=> state.userState.user)
  if (numItemsInCart == 0) {
  return <SectionTitle text={'your cart is empty'}/>
}

  return (
    <>
      <SectionTitle text={"shopping cart"} />
      <div className="mt-12 grid gap-y-16  md:!grid-cols-12 gap-x-10">
        <div className="md:col-span-8">
          <CartList />
        </div>
        <div className="md:col-span-4">
          <CartTotals />
          {user ? (
            <Link to='/checkout'>
              <button className="btn btn-primary btn-block uppercase text-md mt-4 tracking-wide">
                proceed to checkout
              </button>
            </Link>
          ) : (
            <Link to='/login'>
              
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