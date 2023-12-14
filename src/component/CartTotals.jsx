import { useSelector } from "react-redux"
import { formatPrice } from "../utils"


const CartTotals = () => {
  const { cartTotal, orderTotal, shipping, tax } = useSelector((state) => state.cartState)
  return (
    <div className="card bg-base-300">
      <div className="card-body">
        <p className="flex justify-between border-b pb-2 border-base-300 text-xs">
          <span>sub totals</span>
          <span>{formatPrice(cartTotal)}</span>
        </p>
        <p className="flex justify-between border-b border-base-300 text-xs pb-2">
          <span>shipping</span>
          <span>{formatPrice(shipping)}</span>
        </p>
        <p className="flex justify-between border-b border-base-300 text-xs pb-2">
          <span>tax</span>
          <span>{formatPrice(tax)}</span>
        </p>
        <p className="flex justify-between text-lg pt-4">
          <span>order Total</span>
          <span>{formatPrice(orderTotal)}</span>
        </p>
      </div>
    </div>
  );
}
export default CartTotals