import { Form, redirect } from "react-router-dom";
import FormInput from "./FormInput";
import Btn from "./Btn";
import customFetch from "../utils";
import { clearcart } from "../features/cart/cartSlice";
import { formatPrice } from "../utils";
import { toast } from "react-toastify";
export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const { name, address } = data;
    const user = store.getState().userState.user;
    const { cartItems, orderTotal, numItemsInCart } =
      store.getState().cartState;
    const info = {
      name,
      address,
      chargeTotal: orderTotal,
      orderTotal: formatPrice(orderTotal),
      cartItems,
      numItemsInCart,
    };
    try {
      const response = await customFetch.post(
        "/orders",
        { data: info },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      store.dispatch(clearcart());
      toast.success("order placed successfully");
      return redirect("/orders");
    } catch (error) {
      console.log(error);

      const errorMessage =
        error?.response?.data?.error?.message ||
        "there was an error placing your order";
        toast.error(errorMessage)
      return null;
    }
    // return null;
  };

const CheckoutForm = () => {
  return (
    <Form className="grid gap-y-6 mb-8 " method="POST">
      <h3 className="text-2xl capitalize">shipping information</h3>
      <FormInput type={"text"} name="name" labelText={"first name"} />
      <FormInput type="text" name="address" labelText="address" />
      <Btn text="place your order" />
    </Form>
  );
};
export default CheckoutForm;
