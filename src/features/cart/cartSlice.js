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
  return JSON.parse(localStorage.getItem('cart'))  || defaultState
  }
;
const cartSlice = createSlice({
  name: "cart",
  initialState: getCartFromLocalStorage,
  reducers: {
    addItem: (state, action) => {
      const { product } = action.payload;

      const item = state.cartItems.find((i) => i.cartID === product.cartID);
      if (item) {
        item.amount += product.amount;
      } else {
        state.cartItems.push(product);
      }
      state.numItemsInCart += product.amount;
      state.cartTotal += product.amount * product.price
     
    cartSlice.caseReducers.calculateTotals(state)
      toast.success("item added to cart");
    
    },
    removeItem:(state,action)=>{
       const cartID = action.payload
       console.log(cartID);
      const product = state.cartItems.find((item)=>item.cartID === cartID)
      state.cartItems= state.cartItems.filter((item)=> item.cartID !== cartID)
      state.numItemsInCart -= product.amount 
      cartSlice.caseReducers.calculateTotals(state)
      toast.error('item remove from cart')
    },
   calculateTotals:(state)=>{
     state.tax = 0.1 * state.cartTotal
      state.orderTotal = state.cartTotal + state.shipping + state.tax
      localStorage.setItem("cart", JSON.stringify(state));
   } 
  },
});
export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
