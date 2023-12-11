import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};
const getCartFromLocalStorage = () => {
    const cart = localStorage.getItem('cart')
    if (cart) {
     return JSON.parse(localStorage.getItem("cart"));  
    } else {
      return  defaultState
    }
}
const cartSlice = createSlice({
  name: "cart",
  initialState: getCartFromLocalStorage,
  reducers: {
    addItem: (state, { payload }) => {
          const { product } = payload;
          console.log(product.amount);
      const item = state.cartItems.find((i) => {
        i.cartID === product.cartID;
      });
      if (item) {
        return (item.amount += product.amount);
      } else {
        state.cartItems.push(product);
      }
      state.numItemsInCart += product.amount;
      state.cartTotal += product.amount * product.price;
      state.tax = 0.1 * state.cartTotal;
          state.orderTotal = state.cartTotal = state.shipping = state.tax;
          localStorage.setItem('cart', JSON.stringify(state))
          toast.success('item added to cart')
      //   state.cartItems = payload.product;
      //  console.log(action.payload);
    },
  },
});
export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
