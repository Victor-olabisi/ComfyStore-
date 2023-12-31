import { useSelector ,useDispatch} from "react-redux";
import { generateAmountOption } from "../utils";
import { formatPrice } from "../utils";
import { Link, } from "react-router-dom";


import {removeItem} from '../features/cart/cartSlice.js'
const CartList = () => {
  const { cartItems } = useSelector((state) => state.cartState);
const dispatch = useDispatch()
  return (
    <div className="grid gap-y-8">
      {cartItems.map((item) => {
        const { image, amount, title, company, productColor, price, cartID,  } = item;
        console.log(price);
        return (
          <article className="border-b-4 pb-4 border-base-300 last:border-none grid md:grid-cols-4 gap-x-16 " key={cartID}>
            <img
              src={image}
              alt=""
              className="h-24 w-24 rounded-xl md:h-32 md:w-32"
            />
            <div className="mt-4 md:mt-0">
              <h3 className=" font-bold text-md capitalize">{title}</h3>
              <p className="text-neutral-content">{company}</p>
              <p className="flex items-center gap-x-2 mt-3">
                <span className="">color: </span>
                <span
                  className="h-4 w-4 inline-block rounded-full"
                  style={{ backgroundColor: productColor }}
                ></span>
              </p>
            </div>
            <div className="form-control">
              <label htmlFor="amount" className="label">
                <span className="label-text capitalize">amount</span>
              </label>
              <select
                name='amount'
                defaultValue={amount}
                id=""
                className="select select-sm max-w-xs md:w-16 border-base-300 border-4"
              >
                {generateAmountOption(5)}
              </select>
              <p className="link no-underline text-primary pt-2" onClick={()=>dispatch(removeItem(cartID))}>remove</p>
            </div>
            <p className="mt-4 md:mt-0 md:ml-14">{formatPrice(price)}</p>
          </article>
        );
      })}
    </div>
  );
};
export default CartList;
