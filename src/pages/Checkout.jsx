import { useSelector } from "react-redux"
import { CartTotals, CheckoutForm, SectionTitle } from "../component"
import { toast } from "react-toastify"
import { redirect } from "react-router-dom"


export const loader = (store) => () => {
  const user = store.getState().userState.user
  if (!user) {
    toast.warning('you can only access this page when you are logged in')
    return redirect('/login')
  }
  return null
}


const Checkout = () => {
  const { cartTotal } = useSelector((store) => store.cartState)
  if (cartTotal === 0) {
    return <SectionTitle text='checkout is empty'/>
  }


  return (
    <>
      <CheckoutForm />
      <CartTotals/>
    </>
  )
}
export default Checkout